import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown, ChevronLeft, ChevronRight, Menu, Plus } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Reveal, Squiggle } from "@/components/reveal";
import heroImg from "@/assets/programs/conference.png.asset.json";
import case1 from "@/assets/programs/community.png.asset.json";
import case2 from "@/assets/programs/fellowship.png.asset.json";
import nextImg from "@/assets/programs/gathering.png.asset.json";

export const Route = createFileRoute("/sectors/technology")({
  head: () => ({
    meta: [
      { title: "Technology Communities · DoraDAO" },
      { name: "description", content: "How DoraDAO helps technology teams meet real builders, hear honest feedback and grow communities across 60+ countries." },
      { property: "og:title", content: "Technology Communities That Actually Make Sense · DoraDAO" },
      { property: "og:description", content: "Real builders, real conversations, one friendly partner across 60+ countries." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TechnologyPage,
});

const TITLE = "Technology Communities That Actually Make Sense";

const Arrow = () => (
  <span className="pr-arrow" aria-hidden><ChevronRight size={16} /></span>
);

function CaseCard({ title, img }: { title: string; img: string }) {
  return (
    <Reveal>
      <a href="#" className="sc-case">
        <div><h4>{title}</h4><span>Read <ChevronRight size={12} /></span></div>
        <img loading="lazy" decoding="async" src={img} alt="" />
      </a>
    </Reveal>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="sc-sec">
      <Reveal><h2>{title}</h2></Reveal>
      <Reveal delay={80}><div className="sc-body">{children}</div></Reveal>
    </section>
  );
}

const methods = [
  ["1", "One-to-one chats", "Understanding complex team decisions, exploring how builders choose tools, and hearing honest feedback from senior leads.", "Quiet, focused conversations give people room to share the story behind their choices, the kind of nuance a crowded room simply can't hold."],
  ["2", "Circle sessions", "Testing ideas, exploring how people feel, and seeing how groups talk about new technology.", "Circles reveal the social side of adoption. Who sways whom? What worries come up only when friends are in the room?"],
  ["3", "Hands-on build days", "Spotting friction, testing prototypes, and watching how people actually use your product.", "Watch someone wrestle with your sign-up flow for two minutes and you'll learn more than a month of dashboards could teach you."],
  ["4", "Journey mapping", "Understanding the full path from first hello to proud member.", "Joining a community rarely happens in one moment. Mapping the whole journey shows the touchpoints that turn visitors into regulars and regulars into champions."],
];
const delivers = [
  ["Context that makes sense of the numbers.", "We tell you not just what people said, but what it means for your roadmap, your story and your next step."],
  ["Clear next steps", "you can act on tomorrow. Not “people want a better experience”, but exactly where, why and for whom."],
  ["Cultural warmth", "that prevents costly mistakes. What delights builders in Bengaluru might confuse builders in Berlin."],
  ["Honest comparisons", "that show where you stand, straight from the people who use the alternatives every day."],
];
const questions = [
  ["Product building", "What problems are people really solving? Which features matter most? What's missing today?"],
  ["Experience", "Where do people get stuck? What delights them? What makes them leave?"],
  ["Positioning", "How do people compare options? What makes you different? What drives the final choice?"],
  ["Launch plans", "Who decides? What's the path to yes? How do cities and cultures differ?"],
  ["The wider field", "Why do people pick someone else? Where are the gaps nobody has filled yet?"],
];
const qualities = [
  ["Real tech know-how.", "Your partner should understand developer mindsets, open-source culture and how products actually ship."],
  ["Flexible methods.", "Projects move fast. Approaches should adapt on the fly without losing quality."],
  ["Global reach, one standard.", "Ask how quality stays consistent across cities, languages and hosts."],
  ["People first.", "Tools should support human connection, never replace it."],
  ["Clear communication.", "Findings should light the way, not bury you in jargon."],
];
const apart = [
  ["We believe in human connection.", "While others rush toward automation, we invest in warm, skilled hosts who earn people's trust."],
  ["We obsess over quality.", "Every invite, every briefing, every recap is carefully checked."],
  ["We make complexity simple.", "Clear communication, realistic timelines and problems solved before they reach you."],
  ["We deliver what we promise.", "Your timelines matter, and we treat them that way."],
];
const faqs = [
  ["What is a technology community program?", "A structured way to meet, listen to and grow the people who build with and use your technology, through chats, circles, build days and events."],
  ["How much does a program cost?", "It depends on format, size, cities and timeline. Our pricing page shows real starting ranges and an instant estimator."],
  ["How long does a typical program take?", "A quick feedback sprint can land in 2-3 weeks; a multi-city program usually takes 6-10 weeks."],
  ["What's the difference between listening and measuring?", "Listening explores the why and how through conversations. Measuring counts the what at scale. The best teams use both."],
  ["Why does community matter for tech teams?", "Products change fast and expectations shift constantly. Close relationships with real builders keep you grounded."],
  ["Can you run programs globally?", "Absolutely. We handle everything end to end across 60+ countries through one point of contact."],
  ["What works best for developer tools?", "One-to-one chats with decision makers, hands-on build days throughout development, and journey mapping across the first month."],
  ["How do you keep quality high?", "Careful invites, thorough host briefings, live checks during sessions and a reviewed recap."],
  ["What makes tech different from other sectors?", "Ideas that don't exist yet, rapid change and very specific audiences. It needs hosts who speak the language."],
  ["How quickly can you start?", "Most programs begin within 2-3 weeks of approval, sometimes faster when it matters."],
];

function TechnologyPage() {
  const [open, setOpen] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(1, window.scrollY / h) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pr-page sc-page">
      <SiteNavbar />

      {/* hero */}
      <section className="sc-hero">
        <Reveal><h1 className="sc-h1">{TITLE}</h1></Reveal>
        <div className="sc-hero-row">
          <Reveal delay={150} className="sc-hero-img"><img src={heroImg.url} alt="DoraDAO builders sharing ideas on stage" /></Reveal>
          <Reveal delay={300}><p className="sc-hero-text">The tech world moves at breakneck speed. Products evolve, expectations shift and new tools appear overnight. Yet meeting real builders across many cities often feels like planning an expedition. It doesn't have to be this way. Discover how a warm, well-run community can shape your product, without the complexity.</p></Reveal>
        </div>
      </section>

      {/* article */}
      <div className="sc-article-wrap">
        <div className="sc-article">
          <aside className="sc-side">
            <Link to="/" className="sc-back"><span><ChevronLeft size={14} /></span>See all methods</Link>
            <p className="sc-side-title">{TITLE}</p>
            <svg className="sc-ring" viewBox="0 0 36 36" aria-label={`Read ${Math.round(progress * 100)}%`}>
              <circle cx="18" cy="18" r="15" className="sc-ring-bg" />
              <circle cx="18" cy="18" r="15" className="sc-ring-fg" style={{ strokeDashoffset: 94.25 * (1 - progress) }} />
            </svg>
          </aside>

          <div className="sc-main">
            <section className="sc-sec">
              <Reveal><p className="sc-lede">Technology communities answer the questions dashboards can't: why people drift away, what a team really debated, and where a workflow breaks in real life. DoraDAO runs warm, human programs in 60+ countries with hosts who live where your people do.</p></Reveal>
              <Reveal delay={80}><div className="sc-body">
                <p>The tech industry moves fast. Release cycles are short and expectations shift overnight. You need insights that keep pace, not processes that slow you down.</p>
                <p><b>Here's the thing:</b> hearing from builders across many cities shouldn't feel like air-traffic control. Yet that's what happens when you juggle hosts in San Francisco, venues in Singapore and time zones everywhere.</p>
                <p className="sc-callout">✨ <b>We exist to remove that headache entirely.</b></p>
                <Link to="/pricing" className="pr-btn pr-btn-white sc-btn">Get a Quote <Arrow /></Link>
              </div></Reveal>
            </section>
            <Squiggle />

            <Section title="What Makes Technology Communities Different?">
              <p>A tech community isn't just any community with a laptop sticker. It has its own rhythm and needs a special approach.</p>
              <p><b>The challenges are real:</b> tools go stale in months, your audience ranges from senior engineers to students trying an app on a whim, and you're often exploring ideas that don't exist yet.</p>
              <p>Questions need answers quickly: <i>Will developers actually adopt this? How do teams judge security? Why do people quit during onboarding?</i> These aren't curiosities, they decide whether a product thrives.</p>
            </Section>
            <hr className="sc-hr" />

            <Section title="Why Tech Teams Choose Real Conversations">
              <p>Let's be honest: charts tell you <i>what</i> is happening, but rarely <i>why</i>.</p>
              <p>When sign-ups drop by 15%, your analytics show the dip. They don't show that three team leads mentioned a rival's smoother setup, or that your plans confused a whole segment.</p>
              <p><b>That's where real conversations become invaluable.</b> One-to-one chats, circles and build days uncover the motivations behind the numbers.</p>
              <h3>The Human Element Dashboards Can't Replicate</h3>
              <p>AI tools are brilliant at spotting patterns, we use them too. But they can't notice the pause before an honest answer, or the cultural nuance that changes everything mid-conversation.</p>
              <p><b>Real human hosts</b> ask the follow-up questions that matter and build the trust that gets people to say what they <i>actually</i> think.</p>
              <p className="sc-callout">💬 <b>Want to see how real conversations shaped a tech launch?</b></p>
            </Section>
            <CaseCard title="Builder Week: How Fitness Makers Track Their Daily Habits" img={case1.url} />
            <hr className="sc-hr" />

            <section className="sc-sec">
              <Reveal><p className="sc-body"><b>How we work in tech.</b> Product feel through <span className="sc-tag">build days</span>, decision makers through <span className="sc-tag">one-to-one chats</span>, group reactions through <span className="sc-tag">circles</span>, and long-term habits through <span className="sc-tag">online journals</span> and <span className="sc-tag">community boards</span>, one brief, one team, every city.</p></Reveal>
            </section>

            <Section title="Common Formats for Tech Communities">
              <p>Different questions need different approaches. Here's what works for technology teams:</p>
            </Section>
            {methods.map(([n, t, perfect, d], i) => (
              <Reveal key={t} delay={i * 60}>
                <div className="sc-method">
                  <h3><span className="sc-num">{n}</span>{t}</h3>
                  <p><b>Perfect for:</b> {perfect}</p>
                  <p>{d}</p>
                </div>
              </Reveal>
            ))}
            <hr className="sc-hr" />

            <Section title="What Great Technology Communities Deliver">
              <p>Beyond recordings and notes, exceptional programs provide:</p>
              {delivers.map(([b, t]) => <p key={b} className="sc-check">✅ <b>{b}</b> {t}</p>)}
            </Section>
            <hr className="sc-hr" />

            <Section title="The International Challenge (And How We Solve It)">
              <p>Here's a scenario most tech teams face: you've built something brilliant. Now you need to hear from people in the UK, Germany, Japan and Brazil.</p>
              <p>You could hire four partners, manage four timelines and hope quality stays consistent. Or spend weeks building it yourself.</p>
              <p><Link to="/pricing" className="sc-link"><b>Or you could make one phone call.</b></Link></p>
              <p>We handle the whole journey, invites, hosting, quality checks, across any cities you need, through a single friendly contact.</p>
              <p className="sc-callout">🚀 <b>Explore how we make international programs brilliantly simple.</b></p>
            </Section>
            <CaseCard title="Women in Web3: Onboarding Stories Across Six Cities" img={case2.url} />
            <hr className="sc-hr" />

            <Section title="Listening vs Measuring: When to Use Each">
              <p>Measuring is perfect for answering “how many”. Listening is perfect for “why” and “how”.</p>
              <h3>For tech teams, listening typically happens:</h3>
              <ul className="sc-list">
                <li><b>Before building:</b> validating demand and exploring real pain points.</li>
                <li><b>During development:</b> testing prototypes and refining features.</li>
                <li><b>After launch:</b> understanding hesitation and spotting improvements.</li>
              </ul>
            </Section>
            <hr className="sc-hr" />

            <Section title="Questions Your Community Should Answer">
              <p>Every program is unique, but these are the questions it usually tackles:</p>
              {questions.map(([b, t]) => <p key={b}><b>{b}:</b> {t}</p>)}
            </Section>
            <hr className="sc-hr" />

            <Section title="How to Choose a Community Partner Who Delivers">
              <p>Not every partner understands technology, and fewer can deliver globally without losing quality.</p>
              <h3>Look for these qualities:</h3>
              {qualities.map(([b, t]) => <p key={b}><b>{b}</b><br />{t}</p>)}
              <p className="sc-callout">🤝 <b>Let's talk about what a great program looks like for you.</b></p>
              <Link to="/pricing" className="pr-btn pr-btn-white sc-btn">Get Started <Arrow /></Link>
            </Section>
            <hr className="sc-hr" />

            <Section title="Why DoraDAO for Technology Communities?">
              <p>We've built everything on a simple promise: <b>Everyone. Everywhere. All in One Place.</b></p>
              <h3>What sets us apart:</h3>
              {apart.map(([b, t]) => <p key={b}><b>{b}</b> {t}</p>)}
            </Section>
            <Squiggle />

            <section className="sc-sec">
              <Reveal><h2>Frequently Asked Questions About Tech Communities</h2></Reveal>
              <div className="pr-faq sc-faq">
                {faqs.map(([q, a], i) => (
                  <Reveal key={q} delay={i * 40}>
                    <div className={`pr-faq-item ${open === i ? "is-open" : ""}`}>
                      <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>{q}<span><Plus size={16} /></span></button>
                      <div className="pr-faq-a"><p>{a}</p></div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>
            <Squiggle />

            <Section title="Ready to Hear What Your Builders Really Think?">
              <p>Great products aren't built on assumptions, they're built on genuine understanding of the people who use them.</p>
              <p className="sc-callout">✨ <b>We make getting those answers brilliantly simple.</b></p>
              <p>One conversation. One partner. A community that actually moves you forward.</p>
              <h3>👉 <Link to="/pricing" className="sc-link">Start a conversation about your goals</Link></h3>
              <p>What would this cost? <Link to="/pricing" className="sc-tag">Estimate it in 30 seconds.</Link></p>
              <Link to="/pricing" className="pr-btn pr-btn-white sc-btn">Get a Quote <Arrow /></Link>
            </Section>
          </div>
        </div>
      </div>

      {/* next sector */}
      <Reveal>
        <a href="#" className="sc-next">
          <img loading="lazy" decoding="async" src={nextImg.url} alt="DoraDAO community gathering" />
          <div><span>Next sector</span><h3>Education Communities: Global Learner Stories Made Brilliantly Simple</h3><span className="pr-btn pr-btn-white">Read more <Arrow /></span></div>
        </a>
      </Reveal>

      <SiteFooter />
    </div>
  );
}
