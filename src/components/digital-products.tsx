import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Award, BookOpen, Check, ExternalLink, LoaderCircle, Pause, Play, Rocket, RotateCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { digitalProducts } from './digital-products-data';

const icons = [Award, BookOpen, Rocket];

export function DigitalProducts() {
  const [active, setActive] = useState(0);
  const [visited, setVisited] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [slow, setSlow] = useState(false);
  const [revision, setRevision] = useState(0);
  const section = useRef<HTMLElement>(null);
  const product = digitalProducts[active] ?? digitalProducts[0];
  useEffect(() => {
    const element = section.current;
    if (!element) return;
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        setVisited(true);
        if (window.matchMedia('(min-width: 768px)').matches && !(navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData) setEnabled(true);
        observer.disconnect();
      }
    }, { rootMargin: '0px' });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    setLoaded(false); setSlow(false);
    if (!enabled) return;
    const timeout = window.setTimeout(() => setSlow(true), 15000);
    return () => window.clearTimeout(timeout);
  }, [active, enabled, revision]);
  const choose = (index: number) => { setActive(index); setInteractive(false); };
  return <section id="digital" className="pd-sec digital-suite" ref={section} aria-labelledby="digital-title">
    <header className="digital-heading"><p className="digital-eyebrow">Made for hoomans who make things</p><h2 id="digital-title">Our digital <span>products.</span></h2><p>Celebrate a milestone. Tell your story. Launch an idea. A little less admin, a lot more possibility.</p></header>
    <div className="digital-console">
      <div className="digital-details">
        <div className="digital-tabs" role="tablist" aria-label="Digital products">
          {digitalProducts.map((item, index) => { const Icon = icons[index] ?? Award; return <Button key={item.id} variant="ghost" role="tab" id={`digital-tab-${item.id}`} aria-selected={index === active} aria-controls="digital-product-panel" tabIndex={index === active ? 0 : -1} data-tone={item.tone} onClick={() => choose(index)} onKeyDown={event => { if (['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft', 'Home', 'End'].includes(event.key)) { event.preventDefault(); const next = event.key === 'Home' ? 0 : event.key === 'End' ? 2 : (active + (['ArrowDown', 'ArrowRight'].includes(event.key) ? 1 : 2)) % 3; choose(next); document.getElementById(`digital-tab-${digitalProducts[next]?.id}`)?.focus(); } }}><span className="digital-product-icon"><Icon size={22} /></span><span><strong>{item.name}</strong><small>{item.category}</small></span><ArrowRight size={17} /></Button>; })}
        </div>
        <div id="digital-product-panel" role="tabpanel" aria-labelledby={`digital-tab-${product.id}`} className="digital-product-copy">
          <h3>{product.headline}</h3><p>{product.description}</p><ul>{product.features.map(feature => <li key={feature}><Check size={15} />{feature}</li>)}</ul>
          <div className="digital-actions"><Button asChild className="digital-launch"><a href={product.url} target="_blank" rel="noopener noreferrer">Open {product.name}<ExternalLink size={15} /></a></Button><Button asChild variant="link"><a href={`mailto:Connectdoradao@gmail.com?subject=${encodeURIComponent(`${product.name} for our community`)}`}>For your community<ArrowRight size={15} /></a></Button></div>
        </div>
      </div>
      <div className="digital-browser" data-tone={product.tone}>
        <div className="digital-browser-bar"><span className="digital-browser-dots" aria-hidden="true"><i /><i /><i /></span><span className="digital-address">{new URL(product.url).hostname}</span><Button variant="ghost" size="icon" aria-label="Reload live preview" title="Reload live preview" disabled={!enabled} onClick={() => { setLoaded(false); setRevision(value => value + 1); }}><RotateCw size={15} /></Button><Button variant="ghost" size="icon" aria-label={enabled ? 'Pause live preview' : 'Load live preview'} title={enabled ? 'Pause live preview' : 'Load live preview'} onClick={() => { setEnabled(!enabled); setInteractive(false); }}>{enabled ? <Pause size={15} /> : <Play size={15} />}</Button></div>
        <div className="digital-preview">
          {visited && enabled && <iframe key={`${product.id}-${revision}`} src={product.url} title={`${product.name} live app`} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" tabIndex={interactive ? 0 : -1} className={interactive ? 'is-interactive' : ''} onLoad={() => setLoaded(true)} />}
          {!enabled ? <div className="digital-preview-gate"><span className="digital-gate-icon">{active === 0 ? <Award size={40} /> : active === 1 ? <BookOpen size={40} /> : <Rocket size={40} />}</span><h3>{product.name}</h3><Button className="digital-launch" onClick={() => { setEnabled(true); setInteractive(true); }}><Play size={16} />Load live preview</Button></div> : !loaded ? <div className="digital-preview-gate" role="status"><LoaderCircle className="digital-spinner" size={26} /><p>{slow ? 'Taking a little longer to connect.' : `Opening ${product.name}…`}</p>{slow && <Button asChild variant="outline"><a href={product.url} target="_blank" rel="noopener noreferrer">Open app<ExternalLink size={15} /></a></Button>}</div> : !interactive && <Button variant="ghost" className="digital-preview-shield" aria-label={`Interact with ${product.name} live preview`} onClick={() => setInteractive(true)}><span><Play size={15} />Try the live app</span></Button>}
        </div>
        <div className="digital-browser-footer"><span><i />{enabled ? 'Live product' : 'Preview paused'}</span>{interactive ? <Button variant="ghost" onClick={() => setInteractive(false)}>Stop interacting</Button> : <Button asChild variant="ghost"><a href={product.url} target="_blank" rel="noopener noreferrer">Open full screen<ExternalLink size={13} /></a></Button>}</div>
      </div>
    </div>
  </section>;
}