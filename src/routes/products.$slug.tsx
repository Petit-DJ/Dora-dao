import { createFileRoute, notFound } from "@tanstack/react-router";
import { products } from "@/data/products";
import { SimplePage } from "@/components/dora/SimplePage";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Product not found — Dora DAO" }, { name: "robots", content: "noindex" }] };
    const t = `${loaderData.product.name} — Dora DAO products`;
    return { meta: [{ title: t }, { name: "description", content: loaderData.product.oneLiner }, { property: "og:title", content: t }, { property: "og:description", content: loaderData.product.oneLiner }] };
  },
  notFoundComponent: () => <SimplePage title="Product not found"><p>This product doesn't exist.</p></SimplePage>,
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  return (
    <SimplePage title={product.name}>
      <p className="text-lg text-foreground">{product.oneLiner}</p>
      <p>{product.description}</p>
      <p><strong className="text-foreground">{product.metric}</strong>{product.badge ? ` · ${product.badge}` : ""}</p>
    </SimplePage>
  );
}
