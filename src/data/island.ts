import { img } from "./site";

export const islandImage = img("island", 900, 650);

export type Artifact = { id: string; icon: string; name: string; short: string; story: string[] };
export const artifacts: Artifact[] = [
  { id: "flag", icon: "🚩", name: "Flag", short: "Our identity", story: ["The flag was drafted by 40 members over a weekend hackathon.", "Its first edition was raised at the 2025 Bali conference.", "Each colour stands for a value: courage, curiosity and care."] },
  { id: "anthem", icon: "🎵", name: "Anthem", short: "Our voice", story: ["Written collaboratively in 9 languages.", "First performed live on the World Tour finale.", "Members remix it every year for Island Day."] },
  { id: "culture", icon: "🌺", name: "Culture", short: "Our way", story: ["Kindness first, ship often, share everything.", "Rituals include Friday demos and Monday gratitude threads."] },
  { id: "rings", icon: "💍", name: "Rings", short: "For alumni", story: ["Given to every GWY graduate.", "The first ten rings were hand-made by a member jeweller."] },
  { id: "constitution", icon: "📜", name: "Constitution", short: "Our values", story: ["Ratified by an on-chain vote of 4,000 members.", "Amended twice since — each change proposed by members."] },
  { id: "passport", icon: "🛂", name: "Passport", short: "Island citizenship", story: ["Every member gets a digital passport.", "Stamps are collected by attending events around the world."] },
];
