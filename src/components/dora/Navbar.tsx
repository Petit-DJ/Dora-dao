import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { ChevronDown, Menu, Sparkles, X, ArrowUpRight } from "lucide-react";
import { scrollToId } from "./shared";
import doraLogo from "@/assets/dora_logo.png";

type NavDropdownItem = {
  label: string;
  href: string;
  isExternal?: boolean;
  isRoute?: boolean;
  description?: string;
};

type NavGroup = {
  key: string;
  label: string;
  items: NavDropdownItem[];
};

const navGroups: NavGroup[] = [
  {
    key: "about",
    label: "About",
    items: [
      { label: "Why Dora", href: "#about", description: "Our mission and ethos" },
      { label: "How It Works", href: "#how-it-works", description: "How community drives everything" },
      { label: "Our Story", href: "#our-story", description: "From a kitchen table to global scale" },
      { label: "FAQ", href: "#faq", description: "Common questions answered" },
    ],
  },
  {
    key: "explore",
    label: "Explore",
    items: [
      { label: "Where Dora Is (Map)", href: "#map", description: "Global chapters & tour stops" },
      { label: "Find Your Place", href: "#findyourplace", description: "Choose your journey in Dora" },
      { label: "Testimonials", href: "#testimonials", description: "Voices from our builders" },
      { label: "Sessions & Media", href: "#sessions", description: "Talks, workshops & recordings" },
      { label: "Products", href: "#products", description: "Community-shipped products" },
    ],
  },
  {
    key: "programs",
    label: "Programs",
    items: [
      { label: "Girls Who Yap (GWY)", href: "#programs", description: "Empowering creator circles" },
      { label: "DoraDAO World Tour", href: "#map", description: "Worldwide IRL activations" },
      { label: "Community Starter", href: "#programs", description: "Launch and grow local hubs" },
      { label: "NGO Grants", href: "#programs", description: "Funding for meaningful impact" },
      { label: "GWY Fellowship", href: "/fellowship", isRoute: true, description: "Demystifying AI for creators & builders" },
    ],
  },
  {
    key: "community",
    label: "Community",
    items: [
      { label: "GWY Island", href: "#island", description: "Culture, artifacts & rituals" },
      { label: "Important Days", href: "#days", description: "Marking global moments" },
      { label: "Upcoming Events", href: "#upcomingevents", description: "Gatherings & demo nights" },
    ],
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "";

  useEffect(() => {
    const handleScroll = () => {
      const isPastHero = window.scrollY > 90;
      setScrolled(isPastHero);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleNavClick = (href: string, isRoute?: boolean) => {
    setOpen(false);
    setActiveDropdown(null);

    if (isRoute) return;

    if (href.startsWith("#")) {
      const id = href.replace("#", "");
      if (isHome) {
        scrollToId(id);
      } else {
        window.location.href = `/${href}`;
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ease-out ${
        scrolled ? "pt-2 pb-1 md:pt-3" : "pt-4 pb-2 md:pt-5"
      }`}
    >
      <nav
        ref={navRef}
        aria-label="Main Navigation"
        className={`mx-auto transition-all duration-300 ease-out ${
          scrolled
            ? "w-[min(95%,960px)] px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-background/90 backdrop-blur-md border border-border/80 shadow-md"
            : "w-[min(96%,1160px)] px-5 py-3.5 md:px-8 md:py-4 rounded-2xl md:rounded-full bg-background/80 backdrop-blur-md border border-border/60 shadow-sm"
        }`}
      >
        <div className="flex items-center justify-between gap-2 md:gap-4">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => {
              if (isHome) {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="group flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-full"
          >
            <img
              src={doraLogo}
              alt="Dora DAO"
              className={`w-auto object-contain transition-all duration-300 ${
                scrolled ? "h-7 md:h-8" : "h-8 md:h-9"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex xl:gap-2">
            {navGroups.map((group) => {
              const isOpen = activeDropdown === group.key;

              return (
                <div
                  key={group.key}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(group.key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    type="button"
                    onClick={() => setActiveDropdown(isOpen ? null : group.key)}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                      isOpen
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                    }`}
                  >
                    <span>{group.label}</span>
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-foreground" : "text-muted-foreground"
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {isOpen && (
                    <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2 z-50">
                      <div className="w-64 rounded-2xl border border-border/80 bg-popover/95 p-2 shadow-xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-150">
                        <ul className="flex flex-col gap-1">
                          {group.items.map((item) => (
                            <li key={item.label}>
                              {item.isRoute ? (
                                <Link
                                  to={item.href}
                                  onClick={() => handleNavClick(item.href, true)}
                                  className="group/item flex flex-col rounded-xl px-3 py-2 text-left transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                >
                                  <span className="flex items-center justify-between text-sm font-semibold text-foreground group-hover/item:text-primary">
                                    <span className="flex items-center gap-1.5">
                                      {item.label}
                                      {item.href === "/fellowship" && (
                                        <span className="inline-flex items-center rounded-full bg-primary/10 px-1.5 py-0.5 text-[10px] font-bold text-primary">
                                          2.0
                                        </span>
                                      )}
                                    </span>
                                    <ArrowUpRight className="h-3.5 w-3.5 opacity-60 transition-transform group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 group-hover/item:opacity-100" />
                                  </span>
                                  {item.description && (
                                    <span className="mt-0.5 text-xs text-muted-foreground">
                                      {item.description}
                                    </span>
                                  )}
                                </Link>
                              ) : (
                                <a
                                  href={isHome ? item.href : `/${item.href}`}
                                  onClick={(e) => {
                                    if (isHome) {
                                      e.preventDefault();
                                      handleNavClick(item.href, false);
                                    }
                                  }}
                                  className="group/item flex flex-col rounded-xl px-3 py-2 text-left transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                >
                                  <span className="text-sm font-medium text-foreground group-hover/item:text-primary">
                                    {item.label}
                                  </span>
                                  {item.description && (
                                    <span className="mt-0.5 text-xs text-muted-foreground">
                                      {item.description}
                                    </span>
                                  )}
                                </a>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Fellowship Top-Level Link */}
            <Link
              to="/fellowship"
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold text-primary transition hover:bg-primary/10 hover:text-primary active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Sparkles className="h-3.5 w-3.5 fill-primary/20" />
              <span>Fellowship</span>
            </Link>

            {/* Work With Us Direct Anchor */}
            <a
              href={isHome ? "#workwithus" : "/#workwithus"}
              onClick={(e) => {
                if (isHome) {
                  e.preventDefault();
                  handleNavClick("#workwithus");
                }
              }}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition hover:bg-muted/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Work With Us
            </a>
          </div>

          {/* Right Action / CTA & Mobile Menu Trigger */}
          <div className="flex items-center gap-2 md:gap-3">
            <a
              href={isHome ? "#workwithus" : "/#workwithus"}
              onClick={(e) => {
                if (isHome) {
                  e.preventDefault();
                  handleNavClick("#workwithus");
                }
              }}
              className={`inline-flex items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground shadow transition hover:opacity-95 hover:scale-[1.02] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                scrolled
                  ? "px-4 py-1.5 text-xs md:text-sm"
                  : "px-5 py-2 text-sm md:text-base"
              }`}
            >
              Join Dora
            </a>

            {/* Mobile Toggle Button */}
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Accordion Menu */}
        {open && (
          <div className="mt-4 flex flex-col gap-2 border-t border-border/80 pt-4 lg:hidden max-h-[80vh] overflow-y-auto">
            {navGroups.map((group) => {
              const isExpanded = mobileExpanded === group.key;

              return (
                <div key={group.key} className="rounded-xl border border-border/50 bg-card/60 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setMobileExpanded(isExpanded ? null : group.key)}
                    className="flex w-full items-center justify-between p-3.5 text-sm font-semibold text-foreground text-left"
                  >
                    <span>{group.label}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isExpanded && (
                    <ul className="flex flex-col gap-1 border-t border-border/40 p-2 bg-muted/20">
                      {group.items.map((item) => (
                        <li key={item.label}>
                          {item.isRoute ? (
                            <Link
                              to={item.href}
                              onClick={() => setOpen(false)}
                              className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
                            >
                              <span>{item.label}</span>
                              <ArrowUpRight className="h-3.5 w-3.5 text-primary" />
                            </Link>
                          ) : (
                            <a
                              href={isHome ? item.href : `/${item.href}`}
                              onClick={(e) => {
                                if (isHome) {
                                  e.preventDefault();
                                  handleNavClick(item.href);
                                } else {
                                  setOpen(false);
                                }
                              }}
                              className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                            >
                              {item.label}
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}

            {/* Fellowship link for mobile */}
            <Link
              to="/fellowship"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-xl border border-primary/30 bg-primary/10 p-3.5 text-sm font-bold text-primary"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                GWY Fellowship 2.0
              </span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            {/* Work With Us for mobile */}
            <a
              href={isHome ? "#workwithus" : "/#workwithus"}
              onClick={(e) => {
                if (isHome) {
                  e.preventDefault();
                  handleNavClick("#workwithus");
                } else {
                  setOpen(false);
                }
              }}
              className="rounded-xl border border-border/50 bg-card/60 p-3.5 text-sm font-semibold text-foreground text-left"
            >
              Work With Us
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
