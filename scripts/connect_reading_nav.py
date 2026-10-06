from pathlib import Path
import re
p = Path(__file__).resolve().parent.parent / 'site'
for f in p.glob('*.html'):
    s = f.read_text()
    start = s.find('<nav id="nav"')
    end = s.find('</nav>', start)
    if start < 0:
        continue
    nav = s[start:end]
    if 'href="reading.html"' not in nav:
        nav = re.sub(r'(<a href="vocabulary.html"[^>]*>词汇</a>)', r'\1<a href="reading.html">阅读</a>', nav)
    nav = re.sub(r'href="(?:index.html)?#tools"', 'href="tools.html"', nav)
    s = s[:start] + nav + s[end:]
    s = s.replace('href="index.html#tools"', 'href="tools.html"')
    if 'href="styles/navigation.css"' not in s:
        s = s.replace('</head>', '<link rel="stylesheet" href="styles/navigation.css"></head>')
    f.write_text(s)
