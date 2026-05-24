import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, Phone, ArrowLeft, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PackageCard } from "@/components/PackageCard";
import {
  SERVICES,
  callLink,
  whatsappLink,
  SITE,
  formatBDT,
  unitLabel,
  unitLabelBn,
  type Service,
} from "@/lib/site";
import { HeroSlider, HERO_IMAGES } from "@/components/HeroSlider";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.service.title} — Pricing & Packages — Priyojon Care` },
          { name: "description", content: loaderData.service.summary },
          { property: "og:title", content: `${loaderData.service.title} — Priyojon Care` },
          { property: "og:description", content: loaderData.service.summary },
        ]
      : [],
  }),
  component: ServiceDetail,
  notFoundComponent: () => (
    <div className="max-w-2xl mx-auto px-6 py-24 text-center">
      <h1 className="font-display text-3xl font-bold">Service not found</h1>
      <Link to="/services" className="text-primary mt-4 inline-block">
        Back to services
      </Link>
    </div>
  ),
});

function ServiceDetail() {
  const { service } = Route.useLoaderData() as { service: Service };

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface">
        <HeroSlider images={HERO_IMAGES.service} />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="size-4" /> All services
          </Link>
          <p className="font-bangla text-primary font-medium mb-2">{service.bangla}</p>
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight">{service.title}</h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl">{service.tagline}</p>
          <div className="flex flex-wrap gap-2 mt-6">
            {service.subServices.map((sub) => (
              <span
                key={sub}
                className="text-sm px-3 py-1.5 rounded-full bg-background border border-border font-medium"
              >
                {sub}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 lg:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="font-display text-2xl lg:text-3xl font-bold">Choose a Package</h2>
            <p className="font-bangla text-muted-foreground mt-1">আপনার পরিবারের জন্য সঠিক প্ল্যান বেছে নিন</p>
          </div>
          <Button asChild variant="outline">
            <Link to="/request" search={{ service: service.slug, package: "custom" }}>
              Build Custom Plan
            </Link>
          </Button>
        </div>

        <div
          className={`grid gap-5 ${
            service.packages.length >= 4
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1 md:grid-cols-3"
          }`}
        >
          {service.packages.map((p) => (
            <PackageCard key={p.id} pkg={p} serviceSlug={service.slug} ctaLabel={service.cta} />
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-surface py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl lg:text-3xl font-bold mb-2">Quick Comparison</h2>
          <p className="text-muted-foreground mb-8">
            All prices are indicative — final pricing is confirmed after a call with your care advisor.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-border bg-background">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="text-left p-4 font-semibold">Plan</th>
                  <th className="text-left p-4 font-semibold">Price (BDT)</th>
                  <th className="text-left p-4 font-semibold hidden md:table-cell">Includes</th>
                  <th className="text-right p-4" />
                </tr>
              </thead>
              <tbody>
                {service.packages.map((p) => (
                  <tr key={p.id} className="border-b border-border last:border-0">
                    <td className="p-4">
                      <div className="font-semibold">
                        {p.name}{" "}
                        {p.popular && (
                          <span className="ml-1.5 text-[10px] uppercase tracking-wider bg-primary text-primary-foreground px-1.5 py-0.5 rounded">
                            Popular
                          </span>
                        )}
                      </div>
                      <div className="font-bangla text-xs text-primary mt-0.5">{p.bangla}</div>
                    </td>
                    <td className="p-4 tabular-nums">
                      <span className="font-semibold">
                        ৳{formatBDT(p.priceFrom)} – ৳{formatBDT(p.priceTo)}
                      </span>
                      <div className="text-xs text-muted-foreground">
                        <span className="font-bangla">{unitLabelBn[p.unit]}</span> {unitLabel[p.unit]}
                      </div>
                    </td>
                    <td className="p-4 hidden md:table-cell">
                      <ul className="space-y-1">
                        {p.features.slice(0, 3).map((f) => (
                          <li key={f} className="flex items-start gap-1.5">
                            <Check className="size-3.5 text-primary shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="p-4 text-right">
                      <Button asChild size="sm">
                        <Link to="/request" search={{ service: service.slug, package: p.id }}>
                          Request
                        </Link>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-foreground text-background py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl font-bold mb-3">Talk to a Care Advisor</h2>
          <p className="font-bangla text-background/80 mb-2">
            পরিবারের প্রয়োজন বুঝে সঠিক প্ল্যান বেছে নিতে সাহায্য করব।
          </p>
          <p className="text-background/70 mb-7">
            Final pricing, payment terms and start date are confirmed offline. No card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 gap-2">
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
                href={whatsappLink(`Hi, I'd like info about ${service.title} packages.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="size-4" /> WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
