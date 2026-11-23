import product from "@/assets/podcast/From_Idea_to_Product_with_Gemini.png.asset.json";
import filmmaking from "@/assets/podcast/DoraDAO_Filmmaking_101_Seeing_Like_a_Creator.png.asset.json";
import vision from "@/assets/podcast/DoraDAO_Podcast_Vision_to_Reality.png.asset.json";
import web3 from "@/assets/podcast/DoraDAO_Podcast_Web3_101.png.asset.json";
import s1 from "@/assets/podcast/stream-ep1.jpg.asset.json";
import s2 from "@/assets/podcast/stream-ep2.jpg.asset.json";
import s3 from "@/assets/podcast/stream-ep3.jpg.asset.json";
import s4 from "@/assets/podcast/stream-ep4.jpg.asset.json";
import s5 from "@/assets/podcast/stream-ep5.jpg.asset.json";
import s6 from "@/assets/podcast/stream-ep6.jpg.asset.json";

export type PodcastItem = { id: string; title: string; subtitle: string; label: string; image: string; youtubeId?: string; linkedinUrl?: string };
export const youtubeUrl = (id: string) => `https://www.youtube.com/watch?v=${id}`;
export const youtubeEmbed = (id: string) => `https://www.youtube.com/embed/${id}`;
export const youtubeThumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
export const youtubeDownload = (id: string) => `https://www.ssyoutube.com/watch?v=${id}`;
const STREAM = "WZowgoQjUi0";
export const featuredEpisode: PodcastItem = { id: "featured", title: "From Idea to Product", subtitle: "Building with Gemini", label: "Featured conversation", image: product.url, youtubeId: "HZayGAF-7Y0", linkedinUrl: "https://www.linkedin.com/events/7495804002660659200" };
export const episodes: PodcastItem[] = [
  { id: "ep57", title: "From Idea to Product", subtitle: "Building with Gemini", label: "EP 57", image: product.url },
  { id: "ep56", title: "Filmmaking 101", subtitle: "Seeing Like a Creator", label: "EP 56", image: filmmaking.url },
  { id: "ep55", title: "Vision to Reality", subtitle: "DoraDAO Podcast", label: "EP 55", image: vision.url },
  { id: "ep54", title: "Web3 101", subtitle: "DoraDAO Podcast", label: "EP 54", image: web3.url },
];
const streamThumbs = [s1.url, s2.url, s3.url, s4.url, s5.url, s6.url];
export const streams: PodcastItem[] = streamThumbs.map((image, i) => ({
  id: `stream-ep${i + 1}`, title: "Ideas are cute. Shipping is hot", subtitle: "", label: `Season 1 · Episode ${i + 1} · Live Demos`, image, youtubeId: STREAM,
}));