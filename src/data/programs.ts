import gwyprog from "@/assets/programs/gwy_prog.jpg";
import gwyprog1 from "@/assets/programs/gwy_prog1.jpg";
import gwyprog2 from "@/assets/programs/gwy_prog2.jpg";
import worldTour1 from "@/assets/programs/world_tour-1.jpg";
import worldTour2 from "@/assets/programs/World-tour-2.jpg";
import worldTour3 from "@/assets/programs/world-tour-3.jpg";
import gwyConf from "@/assets/programs/gwy_conf.jpg";
import gwyConf2 from "@/assets/programs/gwy_conf2.jpg";
import gwyConf3 from "@/assets/programs/gwy_conf3.jpg";
import w3m1 from "@/assets/programs/w3m1.jpg";
import w3m2 from "@/assets/programs/w3m2.jpg";
import dorahood1 from "@/assets/programs/dorahood-1.jpg";
import dorahood2 from "@/assets/programs/dorahood-2.jpg";
import dorahood3 from "@/assets/programs/dorahood-3.jpg";

export type Program = {
  id: string;
  name: string;
  category: "Community" | "Funding";
  images: string[];
  description: string;
  whoCanApply: string[];
  applyUrl: string;
  lastEdition: { label: string; value: string }[];
};

/** Shared "last edition" stats shown for every program in the section */
const sharedStats: { label: string; value: string }[] = [
  { label: "Voices signed up", value: "5,000+" },
  { label: "Social reach", value: "6 lakh+" },
  { label: "User-generated posts", value: "2,000+" },
  { label: "Countries represented", value: "11+" },
  { label: "Community partners", value: "100" },
];

const programDefinitions: {
  name: string;
  category: Program["category"];
  applyUrl: string;
  images: string[];
  description: string;
  whoCanApply: string[];
}[] = [
  {
    name: "Girls Who YAP",
    category: "Community",
    applyUrl: "/fellowship",
    images: [gwyprog, gwyprog1, gwyprog2],
    description:
      "Girls Who YAP brings members together to learn, build and grow through workshops, mentorship and real-world initiatives.",
    whoCanApply: [
      "Students and early-career professionals",
      "Members of any Dora chapter",
      "Builders with an idea to share",
      "Anyone committed to the code of conduct",
    ],
  },
  {
    name: "DoraDAO World Tour",
    category: "Community",
    applyUrl: "#map",
    images: [worldTour1, worldTour2, worldTour3],
    description:
      "DoraDAO World Tour brings members together to learn, build and grow through workshops, mentorship and real-world initiatives.",
    whoCanApply: [
      "Students and early-career professionals",
      "Members of any Dora chapter",
      "Builders with an idea to share",
      "Anyone committed to the code of conduct",
    ],
  },
  {
    name: "Girls Who YAP Conference",
    category: "Community",
    applyUrl: "#workwithus",
    images: [gwyConf, gwyConf2, gwyConf3],
    description:
      "Girls Who YAP Conference brings members together to learn, build and grow through workshops, mentorship and real-world initiatives.",
    whoCanApply: [
      "Students and early-career professionals",
      "Members of any Dora chapter",
      "Builders with an idea to share",
      "Anyone committed to the code of conduct",
    ],
  },
  {
    name: "W3M",
    category: "Community",
    applyUrl: "#workwithus",
    images: [w3m1, w3m2],
    description:
      "W3M brings members together to learn, build and grow through workshops, mentorship and real-world initiatives.",
    whoCanApply: [
      "Students and early-career professionals",
      "Members of any Dora chapter",
      "Builders with an idea to share",
      "Anyone committed to the code of conduct",
    ],
  },
  {
    name: "Dorahood",
    category: "Community",
    applyUrl: "#workwithus",
    images: [dorahood1, dorahood2, dorahood3],
    description:
      "Dorahood brings members together to learn, build and grow through workshops, mentorship and real-world initiatives.",
    whoCanApply: [
      "Students and early-career professionals",
      "Members of any Dora chapter",
      "Builders with an idea to share",
      "Anyone committed to the code of conduct",
    ],
  },
];

export const programs: Program[] = programDefinitions.map(
  ({ name, category, applyUrl, images, description, whoCanApply }) => ({
    id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    name,
    category,
    images,
    description,
    whoCanApply,
    applyUrl,
    lastEdition: sharedStats,
  })
);

export const programCategories = ["All", "Community", "Funding"] as const;
