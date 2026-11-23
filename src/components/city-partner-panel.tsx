import { useEffect, useState } from 'react';
import { ArrowUpRight, Clock3, Code2, LockKeyhole, Mail, MapPin, Rocket, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import dora from '@/assets/csr/mentoring-girl.png';
import { communityDirectories, hostEventHref, type CityLocation } from './world-partners-data';
import { countryFlag } from './world-map-layout';

function CityClock({ city }: { city: CityLocation }) {
  const [time, setTime] = useState('');
  useEffect(() => {
    let cancelled = false;
    let timer: number | undefined;
    setTime('');
    void import('tz-lookup').then(({ default: lookup }) => {
      if (cancelled) return;
      const timezone = lookup(city.lat, city.lng);
      const update = () => setTime(new Intl.DateTimeFormat('en', { timeZone: timezone, hour: '2-digit', minute: '2-digit', timeZoneName: 'short' }).format(new Date()));
      update();
      timer = window.setInterval(update, 30000);
    }).catch(() => { if (!cancelled) setTime('Local time unavailable'); });
    return () => { cancelled = true; if (timer !== undefined) window.clearInterval(timer); };
  }, [city.lat, city.lng]);
  return <span><Clock3 size={14} /><time>{time || 'Local time'}</time></span>;
}
const icons = [Code2, Rocket, Code2, Users];
const tones = ['google', 'startup', 'python', 'meetup'];
export function CityPartnerPanel({ city, onClose }: { city: CityLocation | null; onClose: () => void }) {
  const isMobile = useIsMobile();
  const [touchStart, setTouchStart] = useState<number | null>(null);
  return <Sheet open={Boolean(city)} onOpenChange={open => { if (!open) onClose(); }}>
    <SheetContent className="city-partner-panel" overlayClassName="city-panel-overlay" side={isMobile ? 'bottom' : 'right'}>
      {city && <>
        {isMobile && <div className="city-panel-grab" onTouchStart={e => setTouchStart(e.touches[0]?.clientY ?? null)} onTouchEnd={e => { const end = e.changedTouches[0]?.clientY; if (touchStart !== null && end !== undefined && end - touchStart > 60) onClose(); setTouchStart(null); }}><div className="city-panel-handle" aria-hidden="true" /></div>}
        <SheetHeader className="city-dossier-heading">
          <p className="city-panel-eyebrow"><MapPin size={14} /> THE NEXT CONNECTION</p>
          <span className="city-dossier-flag" aria-hidden="true">{countryFlag(city.country.code)}</span>
          <SheetTitle className="city-panel-title">{city.name}</SheetTitle>
          <SheetDescription>{city.state.name} · {city.country.name}</SheetDescription>
          <div className="city-dossier-meta"><CityClock city={city} /><span>{Math.abs(city.lat).toFixed(2)}° {city.lat >= 0 ? 'N' : 'S'} · {Math.abs(city.lng).toFixed(2)}° {city.lng >= 0 ? 'E' : 'W'}</span></div>
        </SheetHeader>
        <div className="city-panel-body">
          <div className="city-directory-heading"><h3>Find your local community</h3><span>{String(communityDirectories.length).padStart(2, '0')}</span></div>
          <p className="city-panel-note">Explore these networks for local chapters and their social channels.</p>
          <div className="city-community-list">{communityDirectories.map((community, i) => { const Icon = icons[i] ?? Users; return <Button key={community.name} asChild variant="ghost" className="city-community-link"><a href={community.href} target="_blank" rel="noopener noreferrer"><span className="city-community-icon" data-platform={tones[i]}><Icon size={21} /></span><span><strong>{community.name}</strong><small>{community.kind}</small></span><ArrowUpRight size={17} /><span className="sr-only"> (opens in a new tab)</span></a></Button>; })}</div>
          <div className="city-private-partners"><h3><LockKeyhole size={16} /> Room for the unexpected</h3>
            <div className="city-frosted-partners"><div className="city-blurred-list" aria-hidden="true">{[0, 1, 2, 3, 4].map(i => <div key={i}><span><Users size={18} /></span><i /><i /></div>)}</div><div className="city-partner-lock"><LockKeyhole size={19} /><strong>Your next introduction?</strong><span>Let’s start a conversation.</span></div></div>
          </div>
        </div>
        <div className="city-panel-cta"><img src={dora} alt="" loading="lazy" decoding="async" /><div><p>A little curiosity.<br /><strong>A gathering in {city.name}.</strong></p><span>Bring your people, place or next big idea.</span></div><Button asChild><a href={hostEventHref(city)}><Mail size={17} /><span>Get in touch to host an event</span><ArrowUpRight size={17} /></a></Button></div>
      </>}
    </SheetContent>
  </Sheet>;
}
