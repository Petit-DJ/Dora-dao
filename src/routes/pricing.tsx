import { createFileRoute } from "@tanstack/react-router";
import { SponsorshipPage } from "@/components/sponsorship-page";
const title = "DoraDAO Sponsorship & Partnerships | Reach Builders, Creators & Developers";
const description =
  "Partner with DoraDAO to reach builders, developers, founders, and creators through technology events, newsletters, community programs, marketing campaigns, and talent opportunities.";
const siteOrigin =
  (typeof process !== "undefined" && process.env?.["VITE_SITE_URL"]) || "https://doradao.lovable.app";
const url = `${siteOrigin}/pricing`;
export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${siteOrigin}/#organization`,
              name: "DoraDAO",
              url: siteOrigin,
              email: "Connectdoradao@gmail.com",
              description:
                "A community for hoomans, built by hoomans, making emerging technology accessible and inclusive.",
            },
            {
              "@type": "WebPage",
              "@id": `${url}#webpage`,
              url,
              name: title,
              description,
              about: { "@id": `${url}#service` },
            },
            {
              "@type": "Service",
              "@id": `${url}#service`,
              name: "DoraDAO sponsorship and partnerships",
              serviceType: "Community-led sponsorship and ecosystem partnerships",
              provider: { "@id": `${siteOrigin}/#organization` },
              description:
                "Content, newsletter, event, community program, creator, talent and custom ecosystem partnerships.",
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "DoraDAO",
                  item: siteOrigin,
                },
                { "@type": "ListItem", position: 2, name: "Sponsorship & Partnerships", item: url },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: SponsorshipPage,
});
