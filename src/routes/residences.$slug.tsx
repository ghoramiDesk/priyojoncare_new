import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Phone,
  MessageCircle,
  Check,
  Bed,
  Bath,
  Maximize2,
  PlayCircle,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, callLink, whatsappLink, formatBDT } from "@/lib/site";
import { RESIDENCE_LOCATIONS, type Apartment, type ResidenceLocation } from "@/lib/residences-data";

export const Route = createFileRoute("/residences/$slug")({
  loader: ({ params }): { location: ResidenceLocation } => {
    const location = RESIDENCE_LOCATIONS.find((l) => l.id === params.slug);
    if (!location) throw notFound();
    return { location };
  },
  head: ({ loaderData }) => {
    const loc = loaderData?.location;
    if (!loc) return { meta: [{ title: "Residence — Priyojon Care" }] };
    return {
      meta: [
        { title: `${loc.name} — Apartments, Amenities & Pricing` },
        { name: "description", content: loc.description },
        { property: "og:title", content: loc.name },
        { property: "og:description", content: loc.tagline },
        { property: "og:image", content: loc.image },
      ],
    };
  },
  errorComponent: ({ error }) => (
    <div className="max-w-2xl mx-auto px-6 py-24 text-center">
      <h1 className="font-display text-2xl font-bold mb-3">Something went wrong</h1>
      <p className="text-muted-foreground mb-6">{error.message}</p>
      <Button asChild>
        <Link to="/residences">Back to Residences</Link>
      </Button>
    </div>
  ),
  notFoundComponent: () => (
    <div className="max-w-2xl mx-auto px-6 py-24 text-center">
      <h1 className="font-display text-3xl font-bold mb-3">Residence not found</h1>
      <p className="text-muted-foreground mb-6">The location you're looking for doesn't exist.</p>
      <Button asChild>
        <Link to="/residences">Back to Residences</Link>
      </Button>
    </div>
  ),
  component: LocationDetailsPage,
});

