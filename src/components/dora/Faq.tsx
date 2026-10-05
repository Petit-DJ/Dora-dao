import { useState } from "react";
import { faqCategories, faqs } from "@/data/faqs";
import { Section } from "./shared";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export function Faq() {
  const [cat, setCat] = useState("All");
  const list = faqs.filter((f) => cat === "All" || f.category === cat);
  return (
    <Section id="faq" title="Frequently asked questions">
      <div role="group" aria-label="FAQ categories" className="mb-6 flex flex-wrap gap-2">
        {faqCategories.map((c) => (
          <Button key={c} size="sm" variant={cat === c ? "default" : "outline"} aria-pressed={cat === c} className="rounded-full" onClick={() => setCat(c)}>{c}</Button>
        ))}
      </div>
      <Accordion type="single" collapsible className="rounded-token border bg-card px-4">
        {list.map((f) => (
          <AccordionItem key={f.q} value={f.q}>
            <AccordionTrigger>{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
