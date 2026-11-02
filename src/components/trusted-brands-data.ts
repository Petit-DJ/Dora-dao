type Pointer = { url: string };
const files = import.meta.glob<Pointer>("../assets/partners/*.png.asset.json", {
  eager: true,
  import: "default",
});
const logo = (slug: string) => files[`../assets/partners/${slug}.png.asset.json`]?.url ?? "";

export type PartnerCategory = "academia" | "tech" | "consumer";
export const partnerCategories: { id: "all" | PartnerCategory; label: string }[] = [
  { id: "all", label: "All partners" },
  { id: "academia", label: "Universities" },
  { id: "tech", label: "Tech & AI" },
  { id: "consumer", label: "Brands & finance" },
];

const list: [string, string, PartnerCategory][] = [
  ["mit", "Massachusetts Institute of Technology", "academia"],
  ["uchicago", "The University of Chicago", "academia"],
  ["uic", "University of Illinois Chicago", "academia"],
  ["imperial", "Imperial College London", "academia"],
  ["eth", "ETH Zürich", "academia"],
  ["edinburgh", "The University of Edinburgh", "academia"],
  ["openai", "OpenAI", "tech"],
  ["nvidia", "NVIDIA", "tech"],
  ["microsoft", "Microsoft", "tech"],
  ["amazon", "Amazon", "consumer"],
  ["google", "Google", "tech"],
  ["meta", "Meta", "tech"],
  ["render", "Render", "tech"],
  ["medfin", "Medfin", "consumer"],
  ["growthx", "GrowthX", "tech"],
  ["neuralarc", "NeuralArc", "tech"],
  ["autodesk", "Autodesk", "tech"],
  ["sprinklr", "Sprinklr", "tech"],
  ["cloudeagle", "CloudEagle.ai", "tech"],
  ["apple", "Apple", "tech"],
  ["adobe", "Adobe", "tech"],
  ["samsung", "Samsung", "tech"],
  ["blinkit", "Blinkit", "consumer"],
  ["zomato", "Zomato", "consumer"],
  ["paperflite", "Paperflite", "tech"],
  ["tin-computers", "TIN Computers", "tech"],
  ["skoob", "Skoob", "consumer"],
  ["dodo-payments", "Dodo Payments", "consumer"],
  ["xyz", ".xyz", "tech"],
  ["disney-plus", "Disney+", "consumer"],
  ["miro", "Miro", "tech"],
  ["jiostar", "JioStar", "consumer"],
  ["morgan-stanley", "Morgan Stanley", "consumer"],
  ["accenture", "Accenture", "tech"],
  ["prime", "Prime Video", "consumer"],
  ["d-logo", "D.", "consumer"],
  ["amex", "American Express", "consumer"],
  ["visa", "Visa", "consumer"],
  ["salesforce", "Salesforce", "tech"],
  ["oracle", "Oracle", "tech"],
  ["uber", "Uber", "consumer"],
  ["o2", "O2", "consumer"],
];

export const partners = list.map(([slug, name, category]) => ({
  slug,
  name,
  category,
  image: logo(slug),
}));

export function partnerRows(category: "all" | PartnerCategory, rowCount = 3) {
  const items = category === "all" ? partners : partners.filter((p) => p.category === category);
  const count = Math.max(1, Math.min(rowCount, Math.ceil(items.length / 6)));
  const size = Math.ceil(items.length / count);
  return Array.from({ length: count }, (_, i) => items.slice(i * size, (i + 1) * size));
}
