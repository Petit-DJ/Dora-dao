import { createFileRoute } from "@tanstack/react-router";
import { ProgramPage } from "@/components/fellowship-page";
import { getProgramPage } from "@/components/program-pages-data";

const program = getProgramPage(8);
const title = `${program.name}, DoraDAO`;

export const Route = createFileRoute("/programs/m2m-mentorship")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: program.description },
      { property: "og:title", content: title },
      { property: "og:description", content: program.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProgramRoute,
});

function ProgramRoute() {
  return <ProgramPage key={program.to} program={program} />;
}
