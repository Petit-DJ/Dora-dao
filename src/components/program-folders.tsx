import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Images } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { programFolders } from "./program-folder-data";

export function ProgramFolders() {
  const track = useRef<HTMLDivElement>(null);
  const [folderIndex, setFolderIndex] = useState<number | null>(null);
  const [pictureIndex, setPictureIndex] = useState(0);
  const folder = folderIndex === null ? null : programFolders[folderIndex];
  const picture = folder?.pictures[pictureIndex];
  const movePicture = (step: number) => {
    if (!folder) return;
    setPictureIndex((current) => (current + step + folder.pictures.length) % folder.pictures.length);
  };
  const moveFolders = (step: number) => {
    const element = track.current;
    if (!element) return;
    element.scrollBy({ left: step * element.clientWidth * 0.8, behavior: "smooth" });
  };

  return <>
    <div className="world-social program-folder-section">
      <div className="world-social-copy">
        <p>DoraDAO</p>
        <h3>Program moments</h3>
        <p className="world-social-description">People, ideas, and the moments we share.</p>
        <Button className="world-more" onClick={() => moveFolders(1)}>Explore programs <ArrowRight /></Button>
      </div>
      <div className="program-folder-carousel">
        <div className="program-folder-toolbar"><span><Images size={16} /> {programFolders.length} programs</span><div>
          <Button variant="ghost" size="icon" aria-label="Previous program folders" title="Previous program folders" onClick={() => moveFolders(-1)}><ChevronLeft /></Button>
          <Button variant="ghost" size="icon" aria-label="Next program folders" title="Next program folders" onClick={() => moveFolders(1)}><ChevronRight /></Button>
        </div></div>
        <div ref={track} className="program-folder-track">
          {programFolders.map((item, index) => <Button key={item.name} variant="ghost" className={`program-folder program-folder-tone-${index % 3}`} aria-label={`Open ${item.name} gallery`} onClick={() => { setFolderIndex(index); setPictureIndex(0); }}>
            <span className="program-folder-art" aria-hidden="true">
              <span className="program-folder-back" />
              {item.pictures.slice(0, 3).map((image, position) => <span className={`program-folder-print program-folder-print-${position}`} key={image.src}><img src={image.src} alt="" loading="lazy" /></span>)}
              <span className="program-folder-front"><span className="program-folder-details"><span className="program-folder-name">{item.name}</span><span className="program-folder-count">{item.pictures.length} pictures</span></span><span className="program-folder-seal"><Images /><span>DoraDAO</span></span></span>
            </span>
          </Button>)}
        </div>
      </div>
    </div>
    <Dialog open={folderIndex !== null} onOpenChange={(open) => { if (!open) setFolderIndex(null); }}>
      <DialogContent className="program-folder-dialog" onKeyDown={(event) => { if (event.key === "ArrowRight") movePicture(1); if (event.key === "ArrowLeft") movePicture(-1); }}>
        <header><DialogTitle>{folder?.name}</DialogTitle><DialogDescription>{folder?.pictures.length} pictures from this program</DialogDescription></header>
        {picture && <div className="program-folder-viewer"><img loading="lazy" decoding="async" key={picture.src} src={picture.src} alt={picture.alt} /><Button variant="ghost" size="icon" className="program-folder-prev" aria-label="Previous picture" onClick={() => movePicture(-1)}><ArrowLeft /></Button><Button variant="ghost" size="icon" className="program-folder-next" aria-label="Next picture" onClick={() => movePicture(1)}><ArrowRight /></Button></div>}
        <div className="program-folder-gallery-footer"><span aria-live="polite">{pictureIndex + 1} / {folder?.pictures.length ?? 0}</span><div className="program-folder-thumbnails">{folder?.pictures.map((image, index) => <Button key={image.src} variant="ghost" aria-label={`Show picture ${index + 1}`} aria-pressed={pictureIndex === index} onClick={() => setPictureIndex(index)}><img loading="lazy" decoding="async" src={image.src} alt="" /></Button>)}</div></div>
      </DialogContent>
    </Dialog>
  </>;
}