import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/dora/SimplePage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms — Dora DAO" },
      { name: "description", content: "Dora DAO Terms page." },
      { property: "og:title", content: "Terms — Dora DAO" },
      { property: "og:description", content: "Dora DAO Terms page." },
    ],
  }),
  component: () => (
    <SimplePage title="Terms">
      <p>Placeholder content for the Terms page. Replace with your own text.</p>
    </SimplePage>
  ),
});
