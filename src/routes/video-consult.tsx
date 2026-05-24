import { createFileRoute } from "@tanstack/react-router";
import { Video, MessageSquare, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/site";
import { HeroSlider, HERO_IMAGES } from "@/components/HeroSlider";

export const Route = createFileRoute("/video-consult")({
  head: () => ({ meta: [{ title: "Video Consultation — Priyojon Care" }] }),
  component: () => (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-accent via-background to-surface">
        <HeroSlider images={HERO_IMAGES.videoConsult} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-16 lg:py-24 text-center">
          <div className="size-20 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
            <Video className="size-9 text-primary" />
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight">Video Consultation</h1>
          <p className="text-muted-foreground mt-4 text-lg max-w-xl mx-auto">
            Connect with our visiting physicians and senior nurses face-to-face from anywhere — perfect for NRB families.
          </p>
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
      <div className="grid sm:grid-cols-3 gap-4">
        {[
          { icon: Calendar, t: "Book a slot", d: "30 or 60-minute appointments." },
          { icon: Video, t: "Secure HD video", d: "Private and encrypted." },
          { icon: MessageSquare, t: "Written summary", d: "Notes sent via WhatsApp after." },
        ].map((s) => (
          <div key={s.t} className="p-6 rounded-2xl border border-border bg-surface text-left">
            <s.icon className="size-6 text-primary mb-3" />
            <h3 className="font-semibold mb-1">{s.t}</h3>
            <p className="text-sm text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 p-6 rounded-2xl bg-accent/40 border border-accent">
        <p className="text-sm text-accent-foreground">📅 Video booking coming soon. To schedule today, message us on WhatsApp.</p>
        <Button asChild className="mt-4">
          <a href={whatsappLink("Hi! I'd like to book a video consultation.")} target="_blank" rel="noopener noreferrer">Book via WhatsApp</a>
        </Button>
      </div>
      </div>
    </div>
  ),
});
