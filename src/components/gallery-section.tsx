import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GalleryCard, GalleryDialog, useGallery } from "./gallery-wall";
import type { GalleryItem } from "./gallery-data";

/** Landing-page teaser: a few pictured posts plus videos, then a link to the full wall. */
export function pickFeatured(items: GalleryItem[], count = 6) {
  const posts = items.filter(i => i.kind === "post" && i.image);
  const videos = items.filter(i => i.kind === "video");
  const out: GalleryItem[] = [];
  // Two pictured posts, then a video, repeating.
  while (out.length < count && (posts.length || videos.length)) {
    const next = (out.length % 3 === 2 ? videos.shift() ?? posts.shift() : posts.shift() ?? videos.shift());
    if (next) out.push(next);
  }
  return out;
}

export function GallerySection() {
  const items = useGallery();
  const [open, setOpen] = useState<GalleryItem | null>(null);
  const featured = items ? pickFeatured(items) : [];
  return (
    <section id="gallery" aria-labelledby="gallery-title" className="gw-section">
      <div className="gw-inner">
        <header className="gw-heading">
          <p className="gw-eyebrow">Made by our hoomans <Camera aria-hidden /></p>
          <h2 id="gallery-title">The community wall</h2>
          <p className="gw-intro">Graduation selfies, build logs, reels and reflections, shared by participants across our programs.</p>
        </header>
        {items === null ? <div className="gw-grid gw-grid-teaser" aria-busy="true">{Array.from({ length: 6 }, (_, i) => <span key={i} className="gw-skeleton" />)}</div>
          : <div className="gw-grid gw-grid-teaser">{featured.map(item => <GalleryCard key={item.id} item={item} onOpen={setOpen} />)}</div>}
        <div className="gw-more">
          <Button asChild size="lg" className="gw-cta"><Link to="/gallery">View more {items ? `(${items.length})` : ""}<ArrowRight aria-hidden /></Link></Button>
        </div>
      </div>
      <GalleryDialog item={open} onClose={() => setOpen(null)} />
    </section>
  );
}
