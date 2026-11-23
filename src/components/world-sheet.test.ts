import { afterEach, describe, expect, it, vi } from 'vitest';
import { fetchSheet, mergeSheet, parseCsv, SHEET_CSV } from './world-sheet';

const base = [{ code: 'IN', name: 'India', continent: 'Asia', states: [{ id: 'IN.KA', name: 'Karnataka', cities: [{ id: '1', name: 'Bangalore', lat: 12.97, lng: 77.59 }] }] }];

describe('world sheet sync', () => {
  afterEach(() => vi.unstubAllGlobals());
  it('uses the supplied workbook and its two tabs without a connector', () => {
    for (const [tab, url] of Object.entries(SHEET_CSV)) {
      expect(new URL(url).pathname).toBe('/spreadsheets/d/1wxheHLHJLJ589JDBFuUIXA-hfVM1m_muE_NlwCJsW50/gviz/tq');
      expect(new URL(url).searchParams.get('sheet')).toBe(tab === 'locations' ? 'Locations' : 'Hotspots');
    }
  });
  it('reads a public CSV without sending credentials', async () => {
    const request = vi.fn().mockResolvedValue(new Response('City,Country,Name\nBangalore,India,IISc'));
    vi.stubGlobal('fetch', request);
    expect(await fetchSheet(SHEET_CSV.hotspots)).toEqual([{ city: 'Bangalore', country: 'India', name: 'IISc' }]);
    expect(request).toHaveBeenCalledWith(SHEET_CSV.hotspots, expect.objectContaining({ credentials: 'omit', cache: 'no-store' }));
  });
  it('rejects sign-in pages rather than treating them as map data', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response('<html>Sign in</html>')));
    await expect(fetchSheet(SHEET_CSV.locations)).rejects.toThrow('not a public CSV');
  });
  it('applies coordinate edits without adding a duplicate city', () => {
    const result = mergeSheet(base, parseCsv('CountryCode,State,City,Latitude,Longitude\nIN,Karnataka,Bangalore,12.9716,77.5946'), []);
    expect(result[0]?.states[0]?.cities).toHaveLength(1);
    expect(result[0]?.states[0]?.cities[0]).toMatchObject({ lat: 12.9716, lng: 77.5946 });
  });
  it('ignores missing and out-of-range coordinates', () => {
    const rows = parseCsv('CountryCode,State,City,Latitude,Longitude\nIN,Karnataka,Missing,,\nIN,Karnataka,Invalid,91,181');
    expect(mergeSheet(base, rows, [])).toEqual(base);
  });
  it('adds a new country, state and city row with its chapter', () => {
    const rows = parseCsv('Continent,Country,CountryCode,State,City,Latitude,Longitude,ChapterName,ChapterStatus,ChapterLink\nEurope,Germany,DE,Bavaria,Munich,48.13,11.58,DoraDAO Munich,Launching Soon,https://x.y\n');
    const de = mergeSheet(base, rows, []).find(c => c.code === 'DE');
    expect(de?.states[0]?.cities[0]?.chapter).toEqual({ name: 'DoraDAO Munich', status: 'Launching Soon', link: 'https://x.y' });
  });
  it('attaches hotspots to the matching city', () => {
    const spots = parseCsv('City,Country,Category,Name,Role,Link\nBangalore,India,University,IISc,"Lab, AI",\n');
    expect(mergeSheet(base, [], spots)[0]?.states[0]?.cities[0]?.hotspots?.[0]?.role).toBe('Lab, AI');
  });
});
