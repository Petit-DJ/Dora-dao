import { Link } from "@tanstack/react-router";
import { navItems, socials } from "@/data/site";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-primary px-4 py-12 text-primary-foreground">
      <div className="mx-auto grid max-w-content gap-8 md:grid-cols-4">
        <div>
          <p className="font-display text-xl font-bold">Dora DAO</p>
          <p className="mt-2 text-sm opacity-80">Build. Connect. Create. A global community where every gift finds the world.</p>
          <ul className="mt-4 flex flex-wrap gap-3 text-sm">
            {socials.map((s) => <li key={s.label}><a href={s.href} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">{s.label}</a></li>)}
          </ul>
        </div>
        <nav aria-label="Sections">
          <p className="font-semibold">Quick links</p>
          <ul className="mt-2 grid grid-cols-2 gap-1 text-sm opacity-80">
            {navItems.map((n) => <li key={n.id}><a href={`/#${n.id}`} className="hover:underline">{n.label}</a></li>)}
          </ul>
        </nav>
        <nav aria-label="Legal">
          <p className="font-semibold">Community</p>
          <ul className="mt-2 space-y-1 text-sm opacity-80">
            <li><Link to="/fellowship" className="hover:underline">GWY Fellowship 2.0</Link></li>
            <li><Link to="/voices" className="hover:underline">Speakers & Voices</Link></li>
            <li><Link to="/privacy" className="hover:underline">Privacy</Link></li>
            <li><Link to="/terms" className="hover:underline">Terms</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><Link to="/code-of-conduct" className="hover:underline">Code of Conduct</Link></li>
          </ul>
        </nav>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="footer-email" className="font-semibold">Join our community</label>
          <div className="mt-2 flex gap-2">
            <Input id="footer-email" type="email" required placeholder="you@example.com" className="bg-background text-foreground" />
            <Button type="submit" variant="secondary">Join</Button>
          </div>
        </form>
      </div>
      <p className="mx-auto mt-10 max-w-content text-xs opacity-70">© 2026 Dora DAO. All rights reserved.</p>
    </footer>
  );
}
