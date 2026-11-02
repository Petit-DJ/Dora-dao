// Live Google Sheet sync for the world map.
// Public read-only CSV exports; no OAuth, API keys or hosting-specific connector.
// Keep this workbook shared as "Anyone with the link can view".
const workbook =
  "https://docs.google.com/spreadsheets/d/1wxheHLHJLJ589JDBFuUIXA-hfVM1m_muE_NlwCJsW50";
export const SHEET_CSV = {
  locations: `${workbook}/gviz/tq?tqx=out:csv&sheet=Locations`,
  hotspots: `${workbook}/gviz/tq?tqx=out:csv&sheet=Hotspots`,
};

export type Chapter = { name: string; status: string; link: string };
export type Hotspot = { category: string; name: string; role: string; link: string };
export type SheetCity = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  chapter?: Chapter;
  hotspots?: Hotspot[];
};
export type SheetState = { id: string; name: string; cities: SheetCity[] };
export type SheetCountry = { code: string; name: string; continent: string; states: SheetState[] };

type Row = Partial<
  Record<
    | "continent"
    | "country"
    | "countrycode"
    | "state"
    | "city"
    | "latitude"
    | "longitude"
    | "chaptername"
    | "chapterstatus"
    | "chapterlink"
    | "category"
    | "name"
    | "role"
    | "link",
    string
  >
>;

export function parseCsv(text: string): Row[] {
  const rows: string[][] = [];
  let row: string[] = [],
    cell = "",
    quoted = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (quoted) {
      if (ch === '"' && text[i + 1] === '"') {
        cell += '"';
        i++;
      } else if (ch === '"') quoted = false;
      else cell += ch;
    } else if (ch === '"') quoted = true;
    else if (ch === ",") {
      row.push(cell);
      cell = "";
    } else if (ch === "\n" || ch === "\r") {
      if (ch === "\r" && text[i + 1] === "\n") i++;
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else cell += ch;
  }
  if (cell || row.length) {
    row.push(cell);
    rows.push(row);
  }
  const [head, ...body] = rows;
  if (!head) return [];
  const keys = head.map((h) =>
    h
      .trim()
      .toLowerCase()
      .replace(/[^a-z]/g, ""),
  );
  return body
    .filter((r) => r.some((c) => c.trim()))
    .map((r) => Object.fromEntries(keys.map((k, i) => [k, (r[i] ?? "").trim()])));
}

const slug = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-");

/** Merges sheet rows into the base list; sheet rows add new places or update matching ones. */
export function mergeSheet(
  base: SheetCountry[],
  locations: Row[],
  hotspots: Row[],
): SheetCountry[] {
  const countries: SheetCountry[] = structuredClone(base);
  for (const r of locations) {
    const code = r.countrycode?.toUpperCase();
    const lat = Number(r.latitude),
      lng = Number(r.longitude);
    const cityName = r.city,
      stateName = r.state;
    if (
      !code ||
      !cityName ||
      !stateName ||
      !r.latitude ||
      !r.longitude ||
      !Number.isFinite(lat) ||
      !Number.isFinite(lng) ||
      Math.abs(lat) > 90 ||
      Math.abs(lng) > 180
    )
      continue;
    let country = countries.find((c) => c.code === code);
    if (!country) {
      country = { code, name: r.country || code, continent: r.continent || "Other", states: [] };
      countries.push(country);
    }
    let state = country.states.find((s) => slug(s.name) === slug(stateName));
    if (!state) {
      state = { id: `${code}.${slug(stateName)}`, name: stateName, cities: [] };
      country.states.push(state);
    }
    let city = state.cities.find((c) => slug(c.name) === slug(cityName));
    if (!city) {
      city = { id: `sheet-${code}-${slug(stateName)}-${slug(cityName)}`, name: cityName, lat, lng };
      state.cities.push(city);
    }
    city.lat = lat;
    city.lng = lng;
    if (r.chaptername)
      city.chapter = {
        name: r.chaptername,
        status: r.chapterstatus || "Active",
        link: r.chapterlink || "",
      };
  }
  for (const r of hotspots) {
    const cityName = r.city;
    if (!cityName || !r.name) continue;
    for (const country of countries) {
      if (
        r.country &&
        slug(country.name) !== slug(r.country) &&
        country.code !== r.country.toUpperCase()
      )
        continue;
      for (const state of country.states)
        for (const city of state.cities) {
          if (slug(city.name) === slug(cityName))
            (city.hotspots ??= []).push({
              category: r.category || "Partner",
              name: r.name,
              role: r.role || "",
              link: r.link || "",
            });
        }
    }
  }
  return countries;
}

export async function fetchSheet(url: string) {
  if (!url) return [];
  const res = await fetch(url, {
    cache: "no-store",
    credentials: "omit",
    signal: AbortSignal.timeout(15000),
  });
  if (!res.ok) throw new Error(`Sheet request failed [${res.status}]`);
  const text = await res.text();
  if (/^\s*</.test(text)) throw new Error("Sheet is not a public CSV. Check its sharing settings.");
  const rows = parseCsv(text);
  if (rows.some((row) => !("city" in row)))
    throw new Error("Sheet CSV is missing the City column.");
  return rows;
}
