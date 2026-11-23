import { useEffect, useRef, useState, type ReactNode } from "react";

export function useInView<T extends Element>(threshold = 0.2) {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e?.isIntersecting) {
        setSeen(true);
        io.disconnect();
      }
    }, { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, seen] as const;
}

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const [ref, seen] = useInView<HTMLDivElement>(0.15);
  return (
    <div ref={ref} className={`pr-reveal ${seen ? "is-in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/** Green squiggle divider that draws itself when scrolled into view. */
export function Squiggle() {
  const [ref, seen] = useInView<SVGSVGElement>(0.4);
  return (
    <svg ref={ref} className={`sc-squiggle ${seen ? "is-in" : ""}`} viewBox="0 0 600 60" aria-hidden>
      <path d="M10 30 C120 52 230 50 330 36 C360 30 380 10 350 12 C320 14 330 46 380 44 C460 40 520 30 590 22" />
    </svg>
  );
}
