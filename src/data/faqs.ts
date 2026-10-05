export type Faq = { q: string; a: string; category: string };
export const faqCategories = ["All", "General", "Membership", "Programs", "GWY", "Products"];
export const faqs: Faq[] = [
  { category: "General", q: "What is Dora DAO?", a: "A global, member-owned community of builders, learners and dreamers." },
  { category: "General", q: "Where is Dora DAO based?", a: "Everywhere — we have chapters in 85+ cities across 45 countries." },
  { category: "Membership", q: "How can I join?", a: "Sign up with your email in the footer and join your nearest chapter." },
  { category: "Membership", q: "Is membership free?", a: "Yes, core membership is free for everyone." },
  { category: "Programs", q: "How do I apply to a program?", a: "Pick a program in the Programs section and press Apply." },
  { category: "GWY", q: "What is GWY Island?", a: "A safe space where women and girls come together to learn, create and lead." },
  { category: "Products", q: "Can I launch my product with Dora?", a: "Yes — Dora Labs helps members launch on Product Hunt and beyond." },
];
