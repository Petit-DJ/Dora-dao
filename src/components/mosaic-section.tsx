import { Globe, Handshake, Lightbulb, Play, Sparkles, Users } from "lucide-react";

import { speakerPortraits } from "@/components/speaker-portraits";

type Tile =
  | { kind: "photo"; image: string; alt: string }
  | {
      kind: "stat";
      icon: "play" | "globe" | "users" | "lightbulb" | "handshake" | "sparkles";
      value: string;
      label: string;
      tone: "green" | "peach" | "lilac" | "cream" | "gold";
    }
  | { kind: "quote"; text: string; tone: "cream" | "green" | "mint" };

const icons = {
  play: Play,
  globe: Globe,
  users: Users,
  lightbulb: Lightbulb,
  handshake: Handshake,
  sparkles: Sparkles,
};

const rows: { direction: "left" | "right"; tiles: Tile[] }[] = [
  {
    direction: "left",
    tiles: [
      { kind: "photo", ...speakerPortraits[0] },
      { kind: "stat", icon: "play", value: "10L+", label: "views across platforms", tone: "green" },
      { kind: "photo", ...speakerPortraits[1] },
      { kind: "quote", text: "Ideas grow here.", tone: "cream" },
      { kind: "photo", ...speakerPortraits[2] },
      {
        kind: "stat",
        icon: "sparkles",
        value: "600+",
        label: "pieces of community-made content",
        tone: "peach",
      },
      { kind: "photo", ...speakerPortraits[3] },
      { kind: "photo", ...speakerPortraits[4] },
      { kind: "photo", ...speakerPortraits[5] },
    ],
  },
  {
    direction: "right",
    tiles: [
      { kind: "stat", icon: "globe", value: "35+", label: "countries represented", tone: "gold" },
      { kind: "photo", ...speakerPortraits[6] },
      { kind: "stat", icon: "users", value: "1.5K+", label: "community members", tone: "lilac" },
      { kind: "photo", ...speakerPortraits[7] },
      {
        kind: "stat",
        icon: "lightbulb",
        value: "30+",
        label: "sessions & workshops",
        tone: "cream",
      },
      { kind: "quote", text: "Bring your ideas to life.", tone: "green" },
      { kind: "photo", ...speakerPortraits[8] },
      { kind: "photo", ...speakerPortraits[9] },
      { kind: "photo", ...speakerPortraits[10] },
      { kind: "photo", ...speakerPortraits[11] },
    ],
  },
  {
    direction: "left",
    tiles: [
      { kind: "photo", ...speakerPortraits[12] },
      { kind: "stat", icon: "handshake", value: "80+", label: "ecosystem partners", tone: "cream" },
      { kind: "photo", ...speakerPortraits[13] },
      { kind: "quote", text: "A kinder, more creative internet.", tone: "mint" },
      { kind: "photo", ...speakerPortraits[14] },
      { kind: "quote", text: "All walks of life.", tone: "cream" },
      { kind: "photo", ...speakerPortraits[15] },
      { kind: "photo", ...speakerPortraits[16] },
      { kind: "photo", ...speakerPortraits[17] },
    ],
  },
];

function TileCard({ tile }: { tile: Tile }) {
  if (tile.kind === "photo") {
    return (
      <li className="mosaic-tile mosaic-photo">
        <img
          src={tile.image}
          alt={tile.alt}
          loading="lazy"
          decoding="async"
          width={480}
          height={480}
        />
      </li>
    );
  }
  if (tile.kind === "stat") {
    const Icon = icons[tile.icon];
    return (
      <li className={`mosaic-tile mosaic-stat mosaic-tone-${tile.tone}`}>
        <Icon aria-hidden="true" className="mosaic-stat-icon" />
        <strong>{tile.value}</strong>
        <span>{tile.label}</span>
      </li>
    );
  }
  return (
    <li className={`mosaic-tile mosaic-quote mosaic-tone-${tile.tone}`}>
      <Sparkles aria-hidden="true" className="mosaic-quote-spark" />
      <p>{tile.text}</p>
    </li>
  );
}

export function MosaicSection() {
  return (
    <section
      id="community-mosaic"
      aria-labelledby="mosaic-title"
      className="mosaic-section relative z-10 text-community-ink"
    >
      <div className="mosaic-heading">
        <p className="mosaic-eyebrow">· Our people ·</p>
        <h2 id="mosaic-title" className="mosaic-title">
          18 voices, 35+ nations, <span className="text-hero-orange">one shared warmth</span>.
        </h2>
        <p className="home-story-people-note">
          High school students, university researchers, seasoned mentors, and creative minds.
        </p>
      </div>
      <div className="mosaic-rows">
        {rows.map((row, index) => (
          <div key={index} className="mosaic-window">
            <div className={`mosaic-track mosaic-track-${row.direction}`}>
              {[0, 1].map((copy) => (
                <ul key={copy} className="mosaic-group" aria-hidden={copy === 1 ? true : undefined}>
                  {row.tiles.map((tile, tileIndex) => (
                    <TileCard key={tileIndex} tile={tile} />
                  ))}
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
