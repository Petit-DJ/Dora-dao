import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CursorTrail } from "@/components/CursorTrail";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PartnerTabs } from "@/components/PartnerTabs";
import {
  ArrowUpRight,
  Briefcase,
  HeartHandshake,
  Megaphone,
  Sparkles,
  Users,
  LineChart,
  GraduationCap,
} from "lucide-react";

export const Route = createFileRoute("/partner/")({
  head: () => ({
    meta: [
      { title: "Partner with DoraDAO — Build with 40K+ curious humans" },
      {
        name: "description",
        content:
          "Partner with DoraDAO to reach 40,000+ creators, builders & women in AI/Web3 across India and emerging markets. Hiring, sponsorship, grants, mentorship — built on real relationships.",
      },
      { property: "og:title", content: "Partner with DoraDAO" },
      {
        property: "og:description",
        content:
          "Join the story 40,000+ builders are writing. Real relationships, measurable outcomes.",
      },
    ],
  }),
  component: PartnerPage,
});

const heroGallery = [
  "/doradao1/community.webp",
  "/doradao1/launch.webp",
  "/doradao1/session1.webp",
  "/doradao1/session2.webp",
  "/doradao1/partner_1.webp",
  "/doradao1/snap1.webp",
  "/doradao1/snap2.webp",
  "/doradao1/snap3.webp",
  "/doradao1/partners.webp",
  "/doradao1/bounty.webp",
  "/doradao1/hero.webp",
];

const trustedLogos = [
  "DoraHacks",
  "Polygon",
  "Devfolio",
  "ETHIndia",
  "Buildspace",
  "LinkedIn",
  "Notion",
  "Solana",
  "Aptos",
  "Lu.ma",
];

const stats = [
  { k: "82%", v: "of partners renew for a second season" },
  { k: "120%", v: "year-over-year community growth" },
  { k: "3M+", v: "impressions across our content surfaces" },
  { k: "94%", v: "of members say GWY shaped their build journey" },
  { k: "88%", v: "find DoraDAO partners more appealing than non-partners" },
  { k: "4.8/5", v: "average member satisfaction across programs" },
  { k: "100+", v: "new curious humans joining every week" },
];

const pillars = [
  {
    i: GraduationCap,
    kicker: "Talent Development",
    t: "Skills & support at every stage",
    d: "Reach a pipeline of confident, building women & creators at the exact moments they're picking tools, stacks and careers — campus through early career.",
  },
  {
    i: Users,
    kicker: "Community & Reach",
    t: "Showing up for 40,000+ builders",
    d: "Build year-round relationships with a highly engaged community — not just a one-time logo on a hackathon backdrop.",
  },
  {
    i: LineChart,
    kicker: "Insights & Innovation",
    t: "Pushing the ecosystem forward",
    d: "Stay ahead of what's shaping AI & Web3 careers in India and emerging markets, with data and signal from being embedded in the community.",
  },
];

const tiers = [
  {
    i: Briefcase,
    kicker: "Brand & Recruiting",
    t: "Hiring built on real relationships",
    d: "Most channels just give you access. DoraDAO gives you year-round engagement with 40,000+ builders, with the employer brand, hiring signal and relationship-building tools to turn pipeline into hires.",
    points: [
      "12,000+ partner role views and 3,400+ applications in 2025",
      "Year-round access across campus, creator & early-career stages",
      "Dedicated partner dashboard with filtering & hiring analytics",
      "White-glove partnership management",
    ],
    cta: "Explore corporate partnerships",
    href: "/partner/corporate",
    img: "/doradao1/partner_1.webp",
  },
  {
    i: HeartHandshake,
    kicker: "Ecosystem & Grants",
    t: "Fund the change builders actually need",
    d: "Our university-to-career model targets the exact moments when builders in emerging markets get filtered out — with outcome measurement and the org capacity that serious grant capital requires.",
    points: [
      "Direct support for critical transition points",
      "Trust-based bounty & micro-grant model",
      "Transparent impact reporting aligned to your priorities",
      "$120K+ distributed through bounties and the Future of Builders Fund",
    ],
    cta: "Explore ecosystem partnerships",
    href: "/partner/ecosystem",
    img: "/doradao1/bounty.webp",
  },
  {
    i: Megaphone,
    kicker: "CSR & Social Impact",
    t: "Give your team a way to actually move the needle",
    d: "Generic volunteer days don't move anything. DoraDAO's structured CSR partnerships put your team's real skills to work — mentoring, speaking, reviewing — with the impact reporting to make the business case internally.",
    points: [
      "Skills-based volunteering: mentorship, speaking, code reviews",
      "Measurable outcomes tied to ESG and SDG reporting",
      "Turnkey assets for internal advocacy",
      "Year-round engagement, not one-off events",
    ],
    cta: "Explore CSR partnerships",
    href: "/partner/csr",
    img: "/doradao1/partner_2.webp",
  },
  {
    i: Sparkles,
    kicker: "Volunteer & Mentor",
    t: "Share your expertise as a speaker or mentor",
    d: "The builders in our community need more than inspiration — they need people with real experience willing to show up. Mentor, speak, review work, run an AMA. Your contribution directly shapes careers at the moments that matter.",
    points: [
      "1:1 mentorship across creator & early-career tracks",
      "Speaking slots at GWY Conf, Pre-Conf & Night Camps",
      "Resume reviews, mock interviews & portfolio crits",
      "Flexible commitment formats that fit your week",
    ],
    cta: "Explore volunteering",
    href: "/partner/volunteer",
    img: "/doradao1/partner_3.webp",
  },
];

