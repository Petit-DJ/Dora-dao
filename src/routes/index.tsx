import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/dora/Navbar";
import { Hero } from "@/components/dora/Hero";
import { About } from "@/components/dora/About";
// import { WorldMap } from "@/components/dora/WorldMap";
import { TourMapSection } from "@/components/dora/TourMapSection";
import { Programs } from "@/components/dora/Programs";
import { Testimonials } from "@/components/dora/Testimonials";
import { Sessions } from "@/components/dora/Sessions";
import { Products } from "@/components/dora/Products";
import { Island } from "@/components/dora/Island";
import { ImportantDays } from "@/components/dora/ImportantDays";
import { Faq } from "@/components/dora/Faq";
import { Footer } from "@/components/dora/Footer";
import { FindYourPlace } from "@/components/dora/FindYourPlace";
import { UpcomingEvents } from "@/components/dora/UpcomingEvents";
import { WorkWithUs } from "@/components/dora/WorkWithUs";

const title = "Dora DAO — A global community of builders";
const description = "Dora DAO is a global, member-owned community: programs, sessions, products, GWY Island and more.";

export const Route = createFileRoute("/")({
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
  component: Home,
});

function Home() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[60] focus:rounded focus:bg-background focus:p-2">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <TourMapSection />
        <Programs />
        <FindYourPlace />
        <Testimonials />
        <Sessions />
        <Products />
        <Island />
        <ImportantDays />
        <UpcomingEvents />
        <WorkWithUs />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
