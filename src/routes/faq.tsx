import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";
import { FaqContent } from "@/components/faq-content";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "DoraDAO FAQ, Programs, community and partnerships" },
      {
        name: "description",
        content:
          "Answers to your questions about DoraDAO, GWY Island, community programs, events and becoming a partner.",
      },
      { property: "og:title", content: "DoraDAO FAQ, Your questions, answered" },
      {
        property: "og:description",
        content:
          "Explore DoraDAO programs, community and partnership questions, or get in touch with our team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <main className="faq-directory">
      <SiteNavbar />
      <div className="faq-directory-inner">
        <Link to="/" className="faq-directory-back">
          <ArrowLeft size={16} aria-hidden="true" />
          Back to DoraDAO
        </Link>
        <header>
          <p className="faq-gateway-note">Questions people actually ask</p>
          <h1>Before you show up, here's everything.</h1>
          <p className="faq-directory-intro">
            Everything you need to know about GWY Island, our programs, community, partnerships, and
            more. Still curious? We’re just a message away.
          </p>
        </header>
        <FaqContent />
        <section className="faq-directory-contact" aria-labelledby="faq-contact-heading">
          <div>
            <p className="faq-gateway-note">One more thing?</p>
            <h2 id="faq-contact-heading">Still have a question we didn't cover?</h2>
          </div>
          <Button asChild variant="outline" className="faq-gateway-link">
            <a href="mailto:Connectdoradao@gmail.com?subject=DoraDAO%20question">
              Contact us
              <ArrowRight aria-hidden="true" />
            </a>
          </Button>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}
