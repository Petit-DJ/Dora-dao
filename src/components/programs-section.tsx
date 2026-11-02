import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  ChartNoAxesCombined,
  CheckCircle2,
  Code2,
  FileText,
  Globe2,
  Hammer,
  Heart,
  Mic,
  Smile,
  Snowflake,
  Sparkles,
  Sprout,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { formatHighlightValue, programs } from "./programs-data";
import { programDestinations } from "./program-destinations";
import scenery from "@/assets/dora-programs-scenery.jpg";
import { participatePhotos } from "./program-folder-data";

const photos = participatePhotos;
const fellowship = photos[0];
const icons = {
  sprout: Sprout,
  mic: Mic,
  code: Code2,
  hammer: Hammer,
  snow: Snowflake,
  globe: Globe2,
  sparkles: Sparkles,
  people: Users,
  heart: Heart,
  smile: Smile,
};
const filters = ["All", "Learning", "Events", "Building", "More"];
const highlightIcons = {
  people: Users,
  reach: ChartNoAxesCombined,
  posts: FileText,
  globe: Globe2,
  heart: Heart,
};

export function ProgramsSection() {
  const [selected, setSelected] = useState(0);
  const [filter, setFilter] = useState("All");
  const [photo, setPhoto] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const program = programs[selected] ?? programs[0];
  const Icon = icons[program.icon];
  const movePhoto = (step: number) =>
    setPhoto((current) => (current + step + photos.length) % photos.length);

  return (
    <section
      id="programs"
      aria-labelledby="programs-title"
      className="programs-section text-community-ink"
    >
      <img loading="lazy" decoding="async" src={scenery} alt="" className="programs-scenery" />
      <div className="programs-inner">
        <header className="programs-heading">
          <div>
            <p className="programs-eyebrow">Ways to participate</p>
            <h2 id="programs-title">Ten pathways to learn, build, and belong.</h2>
          </div>
          <p className="programs-motto">
            Whether it’s your first line of code or your tenth hackathon, there is a seat saved for
            you.
          </p>
        </header>
        <div className="programs-layout">
          <div className="programs-gallery">
            <Button
              variant="ghost"
              className="programs-main-photo"
              aria-label="Open community photo gallery"
              onClick={() => setGalleryOpen(true)}
            >
              <img
                loading="lazy"
                decoding="async"
                src={(photos[photo] ?? fellowship)?.src}
                alt={
                  photo === 0
                    ? "GirlsWhoYap Fellowship community gathering"
                    : "DoraDAO community gathering"
                }
              />
              <span className="programs-photo-label">
                <Sparkles size={14} /> Community moments
              </span>
            </Button>
            <div className="programs-thumbnails">
              {photos.slice(1).map((item, index) => (
                <Button
                  key={item.src}
                  variant="ghost"
                  aria-label={`Show community photo ${index + 2}`}
                  aria-pressed={photo === index + 1}
                  onClick={() => setPhoto(index + 1)}
                >
                  <img
                    loading="lazy"
                    decoding="async"
                    src={item.src}
                    alt={`Community gathering ${index + 2}`}
                  />
                </Button>
              ))}
              <Button
                variant="ghost"
                size="icon"
                aria-label="Next community photo"
                onClick={() => movePhoto(1)}
                className="programs-next-photo"
              >
                <ArrowRight />
              </Button>
            </div>
          </div>
          <article className="programs-detail" aria-live="polite">
            <span className="programs-category">
              <Icon size={14} /> DoraDAO program
            </span>
            <h3>{program.name}</h3>
            <p className="programs-description">{program.description}</p>
            {selected === 0 ? (
              <>
                <div className="programs-eligibility">
                  <h4>Who can apply?</h4>
                  <ul>
                    {[
                      "Students and early-career professionals",
                      "Members of any Dora chapter",
                      "Builders with an idea to share",
                      "Anyone committed to the code of conduct",
                    ].map((item) => (
                      <li key={item}>
                        <CheckCircle2 size={16} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <div className="programs-program-mark">
                <Icon aria-hidden="true" />
                <span>{String(selected + 1).padStart(2, "0")} / 10</span>
              </div>
            )}
            <Button asChild className="programs-gallery-cta">
              <Link to={(programDestinations[selected] ?? programDestinations[0]).to}>
                Explore program <ArrowRight size={18} />
              </Link>
            </Button>
          </article>
          <div className="programs-directory">
            <div className="programs-filters" role="group" aria-label="Filter programs">
              {filters.map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  aria-pressed={filter === item}
                  onClick={() => setFilter(item)}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div className="programs-list" role="group" aria-label="DoraDAO programs">
              {programs.map((item, index) => {
                if (filter !== "All" && filter !== item.category) return null;
                const ItemIcon = icons[item.icon];
                return (
                  <Button
                    key={item.name}
                    variant="ghost"
                    className="programs-list-item"
                    aria-pressed={selected === index}
                    onClick={() => setSelected(index)}
                  >
                    <span className={`programs-icon programs-icon-${index % 4}`}>
                      <ItemIcon />
                    </span>
                    <span>{item.name}</span>
                    <ArrowRight size={17} />
                  </Button>
                );
              })}
            </div>
            <p className="programs-list-count">10 programs · One DoraDAO</p>
          </div>
        </div>
        <section
          className="programs-highlights"
          aria-labelledby="programs-highlights-title"
          aria-live="polite"
        >
          <h3 id="programs-highlights-title">Community highlights · {program.name}</h3>
          <dl className="programs-highlights-grid">
            {program.highlights.map((highlight, index) => {
              const HighlightIcon = highlightIcons[highlight.icon];
              return (
                <div key={highlight.label} className="programs-highlight">
                  <span className={`programs-highlight-icon programs-icon-${index % 4}`}>
                    <HighlightIcon aria-hidden="true" />
                  </span>
                  <div>
                    <dt>{highlight.label}</dt>
                    <dd>{formatHighlightValue(highlight.value)}</dd>
                  </div>
                </div>
              );
            })}
          </dl>
        </section>
      </div>
      <Dialog open={galleryOpen} onOpenChange={setGalleryOpen}>
        <DialogContent className="programs-dialog">
          <DialogTitle>Community moments</DialogTitle>
          <img
            loading="lazy"
            decoding="async"
            src={(photos[photo] ?? fellowship)?.src}
            alt="DoraDAO community gathering"
          />
          <div>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Previous gallery photo"
              onClick={() => movePhoto(-1)}
            >
              <ArrowLeft />
            </Button>
            <span>
              {photo + 1} / {photos.length}
            </span>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Next gallery photo"
              onClick={() => movePhoto(1)}
            >
              <ArrowRight />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
