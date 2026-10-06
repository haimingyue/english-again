"""Check local website references and preserved media, optionally refresh inventory.

Python 3.9+ standard library only. External URLs and historical source records
are not treated as local dependencies. Dynamic UI paths need browser validation.
"""
from collections import defaultdict
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import argparse
import hashlib
import json
import re
import sys
import os

ROOT = Path(__file__).resolve().parent.parent
SITE = ROOT/'site'
MEDIA = {'.png','.jpg','.jpeg','.webp','.svg','.mp3','.apkg','.epub','.csv'}
URL_ATTRIBUTES = {'src','href','poster','data-src','data-full','data-fallback'}

class Page(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.ids = []
        self.urls = []
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        for name, value in attrs:
            if name == 'id':
                self.ids.append(value)
            if name in URL_ATTRIBUTES and value:
                self.urls.append(value)

def source_files():
    """Exclude build dependencies and generated browser evidence from source inventory."""
    excluded = {".git", "node_modules", ".venv", ".nuxt", ".output", ".cache", ".data", "coverage", "playwright-report", "test-results"}
    for folder, dirs, names in os.walk(ROOT):
        dirs[:] = [d for d in dirs if d not in excluded and Path(folder)/d != ROOT/"design/qa"]
        for name in names:
            yield Path(folder)/name

def digest(path):
    h = hashlib.sha256()
    with path.open('rb') as f:
        for block in iter(lambda:f.read(1024*1024),b''):
            h.update(block)
    return h.hexdigest()

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--write-manifest', action='store_true')
    args = parser.parse_args()
    errors, references = [], defaultdict(set)
    pages = {p:Page(p.read_text()) for folder in [SITE,ROOT/'design/archive'] for p in folder.rglob('*.html')}

    def check_url(owner, url, base):
        if not url or '${' in url or url.startswith(('data:','mailto:','javascript:','tel:','//')):
            return
        parsed = urlsplit(url)
        if parsed.scheme or parsed.netloc:
            return
        path = unquote(parsed.path)
        dest = (SITE/path.lstrip('/') if path.startswith('/') else base/path).resolve() if path else owner
        if owner.is_relative_to(SITE) and not dest.is_relative_to(SITE):
            errors.append(f'{owner.relative_to(ROOT)}: runtime dependency escapes site/: {url}')
        if not dest.exists():
            errors.append(f'{owner.relative_to(ROOT)}: missing {url}')
            return
        if dest.is_relative_to(ROOT):
            references[str(dest.relative_to(ROOT))].add(str(owner.relative_to(ROOT)))
        if parsed.fragment and dest in pages and unquote(parsed.fragment) not in pages[dest].ids:
            errors.append(f'{owner.relative_to(ROOT)}: missing anchor {url}')

    for p,page in pages.items():
        if len(page.ids) != len(set(page.ids)):
            errors.append(f'{p.relative_to(ROOT)}: duplicate HTML ids')
        for url in page.urls:
            check_url(p,url,p.parent)
    for p in SITE.rglob('*'):
        if p.suffix not in {'.html','.js','.mjs','.css','.json'}:
            continue
        text = p.read_text()
        if 'data:image/' in text and ';base64,' in text:
            errors.append(f'{p.relative_to(ROOT)}: embedded bitmap should be a file')
        for url in re.findall(r'''["'`](assets/[^"'`\s<>]+)["'`]''',text):
            if not url.endswith('/'):
                check_url(p,url,SITE)
        for url in re.findall(r'''url\(["']?([^\s\)"']+)["']?\)''',text):
            check_url(p,url,p.parent)
        for url in re.findall(r'''\bfrom\s+["']([^"']+)["']''',text):
            check_url(p,url,p.parent)
        for url in re.findall(r'''fetch\(["']([^"']+)["']''',text):
            check_url(p,url,SITE)
    for p in source_files():
        if p.suffix != '.json':
            continue
        try:
            json.loads(p.read_text())
        except ValueError as exc:
            errors.append(f'{p.relative_to(ROOT)}: invalid JSON: {exc}')

    migration = json.loads((ROOT/'docs/maintenance/file-migration-2026-10-06.json').read_text())
    preserved, origins, hashes = 0, defaultdict(list), {}
    for item in migration['files']:
        if not item['destination']:
            continue
        origins[item['destination']].append(item['path'])
        target = ROOT/item['destination']
        if not target.exists():
            errors.append(f'Migration destination missing: {item["destination"]}')
        elif Path(item['path']).suffix in MEDIA:
            actual = hashes.setdefault(item['destination'],digest(target))
            if actual != item['sha256']:
                errors.append(f'Media bytes changed: {item["path"]} -> {item["destination"]}')
            preserved += 1
    media = []
    for p in sorted(source_files()):
        # Design aliases may point to a canonical public asset; count it once.
        if p.is_file() and not p.is_symlink() and p.suffix.lower() in MEDIA:
            path = str(p.relative_to(ROOT))
            sha = hashes.get(path) or digest(p)
            media.append({'path':path,'type':p.suffix[1:],'bytes':p.stat().st_size,'sha256':sha,'original_paths':origins[path],'referenced_by':sorted(references[path]),'site_url':str(p.relative_to(SITE)) if p.is_relative_to(SITE) else None})
    duplicate_groups = defaultdict(list)
    for entry in media:
        duplicate_groups[entry['sha256']].append(entry['path'])
    duplicates = [v for v in duplicate_groups.values() if len(v)>1]
    if duplicates:
        errors.append(f'Duplicate media: {duplicates}')
    report = {'date':'2026-10-06','site_pages':sum(p.is_relative_to(SITE) for p in pages),'archive_pages':sum(not p.is_relative_to(SITE) for p in pages),'referenced_files':len(references),'preserved_original_media_entries':preserved,'unique_media_files':len(media),'media_bytes':sum(x['bytes'] for x in media),'duplicates':duplicates,'errors':sorted(set(errors)),'scope':'Local file URLs, anchors, literal JS asset paths, module imports, JSON syntax, original media hashes. External services and template-generated paths require separate checks.'}
    if args.write_manifest:
        (ROOT/'resources/asset-manifest.json').write_text(json.dumps({'date':'2026-10-06','path_base':'project root; site_url is relative to site/','assets':media},ensure_ascii=False,indent=2)+'\n')
    (ROOT/'docs/maintenance/verification-2026-10-06.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
    print(json.dumps(report,ensure_ascii=False,indent=2))
    return bool(errors)

if __name__ == '__main__':
    sys.exit(main())
