// Participant gallery, read live from a public Google Sheet (one or more links per row).
// Rich previews (pictures, names, captions) come from a bundled snapshot keyed by link,
// so new sheet rows appear immediately as link cards and gain pictures on the next snapshot run.

const workbook = 'https://docs.google.com/spreadsheets/d/1KLHNIpnitkNWU0-psM6aBgtmri-6K54bwCj6LQvS2MU';
export const GALLERY_CSV = `${workbook}/gviz/tq?tqx=out:csv&headers=0`;

export type Platform = 'youtube' | 'linkedin' | 'x' | 'instagram' | 'drive' | 'article' | 'other';
export type GalleryLink = { platform: Platform; url: string; key: string; youtubeId?: string | undefined; handle?: string | undefined };
export type Preview = { title?: string | undefined; author?: string | undefined; text?: string | undefined; image?: string | undefined };
export type GalleryItem = {
  id: string; kind: 'video' | 'post'; link: GalleryLink; alsoOn: GalleryLink[];
  author: string; text: string; image?: string | undefined; title?: string | undefined;
};

export const platformLabel: Record<Platform, string> = {
  youtube: 'YouTube', linkedin: 'LinkedIn', x: 'X', instagram: 'Instagram', drive: 'Drive', article: 'Article', other: 'Link',
};

/** Classify one URL and give it a stable key shared by the app and the snapshot script. */
export function toLink(raw: string): GalleryLink | null {
  let u: URL;
  try { u = new URL(raw.trim().replace(/[).,;]+$/, '')); } catch { return null; }
  if (u.protocol !== 'https:' && u.protocol !== 'http:') return null;
  u.protocol = 'https:';
  const host = u.hostname.replace(/^(www\.|m\.|mobile\.|in\.)/, '').toLowerCase();
  const path = u.pathname.replace(/\/+$/, '');
  const clean = `https://${u.hostname}${path}`;
  if (host === 'youtu.be' || host.endsWith('youtube.com')) {
    const id = host === 'youtu.be' ? path.slice(1) : u.searchParams.get('v') ?? path.match(/\/(?:shorts|live|embed)\/([\w-]{11})/)?.[1];
    if (id && /^[\w-]{11}$/.test(id)) return { platform: 'youtube', youtubeId: id, key: `youtube:${id}`, url: `https://www.youtube.com/watch?v=${id}` };
    return { platform: 'youtube', key: `youtube:${path.toLowerCase()}`, url: clean };
  }
  if (host === 'x.com' || host === 'twitter.com') {
    const m = path.match(/^\/([\w]+)\/status\/(\d+)/);
    if (m) return { platform: 'x', key: `x:${m[2]}`, url: `https://x.com/${m[1]}/status/${m[2]}`, handle: m[1] };
    return { platform: 'x', key: `x:${path.toLowerCase()}`, url: clean };
  }
  if (host === 'linkedin.com' || host === 'lnkd.in') {
    const id = (path + decodeURIComponent(u.search)).match(/(?:activity|share|ugcPost)[-:](\d{15,})/)?.[1];
    const handle = path.match(/^\/posts\/([^_/]+)_/)?.[1];
    return { platform: 'linkedin', key: id ? `linkedin:${id}` : `linkedin:${host}${path.toLowerCase()}`, url: clean, handle };
  }
  if (host === 'instagram.com') {
    const m = path.match(/^\/(?:[\w.]+\/)?(?:p|reel|reels|tv)\/([\w-]+)/) ?? path.match(/^\/stories\/[\w.]+\/(\d+)/);
    return { platform: 'instagram', key: `instagram:${(m?.[1] ?? path).toLowerCase()}`, url: clean, handle: path.match(/^\/(?:stories\/)?(?!(?:p|reel|reels|tv)\/)([\w.]+)/)?.[1] };
  }
  if (host === 'drive.google.com') return { platform: 'drive', key: `drive:${path.match(/\/d\/([\w-]+)/)?.[1] ?? path}`, url: clean };
  const article = /medium\.com$|substack\.com$|github\.com$/.test(host);
  return { platform: article ? 'article' : 'other', key: `${host}${path.toLowerCase()}`, url: article ? clean : u.toString() };
}

