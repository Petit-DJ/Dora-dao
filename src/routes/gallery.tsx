import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { GalleryCard, GalleryDialog, useGallery } from "@/components/gallery-wall";
import type { GalleryItem } from "@/components/gallery-data";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Community Gallery, photos, videos and posts by DoraDAO participants" },
      { name: "description", content: "Browse photos, videos, reels and reflections shared by DoraDAO fellows, builders and community members." },
      { property: "og:title", content: "DoraDAO Community Gallery" },
      { property: "og:description", content: "Graduation moments, build logs, videos and stories shared by our participants." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

const filters = [
  { id: "all", label: "All", test: () => true },
  { id: "videos", label: "Videos", test: (i: GalleryItem) => i.kind === "video" },
  { id: "photos", label: "Photos & posts", test: (i: GalleryItem) => i.kind === "post" && !!i.image },
  { id: "linkedin", label: "LinkedIn", test: (i: GalleryItem) => i.link.platform === "linkedin" },
  { id: "x", label: "X", test: (i: GalleryItem) => i.link.platform === "x" },
  { id: "instagram", label: "Instagram", test: (i: GalleryItem) => i.link.platform === "instagram" },
] as const;
const PAGE = 24;

function GalleryPage() {
  const items = useGallery();
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");
  const [limit, setLimit] = useState(PAGE);
  const [open, setOpen] = useState<GalleryItem | null>(null);
  const shown = useMemo(() => (items ?? []).filter(filters.find(f => f.id === filter)!.test), [items, filter]);
  return (
    <>
      <SiteNavbar />
      <main className="gw-page">
        <header className="gw-heading">
          <p className="gw-eyebrow">Community gallery</p>
          <h1>Moments, builds and stories</h1>
          <p className="gw-intro">Everything our participants have shared about their journey with DoraDAO. Tap any card to watch, zoom in or read the full post.</p>
        </header>
        <div className="gw-filters" role="group" aria-label="Filter the gallery">
          {filters.map(f => {
            const count = (items ?? []).filter(f.test).length;
            return <Button key={f.id} size="sm" variant={f.id === filter ? "default" : "outline"} aria-pressed={f.id === filter} onClick={() => { setFilter(f.id); setLimit(PAGE); }}>{f.label}{items && <span className="gw-count">{count}</span>}</Button>;
          })}
        </div>
        {items === null ? <div className="gw-grid" aria-busy="true">{Array.from({ length: 8 }, (_, i) => <span key={i} className="gw-skeleton" />)}</div>
          : shown.length === 0 ? <p className="gw-empty">Nothing here yet.</p>
          : <div className="gw-grid">{shown.slice(0, limit).map(item => <GalleryCard key={item.id} item={item} onOpen={setOpen} />)}</div>}
        {shown.length > limit && <div className="gw-more"><Button size="lg" variant="outline" onClick={() => setLimit(l => l + PAGE)}>Show more ({shown.length - limit} left)</Button></div>}
      </main>
      <SiteFooter />
      <GalleryDialog item={open} onClose={() => setOpen(null)} />
    </>
  );
}
