export const productHighlights = [
  { label: "Products", value: "146" },
  { label: "Teams", value: "500+" },
  { label: "Countries", value: "35+" },
  { label: "Mentors", value: "40+" },
];

export type Product = {
  slug: string;
  name: string;
  logo: string;
  oneLiner: string;
  metric: string;
  badge?: string;
  description: string;
  launchUrl: string;
};

export const products: Product[] = [
  {
    slug: "allura",
    name: "ALLURA",
    logo: "A",
    oneLiner: "Built by Delulu Developers",
    metric: "Delulu Developers",
    description: "ALLURA is a community-built product from Dora DAO members solving a real problem.",
    launchUrl: "https://www.producthunt.com/products/allura-2?launch=allura-2",
  },
  {
    slug: "hunch",
    name: "HUNCH",
    logo: "H",
    oneLiner: "Built by Phantom Hunch",
    metric: "Phantom Hunch",
    description: "HUNCH is a community-built product from Dora DAO members solving a real problem.",
    launchUrl: "https://www.producthunt.com/products/hunch-6?launch=hunch-7",
  },
  {
    slug: "decisionos",
    name: "DECISIONOS",
    logo: "D",
    oneLiner: "Built by Code Blooded",
    metric: "Code Blooded",
    description: "DECISIONOS is a community-built product from Dora DAO members solving a real problem.",
    launchUrl: "https://www.producthunt.com/products/decisionos?launch=decisionos",
  },
  {
    slug: "robtor",
    name: "ROBTOR / APP-DEBUG",
    logo: "R",
    oneLiner: "Built by Robtor",
    metric: "Robtor",
    description: "ROBTOR is a community-built product from Dora DAO members solving a real problem.",
    launchUrl: "https://www.producthunt.com/products/robtor?launch=robtor",
  },
  {
    slug: "havenslight",
    name: "HAVENSLIGHT",
    logo: "H",
    oneLiner: "Built by Astral Coders",
    metric: "Astral Coders",
    description: "HAVENSLIGHT is a community-built product from Dora DAO members solving a real problem.",
    launchUrl: "https://www.producthunt.com/products/havenslight",
  },
  {
    slug: "talk-me-out-of-it",
    name: "TALK ME OUT OF IT",
    logo: "T",
    oneLiner: "Built by Talk Me Out of It",
    metric: "Talk Me Out of It",
    description: "TALK ME OUT OF IT is a community-built product from Dora DAO members solving a real problem.",
    launchUrl: "https://www.producthunt.com/products/talk-me-out-of-it?launch=talk-me-out-of-it",
  },
];
