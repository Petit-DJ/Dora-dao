import { ExternalLink, Rocket } from "lucide-react";
import { productHighlights, products } from "@/data/products";
import { Section } from "./shared";
import { Button } from "@/components/ui/button";

export function Products() {
  return (
    <Section
      id="products"
      title="Our products"
      subtitle="Built. Launched. Loved."
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
              <span
                className="flex h-12 w-12 items-center justify-center rounded-token bg-primary text-xl font-bold text-primary-foreground"
                aria-hidden="true"
              >
                {p.logo}
              </span>
              <div>
                <p className="font-semibold">{p.name}</p>
                <p className="text-sm text-muted-foreground">{p.oneLiner}</p>
              </div>
            </div>
            <Button asChild className="mt-auto pt-6">
              <a
                href={p.launchUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5"
              >
                <Rocket className="h-4 w-4" />
                Support the Launch
              </a>
            </Button>
          </li>
        ))}
      </ul>
      {/* Discover more products via the products route */}
      <div className="mt-8 flex justify-center">
        <a
          href="https://www.producthunt.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          See More products <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </Section>
  );
}
