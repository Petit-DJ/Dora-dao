import p1 from "@/assets/mosaic/portrait-1.jpg";
import p2 from "@/assets/mosaic/portrait-2.jpg";
import p3 from "@/assets/mosaic/portrait-3.jpg";
import p4 from "@/assets/mosaic/portrait-4.jpg";
import p5 from "@/assets/mosaic/portrait-5.jpg";
import p6 from "@/assets/mosaic/portrait-6.jpg";
import p7 from "@/assets/mosaic/portrait-7.jpg";
import p8 from "@/assets/mosaic/portrait-8.jpg";
import p9 from "@/assets/mosaic/portrait-9.jpg";

export type Face = { name: string; image?: string; linkedin?: string };

// Real members first; sample portraits fill the rows until more profiles are supplied.
// LinkedIn blocks automatic photo downloads, so a real member without an image shows initials.
export const realFaces: Face[] = [
  { name: "Nikhil Sharma", linkedin: "https://www.linkedin.com/in/sharmanikh03/" },
];

const samples: Face[] = [p1, p2, p3, p4, p5, p6, p7, p8, p9].map((image, i) => ({ name: `Sample member ${i + 1}`, image }));

const rotate = (arr: Face[], n: number) => [...arr.slice(n), ...arr.slice(0, n)];

export const faceRows: Face[][] = [
  [...realFaces, ...samples],
  rotate(samples, 3),
  [...rotate(samples, 6), ...realFaces],
];

// Live contributors from the "Contributors" tab of the website speakers sheet.
// Columns: Name, Role, Photo, LinkedIn, optional Status (blank or "Approved" shows).
import { parseCsv } from "./world-sheet";
import { SPEAKERS_SHEET, photoFor, linkedinUrl } from "./speakers-data";

export const CONTRIBUTORS_CSV = `${SPEAKERS_SHEET}/gviz/tq?tqx=out:csv&sheet=Contributors`;

export function approvedContributors(rows: Record<string, string>[]): Face[] {
  // A missing tab makes Google return the first tab; require the Role column so speakers never leak in.
  if (!rows.length || !("role" in rows[0]!)) return [];
  const out: Face[] = [];
  for (const r of rows) {
    const name = (r["name"] ?? "").trim();
    const status = (r["status"] ?? "").trim().toLowerCase();
    if (!name || (status && status !== "approved")) continue;
    const face: Face = { name };
    const image = photoFor(r["photo"]);
    const linkedin = linkedinUrl(r["linkedin"]);
    if (image) face.image = image;
    if (linkedin) face.linkedin = linkedin;
    out.push(face);
  }
  return out;
}

export async function fetchContributors(): Promise<Face[]> {
  const res = await fetch(CONTRIBUTORS_CSV, { credentials: "omit", signal: AbortSignal.timeout(15000) });
  const text = await res.text();
  if (!res.ok || text.trimStart().startsWith("<")) return [];
  return approvedContributors(parseCsv(text) as Record<string, string>[]);
}

/** Splits contributors into three marquee rows; few people get padded with sample portraits. */
export function rowsFor(people: Face[]): Face[][] {
  const list = people.length >= 9 ? people : [...people, ...samples];
  const size = Math.ceil(list.length / 3);
  return [0, 1, 2].map(i => {
    const row = list.slice(i * size, (i + 1) * size);
    return row.length >= 6 ? row : rotate(list, i * 3);
  });
}
