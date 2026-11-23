import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ExternalLink, Search } from "lucide-react";
import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RecordingCard, RecordingDialog } from "@/components/recordings";
import { CHANNEL_URL, filterRecordings, recordingFilters, recordings, type Recording, type RecordingFilter } from "@/components/recordings-data";

export const Route = createFileRoute("/recordings")({
  head: () => ({
    meta: [
      { title: "Knowledge Base, DoraDAO live streams and speaker sessions" },
      { name: "description", content: "Watch every DoraDAO recording: hackathon live streams, Hangout with Mentors and speaker sessions on building, careers and creativity." },
      { property: "og:title", content: "DoraDAO Knowledge Base" },
      { property: "og:description", content: "Live streams, mentor hangouts and speaker sessions from the DoraDAO community, all in one place." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RecordingsPage,
});

function RecordingsPage() {
  const [filter, setFilter] = useState<RecordingFilter>("all");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<Recording | null>(null);
  const shown = useMemo(() => filterRecordings(recordings, filter, query), [filter, query]);
  return (
    <>
      <SiteNavbar />
      <main className="gw-page kb-page">
        <header className="gw-heading">
          <p className="gw-eyebrow">Knowledge base</p>
          <h1>Every session, on demand</h1>
          <p className="gw-intro">Hackathon live streams, mentor hangouts and speaker sessions. Pick one, press play and learn at your own pace.</p>
        </header>
        <div className="kb-toolbar">
          <div className="gw-filters" role="group" aria-label="Filter recordings">
            {recordingFilters.map(f => {
              const count = filterRecordings(recordings, f.id, query).length;
              return <Button key={f.id} size="sm" variant={f.id === filter ? "default" : "outline"} aria-pressed={f.id === filter} onClick={() => setFilter(f.id)}>{f.label}<span className="gw-count">{count}</span></Button>;
            })}
          </div>
          <label className="kb-search"><Search aria-hidden /><span className="sr-only">Search recordings</span><Input type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search by title or speaker" /></label>
        </div>
        {shown.length === 0 ? <p className="gw-empty">No recordings match that search.</p>
          : <div className="kb-grid">{shown.map(r => <RecordingCard key={r.id} recording={r} onOpen={setOpen} />)}</div>}
        <div className="gw-more"><Button asChild size="lg" variant="outline"><a href={CHANNEL_URL} target="_blank" rel="noreferrer">Subscribe on YouTube<ExternalLink aria-hidden /></a></Button></div>
      </main>
      <SiteFooter />
      <RecordingDialog recording={open} onClose={() => setOpen(null)} />
    </>
  );
}
