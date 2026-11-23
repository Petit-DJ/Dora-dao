// Speakers directory, read live from the public "website speakers" Google Sheet.
// Only rows whose Status is "Approved" appear. Featured = Yes puts a speaker on the homepage.
import { parseCsv } from "./world-sheet";
import { speakerPortraits } from "./speaker-portraits";
import { recordings } from "./recordings-data";

export const SPEAKERS_SHEET = "https://docs.google.com/spreadsheets/d/1-6u8NnQx-0R47QcuX3l8mqHo-ecKhGjeCMupksh8t5w";
export const SPEAKERS_CSV = `${SPEAKERS_SHEET}/gviz/tq?tqx=out:csv`;

export type Speaker = {
  id: string; name: string; designation: string; company: string; topic: string;
  photo?: string | undefined; linkedin?: string | undefined; twitter?: string | undefined;
  featured: boolean; session?: string | undefined;
};

type SpeakerRow = Partial<Record<"name" | "speakersfullname" | "fullname" | "designation" | "role" | "company" | "organisation" | "organization" | "photo" | "image" | "linkedin" | "twitter" | "x" | "topic" | "featured" | "status", string>>;

const https = (u = "") => (/^https:\/\//i.test(u.trim()) ? u.trim() : undefined);
const slug = (s: string) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/** A number picks one of the bundled portraits (1 = first); a Google Drive share link or any https image link is used as is. */
export function photoFor(value = ""): string | undefined {
  const v = value.trim();
  if (/^\d+$/.test(v)) return speakerPortraits[Number(v) - 1]?.image;
  const drive = v.match(/drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?(?:export=\w+&)?id=)([\w-]{10,})/);
  if (drive) return `https://drive.google.com/thumbnail?id=${drive[1]}&sz=w600`;
  return https(v);
}

export function twitterUrl(value = ""): string | undefined {
  const v = value.trim();
  if (!v) return undefined;
  if (/^https:\/\//i.test(v)) return v;
  const handle = v.replace(/^@/, "").replace(/^(?:www\.)?(?:x|twitter)\.com\//i, "");
  return /^\w{1,15}$/.test(handle) ? `https://x.com/${handle}` : undefined;
}

export function linkedinUrl(value = ""): string | undefined {
  const v = value.trim();
  if (/^(?:www\.)?linkedin\.com\//i.test(v)) return `https://${v}`;
  return https(v);
}

/** The speaker's own recording, matched by name against the "ft." guest in each video title. */
export function sessionFor(name: string): string | undefined {
  const n = name.toLowerCase();
  return recordings.find(r => r.speaker && n.includes(r.speaker.toLowerCase()))?.id;
}

const yes = (v = "") => /^(y|yes|true|1|featured)$/i.test(v.trim());

export function approvedSpeakers(rows: SpeakerRow[]): Speaker[] {
  const out: Speaker[] = [];
  for (const r of rows) {
    const name = (r.name || r.speakersfullname || r.fullname || "").trim();
    if (!name || (r.status ?? "").trim().toLowerCase() !== "approved") continue;
    out.push({
      id: slug(name) || `speaker-${out.length}`, name,
      designation: (r.designation || r.role || "").trim(),
      company: (r.company || r.organisation || r.organization || "").trim(),
      topic: (r.topic ?? "").trim(),
      photo: photoFor(r.photo || r.image), linkedin: linkedinUrl(r.linkedin), twitter: twitterUrl(r.twitter || r.x),
      featured: yes(r.featured), session: sessionFor(name),
    });
  }
  return out;
}

/** Until the sheet has approved rows, list the guests named in our public session recordings. */
export const fallbackSpeakers: Speaker[] = recordings
  .filter((r): r is typeof r & { speaker: string } => !!r.speaker)
  .reverse()
  .map(r => ({ id: slug(r.speaker), name: r.speaker, designation: "Mentor", company: "Hangout with Mentors", topic: "", featured: true, session: r.id }));

/** Homepage picks: featured speakers first, topped up from the rest. */
export function pickShowcase(list: Speaker[], count = 8): Speaker[] {
  return [...list.filter(s => s.featured), ...list.filter(s => !s.featured)].slice(0, count);
}

export async function fetchSpeakers(): Promise<Speaker[]> {
  const res = await fetch(SPEAKERS_CSV, { credentials: "omit", signal: AbortSignal.timeout(15000) });
  const text = await res.text();
  if (!res.ok || text.trimStart().startsWith("<")) return [];
  return approvedSpeakers(parseCsv(text) as SpeakerRow[]);
}

export const initials = (name: string) => name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]?.toUpperCase() ?? "").join("");
