import { createFileRoute, Link } from "@tanstack/react-router";
import { CursorTrail } from "@/components/CursorTrail";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ApplyBar } from "@/components/ApplyBar";
import { ProgramTabs } from "@/components/ProgramTabs";
import {
  ArrowUpRight,
  Calendar,
  Sparkles,
  Users,
  Globe,
  Trophy,
  MessageCircle,
  Radio,
  Hammer,
  Heart,
  Flag,
  TrendingUp,
  Zap,
  Award,
  Vote,
  DollarSign,
} from "lucide-react";

export const Route = createFileRoute("/programs/gwy-25")({
  head: () => ({
    meta: [
      { title: "GWY Fellowship '25 — DoraDAO 1.0" },
      {
        name: "description",
        content:
          "The story, snaps and milestones from the first Girls Who Yap Fellowship — a 4-week creator-led cohort that turned strangers in 15+ countries into a community.",
      },
      { property: "og:title", content: "DoraDAO 1.0 — GWY Fellowship recap" },
      {
        property: "og:description",
        content:
          "4 weeks. 45+ partners. 27 projects. 822 votes. $1,000 bounty. The unfiltered story (with snaps) of GWY Fellowship 1.0.",
      },
      { property: "og:image", content: "/doradao1/hero.webp" },
    ],
  }),
  component: Page,
});

const heroStats = [
  { k: "15+", v: "countries applied" },
  { k: "45+", v: "community partners" },
  { k: "27", v: "hackathon projects" },
  { k: "822", v: "community votes" },
];

const milestones = [
  { icon: Flag, k: "Day 0", v: "Idea → live program in under 2 hrs of Canva", tag: "build" },
  { icon: Globe, k: "45+", v: "Community partners across 4 continents", tag: "partnerships" },
  { icon: TrendingUp, k: "8,000", v: "LinkedIn impressions on launch day", tag: "reach" },
  { icon: MessageCircle, k: "2,000+", v: "WhatsApp messages in the first 3 hours", tag: "community" },
  { icon: Radio, k: "9 + 2", v: "Live sessions + challenges completed", tag: "execution" },
  { icon: Users, k: "150+", v: "Avg concurrent live viewers · 800+ with replays", tag: "audience" },
  { icon: Hammer, k: "27", v: "Hackathon projects · 100+ builders in teams of 3+", tag: "build" },
  { icon: Vote, k: "822", v: "Public votes · 600 in 12 hours · 200 in first 2 hrs", tag: "hype" },
  { icon: DollarSign, k: "$1,000", v: "Bounty pool distributed in week 4", tag: "rewards" },
  { icon: Award, k: "3 winners", v: "Svastrix · ExitScript · LegalVault", tag: "outcome" },
  { icon: Zap, k: "0 → 1.6k", v: "Followers across LinkedIn · IG · X in 10 days", tag: "growth" },
];

const journey = [
  { n: "01", t: "Get the why, what & how right", d: "Played with ChatGPT and Gemini to refine the idea. We didn't want to just launch — we wanted to design an experience. Summer vibes. A calm, fun, aesthetic gateway for Web2 → Web3." },
  { n: "02", t: "Design the program", d: "Sketched iterations until one stood out — a beachy, relaxed summer theme. Fun, expressive, light. Built for women, creators and community builders." },
  { n: "03", t: "Build the website in Canva", d: "Skipped Figma, Framer and no-code. Canva. Needed something good-looking in under 2 hours, not 2 days." },
  { n: "04", t: "Set up socials, separately", d: "For experimental programs, build distinct social accounts. Use your existing community to back it up later — don't mix early." },
  { n: "05", t: "Application form + sponsorship deck", d: "Luma / Google Form / Typeform. Drafted a first deck (it changed 20+ times). Don't chase perfection — get something solid enough to start conversations." },
  { n: "06", t: "The TAG method for distribution", d: "Tags: Girls · Women · Web3 · Creators · Influencers · Podcasters. Combined tags to find communities — SheFi, Women Who Code, Women in Web3. Result: 45+ partners across 4 continents." },
];

