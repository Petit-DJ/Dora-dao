import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Download, ExternalLink, Linkedin, Loader2, Play, Search } from "lucide-react";
import {
  companies,
  featuredDownloads,
  featuredSession,
  linkedinEvents,
  sessions,
  speakers,
  type EventLink,
} from "@/data/sessions";
import { Section, usePrefersReducedMotion } from "./shared";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const spots = [
  { left: "6%", top: "10%" },
  { left: "70%", top: "8%" },
  { left: "80%", top: "60%" },
  { left: "10%", top: "70%" },
  { left: "45%", top: "5%" },
  { left: "40%", top: "78%" },
];

function PoppingLogos() {
  const [tick, setTick] = useState(0);
  const reduced = usePrefersReducedMotion();
  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => setTick((x) => x + 1), 1800);
    return () => clearInterval(t);
  }, [reduced]);
  const shown = [0, 1, 2].map((k) => ({
    name: companies[(tick + k * 3) % companies.length],
    spot: spots[(tick + k * 2) % spots.length],
  }));
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {shown.map((s) => (
        <span
          key={`${tick}-${s.name}`}
          className="absolute animate-pop rounded-full bg-background/90 px-3 py-1 text-xs font-semibold shadow"
          style={s.spot}
        >
          {s.name}
        </span>
      ))}
    </div>
  );
}

async function downloadFile(url: string, name: string) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(String(res.status));
    const blob = await res.blob();
    const href = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = href;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(href), 1000);
  } catch {
    const a = document.createElement("a");
    a.href = url;
    a.download = name;
    a.click();
  }
}

function DownloadPicker() {
  const [q, setQ] = useState(0);
  const [busy, setBusy] = useState(false);
  const opt = featuredDownloads[q]!;
  return (
    <div className="flex items-center gap-2">
      <select
        aria-label="Video quality"
        value={q}
        onChange={(e) => setQ(Number(e.target.value))}
        className="h-10 rounded-token border bg-background px-2 text-sm"
      >
        {featuredDownloads.map((d, i) => (
          <option key={d.label} value={i}>
            {d.label}
          </option>
        ))}
      </select>
      <Button
        variant="outline"
        disabled={busy}
        onClick={async () => {
          setBusy(true);
          const slug = featuredSession.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
          await downloadFile(opt.url, `${slug}-${opt.label.split(" ")[0]}.mp4`);
          setBusy(false);
        }}
      >
        {busy ? <Loader2 className="animate-spin" /> : <Download />} Download
      </Button>
    </div>
  );
}

/** LinkedIn event card — opens LinkedIn in new tab since embedding is blocked */
function LinkedInEventCard({ e }: { e: EventLink }) {
  return (
    <a
      href={e.url}
      target="_blank"
      rel="noreferrer"
      className="group block h-full w-full overflow-hidden rounded-token border bg-card text-left transition hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label={`Watch LinkedIn event: ${e.title}`}
    >
      <div className="relative bg-muted">
        {/* Decorative gradient cover since LinkedIn blocks preview images */}
        <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition group-hover:scale-110">
            <Play className="h-6 w-6 fill-current" />
          </span>
        </div>
        <span className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-primary px-2 py-0.5 text-xs font-semibold text-primary-foreground">
          <Linkedin className="h-3 w-3" /> Live event
        </span>
      </div>
      <div className="p-3">
        <p className="font-medium leading-snug">{e.title}</p>
        <p className="mt-1 text-xs text-muted-foreground">{e.host} · {e.date}</p>
        <p className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-primary">
          <ExternalLink className="h-3 w-3" /> Watch on LinkedIn
        </p>
      </div>
    </a>
  );
}

const uniq = <T,>(a: T[]) => Array.from(new Set(a));

export function Sessions() {
  const [playing, setPlaying] = useState(false);
  const [type, setType] = useState("All");
  const [q, setQ] = useState("");

  const people = speakers.filter(
    (s) =>
      (type === "All" || s.type === type) &&
      `${s.name} ${s.company} ${s.role}`.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <Section id="sessions" title="Media &amp; sessions" subtitle="Watch. Learn. Be inspired.">
      {/* Featured video */}
      <div className="relative overflow-hidden rounded-token border bg-muted">
        <div className="relative aspect-video">
          {playing ? (
            <video
              src={featuredSession.videoUrl}
              poster={featuredSession.poster}
              controls
              autoPlay
              className="h-full w-full object-cover"
            />
          ) : (
            <>
              <img
                src={featuredSession.poster}
                alt={featuredSession.title}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <PoppingLogos />
            </>
          )}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 bg-card p-4">
          <div>
            <p className="font-semibold">{featuredSession.title}</p>
            <p className="text-sm text-muted-foreground">{featuredSession.speaker}</p>
          </div>
          <div className="flex gap-2">
            <Button onClick={() => setPlaying(true)}>
              <Play /> Watch
            </Button>
            <DownloadPicker />
          </div>
        </div>
      </div>

      {/* Live Events on LinkedIn */}
      <div className="mt-10 flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-2xl font-semibold">Live events on LinkedIn</h3>
        <a
          href="https://www.linkedin.com/company/connectdoradao/events/?viewAsMember=true"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          See More <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
      <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {linkedinEvents.map((e) => (
          <li key={e.id}>
            <LinkedInEventCard e={e} />
          </li>
        ))}
      </ul>

      {/* Sessions — exactly 4 cards, one row */}
      <div className="mt-10 flex flex-wrap items-end justify-between gap-4">
        <h3 className="text-2xl font-semibold">Sessions</h3>
      </div>
      <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {sessions.map((s) => (
          <li key={s.id} className="overflow-hidden rounded-token border bg-card">
            <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                <Play className="h-5 w-5 fill-current" />
              </span>
              <span className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-primary px-2 py-0.5 text-xs font-semibold text-primary-foreground">
                <Linkedin className="h-3 w-3" /> Session
              </span>
            </div>
            <div className="p-4">
              <p className="font-medium">{s.title}</p>
              <p className="text-sm text-muted-foreground">{s.program} · {s.year}</p>
              <div className="mt-3 flex gap-2">
                <Button size="sm" asChild>
                  <a href={s.watchUrl} target="_blank" rel="noreferrer">
                    <Play /> Watch on LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {/* See More sessions */}
      <div className="mt-6 flex justify-center">
        <a
          href="https://www.linkedin.com/company/connectdoradao/posts/?feedView=videos"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/5 px-6 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          See More sessions <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Speakers & Mentors */}
      <div className="mt-12 flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4">
          <h3 className="text-2xl font-semibold">Speakers and mentors</h3>
          <Link
            to="/voices"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            See More <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="flex flex-wrap items-end gap-3">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              aria-label="Search speakers"
              placeholder="Search name or company"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="pl-9"
            />
          </div>
          <label className="flex flex-col text-xs text-muted-foreground">
            Type
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="mt-1 h-10 rounded-token border bg-background px-3 text-sm text-foreground"
            >
              {["All", ...uniq(speakers.map((s) => s.type))].map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </label>
        </div>
      </div>
      <ul className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {people.map((p) => (
          <li key={p.id}>
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="block rounded-token border bg-card p-4 text-center transition hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <img
                src={p.photo}
                alt={p.name}
                loading="lazy"
                className="mx-auto h-20 w-20 rounded-full object-cover"
              />
              <p className="mt-3 font-medium">{p.name}</p>
              <p className="text-sm text-muted-foreground">
                {p.role}, {p.company}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{p.type}</p>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
