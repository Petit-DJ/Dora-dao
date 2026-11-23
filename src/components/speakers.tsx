import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Linkedin, Mic, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fallbackSpeakers, fetchSpeakers, initials, pickShowcase, type Speaker } from "./speakers-data";
import { recordingUrl } from "./recordings-data";

/** Live sheet rows when available; otherwise the guests named in our session recordings. */
export function useSpeakers(): { speakers: Speaker[] | null; fromSheet: boolean } {
  const [state, setState] = useState<{ speakers: Speaker[] | null; fromSheet: boolean }>({ speakers: null, fromSheet: false });
  useEffect(() => {
    let alive = true;
    fetchSpeakers()
      .then(list => { if (alive) setState(list.length ? { speakers: list, fromSheet: true } : { speakers: fallbackSpeakers, fromSheet: false }); })
      .catch(() => { if (alive) setState({ speakers: fallbackSpeakers, fromSheet: false }); });
    return () => { alive = false; };
  }, []);
  return state;
}

function SpeakerPhoto({ speaker }: { speaker: Speaker }) {
  const [broken, setBroken] = useState(false);
  if (speaker.photo && !broken) return <img src={speaker.photo} alt={`Portrait of ${speaker.name}`} loading="lazy" decoding="async" referrerPolicy="no-referrer" width={240} height={240} onError={() => setBroken(true)} />;
  return <span className="sp-initials" aria-hidden>{initials(speaker.name)}</span>;
}

export function SpeakerCard({ speaker }: { speaker: Speaker }) {
  const s = speaker;
  const role = [s.designation, s.company].filter(Boolean).join(" · ");
  return (
    <article className="sp-card">
      <div className="sp-photo"><SpeakerPhoto speaker={s} /></div>
      <h3 className="sp-name">{s.name}</h3>
      {role && <p className="sp-role">{role}</p>}
      {s.topic && <p className="sp-topic">{s.topic}</p>}
      {(s.linkedin || s.twitter || s.session) && <div className="sp-links">
        {s.linkedin && <a href={s.linkedin} target="_blank" rel="noreferrer" aria-label={`${s.name} on LinkedIn`}><Linkedin aria-hidden /></a>}
        {s.twitter && <a href={s.twitter} target="_blank" rel="noreferrer" aria-label={`${s.name} on X`}><span aria-hidden>𝕏</span></a>}
        {s.session && <a href={recordingUrl(s.session)} target="_blank" rel="noreferrer" className="sp-session"><Play aria-hidden fill="currentColor" />Watch session</a>}
      </div>}
    </article>
  );
}

export function SpeakerGridSkeleton({ count }: { count: number }) {
  return <div className="sp-grid" aria-busy="true">{Array.from({ length: count }, (_, i) => <span key={i} className="sp-card sp-skeleton" />)}</div>;
}

export function SpeakersSection() {
  const { speakers } = useSpeakers();
  const showcase = speakers ? pickShowcase(speakers) : [];
  return (
    <section id="speakers" aria-labelledby="speakers-title" className="sp-section">
      <div className="gw-inner">
        <header className="gw-heading">
          <p className="gw-eyebrow">On the mic <Mic aria-hidden /></p>
          <h2 id="speakers-title">Meet our speakers</h2>
          <p className="gw-intro">Mentors, founders and makers who have shared their stories, skills and late-night wisdom with our hoomans.</p>
        </header>
        {speakers === null ? <SpeakerGridSkeleton count={8} />
          : <div className="sp-grid">{showcase.map(s => <SpeakerCard key={s.id} speaker={s} />)}</div>}
        <div className="gw-more">
          <Button asChild size="lg" className="gw-cta"><Link to="/speakers">View all speakers {speakers ? `(${speakers.length})` : ""}<ArrowRight aria-hidden /></Link></Button>
        </div>
      </div>
    </section>
  );
}