const winners = [
  { name: "Svastrix", place: "3rd · Final", d: "A living, breathing hub for safety, growth & sisterhood — SOS, community support, daily empowerment & a curated library for women and non-binary folks.", team: "Khushi · Anushka · Antra · Parineeta" },
  { name: "ExitScript", place: "2nd · Final", d: "AI-powered excuse generator, simulated calls and instant messaging — for leaving awkward or unsafe situations on your own terms.", team: "Anika · Azzah · Durdana · Anugya · Yashita · Kirti" },
  { name: "LegalVault", place: "Weekly winner", d: "Tackling centralised storage problems and verification of public legal documents — built around integrity, transparency & accessibility.", team: "Khushi · Eman · Nandani · Astha" },
];

const gallery = [
  { src: "/doradao1/launch.webp", caption: "Launch day — applications from 15+ countries" },
  { src: "/doradao1/snap1.webp", caption: "The summer-beach program brand" },
  { src: "/doradao1/whatsapp1.webp", caption: "WhatsApp chamber · 2k+ msgs in 3 hrs" },
  { src: "/doradao1/whatsapp2.webp", caption: "Latest chat clocked at 3 AM 💀" },
  { src: "/doradao1/session1.webp", caption: "Day-one chaos → LinkedIn Live pivot" },
  { src: "/doradao1/session2.webp", caption: "150+ concurrent live viewers" },
  { src: "/doradao1/snap2.webp", caption: "Selection badges — shared everywhere" },
  { src: "/doradao1/snap3.webp", caption: "Fellowship board · always-on updates" },
  { src: "/doradao1/community.webp", caption: "Behind-the-scenes from the fellow squad" },
  { src: "/doradao1/stats1.webp", caption: "10 days · 0 → 1,600+ followers" },
  { src: "/doradao1/poll.webp", caption: "822 votes · 600 in 12 hours" },
  { src: "/doradao1/bounty.webp", caption: "$1,000 bounty week" },
];

