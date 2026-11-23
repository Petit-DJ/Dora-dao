import fellowship from "@/assets/programs/fellowship.png.asset.json";
import community from "@/assets/programs/community.png.asset.json";
import conference from "@/assets/programs/conference.png.asset.json";
import gathering from "@/assets/programs/gathering.png.asset.json";
import p1 from "@/assets/mosaic/portrait-1.jpg";
import p2 from "@/assets/mosaic/portrait-2.jpg";
import p4 from "@/assets/mosaic/portrait-4.jpg";
import p5 from "@/assets/mosaic/portrait-5.jpg";
import p6 from "@/assets/mosaic/portrait-6.jpg";
import p7 from "@/assets/mosaic/portrait-7.jpg";

export const FELLOWSHIP_EMAIL = "Connectdoradao@gmail.com";

export const fellowshipSkills = [
  "Web3", "AI", "Product", "Design", "Public Speaking", "Community", "Engineering",
  "Content", "Growth", "Research", "Leadership", "Hackathons", "Open Source", "Storytelling",
];

export const fellowshipHighlights = [
  { value: "5,000+", label: "Voices signed up" },
  { value: "600K", label: "Social reach" },
  { value: "2,000+", label: "User-generated posts" },
  { value: "11", label: "Countries represented" },
  { value: "50+", label: "Workshops & events" },
];

export const fellowshipPillars = [
  { title: "Real Skills with a Real Community", text: "Hands-on workshops pair practical skills with a warm community, so every lesson turns into something you can actually use." },
  { title: "One Mentor in Your Corner", text: "Every fellow is matched with a mentor who guides their journey, from first goals to final showcase." },
  { title: "Learn by Building", text: "Ship real projects through hackathons and real-world initiatives, building a portfolio that speaks for itself." },
  { title: "Every Time Zone Welcome", text: "Live sessions and recordings across regions mean you can learn alongside fellows wherever you are." },
  { title: "Cross-Community Learning", text: "Meet builders, creators and leaders from other DoraDAO programs and discover paths you never knew existed." },
];

export const fellowshipTracks = [
  { title: "Workshops", text: "Weekly hands-on sessions on Web3, AI, product and design, led by practitioners who've done the work. Every workshop ends with something you've made yourself.", story: "Inside a GWY workshop week", photo: fellowship.url, thumb: p1, alt: "Fellows working together at a workshop" },
  { title: "Mentorship", text: "One-on-one and circle mentoring with women leading in tech. Mentors help you set goals, unblock challenges and plan your next move with confidence.", story: "How mentors shape the fellowship", photo: community.url, thumb: p2, alt: "A mentor circle gathered in conversation" },
  { title: "Build Projects", text: "Turn ideas into real products through team sprints and hackathons. Fellows leave with shipped projects, feedback from builders and a portfolio to show.", story: "From idea to demo in four weeks", photo: gathering.url, thumb: p4, alt: "Fellows building a project together" },
  { title: "Voice & Visibility", text: "Find your voice on stage and online. Practise speaking, share your story with the GirlsWhoYap community and step onto panels at our conference.", story: "Fellows taking the conference stage", photo: conference.url, thumb: p5, alt: "A fellow speaking at a conference" },
  { title: "Community Circles", text: "Small, friendly circles that meet regularly to share wins, swap resources and keep each other going, long after the fellowship ends.", story: "Why circles keep fellows connected", photo: fellowship.url, thumb: p6, alt: "Fellows gathered in a community circle" },
  { title: "Demo Day", text: "Celebrate the journey by presenting your work to the community, partners and mentors, the moment your growth becomes visible to everyone.", story: "Highlights from the last demo day", photo: gathering.url, thumb: p7, alt: "Fellows celebrating at demo day" },
];
