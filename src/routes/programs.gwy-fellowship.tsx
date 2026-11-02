import { createFileRoute } from "@tanstack/react-router";
import { FellowshipPage } from "@/components/fellowship-page";

const title = "GWY Fellowship, DoraDAO";
const description =
  "The GirlsWhoYap Fellowship helps women learn, build and grow through workshops, mentorship and real-world projects.";

export const Route = createFileRoute("/programs/gwy-fellowship")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FellowshipPage,
});
