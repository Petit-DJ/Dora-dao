import { useState } from "react";
import { ArrowUpRight, Building2, Check, ExternalLink, GraduationCap, HandHeart, HeartHandshake, Sprout, Users } from "lucide-react";
import { collaborations, workPaths } from "@/data/community";
import { Section } from "./shared";
import { Button } from "@/components/ui/button";

const workIcons = { team: Users, volunteer: HandHeart, mentor: HeartHandshake };
const collaborationIcons = { universities: GraduationCap, companies: Building2, organizations: Sprout };

const categories = [
  { id: "organizations", label: "Organizations / Communities" },
  { id: "companies", label: "Companies" },
  { id: "universities", label: "Universities" },
] as const;

export function WorkWithUs() {
  const [activeCategory, setActiveCategory] = useState<"organizations" | "companies" | "universities">("organizations");
  const visibleCollaborations = collaborations.filter((group) => group.icon === activeCategory);

  return (
    <Section id="workwithus" title="Work with us" subtitle="Bring your experience, your energy or your organization into Dora.">
      <div className="grid gap-4 md:grid-cols-3">
        {workPaths.map((path) => (
          <article key={path.title} className="flex flex-col rounded-token border bg-primary p-6 text-primary-foreground">
            {(() => { const Icon = workIcons[path.icon]; return <Icon className="h-8 w-8" aria-hidden="true" />; })()}
            <h3 className="mt-4 font-display text-3xl font-bold">{path.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed opacity-80">{path.description}</p>
            <Button variant="secondary" className="mt-5 w-fit">{path.action}<ArrowUpRight /></Button>
          </article>
        ))}
      </div>

      <div className="mt-14">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase text-muted-foreground">Partnerships in practice</p>
            <h3 className="mt-1 font-display text-4xl font-bold">Who we work with</h3>
            <p className="mt-2 text-muted-foreground">Collaboration should create something useful. Here is what that can look like.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div role="group" aria-label="Filter partner category" className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  size="sm"
                  variant={activeCategory === cat.id ? "default" : "outline"}
                  aria-pressed={activeCategory === cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </Button>
              ))}
            </div>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              See All <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {visibleCollaborations.map((group) => (
            <article key={group.title} className="rounded-token border bg-card p-6">
              <div className="flex items-center gap-3">{(() => { const Icon = collaborationIcons[group.icon]; return <Icon className="h-7 w-7 text-primary" aria-hidden="true" />; })()}<h4 className="text-xl font-bold">{group.title}</h4></div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{group.description}</p>
              <ul className="mt-5 space-y-2">
                {group.examples.map((example) => <li key={example} className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-primary" />{example}</li>)}
              </ul>
              <Button variant="outline" className="mt-6">Start a conversation<ArrowUpRight /></Button>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}