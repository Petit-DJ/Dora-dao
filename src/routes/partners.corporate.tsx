import { createFileRoute } from "@tanstack/react-router";
import { PartnerPage } from "@/components/partner-page";
import { partnerPages } from "@/components/partnership-data";

const data = partnerPages.find((p) => p.slug === "corporate")!;

export const Route = createFileRoute("/partners/corporate")({
  head: () => ({
    meta: [
      { title: data.metaTitle },
      { name: "description", content: data.metaDesc },
      { property: "og:title", content: data.metaTitle },
      { property: "og:description", content: data.metaDesc },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <PartnerPage data={data} />,
});
