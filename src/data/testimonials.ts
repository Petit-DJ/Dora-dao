import voices1 from "@/assets/voices/voices.jpg";
import voices2 from "@/assets/voices/voices2.jpg";
import voices3 from "@/assets/voices/voices3.jpg";
import voices4 from "@/assets/voices/voices4.jpg";

export type GalleryItem =
  | { id: string; kind: "video"; thumb: string; videoUrl: string; caption: string }
  | { id: string; kind: "photo"; src: string; caption: string; tall?: boolean }
  | { id: string; kind: "quote"; quote: string; author: string; place: string }
  | { id: string; kind: "confession"; text: string }
  | {
      id: string;
      kind: "social";
      platform: "x" | "instagram" | "youtube" | "linkedin" | "pinterest" | "tiktok";
      url: string;
      title: string;
      author: string;
      thumbnail?: string;
    };

export const socialPosts: Extract<GalleryItem, { kind: "social" }>[] = [
  {
    id: "s1",
    kind: "social",
    platform: "x",
    url: "https://x.com/frogistani/status/2077636685354188818",
    title: "Rabiya Ijaz | Girls Who Yap (GWY) Fellowship 2.0",
    author: "Rabiya (@frogistani)",
  },
  {
    id: "s2",
    kind: "social",
    platform: "instagram",
    url: "https://www.instagram.com/reel/Da-beM2qzQ4/",
    title: "Community reel from the GWY Fellowship",
    author: "Instagram Reel",
  },
  {
    id: "s3",
    kind: "social",
    platform: "youtube",
    url: "https://www.youtube.com/shorts/RuxhXE2QOIM",
    title: "Self Introduction #GWYFellowship",
    author: "Rensalaita",
    thumbnail: "https://i.ytimg.com/vi/RuxhXE2QOIM/hq2.jpg",
  },
  {
    id: "s4",
    kind: "social",
    platform: "linkedin",
    url: "https://www.linkedin.com/posts/hafsah-hashmi-b781a6223_girlswhoyap-gwyfellowship-buildinpublic-ugcPost-7486465987517530112-xTL4/",
    title: "#GirlsWhoYap #GWYFellowship #BuildInPublic",
    author: "Hafsah Hashmi",
  },
  {
    id: "s5",
    kind: "social",
    platform: "pinterest",
    url: "https://in.pinterest.com/pin/1043638913683945594/",
    title: "Community pin from our members",
    author: "Pinterest",
  },
  {
    id: "s6",
    kind: "social",
    platform: "tiktok",
    url: "https://vt.tiktok.com/ZSXws7d8d/",
    title: "I studied Computer Science but hated coding… until AI and vibe coding changed everything.",
    author: "@centylgeek",
  },
];

export const gallery: GalleryItem[] = [
  {
    id: "g1",
    kind: "video",
    thumb: "https://i.ytimg.com/vi/2FP-bJYxtHE/hq2.jpg",
    videoUrl: "https://www.youtube.com/embed/2FP-bJYxtHE",
    caption: "“DoraDAO gave me a family” — Ayesha, India",
  },
  {
    id: "g2",
    kind: "quote",
    quote: "I found my voice here. GWY gave me the courage to chase my dreams.",
    author: "Priya",
    place: "India",
  },
  {
    id: "g3",
    kind: "photo",
    src: voices1,
    caption: "Global Conference, Bali 2025",
    tall: true,
  },
  {
    id: "g4",
    kind: "confession",
    text: "I joined to learn to code. I stayed because of the people.",
  },
  {
    id: "g5",
    kind: "video",
    thumb: "https://i.ytimg.com/vi/zwLdmc9e9Ug/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/zwLdmc9e9Ug",
    caption: "World Tour recap — Manila",
  },
  {
    id: "g6",
    kind: "photo",
    src: voices2,
    caption: "GWY Fellowship demo day",
  },
  {
    id: "g7",
    kind: "quote",
    quote: "Different countries, different languages, same dream.",
    author: "Maria",
    place: "Philippines",
  },
  {
    id: "g8",
    kind: "photo",
    src: voices3,
    caption: "Founders meetup, Lagos",
    tall: true,
  },
  {
    id: "g9",
    kind: "video",
    thumb: "https://i.ytimg.com/vi/aIS-pntkmq8/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/aIS-pntkmq8",
    caption: "“The best community I've ever been part of”",
  },
  {
    id: "g10",
    kind: "confession",
    text: "My first job offer came from someone I met at a Dora session.",
  },
  {
    id: "g11",
    kind: "photo",
    src: voices4,
    caption: "Product launch night, Berlin",
  },
];
