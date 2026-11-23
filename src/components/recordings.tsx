import { ExternalLink, Play } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { formatLength, kindLabel, recordingEmbed, recordingThumb, recordingUrl, type Recording } from "./recordings-data";

export function RecordingCard({ recording, onOpen }: { recording: Recording; onOpen: (r: Recording) => void }) {
  const r = recording;
  return (
    <button type="button" className={`kb-card kb-card-${r.kind}`} onClick={() => onOpen(r)} aria-label={`Play ${r.title}${r.part ? `, part ${r.part}` : ""}`}>
      <span className="kb-thumb">
        <img src={recordingThumb(r.id)} alt="" loading="lazy" decoding="async" width={320} height={180} />
        <span className="kb-play" aria-hidden><Play fill="currentColor" /></span>
        <span className="kb-length">{formatLength(r.minutes)}</span>
      </span>
      <span className="kb-body">
        <span className="kb-kind">{kindLabel[r.kind]}</span>
        <strong className="kb-title">{r.title}{r.part ? <span className="kb-part"> · Part {r.part}</span> : null}</strong>
        <span className="kb-meta">{r.views.toLocaleString("en")} views{r.published ? ` · ${new Date(r.published).toLocaleDateString("en", { month: "short", year: "numeric" })}` : ""}</span>
      </span>
    </button>
  );
}

export function RecordingDialog({ recording, onClose }: { recording: Recording | null; onClose: () => void }) {
  return (
    <Dialog open={recording !== null} onOpenChange={open => { if (!open) onClose(); }}>
      <DialogContent className="gw-dialog podcast-dialog">
        <DialogTitle>{recording?.title}{recording?.part ? ` · Part ${recording.part}` : ""}</DialogTitle>
        <DialogDescription>{recording ? `${kindLabel[recording.kind]} · ${formatLength(recording.minutes)}` : ""}</DialogDescription>
        {recording && <div className="gw-embed"><iframe src={recordingEmbed(recording.id)} title={recording.title} allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowFullScreen /></div>}
        {recording && <div className="gw-links"><a href={recordingUrl(recording.id)} target="_blank" rel="noreferrer"><ExternalLink aria-hidden />Watch on YouTube</a></div>}
      </DialogContent>
    </Dialog>
  );
}
