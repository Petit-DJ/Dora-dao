import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/dora/SimplePage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy — Dora DAO" },
      { name: "description", content: "Dora DAO Privacy page." },
      { property: "og:title", content: "Privacy — Dora DAO" },
      { property: "og:description", content: "Dora DAO Privacy page." },
    ],
  }),
  component: () => (
    <SimplePage title="Privacy">
      <p>Placeholder content for the Privacy page. Replace with your own text.</p>
    </SimplePage>
  ),
});