const steps = [
  { n: "01", t: "Submit your inquiry", d: "Tell us about your goals and what you're hoping to build with DoraDAO." },
  { n: "02", t: "Discovery call", d: "We get on a call to explore what partnership looks like for your team and what we can credibly deliver." },
  { n: "03", t: "Custom proposal", d: "You receive a tailored plan built around your goals, timeline and budget — never a copy-paste deck." },
  { n: "04", t: "Partnership launch", d: "We onboard you into the community with a dedicated partnership manager and a clear runway of milestones." },
];

const testimonials = [
  {
    q: "We hired four interns through DoraDAO's last cohort and the quality of talent was unreal. Hosting an IRL with their community in our office became the highest-energy recruiting day we've had all year.",
    name: "Recruiting Lead",
    role: "University Recruiting, Partner Co.",
    org: "Hiring partner",
  },
  {
    q: "Partnering with DoraDAO was the first time a community didn't feel transactional. They connected our team with builders in ways that turned into real hires and real friendships.",
    name: "Program Manager",
    role: "Emerging Talent",
    org: "Ecosystem partner",
  },
  {
    q: "A diverse talent pool is essential for shipping products that actually serve the next billion users. Our partnership with DoraDAO has been instrumental in reaching builders we'd never have found otherwise.",
    name: "Program Lead",
    role: "Student & Grad Partnerships",
    org: "Brand partner",
  },
  {
    q: "We funded the GWY Fellowship because women builders in emerging markets are still navigating barriers most of the industry doesn't see. DoraDAO does the work, and reports back honestly.",
    name: "VP, Program Strategy",
    role: "Grant partner",
    org: "Foundation",
  },
];

