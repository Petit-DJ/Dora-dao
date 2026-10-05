import { createFileRoute, Link } from "@tanstack/react-router";
import heroBeach from "@/assets/hero-beach.webp";
import hackCollage from "@/assets/hack-collage.webp";
import * as React from "react";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SpeakersShowcase } from "@/components/SpeakersShowcase";
import { SponsorsSection } from "@/components/SponsorsCarousel";
import { ChevronDown, Star, Lightbulb, Users } from "lucide-react";
import { speakerGrads, homeSpeakers, allSpeakers, getInitials, pastSponsors } from "@/lib/voices";
import { CursorTrail } from "@/components/CursorTrail";
import { Countdown } from "@/components/Countdown";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ApplyBar } from "@/components/ApplyBar";
import {
  Sparkles,
  ArrowUpRight,
  ArrowRight,
  Sun,
  Moon,
  Calendar,
  MapPin,
  Globe,
  Flower2,
  Mic,
  Gift,
  Rocket,
  Heart,
  Wand2,
  Trophy,
  Code2,
  Megaphone,
  PenTool,
  Briefcase,
  Palette,
  DollarSign,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/fellowship")({
  head: () => ({
    meta: [
      { title: "GWY Fellowship 2.0 — Girls Who Yap × AI" },
      {
        name: "description",
        content:
          "A women-first, creator-led 4-week fellowship demystifying AI. Build, yap, ship & earn. Applications close July 15.",
      },
      { property: "og:title", content: "GWY Fellowship 2.0" },
      {
        property: "og:description",
        content:
          "Soft skies. Bold algorithms. Join the Girls Who Yap Fellowship — creators, builders, PMs, marketers welcome.",
      },
      { property: "og:image", content: heroBeach },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroBeach },
    ],
  }),
  component: Landing,
});

const partners = [
  "DoraDAO", "Open to All", "Creators", "Developers", "Designers", "Founders", 
  "Vibe Coders", "Indie Hackers", "Startup Builders", "Agentic Labs", "Marketers",
];

const roles = [
  { i: PenTool, t: "Creators" },
  { i: Code2, t: "Builders" },
  { i: Briefcase, t: "PMs" },
  { i: Megaphone, t: "Marketers" },
  { i: Palette, t: "Designers" },
  { i: Wand2, t: "AI-curious" },
];

const weeks = [
  { w: "Week 01", t: "Tune in", d: "Live yap sessions with founders & researchers." },
  { w: "Week 02", t: "Build out loud", d: "Ship demos. Post threads. Bounties drop." },
  { w: "Week 03", t: "DoraHack", d: "A 72 hour sprint — ship products, not projects." },
  { w: "Week 04", t: "Launch & land", d: "Product Hunt day, IRL VC nights, Dora Delight." },
];

const stats = [
  { k: "3M+", v: "reach" },
  { k: "40K+", v: "community" },
  { k: "10K+", v: "creators" },
  { k: "30+", v: "events" },
];


const peek = [
  {
    cap: "Web3 Meetup",
    grad: "from-[oklch(0.78_0.2_40)] to-[oklch(0.55_0.18_20)]",
    emoji: "🤝",
    img: "/peek/w3m.webp",
  },
  {
    cap: "DoraDelight Treat",
    grad: "from-[oklch(0.88_0.12_50)] to-[oklch(0.72_0.2_25)]",
    emoji: "🍦",
    img: "/peek/Doradelight2.webp",
  },
  {
    cap: "Graduation Ceremony",
    grad: "from-[oklch(0.7_0.2_320)] to-[oklch(0.45_0.15_290)]",
    emoji: "🎓",
    img: "/peek/grad.webp",
  },
  {
    cap: "GWY Conf",
    grad: "from-[oklch(0.75_0.18_350)] to-[oklch(0.5_0.18_320)]",
    emoji: "🎙️",
    img: "/peek/gwy_conf.webp",
  },
  {
    cap: "GWY Night Camp Party",
    grad: "from-[oklch(0.88_0.12_25)] to-[oklch(0.72_0.18_350)]",
    emoji: "🏕️",
    img: "/peek/night_camp.webp",
  },
  {
    cap: "Closing Ceremony",
    grad: "from-[oklch(0.75_0.18_350)] to-[oklch(0.6_0.2_320)]", 
    emoji: "💖",
    img: "/peek/closing.webp",
  }
];


