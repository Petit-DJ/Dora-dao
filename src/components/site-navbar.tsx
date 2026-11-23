import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { LanguageSelector } from "@/components/language-selector";
import logo from "@/assets/doradao-logo.jpg.asset.json";
import { programDestinations } from "@/components/program-destinations";

const partners = [
  { label: "CSR", to: "/partners/csr" },
  { label: "Corporate", to: "/partners/corporate" },
  { label: "Philanthropy", to: "/partners/philanthropic" },
  { label: "Donate", to: "/partners/donate" },
] as const;

export function SiteNavbar() {
  const [expanded, setExpanded] = useState<"programs" | "partnership" | null>(null);
  return (
    <header className="site-navbar">
      <nav className="site-navbar-inner" aria-label="Main navigation">
        <Link to="/" className="site-navbar-brand" aria-label="DoraDAO home">
          <img src={logo.url} alt="" width="44" height="44" />
          <span>DoraDAO</span>
        </Link>
        <div className="site-navbar-links">
          <Link to="/about" activeProps={{ className: "is-current" }}>About</Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild><Button variant="ghost" className="site-navbar-partner">Programs <ChevronDown aria-hidden="true" /></Button></DropdownMenuTrigger>
            <DropdownMenuContent className="site-navbar-popup" sideOffset={12} align="start">
              <DropdownMenuItem asChild><Link to="/" hash="programs">All programs</Link></DropdownMenuItem>
              {programDestinations.map(program => <DropdownMenuItem key={program.to} asChild><Link to={program.to}>{program.label}</Link></DropdownMenuItem>)}
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild><Button variant="ghost" className="site-navbar-partner">Partnership <ChevronDown aria-hidden="true" /></Button></DropdownMenuTrigger>
            <DropdownMenuContent className="site-navbar-popup" sideOffset={12} align="start">
              {partners.map(p => <DropdownMenuItem key={p.to} asChild><Link to={p.to}>{p.label}</Link></DropdownMenuItem>)}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/events" activeProps={{ className: "is-current" }}>Events</Link>
          <Link to="/products" activeProps={{ className: "is-current" }}>Products</Link>
          <Link to="/pricing" activeProps={{ className: "is-current" }}>Sponsor</Link>
          <Link to="/hiring" activeProps={{ className: "is-current" }}>Career</Link>
        </div>
        <LanguageSelector />
        <div className="site-navbar-mobile">
          <DropdownMenu onOpenChange={() => setExpanded(null)}>
            <DropdownMenuTrigger asChild><Button variant="ghost" size="icon" className="site-navbar-toggle" aria-label="Open navigation"><Menu aria-hidden="true" /></Button></DropdownMenuTrigger>
            <DropdownMenuContent className="site-navbar-popup site-navbar-mobile-popup" sideOffset={14} align="end" collisionPadding={16}>
              <DropdownMenuItem asChild><Link to="/about">About</Link></DropdownMenuItem>
              <DropdownMenuItem className="site-navbar-group-toggle" aria-expanded={expanded === "programs"} aria-controls="mobile-program-links" onSelect={event => { event.preventDefault(); setExpanded(expanded === "programs" ? null : "programs"); }}>
                <span>Programs</span><ChevronDown aria-hidden="true" />
              </DropdownMenuItem>
              {expanded === "programs" && <div id="mobile-program-links" className="site-navbar-sub-links" role="group" aria-label="Programs">
                <DropdownMenuItem asChild><Link to="/" hash="programs">All programs</Link></DropdownMenuItem>
                {programDestinations.map(program => <DropdownMenuItem key={program.to} asChild><Link to={program.to}>{program.label}</Link></DropdownMenuItem>)}
              </div>}
              <DropdownMenuItem className="site-navbar-group-toggle" aria-expanded={expanded === "partnership"} aria-controls="mobile-partner-links" onSelect={event => { event.preventDefault(); setExpanded(expanded === "partnership" ? null : "partnership"); }}>
                <span>Partnership</span><ChevronDown aria-hidden="true" />
              </DropdownMenuItem>
              {expanded === "partnership" && <div id="mobile-partner-links" className="site-navbar-sub-links" role="group" aria-label="Partnership">
                {partners.map(p => <DropdownMenuItem key={p.to} asChild><Link to={p.to}>{p.label}</Link></DropdownMenuItem>)}
              </div>}
              <DropdownMenuItem asChild><Link to="/events">Events</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/products">Products</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/pricing">Sponsor</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/hiring">Career</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
}