import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown, ChevronLeft, ChevronRight, Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { faceRows as fallbackRows, fetchContributors, rowsFor } from "@/components/about-faces-data";
import p1 from "@/assets/mosaic/portrait-1.jpg";
import p2 from "@/assets/mosaic/portrait-2.jpg";
import p3 from "@/assets/mosaic/portrait-3.jpg";
import p4 from "@/assets/mosaic/portrait-4.jpg";
import p5 from "@/assets/mosaic/portrait-5.jpg";
import p6 from "@/assets/mosaic/portrait-6.jpg";
import p7 from "@/assets/mosaic/portrait-7.jpg";
import p8 from "@/assets/mosaic/portrait-8.jpg";
import p9 from "@/assets/mosaic/portrait-9.jpg";
import fellowship from "@/assets/programs/fellowship.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About DoraDAO, The people behind the community" },
      { name: "description", content: "Discover DoraDAO's origin and people-first philosophy: a nonprofit ecosystem where curiosity becomes contribution, belonging and shared ownership." },
      { property: "og:title", content: "About DoraDAO" },
      { property: "og:description", content: "A community built by hoomans, for hoomans. Discover the story, shared culture and pathways from participation to ownership." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

// Floating hero portraits: position (%), size (px), parallax speed.
const floaters = [
  { src: p1, x: 10, y: 36, s: 138, v: 0.35 },
  { src: p2, x: 69, y: 0, s: 137, v: 0.6 },
  { src: p3, x: 89, y: 28, s: 137, v: 0.25 },
  { src: p4, x: 69, y: 60, s: 137, v: 0.45 },
  { src: p5, x: 24, y: 77, s: 216, v: 0.15 },
  { src: p6, x: 20, y: 73, s: 60, v: 0.7 },
  { src: p7, x: 0, y: -4, s: 150, v: 0.8 },
];

const mission =
  "A community built by hoomans, for hoomans. We make emerging technology accessible, inclusive and human. Curiosity is welcome here. You can learn, create, contribute and find your people, then help the next person begin. Because the real measure of a community is what its people become capable of doing together.";

const reasons = [
  { title: "Different Doors. One Home.", text: "Learn with Girls Who Yap, launch with DoraHacks, contribute with Build with Us, serve with DoraHood or host a World Tour gathering. Your first interest does not have to define your whole journey." },
  { title: "Local Roots, Global Reach", text: "Opportunity travels in both directions. Local people bring their talent, ideas and culture into the global ecosystem, and shape gatherings around their own communities." },
  { title: "Work You Can Point To", text: "Projects, workshops, portfolios and community contributions give learning a practical direction. Participation is a chance to make something, not just watch." },
  { title: "Room to Take Ownership", text: "An attendee can become a contributor, host, mentor or program lead. Leadership means creating space for others to make decisions and grow." },
  { title: "Relationships That Continue", text: "Programs give us a reason to meet. Shared experiences, friendships and collaboration give us reasons to stay connected as our interests change." },
];

const steps = [
  { title: "Discover", text: "Find a program that fits where you are, from writing your first line of code to shipping your own product." },
  { title: "Join", text: "Apply or sign up, and get introduced to the people, channels and mentors you'll be working alongside." },
  { title: "Learn", text: "Workshops, live sessions and community calls give you the skills and context to keep moving forward." },
  { title: "Build", text: "Team up with peers on real projects during hackathons, cohorts and sprints, with support at every step." },
  { title: "Share", text: "Present your work, celebrate small wins and receive honest, kind feedback from the community." },
  { title: "Give Back", text: "Become a mentor, speaker or organiser and help the next person begin their own journey." },
];

const tabs = [
  { id: "about", label: "About" },
  { id: "why", label: "Why Us" },
  { id: "process", label: "Process" },
  { id: "difference", label: "Difference" },
  { id: "team", label: "Team" },
];

const team = [
  { role: "Founder", image: p2 },
  { role: "Community Lead", image: p8 },
  { role: "Programs Lead", image: p9 },
];

function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const on = () => setY(window.scrollY);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return y;
}

// 0 → 1 progress of an element travelling through the viewport.
function useProgress(ref: React.RefObject<HTMLElement | null>, y: number, start = 0.85, end = 0.25) {
  const [p, setP] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const total = r.height + vh * (start - end);
    setP(Math.min(1, Math.max(0, (vh * start - r.top) / total)));
  }, [y, ref, start, end]);
  return p;
}

