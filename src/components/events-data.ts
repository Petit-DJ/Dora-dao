// Community events, read live from the "Events" tab of the shared map workbook.
// Moderation: only rows whose Status cell is "Approved" are shown on the site.
import { parseCsv } from './world-sheet';

const workbook = 'https://docs.google.com/spreadsheets/d/1wxheHLHJLJ589JDBFuUIXA-hfVM1m_muE_NlwCJsW50';
export const EVENTS_CSV = `${workbook}/gviz/tq?tqx=out:csv&sheet=Events`;
/** Google Apps Script web app URL that appends submissions with Status=Pending (see docs/events-apps-script.gs). */
export const EVENTS_SUBMIT_URL = (import.meta.env['VITE_EVENTS_SUBMIT_URL'] as string | undefined) ?? '';

export type CommunityEvent = {
  title: string; date: string; time: string; city: string; country: string;
  venue: string; category: string; description: string; link: string; image: string; host: string;
};

const safeUrl = (u = '') => (/^https:\/\//i.test(u) ? u : '');

type EventRow = Partial<Record<'status' | 'title' | 'date' | 'time' | 'city' | 'country' | 'venue' | 'category' | 'description' | 'link' | 'image' | 'host' | 'hostname', string>>;

export function approvedEvents(rows: EventRow[]): CommunityEvent[] {
  const out: CommunityEvent[] = [];
  for (const r of rows) {
    if ((r.status ?? '').trim().toLowerCase() !== 'approved' || !r.title || !r.date) continue;
    out.push({
      title: r.title, date: r.date, time: r.time ?? '', city: r.city ?? '', country: r.country ?? '',
      venue: r.venue ?? '', category: r.category || 'Community', description: r.description ?? '',
      link: safeUrl(r.link), image: safeUrl(r.image), host: r.host || r.hostname || '',
    });
  }
  return out.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
}

export async function fetchEvents(): Promise<CommunityEvent[]> {
  const res = await fetch(EVENTS_CSV, { credentials: 'omit', signal: AbortSignal.timeout(15000) });
  const text = await res.text();
  if (!res.ok || text.trimStart().startsWith('<')) return [];
  return approvedEvents(parseCsv(text) as EventRow[]);
}
