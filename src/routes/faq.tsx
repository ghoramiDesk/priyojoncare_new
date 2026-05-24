import { createFileRoute } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HeroSlider, HERO_IMAGES } from "@/components/HeroSlider";
import { FAQS } from "@/lib/faqs";

export const Route = createFileRoute("/faq")({
  head: () => ({ meta: [{ title: "FAQ — Priyojon Care" }, { name: "description", content: "Common questions about pricing, caregivers, areas served, and how Priyojon Care works." }] }),
  component: () => (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-accent via-background to-surface">
        <HeroSlider images={HERO_IMAGES.faq} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight">Frequently Asked Questions</h1>
          <p className="text-muted-foreground mt-4 text-lg">Answers to the questions families ask us most.</p>
        </div>
      </section>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <Accordion type="single" collapsible>
          {FAQS.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  ),
});
