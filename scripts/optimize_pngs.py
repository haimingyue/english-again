"""Create full-resolution WebP copies of large PNGs; keep source PNGs intact.

Requires scripts/requirements.txt. Run normally to rebuild, or --check to verify
the generated files and report. Screenshots, notes and covers use lossless WebP.
The two hero illustrations use quality 94, with a 40 dB RGB PSNR quality floor.
"""
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
import argparse
import hashlib
import json
import math

from PIL import Image, ImageChops, ImageStat

ROOT = Path(__file__).resolve().parent.parent
IMAGES = ROOT / 'site/assets/images'
REPORT = ROOT / 'docs/maintenance/generated/png-webp.json'
MIN_BYTES = 100 * 1024
ILLUSTRATIONS = {'site/assets/images/home/learning-scene.png',
                 'site/assets/images/vocabulary/word-library.png'}


def sha256(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def prepare_icons(check=False):
    """Use platform-sized PNG icons instead of downloading the large master."""
    records = []
    folder = ROOT / 'public/brand'
    with Image.open(folder / 'compass-logo.png') as source:
        for name, size in [('favicon-32.png', 32), ('apple-touch-icon.png', 180)]:
            destination = folder / name
            expected = source.convert('RGBA').resize((size, size), Image.Resampling.LANCZOS)
            if not check:
                expected.save(destination, 'PNG', optimize=True)
            with Image.open(destination) as actual:
                if actual.size != expected.size or ImageChops.difference(
                    expected, actual.convert('RGBA')
                ).getbbox(alpha_only=False) is not None:
                    raise ValueError(f'Platform icon differs from resized master: {destination}')
            records.append({'path': destination.relative_to(ROOT).as_posix(),
                            'width': size, 'height': size, 'bytes': destination.stat().st_size,
                            'sha256': sha256(destination)})
    return records


def verify_image(source, destination, lossless):
    with Image.open(source) as before, Image.open(destination) as after:
        before.load()
        after.load()
        if after.format != 'WEBP' or before.size != after.size:
            raise ValueError(f'Format or dimensions changed: {source}')
        a, b = before.convert('RGBA'), after.convert('RGBA')
        if ImageChops.difference(a.getchannel('A'), b.getchannel('A')).getbbox():
            raise ValueError(f'Transparency changed: {source}')
        exact = ImageChops.difference(a, b).getbbox(alpha_only=False) is None
        if lossless and not exact:
            raise ValueError(f'Lossless pixels differ: {source}')
        rms = ImageStat.Stat(ImageChops.difference(a.convert('RGB'), b.convert('RGB'))).rms
        mse = sum(value ** 2 for value in rms) / 3
        psnr = 10 * math.log10(255 ** 2 / mse) if mse else None
        if not lossless and psnr is not None and psnr < 40:
            raise ValueError(f'Quality below 40 dB PSNR: {source} ({psnr:.2f})')
        return {'width': a.width, 'height': a.height, 'pixel_exact': exact,
                'rgb_psnr_db': round(psnr, 3) if psnr is not None else None}


def prepare(source):
    relative = source.relative_to(ROOT).as_posix()
    destination = source.with_suffix('.webp')
    lossless = relative not in ILLUSTRATIONS
    quality = 75 if lossless else 94  # For lossless WebP, quality controls effort.
    with Image.open(source) as image:
        image.save(destination, 'WEBP', lossless=lossless, quality=quality,
                   method=4 if lossless else 6, exact=True)
    verification = verify_image(source, destination, lossless)
    if destination.stat().st_size >= source.stat().st_size:
        raise ValueError(f'WebP did not reduce file size: {source}')
    record = {'source': source.relative_to(ROOT).as_posix(),
              'webp': destination.relative_to(ROOT).as_posix(),
              'lossless': lossless, 'quality': quality,
              'png_bytes': source.stat().st_size, 'webp_bytes': destination.stat().st_size,
              'png_sha256': sha256(source), 'webp_sha256': sha256(destination),
              **verification}
    print(f'{relative}: {record["png_bytes"]} -> {record["webp_bytes"]} bytes'
          f' ({"pixel exact" if lossless else str(verification["rgb_psnr_db"]) + " dB"})', flush=True)
    return record


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true')
    args = parser.parse_args()
    sources = sorted(p for folder in (IMAGES, ROOT / 'public')
                     for p in folder.rglob('*.png') if p.stat().st_size >= MIN_BYTES)
    if args.check:
        report = json.loads(REPORT.read_text())
        if prepare_icons(check=True) != report['icons']:
            raise ValueError('Platform icon hashes differ from the report')
        records = report['images']
        if {p.relative_to(ROOT).as_posix() for p in sources} != {r['source'] for r in records}:
            raise ValueError('Large PNG inventory differs from the report; rebuild WebP copies')
        for record in records:
            source, destination = ROOT / record['source'], ROOT / record['webp']
            if sha256(source) != record['png_sha256'] or sha256(destination) != record['webp_sha256']:
                raise ValueError(f'Image hash changed: {source}')
            verified = verify_image(source, destination, record['lossless'])
            if any(verified[key] != record[key] for key in verified):
                raise ValueError(f'Quality verification changed: {source}')
        print(f'Verified {len(records)} full-resolution WebP images and original PNG hashes.')
    else:
        with ThreadPoolExecutor(max_workers=3) as pool:
            records = list(pool.map(prepare, sources))
        before = sum(r['png_bytes'] for r in records)
        after = sum(r['webp_bytes'] for r in records)
        report = {'minimum_png_bytes': MIN_BYTES,
                  'policy': 'Full original dimensions and transparency; lossless screenshots/notes/covers; quality 94 hero illustrations with RGB PSNR >= 40 dB; original PNGs preserved.',
                  'png_bytes': before, 'webp_bytes': after,
                  'saved_percent': round((1 - after / before) * 100, 2),
                  'images': records, 'icons': prepare_icons()}
        REPORT.parent.mkdir(parents=True, exist_ok=True)
        REPORT.write_text(json.dumps(report, ensure_ascii=False, indent=2) + '\n')
        print(f'Total: {len(records)} images, {before} -> {after} bytes ({report["saved_percent"]}% smaller).')


if __name__ == '__main__':
    main()