function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-sunset-wash text-foreground">
      <CursorTrail />
      <div className="relative z-10">
        <SiteNav active="programs" ctaLabel="Join" ctaHref="https://luma.com/1o24ny1d" />
        <ProgramTabs active="gwy25" />

        {/* HERO with banner */}
        <section className="relative mx-auto w-[min(94%,1180px)] mt-6 md:mt-10">
          <div className="chapter-glass overflow-hidden">
            <div className="relative aspect-[16/7] md:aspect-[16/6] overflow-hidden">
              <img
                src="/doradao1/hero.webp"
                alt="DoraDAO Girls Who Yap Fellowship banner"
                className="absolute inset-0 h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/30 to-transparent" />
              <span className="absolute top-4 left-4 pill inline-flex items-center gap-2 px-3 py-1 text-[11px] uppercase tracking-[0.25em] bg-white/70 backdrop-blur text-foreground/80">
                <Sparkles className="h-3 w-3" /> doradao 1.0 · the og cohort
              </span>
            </div>
            <div className="p-7 md:p-12 text-center">
              <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-[1.05]">
                Girls Who Yap — <span className="text-coral">Fellowship 1.0</span>
              </h1>
              <p className="mt-3 font-hand text-2xl md:text-3xl text-coral">
                We thought it would be small. It wasn't.
              </p>
              <p className="mt-5 mx-auto max-w-2xl text-base md:text-lg text-foreground/75">
                A 4-week summer cohort for creators · designers · builders. Built from a laptop,
                a crazy idea and 40+ tabs open at 2 AM. What followed was a global creator
                community that taught us how culture really gets built — one unscalable step at a time.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-foreground/70">
                <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4 text-coral" /> Launched 30 July 2025</span>
                <span className="inline-flex items-center gap-1.5"><Globe className="h-4 w-4 text-coral" /> 15+ countries</span>
                <span className="inline-flex items-center gap-1.5"><Users className="h-4 w-4 text-coral" /> Women-first · creator-led</span>
              </div>
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
                {heroStats.map((s) => (
                  <div key={s.v} className="rounded-2xl border border-border bg-white/70 p-4 text-center">
                    <div className="font-display text-2xl md:text-3xl font-extrabold text-coral">{s.k}</div>
                    <div className="mt-1 text-xs text-foreground/65">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MILESTONES */}
        <section className="relative mx-auto w-[min(94%,1180px)] mt-16 md:mt-24">
          <div className="text-center">
            <span className="chapter-num">milestones we hit</span>
            <h2 className="mt-2 font-display text-3xl md:text-5xl font-extrabold">
              What hosting Fellowship 1.0 <span className="text-coral">actually shipped</span>
            </h2>
            <p className="mt-3 mx-auto max-w-2xl text-foreground/70">
              Receipts &gt; promises. Every number below came from real humans showing up,
              not from ad spend or bots.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {milestones.map(({ icon: Icon, k, v, tag }) => (
              <div
                key={v}
                className="group relative chapter-glass p-6 transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-sunset shadow-glow">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/45">{tag}</span>
                </div>
                <div className="mt-4 font-display text-3xl font-extrabold text-coral">{k}</div>
                <p className="mt-1.5 text-sm text-foreground/75 leading-relaxed">{v}</p>
              </div>
            ))}
          </div>
        </section>

        {/* VISION */}
        <section className="relative mx-auto w-[min(94%,1180px)] mt-16 md:mt-24">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="chapter-glass p-8 md:p-10">
              <span className="chapter-num">the vision</span>
              <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold">Redefining the Web3 on-ramp</h2>
              <p className="mt-4 text-foreground/75 leading-relaxed">
                The crypto world is a rapidly evolving frontier — often perceived as complex,
                gatekept and inaccessible, especially for women. Traditional "CT" narratives
                are overwhelming and speculation-heavy.
              </p>
              <p className="mt-3 text-foreground/75 leading-relaxed">
                GWY Fellowship 1.0 was our answer — demystifying Web3 through its practical
                applications, real impact and the unparalleled career &amp; entrepreneurial
                opportunities that come with it.
              </p>
            </div>
            <div className="chapter-glass p-8 md:p-10">
              <span className="chapter-num">why now?</span>
              <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold">The gap we were filling</h2>
              <ul className="mt-4 space-y-3 text-sm text-foreground/80">
                <li className="flex gap-3"><span className="text-coral">◆</span> Women make up &lt;25% of the Web3 user base.</li>
                <li className="flex gap-3"><span className="text-coral">◆</span> Most onboarding is dev-heavy and gatekept.</li>
                <li className="flex gap-3"><span className="text-coral">◆</span> Consumer apps &amp; GameFi hold the real adoption power.</li>
                <li className="flex gap-3"><span className="text-coral">◆</span> Too technical, too transactional, or too niche.</li>
                <li className="flex gap-3"><span className="text-coral">◆</span> A content gap for street-style, creator-led exploration.</li>
              </ul>
              <p className="mt-5 font-hand text-2xl text-coral">Community + tools + vibe.</p>
            </div>
          </div>
        </section>

        {/* FEATURED IMAGES */}
        <section className="relative mx-auto w-[min(94%,1180px)] mt-16 md:mt-24">
          <div className="grid md:grid-cols-2 gap-6">
            <figure className="chapter-glass overflow-hidden">
              <img src="/doradao1/partners.webp" alt="45+ community partners across the world" className="w-full h-72 md:h-80 object-cover" loading="lazy" />
              <figcaption className="px-6 py-4 text-sm text-foreground/70">
                <span className="font-display font-bold text-foreground">45+ partners.</span> India, Nepal, Dubai, Thailand, China, Korea, the US, Europe, Indonesia, Philippines, Bangladesh, Sri Lanka & 5+ African countries.
              </figcaption>
            </figure>
            <figure className="chapter-glass overflow-hidden">
              <img src="/doradao1/deck.webp" alt="Sponsorship deck cover" className="w-full h-72 md:h-80 object-cover" loading="lazy" />
              <figcaption className="px-6 py-4 text-sm text-foreground/70">
                <span className="font-display font-bold text-foreground">The deck that started conversations.</span> Iterated 20+ times. Done &gt; perfect.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* BEHIND THE SCENES */}
        <section className="relative mx-auto w-[min(94%,1180px)] mt-16 md:mt-24">
          <div className="text-center">
            <span className="chapter-num">behind the scenes</span>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">
              Building a program <span className="text-coral">from scratch</span>
            </h2>
            <p className="mt-3 mx-auto max-w-2xl text-foreground/70">
              No fancy team, no pre-set playbook — just messy Google Docs, late-night ideas
              and one big why.
            </p>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            {journey.map((j) => (
              <div key={j.n} className="chapter-glass p-6 md:p-8">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-3xl font-extrabold text-coral">{j.n}</span>
                  <h3 className="font-display text-lg md:text-xl font-bold">{j.t}</h3>
                </div>
                <p className="mt-3 text-sm text-foreground/75 leading-relaxed">{j.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* EXECUTION */}
        <section className="relative mx-auto w-[min(94%,1180px)] mt-16 md:mt-24">
          <div className="chapter-glass p-8 md:p-12">
            <span className="chapter-num">execution · bringing it to life</span>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">
              A laptop, a crazy idea & <span className="text-coral">40+ tabs open</span>
            </h2>
            <div className="mt-6 grid md:grid-cols-3 gap-5 text-sm">
              <div className="rounded-2xl border border-border bg-white/65 p-5">
                <Radio className="h-5 w-5 text-coral" />
                <div className="mt-2 font-display font-bold">Launch day buzz</div>
                <p className="mt-2 text-foreground/75">LinkedIn impressions spiked to <span className="font-bold text-coral">8k</span> on day one. Selection mails rolled out in batches with shareable badges — the community spread the word for us.</p>
              </div>
              <div className="rounded-2xl border border-border bg-white/65 p-5">
                <MessageCircle className="h-5 w-5 text-coral" />
                <div className="mt-2 font-display font-bold">The WhatsApp chamber</div>
                <p className="mt-2 text-foreground/75">Opened 10 days <em>before</em> selections — for everyone, fellow or not. <span className="font-bold text-coral">2k+ messages</span> in the first 3 hours. Latest chat: 3 AM.</p>
              </div>
              <div className="rounded-2xl border border-border bg-white/65 p-5">
                <Hammer className="h-5 w-5 text-coral" />
                <div className="mt-2 font-display font-bold">Discord → LinkedIn Live</div>
                <p className="mt-2 text-foreground/75">Day one was a technical mess. We pivoted to LinkedIn Live (30 min delay 😅), traded exclusivity for reach — and flipped it into FOMO.</p>
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="relative mx-auto w-[min(94%,1180px)] mt-16 md:mt-24">
          <div className="text-center">
            <span className="chapter-num">the snaps</span>
            <h2 className="mt-2 font-display text-3xl md:text-5xl font-extrabold">
              Receipts from <span className="text-coral">the cohort</span>
            </h2>
            <p className="mt-3 mx-auto max-w-2xl text-foreground/70">
              Screens, sessions, side-quests. The fun parts you only see if you were inside.
            </p>
          </div>
          <div className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
            {gallery.map((g, i) => (
              <figure
                key={g.src}
                className="mb-4 break-inside-avoid chapter-glass overflow-hidden group"
              >
                <div className="overflow-hidden">
                  <img
                    src={g.src}
                    alt={g.caption}
                    loading="lazy"
                    className="w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    style={{ aspectRatio: i % 3 === 1 ? "4 / 5" : "16 / 10" }}
                  />
                </div>
                <figcaption className="px-4 py-3 text-xs text-foreground/65 border-t border-border">
                  {g.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* HACKATHON */}
        <section className="relative mx-auto w-[min(94%,1180px)] mt-16 md:mt-24">
          <div className="chapter-glass p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="chapter-num">the mini-hackathon (it wasn't mini)</span>
              <h2 className="mt-2 font-display text-3xl md:text-5xl font-extrabold">
                27 projects · 100 builders · <span className="text-coral">822 votes</span>
              </h2>
              <p className="mt-4 text-foreground/75">
                Build something real, then drive actual traction. We added a public voting
                round for the 3rd spot — almost 600 votes rolled in within 12 hours. Poll
                dropped at 10 PM IST; 200+ votes in the first 2 hours.
              </p>
            </div>
            <div className="mt-8 grid md:grid-cols-3 gap-5">
              {winners.map((w) => (
                <div key={w.name} className="rounded-2xl border border-border bg-white/70 p-6">
                  <div className="flex items-center justify-between">
                    <Trophy className="h-5 w-5 text-coral" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/55">{w.place}</span>
                  </div>
                  <div className="mt-2 font-display text-xl font-bold">{w.name}</div>
                  <p className="mt-2 text-sm text-foreground/75">{w.d}</p>
                  <p className="mt-3 text-[11px] text-foreground/55">Team: {w.team}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LEARNINGS */}
        <section className="relative mx-auto w-[min(94%,1180px)] mt-16 md:mt-24">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="chapter-glass p-8 md:p-10">
              <Heart className="h-5 w-5 text-coral" />
              <h3 className="mt-2 font-display text-2xl font-bold">The dip & the comeback</h3>
              <p className="mt-3 text-foreground/75">
                Two sessions in, viewership dipped to 50–60. Instead of guessing, we DM'd
                people directly. 50+ replied — honestly, openly. That one shift took peak
                viewership back to <span className="text-coral font-bold">150+</span> and
                wrapped all 9 sessions + 2 challenges with real momentum.
              </p>
            </div>
            <div className="chapter-glass p-8 md:p-10">
              <Sparkles className="h-5 w-5 text-coral" />
              <h3 className="mt-2 font-display text-2xl font-bold">The bounty week</h3>
              <p className="mt-3 text-foreground/75">
                A <span className="text-coral font-bold">$1,000</span> prize pool dropped to
                make the community thrilling to participate in — create, share, build, help.
                Every yap counted. The louder (and smarter) you yapped, the more you won.
              </p>
            </div>
          </div>
          <p className="mt-8 mx-auto max-w-2xl text-center font-hand text-2xl md:text-3xl text-coral">
            Whatever you're building — people take it seriously, way more than you expect.
          </p>
        </section>

        {/* CTA */}
        <section className="relative mx-auto w-[min(94%,1180px)] mt-16 md:mt-24 mb-16 md:mb-24">
          <div className="chapter-glass p-8 md:p-12 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Cohort <span className="text-coral">2.0</span> is open
            </h2>
            <p className="mt-3 mx-auto max-w-xl text-foreground/70">
              The OG cohort built the playbook. Now we're scaling the culture — apply to
              Fellowship 2.0 or bring it to your city.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/fellowship"
                className="inline-flex items-center gap-2 rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-95"
              >
                Apply to Fellowship 2.0 <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/chapters"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-5 py-2.5 text-sm font-semibold hover:bg-white/80"
              >
                Start a chapter
              </Link>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
      <ApplyBar label="GWY Fellowship 2.0 · open" ctaLabel="Apply" ctaHref="https://discord.gg/CRaEtrtZ2v" />
    </div>
  );
}