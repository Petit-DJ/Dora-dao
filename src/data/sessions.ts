import { img } from "./site";

export const featuredSession = {
  title: "Building for the Next Billion",
  speaker: "Aisha Khan, Google",
  poster: img("featured", 1280, 720),
  videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
};

export const companies = ["Google", "Microsoft", "Meta", "Amazon", "Apple", "Canva", "Stripe", "Notion"];

export type Session = {
  id: string;
  title: string;
  speaker: string;
  cover: string;
  program: string;
  year: number;
  topic: string;
  watchUrl: string;
  downloadUrl: string;
};

/** The four featured session cards to show in the Sessions section (one row of four). */
export const sessions: Session[] = [
  {
    id: "s1",
    title: "Main Character Energy, Designing your life",
    speaker: "Dora DAO",
    cover: img("session-main-char", 600, 360),
    program: "GWY",
    year: 2025,
    topic: "Career",
    watchUrl:
      "https://www.linkedin.com/events/maincharacterenergy-designingyo7488666084599009282/theater/",
    downloadUrl:
      "https://www.linkedin.com/events/maincharacterenergy-designingyo7488666084599009282/theater/",
  },
  {
    id: "s2",
    title: "Hack Map Build, Interactive session with Miro",
    speaker: "Dora DAO",
    cover: img("session-hack-map", 600, 360),
    program: "GWY",
    year: 2025,
    topic: "Product",
    watchUrl:
      "https://www.linkedin.com/events/hack-map-build-interactivesessi7496656805754908672/theater/",
    downloadUrl:
      "https://www.linkedin.com/events/hack-map-build-interactivesessi7496656805754908672/theater/",
  },
  {
    id: "s3",
    title: "How to tell stories people don't forget",
    speaker: "Dora DAO",
    cover: img("session-storytelling", 600, 360),
    program: "GWY",
    year: 2025,
    topic: "Design",
    watchUrl:
      "https://www.linkedin.com/events/howtotellstoriespeopledon-tforg7488673710808121344/theater/",
    downloadUrl:
      "https://www.linkedin.com/events/howtotellstoriespeopledon-tforg7488673710808121344/theater/",
  },
  {
    id: "s4",
    title: "From Idea to Product: Building with OpenAI",
    speaker: "Dora DAO",
    cover: img("session-openai", 600, 360),
    program: "GWY",
    year: 2025,
    topic: "AI",
    watchUrl:
      "https://www.linkedin.com/events/fromideatoproduct-buildingwitho7488653576181796865/theater/",
    downloadUrl:
      "https://www.linkedin.com/events/fromideatoproduct-buildingwitho7488653576181796865/theater/",
  },
];

export type Speaker = {
  id: string;
  name: string;
  role: string;
  company: string;
  type: "Speaker" | "Mentor";
  photo: string;
  url: string;
};

export const speakers: Speaker[] = (
  [
    ["Aisha Khan", "Product Lead", "Google"],
    ["Rohan Mehta", "Engineering Manager", "Meta"],
    ["Priya Sharma", "Design Director", "Canva"],
    ["Daniel Lee", "Founder", "Stealth"],
    ["Maria Lopez", "Community Lead", "Notion"],
    ["James Wilson", "Tech Lead", "Amazon"],
    ["Arjun Nair", "Product Manager", "Microsoft"],
    ["Fatima Bello", "Researcher", "Stripe"],
  ] as string[][]
).map(([name, role, company]: string[], i) => ({
  id: `sp${i}`,
  name: name!,
  role: role!,
  company: company!,
  type: (i % 2 ? "Mentor" : "Speaker") as "Speaker" | "Mentor",
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

/**
 * LinkedIn live event cards.
 * LinkedIn blocks embedding — cards open the supplied URL in a new tab.
 * cover uses a real LinkedIn og-image URL pattern which may be accessible.
 */
export type EventLink = {
  id: string;
  title: string;
  host: string;
  date: string;
  cover: string;
  url: string;
  /** videoUrl kept for schema compat but LinkedIn cards open the url instead of playing inline */
  videoUrl: string;
};

export const linkedinEvents: EventLink[] = [
  {
    id: "li-1",
    title: "Hang Out With Mentors — 4FT Dora",
    host: "Dora DAO on LinkedIn",
    date: "LinkedIn Live event",
    cover: img("li-hangout-mentors", 600, 340),
    url: "https://www.linkedin.com/events/hangoutwithmentors-4ft-dora7497978649908948992/theater/",
    videoUrl:
      "https://www.linkedin.com/events/hangoutwithmentors-4ft-dora7497978649908948992/theater/",
  },
  {
    id: "li-2",
    title: "Search Less, Solve More — Insights",
    host: "Dora DAO on LinkedIn",
    date: "LinkedIn Live event",
    cover: img("li-search-less", 600, 340),
    url: "https://www.linkedin.com/events/searchless-solvemore-insights7496843890054868992/theater/",
    videoUrl:
      "https://www.linkedin.com/events/searchless-solvemore-insights7496843890054868992/theater/",
  },
  {
    id: "li-3",
    title: "What It Takes to Bet on Yourself",
    host: "Dora DAO on LinkedIn",
    date: "LinkedIn Live event",
    cover: img("li-bet-yourself", 600, 340),
    url: "https://www.linkedin.com/events/whatittakestobetonyourself7495804002660659200/theater/",
    videoUrl:
      "https://www.linkedin.com/events/whatittakestobetonyourself7495804002660659200/theater/",
  },
  {
    id: "li-4",
    title: "Product Hunt Launch 101",
    host: "Dora DAO on LinkedIn",
    date: "LinkedIn Live event",
    cover: img("li-product-hunt", 600, 340),
    url: "https://www.linkedin.com/events/producthuntlaunch-1017488670966882082816/theater/",
    videoUrl:
      "https://www.linkedin.com/events/producthuntlaunch-1017488670966882082816/theater/",
  },
  {
    id: "li-5",
    title: "From Idea to Product: Building with Gemini",
    host: "Dora DAO on LinkedIn",
    date: "LinkedIn Live event",
    cover: img("li-gemini", 600, 340),
    url: "https://www.linkedin.com/events/aicode-productendtoend-gemini7488650875930865667/theater/",
    videoUrl:
      "https://www.linkedin.com/events/aicode-productendtoend-gemini7488650875930865667/theater/",
  },
];
