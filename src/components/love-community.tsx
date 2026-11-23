import scenery from "@/assets/love/scenery.jpg.asset.json";
import plane from "@/assets/love/plane.png.asset.json";
import { ArrowUpRight, Heart, Play, Quote, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { confessions, type Confession } from "./confessions-data";

const socialKind = (item: Confession) => `Shared on ${item.source ?? "the internet"}`;

export function LoveCommunity() {
  const [selected, setSelected] = useState<Confession | null>(null);
  const watchable = (item: Confession) => item.type === "video" || item.type === "social";
  return (
    <section id="love" aria-labelledby="love-title" className="love-section text-community-ink">
      <img src={scenery.url} alt="" aria-hidden className="love-scenery" loading="lazy" />
      <img src={plane.url} alt="" aria-hidden className="love-plane" loading="lazy" />

      <div className="love-inner">
        <div className="love-copy">
          <p className="love-eyebrow">Raw &amp; unfiltered</p>
          <h2 id="love-title" className="love-title">
            <span>Real voices.</span>
            <span className="love-accent">Zero pretend.</span>
          </h2>
        </div>
        <p className="love-note">
          Hear directly from the community on what happens when you finally find the people you were searching for.
        </p>
      </div>

      <div className="confession-wall-wrap">
        <div className="confession-wall-meta"><span><Heart size={16} aria-hidden /> A little corner of our community</span></div>
        <div className="confession-wall">
          {confessions.map((item, index) => (
            <article key={item.id} className={`confession-card confession-${item.type} confession-tone-${index % 4}${item.source ? ` confession-src-${item.source.toLowerCase()}` : ""}`}>
              <span className="confession-tape" aria-hidden />
              <Button variant="ghost" className="confession-open" onClick={() => setSelected(item)} aria-label={`${watchable(item) ? "Watch" : "Read"} ${item.title}${item.author ? ` by ${item.author}` : ""}`}>
                {item.image && <div className="confession-image"><img src={item.image} alt={item.author ? `${item.author} on ${item.source}, video preview` : "Community gathering"} loading="lazy" />{watchable(item) && <><span className="confession-video-tag">{item.type === "video" ? "Film · 0:08" : `${item.source}${item.duration ? ` · ${item.duration}` : ""}`}</span><span className="confession-play"><Play fill="currentColor" size={24} aria-hidden /></span></>}</div>}
                {item.type === "social" && !item.image && <div className="confession-social-fallback"><span className="confession-social-mono" aria-hidden>{item.author?.charAt(0) ?? "★"}</span><span className="confession-social-source">{item.source} · {item.duration ?? "Post"}</span><span className="confession-social-open"><Play fill="currentColor" size={16} aria-hidden /> View the post</span></div>}
                <div className="confession-body">
                  <span className="confession-kind">{item.type === "social" ? <><Play size={14} aria-hidden />{socialKind(item)}</> : item.type === "text" ? <Quote size={17} aria-hidden /> : item.type === "poster" ? <Sparkles size={17} aria-hidden /> : <Heart size={15} aria-hidden />}{item.type === "poster" ? "A confession in print" : item.type === "text" ? "Dear DoraDAO" : item.type === "video" ? "In the moment" : ""}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="confession-signature">, {item.signature}<ArrowUpRight size={17} aria-hidden /></span>
                </div>
              </Button>
            </article>
          ))}
        </div>
      </div>
      <Dialog open={selected !== null} onOpenChange={(open) => { if (!open) setSelected(null); }}>
        <DialogContent className="confession-dialog">
          <p className="confession-kind">{selected?.type === "social" ? `${selected?.source} · a real member story` : "DoraDAO"}</p>
          <DialogTitle>{selected?.type === "social" && selected?.author ? `${selected.author}, ${selected.title}` : selected?.title}</DialogTitle>
          <DialogDescription>{selected?.text}</DialogDescription>
          {selected?.embedUrl ? (
            <div className={`confession-embed confession-embed-${(selected.source ?? "").toLowerCase()}`}>
              <iframe
                key={selected.id}
                src={selected.embedUrl}
                title={`${selected.author ?? "Member"} on ${selected.source}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
              <p className="confession-demo-note">Playing from {selected.source} · <a href={selected.sourceUrl} target="_blank" rel="noreferrer">open the original post</a></p>
            </div>
          ) : selected?.videoUrl ? (
            <video key={selected.id} src={selected.videoUrl} poster={selected.image} controls playsInline preload="none" aria-label={`${selected.author} shares their story`} />
          ) : selected?.video ? (
            <>
              <video key={selected.id} src={selected.video} poster={selected.image} controls playsInline preload="none" aria-label="Community film" />
              <p className="confession-demo-note">Demonstration clip made from a community photo; not a member's video confession.</p>
            </>
          ) : selected?.image ? <img loading="lazy" decoding="async" src={selected.image} alt="DoraDAO community gathering" /> : null}
          <p className="confession-dialog-signature">, {selected?.signature}</p>
        </DialogContent>
      </Dialog>
    </section>
  );
}