const speakers = homeSpeakers;

const partnersList = [
  { n: "DoraDAO", kind: "Company" },
  { n: "OpenLab", kind: "Community" },
  { n: "NovaAgents", kind: "Company" },
  { n: "ToolForge", kind: "Community" },
  { n: "ShipWeekly", kind: "Company" },
  { n: "Anthropic", kind: "Company" },
  { n: "Beach Capital", kind: "Investor" },
  { n: "Yappers.ai", kind: "Community" },
  { n: "Agentic Labs", kind: "Company" },
  { n: "PalmStack", kind: "Community" },
];

const socials = [
  // { label: "Discord", href: "https://discord.gg/CRaEtrtZ2v" },
  { label: "Twitter", href: "https://x.com/connectdoradao" },
  { label: "Instagram", href: "https://www.instagram.com/connectdoradao/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/doradao/" },
  { label: "Luma", href: "https://lu.ma/connectdoradao" },
];


const timelineEvents = [
  { date: "3rd June", title: "Applications Open", desc: "GWY Fellowship Application Registration Open" },
  { date: "15th June", title: "Applications under Review", desc: "Applications are reviewed by our selection committee" },
  { date: "15th July", title: "Application Close", desc: "The final cohort gets selected based on creativity, ideas and builder energy" },
  { date: "25th July", title: "Fellowship Kickoff", desc: "Founder-led sessions, creator talks, weekly challenges and hands-on learning begin" },
  { date: "5th-8th Aug", title: "DoraHack 2.0", desc: "Build, ship and Launch on Product Hunt, Peerlist etc. User Acquisition Challenges" },
  { date: "25th Aug", title: "Surprise", desc: "To be revealed soon" },
  { date: "31st Aug", title: "Graduation", desc: "Showcase your products, celebrate your journey and launch your ideas into the world" },
];


const faqs = [
  { q: "Who is this fellowship for?", a: "Creators, builders, product managers, marketers — anyone who wants to play with AI. No prior ML background needed; curiosity and consistency matter more." },
  { q: "Is it really free?", a: "Yes. The fellowship is fully sponsored by our partners. You only invest your time and energy." },
  // { q: "How much time should I commit?", a: "Plan for ~6–8 hours a week across live sessions, building, and yapping." },
  { q: "Is it virtual or in-person?", a: "The 4-week program is fully virtual so anyone, anywhere can join." },
  { q: "How many hours a week should I set aside?", a: "Plan for around 4–5 hours a week — covering live sessions, building time, and any bounty or challenge work you want to take on." },
  { q: "Are sessions live or recorded?", a: "Sessions are live. Recordings are made available afterward so you can catch up if something comes up." },
  { q: "What time are the sessions held?", a: "Most sessions are scheduled in the evening IST (7–9 PM). Each session runs approximately 45–70 minutes." },
  { q: "Is attendance mandatory for every event?", a: "It's flexible. We'd love to see you show up live, but we understand life happens — recordings mean you won't miss the content." }, { q: "Do I need a project idea before applying?", a: "Nope. You'll explore problem spaces in week 1 and lock your build by week 2 with mentor help." },
  { q: "Can men or non-binary folks apply?", a: "GWY is women-first and centers women & non-binary creators. Allies can join as mentors, speakers and supporters." },
  { q: "What happens after the fellowship?", a: "You join the alumni circle with continued access to mentors, future grants, hackathons, and speaker opportunities." },
] as const;