export function extractLinks(cell: string): GalleryLink[] {
  const seen = new Set<string>();
  const out: GalleryLink[] = [];
  for (const raw of cell.match(/https?:\/\/[^\s"<>]+/g) ?? []) {
    const link = toLink(raw);
    if (link && !seen.has(link.key)) { seen.add(link.key); out.push(link); }
  }
  return out;
}

/** Split a CSV export into its first-column cells. */
export function parseCells(text: string): string[] {
  const cells: string[] = [];
  let cell = '', quoted = false, col = 0;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (quoted) {
      if (ch === '"' && text[i + 1] === '"') { cell += '"'; i++; }
      else if (ch === '"') quoted = false;
      else if (col === 0) cell += ch;
    } else if (ch === '"') quoted = true;
    else if (ch === ',') col++;
    else if (ch === '\n' || ch === '\r') {
      if (ch === '\r' && text[i + 1] === '\n') i++;
      if (cell.trim()) cells.push(cell); cell = ''; col = 0;
    } else if (col === 0) cell += ch;
  }
  if (cell.trim()) cells.push(cell);
  return cells;
}

const titleCase = (s: string) => s.split(/[-_.]+/).filter(w => w && !/\d/.test(w)).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
function fallbackAuthor(link: GalleryLink) {
  if (link.platform === 'linkedin' && link.handle) return titleCase(link.handle);
  if (link.handle) return `@${link.handle}`;
  return 'DoraDAO community';
}

/** One video card per YouTube link; one post card per row for the remaining links.
 *  A row repeating an earlier link folds its new links into that earlier card. Newest rows first. */
export function buildGallery(cells: string[], previews: Record<string, Preview>): GalleryItem[] {
  const owner = new Map<string, GalleryItem>();
  const items: GalleryItem[] = [];
  const make = (kind: GalleryItem['kind'], link: GalleryLink, alsoOn: GalleryLink[]): GalleryItem => {
    const p = previews[link.key] ?? {};
    return { id: link.key, kind, link, alsoOn, author: p.author || fallbackAuthor(link), text: p.text ?? '', image: p.image ?? (link.youtubeId ? `https://i.ytimg.com/vi/${link.youtubeId}/hqdefault.jpg` : undefined), title: p.title };
  };
  for (const cell of cells) {
    const links = extractLinks(cell);
    for (const v of links.filter(l => l.platform === 'youtube' && l.youtubeId && !owner.has(l.key))) {
      const item = make('video', v, []);
      owner.set(v.key, item); items.push(item);
    }
    const rest = links.filter(l => !(l.platform === 'youtube' && l.youtubeId));
    const fresh = rest.filter(l => !owner.has(l.key));
    const existing = rest.map(l => owner.get(l.key)).find(i => i?.kind === 'post');
    if (existing) { existing.alsoOn.push(...fresh); fresh.forEach(l => owner.set(l.key, existing)); continue; }
    const primary = fresh.find(l => previews[l.key]?.image) ?? fresh.find(l => previews[l.key]) ?? fresh[0];
    if (!primary) continue;
    const item = make('post', primary, fresh.filter(l => l !== primary));
    fresh.forEach(l => owner.set(l.key, item)); items.push(item);
  }
  return items.reverse();
}

export async function fetchGalleryCells(): Promise<string[] | null> {
  try {
    const res = await fetch(GALLERY_CSV, { credentials: 'omit', signal: AbortSignal.timeout(15000) });
    const text = await res.text();
    if (!res.ok || text.trimStart().startsWith('<')) return null;
    const cells = parseCells(text);
    return cells.length ? cells : null;
  } catch { return null; }
}