function LocationDetailsPage() {
  const { location } = Route.useLoaderData() as { location: ResidenceLocation };
  const minPrice = Math.min(...location.apartments.map((a) => a.priceFrom));
  const shortName = location.name.split("—")[1]?.trim() ?? location.name;

  return (
    <div className="bg-surface">
      {/* HERO — editorial split */}
      <section className="relative bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 lg:pt-12 pb-12 lg:pb-16">
          <Link
            to="/residences"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="size-4" /> All Residences
          </Link>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-6">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-4">
                <span className="w-6 h-px bg-primary" /> Senior Residence
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
                {shortName}
              </h1>
              <p className="font-bangla text-2xl text-primary mt-3">{location.bn}</p>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
                {location.tagline}
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
                <span className="inline-flex items-center gap-1.5 text-foreground/80">
                  <MapPin className="size-4 text-primary" /> {location.address}
                </span>
                <span className="inline-flex items-center gap-1.5 text-foreground/80">
                  <Sparkles className="size-4 text-primary" /> From ৳{formatBDT(minPrice)}/mo
                </span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-[28px] overflow-hidden aspect-[4/3] lg:aspect-[5/4] shadow-elegant">
                <img
                  src={location.image}
                  alt={location.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <span className="absolute top-5 left-5 inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white">
                  <MapPin className="size-3.5" /> {location.area}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW + STICKY BOOKING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 lg:py-20">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
          <div className="lg:col-span-2">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              <span className="w-6 h-px bg-primary" /> About
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">
              A community designed for graceful living
            </h2>
            <p className="text-muted-foreground mt-5 leading-relaxed text-lg">{location.description}</p>

            <div className="grid sm:grid-cols-3 gap-3 mt-8">
              {location.highlights.map((h) => (
                <div
                  key={h}
                  className="p-4 rounded-2xl border border-border bg-background hover:border-primary/40 transition-colors"
                >
                  <Check className="size-5 text-primary" />
                  <p className="text-sm font-medium mt-2 leading-snug">{h}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 rounded-3xl bg-foreground text-background p-7 shadow-elegant">
              <p className="text-[10px] uppercase tracking-[0.2em] text-background/60">Indicative from</p>
              <p className="font-display text-4xl font-bold tabular-nums mt-2">
                ৳{formatBDT(minPrice)}
                <span className="text-base text-background/60 font-normal">/mo</span>
              </p>
              <p className="text-sm text-background/70 mt-2">All-inclusive senior living, dining & care.</p>

              <div className="mt-6 pt-6 border-t border-background/15">
                <p className="text-[10px] uppercase tracking-[0.2em] text-background/60">Schedule a private tour</p>
                <a href={callLink} className="font-display text-xl font-bold mt-1 inline-flex items-center gap-2">
                  <Phone className="size-5" /> {SITE.phoneDisplay}
                </a>
              </div>

              <div className="mt-6 flex flex-col gap-2.5">
                <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 gap-2 w-full">
                  <Link to="/request" search={{ service: "residences" }}>
                    Book a Visit <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-background/30 text-background hover:bg-background/10 gap-2 w-full"
                >
                  <a
                    href={whatsappLink(`Hi, I'd like a tour of ${location.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="size-4" /> WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
          </aside>
        </div>

        {/* VIDEO TOUR */}
        {location.video && (
          <div className="mt-16">
            <div className="flex items-end justify-between mb-5 gap-4 flex-wrap">
              <div>
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-2">
                  <span className="w-6 h-px bg-primary" /> Walk-through
                </span>
                <h3 className="font-display text-2xl lg:text-3xl font-bold tracking-tight">Video tour</h3>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-elegant bg-black aspect-video">
              <video
                controls
                preload="metadata"
                poster={location.videoPoster}
                className="w-full h-full object-cover"
              >
                <source src={location.video} type="video/mp4" />
              </video>
            </div>
          </div>
        )}

        {/* GALLERY — editorial mosaic */}
        <div className="mt-16">
          <div className="flex items-end justify-between mb-5">
            <div>
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-2">
                <span className="w-6 h-px bg-primary" /> Gallery
              </span>
              <h3 className="font-display text-2xl lg:text-3xl font-bold tracking-tight">
                Inside the residence
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-4 grid-rows-2 gap-3 sm:gap-4 h-[440px] sm:h-[560px]">
            {location.gallery.slice(0, 5).map((src, i) => {
              const layouts = [
                "col-span-2 row-span-2",
                "col-span-2 row-span-1",
                "col-span-1 row-span-1",
                "col-span-1 row-span-1",
                "col-span-2 row-span-1",
              ];
              return (
                <div
                  key={src}
                  className={`relative overflow-hidden rounded-2xl border border-border ${layouts[i] ?? "col-span-1 row-span-1"}`}
                >
                  <img
                    src={src}
                    alt={`${location.name} photo ${i + 1}`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* APARTMENTS */}
      <section className="bg-background py-16 lg:py-24 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              <span className="w-6 h-px bg-primary" /> Apartments
            </span>
            <h2 className="font-display text-3xl lg:text-5xl font-bold tracking-tight leading-[1.05]">
              Choose your residence
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Each apartment is designed for senior comfort, safety, and independence.
            </p>
          </div>

          <div className="space-y-16 lg:space-y-24">
            {location.apartments.map((apt, idx) => (
              <ApartmentRow key={apt.id} apt={apt} index={idx} reverse={idx % 2 === 1} location={location} />
            ))}
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            <span className="w-6 h-px bg-primary" /> Community Amenities
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">
            Everything on-site, every day
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {location.amenities.map((a) => (
            <div
              key={a.label}
              className="group flex flex-col items-center text-center p-5 rounded-2xl bg-background border border-border hover:border-primary hover:bg-primary/5 transition-all"
            >
              <span className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <a.icon className="size-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </span>
              <p className="text-sm font-medium mt-3 leading-tight">{a.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground text-background py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl lg:text-5xl font-bold mb-4 leading-tight">
            Ready to see {shortName} in person?
          </h2>
          <p className="text-background/80 max-w-2xl mx-auto mb-8 text-lg">
            Book a private tour and meet the community.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 gap-2">
              <Link to="/request" search={{ service: "residences" }}>
                Book a Visit <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-background/30 text-background hover:bg-background/10 gap-2"
            >
              <a href={callLink}>
                <Phone className="size-4" /> Call {SITE.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function ApartmentRow({
  apt,
  index,
  reverse,
  location,
}: {
  apt: Apartment;
  index: number;
  reverse: boolean;
  location: ResidenceLocation;
}) {
  const [activeImg, setActiveImg] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const mediaSlot = (
    <div>
      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border bg-black shadow-elegant">
        {showVideo && apt.video ? (
          <video
            controls
            autoPlay
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={apt.video} type="video/mp4" />
          </video>
        ) : (
          <>
            <img
              src={apt.gallery[activeImg]}
              alt={`${apt.type} photo ${activeImg + 1}`}
              className="absolute inset-0 w-full h-full object-cover transition-opacity"
            />
            <div className="absolute top-5 left-5">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white">
                {apt.size}
              </span>
            </div>
            {apt.video && (
              <button
                type="button"
                onClick={() => setShowVideo(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group"
                aria-label="Play video tour"
              >
                <span className="size-16 rounded-full bg-white/95 text-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <PlayCircle className="size-10" />
                </span>
              </button>
            )}
          </>
        )}
      </div>
      {!showVideo && apt.gallery.length > 1 && (
        <div className="grid grid-cols-4 gap-2.5 mt-3">
          {apt.gallery.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActiveImg(i)}
              className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                i === activeImg
                  ? "border-primary shadow-card"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );

  const infoSlot = (
    <div>
      <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
        Apartment · 0{index + 1}
      </p>
      <h3 className="font-display text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
        {apt.type}
      </h3>
      <p className="font-bangla text-base text-primary mt-1">{apt.bn}</p>
      <p className="text-muted-foreground mt-5 leading-relaxed">{apt.description}</p>

      <div className="grid grid-cols-3 gap-2.5 mt-6">
        {[
          { Icon: Bed, label: "Beds", value: String(apt.beds) },
          { Icon: Bath, label: "Baths", value: String(apt.baths) },
          { Icon: Maximize2, label: "Size", value: apt.size },
        ].map((s) => (
          <div
            key={s.label}
            className="p-4 rounded-2xl border border-border bg-surface flex flex-col items-start"
          >
            <s.Icon className="size-5 text-primary" />
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-2">{s.label}</p>
            <p className="font-bold text-sm mt-0.5">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
          Features
        </h4>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
          {apt.features.map((f) => (
            <div key={f} className="flex items-start gap-2 text-sm">
              <Check className="size-4 text-primary shrink-0 mt-0.5" />
              <span className="text-foreground/80">{f}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-7 pt-6 border-t border-dashed border-border flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Indicative rent</p>
          <p className="font-display text-2xl lg:text-3xl font-bold tabular-nums leading-none mt-1">
            ৳{formatBDT(apt.priceFrom)}
            <span className="text-muted-foreground font-normal text-base"> – </span>
            ৳{formatBDT(apt.priceTo)}
            <span className="text-sm text-muted-foreground font-normal">/mo</span>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2.5">
          <Button asChild className="shadow-cta gap-2">
            <Link to="/request" search={{ service: "residences" }}>
              Book a Visit <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="gap-2">
            <a
              href={whatsappLink(`Hi, I'd like more details about the ${apt.type} at ${location.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="size-4" /> WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <article className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <div className={reverse ? "lg:order-2" : ""}>{mediaSlot}</div>
      <div className={reverse ? "lg:order-1" : ""}>{infoSlot}</div>
    </article>
  );
}
