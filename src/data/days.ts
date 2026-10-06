import iwd from "@/assets/imp days/8 march.png";
import founding from "@/assets/imp days/15 april.png";
import youth from "@/assets/imp days/12 aug.png";
import girl from "@/assets/imp days/11 oct.png";
import islandday from "@/assets/imp days/20 nov.png";
import rights from "@/assets/imp days/10 dec.png";

export type ImportantDay = { id: string; day: number; month: string; title: string; story: string; image: string; steps: string[] };

export const importantDays: ImportantDay[] = [
  { id: "d1", day: 8, month: "March", title: "International Women's Day", story: "A day to celebrate progress, demand equality and honour the strength of women everywhere.", image: iwd, steps: ["Share a story of a woman who inspires you", "Join the GWY live session", "Mentor someone new", "Wear purple and post with #DoraDAO"] },
  { id: "d2", day: 15, month: "April", title: "Dora Founding Day", story: "The day our first meetup happened in 2025. We celebrate how far we've come together.", image: founding, steps: ["Attend your local chapter party", "Write a note to a fellow member", "Vote on next year's programs"] },
  { id: "d3", day: 12, month: "August", title: "International Youth Day", story: "Celebrating young people as builders of the future.", image: youth, steps: ["Host a workshop for students", "Share your first-project story", "Invite a friend to join"] },
  { id: "d4", day: 11, month: "October", title: "International Day of the Girl", story: "Championing girls' rights and opportunities worldwide.", image: girl, steps: ["Sponsor a GWY seat", "Run a coding circle", "Amplify girls' voices online", "Donate to NGO Grants"] },
  { id: "d5", day: 20, month: "November", title: "GWY Island Day", story: "The day GWY Island was founded — a home for every voice.", image: islandday, steps: ["Remix the anthem", "Collect a passport stamp", "Raise the flag at your event"] },
  { id: "d6", day: 10, month: "December", title: "Human Rights Day", story: "Standing for dignity, equality and freedom for all.", image: rights, steps: ["Read the community constitution", "Volunteer with a partner NGO", "Start a discussion thread"] },
];
