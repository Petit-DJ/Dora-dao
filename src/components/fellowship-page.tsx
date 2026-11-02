import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Reveal, useInView } from "@/components/reveal";
import { FELLOWSHIP_EMAIL } from "@/components/fellowship-data";
import { getProgramPage, type ProgramPageData } from "@/components/program-pages-data";
import heroScenery from "@/assets/dora-hero-background.jpg";
import heroCharacters from "@/assets/csr/hero-characters.png";
import worldMap from "@/assets/dora-world-map.jpg";
import portrait from "@/assets/mosaic/portrait-3.jpg";

/** Words fill from muted to ink as the paragraph scrolls through the viewport. */
function ScrollFillText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [p, setP] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setP(1);
      return;
    }
    let raf = 0;
    const update = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      setP(Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.35))));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  const words = text.split(" ");
  const lit = Math.round(p * words.length);
  return (
    <p ref={ref} className="gf-fill" aria-label={text}>
      {words.map((w, i) => (
        <span key={i} aria-hidden="true" className={i < lit ? "on" : ""}>
          {w}{" "}
        </span>
      ))}
    </p>
  );
}

/** Photo that straightens from a tilt as it enters the viewport. */
function TiltPhoto({ src, alt, dir }: { src: string; alt: string; dir: 1 | -1 }) {
  const [ref, seen] = useInView<HTMLDivElement>(0.25);
  return (
    <div
      ref={ref}
      className={`gf-tilt ${seen ? "in" : ""}`}
      style={{ ["--tilt" as string]: `${dir * 6}deg` }}
    >
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </div>
  );
}

const pins = [
  [22, 30],
  [17, 42],
  [15, 56],
  [31, 62],
  [27, 76],
  [47, 21],
  [52, 20],
  [55, 30],
  [62, 33],
  [67, 43],
  [56, 51],
  [64, 58],
  [61, 74],
  [79, 40],
];

export function FellowshipPage() {
  return <ProgramPage program={getProgramPage(0)} />;
}

export function ProgramPage({ program }: { program: ProgramPageData }) {
  const mail = (subject: string) =>
    `mailto:${FELLOWSHIP_EMAIL}?subject=${encodeURIComponent(`${program.label}: ${subject}`)}`;
  const track = useRef<HTMLDivElement>(null);
  const slide = (d: number) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".gf-pillar");
    el.scrollBy({ left: d * ((card?.offsetWidth ?? 300) + 12), behavior: "smooth" });
  };
  const [mapRef, mapSeen] = useInView<HTMLDivElement>(0.3);

  return (
    <div
      className={`gf-page${program.to === "/programs/gwy-fellowship" ? "" : " gf-program-page"}`}
    >
      <SiteNavbar />

      <section className="gf-hero">
        <img
          className="gf-hero-scenery"
          src={heroScenery}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
        />
        <div className="gf-hero-inner">
          <h1 className="gf-hero-title" aria-label={program.name}>
            {program.heroLines.map((line, index) => (
              <span key={index} className={`gf-line l${index + 1}${index > 1 ? " right" : ""}`}>
                {line}
              </span>
            ))}
          </h1>
          <p className="gf-hero-lead">{program.lead}</p>
          <img
            className="gf-hero-art"
            src={heroCharacters}
            alt="Dora and her purple friend leaping with joy"
            fetchPriority="high"
          />
        </div>
      </section>

      <section className="gf-intro">
        <ScrollFillText key={program.to} text={program.intro} />
        <div className="gf-intro-row">
          <Reveal>
            <img
              className="gf-intro-photo"
              src={portrait}
              alt="A DoraDAO community member"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={120}>
            <p>{program.introNote}</p>
          </Reveal>
        </div>
      </section>

      <section className="gf-globe-wrap" aria-label={`${program.name} community around the world`}>
        <div ref={mapRef} className={`gf-globe ${mapSeen ? "in" : ""}`}>
          <img src={worldMap} alt="" aria-hidden="true" loading="lazy" />
          {pins.map(([x, y], i) => (
            <span
              key={i}
              className="gf-pin"
              style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${i * 70}ms` }}
            />
          ))}
        </div>
      </section>

      <section className="gf-pillars" aria-labelledby="gf-pillars-title">
        <div className="gf-pillars-head">
          <h2 id="gf-pillars-title">{program.pillarsTitle}</h2>
          <div className="gf-arrows">
            <Button
              variant="ghost"
              size="icon"
              className="gf-arrow"
              aria-label="Previous"
              onClick={() => slide(-1)}
            >
              <ArrowLeft />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="gf-arrow"
              aria-label="Next"
              onClick={() => slide(1)}
            >
              <ArrowRight />
            </Button>
          </div>
        </div>
        <div ref={track} className="gf-pillar-track">
          {program.pillars.map((p) => (
            <article key={p.title} className="gf-pillar">
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="gf-stats" aria-label={`${program.name} highlights`}>
        {program.highlights.map((h, i) => (
          <Reveal key={h.label} delay={i * 70}>
            <div className="gf-stat">
              <strong>{h.value}</strong>
              <span>{h.label}</span>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="gf-tracks-intro">
        <Reveal>
          <h2>Our Tracks</h2>
        </Reveal>
        <Reveal delay={100}>
          <p>{program.tracksIntro}</p>
        </Reveal>
      </section>

      <section className="gf-tracks">
        {program.tracks.map((t, i) => (
          <article key={t.title} className="gf-track">
            <div className="gf-track-copy">
              <Reveal>
                <h3>{t.title}</h3>
              </Reveal>
              <Reveal delay={80}>
                <p>{t.text}</p>
              </Reveal>
              <Reveal delay={140}>
                <a className="gf-story" href={mail(t.story)}>
                  <span>
                    <b>{t.story}</b>
                    <em>
                      Ask us <ChevronRight size={12} />
                    </em>
                  </span>
                  <img src={t.thumb} alt="" loading="lazy" />
                </a>
              </Reveal>
            </div>
            <TiltPhoto src={t.photo} alt={t.alt} dir={i % 2 ? -1 : 1} />
          </article>
        ))}
      </section>

      <section className="gf-cta">
        <Reveal>
          <h2>
            Ready to Join
            <br />
            {program.ctaTitle}
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <Button asChild className="gf-cta-btn">
            <a href={mail(program.ctaLabel)}>
              {program.ctaLabel}{" "}
              <span>
                <ChevronRight size={14} />
              </span>
            </a>
          </Button>
        </Reveal>
      </section>

      <SiteFooter />
    </div>
  );
}
