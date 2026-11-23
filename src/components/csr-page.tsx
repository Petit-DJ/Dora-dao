import { PartnershipCards } from "@/components/partnership-cards";
import {
  ArrowRight, Coffee, GraduationCap,
  Heart, Megaphone, Mic, Sparkles, Users,
} from "lucide-react";
import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";
import { CsrImpactSection } from "@/components/csr-impact-section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { PARTNER_EMAIL, partnerPages } from "@/components/partnership-data";
import mentoringGirl from "@/assets/csr/mentoring-girl.png";
import mentoringCircles from "@/assets/csr/mentoring-circles.png";
import mentoringLaptop from "@/assets/csr/mentoring-laptop.png";
import mentoringDirectory from "@/assets/csr/mentoring-directory.png";
import mentoringMeetup from "@/assets/csr/mentoring-meetup.png";
import mentoringCoffee from "@/assets/csr/mentoring-coffee.png";
import mentoringBooks from "@/assets/csr/mentoring-books.png";
import heroCharacters from "@/assets/csr/hero-characters.png";
import heroScenery from "@/assets/csr/hero-scenery.jpg";
import speakingBooks from "@/assets/csr/speaking-books.png";
import speakingLaptop from "@/assets/csr/speaking-laptop.png";
import speakingMicrophone from "@/assets/csr/speaking-microphone.png";
import speakingSpeaker from "@/assets/csr/speaking-speaker.png";

function getCsrData() {
  const page = partnerPages.find((p) => p.slug === "csr");
  if (!page) throw new Error("CSR partnership content is missing");
  return page;
}
const data = getCsrData();

const mail = (s: string) => `mailto:${PARTNER_EMAIL}?subject=${encodeURIComponent(`CSR Partnership: ${s}`)}`;

const speaking = [
  { icon: Heart, tint: "peach", art: speakingBooks, title: "The Download Series", text: "Share career insights in monthly professional development talks for early-career women." },
  { icon: GraduationCap, tint: "sage", art: speakingLaptop, title: "Student Career Talks", text: "Help students navigate their path into tech, from career exploration to interview prep." },
  { icon: Mic, tint: "orange", art: speakingMicrophone, title: "Fail Forward Series", text: "Quarterly C-suite storytelling about setbacks and lessons learned." },
  { icon: Megaphone, tint: "gold", art: speakingSpeaker, title: "Custom Speaking Opportunities", text: "Solo sessions, panels, or Q&As on topics your experts choose." },
];

const mentoring = [
  { icon: Heart, tint: "peach", art: mentoringCircles, title: "DoraDAO Mentor Circles", text: "Join quarterly mentoring events with 1-6 mentors, fully managed by DoraDAO." },
  { icon: Megaphone, tint: "orange", art: mentoringLaptop, title: "Company-Sponsored Mentor Days", text: "A high-visibility, single-day mentoring experience that puts your team front and center." },
  { icon: Users, tint: "gold", art: mentoringDirectory, title: "Mentoring Directory", text: "Flexible year-round mentoring on your employees' schedules." },
  { icon: Sparkles, tint: "sage", art: mentoringMeetup, title: "Local In-Person Mentor Events", text: "Host intimate mentoring meetups in your office or venue of choice." },
  { icon: Coffee, tint: "cream", art: mentoringCoffee, title: "Early Career Coffee Chats", text: "Casual monthly conversations connecting your team with early-career women in your city." },
  { icon: GraduationCap, tint: "seafoam", art: mentoringBooks, title: "Student Career Talks", text: "Help students navigate their path into tech, from career exploration to interview prep." },
];