function Wave({ className }: { className: string }) {
  return (
    <svg className={`ab-wave ${className}`} viewBox="0 0 180 20" preserveAspectRatio="none" aria-hidden>
      <path d="M2 12 Q 17 2 32 12 T 62 12 T 92 12 T 122 12 T 152 12 T 178 12" fill="none" strokeWidth="7" strokeLinecap="round" />
    </svg>
  );
}

function About() {
  const y = useScrollY();
  const [active, setActive] = useState("about");
  const missionRef = useRef<HTMLDivElement>(null);
  const swirlRef = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const mp = useProgress(missionRef, y, 0.9, 0.35);
  const sp = useProgress(swirlRef, y, 1, 0.2);
  const words = mission.split(" ");
  const [faceRows, setFaceRows] = useState(fallbackRows);
  useEffect(() => {
    let live = true;
    fetchContributors().then(list => { if (live && list.length) setFaceRows(rowsFor(list)); }).catch(() => {});
    return () => { live = false; };
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    tabs.forEach((t) => { const el = document.getElementById(t.id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  const slide = (dir: number) => track.current?.scrollBy({ left: dir * 367, behavior: "smooth" });

  return (
    <main className="ab bg-ab-cream text-ab-ink">
      <SiteNavbar />

      <section id="about" className="ab-hero">
        {floaters.map((f, i) => (
          <img key={i} src={f.src} alt="" aria-hidden className="ab-float"
            style={{ left: `${f.x}%`, top: `${f.y}%`, width: f.s, height: f.s * (i === 4 ? 0.72 : 1), transform: `translateY(${-y * f.v}px)` }} />
        ))}
        <div className="ab-hero-copy" style={{ transform: `translateY(${y * 0.15}px)` }}>
          <h1>We are<br />DoraDAO</h1>
          <p>A nonprofit, people-first ecosystem where curiosity becomes contribution, strangers become collaborators, and you find a place you can help shape.</p>
        </div>
      </section>

      <section id="why" className="ab-green">
        <div ref={missionRef} className="ab-mission">
          {words.map((w, i) => (
            <span key={i} style={{ opacity: mp * words.length > i ? 1 : 0.18 }}>{w} </span>
          ))}
        </div>

        <div className="ab-wrap ab-trust">
          <h2 className="ab-h2 ab-trust-title">Why People<br /><span className="ab-trust-word">Trust<Wave className="ab-wave-yellow" /></span> DoraDAO</h2>
          <div className="ab-split">
            <img loading="lazy" decoding="async" src={fellowship.url} alt="DoraDAO community members working together" className="ab-trust-img" />
            <p>Trust grows through experience, not a promise on a page. We build toward it by making room for people to contribute, giving program leads responsibility and helping members create work they can show. A newcomer can ask a basic question, a creator can find collaborators, and a volunteer can grow into a leader. Belonging, honest communication and shared ownership matter as much as the size of the community.</p>
          </div>
          <div className="ab-row-head">
            <h3>What Sets Us Apart</h3>
            <div>
              <button aria-label="Previous" onClick={() => slide(-1)}><ChevronLeft size={20} /></button>
              <button aria-label="Next" onClick={() => slide(1)}><ChevronRight size={20} /></button>
            </div>
          </div>
        </div>
        <div ref={track} className="ab-cards">
          {reasons.map((r) => <article key={r.title} className="ab-card"><h4>{r.title}</h4><p>{r.text}</p></article>)}
        </div>
      </section>

      <section id="process" className="ab-beige">
        <div ref={swirlRef} className="ab-wrap ab-journey">
          <div className="ab-journey-copy">
            <p className="ab-journey-eyebrow">How it works</p>
            <h2 className="ab-journey-title">A Journey Built <span>Around You</span></h2>
            <p className="ab-journey-intro">There is no single route through DoraDAO. Begin wherever your curiosity takes you, and find new ways to learn, contribute and help others grow.</p>
          </div>
          <div className="ab-journey-art">
            <svg className="ab-journey-path" viewBox="0 0 400 400" fill="none" aria-hidden>
              <path d="M30 330 C 10 160, 140 40, 260 60 C 380 80, 400 240, 300 320 C 220 380, 120 340, 140 260"
                strokeWidth="22" strokeLinecap="round" pathLength={1}
                style={{ strokeDasharray: 1, strokeDashoffset: Math.max(0, 1 - sp * 1.6) }} />
            </svg>
            <img loading="lazy" decoding="async" src={p4} alt="A DoraDAO member smiling" className="ab-journey-img" />
          </div>
        </div>
        <ol className="ab-wrap ab-steps ab-steps-v2">
          {steps.map((s, i) => <li key={s.title}><span>{String(i + 1).padStart(2, "0")}</span><h3>{s.title}</h3><p>{s.text}</p></li>)}
        </ol>
        <div className="ab-wrap ab-tags"><span>Friendly from day one</span><span>One welcoming community</span><span>Built for every journey</span></div>
      </section>

      <section id="difference" className="ab-cream-panel">
        <div className="ab-wrap ab-split ab-diff">
          <h2 className="ab-h3">Not a Typical<br /><span className="relative">Community<Wave className="ab-wave-lilac" /></span></h2>
          <div className="ab-origin-copy"><p>In May 2025, a heartfelt conversation brought a simple need into focus: a place where people could be themselves, valued for who they are, not just what they produce. Around us, opportunities in emerging technology were growing, but access to them was uneven.</p><p>DoraDAO began as a bridge between global opportunities and curious people in India and emerging markets. Opportunity should travel in both directions: the world should discover the talent, ideas and communities already growing here, too.</p><p>Inspired by Dora the Explorer, we make curiosity a legitimate starting point. What began as a bridge is becoming a shared ecosystem, somewhere to belong, contribute and create opportunities for others.</p></div>
        </div>
        <div className="ab-wrap">
          <div className="ab-compare">
            <div>
              <img loading="lazy" decoding="async" src={p3} alt="" aria-hidden className="ab-avatar ab-avatar-blue" />
              <h3>A Place<br />to Begin</h3>
              <ul>{["Follow your curiosity", "Find an initiative that fits", "Ask without embarrassment", "Meet people beyond your circle"].map((t) => <li key={t}>{t}</li>)}</ul>
            </div>
            <div>
              <img loading="lazy" decoding="async" src={p6} alt="" aria-hidden className="ab-avatar ab-avatar-green" />
              <h3>A Place<br />to Help Shape</h3>
              <ul>{["Create tangible work", "Contribute in your own way", "Grow into responsibility", "Help someone else begin"].map((t) => <li key={t}>{t}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="ab-cream-panel">
        <div className="ab-wrap ab-split">
          <h2 className="ab-h3">The People<br /><span className="relative">Behind<Wave className="ab-wave-yellow" /></span> DoraDAO</h2>
          <div className="ab-team-copy">
            <p>DoraDAO comes to life through its organizers, mentors, volunteers, creators and local hosts. Different contributions count, from welcoming a newcomer to building a product or leading a program.</p>
            <p>Our founding team works to create space for others. Program managers take responsibility for their initiatives, and the wider community brings its own stories, traditions and leadership. The mission is bigger than any one person.</p>
            <p><a className="ab-ngo-link" href="https://dorahood.vercel.app/" target="_blank" rel="noreferrer">Explore DoraHood NGO →</a> Turn the desire to serve into social-impact contributions.</p>
          </div>
        </div>
        <ul className="ab-wrap ab-team">
          {team.map((m) => (
            <li key={m.role}><img loading="lazy" decoding="async" src={m.image} alt="" /><div><h3>{m.role}</h3></div></li>
          ))}
        </ul>
        <div className="ab-network">
          <p>The real faces behind every DoraDAO moment.</p>
          <span>We work with an incredible global network of builders, mentors and friends.</span>
        </div>
        <div className="ab-faces">
          {faceRows.map((row, r) => (
            <div key={r} className={`ab-faces-row ${r % 2 ? "is-reverse" : ""}`}>
              {[0, 1].map((copy) => (
                <ul key={copy} className="ab-faces-track" aria-hidden={copy === 1 || undefined}>
                  {row.map((f, i) => {
                    const inner = f.image
                      ? <img src={f.image} alt={copy ? "" : f.name} loading="lazy" />
                      : <span className="ab-face-initials">{f.name.split(" ").map((w) => w[0]).join("")}</span>;
                    return (
                      <li key={i} className="ab-face" title={f.name}>
                        {f.linkedin
                          ? <a href={f.linkedin} target="_blank" rel="noreferrer" tabIndex={copy ? -1 : undefined} aria-label={`${f.name} on LinkedIn`}>{inner}</a>
                          : inner}
                      </li>
                    );
                  })}
                </ul>
              ))}
            </div>
          ))}
        </div>
      </section>

      <nav className="ab-tabs" aria-label="About sections">
        {tabs.map((t) => (
          <a key={t.id} href={`#${t.id}`} className={active === t.id ? "is-active" : ""}>{t.label}</a>
        ))}
      </nav>
      <SiteFooter />
    </main>
  );
}
