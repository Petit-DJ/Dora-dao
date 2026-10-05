import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/dora/SimplePage";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Dora DAO" },
      { name: "description", content: "Dora DAO Contact page." },
      { property: "og:title", content: "Contact — Dora DAO" },
      { property: "og:description", content: "Dora DAO Contact page." },
    ],
  }),
  component: () => (
    <SimplePage title="Contact">
      <p>Placeholder content for the Contact page. Replace with your own text.</p>
    </SimplePage>
  ),
});
