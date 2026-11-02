// ============= Full file contents =============
export const programs = [
  {
    name: "GirlsWhoYap Fellowship",
    category: "Learning",
    icon: "sprout",
    description:
      "A women-first fellowship connecting hands-on learning, AI experimentation, public storytelling and real projects with a community that grows together.",
    highlights: [
      { value: 5000, label: "Voices signed up", icon: "people" },
      { value: 600000, label: "Social reach", icon: "reach" },
      { value: 2000, label: "User-generated posts", icon: "posts" },
      { value: 11, label: "Countries represented", icon: "globe" },
      { value: 50, label: "Workshops & events", icon: "heart" },
    ],
  },
  {
    name: "GirlsWhoYap Conference",
    category: "Events",
    icon: "mic",
    description:
      "A creator-first gathering for women across culture, community and emerging technology, with conversations, creative challenges and opportunities to connect and contribute.",
    highlights: [
      { value: 1200, label: "Attendees gathered", icon: "people" },
      { value: 30, label: "Sessions hosted", icon: "posts" },
      { value: 25, label: "Speakers on stage", icon: "reach" },
      { value: 8, label: "Cities connected", icon: "globe" },
      { value: 30000, label: "Conference reach", icon: "heart" },
    ],
  },
  {
    name: "DoraHacks",
    category: "Building",
    icon: "code",
    description:
      "Build a working product, launch publicly and learn from real users. DoraHacks welcomes complementary skills beyond coding and keeps the journey going beyond submission.",
    highlights: [
      { value: 500, label: "Builders joined", icon: "people" },
      { value: 80, label: "Projects started", icon: "posts" },
      { value: 40, label: "Mentors guiding", icon: "heart" },
      { value: 12, label: "Hack nights held", icon: "globe" },
      { value: 1500, label: "Community votes cast", icon: "reach" },
    ],
  },
  {
    name: "Buildwithus",
    category: "Building",
    icon: "hammer",
    description:
      "A contribution-first cohort for builders, creators and operators. Turn an idea into consistent progress through weekly milestones, public updates, peer feedback and a final showcase.",
    highlights: [
      { value: 350, label: "Builders onboard", icon: "people" },
      { value: 120, label: "Ideas pitched", icon: "posts" },
      { value: 60, label: "Projects in progress", icon: "reach" },
      { value: 20, label: "Demo days run", icon: "globe" },
      { value: 300, label: "Collaborations formed", icon: "heart" },
    ],
  },
  {
    name: "DoraWinterofCode ( DWoC )",
    category: "Building",
    icon: "snow",
    description:
      "A winter coding initiative focused on learning through contribution. DoraWinterofCode brings coding, collaboration and a community spirit together to help ideas move forward.",
    highlights: [
      { value: 600, label: "Contributors enrolled", icon: "people" },
      { value: 90, label: "Projects taken up", icon: "posts" },
      { value: 45, label: "Mentors on call", icon: "heart" },
      { value: 1500, label: "Contributions merged", icon: "reach" },
      { value: 25, label: "Teams formed", icon: "globe" },
    ],
  },
  {
    name: "WORLD TOUR ft. Dora",
    category: "More",
    icon: "globe",
    description:
      "Bring DoraDAO to life in your city through community-led meetups, workshops and virtual gatherings. Local hosts shape each stop around their people, stories and culture.",
    highlights: [
      { value: 800, label: "Members exploring", icon: "people" },
      { value: 15, label: "Meetups hosted", icon: "globe" },
      { value: 40, label: "Discussions opened", icon: "posts" },
      { value: 6, label: "Cities visited", icon: "heart" },
      { value: 200, label: "Ideas shared", icon: "reach" },
    ],
  },
  {
    name: "AiFest",
    category: "Events",
    icon: "sparkles",
    description:
      "A celebration of curiosity and creativity in artificial intelligence. AiFest brings people together to explore AI ideas, exchange perspectives and imagine what comes next.",
    highlights: [
      { value: 1500, label: "Attendees curious", icon: "people" },
      { value: 35, label: "Sessions delivered", icon: "posts" },
      { value: 20, label: "Live demos shown", icon: "reach" },
      { value: 10, label: "Hands-on workshops", icon: "heart" },
      { value: 50000, label: "Festival reach", icon: "globe" },
    ],
  },
  {
    name: "CommunityWeek",
    category: "Events",
    icon: "people",
    description:
      "A week dedicated to the people who make the community what it is. CommunityWeek is a chance to connect, share stories and celebrate the ideas and relationships growing within DoraDAO.",
    highlights: [
      { value: 900, label: "Participants involved", icon: "people" },
      { value: 25, label: "Events in the week", icon: "posts" },
      { value: 40, label: "Hosts stepping up", icon: "heart" },
      { value: 12, label: "Chapters taking part", icon: "globe" },
      { value: 100, label: "Stories shared", icon: "reach" },
    ],
  },
  {
    name: "M2M Mentorship program",
    category: "Learning",
    icon: "heart",
    description:
      "A community-centered approach to learning from one another. M2M Mentorship is about sharing experience, asking questions and finding encouragement for the next step in your journey.",
    highlights: [
      { value: 300, label: "Mentees learning", icon: "people" },
      { value: 60, label: "Mentors giving time", icon: "heart" },
      { value: 200, label: "Sessions held", icon: "posts" },
      { value: 15, label: "Tracks offered", icon: "globe" },
      { value: 90, label: "Pairs matched", icon: "reach" },
    ],
  },
  {
    name: "Hooman",
    category: "More",
    icon: "smile",
    description:
      "People first, always. Hooman celebrates human connection, making space for belonging, shared interests and the everyday conversations that turn a network into a community.",
    highlights: [
      { value: 2500, label: "Members connected", icon: "people" },
      { value: 100, label: "Meetups held", icon: "globe" },
      { value: 35, label: "Interest circles", icon: "heart" },
      { value: 18, label: "Cities gathering", icon: "reach" },
      { value: 10000, label: "Conversations started", icon: "posts" },
    ],
  },
] as const;

export function formatHighlightValue(value: number) {
  return value >= 100000 ? `${value / 100000} lakh+` : `${value.toLocaleString("en-US")}+`;
}
