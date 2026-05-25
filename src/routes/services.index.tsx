import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  Hospital,
  Brain,
  House,
  Phone,
  MessageCircle,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES, callLink, whatsappLink, formatBDT, SITE } from "@/lib/site";
import { serviceLinkProps } from "@/lib/routes";
import { HeroSlider, HERO_IMAGES } from "@/components/HeroSlider";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services & Pricing — Priyojon Care" },
      {
        name: "description",
        content:
          "Transparent care packages with BDT pricing — residences, care homes, memory care, and home care across Dhaka.",
      },
      { property: "og:title", content: "Care Packages with Pricing — Priyojon Care" },
      {
        property: "og:description",
        content:
          "Choose a structured plan that fits your family's budget and your loved one's needs.",
      },
    ],
  }),
  component: ServicesIndex,
});

const ICONS = { residence: Building2, carehome: Hospital, memory: Brain, homecare: House } as const;

const SERVICE_IMAGES: Record<string, string> = {
  residences:
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80&auto=format&fit=crop",
  "care-homes":
    "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&q=80&auto=format&fit=crop",
  "memory-care":
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80&auto=format&fit=crop",
  "care-at-home":
    "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1200&q=80&auto=format&fit=crop",
  "home-care":
    "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1200&q=80&auto=format&fit=crop",
};

function ServicesIndex() {
  return (
    <div className="bg-surface">
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-accent via-background to-surface">
        <HeroSlider images={HERO_IMAGES.service} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-16 lg:pt-40 pb-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              <span className="w-6 h-px bg-primary" /> Services & Packages
            </span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight">
              Structured care plans with <span className="text-primary">transparent pricing</span>
            </h1>
            <p className="font-bangla text-lg text-muted-foreground mt-4">
              পরিষ্কার প্যাকেজ, পরিবার অনুযায়ী প্ল্যান। প্রতিটি সার্ভিসের বিস্তারিত আলাদা পেজে।
            </p>
          </div>
        </div>
      </section>

      {/* Service grid — each card links to its own dedicated detail page */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 mt-10">
        <div className="grid gap-6 md:grid-cols-4">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon];
            const min = Math.min(...s.packages.map((p) => p.priceFrom));
            const max = Math.max(...s.packages.map((p) => p.priceTo));
            return (
              <Link
                {...serviceLinkProps(s.slug)}
                className="group relative block overflow-hidden rounded-xl border border-border bg-background hover:border-primary hover:shadow-card transition-all h-full"
              >
                {/* Image */}
                <div className="relative h-60 w-full overflow-hidden">
                  <img
                    src={SERVICE_IMAGES[s.slug] ?? SERVICE_IMAGES.residences}
                    alt={s.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />

                  {/* Bottom white gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-35 bg-gradient-to-t from-white via-white/90 to-transparent" />

                  {/* Text over image */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
                    <h3 className="font-semibold text-lg mb-1 text-foreground">{s.title}</h3>

                    <p className="font-bangla text-xs text-primary mb-2">{s.bangla}</p>

                    <p className="text-sm text-muted-foreground leading-relaxed">{s.tagline}</p>
                  </div>
                </div>
              </Link>
              // <Link
              //   key={s.slug}
              //   {...serviceLinkProps(s.slug)}
              //   className="group flex flex-col rounded-2xl bg-background border border-border hover:border-primary hover:shadow-card transition-all overflow-hidden"
              // >
              //   <div className="relative aspect-[16/9] overflow-hidden bg-muted">
              //     <img
              //       src={SERVICE_IMAGES[s.slug] ?? SERVICE_IMAGES.residences}
              //       alt={s.title}
              //       loading="lazy"
              //       className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              //     />
              //     <div className="absolute top-4 left-4 size-12 rounded-xl bg-background/95 backdrop-blur flex items-center justify-center shadow-sm">
              //       <Icon className="size-6 text-primary" />
              //     </div>
              //     <span className="absolute top-4 right-4 text-[11px] font-semibold uppercase tracking-wider text-foreground bg-background/95 backdrop-blur px-2.5 py-1 rounded-full">
              //       {s.packages.length} packages
              //     </span>
              //   </div>
              //   <div className="flex flex-col p-6 lg:p-8 flex-1">

              //   <p className="font-bangla text-primary font-medium text-sm">{s.bangla}</p>
              //   <h2 className="font-display text-2xl font-bold tracking-tight mt-1">{s.title}</h2>
              //   <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{s.summary}</p>

              //   <ul className="mt-4 space-y-1.5">
              //     {s.subServices.slice(0, 4).map((sub) => (
              //       <li key={sub} className="flex items-start gap-2 text-sm">
              //         <Check className="size-4 text-primary shrink-0 mt-0.5" />
              //         <span className="text-foreground/80">{sub}</span>
              //       </li>
              //     ))}
              //   </ul>

              //   <div className="mt-auto pt-6 flex items-end justify-between border-t border-border mt-6">
              //     <div>
              //       <p className="text-xs uppercase tracking-wider text-muted-foreground">Starting from</p>
              //       <p className="font-display text-xl font-bold mt-0.5 tabular-nums">
              //         ৳{formatBDT(min)} <span className="text-sm font-normal text-muted-foreground">– ৳{formatBDT(max)}</span>
              //       </p>
              //     </div>
              //     <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
              //       View details <ArrowRight className="size-4" />
              //     </span>
              //   </div>
              //   </div>
              // </Link>
            );
          })}
        </div>
      </section>

      {/* Help band */}
      <section className="bg-foreground text-background py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl font-bold mb-3">Not sure which plan fits?</h2>
          <p className="font-bangla text-background/80 mb-2">
            আমাদের কেয়ার অ্যাডভাইজার আপনাকে সাহায্য করবেন।
          </p>
          <p className="text-background/70 mb-7 max-w-xl mx-auto">
            Talk to a care advisor — we'll listen, suggest the right plan, and confirm pricing
            offline. No payment online, ever.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 gap-2"
            >
              <a href={callLink}>
                <Phone className="size-4" /> Call {SITE.phoneDisplay}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-background/30 text-background hover:bg-background/10 gap-2"
            >
              <a
                href={whatsappLink("Hi, I'd like advice on choosing a care package.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="size-4" /> WhatsApp Advisor
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
