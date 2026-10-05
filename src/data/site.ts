export const img = (seed: string, w = 800, h = 600) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

export type NavItem = { id: string; label: string };
export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "map", label: "Map" },
  { id: "programs", label: "Programs" },
  { id: "findyourplace", label: "Find your place" },
  { id: "testimonials", label: "Testimonials" },
  { id: "sessions", label: "Sessions" },
  { id: "products", label: "Products" },
  { id: "island", label: "GWY Island" },
  { id: "days", label: "Important Days" },
  { id: "upcomingevents", label: "Events" },
  { id: "workwithus", label: "Work with us" },
  { id: "faq", label: "FAQ" },
];

/** Hero story. Each segment is text, an animated number, or an inline picture. */
export type StorySegment =
  | { type: "text"; value: string }
  | { type: "number"; value: number; suffix?: string; label: string }
  | { type: "image"; src: string; alt: string };

export const heroStoryLeft: StorySegment[] = [
  { type: "text", value: "Hi, I am Dora 💜 We started this community in" },
  { type: "image", src: img("dora-2025", 120, 120), alt: "First Dora meetup in 2025" },
  { type: "text", value: "2025 with a handful of friends around a kitchen table. Within a year we grew to" },
  { type: "number", value: 60, suffix: "K", label: "members" },
  { type: "text", value: "members across" },
  { type: "number", value: 45, label: "countries" },
  { type: "text", value: "countries." },
];
export const heroStoryRight: StorySegment[] = [
  { type: "text", value: "Together we've hosted" },
  { type: "number", value: 22, suffix: "K", label: "hours of sessions" },
  { type: "text", value: "hours of sessions, reached" },
  { type: "number", value: 100, suffix: "K", label: "learners" },
  { type: "image", src: img("dora-crowd", 120, 120), alt: "Community gathering" },
  { type: "text", value: "learners and shipped" },
  { type: "number", value: 45, label: "products" },
  { type: "text", value: "products built by our members. This is our story — and you're part of it." },
];

export type Stat = { label: string; value: number; suffix?: string };
export const stats: Stat[] = [
  { label: "Members", value: 60, suffix: "K+" },
  { label: "Events", value: 320, suffix: "+" },
  { label: "Cities", value: 85 },
  { label: "Countries", value: 45 },
];

export const socials = [
  { label: "X / Twitter", href: "https://x.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "Discord", href: "https://discord.com" },
];

export const about = {
  title: "About Dora DAO",
  whyName:
    "“Dora” comes from the Greek word for “gift”. We believe every person carries a gift worth sharing — the name is a reminder that our community exists to help those gifts find the world.",
  howItWorks:
    "Dora DAO is member-owned. Chapters run locally, programs are proposed and voted on by members, and resources are allocated transparently through community governance.",
  story:
    "It began as a weekend study circle. One meetup became ten, ten became a hundred, and today Dora is a global network of builders, learners and dreamers.",
};