function Chapter({
  kicker, title, children, dark = false, id, wide = false,
}: {
  kicker: string; title: React.ReactNode;
  children: React.ReactNode; dark?: boolean; id?: string; wide?: boolean;
}) {
  return (
    <section id={id} className={`relative mx-auto ${wide ? "w-[min(96%,1200px)]" : "w-[min(94%,1100px)]"} py-8 md:py-12`}>
      <div className={`${dark ? "chapter-glass-dark" : "chapter-glass"} px-6 md:px-12 py-8 md:py-12`}>
        <div className="flex items-center gap-3">
          <span className="horizon-line flex-1" />
          <span className="chapter-num whitespace-nowrap">✿ {kicker} ✿</span>
          <span className="horizon-line flex-1" />
        </div>
        <h2 className={`mt-5 font-display font-bold text-3xl md:text-5xl leading-[1.05] max-w-3xl ${dark ? "text-white" : ""}`}>
          {title}
        </h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

function SkyDecor() {
  // Continuous sunset beach storyline — sky glows + floating beach props
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute left-1/2 top-[7vh] -translate-x-1/2 h-64 w-64 rounded-full bg-[radial-gradient(circle,oklch(0.92_0.18_60/0.7),transparent_70%)] blur-2xl" />
      <div className="absolute -right-32 top-[40vh] h-96 w-96 rounded-full bg-[radial-gradient(circle,oklch(0.7_0.22_15/0.45),transparent_70%)] blur-3xl" />
      <div className="absolute -left-32 top-[70vh] h-96 w-96 rounded-full bg-[radial-gradient(circle,oklch(0.55_0.2_320/0.45),transparent_70%)] blur-3xl" />
      <div className="absolute left-1/3 bottom-[8vh] h-80 w-80 rounded-full bg-[radial-gradient(circle,oklch(0.85_0.18_50/0.5),transparent_70%)] blur-3xl" />
    </div>
  );
}



function Stars() {
  // sparse stars over the twilight/night band
  const stars = Array.from({ length: 26 }, (_, i) => i);
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {stars.map((i) => {
        const left = (i * 137) % 100;
        const top = (i * 53) % 100;
        const size = 2 + (i % 3);
        const delay = (i % 7) * 0.4;
        return (
          <span
            key={i}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              animationDelay: `${delay}s`,
              boxShadow: "0 0 6px oklch(1 0 0 / 0.9)",
            }}
          />
        );
      })}
    </div>
  );
}

