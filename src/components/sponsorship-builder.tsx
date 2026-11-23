import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Check, Mail, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { partnershipDraft, planningAllocation, sponsorObjectives, sponsorTimelines, sponsorshipOpportunities } from './sponsorship-data';
export function SponsorshipBuilder() {
 const [objective, setObjective] = useState(sponsorObjectives[0] ?? 'Brand awareness');
 const [selected, setSelected] = useState<string[]>(['content']);
 const [budget, setBudget] = useState(1000);
 const [unsure, setUnsure] = useState(false);
 const [timeline, setTimeline] = useState('Within 1 month');
 const [notice, setNotice] = useState('');
 const money = (n: number) => new Intl.NumberFormat('en-US', {style:'currency',currency:'USD',maximumFractionDigits:0}).format(n);
 function submit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  if (!selected.length) { setNotice('Choose at least one activation to include in your brief.'); return; }
  const form = new FormData(event.currentTarget);
  const href = partnershipDraft({name:String(form.get('name') ?? ''),email:String(form.get('email') ?? ''),company:String(form.get('company') ?? ''),objective,activations:selected.map(id => sponsorshipOpportunities.find(o => o.id === id)?.category ?? id),budget:unsure ? null : budget,timeline,note:String(form.get('note') ?? '')});
  window.location.href = href;
  setNotice('Your email draft is ready to open. Send it from your email app to complete the enquiry. If it doesn’t open, email Connectdoradao@gmail.com.');
 }
 return <form onSubmit={submit} className="sp-builder-form">
  <div className="sp-builder-fields">
   <div className="sp-field"><label htmlFor="sp-objective"><span>01</span> What is your primary objective?</label><Select value={objective} onValueChange={setObjective}><SelectTrigger id="sp-objective"><SelectValue /></SelectTrigger><SelectContent>{sponsorObjectives.map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent></Select></div>
   <fieldset className="sp-field"><legend><span>02</span> Which activations interest you?</legend><div className="sp-activation-options">{sponsorshipOpportunities.map(o => <label key={o.id} className="sp-check-option" data-selected={selected.includes(o.id)}><Checkbox checked={selected.includes(o.id)} onCheckedChange={checked => {setSelected(checked ? [...selected,o.id] : selected.filter(id => id !== o.id));setNotice('');}} />{o.category}</label>)}</div></fieldset>
   <div className="sp-field"><label htmlFor="sp-budget"><span>03</span> What’s your approximate budget?</label><div className="sp-budget-input"><span>USD $</span><Input id="sp-budget" type="number" min={100} max={50000} step={50} value={budget} disabled={unsure} onChange={e => setBudget(Number(e.target.value))} /></div><Slider aria-label="Planning budget in USD" min={100} max={10000} step={50} value={[Math.min(budget,10000)]} disabled={unsure} onValueChange={values => setBudget(values[0] ?? 1000)} /><div className="sp-slider-scale"><span>$100</span><span>$10,000+</span></div><label className="sp-unsure"><Checkbox checked={unsure} onCheckedChange={v => setUnsure(v === true)} />Not sure yet, help me plan</label></div>
   <div className="sp-field"><label htmlFor="sp-timeline"><span>04</span> When would you like to start?</label><Select value={timeline} onValueChange={setTimeline}><SelectTrigger id="sp-timeline"><SelectValue /></SelectTrigger><SelectContent>{sponsorTimelines.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent></Select></div>
   <fieldset className="sp-field"><legend><span>05</span> A little about you</legend><div className="sp-contact-grid"><label>Full name<Input name="name" required autoComplete="name" placeholder="Your name" maxLength={100} /></label><label>Business email<Input name="email" type="email" required autoComplete="email" placeholder="you@company.com" maxLength={200} /></label><label className="sp-full">Organization<Input name="company" required autoComplete="organization" placeholder="Company or community" maxLength={120} /></label><label className="sp-full">Anything else? <small>(optional)</small><Input name="note" placeholder="Audience, launch, location or accessibility goals" maxLength={700} /></label></div></fieldset>
  </div>
  <aside className="sp-builder-summary"><span className="sp-mini-label"><SlidersHorizontal size={16} /> Your partnership canvas</span><h3>{objective}</h3><div aria-live="polite"><p className="sp-summary-budget">{unsure ? 'Let’s plan together' : money(budget)}</p><p className="sp-muted">{unsure ? 'We’ll help shape a suitable scope.' : 'Your planning budget · USD'}</p><ul>{selected.map(id => <li key={id}><Check size={15}/>{sponsorshipOpportunities.find(o => o.id === id)?.category}</li>)}</ul>{!unsure && selected.length > 0 && <div className="sp-allocation"><strong>{money(planningAllocation(budget,selected.length))}</strong><span>per activation if split equally</span></div>}<p className="sp-fine">This is a budget planning calculation, not a price estimate. Actual costs differ by activation; availability, scope and applicable taxes are confirmed in your proposal.</p></div><p className="sp-summary-timeline">Timeline <strong>{timeline}</strong></p><Button type="submit" className="sp-button sp-button-gold">Get My Partnership Proposal<ArrowUpRight /></Button><p className="sp-email-note"><Mail size={14}/> Opens your email app with your brief. Nothing is submitted automatically.</p>{notice && <p role="status" className="sp-form-notice">{notice}</p>}<a className="sp-direct-email" href="mailto:Connectdoradao@gmail.com">Connectdoradao@gmail.com</a></aside>
 </form>;
}
