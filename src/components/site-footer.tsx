import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Mail,
  GraduationCap,
  HeartHandshake,
  Briefcase,
  Sprout,
  Linkedin,
  Instagram,
  Rss,
  CalendarDays,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import dora from "@/assets/footer-dora.png";
import botanical from "@/assets/footer-botanical.jpg";

const email = "Connectdoradao@gmail.com";
const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/doradao/", Icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/connectdoradao/", Icon: Instagram },
  { label: "Twitter", href: "https://x.com/connectdoradao", mark: "𝕏" },
  { label: "Substack", href: "https://doradao.substack.com", Icon: Rss },
  { label: "Luma", href: "https://luma.com/connectdoradao", Icon: CalendarDays },
  { label: "Product Hunt", href: "https://www.producthunt.com/@dora_dao", mark: "P" },
];

export function SiteFooter() {
  return (
    <footer className="df-footer" id="footer" aria-label="DoraDAO footer">
      <div className="df-crown" aria-hidden="true">
        <span className="df-gold-loop" />
        <span className="df-leaf df-leaf-one" />
        <span className="df-leaf df-leaf-two" />
        <img
          className="df-dora"
          src={dora}
          alt=""
          width={700}
          height={525}
          loading="lazy"
          decoding="async"
        />
        <svg className="df-heart" viewBox="0 0 80 80" fill="none">
          <path
            d="M40 66C22 48 9 31 17 20C25 10 37 22 40 30C46 11 60 8 66 19C75 35 54 55 40 66Z"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="df-panel">
        <svg
          className="df-wave"
          viewBox="0 0 1920 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0 100C30 12 142 30 280 38S560 1 720 30S940 32 1060 45S1220 78 1360 38S1600 4 1760 30S1890 42 1920 100V100H0Z" />
        </svg>
        <img
          className="df-botanical"
          src={botanical}
          alt=""
          aria-hidden="true"
          width={1920}
          height={768}
          loading="lazy"
          decoding="async"
        />
        <div className="df-inner">
          <section className="df-contact" aria-labelledby="df-contact-title">
            <h2 id="df-contact-title">Contact</h2>
            <div className="df-contact-grid">
              <div className="df-contact-copy">
                <p>
                  A worldwide community.
                  <br />
                  One friendly hello away.
                </p>
                <a className="df-email" href={`mailto:${email}`}>
                  {email}
                </a>
              </div>
              <nav className="df-connect" aria-label="Connect with DoraDAO">
                <a href={`mailto:${email}`}>
                  <Mail />
                  Email us <ArrowRight />
                </a>
                <Link to="/programs/gwy-fellowship">
                  <GraduationCap />
                  Fellowship <ArrowRight />
                </Link>
                <Link to="/pricing">
                  <HeartHandshake />
                  Sponsor <ArrowRight />
                </Link>
                <Link to="/hiring">
                  <Briefcase />
                  Career <ArrowRight />
                </Link>
                <a href="https://dorahood.vercel.app/" target="_blank" rel="noreferrer">
                  <Heart />
                  DoraHood NGO <ArrowRight />
                </a>
              </nav>
            </div>
            <nav className="df-socials" aria-label="DoraDAO social profiles">
              {socials.map(({ label, href, Icon, mark }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`DoraDAO on ${label}`}
                  title={label}
                >
                  {Icon ? <Icon aria-hidden="true" /> : <span aria-hidden="true">{mark}</span>}
                  <span>{label}</span>
                </a>
              ))}
            </nav>
          </section>
          <div className="df-brand">
            <Link to="/" className="df-wordmark" aria-label="DoraDAO home">
              <Sprout aria-hidden="true" />
              DoraDAO
            </Link>
            <p className="df-tagline">People. Programs. A more open internet.</p>
            <span className="df-underline" aria-hidden="true" />
            <div className="df-actions">
              <Button asChild className="df-join">
                <Link to="/" hash="programs">
                  Join DoraDAO <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline" className="df-partner">
                <a href={`mailto:${email}?subject=Partner%20with%20DoraDAO`}>
                  Partner With Us <ArrowRight />
                </a>
              </Button>
            </div>
          </div>
          <nav className="df-links" aria-label="Footer quick links">
            <h2>Quick Links</h2>
            <div className="df-link-columns">
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/" hash="programs">
                    Programs
                  </Link>
                </li>
                <li>
                  <Link to="/" hash="community-mosaic">
                    Community
                  </Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="/programs/gwy-fellowship">For Builders</Link>
                </li>
                <li>
                  <Link to="/partners/csr">For Partners</Link>
                </li>
                <li>
                  <Link to="/pricing">Sponsor</Link>
                </li>
                <li>
                  <a href={`mailto:${email}`}>Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="df-bottom">
          <span>© 2026 DoraDAO. All rights reserved.</span>
          <span>Built with people, for people.</span>
          <a href={`mailto:${email}?subject=DoraDAO%20privacy%20enquiry`}>
            Privacy enquiries <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
