import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { Sparkles, Users, type LucideIcon } from "lucide-react";
import impactFriend from "@/assets/csr/impact-friend.png";
import { csrImpactCards } from "./csr-impact-data";

export function CsrImpactSection() {
  return (
    <ImpactCardStack
      id="csr-impact-title"
      badge="02 · Why it matters"
      note="Tracked, reported and built to last."
      title={
        <>
          More voices. <em>More possibilities.</em>
        </>
      }
      cards={csrImpactCards}
    />
  );
}

type ImpactCard = { title: string; text: string; icon?: LucideIcon };

export function ImpactCardStack({
  id,
  badge,
  note,
  title,
  cards,
  className = "",
}: {
  id: string;
  badge: string;
  note: string;
  title: ReactNode;
  cards: readonly ImpactCard[];
  className?: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const scene = sceneRef.current;
    if (!section || !scene) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const update = () => {
      frame = 0;
      if (motion.matches) return;
      const top = Number.parseFloat(getComputedStyle(scene).top) || 0;
      const distance = section.offsetHeight - scene.offsetHeight;
      const last = cards.length - 1;
      const progress = Math.max(
        0,
        Math.min(
          last,
          ((top - section.getBoundingClientRect().top) / Math.max(1, distance)) * last,
        ),
      );
      setActive(Math.min(last, Math.floor(progress + 0.001)));
      scene.querySelectorAll<HTMLElement>(".csr-impact-card").forEach((card, i) => {
        const incoming = Math.max(0, Math.min(1, i - progress));
        const behind = Math.max(0, Math.min(2, progress - i));
        card.style.setProperty("--rise", String(incoming));
        card.style.setProperty("--behind", String(behind));
      });
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    motion.addEventListener("change", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      motion.removeEventListener("change", schedule);
    };
  }, [cards.length]);

  return (
    <section ref={sectionRef} className={`csr-impact ${className}`} aria-labelledby={id}>
      <div ref={sceneRef} className="csr-impact-scene">
        <header className="csr-impact-heading csr-heading">
          <div className="csr-heading-top">
            <span className="csr-heading-pill">{badge}</span>
            <p className="csr-heading-note">{note}</p>
          </div>
          <h2 id={id} className="csr-heading-title">
            {title}
          </h2>
          <span className="csr-impact-rays" aria-hidden="true" />
        </header>
        <div className="csr-impact-orange">
          <Sparkles className="csr-impact-spark" size={54} strokeWidth={1.3} aria-hidden="true" />
          <span className="csr-impact-doodle" aria-hidden="true" />
          <div className="csr-impact-stack">
            <img
              className="csr-impact-friend"
              src={impactFriend}
              alt=""
              aria-hidden="true"
              loading="lazy"
              width={720}
              height={610}
            />
            <span className="csr-impact-backing backing-two" aria-hidden="true" />
            <span className="csr-impact-backing backing-one" aria-hidden="true" />
            {cards.map((card, i) => {
              const Icon = card.icon ?? Users;
              return (
                <article
                  key={card.title}
                  className={`csr-impact-card impact-card-${i}`}
                  data-active={active === i}
                >
                  <span className="csr-impact-icon">
                    <Icon size={38} strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  <div className="csr-impact-copy">
                    <div className="csr-impact-meta">
                      <strong>DoraDAO</strong>
                      <span>
                        {String(i + 1).padStart(2, "0")} / {String(cards.length).padStart(2, "0")}
                      </span>
                    </div>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
