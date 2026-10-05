import { placePaths } from "@/data/community";
import { Section, scrollToId } from "./shared";
import { Button } from "@/components/ui/button";
import { BookOpen, Globe2, HeartHandshake, Hammer, Mic2, Users } from "lucide-react";

const icons = { build: Hammer, learn: BookOpen, speak: Mic2, connect: Users, give: HeartHandshake, partner: Globe2 };

export function FindYourPlace() {
  return (
    <Section id="findyourplace" title="Find your place in Dora" subtitle="There is more than one way to belong, contribute and grow.">
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {placePaths.map((path) => (
          <li key={path.id} className="group flex min-h-64 flex-col rounded-token border bg-card p-6 transition hover:-translate-y-1 hover:shadow-md">
            {(() => { const Icon = icons[path.icon]; return <Icon className="h-9 w-9 text-primary" aria-hidden="true" />; })()}
            <h3 className="mt-5 font-display text-3xl font-bold">{path.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{path.description}</p>
            <Button variant="link" className="mt-4 h-auto justify-start px-0" onClick={() => scrollToId(path.target)}>{path.action} →</Button>
          </li>
        ))}
      </ul>
    </Section>
  );
}