function PartnerPage() {
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [interest, setInterest] = useState("Brand & Recruiting");
  const [note, setNote] = useState("");

  const mailto = `mailto:connectdoradao@gmail.com?subject=${encodeURIComponent(
    `Partner inquiry — ${interest}`,
  )}&body=${encodeURIComponent(
    `Org: ${org}\nEmail: ${email}\nInterest: ${interest}\n\n${note}`,
  )}`;

  return (
    <div className="relative min-h-screen overflow-hidden bg-sunset-wash text-foreground">
      <CursorTrail />
      <div className="relative z-10">
        <SiteNav active="partner" ctaLabel="Partner" ctaHref="#become-a-partner" />
        <PartnerTabs />

        {/* HERO with marquee */}
        <section className="relative mt-10 md:mt-16">
          <div className="mx-auto w-[min(94%,1200px)]">
            <div className="chapter-glass overflow-hidden">
              <div className="relative overflow-hidden border-b border-white/60">
                {/* <div className="flex gap-3 animate-[scroll_40s_linear_infinite] py-3 px-3 w-max">
                  {[...heroGallery, ...heroGallery].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      loading="lazy"
                      className="h-28 md:h-40 w-auto rounded-2xl object-cover shadow-soft"
                    />
                  ))}
                </div> */}
              </div>

              <div className="px-6 md:px-14 py-12 md:py-20 text-center">
                <span className="pill inline-flex items-center gap-2 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-foreground/70">
                  <Sparkles className="h-3 w-3" /> partner with doradao
                </span>
                <h1 className="mt-5 font-display text-4xl md:text-6xl font-extrabold leading-[1.05]">
                  Join the story <span className="text-coral">40,000+ builders</span>
                  <br /> are writing with us
                </h1>
                <p className="mt-5 mx-auto max-w-2xl text-base md:text-lg text-foreground/75">
                  Whether your goal is hiring, ecosystem growth, or real social impact —
                  DoraDAO delivers what no job board or one-off hackathon can: authentic
                  relationships with measurable outcomes.
                </p>
                <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href="#become-a-partner"
                    className="inline-flex items-center gap-2 rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-95"
                  >
                    Partner with DoraDAO <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <Link
                    to="/doradao"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-white/80"
                  >
                    What is DoraDAO?
                  </Link>
                </div>
              </div>

              {/* Trusted by */}
              <div className="border-t border-white/60 bg-foreground text-background py-8">
                <p className="text-center text-xs uppercase tracking-[0.25em] text-background/60">
                  Trusted by ecosystems building real relationships with builders
                </p>
                <div className="mt-5 overflow-hidden">
                  <div className="flex gap-10 animate-[scroll_30s_linear_infinite] w-max px-6">
                    {[...trustedLogos, ...trustedLogos, ...trustedLogos].map((l, i) => (
                      <span
                        key={i}
                        className="font-display text-xl md:text-2xl text-background/75 whitespace-nowrap"
                      >
                        {l}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS BAND */}
        <section className="relative mx-auto w-[min(94%,1200px)] mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.slice(0, 4).map((s) => (
              <div key={s.v} className="chapter-glass p-6 text-center">
                <div className="font-display text-3xl md:text-5xl font-extrabold text-coral">{s.k}</div>
                <div className="mt-2 text-xs md:text-sm text-foreground/65 leading-snug">{s.v}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {stats.slice(4).map((s) => (
              <div key={s.v} className="chapter-glass p-6 text-center">
                <div className="font-display text-3xl md:text-5xl font-extrabold text-coral">{s.k}</div>
                <div className="mt-2 text-xs md:text-sm text-foreground/65 leading-snug">{s.v}</div>
              </div>
            ))}
          </div>
        </section>

        {/* IMPACT PILLARS */}
        <section className="relative mx-auto w-[min(94%,1200px)] mt-20 md:mt-28">
          <div className="text-center max-w-2xl mx-auto">
            <span className="chapter-num">how we drive impact</span>
            <h2 className="mt-2 font-display text-3xl md:text-5xl font-extrabold">
              Designed to drive impact at every level of the ecosystem
            </h2>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {pillars.map(({ i: Icon, kicker, t, d }) => (
              <div key={t} className="chapter-glass p-7 hover:-translate-y-1 transition-transform">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-coral text-primary-foreground shadow-glow">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="mt-5 text-[11px] uppercase tracking-[0.25em] text-foreground/55">{kicker}</div>
                <h3 className="mt-1 font-display text-xl font-bold leading-snug">{t}</h3>
                <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PARTNERSHIP TIERS */}
        <section className="relative mx-auto w-[min(94%,1200px)] mt-20 md:mt-28">
          <div className="text-center">
            <span className="chapter-num">how you can partner with doradao</span>
            <h2 className="mt-2 font-display text-3xl md:text-5xl font-extrabold">Four ways to show up</h2>
          </div>

          <div className="mt-12 space-y-10">
            {tiers.map((tier, idx) => {
              const Icon = tier.i;
              const reversed = idx % 2 === 1;
              return (
                <div
                  key={tier.t}
                  className={`chapter-glass overflow-hidden grid md:grid-cols-2 ${reversed ? "md:[direction:rtl]" : ""}`}
                >
                  <div className="relative aspect-[4/3] md:aspect-auto bg-[oklch(0.92_0.05_60)]">
                    <img src={tier.img} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                  </div>
                  <div className="p-7 md:p-10 [direction:ltr]">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-coral text-primary-foreground shadow-glow">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="mt-4 text-[11px] uppercase tracking-[0.25em] text-foreground/55">{tier.kicker}</div>
                    <h3 className="mt-1 font-display text-2xl md:text-3xl font-bold leading-tight">{tier.t}</h3>
                    <p className="mt-3 text-foreground/75 leading-relaxed">{tier.d}</p>
                    <ul className="mt-5 space-y-2.5">
                      {tier.points.map((p) => (
                        <li key={p} className="flex gap-2.5 text-sm text-foreground/80">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-coral" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={tier.href}
                      className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-2 text-sm font-semibold text-foreground hover:bg-white/90"
                    >
                      {tier.cta} <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <a
              href="#become-a-partner"
              className="inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-95"
            >
              Become a partner <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* NORTH STAR */}
        <section className="relative mx-auto w-[min(94%,1200px)] mt-20 md:mt-28">
          <div className="chapter-glass p-10 md:p-16 text-center bg-gradient-to-br from-white/70 to-[oklch(0.88_0.12_40/0.5)]">
            <span className="chapter-num">our north star</span>
            <h2 className="mt-2 font-display text-3xl md:text-5xl font-extrabold leading-tight">
              <span className="text-coral">100,000 builders</span> shipping their first
              global product by 2030.
            </h2>
            <p className="mt-5 mx-auto max-w-2xl text-foreground/75">
              Every partnership with DoraDAO contributes to something bigger. We're
              building the skills, networks and career pathways that move builders in
              emerging markets from participation to ownership — with a measurable goal
              to launch 100,000 first global products from our community.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="relative mx-auto w-[min(94%,1200px)] mt-20 md:mt-28">
          <div className="text-center">
            <span className="chapter-num">how it works</span>
            <h2 className="mt-2 font-display text-3xl md:text-5xl font-extrabold">From inquiry to launch in 4 weeks</h2>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s) => (
              <div key={s.n} className="chapter-glass p-6">
                <div className="font-display text-4xl font-extrabold text-coral">{s.n}</div>
                <h3 className="mt-3 font-display text-lg font-bold">{s.t}</h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-foreground/65">
            Most partnerships activate within 4 weeks of your initial inquiry. Your dedicated
            partnership manager is with you every step of the way.
          </p>
        </section>

        {/* TESTIMONIALS */}
        <section className="relative mx-auto w-[min(94%,1200px)] mt-20 md:mt-28">
          <div className="text-center">
            <span className="chapter-num">what partners say</span>
            <h2 className="mt-2 font-display text-3xl md:text-5xl font-extrabold">In their words</h2>
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {testimonials.map((t) => (
              <figure key={t.q} className="chapter-glass p-7 flex flex-col">
                <blockquote className="text-foreground/85 leading-relaxed">
                  <span className="font-display text-3xl text-coral leading-none">"</span>
                  {t.q}
                </blockquote>
                <figcaption className="mt-5 pt-4 border-t border-white/60 text-sm">
                  <div className="font-display font-bold">{t.name}</div>
                  <div className="text-foreground/65">{t.role} · {t.org}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* BECOME A PARTNER */}
        <section id="become-a-partner" className="relative mx-auto w-[min(94%,1100px)] mt-20 md:mt-28 mb-24">
          <div className="chapter-glass p-8 md:p-14 grid md:grid-cols-[1.1fr_1fr] gap-10 items-start">
            <div>
              <span className="chapter-num">let's build together</span>
              <h2 className="mt-2 font-display text-3xl md:text-5xl font-extrabold leading-tight">
                Become a <span className="text-coral">DoraDAO partner</span>
              </h2>
              <p className="mt-4 text-foreground/75 leading-relaxed">
                Tell us a little about your team and what you're hoping to build. A real
                partnership manager (not a form bot) will write back within 2 business days.
              </p>
              <div className="mt-6 space-y-2 text-sm">
                <div>
                  <span className="font-semibold">Prefer email?</span>{" "}
                  <a className="text-coral underline-offset-2 hover:underline" href="mailto:connectdoradao@gmail.com">
                    connectdoradao@gmail.com
                  </a>
                </div>
                <div>
                  <span className="font-semibold">Are you a builder?</span>{" "}
                  <Link to="/fellowship" className="text-coral underline-offset-2 hover:underline">
                    Join the GWY 2.0 cohort
                  </Link>
                </div>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = mailto;
              }}
              className="rounded-2xl border border-white/70 bg-white/75 p-6 shadow-soft space-y-4"
            >
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-foreground/65 mb-1.5">
                  Work email*
                </label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-coral/40"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-foreground/65 mb-1.5">
                  Organisation
                </label>
                <input
                  value={org}
                  onChange={(e) => setOrg(e.target.value)}
                  className="w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-coral/40"
                  placeholder="Acme Labs"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-foreground/65 mb-1.5">
                  I'm interested in
                </label>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-coral/40"
                >
                  <option>Brand & Recruiting</option>
                  <option>Ecosystem & Grants</option>
                  <option>CSR & Social Impact</option>
                  <option>Volunteer & Mentor</option>
                  <option>Something else</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-foreground/65 mb-1.5">
                  What are you hoping to build?
                </label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  rows={4}
                  className="w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-coral/40"
                  placeholder="A short note about your goals, timeline, anything we should know…"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-coral px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-95"
              >
                Submit inquiry <ArrowUpRight className="h-4 w-4" />
              </button>
              <p className="text-[11px] text-foreground/55 leading-relaxed">
                By submitting, your dedicated partnership manager will reach out within 2
                business days with next steps.
              </p>
            </form>
          </div>
        </section>

        <SiteFooter />
      </div>

      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
