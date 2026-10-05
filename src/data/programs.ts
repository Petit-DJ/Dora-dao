import { img } from "./site";

export type Program = {
  id: string;
  name: string;
  category: "Community" | "Funding";
  images: string[];
  description: string;
  whoCanApply: string[];
  applyUrl: string;
  lastEdition: { label: string; value: string }[];
};

const programDefinitions: { name: string; category: Program["category"]; applyUrl: string }[] = [
  { name: "Girls Who Yap (GWY)", category: "Community", applyUrl: "/fellowship" },
  { name: "DoraDAO World Tour", category: "Community", applyUrl: "#map" },
  { name: "Community Starter", category: "Community", applyUrl: "#workwithus" },
  { name: "NGO Grants", category: "Funding", applyUrl: "#workwithus" },
  { name: "Founder Fellowship", category: "Funding", applyUrl: "/fellowship" },
];

export const programs: Program[] = programDefinitions.map(({ name, category, applyUrl }, i) => ({
  id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  name,
  category,
  images: [0, 1, 2].map((k) => img(`prog-${i}-${k}`, 900, 600)),
  description: `${name} brings members together to learn, build and grow through workshops, mentorship and real-world initiatives.`,
  whoCanApply: ["Students and early-career professionals", "Members of any Dora chapter", "Builders with an idea to share", "Anyone committed to the code of conduct"],
  applyUrl,
  lastEdition: [
    { label: "Edition", value: `#${(i % 4) + 2}` },
    { label: "Participants", value: `${300 + i * 85}` },
    { label: "Cities", value: `${6 + i}` },
    { label: "Duration", value: `${4 + (i % 3) * 2} weeks` },
  ],
}));

export const programCategories = ["All", "Community", "Funding"] as const;
