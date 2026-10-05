import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { programs, programCategories } from "@/data/programs";
import { Section } from "./shared";
import { Button } from "@/components/ui/button";

export function Programs() {
  const [cat, setCat] = useState<(typeof programCategories)[number]>("All");
  const list = useMemo(() => programs.filter((p) => cat === "All" || p.category === cat), [cat]);
  const [selectedId, setSelectedId] = useState(programs[0]!.id);
  const selected = list.find((p) => p.id === selectedId) ?? list[0] ?? programs[0]!;
  const [imgIdx, setImgIdx] = useState(0);

  return (
    <Section
      id="programs"
      title="Our programs"
      subtitle="5 initiatives. One ecosystem. Endless possibilities."
      action={
        <div role="group" aria-label="Filter programs" className="flex flex-wrap gap-2">
          {programCategories.map((c) => (
            <Button key={c} size="sm" variant={cat === c ? "default" : "outline"} aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</Button>
          ))}
        </div>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr_16rem]">
        <div>
          <img key={selected.images[imgIdx]} src={selected.images[imgIdx]} alt={`${selected.name} photo ${imgIdx + 1}`} loading="lazy" className="aspect-[3/2] w-full animate-fade-in rounded-token object-cover" />
          <div className="mt-3 flex gap-2">
            {selected.images.map((src, i) => (
              <button key={src} onClick={() => setImgIdx(i)} aria-label={`Show photo ${i + 1}`} className={`overflow-hidden rounded-token border-2 ${i === imgIdx ? "border-primary" : "border-transparent"}`}>
                <img src={src} alt="" loading="lazy" className="h-14 w-20 object-cover" />
              </button>
            ))}
          </div>
        </div>
        <div className="rounded-token border bg-card p-6" aria-live="polite">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">{selected.category}</p>
          <h3 className="mt-1 text-2xl font-semibold">{selected.name}</h3>
          <p className="mt-3 text-muted-foreground">{selected.description}</p>
          <h4 className="mt-5 font-semibold">Who can apply</h4>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">{selected.whoCanApply.map((w) => <li key={w}>{w}</li>)}</ul>
          <Button asChild className="mt-6">
            {selected.applyUrl.startsWith("/") ? (
              <Link to={selected.applyUrl}>
                {selected.applyUrl === "/fellowship" ? "Explore Fellowship 2.0" : "Apply now"}
              </Link>
            ) : (
              <a href={selected.applyUrl}>Apply now</a>
            )}
          </Button>
        </div>
        <ul aria-label="All programs" className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
          {list.map((p) => (
            <li key={p.id} className="shrink-0">
              <button
                onClick={() => { setSelectedId(p.id); setImgIdx(0); }}
                aria-current={p.id === selected.id ? "true" : undefined}
                className={`w-full whitespace-nowrap rounded-token border px-3 py-2 text-left text-sm transition ${p.id === selected.id ? "border-primary bg-primary text-primary-foreground" : "hover:bg-muted"}`}
              >
                {p.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <h3 className="mb-3 mt-8 font-semibold">Community highlights</h3>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {selected.lastEdition.map((d) => (
          <div key={d.label} className="rounded-token border bg-card p-4">
            <p className="text-xs text-muted-foreground">{d.label}</p>
            <p className="text-xl font-semibold">{d.value}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
