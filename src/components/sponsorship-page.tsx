import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  HeartHandshake,
  Mail,
  Megaphone,
  Mic2,
  Newspaper,
  Sparkles,
  Sprout,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteNavbar } from "./site-navbar";
import { SiteFooter } from "./site-footer";
import { SponsorshipBuilder } from "./sponsorship-builder";
import {
  sponsorFaqs,
  sponsorshipDeliverables,
  sponsorshipOpportunities,
  sponsorshipPackages,
} from "./sponsorship-data";
import { sponsorContact } from "./sponsor-offerings-data";
import circles from "@/assets/csr/mentoring-circles.png";
import meetup from "@/assets/csr/mentoring-meetup.png";
import laptop from "@/assets/csr/mentoring-laptop.png";
import books from "@/assets/csr/mentoring-books.png";
import coffee from "@/assets/csr/mentoring-coffee.png";
import speaker from "@/assets/csr/speaking-speaker.png";
import characters from "@/assets/dora-community-characters.png";
import scenery from "@/assets/dora-community-background.jpg";
import { speakerPortraits } from "./speaker-portraits";
const illustrations = [books, speaker, circles, coffee, laptop, meetup];
const icons = [Newspaper, Mic2, Users, Megaphone, Code2, Sparkles];
const nav = [
  ["overview", "Overview"],
  ["opportunities", "Opportunities"],
  ["packages", "Packages"],
  ["partners", "Partners"],
  ["sponsor-faqs", "FAQs"],
];
function Action({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
}) {
  return (
    <Button asChild className={`sp-button ${secondary ? "sp-button-outline" : ""}`}>
      <a href={href}>
        {children}
        <ArrowUpRight aria-hidden="true" />
      </a>
    </Button>
  );
}
function Heading({ eyebrow, title, note }: { eyebrow: string; title: string; note?: string }) {
  return (
    <header className="sp-section-heading">
      <div className="sp-heading-meta">
        <span className="sp-pill">{eyebrow}</span>
        {note && <span>{note}</span>}
      </div>
      <h2>{title}</h2>
    </header>
  );
}
function Opportunity({ index }: { index: number }) {
  const [expanded, setExpanded] = useState(false);
  const o = sponsorshipOpportunities[index];
  const Icon = icons[index] ?? Sparkles;
  if (!o) return null;
  return (
    <article className={`sp-opportunity sp-tone-${o.tone}`} id={`opportunity-${o.id}`}>
      <div className="sp-opportunity-top">
        <span className="sp-card-icon">
          <Icon size={23} />
        </span>
        <span>
          {String(index + 1).padStart(2, "0")} / {o.category}
        </span>
      </div>
      <h3>{o.title}</h3>
      <p>{o.description}</p>
      <img
        src={illustrations[index]}
        alt=""
        width={540}
        height={540}
        loading="lazy"
        decoding="async"
        className="sp-opportunity-art"
      />
      <p className="sp-best">
        <strong>Best for</strong>
        {o.best}
      </p>
      <Button
        variant="ghost"
        className="sp-detail-toggle"
        aria-expanded={expanded}
        aria-controls={`details-${o.id}`}
        onClick={() => setExpanded(!expanded)}
      >
        Formats & deliverables
        <ChevronDown aria-hidden="true" />
      </Button>
      <div id={`details-${o.id}`} hidden={!expanded} className="sp-opportunity-details">
        <h4>Available activations</h4>
        <ul>
          {o.formats.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <h4>Deliverable examples</h4>
        <ul>
          {o.deliverables.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </div>
      <Button asChild variant="link" className="sp-opportunity-link">
        <a href={sponsorContact(o.cta)}>
          {o.cta}
          <ArrowUpRight />
        </a>
      </Button>
    </article>
  );
}
export function SponsorshipPage() {
  return (
    <div className="sp-page">
      <SiteNavbar />
      <main>
        <section className="sp-hero" id="overview">
          <img src={scenery} alt="" className="sp-hero-scenery" fetchPriority="high" />
          <div className="sp-hero-copy sp-wrap">
            <p className="sp-eyebrow">DoraDAO partnerships</p>
            <h1>
              Don’t just sponsor
              <br />
              the ecosystem.
              <br />
              <span>Become part of it.</span>
            </h1>
            <p className="sp-hero-lead">
              Reach builders, developers, founders, creators, and emerging technology communities
              through targeted content, events, talent access, and community-led activations.
            </p>
            <div className="sp-actions">
              <Action href="#partnership-builder">Build a Partnership</Action>
              <Action href="#opportunities" secondary>
                Explore Sponsorship Opportunities
              </Action>
            </div>
            <p className="sp-trust-line">
              Content · Events · Community · Talent · Ecosystem Growth
            </p>
          </div>
          <img
            src={characters}
            alt="DoraDAO’s illustrated community of curious hoomans"
            className="sp-hero-characters"
            width={1536}
            height={600}
          />
        </section>
        <nav className="sp-local-nav" aria-label="Sponsorship navigation">
          <div className="sp-wrap">
            <div className="sp-nav-links">
              {nav.map(([id, label]) => (
                <Button asChild variant="ghost" key={id}>
                  <a href={`#${id}`}>{label}</a>
                </Button>
              ))}
            </div>
            <Button asChild className="sp-button">
              <a href="#partnership-builder">
                Build a Partnership
                <ArrowUpRight />
              </a>
            </Button>
          </div>
        </nav>
        <section className="sp-section sp-wrap sp-why">
          <Heading
            eyebrow="01 / Why DoraDAO?"
            title="The right audience. The right context. The right conversations."
            note="People first. Possibilities next."
          />
          <p className="sp-intro">
            DoraDAO helps brands reach the people building what comes next. Traditional advertising
            gets your brand seen. Community-led partnerships help people understand, experience, and
            engage with what you’re building.
          </p>
          <div className="sp-benefits">
            {[
              {
                title: "Reach the right people",
                body: "Connect with developers, founders, builders, creators, students and technology enthusiasts across relevant communities.",
                icon: Users,
              },
              {
                title: "Build trust through communities",
                body: "Engage through authentic relationships, not exclusively through paid advertising.",
                icon: HeartHandshake,
              },
              {
                title: "Turn visibility into participation",
                body: "Go beyond logos with demos, workshops, hackathons, creator activations and real conversations.",
                icon: Sprout,
              },
              {
                title: "Create measurable outcomes",
                body: "Agree meaningful goals: registrations, participation, content engagement, applications and product interest.",
                icon: Check,
              },
            ].map((b, i) => (
              <article key={b.title}>
                <b.icon size={28} />
                <span className="sp-mini-label">0{i + 1}</span>
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="sp-section sp-wrap" id="opportunities">
          <Heading
            eyebrow="02 / Ways to partner"
            title="One ecosystem. Multiple ways to make an impact."
            note="A good partnership starts with a shared goal."
          />
          <p className="sp-intro">
            Launch a product, reach developers, hire talent or build long-term recognition. Choose
            the activation that matches your goals.
          </p>
          <div className="sp-opportunity-grid">
            {sponsorshipOpportunities.map((o, i) => (
              <Opportunity key={o.id} index={i} />
            ))}
          </div>
          <div className="sp-social-path">
            <HeartHandshake size={30} />
            <div>
              <h3>Grow an ecosystem. Open a door for someone.</h3>
              <p>
                Support education, mentorship and access to emerging technology through
                community-led programs. Explore a dedicated CSR or philanthropic partnership.
              </p>
            </div>
            <Button asChild variant="link">
              <Link to="/partners/csr">
                CSR partnerships
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="link">
              <Link to="/partners/philanthropic">
                Philanthropy
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </section>
        <section className="sp-section sp-wrap">
          <Heading eyebrow="03 / What sponsors get" title="More than a logo on a banner." />
          <p className="sp-intro">
            Every partnership is designed around specific deliverables. Depending on your
            activation, your sponsorship may include:
          </p>
          <div className="sp-deliverables">
            {sponsorshipDeliverables.map((d, i) => (
              <div key={d.title}>
                <span className="sp-deliverable-number">0{i + 1}</span>
                <h3>{d.title}</h3>
                <ul>
                  {d.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="sp-scope-note">
            Deliverables vary according to the partnership scope, channel availability, campaign
            objectives, and agreed terms. Audience data and introductions are shared only where
            appropriate and with participant consent.
          </p>
        </section>
        <section className="sp-section sp-wrap" id="packages">
          <Heading
            eyebrow="04 / Partnership options"
            title="Choose how deeply you want to engage."
            note="Focused activations to lasting relationships."
          />
          <p className="sp-intro">
            Start with a focused activation or build a larger partnership across content, events and
            communities. Different opportunities have different costs and commercial value.
          </p>
          <div className="sp-packages">
            {sponsorshipPackages.map((p) => (
              <article
                key={p.name}
                className="sp-package"
                data-featured={"featured" in p && p.featured}
              >
                {"featured" in p && p.featured && (
                  <span className="sp-package-badge">Recommended</span>
                )}
                <p className="sp-mini-label">{p.caption}</p>
                <h3>{p.name}</h3>
                <p className="sp-package-price">
                  {"featured" in p || p.name !== "Strategic Partner"
                    ? "Request pricing"
                    : "Custom pricing"}
                </p>
                <p className="sp-package-currency">Scoped proposal · USD ($)</p>
                <p>{p.description}</p>
                <h4>Potential inclusions</h4>
                <ul>
                  {p.includes.map((item) => (
                    <li key={item}>
                      <Check size={15} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Action href={sponsorContact(p.cta)} secondary>
                  {p.cta}
                </Action>
              </article>
            ))}
          </div>
          <p className="sp-scope-note">
            Final proposals define deliverable quantities, placement duration, timelines, revisions,
            reporting and applicable taxes. In-kind and community arrangements are scoped
            separately. Reach, conversions and registrations are not guaranteed.
          </p>
        </section>
        <section className="sp-section sp-wrap" id="partnership-builder">
          <Heading
            eyebrow="05 / Partnership calculator"
            title="Your goals. Your audience. Your campaign."
            note="Let’s turn an idea into a useful brief."
          />
          <p className="sp-intro">
            Select the outcomes you care about and plan your budget in USD. We’ll discuss a
            combination of opportunities that fits your objectives.
          </p>
          <SponsorshipBuilder />
        </section>
        <section className="sp-section sp-wrap" id="partners">
          <Heading
            eyebrow="06 / People & programs"
            title="Built through people, programs, and partnerships."
          />
          <p className="sp-intro">
            Explore the programs and voices at the heart of DoraDAO. Discuss relevant campaign
            examples and available channel data with our team as part of your proposal.
          </p>
          <div className="sp-proof">
            <div className="sp-proof-copy">
              <p className="sp-handwritten">Real people. Shared curiosity.</p>
              <h3>
                A community for hoomans,
                <br />
                built by hoomans.
              </h3>
              <p>
                Learning, building and belonging connect our initiatives. Find the program that
                aligns with the opportunities you want to create.
              </p>
            </div>
            <div className="sp-portrait-grid">
              {speakerPortraits.slice(0, 8).map((p) => (
                <img
                  key={p.image}
                  src={p.image}
                  alt={p.alt}
                  loading="lazy"
                  decoding="async"
                  width={240}
                  height={240}
                />
              ))}
            </div>
          </div>
          <div className="sp-proof-links">
            <Button asChild variant="outline">
              <Link to="/programs/gwy-fellowship">
                Explore GWY Fellowship
                <ArrowUpRight />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/programs/dorahacks">
                Explore DoraHacks
                <ArrowUpRight />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/programs/m2m-mentorship">
                Explore mentorship
                <ArrowUpRight />
              </Link>
            </Button>
            <a href="https://connectdoradao.xyz/voices" target="_blank" rel="noreferrer">
              Meet the GWY speakers
              <ArrowUpRight size={16} />
            </a>
          </div>
          <p className="sp-fine">
            Speaker participation and community collaboration are distinct from paid sponsorship.
            Sponsor, technology, event and community relationships are identified separately in
            partnership proposals.
          </p>
        </section>
        <section className="sp-section sp-wrap">
          <Heading
            eyebrow="07 / How it works"
            title="From first conversation to real-world impact."
          />
          <ol className="sp-process">
            {[
              [
                "Tell us your goals",
                "Share what you’re trying to achieve, who you want to reach, and when.",
              ],
              [
                "Get a tailored proposal",
                "We’ll recommend suitable activations, deliverables, timelines and pricing.",
              ],
              [
                "Launch your partnership",
                "Our team coordinates execution across the agreed channels and initiatives.",
              ],
              [
                "Review the results",
                "Receive a summary of completed deliverables and available performance metrics.",
              ],
            ].map(([title, body], i) => (
              <li key={title}>
                <span>0{i + 1}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ol>
        </section>
        <section className="sp-section sp-wrap sp-faq-section" id="sponsor-faqs">
          <Heading
            eyebrow="08 / Your questions, answered"
            title="A little clarity before we build together."
          />
          <div className="sp-faq-list">
            {sponsorFaqs.map(([q, a], i) => (
              <details key={q} open={i === 0}>
                <summary>
                  {q}
                  <ChevronDown size={19} />
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>
        <section className="sp-closing">
          <div className="sp-wrap">
            <p className="sp-handwritten">Good things begin with a conversation.</p>
            <h2>
              Let’s make your next
              <br />
              partnership count.
            </h2>
            <p>
              Whether you’re launching a product, growing a developer ecosystem, hiring talent, or
              bringing a community together, let’s find the right people and the right way to engage
              them.
            </p>
            <div className="sp-actions">
              <Action href="mailto:Connectdoradao@gmail.com">Talk to Our Partnerships Team</Action>
              <Action href="#opportunities" secondary>
                Explore Partnership Opportunities
              </Action>
            </div>
            <div className="sp-closing-links">
              <a href="mailto:Connectdoradao@gmail.com">
                <Mail size={16} />
                Connectdoradao@gmail.com
              </a>
              <a href="https://cal.com/doradao/call" target="_blank" rel="noreferrer">
                Book a conversation
                <ArrowUpRight size={16} />
              </a>
              <a href="#partnership-builder">
                Prepare your partnership enquiry
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
