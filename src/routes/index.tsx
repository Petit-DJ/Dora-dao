import { SiteNavbar } from "@/components/site-navbar";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { lazyRetry } from "@/lib/lazy-retry";
import people from "@/assets/dora-characters.png";
import scenery from "@/assets/dora-hero-background.jpg";
import loaderLogo from "@/assets/doradao-logo.jpg.asset.json";
import communityPeople from "@/assets/dora-community-characters.png";
import communityScenery from "@/assets/dora-community-background.jpg";
import { Button } from "@/components/ui/button";
import { TrustedBrands } from "@/components/trusted-brands";
import { DeferredSection } from "@/components/deferred-section";

const WorldCommunity = lazyRetry(() => import("@/components/world-community").then(m => ({ default: m.WorldCommunity })));
const ProgramsSection = lazyRetry(() => import("@/components/programs-section").then(m => ({ default: m.ProgramsSection })));
const LoveCommunity = lazyRetry(() => import("@/components/love-community").then(m => ({ default: m.LoveCommunity })));
const PodcastSection = lazyRetry(() => import("@/components/podcast-section").then(m => ({ default: m.PodcastSection })));
const SpeakersSection = lazyRetry(() => import("@/components/speakers").then(m => ({ default: m.SpeakersSection })));
const GallerySection = lazyRetry(() => import("@/components/gallery-section").then(m => ({ default: m.GallerySection })));
const MosaicSection = lazyRetry(() => import("@/components/mosaic-section").then(m => ({ default: m.MosaicSection })));
const PartnersSection = lazyRetry(() => import("@/components/partners-section").then(m => ({ default: m.PartnersSection })));
const FaqSection = lazyRetry(() => import("@/components/faq-section").then(m => ({ default: m.FaqSection })));
const SiteFooter = lazyRetry(() => import("@/components/site-footer").then(m => ({ default: m.SiteFooter })));

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "preload", as: "image", href: scenery, fetchPriority: "high" }],
    meta: [
      { title: "DoraDAO, A community for hoomans, built by hoomans" },
      { name: "description", content: "A purpose-driven, non-profit community making emerging technology accessible to everyone. Find your people across 35+ countries and learn, build, and belong." },
      { property: "og:title", content: "DoraDAO, Built by hoomans. Cherished for who you are." },
      { property: "og:description", content: "A community for ambitious hoomans across 35+ countries. Explore ten pathways to learn, build, and belong, supported by 80+ ecosystem partners." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [p, setP] = useState(0);
  const [stick, setStick] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const heroImage = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const image = heroImage.current;
    const reveal = () => setLoaded(true);
    if (!image || image.complete || window.location.hash) { reveal(); return; }
    image.addEventListener("load", reveal, { once: true });
    image.addEventListener("error", reveal, { once: true });
    const timeout = window.setTimeout(reveal, 1500);
    return () => { window.clearTimeout(timeout); image.removeEventListener("load", reveal); image.removeEventListener("error", reveal); };
  }, []);
  useEffect(() => {
    const on = () => {
      const vh = window.innerHeight;
      setP(Math.min(1, window.scrollY / vh));
      setStick(Math.min(window.scrollY, vh * 1.1));
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <main className="relative overflow-x-clip bg-cream">
      {/* Intro loader: cream curtain with the DoraDAO logo that lifts away */}
      <div
        aria-hidden={loaded}
        className="fixed inset-0 z-[60] grid place-items-center bg-cream transition-transform duration-300 motion-reduce:duration-0 ease-out"
        style={{ transform: loaded ? "translateY(-105%)" : "translateY(0)" }}
      >
        <span className={`loader-mark ${loaded ? "is-gone" : ""}`}>
          <img src={loaderLogo.url} alt="DoraDAO" width={500} height={500} className="loader-logo" />
        </span>
      </div>
      <SiteNavbar />

      {/* Section 1: sticky hero that dims as the next panel slides over it */}
      <section className="home-story-hero sticky top-0 z-0 h-screen overflow-hidden bg-cream" style={{ visibility: p >= 1 ? "hidden" : "visible" }}>
        <img ref={heroImage} src={scenery} alt="" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
        <div className="pointer-events-none absolute inset-0 bg-foreground" style={{ opacity: p * 0.12 }} />
        <div className="hero-heading home-story-heading relative mx-auto max-w-6xl px-4 text-center" style={{ transform: `scale(${1 - p * 0.2})`, transformOrigin: "50% 0" }}>
          <svg className="hero-crown mx-auto text-primary" width="72" height="64" viewBox="0 0 72 64" fill="none" aria-hidden="true">
            <path d="M8 25 23 36 35 10 45 36 63 26 57 58Q35 49 9 54Z" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round" />
            <circle cx="7" cy="18" r="3" stroke="currentColor" strokeWidth="3" /><circle cx="36" cy="4" r="3" stroke="currentColor" strokeWidth="3" /><circle cx="66" cy="20" r="3" stroke="currentColor" strokeWidth="3" />
          </svg>
          <p className="home-story-eyebrow">A non-profit community for ambitious hoomans</p>
          <h1 className="hero-title home-story-title font-bold text-foreground">
            <span>Built by hoomans.</span>
            <span className="text-hero-orange">Cherished for who you are.</span>
          </h1>
          <p className="hero-subtitle home-story-subtitle text-foreground">From 13 to 45, across 35+ countries, we’re making emerging technology accessible, playful, and deeply human.</p>
          <div className="home-story-actions">
            <Button asChild><a href="#programs">Find your tribe <ArrowRight aria-hidden="true" /></a></Button>
            <Button asChild variant="outline"><Link to="/partners/csr">Partner with us <ArrowRight aria-hidden="true" /></Link></Button>
          </div>
        </div>
      </section>

      {/* Illustration stays pinned to the bottom of the screen while the cream panel rises, then scrolls on */}
      <img
        src={people}
        alt="Girl in a yellow sprout beret pointing forward with her colorful friends"
        width={676}
        height={281}
        className="hero-characters pointer-events-none absolute z-20"
        style={{ transform: `translateX(-50%) translateY(${stick}px) translateX(${p * 260}px)`, opacity: Math.max(0, 1 - p / 0.35) }}
      />

      {/* The illustrated community panel rises over the independently pinned hero. */}
      <section id="community" aria-labelledby="community-title" className="community-section relative z-20 -mt-[6vh] rounded-t-[2.5rem]">
        <img loading="lazy" decoding="async" src={communityScenery} alt="" className="community-scenery pointer-events-none absolute inset-0 h-full w-full object-cover" />
        <div className="community-inner relative mx-auto max-w-[1600px]">
          <div className="community-copy relative z-10 text-community-ink">
            <h2 id="community-title" className="community-title home-story-community-title">
              <span>No pretenses.</span>
              <span className="text-community-emphasis">No algorithms to impress.</span>
              <span className="community-impact">Just humans building together.</span>
            </h2>
            <p className="community-description">
              DoraDAO began in May 2025 from a simple conviction: you deserve a corner of the world where you are admired for your existence itself. Today, we bring together dreamers aged 13 to 45 across 35+ countries, supported by 80+ ecosystem partners, to learn, build, and turn curiosity into real impact.
            </p>
            <ul className="home-story-values" aria-label="Our community"><li>35+ countries</li><li>Ages 13 to 45</li><li>80+ ecosystem partners</li><li>Non-profit, purpose-driven</li></ul>
            <Button asChild className="community-cta bg-primary text-community-ink hover:bg-primary/90">
              <a href="#programs">
                Find your tribe <ArrowRight aria-hidden="true" className="size-6" />
              </a>
            </Button>
          </div>
        </div>
        <img loading="lazy" decoding="async" src={communityPeople} alt="Four colorful friends in yellow, orange, green and lavender, smiling and pointing ahead together" className="community-characters pointer-events-none absolute" />
      </section>
      <TrustedBrands />
      <DeferredSection anchor="world-community"><WorldCommunity /></DeferredSection>
      <DeferredSection anchor="programs" size="tall"><ProgramsSection /></DeferredSection>
      <DeferredSection anchor="love" size="tall"><LoveCommunity /></DeferredSection>
      <DeferredSection anchor="podcast" size="tall"><PodcastSection /></DeferredSection>
      <DeferredSection anchor="speakers"><SpeakersSection /></DeferredSection>
      <DeferredSection anchor="gallery"><GallerySection /></DeferredSection>
      <DeferredSection anchor="community-mosaic"><MosaicSection /></DeferredSection>
      <DeferredSection anchor="partners"><PartnersSection /></DeferredSection>
      <DeferredSection anchor="faq" size="compact"><FaqSection /></DeferredSection>
      <DeferredSection anchor="footer" size="compact"><SiteFooter /></DeferredSection>
    </main>
  );
}
