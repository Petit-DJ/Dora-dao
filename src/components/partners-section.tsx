import { PartnershipCards } from "@/components/partnership-cards";

export function PartnersSection() {
  return (
    <section id="partners" aria-labelledby="partners-title" className="partners-section">
      <div className="partners-inner">
        <p className="partners-eyebrow">· Grow with DoraDAO ·</p>
        <h2 id="partners-title" className="partners-title">
          Help us keep emerging tech open to{" "}
          <span className="text-hero-orange">every curious hooman</span>.
        </h2>
        <PartnershipCards descriptions />
      </div>
    </section>
  );
}
