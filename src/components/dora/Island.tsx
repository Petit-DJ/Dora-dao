import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Sparkles, ArrowRight } from "lucide-react";
import { artifacts, islandImage, type Artifact } from "@/data/island";
import { Section } from "./shared";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export function Island() {
  const [open, setOpen] = useState<Artifact | null>(null);
  return (
    <Section id="island" title="Welcome to GWY Island" subtitle="A home built by women and girls, where every voice has room to grow.">
      <p className="mx-auto max-w-3xl text-center text-lg leading-loose md:text-xl">
        Once upon a time, a group of women and girls dreamed of a place where every voice mattered. They called it{" "}
        <span className="mx-2 inline-block rounded-token border-2 border-primary px-4 py-1 align-middle font-display text-3xl font-bold md:text-5xl">🏝️ GWY Island</span>{" "}
        — a safe space, a louder voice and a bigger dream, where we come together to learn, create and lead.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="relative">
          <img src={islandImage} alt="GWY Island illustration with the Dora DAO flag" loading="lazy" className="aspect-[4/3] w-full rounded-token object-cover" />
          <span className="absolute left-1/2 top-6 rounded-token bg-background px-3 py-1 text-sm font-semibold shadow" aria-hidden="true">🚩 Dora DAO</span>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="mb-3 font-semibold">Island artifacts</h3>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {artifacts.map((a) => (
                <li key={a.id}>
                  <button onClick={() => setOpen(a)} className="h-full w-full rounded-token border bg-card p-4 text-left transition hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    <span className="text-3xl" aria-hidden="true">{a.icon}</span>
                    <p className="mt-2 font-medium">{a.name}</p>
                    <p className="text-xs text-muted-foreground">{a.short}</p>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 rounded-token border bg-muted/60 p-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-foreground">Girls Who Yap Fellowship 2.0</p>
              <p className="text-xs text-muted-foreground">Demystifying AI for creators, builders, PMs and marketers.</p>
            </div>
            <Button asChild size="sm" className="rounded-full shadow">
              <Link to="/fellowship">
                <Sparkles className="h-3.5 w-3.5" /> Explore Fellowship <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Dialog open={!!open} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{open?.icon} {open?.name}</DialogTitle>
            <DialogDescription>{open?.short}</DialogDescription>
          </DialogHeader>
          <div className="space-y-3">{open?.story.map((s) => <p key={s}>{s}</p>)}</div>
        </DialogContent>
      </Dialog>
    </Section>
  );
}
