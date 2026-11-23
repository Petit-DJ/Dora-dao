// Knowledge base: every public recording on the DoraDAO YouTube channel (@connectdoradao).
// Listed newest first. Add a row here when a new session goes live.
export type RecordingKind = "live" | "speaker" | "guide";
export type Recording = {
  id: string; title: string; kind: RecordingKind; minutes: number; views: number;
  speaker?: string | undefined; part?: number | undefined; published?: string | undefined;
};

export const CHANNEL_URL = "https://www.youtube.com/@connectdoradao";

// [YouTube id, title, seconds, views, published (when known)]
const raw: [string, string, number, number, string?][] = [
  ["iPV4oY6dhmA", "Closing Ceremony", 2758, 114, "2026-09-01"],
  ["sL7MWUd55xs", "Hangout with Mentors #6 ft. Dora", 5960, 88, "2026-08-28"],
  ["Rp4ftTFQrm4", "Hangout with Mentors #6 ft. Dora", 6122, 57, "2026-08-28"],
  ["WZowgoQjUi0", "Hangout with Mentors #5 ft. Dora", 7504, 91, "2026-08-26"],
  ["fYnDoHHHBsQ", "Hangout with Mentors #5 ft. Dora", 6476, 56, "2026-08-27"],
  ["HqkEH9Ru8eM", "Hangout with Mentors #4 ft. Dora", 9627, 53, "2026-08-25"],
  ["tP2wZWjs4u4", "Hangout with Mentors #4 ft. Dora", 4564, 90, "2026-08-26"],
  ["q3wfmwbxDBg", "Hangout with Mentors #4 ft. Dora", 5655, 55, "2026-08-25"],
  ["MYmZVVLLPJw", "Hangout with Mentors #3 ft. Shreya Mani", 6908, 34, "2026-08-25"],
  ["hE5LseRfepg", "Hangout with Mentors #3 ft. Anubha Porwal", 5809, 29, "2026-08-24"],
  ["GfHFu9LkEJw", "Hangout with Mentors #3 ft. Komal Ray", 5293, 25, "2026-08-25"],
  ["NhhcvnEX9hQ", "Hangout with Mentors #3 ft. Arya Bhawankar", 3940, 20, "2026-08-25"],
  ["e5ZLUK03UQ8", "Hangout with Mentors #2 ft. Paridhi", 5779, 86, "2026-08-24"],
  ["IngQWRebr_Y", "Hangout with Mentors #2 ft. Anjana Menon", 5815, 49, "2026-08-24"],
  ["GmYyril8Mcs", "Hangout with Mentors #2 ft. Abhipriya Chakraborty", 5494, 49, "2026-08-24"],
  ["flOym0ooXpU", "Hangout with Mentors #2 ft. Anushka", 4964, 46],
  ["uqn7cA-82y8", "Hangout with Mentors #2 ft. Sathi Banerjee", 4915, 27],
  ["Nm6U2J2sRj0", "Hangout with Mentors #2 ft. Aakanksha Vats", 4142, 108],
  ["Rj3-Gcn-vuE", "Search Less, Solve More: Insights", 1156, 593],
  ["Dg-PLAU5c7Y", "Hack, Map, Build: Interactive Session with Miro", 2510, 50],
  ["d1cou52jk8w", "Officially kicking off DoraHacks 2.0", 3288, 90],
  ["HZayGAF-7Y0", "What It Takes to Bet on Yourself", 2684, 104],
  ["GWV_KXONx7Y", "#doitanyways", 5113, 121],
  ["soSTacdQgWA", "#DOITANYWAY", 2816, 57],
  ["cnOWk1KMAEY", "ProductHunt launch: 101", 3893, 114],
  ["IyOLrvTmgBQ", "Main Character Energy, Designing Your Life", 2883, 155],
  ["cRCnRLWcu4Y", "How to register for GirlsWhoYap Fellowship 2.0", 176, 70],
  ["IPa8QuHDCmo", "How to register for Hack with Dora (DoraHacks 2.0)", 197, 125],
];

/** Hackathon broadcasts and mentor hangouts are live streams; standalone talks are speaker sessions. */
export function classify(title: string): RecordingKind {
  if (/^how to register/i.test(title)) return "guide";
  if (/hangout with mentor|closing ceremony|kicking off|hack, map, build/i.test(title)) return "live";
  return "speaker";
}

/** "Hangout with Mentors #3 ft. Shreya Mani" → "Shreya Mani"; the host "Dora" is not a guest. */
export function speakerFromTitle(title: string): string | undefined {
  const name = title.match(/\bft\.?\s+(.+)$/i)?.[1]?.trim();
  return name && name.toLowerCase() !== "dora" ? name : undefined;
}

function build(): Recording[] {
  const totals = new Map<string, number>();
  for (const [, title] of raw) totals.set(title, (totals.get(title) ?? 0) + 1);
  const seen = new Map<string, number>();
  return raw.map(([id, title, seconds, views, published]) => {
    const total = totals.get(title) ?? 1;
    const index = (seen.get(title) ?? 0) + 1;
    seen.set(title, index);
    // Newest first, so the last copy of a repeated title is part 1.
    return { id, title, kind: classify(title), minutes: Math.max(1, Math.round(seconds / 60)), views, speaker: speakerFromTitle(title), part: total > 1 ? total - index + 1 : undefined, published };
  });
}

export const recordings: Recording[] = build();

export type RecordingFilter = "all" | "live" | "speaker";
export const recordingFilters: { id: RecordingFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "live", label: "Live streams" },
  { id: "speaker", label: "Speaker sessions" },
];

export function filterRecordings(list: Recording[], filter: RecordingFilter, query = ""): Recording[] {
  const q = query.trim().toLowerCase();
  return list.filter(r => (filter === "all" || r.kind === filter) && (!q || `${r.title} ${r.speaker ?? ""}`.toLowerCase().includes(q)));
}

export const kindLabel: Record<RecordingKind, string> = { live: "Live stream", speaker: "Speaker session", guide: "How to" };
export const recordingThumb = (id: string) => `https://i.ytimg.com/vi/${id}/mqdefault.jpg`;
export const recordingEmbed = (id: string) => `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
export const recordingUrl = (id: string) => `https://www.youtube.com/watch?v=${id}`;
export const formatLength = (minutes: number) => minutes >= 60 ? `${Math.floor(minutes / 60)}h ${minutes % 60}m` : `${minutes} min`;
