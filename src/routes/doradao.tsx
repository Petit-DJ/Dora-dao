import { createFileRoute, Link } from "@tanstack/react-router";
import { CursorTrail } from "@/components/CursorTrail";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ApplyBar } from "@/components/ApplyBar";
import {
  ArrowUpRight,
  Compass,
  Heart,
  Users,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/doradao")({
  head: () => ({
    meta: [
      { title: "DoraDAO — A bridge for builders, creators & curious humans" },
      {
        name: "description",
        content:
          "DoraDAO is a non-profit community on a mission to make AI and Web3 accessible, inclusive, and human — connecting India with global opportunities.",
      },
      { property: "og:title", content: "DoraDAO Overview" },
      {
        property: "og:description",
        content:
          "The parent ecosystem behind GWY Fellowship, DoraHack and 7+ premium initiatives. Access, ownership, and real participation.",
      },
    ],
  }),
  component: DoraDAOPage,
});

const initiatives = [
  {
    t: "Girls Who Yap Fellowship",
    d: "A women-first, creator-led learning cohort exploring AI & Web3 through real building, not jargon.",
    emoji: "👑",
    img: "https://florentine-kite-61a.notion.site/image/attachment%3Afb3a7615-59e8-4dde-8340-545c86ff4faf%3ABeige_and_Red_Orange_Modern_Project_Proposal_Presentation-3.png?table=block&id=2d9d8cf9-6e75-80bb-a7f9-e69d1224daa1&spaceId=ed3c5042-1ff5-40df-936f-6a222ed4453a&width=510",
  },
  {
    t: "GWY Conference",
    d: "Flagship invite-only IRL gathering for women creators, builders & community leaders across India.",
    emoji: "🎤",
    img: "https://florentine-kite-61a.notion.site/image/attachment%3A21cb3675-cd3f-4cbb-9f14-853da68ffbd3%3AGWY_CONF-2.png?table=block&id=2d9d8cf9-6e75-8058-97a2-c8c36e829bcb&spaceId=ed3c5042-1ff5-40df-936f-6a222ed4453a&width=770",
  },
  {
    t: "GWY Pre-Conf",
    d: "A 12-hour global online experience — speaker sessions, Talent Night, gaming rooms & creator challenges. Free, open to all.",
    emoji: "🌐",
    img: "https://florentine-kite-61a.notion.site/image/attachment%3Ab1a8aa93-bba9-49db-b819-f2edb6e8cb33%3AGWYpreconf.png?table=block&id=30bd8cf9-6e75-80cf-a3f5-d2c3437b6c07&spaceId=ed3c5042-1ff5-40df-936f-6a222ed4453a&width=760",
  },
  {
    t: "GWY Chapters",
    d: "City-led local extensions — meetups, conversations & experiences inspired by the GWY ethos.",
    emoji: "🏙️",
    img: "https://florentine-kite-61a.notion.site/image/attachment%3Adcb2c1b7-df48-42c5-959d-ab48cb0b61d5%3AGIRLS_WHO_YAP-12.png?table=block&id=2d9d8cf9-6e75-806c-b46d-fed7dc421732&spaceId=ed3c5042-1ff5-40df-936f-6a222ed4453a&width=350",
  },
  {
    t: "GWY Night Camp",
    d: "Soft, late-night gatherings across cities & time zones — tiny circles turning into deep talks.",
    emoji: "🌙",
    img: "https://florentine-kite-61a.notion.site/image/attachment%3Aa56b707d-6f7f-48ad-b049-45a2e270daff%3AGWY_NIGHT_CAMP-6.png?table=block&id=31ad8cf9-6e75-8021-87a2-fb6a8813e6cc&spaceId=ed3c5042-1ff5-40df-936f-6a222ed4453a&width=480",
  },
  {
    t: "W3M",
    d: "A premium initiative making Web3 mechanics tangible — for makers who'd rather build than theorise.",
    emoji: "🔬",
    img: "https://florentine-kite-61a.notion.site/image/attachment%3Adedfb8a6-3104-404b-9fcd-68478f3882a9%3ABeige_and_Red_Orange_Modern_Project_Proposal_Presentation.png?table=block&id=2d9d8cf9-6e75-802b-ad9e-ecc3322de87a&spaceId=ed3c5042-1ff5-40df-936f-6a222ed4453a&width=510",
  },
  {
    t: "Build With Us",
    d: "Hands-on build sprints where ideas become shipped products — co-created with the community.",
    emoji: "🚀",
    img: "https://florentine-kite-61a.notion.site/image/attachment%3Af941f608-3462-4a8b-b262-2b8c55cee7ca%3ADeck-4.png?table=block&id=2d9d8cf9-6e75-8079-886c-ea2e3ae3e258&spaceId=ed3c5042-1ff5-40df-936f-6a222ed4453a&width=510",
  },
  {
    t: "Podcast & Spotlights",
    d: "Conversations and features shining light on creators, founders & community voices worth hearing.",
    emoji: "🎙️",
    img: "https://florentine-kite-61a.notion.site/image/attachment%3A818e841f-349c-4429-901e-b3c853d540b3%3AGIRLS_WHO_YAP-13.png?table=block&id=2d9d8cf9-6e75-80f8-8372-e6e126b8e682&spaceId=ed3c5042-1ff5-40df-936f-6a222ed4453a&width=350",
  },
] as const;

