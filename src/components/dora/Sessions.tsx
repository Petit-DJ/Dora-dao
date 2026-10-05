import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Download, ExternalLink, Linkedin, Loader2, Play, Search } from "lucide-react";
import { companies, featuredDownloads, featuredSession, linkedinEvents, sessions, speakers, type EventLink } from "@/data/sessions";
import { Section, usePrefersReducedMotion } from "./shared";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

const spots = [
  { left: "6%", top: "10%" }, { left: "70%", top: "8%" }, { left: "80%", top: "60%" },
  { left: "10%", top: "70%" }, { left: "45%", top: "5%" }, { left: "40%", top: "78%" },
];

function PoppingLogos() {
  const [tick, setTick] = useState(0);
  const reduced = usePrefersReducedMotion();
  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => setTick((x) => x + 1), 1800);
    return () => clearInterval(t);
  }, [reduced]);
  const shown = [0, 1, 2].map((k) => ({ name: companies[(tick + k * 3) % companies.length], spot: spots[(tick + k * 2) % spots.length] }));
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {shown.map((s) => (
        <span key={`${tick}-${s.name}`} className="absolute animate-pop rounded-full bg-background/90 px-3 py-1 text-xs font-semibold shadow" style={s.spot}>{s.name}</span>
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
    a.href = href; a.download = name; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(href), 1000);
  } catch {
    const a = document.createElement("a");
    a.href = url; a.download = name; a.click();
  }
}

function DownloadPicker() {
  const [q, setQ] = useState(0);
  const [busy, setBusy] = useState(false);
  const opt = featuredDownloads[q]!;
  return (
    <div className="flex items-center gap-2">
      <select aria-label="Video quality" value={q} onChange={(e) => setQ(Number(e.target.value))} className="h-10 rounded-token border bg-background px-2 text-sm">
        {featuredDownloads.map((d, i) => <option key={d.label} value={i}>{d.label}</option>)}
      </select>
      <Button variant="outline" disabled={busy} onClick={async () => {
        setBusy(true);
        const slug = featuredSession.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        await downloadFile(opt.url, `${slug}-${opt.label.split(" ")[0]}.mp4`);
        setBusy(false);
      }}>{busy ? <Loader2 className="animate-spin" /> : <Download />} Download</Button>
    </div>
  );
}

const uniq = <T,>(a: T[]) => Array.from(new Set(a));

