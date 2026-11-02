import { useRef, useState } from "react";
import {
  Download,
  ExternalLink,
  ArrowLeft,
  ArrowRight,
  AudioLines,
  Lightbulb,
  Mic,
  Play,
  UserRound,
  Users,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import scenery from "@/assets/podcast-scenery.jpg";
import {
  episodes,
  featuredEpisode,
  streams,
  type PodcastItem,
  youtubeUrl,
  youtubeEmbed,
  youtubeDownload,
} from "./podcast-data";

const roles = [
  { name: "Speaker", description: "Share your story", icon: Mic },
  { name: "Mentor", description: "Guide & support", icon: Lightbulb },
  { name: "Judge", description: "Evaluate & inspire", icon: Users },
  { name: "Community Guest", description: "Be part of the conversation", icon: UserRound },
];

function PodcastRow({
  title,
  items,
  onSelect,
  stream = false,
}: {
  title: string;
  items: PodcastItem[];
  onSelect: (item: PodcastItem) => void;
  stream?: boolean;
}) {
  const track = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const move = (direction: number) => {
    const element = track.current;
    if (!element) return;
    element.scrollBy({
      left: direction * element.clientWidth * 0.75,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  };
  return (
    <div className="podcast-row">
      <header className="podcast-row-heading">
        <h3>
          {stream ? <Video aria-hidden /> : <Mic aria-hidden />}
          {title}
        </h3>
        <span className="podcast-tape-note">
          {stream ? "Big ideas. Real builders." : "A little inspiration, on repeat."}
        </span>
        <Button variant="ghost" onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>
          {expanded ? "Show carousel" : stream ? "View all streams" : "View all episodes"}
          <ArrowRight />
        </Button>
      </header>
      <div className="podcast-carousel">
        {!expanded && (
          <Button
            variant="ghost"
            size="icon"
            className="podcast-arrow"
            aria-label={`Previous ${title.toLowerCase()}`}
            onClick={() => move(-1)}
          >
            <ArrowLeft />
          </Button>
        )}
        <div ref={track} className={`podcast-track ${expanded ? "podcast-track-expanded" : ""}`}>
          {items.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className="podcast-episode"
              onClick={() => onSelect(item)}
              aria-label={`Open ${item.title}`}
            >
              <img src={item.image} alt={`${item.title} episode artwork`} loading="lazy" />
              <span className="podcast-episode-copy">
                <span>{item.label}</span>
                <strong>{item.title}</strong>
                {item.subtitle && <span>{item.subtitle}</span>}
              </span>
            </Button>
          ))}
        </div>
        {!expanded && (
          <Button
            variant="ghost"
            size="icon"
            className="podcast-arrow"
            aria-label={`Next ${title.toLowerCase()}`}
            onClick={() => move(1)}
          >
            <ArrowRight />
          </Button>
        )}
      </div>
    </div>
  );
}

export function PodcastSection() {
  const [selected, setSelected] = useState<PodcastItem | null>(null);
  const [role, setRole] = useState("Speaker");
  const [inviteOpen, setInviteOpen] = useState(false);
  return (
    <section
      id="podcast"
      aria-labelledby="podcast-title"
      className="podcast-section text-community-ink"
    >
      <img src={scenery} alt="" aria-hidden className="podcast-scenery" loading="lazy" />
      <div className="podcast-inner">
        <header className="podcast-heading podcast-copy">
          <p className="podcast-eyebrow">
            Session Recordings <AudioLines aria-hidden />
          </p>
          <h2 id="podcast-title">
            Late-night hack sessions,
            <br />
            masterclasses,
            <br />
            <span>and stories.</span>
          </h2>
          <p className="podcast-intro">
            A little knowledge, a new perspective, a spark for your next idea. Pull up a chair and
            join the conversation.
          </p>
          <Button className="podcast-listen" onClick={() => setSelected(featuredEpisode)}>
            <span>
              <Play fill="currentColor" />
            </span>
            Watch a session
            <ArrowRight />
          </Button>
        </header>
        <div className="podcast-top">
          <div className="podcast-featured-wrap">
            <Button
              variant="ghost"
              className="podcast-featured"
              onClick={() => setSelected(featuredEpisode)}
              aria-label="Play featured podcast: From Idea to Product"
            >
              <img
                src={featuredEpisode.image}
                alt="DoraDAO host and guest in the From Idea to Product podcast"
                loading="lazy"
              />
              <span className="podcast-play-badge" aria-hidden>
                <Play fill="currentColor" />
              </span>
            </Button>
            <div className="podcast-links">
              <a href={youtubeUrl(featuredEpisode.youtubeId!)} target="_blank" rel="noreferrer">
                <ExternalLink aria-hidden />
                Watch on YouTube
              </a>
              <a href={featuredEpisode.linkedinUrl} target="_blank" rel="noreferrer">
                <ExternalLink aria-hidden />
                LinkedIn event
              </a>
              <a
                href={youtubeDownload(featuredEpisode.youtubeId!)}
                target="_blank"
                rel="noreferrer"
              >
                <Download aria-hidden />
                Download video
              </a>
            </div>
          </div>
          <aside className="podcast-invitation">
            <h3>
              Would like to join us for a session or have something to share with our community
              members?
            </h3>
            <p>Join us as a speaker, mentor, judge, across all walks of life.</p>
            <div className="podcast-roles" role="group" aria-label="Join the conversation as">
              {roles.map(({ name, description, icon: Icon }, index) => (
                <Button
                  key={name}
                  variant="ghost"
                  className={`podcast-role podcast-role-${index}`}
                  aria-pressed={role === name}
                  onClick={() => setRole(name)}
                >
                  <span>
                    <Icon />
                  </span>
                  <span>
                    <strong>{name}</strong>
                    <small>{description}</small>
                  </span>
                </Button>
              ))}
            </div>
            <Button className="podcast-join" onClick={() => setInviteOpen(true)}>
              {role === "Community Guest" ? "Join the Conversation" : `Be a ${role}`}
              <ArrowRight />
            </Button>
          </aside>
        </div>
        <PodcastRow title="Latest Episodes" items={episodes} onSelect={setSelected} />
        <PodcastRow title="Hackathon Streams" items={streams} onSelect={setSelected} stream />
      </div>
      <Dialog
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <DialogContent className="podcast-dialog">
          <DialogTitle>{selected?.title}</DialogTitle>
          <DialogDescription>{selected?.subtitle || selected?.label}</DialogDescription>
          {selected?.youtubeId ? (
            <div className="podcast-embed">
              <iframe
                src={youtubeEmbed(selected.youtubeId)}
                title={selected.title}
                allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            selected && <img src={selected.image} alt={`${selected.title} artwork`} />
          )}
          {selected?.youtubeId ? (
            <div className="podcast-links">
              <a href={youtubeUrl(selected.youtubeId)} target="_blank" rel="noreferrer">
                <ExternalLink aria-hidden />
                Watch on YouTube
              </a>
              {selected.linkedinUrl && (
                <a href={selected.linkedinUrl} target="_blank" rel="noreferrer">
                  <ExternalLink aria-hidden />
                  LinkedIn event
                </a>
              )}
              <a href={youtubeDownload(selected.youtubeId)} target="_blank" rel="noreferrer">
                <Download aria-hidden />
                Download video
              </a>
            </div>
          ) : (
            <p>This recording link hasn’t been added yet.</p>
          )}
        </DialogContent>
      </Dialog>
      <Dialog open={inviteOpen} onOpenChange={setInviteOpen}>
        <DialogContent className="podcast-dialog">
          <DialogTitle>Join DoraDAO as a {role}</DialogTitle>
          <DialogDescription>
            {roles.find((item) => item.name === role)?.description}. We’d love to hear from you.
          </DialogDescription>
          <p>
            Applications will open here once the community contact or application link is available.
          </p>
        </DialogContent>
      </Dialog>
    </section>
  );
}
