import { useState } from "react";
import { Play, ExternalLink } from "lucide-react";
import { gallery, socialPosts, type GalleryItem } from "@/data/testimonials";
import { stats } from "@/data/site";
import { CountUp, Section } from "./shared";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

function Tile({ item }: { item: GalleryItem }) {
  switch (item.kind) {
    case "video":
      return (
        <div className="relative">
          <img src={item.thumb} alt={item.caption} loading="lazy" className="w-full rounded-token object-cover" />
          <span className="absolute inset-0 flex items-center justify-center"><span className="rounded-full bg-background/90 p-3"><Play className="h-5 w-5" /></span></span>
          <p className="p-3 text-sm">{item.caption}</p>
        </div>
      );
    case "photo":
      return (<><img src={item.src} alt={item.caption} loading="lazy" className={`w-full rounded-token object-cover ${item.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`} /><p className="p-3 text-sm">{item.caption}</p></>);
    case "quote":
      return (<blockquote className="p-5"><p className="font-display text-lg italic">“{item.quote}”</p><footer className="mt-2 text-sm text-muted-foreground">— {item.author}, {item.place}</footer></blockquote>);
    case "confession":
      return (<div className="bg-muted p-5"><p className="text-xs uppercase tracking-wider text-muted-foreground">Confession</p><p className="mt-1">{item.text}</p></div>);
    case "social":
      return null;
    default:
      return null;
  }
}

type SocialPlatform = Extract<GalleryItem, { kind: "social" }>["platform"];

const platformStyles: Record<SocialPlatform, { label: string; className: string }> = {
  x: { label: "X (Twitter)", className: "bg-foreground text-background" },
  instagram: { label: "Instagram", className: "bg-accent text-accent-foreground" },
  youtube: { label: "YouTube", className: "bg-destructive text-destructive-foreground" },
  linkedin: { label: "LinkedIn", className: "bg-primary text-primary-foreground" },
  pinterest: { label: "Pinterest", className: "bg-accent text-accent-foreground" },
  tiktok: { label: "TikTok", className: "bg-foreground text-background" },
};

function SocialCard({ item }: { item: Extract<GalleryItem, { kind: "social" }> }) {
  const platform = platformStyles[item.platform];
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-token border bg-card text-left transition hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {item.thumbnail ? (
        <div className="relative">
          <img src={item.thumbnail} alt={item.title} loading="lazy" className="w-full object-cover" />
          <span className="absolute inset-0 flex items-center justify-center"><span className="rounded-full bg-background/90 p-3"><Play className="h-5 w-5" /></span></span>
        </div>
      ) : null}
      <div className="p-4">
        <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${platform.className}`}>{platform.label}</span>
        <p className="mt-2 line-clamp-3 text-sm font-medium">{item.title}</p>
        <p className="mt-1 text-sm text-muted-foreground">{item.author}</p>
        <p className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
          View original post <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </p>
      </div>
    </a>
  );
}

export function Testimonials() {
  const [open, setOpen] = useState<GalleryItem | null>(null);
  return (
    <Section id="testimonials" title="Voices from our community" subtitle="Real people. Real stories. A global family.">
      <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-token border bg-card p-4 text-center">
            <p className="text-3xl font-bold"><CountUp value={s.value} suffix={s.suffix} /></p>
            <p className="text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {gallery.map((g) => (
          <button key={g.id} onClick={() => setOpen(g)} className="mb-4 block w-full break-inside-avoid overflow-hidden rounded-token border bg-card text-left transition hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <Tile item={g} />
          </button>
        ))}
      </div>
      <h3 className="mb-4 mt-10 font-display text-2xl font-bold">From our socials</h3>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {socialPosts.map((s) => (
          <SocialCard key={s.id} item={s} />
        ))}
      </div>
      <Dialog open={!!open} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-3xl">
          <DialogTitle className="sr-only">Gallery item</DialogTitle>
          {open?.kind === "video" ? (
            <div className="aspect-video"><iframe src={open.videoUrl} title={open.caption} className="h-full w-full rounded-token" allowFullScreen /></div>
          ) : open ? <Tile item={open} /> : null}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
