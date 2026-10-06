"""Rebuild previews from local original screenshots. Requires Pillow."""
from pathlib import Path
import json
from PIL import Image

PROJECT = Path(__file__).resolve().parent.parent
OUT = PROJECT / 'site/assets/images/tools'
REPORT = PROJECT / 'docs/maintenance/generated/tools.json'

def main():
    report = []
    sources = sorted((OUT / 'originals').glob('*.png'))
    if len(sources) != 12:
        raise ValueError(f'Expected 12 screenshots, found {len(sources)}')
    for source in sources:
        with Image.open(source) as original:
            preview = original.convert('RGB')
            preview.thumbnail((1680, 1200))
            dest = OUT / (source.stem + '.webp')
            preview.save(dest, 'WEBP', quality=89, method=6)
            small = preview.copy()
            small.thumbnail((360, 240))
            small.save(OUT / (source.stem + '-thumb.webp'), 'WEBP', quality=82, method=6)
        report.append({'name':source.stem, 'source':str(source.relative_to(PROJECT)), 'original_bytes':source.stat().st_size, 'preview_bytes':dest.stat().st_size})
    REPORT.parent.mkdir(parents=True, exist_ok=True)
    REPORT.write_text(json.dumps(report, ensure_ascii=False, indent=2)+'\n')
    print('Prepared 12 screenshot previews. App icon kept unchanged.')

if __name__ == '__main__':
    main()
