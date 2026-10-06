"""Refresh weekly previews from local originals; preserve all other series.

Media paths in both catalogs are relative to site/. Requires Pillow.
"""
from pathlib import Path
import json
from PIL import Image

PROJECT = Path(__file__).resolve().parent.parent
SITE = PROJECT / 'site'
OUT = SITE / 'assets/images/columns'
CATALOG = PROJECT / 'resources/catalogs/course-catalog.json'
DATA = SITE / 'data/columns-data.json'

def main():
    catalog = json.loads(CATALOG.read_text())
    metadata = json.loads((PROJECT/'resources/catalogs/series-video-metadata.json').read_text())
    data = json.loads(DATA.read_text())
    report = []
    for i, video in enumerate(catalog['videos']):
        meta = metadata[i]
        assert meta.get('code') == 0
        assert video['title'] == meta['title'] or i >= 23
        name = 'intro' if i == 0 else ('week-03-04' if i == 3 else f"week-{video['weeks'][0]:02d}")
        if i == 1:
            source = thumb = OUT/'week-01.svg'
        else:
            source = OUT/'originals'/(name+'.png')
            thumb = OUT/(name+'.webp')
            with Image.open(source) as original:
                image = original.convert('RGB')
                image.thumbnail((960,720))
                image.save(thumb,'WEBP',quality=83,method=6)
        video.update(bvid=meta['bvid'], url='https://www.bilibili.com/video/'+meta['bvid']+'/', duration_seconds=meta['duration'], metadata_status='verified_bilibili_api', thumbnail=str(thumb.relative_to(SITE)), original=str(source.relative_to(SITE)))
        report.append({'file':str(thumb.relative_to(SITE)), 'source':str(source.relative_to(PROJECT)), 'originalBytes':source.stat().st_size, 'thumbnailBytes':thumb.stat().st_size})
    data['weekly'] = catalog['videos']
    for path, value in [(CATALOG,catalog),(DATA,data)]:
        path.write_text(json.dumps(value,ensure_ascii=False,indent=2)+'\n')
    report_path = PROJECT/'docs/maintenance/generated/columns.json'
    report_path.parent.mkdir(parents=True,exist_ok=True)
    report_path.write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
    print(f"Prepared {len(report)} weekly previews; preserved series: {', '.join(data)}")

if __name__ == '__main__':
    main()