export function CsrPage() {
  return (
    <div className="pr-page csr-page">
      <SiteNavbar />

      {/* Sticky hero, the sheet below slides up over it (services-style transition) */}
      <section className="csr-hero">
        <div className="csr-hero-inner">
          <img className="csr-hero-scenery" src={heroScenery} alt="" aria-hidden="true" fetchPriority="high" />
          <div className="csr-hero-copy">
            <Reveal><p className="csr-kicker">{data.kicker}</p></Reveal>
            <Reveal delay={90}>
              <h1>More women leave tech than stay to lead. Your team can change that.</h1>
            </Reveal>
          </div>
          <Reveal delay={140} className="csr-hero-art">
            <img src={heroCharacters} alt="DoraDAO’s yellow-beret girl jumping with her purple friend" fetchPriority="high" />
          </Reveal>
          <Reveal delay={180} className="csr-hero-description"><p className="csr-lead">{data.lead}</p></Reveal>
        </div>
      </section>

      {/* Sliding sheet */}
      <div className="csr-sheet">
        {/* Speaking programs */}
        <section className="csr-speaking" aria-labelledby="csr-speaking-title">
          <div className="csr-speaking-panel">
            <Reveal delay={70} className="csr-heading csr-speaking-heading">
              <div className="csr-heading-top">
                <span className="csr-heading-pill">01 · Ways to partner</span>
                <p className="csr-heading-note">Monthly talks, career sessions and C‑suite storytelling.</p>
              </div>
              <h2 id="csr-speaking-title" className="csr-heading-title">Share your team's expertise with the next generation <em>of women in tech</em></h2>
            </Reveal>
            <div className="csr-speaking-grid">
              {speaking.map((c, i) => (
                <Reveal key={c.title} delay={i * 80}>
                  <Button asChild variant="ghost" className={`csr-speaking-card speaking-${c.tint}`}>
                    <a href={mail(c.title)} aria-label={`Explore ${c.title}`}>
                      <span className="csr-speaking-icon"><c.icon size={26} strokeWidth={1.5} /></span>
                      <h3>{c.title}</h3>
                      <p>{c.text}</p>
                      <span className="csr-speaking-arrow"><ArrowRight size={16} /></span>
                      <img className="csr-speaking-art" src={c.art} alt="" aria-hidden="true" loading="lazy" width={372} height={416} />
                    </a>
                  </Button>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="csr-speaking-feature">
            <div className="csr-speaking-feature-top"><span>Every program</span><p>Registration, hosting and follow-up, fully handled.</p></div>
            <Reveal><h3>From a one-hour coffee chat to a full mentor day, your people simply show up ready to engage while DoraDAO takes care of <em>everything behind the scenes</em>, planning, hosting and measuring the impact.</h3></Reveal>
          </div>
        </section>

        {/* Mentoring programs */}
        <section className="csr-mentoring" aria-labelledby="csr-mentoring-title">
          <div className="csr-mentor-grid">
            <Reveal className="csr-mentor-lead-wrap">
              <Button asChild variant="ghost" className="csr-mentor-lead">
                <a href={mail("Mentoring Programs")} aria-label="Explore DoraDAO Mentoring Programs">
                  <span className="csr-mentor-brand"><Users size={23} /> DoraDAO</span>
                  <h2 id="csr-mentoring-title">Mentoring<br /><span>Programs</span></h2>
                  <span className="csr-mentor-stroke" aria-hidden="true" />
                  <img src={mentoringGirl} alt="" aria-hidden="true" loading="lazy" width={640} height={800} />
                </a>
              </Button>
            </Reveal>
            {mentoring.map((c, i) => (
              <Reveal key={c.title} delay={i * 70}>
                <Button asChild variant="ghost" className={`csr-mentor-card mentor-${c.tint}`}>
                  <a href={mail(c.title)} aria-label={`Explore ${c.title}`}>
                    <span className="csr-mentor-icon"><c.icon size={26} strokeWidth={1.7} /></span>
                    <h3>{c.title}</h3>
                    <p>{c.text}</p>
                    <span className="csr-mentor-arrow"><ArrowRight size={17} /></span>
                    <img className="csr-mentor-art" src={c.art} alt="" aria-hidden="true" loading="lazy" width={540} height={540} />
                  </a>
                </Button>
              </Reveal>
            ))}
          </div>
        </section>

        <CsrImpactSection />

        <section className="csr-invitation" aria-labelledby="csr-invitation-title">
          <div className="csr-invitation-banner">
            <img className="csr-invitation-dora" src={mentoringGirl} alt="Dora smiling in her yellow sprout beret" loading="lazy" width={504} height={640} />
            <span className="csr-invitation-rays rays-left" aria-hidden="true" />
            <div className="csr-invitation-copy">
              <h2 id="csr-invitation-title">Become a DoraDAO Partner</h2>
              <p>Your dedicated partnership manager will contact you within 2 business days.</p>
              <Button asChild className="csr-invitation-button">
                <a href={mail("Talk to us about partner opportunities")}>Talk to us about partner opportunities <ArrowRight size={16} /></a>
              </Button>
            </div>
            <span className="csr-invitation-rays rays-right" aria-hidden="true" />
            <div className="csr-invitation-doodles" aria-hidden="true">
              <Heart className="csr-invitation-heart" size={30} strokeWidth={2.4} />
              <Sparkles className="csr-invitation-star" size={36} strokeWidth={1.8} />
              <svg className="csr-invitation-loop" viewBox="0 0 100 65" fill="none"><path d="M5 20C25-10 58 13 43 43C28 69 16 40 44 25C63 14 84 19 94 34" stroke="currentColor" strokeWidth="4" strokeLinecap="round" /></svg>
            </div>
          </div>
        </section>

        {/* Other partnership pages */}
        <section className="csr-sec">
          <Reveal><h2 className="csr-h2">Explore other ways to <mark>partner</mark></h2></Reveal>
          <PartnershipCards exclude="csr" />
        </section>
      </div>
      <SiteFooter />
    </div>
  );
}
