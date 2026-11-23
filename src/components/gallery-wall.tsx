import { useEffect, useState } from "react";
import { ExternalLink, Instagram, Link2, Linkedin, Play, Twitter, Youtube, FileText, Image as ImageIcon } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { buildGallery, fetchGalleryCells, platformLabel, type GalleryItem, type Platform } from "./gallery-data";

const icons: Record<Platform, typeof Link2> = { youtube: Youtube, linkedin: Linkedin, x: Twitter, instagram: Instagram, drive: ImageIcon, article: FileText, other: Link2 };

/** Live sheet rows merged with the bundled preview snapshot; falls back to the snapshot rows offline. */
export function useGallery() {
  const [items, setItems] = useState<GalleryItem[] | null>(null);
  useEffect(() => {
    let alive = true;
    Promise.all([import("./gallery-previews.json"), fetchGalleryCells()]).then(([snap, live]) => {
      if (alive) setItems(buildGallery(live ?? snap.default.cells, snap.default.previews));
    }).catch(() => alive && setItems([]));
    return () => { alive = false; };
  }, []);
  return items;
}

export function PlatformChip({ platform }: { platform: Platform }) {
  const Icon = icons[platform];
  return <span className={`gw-chip gw-chip-${platform}`}><Icon aria-hidden />{platformLabel[platform]}</span>;
}

export function GalleryCard({ item, onOpen }: { item: GalleryItem; onOpen: (item: GalleryItem) => void }) {
  const video = item.kind === "video";
  return (
    <button type="button" className={`gw-card ${video ? "gw-card-video" : ""} ${item.image ? "" : "gw-card-text"}`} onClick={() => onOpen(item)} aria-label={`Open ${video ? "video" : "post"} by ${item.author}`}>
      {item.image && <span className="gw-media"><img src={item.image} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer" />{video && <span className="gw-play" aria-hidden><Play fill="currentColor" /></span>}</span>}
      <span className="gw-body">
        <PlatformChip platform={item.link.platform} />
        {(item.title || item.text) && <span className="gw-text">{item.title || item.text}</span>}
        <span className="gw-author">{item.author}</span>
      </span>
    </button>
  );
}

export function GalleryDialog({ item, onClose }: { item: GalleryItem | null; onClose: () => void }) {
  return (
    <Dialog open={item !== null} onOpenChange={open => { if (!open) onClose(); }}>
      <DialogContent className="gw-dialog">
        {item && <>
          <DialogTitle>{item.title || `${item.kind === "video" ? "Video" : "Post"} by ${item.author}`}</DialogTitle>
          <DialogDescription>{item.kind === "video" ? item.author : `Shared on ${platformLabel[item.link.platform]}`}</DialogDescription>
          {item.link.youtubeId
            ? <div className="gw-embed"><iframe src={`https://www.youtube-nocookie.com/embed/${item.link.youtubeId}?autoplay=1&rel=0`} title={item.title || "Participant video"} allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowFullScreen /></div>
            : item.image && <img className="gw-dialog-image" src={item.image} alt={`Picture shared by ${item.author}`} referrerPolicy="no-referrer" />}
          {item.kind === "post" && item.text && <p className="gw-dialog-text">{item.text}</p>}
          <div className="gw-links">
            {[item.link, ...item.alsoOn].map(link => {
              const Icon = icons[link.platform];
              return <a key={link.key} href={link.url} target="_blank" rel="noopener noreferrer"><Icon aria-hidden />View on {platformLabel[link.platform]}<ExternalLink aria-hidden /></a>;
            })}
          </div>
        </>}
      </DialogContent>
    </Dialog>
  );
}
