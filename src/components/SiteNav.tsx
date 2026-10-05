import { Link } from "@tanstack/react-router";
import { Sun, ArrowRight, ChevronDown } from "lucide-react";
import { programTabs } from "./ProgramTabs";
import { partnerTabs } from "./PartnerTabs";

type NavKey = "fellowship" | "doradao" | "programs" | "chapters" | "partner" | "contributors" | "refer" | "past";

const links: { key: NavKey; label: string; to: string }[] = [
  { key: "fellowship", label: "Fellowship", to: "/fellowship" },
  { key: "doradao", label: "DoraDAO", to: "/doradao" },
  { key: "programs", label: "Programs", to: "/programs" },
  // { key: "past", label: "Past", to: "/past-initiatives" },
  { key: "chapters", label: "Chapters", to: "/chapters" },
  { key: "partner", label: "Partner", to: "/partner" },
  // { key: "contributors", label: "Contributors", to: "/contributors" }, // temporarily disabled
  { key: "refer", label: "Refer", to: "/refer" },
];

export function SiteNav({ active, ctaLabel = "Apply", ctaHref = "https://luma.com/1o24ny1d" }: {
  active: NavKey;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <header className="sticky top-4 z-50 mx-auto w-[min(94%,1100px)]">
      <nav className="chapter-glass flex items-center justify-between px-4 py-2.5 rounded-full">
        <Link to="/fellowship" className="flex items-center gap-2.5 font-display text-base font-bold text-foreground">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-coral text-primary-foreground shadow-glow">
            <Sun className="h-3.5 w-3.5" />
          </span>
          <span>GWY <span className="text-coral">2.0</span></span>
        </Link>
        <div className="hidden md:flex items-center gap-5 text-sm">
          {links.map((l) =>
            l.key === "programs" || l.key === "partner" ? (
              <div key={l.key} className="relative group">
                <Link
                  to={l.to}
                  className={
                    active === l.key
                      ? "inline-flex items-center gap-1 text-foreground font-semibold relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-coral after:rounded-full"
                      : "inline-flex items-center gap-1 text-foreground/65 hover:text-foreground transition"
                  }
                >
                  {l.label}
                  <ChevronDown className="h-3 w-3" />
                </Link>
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50">
                  <div className="chapter-glass rounded-2xl p-2 min-w-[220px] flex flex-col">
                    {(l.key === "programs" ? programTabs : partnerTabs).map((t) => (
                      <Link
                        key={t.key}
                        to={t.to}
                        className="rounded-xl px-3 py-2 text-sm text-foreground/80 hover:bg-white/70 hover:text-foreground transition whitespace-nowrap"
                      >
                        {t.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={l.key}
                to={l.to}
                className={
                  active === l.key
                    ? "text-foreground font-semibold relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-coral after:rounded-full"
                    : "text-foreground/65 hover:text-foreground transition"
                }
              >
                {l.label}
              </Link>
            ),
          )}
        </div>
        <a
          href={ctaHref}
          target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-coral px-4 py-2 text-xs font-semibold text-primary-foreground shadow-glow hover:scale-[1.04] transition"
        >
          {ctaLabel} <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </nav>
    </header>
  );
}
