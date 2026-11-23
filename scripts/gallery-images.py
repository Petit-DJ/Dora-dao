"""Step 2 of the gallery snapshot: compress preview pictures into public/media/gallery and
write src/components/gallery-previews.json. Run after `bun scripts/gallery-snapshot.ts`."""
import html, hashlib, io, json, re, pathlib, concurrent.futures as cf, requests
from PIL import Image

root = pathlib.Path(__file__).resolve().parent.parent
out_dir = root / 'public/media/gallery'
out_dir.mkdir(parents=True, exist_ok=True)
raw = json.load(open('/tmp/gallery-raw.json'))

def clean(v):
    return re.sub(r'[\ud800-\udfff]', '', html.unescape(v)) if isinstance(v, str) else v

def tidy(key, p):
    p = {k: clean(v) for k, v in p.items()}
    title, img = p.get('title') or '', p.get('imageSrc') or ''
    if key.startswith('instagram:'):
        m = re.match(r'(.+?) \(@([\w.]+)\)', title.replace('&#x2022;', ''))
        p['author'] = m.group(1) if m else None
        p['title'] = None
        if re.search(r'Followers|See Instagram', p.get('text') or ''): p['text'] = ''
        if 's150x150' in img or '-19/' in img: img = ''
    if re.match(r'^[\d,.]+\s+(comments?|reactions?|likes?)$', p.get('author') or '', re.I): p['author'] = None
    m = re.match(r'^(?:[\d,.KMk]+ likes?, [\d,.KMk]+ comments? - )?([\w.]+) on \w+ \d+, \d{4}: "(.*?)"?\.?$', p.get('text') or '', re.S)
    if m: p['author'] = p.get('author') or '@' + m.group(1); p['text'] = m.group(2).rstrip('"')
    if re.search(r'Log into Facebook|Microsoft OneDrive|^Instagram$', title): return None
    if re.search(r'facebook\.com/images|fb_icon', img): img = ''
    if key.startswith('pin.it'): p['title'] = None
    if key.startswith('drive:') and re.match(r'^IMG_\d+', title): p['title'] = 'Shared photo'
    if 'pbs.twimg.com' in img: img = re.sub(r'name=\w+', 'name=small', img) if 'name=' in img else img + ('&' if '?' in img else '?') + 'name=small'
    p['imageSrc'] = img
    return {k: v for k, v in p.items() if v}

def fetch(item):
    key, p = item
    src = p.pop('imageSrc', None)
    if not src: return key, p
    name = hashlib.sha1(key.encode()).hexdigest()[:14] + '.webp'
    dest = out_dir / name
    try:
        if not dest.exists():
            r = requests.get(src, timeout=25, headers={'user-agent': 'Mozilla/5.0'})
            r.raise_for_status()
            im = Image.open(io.BytesIO(r.content)).convert('RGB')
            if im.width < 200: return key, p
            im.thumbnail((640, 800))
            im.save(dest, 'WEBP', quality=68, method=6)
        p['image'] = f'/media/gallery/{name}'
    except Exception as e:
        print('image failed', key, e)
    return key, p

items = [(k, t) for k, v in raw['previews'].items() if (t := tidy(k, v))]
with cf.ThreadPoolExecutor(10) as ex:
    previews = dict(ex.map(fetch, items))
previews = {k: v for k, v in sorted(previews.items()) if v}
json.dump({'cells': raw['cells'], 'previews': previews}, open(root / 'src/components/gallery-previews.json', 'w'), ensure_ascii=False, separators=(',', ':'))
print(len(previews), 'previews,', sum('image' in v for v in previews.values()), 'with pictures')
