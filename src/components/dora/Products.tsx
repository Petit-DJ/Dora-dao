import { Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { productHighlights, products } from "@/data/products";
import { Section } from "./shared";
import { Button } from "@/components/ui/button";

export function Products() {
  return (
    <Section
      id="products"
      title="Our products"
      subtitle="Built. Launched. Loved."
      action={
        <a
          href="https://dorahacks.lovable.app/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          See More <ExternalLink className="h-3.5 w-3.5" />
        </a>
      }
    >
      <ul className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-4">
        {productHighlights.map((h) => (
          <li key={h.label} className="rounded-token border bg-muted p-4">
            <p className="text-xl font-bold">{h.value}</p>
            <p className="text-sm text-muted-foreground">{h.label}</p>
          </li>
        ))}
      </ul>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <li key={p.slug} className="flex flex-col rounded-token border bg-card p-5">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-token bg-primary text-xl font-bold text-primary-foreground" aria-hidden="true">{p.logo}</span>
              <div><p className="font-semibold">{p.name}</p><p className="text-sm text-muted-foreground">{p.oneLiner}</p></div>
            </div>
            <p className="mt-4 text-sm"><span className="font-semibold">{p.metric}</span></p>
            {p.badge && <span className="mt-2 w-fit rounded-full border px-2 py-0.5 text-xs">{p.badge}</span>}
            <Button variant="outline" size="sm" asChild className="mt-4 w-fit">
              <Link to="/products/$slug" params={{ slug: p.slug }}>See more</Link>
            </Button>
          </li>
        ))}
      </ul>
    </Section>
  );
}
