import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { newsletterFormats, sponsorContact } from "./sponsor-offerings-data";
import shoutout from "@/assets/sponsor/newsletter-shoutout-paper.jpg.asset.json";
import detailed from "@/assets/sponsor/newsletter-detailed.jpg.asset.json";
import deepDive from "@/assets/sponsor/newsletter-deep-dive-paper.jpg.asset.json";
import job from "@/assets/sponsor/job-promo-paper.jpg.asset.json";
import event1 from "@/assets/sponsor/event-1-paper.jpg.asset.json";
import event2 from "@/assets/sponsor/event-2-paper.jpg.asset.json";
import event3 from "@/assets/sponsor/event-3-paper.jpg.asset.json";
import protocol from "@/assets/sponsor/protocol-labs.svg.asset.json";
import ripple from "@/assets/sponsor/ripple.svg.asset.json";
import flare from "@/assets/sponsor/flare.svg.asset.json";
import social1 from "@/assets/sponsor/social-1.jpg.asset.json";
import social2 from "@/assets/sponsor/social-2.jpg.asset.json";
import social3 from "@/assets/sponsor/social-3.jpg.asset.json";
const newsletterArt = [shoutout, detailed, deepDive];
const posts = [
  {
    image: social1,
    author: "Francesco Andreoli",
    url: "https://x.com/francescoswiss/status/1624066129608966144",
  },
  {
    image: social2,
    author: "Ethereum Argentina",
    url: "https://x.com/EtherArgentina/status/1630564728371134467",
  },
  {
    image: social3,
    author: "Milano Blockchain Week",
    url: "https://x.com/eth_milano/status/1687438417158680576",
  },
];
function Contact({ subject, children }: { subject: string; children: ReactNode }) {
  return (
    <div className="so-action">
      <Button asChild className="so-button">
        <a href={sponsorContact(subject)}>
          {children}
          <ArrowRight size={16} />
        </a>
      </Button>
    </div>
  );
}
export function SponsorOfferings() {
  return (
    <div className="so-offerings">
      <div className="pr-wrap so-layout">
        <nav className="so-nav" aria-label="Sponsor services">
          <a href="#newsletter">03. Newsletter</a>
          {newsletterFormats.map((f) => (
            <a className="so-nav-child" key={f.id} href={`#${f.id}`}>
              {f.title}
            </a>
          ))}
          <a href="#event-sponsorship">04. Event Sponsorship</a>
          <a href="#post-a-job">05. Post a Job</a>
          <a href="#custom-promo-package">06. Custom Promo Package</a>
        </nav>
        <div className="so-content">
          <section id="newsletter" className="so-section" aria-labelledby="so-newsletter-title">
            <h2 id="so-newsletter-title">03. Newsletter</h2>
            <div className="so-newsletter-overview">
              <div className="so-metrics">
                <div>
                  <strong>80K</strong>
                  <span>Subscribers</span>
                </div>
                <div>
                  <strong>40%</strong>
                  <span>Open rate</span>
                </div>
                <div className="so-audience">
                  <span>Audience:</span>
                  <p>Builders &amp; operators in digital finance &amp; frontier tech</p>
                </div>
              </div>
              <Button asChild variant="link" className="so-text-link">
                <a href="https://news.miragather.com/" target="_blank" rel="noreferrer">
                  Read Our Newsletter
                </a>
              </Button>
            </div>
            <div className="so-newsletter-formats">
              {newsletterFormats.map((f, i) => (
                <article id={f.id} key={f.id} className="so-paper so-format">
                  <h3>{f.title}</h3>
                  <img
                    src={newsletterArt[i]?.url}
                    alt={`${f.title.slice(3)} newsletter placement`}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="so-details">
                    {f.id === "deep-dive" ? (
                      <>
                        <p>
                          Dedicate a whole newsletter for a deep dive on a topic relevant to our
                          readers
                        </p>
                        <p>
                          Topic examples: Sponsor's IRL activations for the year, the state of
                          digital finance and frontier tech hackathons, builder culture.
                        </p>
                        <p>
                          Limit: {f.minWords}-{f.maxWords} words
                        </p>
                      </>
                    ) : (
                      <>
                        {f.id === "detailed" && <p>One Image + Text</p>}
                        <p>Limit: Up to {f.maxWords} words</p>
                      </>
                    )}
                  </div>
                </article>
              ))}
            </div>
            <Contact subject="Newsletter sponsorship pricing">Contact us for pricing</Contact>
          </section>
          <section id="event-sponsorship" className="so-section" aria-labelledby="so-event-title">
            <h2 id="so-event-title">04. Event Sponsorship</h2>
            <div className="so-paper so-event">
              <b>
                Host an event with us and reach a new digital finance and frontier tech builder
                audience.
              </b>
              <p>Benefits for sponsors:</p>
              <ul>
                <li>
                  Pre-defined and very targeted digital finance and frontier tech builder audience
                </li>
                <li>We do all the work</li>
                <li>Free marketing on all of our channels</li>
                <li>Opportunity to present and talk about your product/services at the event</li>
                <li>Lower acquisition cost for your company than a general marketing campaign</li>
              </ul>
              <p>Companies we've worked with:</p>
              <div className="so-logos">
                {[
                  { art: protocol, name: "Protocol Labs" },
                  { art: ripple, name: "Ripple" },
                  { art: flare, name: "Flare" },
                ].map((b) => (
                  <div key={b.name}>
                    <img src={b.art.url} alt={b.name} loading="lazy" />
                  </div>
                ))}
              </div>
              <div className="so-event-images">
                {[event1, event2, event3].map((img, i) => (
                  <img
                    key={img.asset_id}
                    src={img.url}
                    alt={`Event sponsorship coverage ${i + 1}`}
                    loading="lazy"
                    decoding="async"
                  />
                ))}
              </div>
            </div>
            <Contact subject="Sponsor the next event">Sponsor the next event</Contact>
          </section>
          <section id="post-a-job" className="so-section" aria-labelledby="so-job-title">
            <h2 id="so-job-title">05. Post a Job</h2>
            <div className="so-paper so-job">
              <img src={job.url} alt="Job promotion placement" loading="lazy" decoding="async" />
              <div className="so-details">
                <Button asChild variant="link" className="so-text-link">
                  <a href={sponsorContact("Post a job with DoraDAO")}>
                    Check this link for more info <ArrowRight size={14} />
                  </a>
                </Button>
              </div>
            </div>
          </section>
          <section
            id="custom-promo-package"
            className="so-section"
            aria-labelledby="so-custom-title"
          >
            <h2 id="so-custom-title">06. Custom Promo Package</h2>
            <div className="so-paper so-custom">
              <ul>
                <li>We'll prepare a custom package based on your needs</li>
                <li>
                  <a href={sponsorContact("Custom promo package")}>Contact us</a> to discuss more
                </li>
              </ul>
            </div>
          </section>
          <div className="so-social-posts">
            {posts.map((p) => (
              <a
                key={p.url}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Read ${p.author}'s post on X`}
              >
                <img
                  src={p.image.url}
                  alt={`${p.author}'s original post about Crypto Nomads`}
                  loading="lazy"
                  decoding="async"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
