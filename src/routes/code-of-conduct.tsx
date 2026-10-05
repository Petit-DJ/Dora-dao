import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/dora/SimplePage";

export const Route = createFileRoute("/code-of-conduct")({
  head: () => ({
    meta: [
      { title: "Code of Conduct — Dora DAO" },
      { name: "description", content: "Dora DAO Code of Conduct page." },
      { property: "og:title", content: "Code of Conduct — Dora DAO" },
      { property: "og:description", content: "Dora DAO Code of Conduct page." },
    ],
  }),
  component: () => (
    <SimplePage title="Code of Conduct">
      <p>Placeholder content for the Code of Conduct page. Replace with your own text.</p>
    </SimplePage>
  ),
});
