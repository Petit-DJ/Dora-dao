import { PartnershipCards } from "@/components/partnership-cards";
import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Coffee,
  GraduationCap,
  Heart,
  Megaphone,
  Mic,
  Plus,
  Quote,
  Sparkles,
  Users,
} from "lucide-react";
import mCircles from "@/assets/csr/mentoring-circles.png";
import mDirectory from "@/assets/csr/mentoring-directory.png";
import mMeetup from "@/assets/csr/mentoring-meetup.png";
import mCoffee from "@/assets/csr/mentoring-coffee.png";
import mBooks from "@/assets/csr/mentoring-books.png";
import sLaptop from "@/assets/csr/speaking-laptop.png";
import sMic from "@/assets/csr/speaking-microphone.png";
import sSpeaker from "@/assets/csr/speaking-speaker.png";
import { Reveal, useInView } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { PARTNER_EMAIL, partnerPages, type PartnerPageData } from "@/components/partnership-data";
import csr from "@/assets/partners/csr.png";
import corporate from "@/assets/partners/corporate.png";
import philanthropic from "@/assets/partners/philanthropic.png";
import donate from "@/assets/partners/donate.png";
import heroScenery from "@/assets/csr/hero-scenery.jpg";
import mentoringGirl from "@/assets/csr/mentoring-girl.png";

const art: Record<string, string> = { csr, corporate, philanthropic, donate };
const tints = ["peach", "sage", "gold", "seafoam", "cream", "orange"];
const cardArt = [mCircles, sLaptop, mDirectory, mMeetup, mCoffee, mBooks, sMic, sSpeaker];
const cardTints = ["peach", "orange", "gold", "sage", "cream", "seafoam", "gold", "peach"];
const cardIcons = [Heart, Megaphone, Users, Sparkles, Coffee, GraduationCap, Mic, Megaphone];

export function PartnershipMenu() {
  return (
    <div className="pt-menu">
      <button type="button" className="pt-menu-btn">
        Partnership <ChevronDown size={14} />
      </button>
      <div className="pt-menu-list">
        <Link to="/partners/csr">CSR</Link>
        <Link to="/partners/corporate">Corporate</Link>
        <Link to="/partners/philanthropic">Philanthropy</Link>
        <Link to="/partners/donate">Donate</Link>
      </div>
    </div>
  );
}

