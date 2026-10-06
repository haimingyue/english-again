"""Inspect supplied decks without running templates; preserve original downloads."""
from pathlib import Path
import json,zipfile,sqlite3,tempfile,subprocess,hashlib,shutil,re
PROJECT=Path(__file__).resolve().parent.parent; ROOT=PROJECT/'site'; OUT=ROOT/'assets/audio/vocabulary'
REPORTS=PROJECT/'docs/maintenance/generated'; REPORTS.mkdir(parents=True,exist_ok=True)
OUT.mkdir(parents=True,exist_ok=True)
records=[]
for name in ['coca-30000.apkg', 'phrases.apkg', 'wordbook.apkg']:
 p=ROOT/'assets/downloads/anki'/name
 target=p.name
 with zipfile.ZipFile(p) as z,tempfile.TemporaryDirectory() as t:
  d=Path(t);n=next(n for n in ['collection.anki21b','collection.anki21','collection.anki2'] if n in z.namelist());data=z.read(n)
  if n.endswith('b'):
   (d/'in').write_bytes(data);subprocess.run(['node','-e',"const f=require('fs'),z=require('zlib');f.writeFileSync(process.argv[2],z.zstdDecompressSync(f.readFileSync(process.argv[1])));",str(d/'in'),str(d/'db')],check=True)
  else:(d/'db').write_bytes(data)
  c=sqlite3.connect(str(d/'db'));c.create_collation('unicase',lambda a,b:(a.casefold()>b.casefold())-(a.casefold()<b.casefold()))
  rec={'source':str(p.relative_to(PROJECT)),'download':target,'bytes':p.stat().st_size,'sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'notes':c.execute('select count(*) from notes').fetchone()[0],'cards':c.execute('select count(*) from cards').fetchone()[0],'review_logs':c.execute('select count(*) from revlog').fetchone()[0]}
  if p.name.startswith('coca-'):
   models=json.loads(c.execute('select models from col').fetchone()[0]);m=next(iter(models.values()));fields=[f['name'] for f in m['flds']];rows=[r[0].split('\x1f') for r in c.execute('select flds from notes')]
   rec['fields']=fields;rec['nonempty_fields']={key:sum(bool(r[i].strip()) for r in rows) for i,key in enumerate(fields)};rec['unique_word_strings']=len(set(r[0] for r in rows));rec['bundled_media']=len(json.loads(z.read('media')))
   media=json.loads(z.read('media'));inverse={v:k for k,v in media.items()};samples=[]
   for word in ['inquiry','reveal','nasty']:
    r=next(r for r in rows if r[0]==word);note=dict(zip(fields,r));audio=re.search(r'\[sound:(.*?)\]',note['Audio'])
    if audio and audio[1] in inverse:(OUT/(word+'.mp3')).write_bytes(z.read(inverse[audio[1]]))
    samples.append({'word':word,'rank':note['COCA_Rank'],'ipa':note['IPA'],'meaning':note['Meaning'],'audio':'assets/audio/vocabulary/'+word+'.mp3','example_in_download':note['Example']})
   (ROOT/'scripts/vocabulary-data.js').write_text('const vocabularySamples = '+json.dumps(samples,ensure_ascii=False)+';\n')
  records.append(rec)
(REPORTS/'vocabulary.json').write_text(json.dumps({'decks':records,'screenshots':'User original screenshots copied unchanged; personal context examples differ from downloadable base deck','diagram':'ImageGen redraw of user sketch; no automatic collection claim'},ensure_ascii=False,indent=2)+'\n')
print(json.dumps(records,ensure_ascii=False,indent=2))
