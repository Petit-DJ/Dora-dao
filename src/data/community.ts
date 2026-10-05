import { img } from "./site";

export type PlacePath = {
  id: string;
  icon: "build" | "learn" | "speak" | "connect" | "give" | "partner";
  title: string;
  description: string;
  action: string;
  target: string;
};

export const placePaths: PlacePath[] = [
  { id: "build", icon: "build", title: "Build", description: "Turn an idea into a project with peers, mentors and practical support.", action: "Explore programs", target: "programs" },
  { id: "learn", icon: "learn", title: "Learn", description: "Join workshops, academies and sessions made for every experience level.", action: "Browse sessions", target: "sessions" },
  { id: "speak", icon: "speak", title: "Speak", description: "Share your story, teach what you know and make new voices heard.", action: "Meet speakers", target: "sessions" },
  { id: "connect", icon: "connect", title: "Connect", description: "Find your local chapter and meet a global circle of collaborators.", action: "Explore the map", target: "map" },
  { id: "give", icon: "give", title: "Give", description: "Mentor a member, volunteer your time or support a community grant.", action: "Work with us", target: "workwithus" },
  { id: "partner", icon: "partner", title: "Partner", description: "Bring Dora programs to your university, company or organization.", action: "See partnerships", target: "workwithus" },
];

export type UpcomingEvent = {
  id: string;
  day: number;
  month: string;
  title: string;
  location: string;
  format: "Online" | "In person" | "Hybrid";
  description: string;
  image: string;
  url: string;
};

export const upcomingEvents: UpcomingEvent[] = [
  { id: "e1", day: 12, month: "Oct", title: "Dora AI Building Day", location: "Online · Global", format: "Online", description: "A hands-on day for turning an AI idea into a working first version with mentors beside you.", image: img("dora-ai-building-day", 760, 480), url: "#" },
  { id: "e2", day: 18, month: "Oct", title: "DoraDAO World Conference", location: "Bengaluru, India", format: "Hybrid", description: "Stories, workshops and new collaborations from chapters across the world.", image: img("dora-world-conference", 760, 480), url: "#" },
  { id: "e3", day: 25, month: "Oct", title: "Girls Who Yap Circle", location: "Lagos, Nigeria", format: "In person", description: "An open community circle for girls and women to speak, listen and build confidence together.", image: img("gwy-circle-lagos", 760, 480), url: "#" },
  { id: "e4", day: 3, month: "Nov", title: "Fellowship Demo Night", location: "Online · Global", format: "Online", description: "Meet the latest founder fellows and see the products they have built with the community.", image: img("dora-demo-night", 760, 480), url: "#" },
];

export type WorkPath = { icon: "team" | "volunteer" | "mentor"; title: string; description: string; action: string };
export const workPaths: WorkPath[] = [
  { icon: "team", title: "Join the team", description: "Help shape programs, community experiences and partnerships across the world.", action: "View open roles" },
  { icon: "volunteer", title: "Volunteer", description: "Host a circle, support an event or offer your skills to a member-led project.", action: "Become a volunteer" },
  { icon: "mentor", title: "Mentor", description: "Share the lessons you have learned and guide someone through their next step.", action: "Become a mentor" },
];

export type Collaboration = {
  icon: "universities" | "companies" | "organizations";
  title: string;
  description: string;
  examples: string[];
};

export const collaborations: Collaboration[] = [
  { icon: "universities", title: "Universities", description: "We bring practical learning and global community into the student experience.", examples: ["Campus chapters", "Career workshops", "Student fellowships"] },
  { icon: "companies", title: "Companies", description: "We connect teams with emerging talent, fresh ideas and meaningful community impact.", examples: ["Talent programs", "Expert sessions", "Sponsored challenges"] },
  { icon: "organizations", title: "Organizations / NGOs", description: "We co-create accessible programs that reach communities where support matters most.", examples: ["Community grants", "Local activations", "Shared research"] },
];