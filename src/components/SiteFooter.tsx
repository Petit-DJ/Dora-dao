import { Link } from "@tanstack/react-router";
import { Sun, Linkedin, Twitter, Instagram, MessageCircle, Calendar, ArrowUpRight } from "lucide-react";

const socials = [
  { i: Linkedin, t: "LinkedIn", href: "https://www.linkedin.com/company/doradao/" },
  { i: Twitter, t: "Twitter", href: "https://x.com/connectdoradao" },
  { i: Instagram, t: "Instagram", href: "https://www.instagram.com/connectdoradao/" },
  // { i: MessageCircle, t: "Discord", href: "https://discord.gg/CRaEtrtZ2v" },
  { i: Calendar, t: "Luma", href: "https://lu.ma/connectdoradao" },
];

export function SiteFooter() {
  return (
    <footer className="relative mx-auto w-[min(94%,1100px)] mt-12 mb-32 md:mb-28">
      <div className="chapter-glass p-8 md:p-10">
        <div className="grid md:grid-cols-[1.2fr_1fr_1fr] gap-8">
          <div>
            <div className="flex items-center gap-2.5 font-display text-lg font-bold">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-coral text-primary-foreground shadow-glow">
                <Sun className="h-4 w-4" />
              </span>
              <span>Girls Who Yap <span className="text-coral">2.0</span></span>
            </div>
            <p className="mt-3 text-sm text-foreground/70 max-w-sm leading-relaxed">
              A women-first, creator-led ecosystem by DoraDAO — building the next wave of AI &amp; Web3 in public.
            </p>
            <p className="mt-3 font-hand text-xl text-coral">Stay curious. Stay building. Stay yapping.</p>
          </div>
          <div>
            <div className="chapter-num">explore</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link to="/fellowship" className="text-foreground/75 hover:text-coral transition">Fellowship 2.0</Link></li>
              <li><Link to="/doradao" className="text-foreground/75 hover:text-coral transition">About DoraDAO</Link></li>
              <li><Link to="/past-initiatives" className="text-foreground/75 hover:text-coral transition">Past Initiatives</Link></li>
              <li><Link to="/chapters" className="text-foreground/75 hover:text-coral transition">City Chapters</Link></li>
            </ul>
          </div>
          <div>
            <div className="chapter-num">find us</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {socials.map(({ i: Icon, t, href }) => (
                <a
                  key={t}
                  href={href}
                  target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white/70 px-3 py-1.5 text-xs font-semibold text-foreground/80 hover:bg-coral hover:text-primary-foreground hover:border-transparent transition"
                >
                  <Icon className="h-3.5 w-3.5" /> {t} <ArrowUpRight className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-foreground/10 flex flex-wrap items-center justify-between gap-3 text-xs text-foreground/55">
          <span>© {new Date().getFullYear()} DoraDAO — built with curiosity, in the open.</span>
          <span>Made with 🧡 for the room you wish existed.</span>
        </div>
      </div>
    </footer>
  );
}
