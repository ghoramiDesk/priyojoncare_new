import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SITE, callLink, whatsappLink } from "@/lib/site";
import { HeroSlider, HERO_IMAGES } from "@/components/HeroSlider";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Priyojon Care" },
      { name: "description", content: "Reach our 24/7 careline, WhatsApp advisors, or visit our office in Banani, Dhaka." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-accent via-background to-surface">
        <HeroSlider images={HERO_IMAGES.contact} />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight">Talk to us</h1>
          <p className="text-muted-foreground mt-4 text-lg max-w-xl">We pick up. Day or night. Call, message, or visit — whichever feels easiest.</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 lg:py-16">

      <div className="grid sm:grid-cols-2 gap-4 mt-10">
        <a href={callLink} className="p-6 rounded-2xl bg-primary text-primary-foreground shadow-cta flex items-start gap-4">
          <Phone className="size-7" />
          <div><p className="text-xs uppercase tracking-wider opacity-80">24/7 Careline</p><p className="text-2xl font-bold">{SITE.phoneDisplay}</p></div>
        </a>
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="p-6 rounded-2xl bg-whatsapp text-white shadow-cta flex items-start gap-4">
          <MessageCircle className="size-7" />
          <div><p className="text-xs uppercase tracking-wider opacity-80">WhatsApp</p><p className="text-2xl font-bold">Chat with advisor</p></div>
        </a>
        <Card className="p-6 flex items-start gap-4">
          <Mail className="size-6 text-primary" />
          <div><p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p><a href={`mailto:${SITE.email}`} className="text-lg font-semibold">{SITE.email}</a></div>
        </Card>
        <Card className="p-6 flex items-start gap-4">
          <MapPin className="size-6 text-primary" />
          <div><p className="text-xs uppercase tracking-wider text-muted-foreground">Office</p><p className="text-lg font-semibold">{SITE.address}</p></div>
        </Card>
      </div>
      </div>
    </div>
  );
}
