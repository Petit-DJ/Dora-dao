import {
  ArrowRight,
  CalendarDays,
  Coins,
  Handshake,
  Heart,
  House,
  Minus,
  Plus,
  Send,
  TentTree,
  TreePalm,
  Users,
} from "lucide-react";
import { useState, type ComponentType } from "react";
import { Button } from "@/components/ui/button";

type Tab = "General" | "Programs" | "Community" | "Partnerships";
type Faq = {
  q: string;
  a: string;
  Icon: ComponentType<{ size?: number; strokeWidth?: number }>;
  tabs: Tab[];
};

const tabs: { label: Tab; Icon: Faq["Icon"] }[] = [
  { label: "General", Icon: House },
  { label: "Programs", Icon: TentTree },
  { label: "Community", Icon: Users },
  { label: "Partnerships", Icon: Handshake },
];

const faqs: Faq[] = [
  {
    q: "What is GWY Island?",
    Icon: TreePalm,
    tabs: ["General", "Community"],
    a: "GWY Island is a global community by DoraDAO that brings together builders, creators, and changemakers through programs, events, and collaborations. It's a space to learn, build, and create real-world impact, together.",
  },
  {
    q: "Who can join GWY Island?",
    Icon: Users,
    tabs: ["General", "Community"],
    a: "Anyone curious to learn, build or share, students, professionals, creators and first-time builders from all walks of life are welcome.",
  },
  {
    q: "What kind of programs do you run?",
    Icon: TentTree,
    tabs: ["General", "Programs"],
    a: "Fellowships, conferences, hackathons, mentorship and community weeks, from GirlsWhoYap to DoraHacks, DWoC, WORLD TOUR ft. Dora, AiFest, M2M Mentorship and Hooman.",
  },
  {
    q: "Are the events online or in person?",
    Icon: CalendarDays,
    tabs: ["General", "Programs"],
    a: "Both. Each program shares its own format, dates and location when it opens.",
  },
  {
    q: "Is there any cost to join?",
    Icon: Coins,
    tabs: ["General", "Community"],
    a: "Joining details are shared with each program when it opens. Drop us a message if you'd like to know more.",
  },
  {
    q: "How can I become a partner?",
    Icon: Heart,
    tabs: ["General", "Partnerships"],
    a: "Reach out through Contact us and tell us what you'd like to build together, our team will get back to you.",
  },
  {
    q: "Still have a question?",
    Icon: Send,
    tabs: ["General", "Community", "Partnerships", "Programs"],
    a: "We're just a message away. Tap Contact us and say hello.",
  },
];

export function FaqContent() {
  const [tab, setTab] = useState<Tab>("General");
  const [open, setOpen] = useState<string | null>(null);
  return (
    <>
      <div className="faq-directory-topics" role="group" aria-label="FAQ topics">
        {tabs.map(({ label, Icon }) => (
          <Button
            variant="outline"
            key={label}
            aria-pressed={tab === label}
            onClick={() => {
              setTab(label);
              setOpen(null);
            }}
          >
            <Icon aria-hidden="true" />
            {label}
          </Button>
        ))}
      </div>
      <ul className="faq-directory-list">
        {faqs
          .filter((f) => f.tabs.includes(tab))
          .map(({ q, a }, i) => {
            const expanded = open === q;
            const id = `faq-answer-${tab.toLowerCase()}-${i}`;
            return (
              <li key={q}>
                <Button
                  variant="ghost"
                  className="faq-directory-question"
                  aria-expanded={expanded}
                  aria-controls={id}
                  onClick={() => setOpen(expanded ? null : q)}
                >
                  <span>{q}</span>
                  <span className="faq-directory-toggle" aria-hidden="true">
                    {expanded ? <Minus /> : <Plus />}
                  </span>
                </Button>
                <div id={id} hidden={!expanded} className="faq-directory-answer">
                  <p>{a}</p>
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
}
