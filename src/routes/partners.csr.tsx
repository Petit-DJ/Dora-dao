import { createFileRoute } from "@tanstack/react-router";
import { CsrPage } from "@/components/csr-page";
import { partnerPages } from "@/components/partnership-data";

const data = partnerPages.find((p) => p.slug === "csr")!;

export const Route = createFileRoute("/partners/csr")({
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
  component: CsrPage,
});