function Counter({
  value,
  prefix = "",
  suffix,
}: {
  value: number;
  prefix?: string;
  suffix: string;
}) {
  const [ref, seen] = useInView<HTMLSpanElement>(0.4);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!seen) return;
    const t0 = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const k = Math.min(1, (t - t0) / 1400);
      setN(Math.round(value * (1 - Math.pow(1 - k, 3))));
      if (k < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [seen, value]);
  return (
    <span ref={ref}>
      {prefix}
      {n.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

/** Splits a heading so its final phrase gets the forest-green accent. */
function accent(title: string) {
  const words = title.split(" ");
  if (words.length < 4) return <>{title}</>;
  const cut = words.length - 2;
  return (
    <>
      {words.slice(0, cut).join(" ")} <em>{words.slice(cut).join(" ")}</em>
    </>
  );
}

function Heading({
  n,
  pill,
  note,
  title,
  id,
}: {
  n: number;
  pill: string;
  note?: string | undefined;
  title: string;
  id: string;
}) {
  return (
    <Reveal className="csr-heading ptx-heading">
      <div className="csr-heading-top">
        <span className="csr-heading-pill">
          {String(n).padStart(2, "0")} · {pill}
        </span>
        {note && <p className="csr-heading-note">{note}</p>}
      </div>
      <h2 id={id} className="csr-heading-title">
        {accent(title)}
      </h2>
    </Reveal>
  );
}

export function PartnerPage({ data }: { data: PartnerPageData }) {
  const mail = (s: string) =>
    `mailto:${PARTNER_EMAIL}?subject=${encodeURIComponent(`${data.label}: ${s}`)}`;
  const [open, setOpen] = useState<number | null>(0);
  const [qi, setQi] = useState(0);
  useEffect(() => {
    if (data.quotes.length < 2) return;
    const t = setInterval(() => setQi((i) => (i + 1) % data.quotes.length), 6000);
    return () => clearInterval(t);
  }, [data.quotes.length]);
  const q = data.quotes[qi];
  let n = 0;

  return (
    <div className="pr-page csr-page ptx-page">
      <SiteNavbar />

      <section className="csr-hero ptx-hero">
        <div className="ptx-hero-inner">
          <img
            className="ptx-hero-scenery"
            src={heroScenery}
            alt=""
            aria-hidden="true"
            fetchPriority="high"
          />
          <div className="ptx-hero-copy">
            <Reveal>
              <p className="csr-kicker">{data.kicker}</p>
            </Reveal>
            <Reveal delay={90}>
              <h1>
                {data.title} {data.titleEm}
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="csr-lead">{data.lead}</p>
            </Reveal>
            <Reveal delay={230}>
              <Button asChild className="csr-invitation-button">
                <a href={mail(data.cta)}>
                  {data.cta} <ArrowRight size={16} />
                </a>
              </Button>
            </Reveal>
          </div>
          <Reveal delay={140} className="ptx-hero-art">
            <img src={art[data.slug]} alt="" fetchPriority="high" />
          </Reveal>
        </div>
      </section>

      <div className="csr-sheet ptx-sheet">
        <section className="ptx-sec" aria-labelledby="ptx-stats">
          <Heading
            n={++n}
            pill="Our impact"
            note={data.statsIntro}
            title={data.trust}
            id="ptx-stats"
          />
          <div className="ptx-stat-grid">
            {data.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <div className={`ptx-card ptx-stat tint-${tints[i % tints.length]}`}>
                  <strong>
                    <Counter {...s} />
                  </strong>
                  <span>{s.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {data.blocks.map((b, bi) => {
          const id = `ptx-block-${bi}`;
          return (
            <section key={b.title} className="ptx-sec" aria-labelledby={id}>
              <Heading
                n={++n}
                pill={
                  b.kicker
                    ? b.kicker.toLowerCase().replace(/^\w/, (c) => c.toUpperCase())
                    : "Partnership"
                }
                note={b.intro}
                title={b.title}
                id={id}
              />
              <div className={`ptx-grid cols-${b.cols ?? 3}`}>
                {b.items.map((it, i) => {
                  const k = (i + bi * 2) % cardArt.length;
                  const Icon = cardIcons[k] ?? Heart;
                  const artSrc = cardArt[k] ?? mCircles;
                  const tint = cardTints[k] ?? "peach";
                  return (
                    <Reveal key={it.title} delay={(i % 4) * 70}>
                      <a
                        href={mail(it.title)}
                        className={`csr-mentor-card ptx-mcard mentor-${tint}`}
                        aria-label={`Ask about ${it.title}`}
                      >
                        <span className="csr-mentor-icon">
                          <Icon size={24} strokeWidth={1.7} />
                        </span>
                        {it.tag && <span className="ptx-tag">{it.tag}</span>}
                        <h3>{it.title}</h3>
                        {it.text && <p>{it.text}</p>}
                        {it.points && (
                          <ul>
                            {it.points.map((p) => (
                              <li key={p}>
                                <Check size={13} />
                                {p}
                              </li>
                            ))}
                          </ul>
                        )}
                        <span className="csr-mentor-arrow">
                          <ArrowRight size={17} />
                        </span>
                        <img
                          className="csr-mentor-art"
                          src={artSrc}
                          alt=""
                          aria-hidden="true"
                          loading="lazy"
                          width={540}
                          height={540}
                        />
                      </a>
                    </Reveal>
                  );
                })}
              </div>
            </section>
          );
        })}

        {q && (
          <section className="ptx-sec" aria-labelledby="ptx-voices">
            <Heading
              n={++n}
              pill="In their words"
              title="Voices from our partner community"
              id="ptx-voices"
            />
            <Reveal>
              <figure className="ptx-card ptx-quote" key={qi}>
                <Quote size={30} aria-hidden />
                <blockquote>{q.text}</blockquote>
                <figcaption>, {q.who}</figcaption>
                {data.quotes.length > 1 && (
                  <div className="ptx-dots">
                    {data.quotes.map((_, i) => (
                      <button
                        key={i}
                        aria-label={`Show quote ${i + 1}`}
                        className={i === qi ? "on" : ""}
                        onClick={() => setQi(i)}
                      />
                    ))}
                  </div>
                )}
              </figure>
            </Reveal>
          </section>
        )}

        <section className="csr-invitation" aria-labelledby="ptx-closer">
          <div className="csr-invitation-banner">
            <img
              className="csr-invitation-dora"
              src={mentoringGirl}
              alt="Dora smiling in her yellow sprout beret"
              loading="lazy"
              width={504}
              height={640}
            />
            <span className="csr-invitation-rays rays-left" aria-hidden="true" />
            <div className="csr-invitation-copy">
              <h2 id="ptx-closer">{data.closer.title}</h2>
              <p>{data.closer.text}</p>
              <Button asChild className="csr-invitation-button">
                <a href={mail(data.closer.cta)}>
                  {data.closer.cta} <ArrowRight size={16} />
                </a>
              </Button>
            </div>
            <span className="csr-invitation-rays rays-right" aria-hidden="true" />
            <div className="csr-invitation-doodles" aria-hidden="true">
              <Heart className="csr-invitation-heart" size={30} strokeWidth={2.4} />
              <Sparkles className="csr-invitation-star" size={36} strokeWidth={1.8} />
            </div>
          </div>
        </section>

        {data.faq.length > 0 && (
          <section className="ptx-sec" aria-labelledby="ptx-faq">
            <Heading
              n={++n}
              pill="FAQ"
              note="Everything you need before reaching out."
              title="Questions partners often ask us"
              id="ptx-faq"
            />
            <div className="ptx-faq">
              {data.faq.map((f, i) => (
                <div key={f.q} className={`ptx-card ptx-faq-item ${open === i ? "is-open" : ""}`}>
                  <button aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}>
                    {f.q}
                    <Plus size={18} />
                  </button>
                  <div className="ptx-faq-a">
                    <p>{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="csr-sec">
          <Reveal>
            <h2 className="csr-h2">
              Explore other ways to <mark>partner</mark>
            </h2>
          </Reveal>
          <PartnershipCards exclude={data.slug} />
        </section>
      </div>
      <SiteFooter />
    </div>
  );
}