function Landing() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-journey text-foreground">
      <CursorTrail />
      <SkyDecor />

      <div className="relative z-10">
        {/* hero-scoped beach decor lives inside the hero card below */}

        <SiteNav active="fellowship" />

        {/* HERO */}
        <section id="top" className="relative mx-auto w-[min(94%,1100px)] mt-6">
          <div className="relative overflow-hidden rounded-[2rem] shadow-card">
            <img
              src={heroBeach}
              alt="Pink sunset beach"
              width={1920} height={1080}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 via-transparent to-foreground/55" />

            <div className="relative px-6 pt-24 pb-10 md:px-12 md:pt-36 md:pb-14 min-h-[80svh] flex flex-col justify-end">
              <span className="font-hand text-3xl md:text-5xl text-[oklch(0.95_0.15_95)] drop-shadow-[0_2px_8px_oklch(0.3_0.1_30/0.6)]">
                hey bestie <Flower2 className="inline h-6 w-6 md:h-8 md:w-8" />
              </span>
              <h1 className="mt-3 font-display font-extrabold text-white leading-[0.95] tracking-tight text-[clamp(2.6rem,8vw,6.2rem)] drop-shadow-[0_4px_20px_oklch(0.2_0.1_30/0.5)]">
                Girls Who <br className="hidden sm:block" />
                Yap{" "}
                <span className="inline-flex items-end align-baseline">
                  <span className="bg-coral text-primary-foreground px-4 py-0 rounded-[1.5rem] shadow-glow rotate-[-1deg] inline-block">
                    Fellowship 2.0
                  </span>
                </span>
              </h1>
              <p className="mt-5 max-w-xl text-white/95 text-base md:text-lg drop-shadow-[0_2px_8px_oklch(0.2_0.1_30/0.6)]">
                A 4-week women-first cohort to play with AI, ship in public, and find your people.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-2.5 text-xs text-white">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 px-3 py-1.5">
                  <Calendar className="h-3.5 w-3.5" /> 4 weeks
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 px-3 py-1.5">
                  <Globe className="h-3.5 w-3.5" /> Virtual + IRL
                </span>

              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="https://luma.com/1o24ny1d" target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-coral text-primary-foreground shadow-glow hover:scale-[1.03] transition px-6 py-3 text-sm font-semibold"
                >
                  Apply now <ArrowRight className="h-4 w-4" />
                </a>
                <Countdown />
              </div>
            </div>
          </div>
        </section>

        {/* PARTNERS MARQUEE — the horizon strip */}
        <section className="relative mt-6 overflow-hidden">
          <div className="mx-auto w-[min(94%,1100px)] mb-2 text-[10px] uppercase tracking-[0.3em] text-foreground/55 font-semibold">
            ✿ your roles, your people, your playground ✿
          </div>
          <div className="flex animate-marquee whitespace-nowrap gap-10 py-3">
            {[...partners, ...partners, ...partners].map((p, i) => (
              <span key={i} className="font-display font-semibold text-xl md:text-2xl text-foreground/70">
                {p} <span className="text-coral mx-2">✿</span>
              </span>
            ))}
          </div>
        </section>

        {/* INVITE — Who's invited */}
        <Chapter
          id="story"
          kicker="the invite"
          title={<>Anyone who wants to <span className="text-coral">play with AI</span>.</>}
        >
          <p className="text-foreground/75 text-base md:text-lg max-w-xl">
            Creators, builders, PMs, marketers, designers — if you're curious about AI and ready to yap, you're in.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {roles.map((r) => (
              <span key={r.t} className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-white/80 px-4 py-2 text-sm font-medium">
                <r.i className="h-3.5 w-3.5 text-coral" /> {r.t}
              </span>
            ))}
          </div>
        </Chapter>

        {/* FELLOWSHIP — what it is + this year's shape (2 columns) */}
        <Chapter
          kicker="the fellowship"
          wide
          title={<>The GWY <span className="text-coral">Fellowship</span>.</>}
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div>
              <span className="chapter-num">what it is</span>
              <h3 className="mt-3 font-display font-semibold text-2xl md:text-3xl leading-tight">
                A women-first cohort to demystify AI — together, out loud.
              </h3>
              <p className="mt-4 text-foreground/75 text-base leading-relaxed">
                GWY Fellowship is a community-led program by Girls Who Yap × DoraDAO. We pair
                hands-on AI experiments with public storytelling — so you don't just learn the
                tools, you build a body of work and a circle of friends shipping alongside you.
              </p>
              <p className="mt-3 text-foreground/75 text-base leading-relaxed">
                Cohort 2.0 runs across <strong>sessions </strong>, Open to creators, builders, PMs, marketers and designers —
                anyone ready to play.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs text-foreground/70">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/60 border border-white/70 px-3 py-1.5"><Calendar className="h-3.5 w-3.5 text-coral"/> 4 weeks</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/60 border border-white/70 px-3 py-1.5"><Globe className="h-3.5 w-3.5 text-coral"/> Virtual</span>
                {/* <span className="inline-flex items-center gap-1.5 rounded-full bg-white/60 border border-white/70 px-3 py-1.5"><MapPin className="h-3.5 w-3.5 text-coral"/> Finale · Delhi</span> */}
              </div>
            </div>
            <div>
              <span className="chapter-num">this year, week by week</span>
              <div className="mt-3 grid sm:grid-cols-2 gap-3">
                {weeks.map((w, i) => (
                  <div key={w.t} className="flex gap-3 p-4 rounded-2xl bg-white/65 border border-white/80 shadow-soft">
                    <div className="shrink-0 h-9 w-9 rounded-full bg-coral grid place-items-center text-primary-foreground shadow-glow font-mono text-[11px]">
                      0{i + 1}
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-foreground/50 font-mono">{w.w}</div>
                      <div className="font-display font-semibold text-base mt-0.5">{w.t}</div>
                      <div className="text-xs text-foreground/70 mt-1 leading-snug">{w.d}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-foreground/65">
                <span className="inline-flex items-center gap-1.5"><Mic className="h-3.5 w-3.5 text-coral"/> Weekly yap sessions</span>
                <span className="inline-flex items-center gap-1.5"><DollarSign className="h-3.5 w-3.5 text-coral"/> Bounties</span>
                <span className="inline-flex items-center gap-1.5"><Heart className="h-3.5 w-3.5 text-coral"/> Dora Delight</span>
              </div>
            </div>
          </div>
        </Chapter>

        {/* WHAT YOU'LL GET — tangible outcomes */}
        <Chapter
          kicker="what you'll actually get"
          title={<>Not just learning. <span className="text-coral">Real outcomes.</span></>}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
            {[
              { emoji: "🎓", title: "A certificate", body: "Something you can actually show off." },
              { emoji: "⚡", title: "Bounties & earning", body: "Create + get paid. Real opportunities to earn while you build." },
              { emoji: "🌐", title: "A strong network", body: "People you'll keep building with long after the cohort ends." },
              { emoji: "🧢", title: "Exclusive merch", body: "Because you earned it. Not everyone gets this." },
              { emoji: "🍬", title: "Dora Delight Treat", body: "Our signature ritual. You'll never forget this." },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 rounded-2xl bg-white/65 border border-white/80 shadow-soft p-5 hover:-translate-y-1 transition"
              >
                <span className="text-3xl">{item.emoji}</span>
                <div>
                  <div className="font-display font-semibold text-base">{item.title}</div>
                  <div className="text-sm text-foreground/70 mt-1 leading-snug">{item.body}</div>
                </div>
              </div>
            ))}
          </div>
        </Chapter>

        {/* HACKATHON — DoraHack 2.0 (dark, split layout) */}
        <section id="hack" className="relative">
          <Stars />
          <Chapter
            kicker="---all girls hackathon---"
            dark
            wide
            title={<> <span className="text-coral">Dora Hack 2.0</span> </>}
          >
            <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl shadow-glow border border-white/15">
                  <img
                    src={hackCollage}
                    alt="Women building together at a sunset beach hackathon"
                    width={1024} height={1024} loading="lazy"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white/90 font-mono">
                    <span className="rounded-full bg-white/15 backdrop-blur px-2.5 py-1 border border-white/20">building · cohort 2.0</span>
                    <span className="rounded-full bg-coral text-primary-foreground px-2.5 py-1 shadow-glow">72-hour sprint</span>
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-[10px] text-white/70 font-mono uppercase tracking-widest">
                  <span className="rounded-xl bg-white/10 border border-white/15 px-2 py-2 text-center">✿ ship</span>
                  <span className="rounded-xl bg-white/10 border border-white/15 px-2 py-2 text-center">✿ launch</span>
                  <span className="rounded-xl bg-white/10 border border-white/15 px-2 py-2 text-center">✿ celebrate</span>
                </div>
              </div>
              <div>
                <p className="text-white/80 max-w-md">
                  A 72 hour women-first build sprint inside the cohort. Form pods, ship on Product Hunt,
                  hype each other's launches — and win chunky prizes.
                </p>
                <ul className="mt-5 space-y-2.5">
                  {[
                    { i: Trophy, t: "Open tracks", d: "Agents, tools, content, commerce — anything useful." },
                    { i: Zap, t: "Product Hunt launch day", d: "We ship together. Threads, demos, comments — full hype mode." },
                    { i: Gift, t: "Prizes & perks", d: "Cash, credits, creator perks — partners stack soon." },
                    { i: Heart, t: "Mentor office hours", d: "Founders & engineers on-call across the 7 days." },
                  ].map((d) => (
                    <li key={d.t} className="flex gap-3 rounded-2xl bg-white/10 border border-white/15 p-4">
                      <div className="shrink-0 h-9 w-9 rounded-full bg-coral grid place-items-center text-primary-foreground shadow-glow">
                        <d.i className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-display font-semibold text-base text-white">{d.t}</div>
                        <div className="text-xs text-white/70 mt-0.5 leading-snug">{d.d}</div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="https://luma.com/1o24ny1d" target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-coral text-primary-foreground shadow-glow hover:scale-[1.03] transition px-6 py-3 text-sm font-semibold"
                  >
                    Register for DoraHack <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="/hack-with-dora"
                    className="inline-flex items-center gap-2 rounded-full bg-coral text-primary-foreground shadow-glow hover:scale-[1.03] transition px-6 py-3 text-sm font-semibold"
                  >
                    More About Hackathon <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </Chapter>
        </section>

        {/* CHAPTER 04 — Numbers from last year (still dark — depth of night) */}
        <Chapter
          kicker="last year, by the numbers"
          dark
          title={<>A year of <span className="text-coral">loud beginnings</span>.</>}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((s) => (
              <div key={s.v}>
                <div className="font-display font-bold text-4xl md:text-6xl text-coral leading-none">{s.k}</div>
                <div className="mt-2 text-xs uppercase tracking-widest text-white/65 font-mono">{s.v}</div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-white/70 max-w-xl text-sm">
            280+ institutional collabs · 10K+ curated posts in &lt;1 year · 10+ APAC countries plus India, USA &amp; EMEA · one flagship Women-in-Tech conference.
          </p>
        </Chapter>

        {/* PEEK — moments band (still in night, transitioning) */}
        <section className="relative overflow-hidden py-12">
          <div className="mx-auto w-[min(94%,1100px)] mb-6">
            <span className="chapter-num text-white/70">interlude · moments</span>
            <h3 className="mt-2 font-display font-bold text-2xl md:text-3xl text-white max-w-xl">
              Snapshots from <span className="text-coral">our members</span>.
            </h3>
          </div>
          <div className="space-y-4">
            {[0, 1].map((row) => (
              <div
                key={row}
                className="flex gap-4 animate-marquee whitespace-nowrap"
                style={row % 2 === 1 ? { animationDirection: "reverse" } : undefined}
              >
                {[...peek, ...peek, ...peek].map((p, i) => (
                  <div
                      key={`${row}-${i}`}
                      className="group relative h-36 w-56 md:h-44 md:w-72 shrink-0 overflow-hidden rounded-2xl shadow-card bg-gradient-to-br"
                    >
                    {p.img && (
                      <img
                        src={p.img}
                        alt={p.cap}
                        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition"
                      />
                    )}
                    {/* <div className="absolute inset-0 grid-lines opacity-30" /> */}
                    <div className="absolute top-3 left-3 text-3xl md:text-4xl drop-shadow-lg">{p.emoji}</div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between">
                      <span className="rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold text-foreground truncate">
                        {p.cap}
                      </span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-white shrink-0 ml-2" />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* CHAPTER 05 — Voices (dark, approaching dawn) */}
        <Chapter
          id="speakers"
          kicker="the voices"
          dark
          title={<>Speakers &amp; <span className="text-coral">mentors</span>.</>}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {speakers.map((s, i) => {
              return (
                  <a
                    key={s.n} href="/voices"
                    className="group rounded-2xl bg-white/10 border border-white/15 p-4 transition-all duration-300 hover:-translate-y-2 hover:bg-white/15 shadow-soft hover:shadow-glow animate-fade-in"
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    <div className={`aspect-square rounded-xl bg-gradient-to-br ${speakerGrads[i % speakerGrads.length]} grid place-items-center text-white font-display text-3xl font-bold shadow-glow relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}>
                      {s.img ? (
                      <img
                        src={s.img}
                        alt={s.n}
                        className="absolute inset-0 w-full h-full object-cover object-top"
                      />
                    ) : (
                      <>
                      <div className="absolute inset-0 grid-lines opacity-25" />
                      <span className="relative drop-shadow-md">{getInitials(s.n)}</span>
                       </>
                    )}
                    </div>
                    <div className="mt-3 flex items-center justify-between text-[10px] text-white/50 font-mono">
                      <span>#0{i + 1}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 group-hover:text-coral group-hover:rotate-45 transition-all duration-300" />
                    </div>
                    <div className="mt-0.5 font-display font-semibold text-sm text-white group-hover:text-coral transition-colors">{s.n}</div>
                    <div className="text-xs text-white/65">{s.r}</div>
                  </a>
                );
            })}
          </div>
          <div className="mt-8">
            <a
              href="/voices"
              className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/25 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/25 transition"
            >
              See more voices <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Chapter>

        {/* CHAPTER 06 — Partners (back to warm pre-dawn)
        <Chapter
          id="partners"
          kicker="the crew"
          title={<>Powered by an <span className="text-coral">incredible crew</span>.</>}
        >
          <p className="text-foreground/70 max-w-xl text-sm">Company partners + community partners making GWY happen.</p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
            {partnersList.map((p, i) => {
              const initial = p.n[0];
              const kindColor =
                p.kind === "Company" ? "text-coral" :
                p.kind === "Investor" ? "text-[oklch(0.55_0.2_290)]" :
                "text-[oklch(0.62_0.18_340)]";
              return (
                <div key={p.n} className="group aspect-[3/2] rounded-2xl bg-white/65 border border-white/80 flex flex-col items-center justify-center text-center px-3 hover:-translate-y-1 hover:bg-white/85 transition relative overflow-hidden">
                  <div className={`absolute -top-4 -right-4 h-14 w-14 rounded-full bg-gradient-to-br ${speakerGrads[i % speakerGrads.length]} opacity-30 blur-xl`} />
                  <div className="font-display font-bold text-lg md:text-xl text-foreground/90 leading-tight">
                    <span className="text-coral">{initial}</span>{p.n.slice(1)}
                  </div>
                  <div className={`text-[9px] uppercase tracking-wider mt-1 font-mono font-semibold ${kindColor}`}>
                    ✿ {p.kind}
                  </div>
                </div>
              );
            })}
          </div>
        </Chapter> */}

        {/* PAST SPONSORS SECTION — Creative sliding effect with mouse parallax */}
        <Chapter
          kicker="champions who believed"
          title={<>Our <span className="text-coral">past sponsors</span> & partners.</>}
        >
          <p className="text-foreground/70 max-w-2xl mb-8">
            The incredible organizations that powered our earlier cohorts and are shaping the future of creators and builders.
          </p>
          <div className="relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-r from-coral/5 via-transparent to-coral/5 rounded-3xl pointer-events-none" />
            
            {/* Sponsors grid with staggered animations */}
            <SponsorsSection sponsors={pastSponsors} />
          </div>
          
          {/* Interactive note */}
          <div className="mt-8 flex items-center gap-2 text-xs text-foreground/60 font-mono">
            <span className="inline-block h-2 w-2 rounded-full bg-coral animate-pulse" />
            Hover to bloom our sponsors' minds with love and gratitude ✿
          </div>
        </Chapter>

        {/* CHAPTER 07 — Timeline
        <Chapter
          id="timeline"
          kicker="the journey"
          title={<>Your <span className="text-coral">4-week</span> horizon.</>}
        >
          <div className="relative mt-4">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-coral/40 via-foreground/15 to-coral/40 md:-translate-x-1/2" />
            <ol className="space-y-6 md:space-y-10">
              {timeline.map((t, i) => (
                <li key={t.title} className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-10 md:items-start">
                  <div className="absolute left-2.5 md:left-1/2 top-2 h-4 w-4 rounded-full bg-coral shadow-glow md:-translate-x-1/2 ring-4 ring-background" />
                  <div className={i % 2 === 1 ? "md:order-2 md:pl-10" : "md:pr-10 md:text-right"}>
                    <div className="font-mono text-[11px] uppercase tracking-widest text-coral">{t.when}</div>
                    <h3 className="mt-1 font-display font-bold text-xl md:text-2xl">{t.title}</h3>
                  </div>
                  <div className={i % 2 === 1 ? "md:order-1 md:pr-10 md:text-right mt-2 md:mt-0" : "md:pl-10 mt-2 md:mt-0"}>
                    <p className="text-sm text-foreground/75">{t.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Chapter> */}
        {/* TIMELINE SECTION */}
        <Chapter
          kicker="the timeline"
          wide
          title={<>Mark your <span className="text-coral">calendar</span>.</>}
        >
        {/* Timeline Container */}
          <div className="relative py-8">
            <svg className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-full w-[120px] overflow-visible" viewBox="0 0 100 760" preserveAspectRatio="none" aria-hidden="true">
              <path
                d="M50 40 C72 120, 28 200, 50 260 S 82 380, 50 440 S 18 540, 50 620 S 78 720, 50 760"
                className="timeline-curve"
              />
            </svg>

            {/* Timeline items */}
            <div className="space-y-12">
              {timelineEvents.map((event, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div
                    key={event.title}
                    className="animate-fade-in relative"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  >
                    <div className={`grid md:grid-cols-2 gap-8 items-center`}>
                      {/* Left side content */}
                      <div className={isLeft ? "md:col-span-1" : "md:col-span-1 md:col-start-2"}>
                        {isLeft && (
                          <div className="rounded-3xl bg-sunrise-soft border border-white/50 p-6 shadow-soft hover:shadow-lg hover:-translate-y-1 transition">
                            <div className="text-xs uppercase tracking-widest font-bold text-amber-700 mb-2 font-mono">{event.date}</div>
                            <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mb-3">{event.title}</h3>
                            <p className="text-sm text-foreground/80 leading-relaxed">{event.desc}</p>
                          </div>
                        )}
                      </div>

                      {/* Center timeline dot */}
                      <div className="hidden md:flex md:col-span-1 justify-center">
                        <div className="relative">
                          {/* Pulse effect */}
                          <div className="absolute inset-0 bg-coral rounded-full animate-pulse" style={{ width: "20px", height: "20px" }} />
                          {/* Main dot */}
                          <div className="h-5 w-5 rounded-full bg-white border-4 border-coral shadow-glow relative z-10" />
                        </div>
                      </div>

                      {/* Right side content */}
                      <div className={!isLeft ? "md:col-span-1" : "md:col-span-1 md:col-start-1"}>
                        {!isLeft && (
                          <div className="rounded-3xl bg-sunrise-soft border border-white/50 p-6 shadow-soft hover:shadow-lg hover:-translate-y-1 transition">
                            <div className="text-xs uppercase tracking-widest font-bold text-amber-700 mb-2 font-mono">{event.date}</div>
                            <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mb-3">{event.title}</h3>
                            <p className="text-sm text-foreground/80 leading-relaxed">{event.desc}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Mobile timeline dot */}
                    <div className="md:hidden absolute left-0 top-6 h-5 w-5 rounded-full bg-white border-4 border-coral shadow-glow -translate-x-2" />
                  </div>
                );
              })}
            </div>
          </div>
        </Chapter>

        {/* CHAPTER 08 — FAQ */}
        <Chapter
          id="faq"
          kicker="the small print"
          title={<>Questions, <span className="text-coral">answered</span>.</>}
        >
          <div className="mt-2 divide-y divide-foreground/10 rounded-3xl bg-white/55 border border-white/70 px-6 md:px-8">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                  <span className="font-display font-semibold text-base md:text-lg text-foreground">{f.q}</span>
                  <span className="h-7 w-7 shrink-0 rounded-full bg-coral text-primary-foreground grid place-items-center text-lg leading-none transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-foreground/75 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </Chapter>

        {/* FINAL CHAPTER — dawn / last call */}
        <section id="apply" className="relative mx-auto w-[min(94%,1100px)] py-10 md:py-16">
          <div className="chapter-glass relative overflow-hidden px-8 md:px-16 py-14 md:py-20 text-center">
            <Moon className="absolute right-8 top-8 h-8 w-8 text-foreground/30" strokeWidth={1.5} />
            <Sun className="absolute left-8 bottom-8 h-10 w-10 text-coral animate-spin-slow" strokeWidth={1.5} />

            <span className="font-hand text-3xl md:text-4xl text-coral">last call ✿</span>
            <h2 className="mt-2 font-display font-bold text-4xl md:text-6xl leading-[1.05]">
              Catch the <span className="bg-coral text-primary-foreground rounded-2xl px-3 inline-block -rotate-1 shadow-glow">sunrise</span> cohort.
            </h2>
            <p className="mt-4 max-w-lg mx-auto text-foreground/75">
              Applications close July 15. Join the community and follow along — we'd love you in the room.
            </p>

            <div className="mt-6 flex justify-center [&_*]:!text-foreground/90">
              <div className="rounded-2xl bg-white/60 border border-white/80 px-3 py-2.5 backdrop-blur-md">
                <Countdown />
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {/* <a
                href="https://discord.gg/CRaEtrtZ2v" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-coral text-primary-foreground shadow-glow hover:scale-[1.03] transition px-6 py-3 text-sm font-semibold"
              >
                <Rocket className="h-4 w-4" /> Join the Discord
              </a> */}
              <a
                href="https://lu.ma/Doradao" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-foreground/90 text-background hover:bg-foreground transition px-6 py-3 text-sm font-semibold"
              >
                <Gift className="h-4 w-4" /> Upcoming events
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-2 text-xs">
              {socials.map((s) => (
                <a
                  key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/60 border border-white/80 px-3.5 py-1.5 hover:bg-white/80 transition text-foreground/80"
                >
                  {s.label} <ArrowUpRight className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <SiteFooter />

         {/* Scroll to Top Button */}
        <ScrollToTop />


        <Sparkles className="hidden" />
      </div>
      <ApplyBar label="Applications close July 15 · Cohort 2.0" ctaLabel="Apply now" />
    </div>
  );
}
