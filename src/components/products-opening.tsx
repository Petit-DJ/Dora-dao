import { useEffect, useState } from "react";
import { ArrowRight, Award, BookOpen, Lightbulb, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import scenery from "@/assets/products/opening-scenery.jpg";
import certify from "@/assets/products/certify-reference.png.asset.json";
import hack from "@/assets/products/hack-reference.png.asset.json";
import book from "@/assets/products/book-art.png";
import avatars from "@/assets/products/community-portraits.png.asset.json";

const offerings = [
  {
    name: "DoraCertify",
    description: "On-chain certificates for real contributions and learning.",
    icon: Award,
    art: certify.url,
    tint: "certify",
  },
  {
    name: "ProductHack",
    description: "Turn ideas into real products with the right people and support.",
    icon: Lightbulb,
    art: hack.url,
    tint: "hack",
  },
  {
    name: "CCBook",
    description: "A community-powered knowledge hub for the open internet.",
    icon: BookOpen,
    art: book,
    tint: "book",
  },
] as const;

export function ProductsOpening() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const narrow = window.matchMedia("(max-width: 600px)");
    const update = () =>
      setProgress(
        reduce.matches || narrow.matches ? 0 : Math.min(1, window.scrollY / window.innerHeight),
      );
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  return (
    <section className="po-opening" aria-labelledby="products-title">
      <img
        className="po-scenery"
        src={scenery}
        alt=""
        width={1536}
        height={1024}
        fetchPriority="high"
      />
      <div className="po-dim" style={{ opacity: progress * 0.12 }} />
      <div
        className="po-copy"
        style={{ transform: `scale(${1 - progress * 0.2})`, opacity: 1 - progress * 0.7 }}
      >
        <div className="po-proof">
          <img src={avatars.url} alt="" width={76} height={27} />
          <span>
            10K+ creators &amp; builders
            <br />
            growing with DoraDAO
          </span>
        </div>
        <div className="po-title-wrap">
          <Sparkles className="po-sparkles" aria-hidden="true" />
          <h1 id="products-title">
            Tools for a more
            <br />
            <span>open internet.</span>
          </h1>
          <svg className="po-doodle" viewBox="0 0 60 90" fill="none" aria-hidden="true">
            <path
              d="M9 12c39 11 43 45 22 43-23-2-6-27 7-15 18 18 0 41-25 33M46 3l-6 14M55 24l-13 3M10 48l-4 14"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <p className="po-description">
          Products, programs and infrastructure to help creators,
          <br className="po-desktop-break" /> builders and communities grow, together.
        </p>
        <div className="po-actions">
          <Button asChild className="po-explore">
            <a href="#digital">
              Explore Products <ArrowRight />
            </a>
          </Button>
          <Button asChild variant="outline" className="po-join">
            <a href="/#programs">
              Join DoraDAO <ArrowRight />
            </a>
          </Button>
        </div>
      </div>
      <div className="po-cards">
        {offerings.map(({ name, description, icon: Icon, art, tint }) => (
          <article className={`po-card po-card-${tint}`} key={name}>
            <div className="po-card-top">
              <span className="po-icon">
                <Icon aria-hidden="true" />
              </span>
              <div>
                <h2>{name}</h2>
                <p>{description}</p>
              </div>
              <Button asChild variant="ghost" size="icon" className="po-arrow">
                <a
                  href={`mailto:Connectdoradao@gmail.com?subject=${encodeURIComponent(name)}`}
                  aria-label={`Ask about ${name}`}
                  title={`Ask about ${name}`}
                >
                  <ArrowRight />
                </a>
              </Button>
            </div>
            <img
              className="po-card-art"
              src={art}
              loading="lazy"
              decoding="async"
              alt={
                name === "DoraCertify"
                  ? "Dora with a certificate of contribution"
                  : name === "ProductHack"
                    ? "Dora building together with a laptop and project checklist"
                    : "Community knowledge library and illustrated books"
              }
              width={360}
              height={320}
            />
          </article>
        ))}
      </div>
      <svg className="po-tail" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 20Q190 90 400 48T810 40T1180 55T1440 15V80H0Z" />
      </svg>
    </section>
  );
}
