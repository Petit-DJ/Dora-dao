import { CalendarDays, MapPin } from "lucide-react";
import { upcomingEvents } from "@/data/community";
import { Section } from "./shared";
import { Button } from "@/components/ui/button";

export function UpcomingEvents() {
  return (
    <Section id="upcomingevents" title="Upcoming events" subtitle="Come as you are. Leave with a new idea, skill or friend.">
      <ul className="grid gap-4 md:grid-cols-2">
        {upcomingEvents.map((event) => (
          <li key={event.id} className="grid overflow-hidden rounded-token border bg-card sm:grid-cols-[10rem_1fr]">
            <div className="relative min-h-44">
              <img src={event.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute left-3 top-3 rounded-token bg-background px-3 py-2 text-center shadow">
                <span className="block text-xs font-bold uppercase text-muted-foreground">{event.month}</span>
                <span className="block text-2xl font-extrabold">{event.day}</span>
              </div>
            </div>
            <div className="flex flex-col p-5">
              <span className="w-fit rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground">{event.format}</span>
              <h3 className="mt-3 text-lg font-bold">{event.title}</h3>
              <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground"><MapPin className="h-3.5 w-3.5" />{event.location}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{event.description}</p>
              <Button size="sm" className="mt-4 w-fit" asChild><a href={event.url}><CalendarDays />Save my spot</a></Button>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}