export const newsletterFormats = [
  { id: "shout-out", title: "A. Shoutout", maxWords: 15 },
  { id: "detailed", title: "B. Detailed", maxWords: 45, images: 1 },
  { id: "deep-dive", title: "C. Deep Dive", minWords: 500, maxWords: 700 },
] as const;
export const sponsorContact = (subject: string) =>
  `mailto:Connectdoradao@gmail.com?subject=${encodeURIComponent(subject)}`;
