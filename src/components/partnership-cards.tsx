import { Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Heart, Sprout, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import circles from "@/assets/csr/mentoring-circles.png";
import meetup from "@/assets/csr/mentoring-meetup.png";
import laptop from "@/assets/csr/mentoring-laptop.png";
import books from "@/assets/csr/mentoring-books.png";

const options = [
  { slug: "csr", title: "CSR Partners", to: "/partners/csr", tint: "peach", icon: Users, art: circles, body: "Collaborate with DoraDAO to create meaningful, on-ground and digital programs that drive education, skills, and opportunities for communities.", cta: "Explore CSR partnerships" },
  { slug: "philanthropic", title: "Philanthropic Partners", to: "/partners/philanthropic", tint: "gold", icon: Heart, art: meetup, body: "Support DoraDAO's mission to empower individuals and communities through education, mentorship, and access to opportunities.", cta: "Support our mission" },
  { slug: "corporate", title: "Corporate Partners", to: "/partners/corporate", tint: "orange", icon: Building2, art: laptop, body: "Work with DoraDAO to co-create programs, events, and initiatives that build skills, open opportunities, and create long-term impact at scale.", cta: "Partner with DoraDAO" },
  { slug: "donate", title: "Donate", to: "/partners/donate", tint: "sage", icon: Sprout, art: books, body: "Your contribution helps us create more opportunities, support communities, and keep building a kinder, more open internet together.", cta: "Donate now" },
] as const;

export function PartnershipCards({ exclude, descriptions = false }: { exclude?: string; descriptions?: boolean }) {
  return (
    <div className={`partnership-cards ${descriptions ? "partnership-cards-home" : "partnership-cards-other"}`}>
      {options.filter((card) => card.slug !== exclude).map((card) => (
        <Button key={card.slug} asChild variant="ghost" className={`csr-mentor-card partnership-choice mentor-${card.tint}`}>
          <Link to={card.to} aria-label={card.cta}>
            <span className="csr-mentor-icon"><card.icon size={24} strokeWidth={1.7} aria-hidden="true" /></span>
            <h3 className={card.slug === "philanthropic" ? "partnership-long-title" : undefined}>{card.title}</h3>
            {descriptions && <p>{card.body}</p>}
            <span className="csr-mentor-arrow"><ArrowRight size={19} aria-hidden="true" /></span>
            <img className="csr-mentor-art" src={card.art} alt="" aria-hidden="true" loading="lazy" width={540} height={540} />
          </Link>
        </Button>
      ))}
    </div>
  );
}