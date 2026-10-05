import { heroStoryLeft, heroStoryRight, type StorySegment } from "@/data/site";
import { DoraAvatar } from "./DoraAvatar";
import { CountUp } from "./shared";

function Story({ segments }: { segments: StorySegment[] }) {
  return (
    <p className="text-lg leading-[2.2] md:text-xl">
      {segments.map((s, i) => {
        if (s.type === "text") return <span key={i}>{s.value} </span>;
        if (s.type === "image")
          return <img key={i} src={s.src} alt={s.alt} loading="lazy" className="mx-1 inline-block h-9 w-9 rounded-full border-2 border-background object-cover align-middle shadow" />;
        return (
          <span key={i} className="mx-1 inline-flex items-center rounded-full bg-primary px-3 py-0.5 align-middle text-base font-bold text-primary-foreground" aria-label={`${s.value}${s.suffix ?? ""} ${s.label}`}>
            <CountUp value={s.value} suffix={s.suffix} />
          </span>
        );
      })}
    </p>
  );
}

export function Hero() {
  return (
    <section id="home" className="scroll-mt-24 px-4 pb-section pt-12 md:pt-section">
      <div className="mx-auto max-w-content">
        <h1 className="sr-only">Dora DAO — a global community</h1>
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto_1fr]">
          <div className="md:text-right"><Story segments={heroStoryLeft} /></div>
          <div className="order-first pb-5 md:order-none"><DoraAvatar /></div>
          <div><Story segments={heroStoryRight} /></div>
        </div>
      </div>
    </section>
  );
}
