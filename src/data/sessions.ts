import { img } from "./site";

export const featuredSession = {
  title: "Building for the Next Billion",
  speaker: "Aisha Khan, Google",
  poster: img("featured", 1280, 720),
  videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
};

export const companies = ["Google", "Microsoft", "Meta", "Amazon", "Apple", "Canva", "Stripe", "Notion"];

export type Session = { id: string; title: string; speaker: string; cover: string; program: string; year: number; topic: string; watchUrl: string; downloadUrl: string };

const topics = ["AI", "Design", "Career", "Web3", "Product"];
const programs = ["GWY", "DoraBoot", "World Tour", "Dora AI Academy"];
const titles = [
  "Building for the Next Billion", "AI Agents & the Future of Work", "Community Building 101", "Design Systems that Scale",
  "Web3 Without the Hype", "From Idea to Launch", "Negotiating Your First Offer", "Prompting Like a Pro",
  "Shipping on Product Hunt", "Open Source for Beginners", "Storytelling for Founders", "Research Interviews That Work",
];
export const sessions: Session[] = titles.map((title, i) => ({
  id: `s${i}`,
  title,
  speaker: ["Aisha Khan", "Rohan Mehta", "Priya Sharma", "Daniel Lee", "Maria Lopez", "James Wilson"][i % 6]!,
  cover: img(`session-${i}`, 600, 360),
  program: programs[i % programs.length]!,
  year: 2025 + (i % 2),
  topic: topics[i % topics.length]!,
  watchUrl: "#",
  downloadUrl: "#",
}));

export type Speaker = { id: string; name: string; role: string; company: string; type: "Speaker" | "Mentor"; photo: string; url: string };
export const speakers: Speaker[] = [
  ["Aisha Khan", "Product Lead", "Google"], ["Rohan Mehta", "Engineering Manager", "Meta"], ["Priya Sharma", "Design Director", "Canva"],
  ["Daniel Lee", "Founder", "Stealth"], ["Maria Lopez", "Community Lead", "Notion"], ["James Wilson", "Tech Lead", "Amazon"],
  ["Arjun Nair", "Product Manager", "Microsoft"], ["Fatima Bello", "Researcher", "Stripe"],
].map(([name, role, company]: string[], i) => ({
  id: `sp${i}`, name: name!, role: role!, company: company!, type: i % 2 ? "Mentor" : "Speaker",
  photo: `https://i.pravatar.cc/240?img=${i + 10}`,
  url: i % 2 ? "https://linkedin.com" : "https://x.com",
}));

/** Download options for the featured video. Replace each url with your own hosted file per quality. */
export type VideoQuality = { label: string; url: string };
export const featuredDownloads: VideoQuality[] = [
  { label: "1080p (Full HD)", url: featuredSession.videoUrl },
  { label: "720p (HD)", url: featuredSession.videoUrl },
  { label: "480p (SD)", url: featuredSession.videoUrl },
  { label: "360p (Data saver)", url: featuredSession.videoUrl },
];

/** LinkedIn event previews. LinkedIn hides event details from link previews, so titles/dates are editable placeholders.
 *  Each event plays on-site via videoUrl — replace the placeholder with the event's hosted recording file. */
export type EventLink = { id: string; title: string; host: string; date: string; cover: string; url: string; videoUrl: string };
export const linkedinEvents: EventLink[] = [
  "7500118700965117952", "7488670966882082816", "7488666084599009282", "7488675531350011904", "7488657203034464256",
].map((eid, i) => ({
  id: eid,
  title: ["Dora DAO Live Session", "GWY Fellowship Talk", "Build in Public AMA", "Career Fireside Chat", "Community Townhall"][i]!,
  host: "Dora DAO on LinkedIn",
  date: "LinkedIn Live event",
  cover: img(`li-event-${i}`, 600, 340),
  url: `https://www.linkedin.com/events/${eid}/`,
  videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
}));
