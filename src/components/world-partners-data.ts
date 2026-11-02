import { useEffect, useMemo, useState } from "react";
import locations from "./world-locations.json";
import {
  fetchSheet,
  mergeSheet,
  SHEET_CSV,
  type Chapter,
  type Hotspot,
  type SheetCountry,
} from "./world-sheet";

export type Country = SheetCountry;
export type State = Country["states"][number];
export type City = State["cities"][number];
export type CityLocation = City & {
  country: Country;
  state: State;
  chapter?: Chapter;
  hotspots?: Hotspot[];
};

const base = locations as SheetCountry[];
const build = (countries: Country[]) => ({
  countries,
  continents: [...new Set(countries.map((country) => country.continent))],
  cities: countries.flatMap((country) =>
    country.states.flatMap((state) => state.cities.map((city) => ({ ...city, country, state }))),
  ) as CityLocation[],
});
export const { countries, continents, cities } = build(base);

let live: ReturnType<typeof build> | null = null;
let pending: Promise<void> | null = null;
const listeners = new Set<() => void>();
function loadSheet() {
  if (live || pending || (!SHEET_CSV.locations && !SHEET_CSV.hotspots)) return;
  pending = Promise.all([fetchSheet(SHEET_CSV.locations), fetchSheet(SHEET_CSV.hotspots)])
    .then(([rows, spots]) => {
      live = build(mergeSheet(base, rows, spots));
      listeners.forEach((fn) => fn());
    })
    .catch((error) => {
      console.error("World sheet sync failed", error);
      pending = null;
    });
}

/** Map data, kept in sync with the published Google Sheet once the page loads. */
export function useWorldData() {
  const [, tick] = useState(0);
  useEffect(() => {
    const fn = () => tick((n) => n + 1);
    listeners.add(fn);
    loadSheet();
    return () => {
      listeners.delete(fn);
    };
  }, []);
  const data = live ?? build(base);
  return useMemo(() => data, [live]); // eslint-disable-line react-hooks/exhaustive-deps
}

export const communityDirectories = [
  {
    name: "Google Developer Groups",
    kind: "Developer communities",
    href: "https://gdg.community.dev/",
  },
  {
    name: "Startup Grind",
    kind: "Founder communities",
    href: "https://www.startupgrind.com/chapters/",
  },
  { name: "PyLadies", kind: "Python communities", href: "https://portal.pyladies.com/chapters/" },
  {
    name: "Meetup",
    kind: "Local technology groups",
    href: "https://www.meetup.com/topics/technology/",
  },
];
export function searchCities(query: string, list: CityLocation[] = cities) {
  const terms = query
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .split(/\s+/);
  if (!query.trim()) return [];
  return list
    .filter((city) => {
      const extra = [city.chapter?.name, ...(city.hotspots ?? []).map((h) => h.name)]
        .filter(Boolean)
        .join(" ");
      const text = `${city.name} ${city.state.name} ${city.country.name} ${extra}`
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
      return terms.every((term) => text.includes(term));
    })
    .slice(0, 12);
}
export const hostEventHref = (city: CityLocation) =>
  `mailto:Connectdoradao@gmail.com?subject=${encodeURIComponent(`Host an event in ${city.name}, ${city.country.name}`)}&body=${encodeURIComponent(`Hi DoraDAO!\n\nI'd like to host an event in ${city.name}, ${city.state.name}, ${city.country.name}.\n\nCommunity / organisation:\nSocial link:\nEvent idea:\nPreferred date:\n`)}`;
