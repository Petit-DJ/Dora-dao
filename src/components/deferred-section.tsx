import { useEffect, useRef, useState, Suspense, type ReactNode } from "react";

export function DeferredSection({ anchor, children, size = "standard" }: { anchor: string; children: ReactNode; size?: "standard" | "tall" | "compact" }) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const revealHash = () => { if (window.location.hash.slice(1) === anchor) setReady(true); };
    revealHash();
    if (!("IntersectionObserver" in window)) { setReady(true); return; }
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) { setReady(true); observer.disconnect(); }
    }, { rootMargin: "400px 0px" });
    observer.observe(element);
    window.addEventListener("hashchange", revealHash);
    return () => { observer.disconnect(); window.removeEventListener("hashchange", revealHash); };
  }, [anchor]);
  useEffect(() => {
    if (!ready || window.location.hash.slice(1) !== anchor) return;
    const observer = new MutationObserver(() => {
      const target = document.getElementById(anchor);
      if (target) { target.scrollIntoView(); observer.disconnect(); }
    });
    if (ref.current) observer.observe(ref.current, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [ready, anchor]);
  const placeholder = <div id={anchor} className={`deferred-placeholder deferred-${size}`} aria-busy="true" />;
  return <div ref={ref} className={ready ? "deferred-ready" : undefined} data-deferred-section={anchor}>
    {ready ? <Suspense fallback={placeholder}>{children}</Suspense> : placeholder}
  </div>;
}