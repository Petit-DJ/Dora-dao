import { useEffect, useRef, useState, type ReactNode } from "react";

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(m.matches);
    const on = () => setReduced(m.matches);
    m.addEventListener("change", on);
    return () => m.removeEventListener("change", on);
  }, []);
  return reduced;
}

export function CountUp({ value, suffix = "", duration = 1500 }: { value: number; suffix?: string | undefined; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  const reduced = usePrefersReducedMotion();
  useEffect(() => {
    if (reduced) { setN(value); return; }
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e) return;
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / duration);
        setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [value, duration, reduced]);
  return <span ref={ref} className="tabular-nums">{n.toLocaleString()}{suffix}</span>;
}

export function Section({ id, title, subtitle, action, children, className = "" }: { id: string; title?: string; subtitle?: string; action?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <section id={id} aria-labelledby={title ? `${id}-title` : undefined} className={`scroll-mt-24 px-4 py-section ${className}`}>
      <div className="mx-auto max-w-content">
        {title && (
          <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 id={`${id}-title`} className="font-display text-4xl font-bold md:text-5xl">{title}</h2>
              {subtitle && <p className="mt-1 text-muted-foreground">{subtitle}</p>}
            </div>
            {action}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}

export const scrollToId = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
