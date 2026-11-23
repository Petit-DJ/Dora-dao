import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";
import { Input } from "@/components/ui/input";
import { SpeakerCard, SpeakerGridSkeleton, useSpeakers } from "@/components/speakers";

export const Route = createFileRoute("/speakers")({
  head: () => ({
    meta: [
      { title: "Speakers, the mentors and makers of DoraDAO" },
      { name: "description", content: "Meet the mentors, founders and makers who speak at DoraDAO sessions, with their roles, organisations and social profiles." },
      { property: "og:title", content: "DoraDAO Speakers" },
      { property: "og:description", content: "The people behind our live streams, mentor hangouts and speaker sessions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SpeakersPage,
});

function SpeakersPage() {
  const { speakers } = useSpeakers();
  const [query, setQuery] = useState("");
  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return (speakers ?? []).filter(s => !q || `${s.name} ${s.designation} ${s.company} ${s.topic}`.toLowerCase().includes(q));
  }, [speakers, query]);
  return (
    <>
      <SiteNavbar />
      <main className="gw-page sp-page">
        <header className="gw-heading">
          <p className="gw-eyebrow">Our speakers</p>
          <h1>The voices behind every session</h1>
          <p className="gw-intro">Mentors, founders and makers who show up for our community. Tap a profile to connect or watch their session.</p>
        </header>
        <div className="kb-toolbar">
          {speakers && <p className="sp-count">{shown.length} of {speakers.length} speakers</p>}
          <label className="kb-search"><Search aria-hidden /><span className="sr-only">Search speakers</span><Input type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search by name, role or company" /></label>
        </div>
        {speakers === null ? <SpeakerGridSkeleton count={12} />
          : shown.length === 0 ? <p className="gw-empty">No speakers match that search.</p>
          : <div className="sp-grid">{shown.map(s => <SpeakerCard key={s.id} speaker={s} />)}</div>}
      </main>
      <SiteFooter />
    </>
  );
}
