import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircleQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FaqSection() {
  return <section id="faq" aria-labelledby="faq-title" className="faq-gateway">
    <div className="faq-gateway-inner">
      <MessageCircleQuestion className="faq-gateway-symbol" aria-hidden="true" />
      <div><p className="faq-gateway-note">Questions people actually ask</p><h2 id="faq-title">Before you show up, here's everything.</h2></div>
      <Button asChild variant="outline" className="faq-gateway-link"><Link to="/faq">Open the FAQ<ArrowRight aria-hidden="true" /></Link></Button>
    </div>
  </section>;
}
