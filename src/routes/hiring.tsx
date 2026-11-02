import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Box,
  Code,
  Gift,
  Globe,
  Handshake,
  Heart,
  Laptop,
  Leaf,
  Megaphone,
  Menu,
  Palette,
  PenTool,
  CalendarCheck,
  Search,
  Sparkles,
  Sprout,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import heroPeople from "@/assets/dora-characters.png";
import friends from "@/assets/gwy/characters.png";
import p1 from "@/assets/mosaic/portrait-1.jpg";
import p2 from "@/assets/mosaic/portrait-2.jpg";
import p3 from "@/assets/mosaic/portrait-3.jpg";
import p4 from "@/assets/mosaic/portrait-4.jpg";
import p5 from "@/assets/mosaic/portrait-5.jpg";
import p6 from "@/assets/mosaic/portrait-6.jpg";

export const Route = createFileRoute("/hiring")({
  head: () => ({
    meta: [
      { title: "Hiring · Join the DoraDAO team" },
      {
        name: "description",
        content:
          "Open roles at DoraDAO across community, design, engineering, marketing and operations. Remote-first and global.",
      },
      {
        property: "og:title",
        content: "Join our team to build a more open and inclusive future · DoraDAO",
      },
      { property: "og:description", content: "Explore open roles at DoraDAO and apply today." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HiringPage,
});

const MAIL = "mailto:Connectdoradao@gmail.com?subject=";
const cats = [
  "All Roles",
  "Community",
  "Design",
  "Engineering",
  "Marketing",
  "Operations",
  "Content",
  "Other",
];

const roles = [
  {
    t: "Community Manager",
    c: "Community",
    type: "Full-time",
    d: "Build and grow vibrant communities around our programs and initiatives.",
    I: Users,
  },
  {
    t: "Program Manager",
    c: "Operations",
    type: "Full-time",
    d: "Plan and execute fellowships, hackathons and community programs globally.",
    I: CalendarCheck,
  },
  {
    t: "Content Creator",
    c: "Content",
    type: "Part-time",
    d: "Create engaging content across social media, blogs and newsletters.",
    I: PenTool,
  },
  {
    t: "Design Lead",
    c: "Design",
    type: "Full-time",
    d: "Own the visual identity and design experiences across our products and programs.",
    I: Palette,
  },
  {
    t: "Growth & Marketing",
    c: "Marketing",
    type: "Full-time",
    d: "Drive growth, partnerships and awareness for DoraDAO.",
    I: Megaphone,
  },
  {
    t: "Frontend Developer",
    c: "Engineering",
    type: "Full-time",
    d: "Build and improve our products and digital tools for communities.",
    I: Code,
  },
  {
    t: "Product Manager",
    c: "Other",
    type: "Full-time",
    d: "Define and ship products that empower creators and communities.",
    I: Box,
  },
  {
    t: "Partnerships Lead",
    c: "Other",
    type: "Full-time",
    d: "Build strategic partnerships with communities, brands and organizations.",
    I: Handshake,
  },
];

const perks = [
  [Globe, "Remote First"],
  [Users, "Global Team"],
  [Heart, "Meaningful Work"],
  [Sprout, "Learning & Growth"],
] as const;

const why = [
  [
    Leaf,
    "Meaningful Impact",
    "Work on initiatives that create real opportunities and support communities globally.",
  ],
  [Users, "Global Community", "Be part of a diverse team of builders, creators and changemakers."],
  [
    Sprout,
    "Learning & Growth",
    "Access mentorship, resources and hands-on experience across Web3 and community building.",
  ],
  [Laptop, "Flexible Work", "Remote-first and flexible work environment that adapts to your life."],
  [
    Sparkles,
    "Ownership",
    "Take initiative, experiment and make a real difference in the work you do.",
  ],
  [
    Heart,
    "Collaborative Culture",
    "A kind, open and supportive team that values your ideas and individuality.",
  ],
  [Globe, "Global Exposure", "Work with partners, communities and creators across the world."],
  [Gift, "Perks & Benefits", "Access to events, swag and exclusive opportunities."],
] as const;

function HiringPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All Roles");
  const list = useMemo(
    () =>
      roles.filter(
        (r) =>
          (cat === "All Roles" || r.c === cat) &&
          `${r.t} ${r.c} ${r.d}`.toLowerCase().includes(q.trim().toLowerCase()),
      ),
    [q, cat],
  );

  return (
    <div className="pr-page pd-page hr-page">
      <SiteNavbar />

      <section className="hr-hero">
        <div className="hr-hero-copy">
          <Reveal>
            <p className="pt-kicker">We're hiring · Remote-first</p>
          </Reveal>
          <Reveal>
            <h1>
              Join our team to build a more open and <em>inclusive future.</em>
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p>
              Be part of DoraDAO and help us create opportunities, communities, and tools that
              empower people everywhere.
            </p>
          </Reveal>
        </div>
        <Reveal delay={150} className="hr-hero-art">
          <img
            src={heroPeople}
            alt="Girl in a yellow sprout beret pointing ahead with her friends"
            width={676}
            height={281}
          />
          <div className="pd-sign">
            {["Communities", "Opportunities", "Open Internet", "Real Impact"].map((w) => (
              <span key={w}>{w}</span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={200} className="hr-search-wrap">
          <form
            className="hr-search"
            onSubmit={(e) => {
              e.preventDefault();
              document.getElementById("roles")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Search size={18} aria-hidden />
            <input
              aria-label="Search roles"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search roles (e.g. design, community, engineering...)"
            />
            <button type="submit" className="pd-btn">
              Search <ArrowRight size={16} />
            </button>
          </form>
          <div className="hr-cats">
            {cats.map((c) => (
              <button
                key={c}
                className={`pd-chip ${cat === c ? "is-on" : ""}`}
                aria-pressed={cat === c}
                onClick={() => setCat(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>
      </section>

      <div className="pd-sheet">
        <section className="pd-sec hr-strip">
          <Reveal>
            <p>Join a global community of builders, creators and changemakers.</p>
            <div className="hr-avatars">
              {[p1, p2, p3, p4, p5, p6].map((s, i) => (
                <img key={i} src={s} alt="" loading="lazy" />
              ))}
              <span>+50</span>
            </div>
          </Reveal>
          <div className="hr-perks">
            {perks.map(([I, l], i) => (
              <Reveal key={l} delay={i * 70}>
                <div>
                  <I className="pd-ic" />
                  <b>{l}</b>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="roles" className="pd-sec">
          <div className="pd-row">
            <Reveal>
              <h2 className="pd-h2">
                <span>≈</span> Open Roles <span>≈</span>
              </h2>
            </Reveal>
            <button
              className="pd-outline"
              onClick={() => {
                setCat("All Roles");
                setQ("");
              }}
            >
              View all roles <ArrowRight size={15} />
            </button>
          </div>
          {list.length === 0 ? (
            <p className="pd-sub">
              No roles match your search yet, try another keyword or category.
            </p>
          ) : (
            <div className="hr-grid">
              {list.map((r, i) => (
                <Reveal key={r.t} delay={i * 60}>
                  <article className="pd-card hr-role">
                    <r.I className="pd-ic hr-role-ic" />
                    <h3>{r.t}</h3>
                    <div className="hr-tags">
                      <span>
                        {r.c === "Other"
                          ? r.t.includes("Product")
                            ? "Product"
                            : "Partnerships"
                          : r.c}
                      </span>
                      <span>{r.type}</span>
                    </div>
                    <p>{r.d}</p>
                    <a
                      className="hr-apply"
                      href={`${MAIL}${encodeURIComponent(`Application: ${r.t}`)}`}
                    >
                      Apply Now <ArrowRight size={15} />
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>
          )}
        </section>

        <section className="pd-sec hr-purpose">
          <Reveal className="hr-purpose-art">
            <img src={friends} alt="DoraDAO friends working together" loading="lazy" />
          </Reveal>
          <Reveal delay={120}>
            <h2 className="pd-h2">More than a job. A bigger purpose.</h2>
            <p className="pd-hand hr-purpose-text">
              Work on real problems, learn from an incredible community, and create opportunities
              for people around the world.
            </p>
          </Reveal>
        </section>

        <section className="pd-sec">
          <Reveal>
            <h2 className="pd-h2">
              <span>≈</span> Why join DoraDAO? <span>≈</span>
            </h2>
          </Reveal>
          <div className="hr-why">
            {why.map(([I, t, d], i) => (
              <Reveal key={t} delay={i * 50}>
                <div className="pd-why-item hr-why-card">
                  <I className="pd-ic" />
                  <div>
                    <h4>{t}</h4>
                    <p>{d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="pd-sec hr-cta">
          <Reveal>
            <h2 className="pd-h2">Find your place at DoraDAO.</h2>
            <p>
              Ready to work on meaningful projects and be part of a global community? Explore open
              roles and apply today.
            </p>
            <a href="#roles" className="pd-btn">
              View all open roles <ArrowRight size={18} />
            </a>
          </Reveal>
        </section>
      </div>
      <SiteFooter />
    </div>
  );
}
