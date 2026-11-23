import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import { CalendarDays, MapPin, ExternalLink } from "lucide-react";
import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { fetchEvents, EVENTS_SUBMIT_URL, type CommunityEvent } from "@/components/events-data";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events, DoraDAO community gatherings near you" },
      { name: "description", content: "Discover upcoming DoraDAO community events by city, or list your own event in a minute with no login." },
      { property: "og:title", content: "DoraDAO Events" },
      { property: "og:description", content: "Upcoming community gatherings by city. Hosts can submit events for listing, no account needed." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EventsPage,
});

const fields: [string, string, string?][] = [
  ["title", "Event name"], ["date", "Date", "date"], ["time", "Time"], ["city", "City"], ["country", "Country"],
  ["venue", "Venue"], ["category", "Category (Tech, Creative...)"], ["link", "RSVP link (https://)", "url"],
  ["image", "Cover image link (optional)", "url"], ["host", "Host / organisation"], ["email", "Your email", "email"],
];

function SubmitForm() {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (!EVENTS_SUBMIT_URL) {
      const body = [...data.entries()].map(([k, v]) => `${k}: ${v}`).join("\n");
      window.location.href = `mailto:Connectdoradao@gmail.com?subject=${encodeURIComponent(`Event listing: ${data.get("title")}`)}&body=${encodeURIComponent(body)}`;
      setState("done"); return;
    }
    setState("sending");
    try {
      await fetch(EVENTS_SUBMIT_URL, { method: "POST", mode: "no-cors", body: new URLSearchParams(data as unknown as Record<string, string>) });
      setState("done");
    } catch { setState("error"); }
  }
  if (state === "done") return <p className="py-6 text-center">Thanks! Your event is pending review and will appear here once approved.</p>;
  return (
    <form onSubmit={submit} className="grid gap-3 sm:grid-cols-2">
      {fields.map(([name, label, type]) => (
        <div key={name} className="grid gap-1">
          <Label htmlFor={`ev-${name}`}>{label}</Label>
          <Input id={`ev-${name}`} name={name} type={type ?? "text"} maxLength={300} required={["title", "date", "city", "email"].includes(name)} />
        </div>
      ))}
      <div className="grid gap-1 sm:col-span-2">
        <Label htmlFor="ev-description">Short description</Label>
        <Textarea id="ev-description" name="description" maxLength={1000} rows={3} />
      </div>
      {state === "error" && <p className="text-destructive sm:col-span-2">Something went wrong. Please try again.</p>}
      <Button type="submit" disabled={state === "sending"} className="sm:col-span-2">{state === "sending" ? "Sending..." : "Submit for listing"}</Button>
    </form>
  );
}

function EventCard({ ev }: { ev: CommunityEvent }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-sm">
      {ev.image ? <img src={ev.image} alt="" loading="lazy" className="aspect-[16/9] w-full object-cover" /> : <div className="aspect-[16/9] w-full bg-muted" aria-hidden="true" />}
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="w-fit rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">{ev.category}</span>
        <h3 className="text-lg font-semibold">{ev.title}</h3>
        <p className="flex items-center gap-2 text-sm text-muted-foreground"><CalendarDays className="size-4" aria-hidden="true" />{ev.date}{ev.time && ` · ${ev.time}`}</p>
        <p className="flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="size-4" aria-hidden="true" />{[ev.venue, ev.city, ev.country].filter(Boolean).join(", ")}</p>
        {ev.description && <p className="text-sm">{ev.description}</p>}
        {ev.host && <p className="text-xs text-muted-foreground">Hosted by {ev.host}</p>}
        {ev.link && <Button asChild variant="outline" className="mt-auto"><a href={ev.link} target="_blank" rel="noopener noreferrer">RSVP <ExternalLink aria-hidden="true" /></a></Button>}
      </div>
    </article>
  );
}

function EventsPage() {
  const [events, setEvents] = useState<CommunityEvent[] | null>(null);
  const [city, setCity] = useState("All");
  useEffect(() => { fetchEvents().then(setEvents).catch(() => setEvents([])); }, []);
  const cities = useMemo(() => ["All", ...new Set((events ?? []).map(e => e.city).filter(Boolean))], [events]);
  const shown = (events ?? []).filter(e => city === "All" || e.city === city);

  return (
    <>
      <SiteNavbar />
      <main className="mx-auto max-w-6xl px-5 pb-20 pt-32">
        <header className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground">Events</p>
            <h1 className="text-4xl font-bold sm:text-5xl">Find your people, offline</h1>
            <p className="mt-3 max-w-xl text-muted-foreground">Community gatherings hosted by DoraDAO chapters and friends around the world.</p>
          </div>
          <Dialog>
            <DialogTrigger asChild><Button size="lg">List your event</Button></DialogTrigger>
            <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
              <DialogHeader>
                <DialogTitle>List your event</DialogTitle>
                <DialogDescription>No login needed. Our team reviews each submission before it goes live.</DialogDescription>
              </DialogHeader>
              <SubmitForm />
            </DialogContent>
          </Dialog>
        </header>
        {cities.length > 1 && (
          <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter by city">
            {cities.map(c => <Button key={c} size="sm" variant={c === city ? "default" : "outline"} aria-pressed={c === city} onClick={() => setCity(c)}>{c}</Button>)}
          </div>
        )}
        {events === null ? <p className="text-muted-foreground">Loading events...</p>
          : shown.length === 0 ? <p className="rounded-2xl border border-dashed border-border p-10 text-center text-muted-foreground">No upcoming events yet. Be the first to list one!</p>
          : <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{shown.map((ev, i) => <EventCard key={`${ev.title}-${i}`} ev={ev} />)}</div>}
      </main>
      <SiteFooter />
    </>
  );
}
