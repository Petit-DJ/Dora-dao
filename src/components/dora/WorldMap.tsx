import { useState } from "react";
import { cities } from "@/data/map";
import { Section, scrollToId } from "./shared";
import { Button } from "@/components/ui/button";

const MAP = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Equirectangular_projection_SW.jpg/1280px-Equirectangular_projection_SW.jpg";

export function WorldMap() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <Section id="map" title="Our global footprint" subtitle="Every flag is a city where Dora members or partners gather.">
      <div className="relative overflow-hidden rounded-token border bg-muted">
        <div className="relative aspect-[2/1] w-full">
          <img src={MAP} alt="World map" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-50 sepia" />
          {cities.map((c) => {
            const x = ((c.lng + 180) / 360) * 100;
            const y = ((90 - c.lat) / 180) * 100;
            const open = active === c.city;
            return (
              <div key={c.city} className="absolute" style={{ left: `${x}%`, top: `${y}%` }}>
                <button
                  className="-translate-x-1/2 -translate-y-full text-lg leading-none transition hover:scale-125 focus-visible:scale-125 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:text-2xl"
                  aria-label={`${c.city}, ${c.country}`}
                  aria-expanded={open}
                  onMouseEnter={() => setActive(c.city)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(c.city)}
                  onBlur={() => setActive(null)}
                  onClick={() => setActive(open ? null : c.city)}
                >
                  🚩
                </button>
                {open && (
                  <div role="status" className="absolute left-1/2 top-2 z-10 w-44 -translate-x-1/2 rounded-token border bg-popover p-3 text-sm text-popover-foreground shadow-lg">
                    <p className="font-semibold">{c.city}</p>
                    <p className="text-muted-foreground">{c.country}</p>
                    <p className="mt-1">{c.members.toLocaleString()} members · {c.partners} partners</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-6 text-center">
        <Button size="lg" onClick={() => scrollToId("programs")}>Join the world tour →</Button>
      </div>
    </Section>
  );
}
