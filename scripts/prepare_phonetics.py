"""Copy supplied artwork and extract only the audio used by the V3 preview.

The original Anki package is preserved byte for byte. No card templates are run.
Uses Python's stdlib and Node 24's built-in Zstandard decoder.
"""
from pathlib import Path
import hashlib, json, re, shutil, sqlite3, subprocess, tempfile, zipfile

PROJECT = Path(__file__).resolve().parent.parent
ROOT = PROJECT / 'site'
ASSETS = ROOT / 'assets/audio/phonetics'
REPORTS = PROJECT / 'docs/maintenance/generated'
ASSETS.mkdir(parents=True, exist_ok=True)
REPORTS.mkdir(parents=True, exist_ok=True)
deck = ROOT / 'assets/downloads/anki/phonetics.apkg'

def varint(data, index):
    value = shift = 0
    while True:
        byte = data[index]; index += 1
        value |= (byte & 127) << shift
        if byte < 128:
            return value, index
        shift += 7

def fields(data):
    index = 0
    while index < len(data):
        tag, index = varint(data, index)
        if tag & 7 == 0:
            value, index = varint(data, index)
        elif tag & 7 == 2:
            length, index = varint(data, index)
            value = data[index:index + length]; index += length
        else:
            raise ValueError('Unexpected media manifest field')
        yield tag >> 3, value

def decompress(data, directory):
    src = directory / 'compressed'; dst = directory / 'decoded'
    src.write_bytes(data)
    subprocess.run(['node', '-e', "const fs=require('node:fs'),z=require('node:zlib');fs.writeFileSync(process.argv[2],z.zstdDecompressSync(fs.readFileSync(process.argv[1])));", str(src), str(dst)], check=True)
    return dst.read_bytes()

with tempfile.TemporaryDirectory() as temporary, zipfile.ZipFile(deck) as archive:
    temp = Path(temporary)
    database = temp / 'collection.sqlite'
    database.write_bytes(decompress(archive.read('collection.anki21b'), temp))
    connection = sqlite3.connect(str(database))
    connection.create_collation('unicase', lambda a, b: (a.casefold() > b.casefold()) - (a.casefold() < b.casefold()))
    manifest = decompress(archive.read('media'), temp)
    media = {}
    for index, (_, entry) in enumerate(fields(manifest)):
        props = dict(fields(entry))
        media[props[1].decode()] = (str(index), props[3])
    pairs = []
    choices = [('sheep', 'ship'), ('back', 'pack')]
    for left, right in choices:
        for (raw,) in connection.execute('SELECT flds FROM notes WHERE mid=1775096657346'):
            f = raw.split('\x1f')
            if f[1] == left and f[4] == right:
                pairs.append({'type': '单词听辨', 'options': [{'word': f[1], 'ipa': f[2], 'source': re.search(r'\[sound:(.*?)\]', f[5])[1]}, {'word': f[4], 'ipa': f[3], 'source': re.search(r'\[sound:(.*?)\]', f[6])[1]}]})
                break
    for (raw,) in connection.execute('SELECT flds FROM notes WHERE mid=1775097076057'):
        f = raw.split('\x1f')
        if f[0] == 'f_vs_v':
            pairs.append({'type': '音素听辨', 'options': [{'word': f[1], 'ipa': '清辅音', 'source': re.search(r'\[sound:(.*?)\]', f[3])[1]}, {'word': f[2], 'ipa': '浊辅音', 'source': re.search(r'\[sound:(.*?)\]', f[4])[1]}]})
    for pair_index, pair in enumerate(pairs):
        for index, option in enumerate(pair['options']):
            archive_name, expected_hash = media[option['source']]
            audio = decompress(archive.read(archive_name), temp)
            assert hashlib.sha1(audio).digest() == expected_hash
            name = f'pair-{pair_index + 1}-{index + 1}.mp3'
            (ASSETS / name).write_bytes(audio)
            option['audio'] = 'assets/audio/phonetics/' + name
    assert len(pairs) == 3
    record = {'date': '2026-10-06', 'deck': {'file': 'assets/downloads/anki/phonetics.apkg', 'bytes': deck.stat().st_size, 'sha256': hashlib.sha256(deck.read_bytes()).hexdigest(), 'notes': connection.execute('SELECT count(*) FROM notes').fetchone()[0], 'cards': connection.execute('SELECT count(*) FROM cards').fetchone()[0], 'types': dict(connection.execute('SELECT t.name, count(*) FROM notes n JOIN notetypes t ON t.id=n.mid GROUP BY n.mid')), 'review_log_rows': connection.execute('SELECT count(*) FROM revlog').fetchone()[0]}, 'pairs': pairs, 'images': 'User-supplied screenshots, preserved unchanged in site/assets/images/phonetics', 'method_source': 'Fluent Forever chapter 3 Sound Play, user-supplied chapter notes and resources/research/英语自学方法论.md', 'audio_note': 'Six audio files extracted from the supplied deck; each SHA-1 verified against the package manifest. No synthetic replacement audio.'}
    (REPORTS / 'phonetics.json').write_text(json.dumps(record, ensure_ascii=False, indent=2) + '\n')
    (ROOT / 'scripts/phonetics-data.js').write_text('const phoneticsPairs = ' + json.dumps(pairs, ensure_ascii=False) + ';\n')
    print(json.dumps({'cards': record['deck']['cards'], 'notes': record['deck']['notes'], 'audio_files': 6, 'deck_bytes': deck.stat().st_size}))
