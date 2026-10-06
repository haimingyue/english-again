from PIL import Image,ImageOps,ImageDraw
from pathlib import Path
root=Path('design/qa')
routes=['index','about','phonetics','grammar','vocabulary','reading','columns','fluent-forever','make-it-stick','little-prince','tools']
for width in [1440,390]:
 for start in range(0,11,3):
  selected=routes[start:start+3]; out=Image.new('RGB',(len(selected)*520,1700),'#eeeeee');d=ImageDraw.Draw(out)
  for j,r in enumerate(selected):
   d.text((j*520+8,5),r+' | reference - Nuxt',fill='black')
   for i,n in enumerate(['reference','nuxt']):
    p=root/f'{n}-{r}-{width}.png'
    if not p.exists():continue
    im=Image.open(p).convert('RGB'); im.thumbnail((255,1660));out.paste(im,(j*520+i*260,30))
  out.save(root/f'comparison-{width}-{start//3+1}.jpg',quality=90)
