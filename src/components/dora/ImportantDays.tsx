import { useState } from "react";
import { importantDays } from "@/data/days";
import { Section } from "./shared";
import { Button } from "@/components/ui/button";

export function ImportantDays() {
  const months = ["All", ...Array.from(new Set(importantDays.map((d) => d.month)))];
  const [month, setMonth] = useState("All");
  const list = importantDays.filter((d) => month === "All" || d.month === month);
  const [id, setId] = useState(importantDays[0]!.id);
  const day = list.find((d) => d.id === id) ?? list[0];

  return (
    <Section id="days" title="Important days" subtitle="Mark the moments. Make them count.">
      <div className="grid gap-6 md:grid-cols-[18rem_1fr]">
        <div>
          <label className="flex flex-col text-xs text-muted-foreground">
            Month
            <select value={month} onChange={(e) => setMonth(e.target.value)} className="mt-1 h-10 rounded-token border bg-background px-3 text-sm text-foreground">
              {months.map((m) => <option key={m}>{m}</option>)}
            </select>
          </label>
          <ul className="mt-4 grid grid-cols-3 gap-2 md:grid-cols-2">
            {list.map((d) => (
              <li key={d.id}>
                <button onClick={() => setId(d.id)} aria-current={d.id === day?.id ? "true" : undefined} className={`w-full rounded-token border p-3 text-center transition ${d.id === day?.id ? "border-primary bg-primary text-primary-foreground" : "bg-card hover:bg-muted"}`}>
                  <span className="block text-xs uppercase">{d.month.slice(0, 3)}</span>
                  <span className="block text-2xl font-bold">{d.day}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        {day && (
          <article className="grid gap-6 rounded-token border bg-card p-6 lg:grid-cols-2" aria-live="polite">
            <img src={day.image} alt={day.title} loading="lazy" className="aspect-[3/2] w-full rounded-token object-cover" />
            <div>
              <p className="text-sm text-muted-foreground">{day.day} {day.month}</p>
              <h3 className="text-2xl font-semibold">{day.title}</h3>
              <p className="mt-2 text-muted-foreground">{day.story}</p>
              <h4 className="mt-5 font-semibold">How you can celebrate as a member</h4>
              <ol className="mt-2 space-y-2">
                {day.steps.map((s, i) => (
                  <li key={s} className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">{i + 1}</span>{s}</li>
                ))}
              </ol>
              <Button className="mt-5">Join the celebration</Button>
            </div>
          </article>
        )}
      </div>
    </Section>
  );
}
