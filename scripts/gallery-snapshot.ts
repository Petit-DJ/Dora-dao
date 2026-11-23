// Refreshes the gallery preview snapshot from the live sheet.
// Step 1 (this file): bun scripts/gallery-snapshot.ts  -> /tmp/gallery-raw.json
// Step 2: python3 scripts/gallery-images.py            -> public/media/gallery/*.webp + src/components/gallery-previews.json
import { GALLERY_CSV, parseCells, extractLinks, type GalleryLink } from '../src/components/gallery-data';

const BOT = 'Mozilla/5.0 (compatible; Twitterbot/1.0)';
type Raw = { title?: string; author?: string; text?: string; imageSrc?: string };
const decode = (s: string) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;|&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n));
const meta = (html: string, name: string) => {
  const m = html.match(new RegExp(`<meta[^>]+(?:property|name)="${name}"[^>]+content="([^"]*)"`, 'i')) ?? html.match(new RegExp(`<meta[^>]+content="([^"]*)"[^>]+(?:property|name)="${name}"`, 'i'));
  return m ? decode(m[1]).trim() : undefined;
};
const clip = (s = '', n = 240) => { const t = [...s.replace(/\s+/g, ' ').trim()]; return t.length > n ? `${t.slice(0, n - 1).join('').trimEnd()}…` : t.join(''); };

async function get(url: string, ua = BOT) {
  const res = await fetch(url, { headers: { 'user-agent': ua, 'accept-language': 'en' }, redirect: 'follow', signal: AbortSignal.timeout(20000) });
  if (!res.ok) throw new Error(`${res.status}`);
  return res;
}

async function preview(link: GalleryLink): Promise<Raw | null> {
  if (link.platform === 'youtube' && link.youtubeId) {
    const j: any = await (await get(`https://www.youtube.com/oembed?format=json&url=${encodeURIComponent(link.url)}`)).json();
    return { title: j.title, author: j.author_name };
  }
  if (link.platform === 'x' && /^x:\d+$/.test(link.key)) {
    const j: any = await (await get(`https://api.fxtwitter.com/${link.handle}/status/${link.key.slice(2)}`)).json();
    const t = j.tweet; if (!t) return null;
    const m = t.media ?? {};
    return { author: t.author?.name, text: clip(t.text.replace(/https:\/\/t\.co\/\S+/g, '')), imageSrc: m.photos?.[0]?.url ?? m.videos?.[0]?.thumbnail_url ?? m.mosaic?.formats?.jpeg };
  }
  const ua = link.platform === 'instagram' ? 'facebookexternalhit/1.1' : BOT;
  const html = await (await get(link.url, ua)).text();
  const title = meta(html, 'og:title') ?? html.match(/<title>([^<]*)/)?.[1];
  let author: string | undefined, text = meta(html, 'og:description');
  if (link.platform === 'linkedin' && title) { const parts = title.split(' | ').filter(x => !/^[\d,.]+\s+(comments?|reactions?)$/i.test(x)); author = parts.length > 1 ? parts.at(-1) : undefined; if (!text) text = parts[0]; }
  const image = meta(html, 'og:image');
  const generic = !image || /static\.licdn\.com|default|logo/i.test(image);
  if (!title && !text && generic) return null;
  return { title: link.platform === 'linkedin' ? undefined : clip(title, 120), author, text: clip(text), imageSrc: generic ? undefined : image };
}

const text = await (await fetch(GALLERY_CSV)).text();
const cells = parseCells(text);
const links = new Map<string, GalleryLink>();
for (const c of cells) for (const l of extractLinks(c)) links.set(l.key, l);
console.log(cells.length, 'rows', links.size, 'links');
const out: Record<string, Raw> = {};
const queue = [...links.values()];
let done = 0, fail = 0;
await Promise.all(Array.from({ length: 8 }, async () => {
  for (let l; (l = queue.shift());) {
    try { const p = await preview(l); if (p) out[l.key] = p; else fail++; } catch { fail++; }
    if (++done % 50 === 0) console.log(done);
  }
}));
await Bun.write('/tmp/gallery-raw.json', JSON.stringify({ cells: cells.map(c => extractLinks(c).map(l => l.url).join(' ')).filter(Boolean), previews: out }, null, 1));
console.log('previews', Object.keys(out).length, 'failed', fail, 'with images', Object.values(out).filter(p => p.imageSrc).length);
