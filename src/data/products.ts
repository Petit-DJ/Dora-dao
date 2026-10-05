export const productHighlights = [
  { label: "Launched on Product Hunt", value: "12 launches" },
  { label: "#1 Product of the Day", value: "3 times" },
  { label: "Total upvotes", value: "8.4K" },
  { label: "Users reached", value: "250K+" },
];

export type Product = { slug: string; name: string; logo: string; oneLiner: string; metric: string; badge?: string; description: string };
export const products: Product[] = [
  { slug: "doradao", name: "DoraDAO", logo: "D", oneLiner: "Community platform", metric: "60K members", badge: "#1 Product of the Day" },
  { slug: "matchmaker", name: "Matchmaker", logo: "M", oneLiner: "Find your people", metric: "12K matches", badge: "Top 5 of the week" },
  { slug: "dora-ai-academy", name: "Dora AI Academy", logo: "A", oneLiner: "Learn AI by building", metric: "9K learners" },
  { slug: "talent-directory", name: "Talent Directory", logo: "T", oneLiner: "Hire from the community", metric: "1.2K hires" },
  { slug: "doraboot", name: "DoraBoot", logo: "B", oneLiner: "Bootcamps that ship", metric: "40 cohorts", badge: "Featured" },
  { slug: "dora-labs", name: "Dora Labs", logo: "L", oneLiner: "Experiments in public", metric: "25 prototypes" },
].map((p) => ({ ...p, description: `${p.name} is a placeholder product description. Built by Dora DAO members to solve a real community problem.` }));