const principles = [
  { i: Compass, t: "Access", d: "Opportunities should travel both ways — from India to the world and back." },
  { i: Heart, t: "Human-first", d: "AI & Web3 for everyone, not just hardcore tech folks." },
  { i: Users, t: "Ownership", d: "Real participation over passive consumption — DAO in spirit." },
  { i: Sparkles, t: "Curious like Dora", d: "Ask the obvious, the silly, the brave. No judgement." },
] as const;

const reach = [
  { k: "3M+", v: "reach" },
  { k: "40K+", v: "community" },
  { k: "10K+", v: "creators" },
  { k: "30+", v: "events" },
];


function DoraDAOPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-sunset-wash text-foreground">
      <CursorTrail />

      <div className="relative z-10">
        <SiteNav active="doradao" />

        {/* HERO */}
        <section className="relative mx-auto w-[min(94%,1100px)] mt-10 md:mt-16">
          <div className="chapter-glass p-8 md:p-14 text-center">
            <span className="pill inline-flex items-center gap-2 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-foreground/70">
              <Sparkles className="h-3 w-3" /> the parent ecosystem
            </span>
            <h1 className="mt-5 font-display text-4xl md:text-6xl font-extrabold leading-[1.05]">
              DoraDAO is a <span className="text-coral">bridge</span>
              <br />between curious humans &amp; the world.
            </h1>
            <p className="mt-5 mx-auto max-w-2xl text-base md:text-lg text-foreground/75">
              A non-profit community making AI &amp; Web3 accessible, inclusive, and human —
              not just for hardcore tech folks, but for everyone.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://luma.com/1o24ny1d"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-95"
              >
                Join the community <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                to="/fellowship"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-white/80"
              >
                Explore GWY Fellowship
              </Link>
            </div>
          </div>
        </section>

        {/* WHAT IS DORADAO — narrative */}
        <section className="relative mx-auto w-[min(94%,1100px)] mt-16 md:mt-24">
          <div className="chapter-glass p-8 md:p-14">
            <div className="text-center max-w-3xl mx-auto">
              <span className="chapter-num">what is doradao?</span>
              <h2 className="mt-2 font-display text-3xl md:text-5xl font-extrabold leading-tight">
                Communities aren't just built here.
                <br />
                They're <span className="text-coral">questioned, explored, felt &amp; lived.</span>
              </h2>
            </div>
            <div className="mt-8 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto text-foreground/80 leading-relaxed">
              <p>
                DoraDAO is a non-profit community on a mission to make AI &amp; Web3
                accessible, inclusive, and human — not just for hardcore tech experts,
                but for everyone.
              </p>
              <p>
                It started with a question that wouldn't go away: <em>why do global
                opportunities — hackathons, grants, fellowships — feel out of reach for
                so many builders in India and emerging markets?</em> DoraDAO is the
                bridge we wished existed.
              </p>
            </div>
            <p className="mt-8 text-center font-hand text-2xl md:text-3xl text-coral">
              Stay curious. Stay building. Stay yapping.
            </p>
          </div>
        </section>

        {/* ORIGIN STORY */}
        <section className="relative mx-auto w-[min(94%,1100px)] mt-16 md:mt-24">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="chapter-glass p-8 md:p-10">
              <span className="chapter-num">origin story</span>
              <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold">The missing bridge</h2>
              <p className="mt-4 text-foreground/75 leading-relaxed">
                DoraDAO was born from a simple but uncomfortable realization. Opportunities — global hackathons,
                grants, fellowships, early-stage experiments — were moving fast, but the bridge to access them
                wasn't built for everyone. Especially not for builders in India and emerging markets.
              </p>
              <p className="mt-3 text-foreground/75 leading-relaxed">
                So DoraDAO started as that missing bridge — connecting India with global ecosystems, and helping
                the world understand India as a living, contributing force. Not a checkbox market.
              </p>
              <p className="mt-4 font-hand text-2xl text-coral">Opportunity should travel both ways.</p>
            </div>

            <div className="chapter-glass p-8 md:p-10">
              <span className="chapter-num">the name</span>
              <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold">Why "Dora"?</h2>
              <p className="mt-4 text-foreground/75 leading-relaxed">
                The idea is pretty simple, and a little nostalgic. It comes from <em>Dora the Explorer</em> —
                the one character who never hesitated to ask questions. No matter how obvious, basic, or "silly"
                they seemed.
              </p>
              <p className="mt-3 text-foreground/75 leading-relaxed">
                She questioned everything without fear, embarrassment, or worry of judgement. That curiosity
                stuck with us. That's how DoraDAO came to life.
              </p>
            </div>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section className="relative mx-auto w-[min(94%,1100px)] mt-16 md:mt-24">
          <div className="text-center">
            <span className="chapter-num">how we operate</span>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">Four things we won't compromise on</h2>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {principles.map(({ i: Icon, t, d }) => (
              <div key={t} className="chapter-glass p-6 hover:-translate-y-1 transition-transform">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-coral text-primary-foreground shadow-glow">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold">{t}</h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* UMBRELLA / INITIATIVES */}
        <section className="relative mx-auto w-[min(94%,1100px)] mt-16 md:mt-24">
          <div className="chapter-glass p-8 md:p-12 bg-gradient-to-br from-white/70 to-[oklch(0.88_0.12_40/0.45)]">
            <div className="text-center">
              <span className="chapter-num">the umbrella</span>
              <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">7+ initiatives, one philosophy</h2>
              <p className="mt-3 mx-auto max-w-2xl text-foreground/75">
                Each program serves a different audience, but all follow the same core philosophy:
                access, ownership, and real participation.
              </p>
            </div>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {initiatives.map((it) => (
                <div
                  key={it.t}
                  className="group rounded-2xl border border-border bg-white/70 overflow-hidden hover:bg-white/90 hover:-translate-y-0.5 transition shadow-soft"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[oklch(0.95_0.04_60)]">
                    <img
                      src={it.img}
                      alt={it.t}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 text-2xl drop-shadow">{it.emoji}</div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-bold">{it.t}</h3>
                    <p className="mt-1.5 text-sm text-foreground/70 leading-relaxed">{it.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INSTAGRAM / CONFESSIONS */}
        <section className="relative mx-auto w-[min(94%,1100px)] mt-16 md:mt-24">
          <div className="text-center">
            <span className="chapter-num">straight from the feed</span>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">
              Voices from <span className="text-coral">@connectdoradao</span>
            </h2>
            <p className="mt-3 mx-auto max-w-xl text-foreground/70">
              Confessions, drops & day-in-the-life moments from our community —
              live from Instagram.
            </p>
          </div>

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              "DR60vc7EkuC",
              "DR3341iEpy8",
              "DR33x6TEh5g",
              "DRmQf3NEubT",
              "DRmQTKJEoeA",
              "DRmQFgAkpKJ",
              "DRZmSloiBfZ",
              "DRUpJFCiLri",
              "DRR9dpbEk4c",
            ].map((code, i) => (
              <div
                key={i}
                className="chapter-glass overflow-hidden p-2"
              >
                <iframe
                  src={`https://www.instagram.com/p/${code}/embed`}
                  loading="lazy"
                  title={`Instagram post ${i + 1}`}
                  className="w-full rounded-2xl bg-white"
                  style={{ height: 560, border: 0 }}
                  allowTransparency
                  scrolling="no"
                />
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <a
              href="https://www.instagram.com/connectdoradao/"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-95"
            >
              See all confessions on Instagram <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </section>



        {/* FOUNDING TEAM */}
        <section className="relative mx-auto w-[min(94%,1100px)] mt-16 md:mt-24">
          <div className="chapter-glass p-8 md:p-12">
            <div className="grid md:grid-cols-[1fr_1.2fr] gap-8 items-start">
              <div>
                <span className="chapter-num">the founders</span>
                <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">Quiet by design.</h2>
                <p className="mt-4 font-hand text-2xl text-coral">Leadership isn't about being seen.</p>
              </div>
              <div className="space-y-4 text-foreground/75 leading-relaxed">
                <p>
                  At the core are <strong>seven founding members</strong> who've consciously stepped away from
                  the spotlight. Their focus isn't visibility or titles — it's creating space for others to grow,
                  lead, and access real opportunities.
                </p>
                <p>
                  You'll often see them working in the background — sometimes as volunteers, sometimes in support
                  roles — without any obvious markers of authority. It's a deliberate choice to keep the ecosystem
                  people-first.
                </p>
                <div className="mt-4 rounded-2xl border border-border bg-white/55 p-5">
                  <h4 className="font-display text-base font-bold">Who runs the programs?</h4>
                  <p className="mt-2 text-sm">
                    Each initiative is led by a dedicated <strong>Program Manager</strong> — voluntary,
                    responsibility-driven, with a clear scope of authority. Tenure is purpose-bound, typically
                    tied to the lifecycle of the program.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* REACH */}
        <section className="relative mx-auto w-[min(94%,1100px)] mt-16 md:mt-24">
          <div className="text-center">
            <span className="chapter-num">our reach</span>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">
              A community that <span className="text-coral">shows up</span>
            </h2>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {reach.map((r) => (
              <div key={r.v} className="chapter-glass p-6 text-center">
                <div className="font-display text-4xl md:text-5xl font-extrabold text-coral">{r.k}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-foreground/60">{r.v}</div>
              </div>
            ))}
          </div>
        </section>

        <SiteFooter />
      </div>
      <ApplyBar label="Join 40K+ curious humans" ctaLabel="Join community" ctaHref="https://luma.com/1o24ny1d" />
    </div>
  );
}