export function Sessions() {
  const [playing, setPlaying] = useState(false);
  const [program, setProgram] = useState("All");
  const [year, setYear] = useState("All");
  const [topic, setTopic] = useState("All");
  const [q, setQ] = useState("");
  const [type, setType] = useState("All");
  const [activeEvent, setActiveEvent] = useState<EventLink | null>(null);

  const filtered = sessions.filter((s) => (program === "All" || s.program === program) && (year === "All" || String(s.year) === year) && (topic === "All" || s.topic === topic));
  const people = useMemo(() => speakers.filter((s) => (type === "All" || s.type === type) && `${s.name} ${s.company} ${s.role}`.toLowerCase().includes(q.toLowerCase())), [q, type]);

  const select = (label: string, value: string, set: (v: string) => void, opts: string[]) => (
    <label className="flex flex-col text-xs text-muted-foreground">
      {label}
      <select value={value} onChange={(e) => set(e.target.value)} className="mt-1 h-10 rounded-token border bg-background px-3 text-sm text-foreground">
        {["All", ...opts].map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );

  return (
    <Section id="sessions" title="Media & sessions" subtitle="Watch. Learn. Be inspired.">
      <div className="relative overflow-hidden rounded-token border bg-muted">
        <div className="relative aspect-video">
          {playing ? (
            <video src={featuredSession.videoUrl} poster={featuredSession.poster} controls autoPlay className="h-full w-full object-cover" />
          ) : (
            <>
              <img src={featuredSession.poster} alt={featuredSession.title} loading="lazy" className="h-full w-full object-cover" />
              <PoppingLogos />
            </>
          )}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 bg-card p-4">
          <div><p className="font-semibold">{featuredSession.title}</p><p className="text-sm text-muted-foreground">{featuredSession.speaker}</p></div>
          <div className="flex gap-2">
            <Button onClick={() => setPlaying(true)}><Play /> Watch</Button>
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
            <button type="button" onClick={() => setActiveEvent(e)} className="group block h-full w-full overflow-hidden rounded-token border bg-card text-left transition hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <div className="relative">
                <img src={e.cover} alt="" loading="lazy" className="aspect-video w-full object-cover" />
                <span className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-primary px-2 py-0.5 text-xs font-semibold text-primary-foreground"><Linkedin className="h-3 w-3" /> Event</span>
                <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/20">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition group-hover:scale-110"><Play className="h-5 w-5 fill-current" /></span>
                </span>
              </div>
              <div className="p-3">
                <p className="font-medium leading-snug">{e.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">{e.host} · {e.date}</p>
                <p className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-primary"><Play className="h-3 w-3" /> Watch here</p>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <Dialog open={activeEvent !== null} onOpenChange={(open) => { if (!open) setActiveEvent(null); }}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          {activeEvent && (
            <>
              <div className="aspect-video bg-black">
                <video key={activeEvent.id} src={activeEvent.videoUrl} poster={activeEvent.cover} controls autoPlay className="h-full w-full" />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 p-4">
                <div>
                  <DialogTitle className="text-base">{activeEvent.title}</DialogTitle>
                  <DialogDescription>{activeEvent.host} · {activeEvent.date}</DialogDescription>
                </div>
                <Button variant="outline" size="sm" onClick={() => void downloadFile(activeEvent.videoUrl, `${activeEvent.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.mp4`)}>
                  <Download /> Download
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Sessions */}
      <div className="mt-10 flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4">
          <h3 className="text-2xl font-semibold">Sessions</h3>
          <a
            href="https://www.linkedin.com/company/connectdoradao/posts/?feedView=videos"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            See More <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
        <div className="flex flex-wrap gap-3">
          {select("Program", program, setProgram, uniq(sessions.map((s) => s.program)))}
          {select("Year", year, setYear, uniq(sessions.map((s) => String(s.year))))}
          {select("Topic", topic, setTopic, uniq(sessions.map((s) => s.topic)))}
        </div>
      </div>
      <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((s) => (
          <li key={s.id} className="overflow-hidden rounded-token border bg-card">
            <img src={s.cover} alt="" loading="lazy" className="aspect-video w-full object-cover" />
            <div className="p-4">
              <p className="font-medium">{s.title}</p>
              <p className="text-sm text-muted-foreground">{s.speaker} · {s.program} · {s.year}</p>
              <div className="mt-3 flex gap-2">
                <Button size="sm" asChild><a href={s.watchUrl}><Play /> Watch online</a></Button>
                <Button size="sm" variant="outline" asChild><a href={s.downloadUrl}><Download /> Download</a></Button>
              </div>
            </div>
          </li>
        ))}
        {filtered.length === 0 && <li className="text-muted-foreground">No sessions match these filters.</li>}
      </ul>

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
            <Input aria-label="Search speakers" placeholder="Search name or company" value={q} onChange={(e) => setQ(e.target.value)} className="pl-9" />
          </div>
          {select("Type", type, setType, ["Speaker", "Mentor"])}
        </div>
      </div>
      <ul className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {people.map((p) => (
          <li key={p.id}>
            <a href={p.url} target="_blank" rel="noreferrer" className="block rounded-token border bg-card p-4 text-center transition hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <img src={p.photo} alt={p.name} loading="lazy" className="mx-auto h-20 w-20 rounded-full object-cover" />
              <p className="mt-3 font-medium">{p.name}</p>
              <p className="text-sm text-muted-foreground">{p.role}, {p.company}</p>
              <p className="mt-1 text-xs text-muted-foreground">{p.type}</p>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
