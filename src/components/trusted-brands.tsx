import { useState } from "react";
import scenery from "@/assets/dora-brands-flow-background.jpg";
import { partnerCategories, partnerRows, type PartnerCategory } from "./trusted-brands-data";

export function TrustedBrands() {
  const [category, setCategory] = useState<"all" | PartnerCategory>("all");
  const rows = partnerRows(category);
  return (
    <section aria-labelledby="brands-title" className="brands-section relative z-10 overflow-hidden bg-cream text-community-ink">
      <img loading="lazy" decoding="async" src={scenery} alt="" className="brands-scenery pointer-events-none absolute inset-0 h-full w-full" />
      <div className="brands-content relative">
        <p className="brands-eyebrow">· Growing together ·</p>
        <h2 id="brands-title" className="brands-title">
          Supported by 80+ partners who believe in <span className="text-hero-orange">putting hoomans first</span> through direct and indirect participation.
        </h2>
        <div className="brands-toggle" role="group" aria-label="Filter partners">
          {partnerCategories.map((item) => (
            <button key={item.id} type="button" aria-pressed={category === item.id} onClick={() => setCategory(item.id)}>
              {item.label}
            </button>
          ))}
        </div>
        <div className="brands-rows" key={category}>
          {rows.map((brands, row) => (
            <div key={row} className={`brands-window brands-window-${row % 2}`}>
              <div className="brands-track">
                {[0, 1].map((copy) => (
                  <ul key={copy} className="brands-group" aria-hidden={copy === 1 ? true : undefined}>
                    {brands.map((brand) => (
                      <li key={brand.slug} className="brand-tile" tabIndex={copy === 0 ? 0 : -1} title={brand.name}>
                        <img loading="lazy" decoding="async" src={brand.image} alt={copy === 0 ? brand.name : ""} />
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
