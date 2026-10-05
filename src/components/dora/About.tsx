import { about } from "@/data/site";
import { Section } from "./shared";

export function About() {
  return (
    <Section id="about" title={about.title}>
      <div className="grid gap-6 rounded-token border bg-card p-6 md:grid-cols-3 md:p-8">
        <div id="why-dora" className="scroll-mt-28"><h3 className="font-semibold">Why "Dora"?</h3><p className="mt-2 text-muted-foreground">{about.whyName}</p></div>
        <div id="how-it-works" className="scroll-mt-28"><h3 className="font-semibold">How it works</h3><p className="mt-2 text-muted-foreground">{about.howItWorks}</p></div>
        <div id="our-story" className="scroll-mt-28"><h3 className="font-semibold">Our story</h3><p className="mt-2 text-muted-foreground">{about.story}</p></div>
      </div>
    </Section>
  );
}
