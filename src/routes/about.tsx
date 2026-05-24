import { createFileRoute } from "@tanstack/react-router";
import { HeroSlider, HERO_IMAGES } from "@/components/HeroSlider";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Priyojon Care" },
      { name: "description", content: "Priyojon Care is a digital bridge between Bangladeshi families and verified, doctor-supervised caregivers." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-accent via-background to-surface">
        <HeroSlider images={HERO_IMAGES.about} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            <span className="w-6 h-px bg-primary" /> About us
          </span>
          <h1 className="font-display text-4xl lg:text-5xl font-bold">About Priyojon Care</h1>
          <p className="text-lg text-muted-foreground mt-4">
            আদর — meaning <em>tender affection</em> in Bangla — is at the heart of how we care for your loved ones.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 lg:py-20 prose prose-zinc">
        <h2 className="font-display text-2xl font-semibold mt-2">Why we exist</h2>
        <p className="text-muted-foreground leading-relaxed">Bangladesh's elderly population is growing, and so is the burden on adult children — many of whom live abroad or carry demanding careers. We bridge that gap with verified caregivers, doctor supervision, and a single point of contact.</p>
        <h2 className="font-display text-2xl font-semibold mt-10">Our promise</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li>✓ Every caregiver is background-verified and trained in elder care</li>
          <li>✓ Doctor-supervised plans for complex conditions</li>
          <li>✓ A care advisor reachable 24/7 — never just a chatbot</li>
          <li>✓ Transparent monthly billing — no hidden fees, no online checkout</li>
        </ul>
      </div>
    </div>
  );
}
