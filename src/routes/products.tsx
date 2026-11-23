import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, BookOpen, Briefcase, Check, Copy, Download, FileText, GraduationCap, Heart, Image as ImageIcon,
  Link2, Megaphone, Menu, Mic, MoreHorizontal, Monitor, Sprout, Star, Users, X,
} from "lucide-react";
import { Reveal, Squiggle } from "@/components/reveal";
import { ProductsOpening } from "@/components/products-opening";
import { DigitalProducts } from "@/components/digital-products";
import { ImpactCardStack } from "@/components/csr-impact-section";
import { Button } from "@/components/ui/button";
import mentoringGirl from "@/assets/csr/mentoring-girl.png";
import workshopArt from "@/assets/csr/speaking-laptop.png";
import swagArt from "@/assets/csr/mentoring-directory.png";
import speakerArt from "@/assets/csr/speaking-microphone.png";
import campaignArt from "@/assets/csr/speaking-speaker.png";
import fellowshipArt from "@/assets/csr/mentoring-circles.png";
import libraryArt from "@/assets/csr/mentoring-books.png";

export const Route = createFileRoute("/products")({
  head: () => ({
    links: [{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fredoka:wght@400..700&display=swap" }],
    meta: [
      { title: "Products for Organizers · DoraDAO" },
      { name: "description", content: "DoraDAO's digital and community products, speakers, swag and resources to make your events more engaging." },
      { property: "og:title", content: "Bring more value to your events, together · DoraDAO" },
      { property: "og:description", content: "Plug-and-play tools, community products and sponsor assets for organizers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductsPage,
});

const MAIL = "mailto:Connectdoradao@gmail.com?subject=";

const products = [
  { t: "Workshop Kits", d: "Ready-to-use session plans, slides, and facilitator guides for technical and non-technical topics.", img: workshopArt, icon: Monitor, tint: "peach" },
  { t: "Swag & Merch", d: "DoraDAO stickers, posters and digital assets to make your event feel special.", img: swagArt, icon: Heart, tint: "orange" },
  { t: "Community Speakers", d: "Access our network of builders, creators, and domain experts for talks and panel discussions.", img: speakerArt, icon: Mic, tint: "gold" },
  { t: "Community Campaigns", d: "Co-branded social media campaigns to amplify your event's reach.", img: campaignArt, icon: Megaphone, tint: "sage" },
  { t: "Fellowship & Program Support", d: "Guidance on designing and running fellowships, cohorts, or community programs.", img: fellowshipArt, icon: GraduationCap, tint: "cream" },
  { t: "Resource Library", d: "Templates, checklists, branding assets, and your-go community guides.", img: libraryArt, icon: BookOpen, tint: "seafoam" },
];

const why = [
  [Users, "Engaged community", "Connect with a global network of builders, creators and students."],
  [Megaphone, "Greater visibility", "Get featured across our channels and community networks."],
  [Star, "High-quality resources", "Access ready-to-use content, tools, and support."],
  [Sprout, "Meaningful impact", "Help us make learning and opportunities more open and inclusive."],
] as const;

const partnershipBenefits = why.map(([icon, title, text]) => ({ icon, title, text }));

const asks = [
  [ImageIcon, "Include DoraDAO as a community partner", "Add our logo on your event website, banners, and posters."],
  [Megaphone, "Announce our partnership", "Mention DoraDAO in your event announcements and opening/closing remarks."],
  [Link2, "Share on social media", "Tag DoraDAO in your event posts across platforms (X, LinkedIn, etc.)."],
  [FileText, "Provide a short write-up (optional)", "Share a recap or testimonial about how our products supported your event."],
  [Users, "Let participants know", "Inform your attendees about DoraDAO and our community."],
] as const;

const assets = [
  ["DoraDAO Logo", "(PNG/SVG)"], ["Brand Description", "(1-2 lines)"], ["Social Media Creatives", "(Banners & Posts)"], ["Posters & Banners", ""],
];

const WORDING = `We're excited to have DoraDAO as a community partner for [Your Event/Program Name]!

DoraDAO is a global community platform that empowers creators, builders, and changemakers through programs, resources, and opportunities. They're supporting our event with [specific products/resources, e.g., workshop kits, speaker support, digital assets] to help us create a more engaging and impactful experience for our community.`;

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="pd-h2"><span aria-hidden>›</span> {children} <span className="pd-tick" aria-hidden>≈</span></h2>;
}

function ProductsPage() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(WORDING); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch { /* ignore */ }
  };
  return (
    <div className="pr-page pd-page">
      <SiteNavbar />

      <ProductsOpening />

      <div className="pd-sheet">
        <DigitalProducts />

        <section className="pd-sec pd-community-products" aria-labelledby="pd-community-title">
          <Reveal><p className="pd-sub">Plug-and-play offerings to make your event or program more engaging, inclusive, and impactful.</p></Reveal>
          <div className="csr-mentor-grid pd-community-grid">
            <Reveal className="csr-mentor-lead-wrap">
              <div className="csr-mentor-lead pd-community-lead">
                <span className="csr-mentor-brand"><Users size={23} aria-hidden="true" /> DoraDAO</span>
                <h2 id="pd-community-title">Our community<br /><span>products</span></h2>
                <span className="csr-mentor-stroke" aria-hidden="true" />
                <img src={mentoringGirl} alt="" aria-hidden="true" loading="lazy" width={504} height={640} />
              </div>
            </Reveal>
            {products.map((p, i) => (
              <Reveal key={p.t} delay={i * 70}>
                <Button asChild variant="ghost" className={`csr-mentor-card pd-community-card mentor-${p.tint}`}>
                  <a href={`${MAIL}${encodeURIComponent(p.t)}`} aria-label={`Ask about ${p.t}`}>
                    <span className="csr-mentor-icon"><p.icon size={26} strokeWidth={1.7} aria-hidden="true" /></span>
                    <h3>{p.t}</h3><p>{p.d}</p>
                    <span className="csr-mentor-arrow"><ArrowRight size={17} aria-hidden="true" /></span>
                    <img className="csr-mentor-art" src={p.img} alt="" aria-hidden="true" loading="lazy" width={540} height={540} />
                  </a>
                </Button>
              </Reveal>
            ))}
          </div>
        </section>

        <ImpactCardStack
          id="pd-partner-benefits-title"
          className="pd-partner-benefits"
          badge="Why partner with us"
          note="Same energy. More impact."
          title={<>Why partner with <em>DoraDAO?</em></>}
          cards={partnershipBenefits}
        />

        <section className="pd-sec pd-ask">
          <Reveal>
            <H2>What we ask in return</H2>
            <p>To keep DoraDAO sustainable and continue supporting more communities, we kindly ask you to feature us in your event or program as a community partner.</p>
            <Heart className="pd-heart" aria-hidden />
          </Reveal>
          <ul>
            {asks.map(([I, t, d], i) => (
              <Reveal key={t} delay={i * 70}><li><span className="pd-check"><Check size={14} /></span><I className="pd-ic" /><div><h4>{t}</h4><p>{d}</p></div></li></Reveal>
            ))}
          </ul>
        </section>

        <section className="pd-sec">
          <div className="pd-row">
            <Reveal><H2>Sponsor wording you can use</H2><p className="pd-sub">Use the template below to announce our partnership. Feel free to customize it for your event.</p></Reveal>
            <button className="pd-outline" onClick={copy}><Copy size={15} />{copied ? "Copied!" : "Copy wording"}</button>
          </div>
          <Reveal><blockquote className="pd-quote">{WORDING.split("\n\n").map((t, i) => i === 0 ? <strong key={i}>{t}</strong> : <p key={i}>{t}</p>)}</blockquote></Reveal>
          <Squiggle />
        </section>

        <section className="pd-sec">
          <div className="pd-row">
            <Reveal><H2>Sponsor assets</H2><p className="pd-sub">Use these assets in your event website, social media, and promotional materials.</p></Reveal>
            <a className="pd-outline" href={`${MAIL}Sponsor%20assets%20request`}><Download size={15} />Request all assets</a>
          </div>
          <div className="pd-assets">
            {assets.map(([t, s], i) => (
              <Reveal key={t} delay={i * 70}>
                <a className="pd-asset" href={`${MAIL}${encodeURIComponent(`Asset request: ${t}`)}`}>
                  <FileText className="pd-ic" /><div><h4>{t}</h4><small>{s}</small></div><Download size={15} className="pd-dl" />
                </a>
              </Reveal>
            ))}
          </div>
        </section>

      </div>
      <SiteFooter />
    </div>
  );
}
