import { createFileRoute, Link } from "@tanstack/react-router";
import { residenceLinkProps } from "@/lib/routes";
import {
  Phone,
  MessageCircle,
  Check,
  ArrowRight,
  Sparkles,
  Users,
  ShieldCheck,
  Stethoscope,
  CalendarHeart,
  Dumbbell,
  UtensilsCrossed,
  BellRing,
  HeartPulse,
  Brain,
  Smile,
  BookOpen,
  Sun,
  Building2,
  Bell,
  Accessibility,
  MapPin,
  Home,
  Wifi,
  Car,
  Trees,
  Coffee,
  ShoppingBag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, callLink, whatsappLink, formatBDT, SERVICES } from "@/lib/site";
import { HeroSlider, HERO_IMAGES } from "@/components/HeroSlider";

const LIFESTYLE = [
  {
    icon: Users,
    title: "Social Community",
    bn: "সামাজিক জীবন",
    desc: "Meet peers, share meals, build friendships.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    bn: "নিরাপত্তা",
    desc: "24/7 security and emergency response.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare Access",
    bn: "চিকিৎসা সেবা",
    desc: "On-site clinic and visiting doctors.",
  },
  {
    icon: CalendarHeart,
    title: "Activities & Events",
    bn: "আয়োজন ও বিনোদন",
    desc: "Curated cultural and recreational events.",
  },
];

const AMENITIES = [
  {
    icon: Dumbbell,
    title: "Gym, Yoga & Swimming",
    desc: "Senior-safe fitness with trained instructors.",
  },
  {
    icon: UtensilsCrossed,
    title: "Dining & Nutrition",
    desc: "Chef-prepared, dietitian-approved meals.",
  },
  { icon: HeartPulse, title: "Medical Support", desc: "On-call nurses and emergency response." },
  {
    icon: BellRing,
    title: "Concierge Services",
    desc: "Housekeeping, laundry, errands, transport.",
  },
];

const WELLNESS = [
  { icon: HeartPulse, label: "Physical", bn: "শারীরিক", color: "from-rose-500/10 to-rose-500/0" },
  { icon: Users, label: "Social", bn: "সামাজিক", color: "from-amber-500/10 to-amber-500/0" },
  { icon: Smile, label: "Emotional", bn: "আবেগিক", color: "from-pink-500/10 to-pink-500/0" },
  {
    icon: BookOpen,
    label: "Intellectual",
    bn: "বুদ্ধিবৃত্তিক",
    color: "from-sky-500/10 to-sky-500/0",
  },
  { icon: Sun, label: "Spiritual", bn: "আধ্যাত্মিক", color: "from-violet-500/10 to-violet-500/0" },
];

type ApartmentType = {
  type: string;
  bn: string;
  size: string;
  priceFrom: number;
  priceTo: number;
};

type Location = {
  id: string;
  name: string;
  bn: string;
  area: string;
  address: string;
  image: string;
  tagline: string;
  highlights: string[];
  apartments: ApartmentType[];
  amenities: { icon: typeof Home; label: string }[];
};

const LOCATIONS: Location[] = [
  {
    id: "gulshan",
    name: "Priyojon Residences — Gulshan",
    bn: "গুলশান",
    area: "Gulshan-2, Dhaka",
    address: "Road 41, Gulshan-2, Dhaka 1212",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80&auto=format&fit=crop",
    tagline: "Premium high-rise living in the heart of diplomatic Dhaka.",
    highlights: ["Rooftop garden & lounge", "On-site clinic 24/7", "Walking distance to lakes"],
    apartments: [
      { type: "Studio Suite", bn: "স্টুডিও", size: "550 sqft", priceFrom: 65000, priceTo: 85000 },
      { type: "1 BHK Deluxe", bn: "১ বেডরুম", size: "850 sqft", priceFrom: 95000, priceTo: 125000 },
      {
        type: "2 BHK Premium",
        bn: "২ বেডরুম",
        size: "1,250 sqft",
        priceFrom: 145000,
        priceTo: 185000,
      },
    ],
    amenities: [
      { icon: Dumbbell, label: "Gym & Yoga" },
      { icon: UtensilsCrossed, label: "Fine Dining" },
      { icon: Wifi, label: "High-speed Wi-Fi" },
      { icon: Car, label: "Valet Parking" },
      { icon: Stethoscope, label: "On-site Clinic" },
      { icon: Trees, label: "Rooftop Garden" },
    ],
  },
  {
    id: "dhanmondi",
    name: "Priyojon Residences — Dhanmondi",
    bn: "ধানমন্ডি",
    area: "Dhanmondi, Dhaka",
    address: "Road 27, Dhanmondi, Dhaka 1209",
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80&auto=format&fit=crop",
    tagline: "Cultural heartland with lakeside views and easy hospital access.",
    highlights: ["Lakeside walking paths", "Library & cultural hall", "Near top hospitals"],
    apartments: [
      { type: "Studio Suite", bn: "স্টুডিও", size: "500 sqft", priceFrom: 55000, priceTo: 75000 },
      {
        type: "1 BHK Classic",
        bn: "১ বেডরুম",
        size: "800 sqft",
        priceFrom: 85000,
        priceTo: 110000,
      },
      {
        type: "2 BHK Family",
        bn: "২ বেডরুম",
        size: "1,150 sqft",
        priceFrom: 130000,
        priceTo: 165000,
      },
    ],
    amenities: [
      { icon: BookOpen, label: "Library" },
      { icon: Coffee, label: "Café Lounge" },
      { icon: Trees, label: "Lakeside Walks" },
      { icon: HeartPulse, label: "On-call Nurse" },
      { icon: Bell, label: "Emergency Alarms" },
      { icon: Car, label: "Covered Parking" },
    ],
  },
  {
    id: "uttara",
    name: "Priyojon Residences — Uttara",
    bn: "উত্তরা",
    area: "Sector 7, Uttara, Dhaka",
    address: "Road 15, Sector 7, Uttara, Dhaka 1230",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format&fit=crop",
    tagline: "Spacious, modern community close to airport and family neighbourhoods.",
    highlights: ["Wide green campus", "Senior-safe swimming pool", "10 mins from airport"],
    apartments: [
      { type: "Studio Suite", bn: "স্টুডিও", size: "520 sqft", priceFrom: 50000, priceTo: 70000 },
      { type: "1 BHK Garden", bn: "১ বেডরুম", size: "820 sqft", priceFrom: 78000, priceTo: 105000 },
      {
        type: "2 BHK Villa",
        bn: "২ বেডরুম",
        size: "1,300 sqft",
        priceFrom: 120000,
        priceTo: 158000,
      },
    ],
    amenities: [
      { icon: Dumbbell, label: "Pool & Gym" },
      { icon: Trees, label: "Green Campus" },
      { icon: ShoppingBag, label: "Convenience Store" },
      { icon: UtensilsCrossed, label: "Community Dining" },
      { icon: Stethoscope, label: "Visiting Doctors" },
      { icon: Car, label: "Shuttle Service" },
    ],
  },
];

const DESIGN = [
  {
    icon: Building2,
    title: "Senior-Friendly Architecture",
    bn: "সিনিয়র-বান্ধব ডিজাইন",
    desc: "Step-free layouts, wide doorways, grab rails, anti-slip floors.",
  },
  {
    icon: Bell,
    title: "Emergency Alarms in Every Room",
    bn: "জরুরি অ্যালার্ম",
    desc: "One-touch help with response in minutes.",
  },
  {
    icon: Accessibility,
    title: "Safe Mobility Throughout",
    bn: "নিরাপদ চলাচল",
    desc: "Ramps, elevators, well-lit corridors, handrails everywhere.",
  },
];

const residencesService = SERVICES.find((s) => s.slug === "residences")!;
const monthlyPackages = residencesService.packages.filter((p) => p.unit === "month");

export function ResidencesPage() {
  return (
    <div className="bg-surface">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-accent via-background to-surface">
        <HeroSlider images={HERO_IMAGES.residences} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-16 lg:pt-24 pb-16 lg:pb-20">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                <span className="w-6 h-px bg-primary" /> Senior Residences
              </span>
              <h1 className="font-bangla font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
                স্বাধীন জীবন, নিরাপদ পরিবেশ
              </h1>
              <p className="font-display text-lg lg:text-xl text-muted-foreground mt-5 max-w-2xl">
                Live your golden years with comfort, community, and care — premium residences built
                for active, independent seniors.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button asChild size="lg" className="shadow-cta gap-2">
                  <Link to="/request" search={{ service: "residences" }}>
                    Book a Visit <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2 text-black !text-black">
                  <a
                    href={whatsappLink(
                      "Hi, I'd like to talk to an expert about senior residences.",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="size-4 text-black !text-black" /> Talk to Expert
                  </a>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-background border border-border p-8">
                <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <Building2 className="size-7 text-black !text-black" />
                </div>

                <h2 className="font-display text-2xl font-bold mb-2 text-black !text-black">
                  A new chapter, beautifully designed
                </h2>

                <p className="text-sm leading-relaxed text-black !text-black">
                  Modern senior living communities designed for active, independent seniors who want
                  freedom, friendship, and peace of mind — all in one place.
                </p>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs uppercase tracking-wider text-black !text-black">
                    Schedule a tour
                  </p>

                  <a
                    href={callLink}
                    className="font-display text-xl font-bold text-black !text-black mt-1 inline-flex items-center gap-2"
                  >
                    <Phone className="size-5" /> {SITE.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIFESTYLE BENEFITS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            <span className="w-6 h-px bg-primary" /> Lifestyle Benefits
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">
            More than a home — a lifestyle
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {LIFESTYLE.map((l) => (
            <div
              key={l.title}
              className="p-6 rounded-2xl bg-background border border-border hover:border-primary/40 hover:shadow-card transition-all"
            >
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <l.icon className="size-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold">{l.title}</h3>
              <p className="font-bangla text-sm text-primary mt-0.5">{l.bn}</p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{l.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AMENITIES */}
      <section className="bg-background py-16 lg:py-20 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              <span className="w-6 h-px bg-primary" /> Amenities
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">
              Everything you need, on-site
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {AMENITIES.map((a) => (
              <div
                key={a.title}
                className="flex gap-5 p-6 rounded-2xl bg-surface border border-border"
              >
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <a.icon className="size-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold">{a.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WELLNESS PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            <span className="w-6 h-px bg-primary" /> Five Pillars of Wellness
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">
            Holistic wellbeing, every day
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {WELLNESS.map((w) => (
            <div
              key={w.label}
              className={`relative p-6 rounded-2xl bg-gradient-to-b ${w.color} border border-border text-center hover:shadow-card transition-all`}
            >
              <div className="size-14 rounded-2xl bg-background border border-border flex items-center justify-center mx-auto mb-4">
                <w.icon className="size-7 text-primary" />
              </div>
              <h3 className="font-display font-bold">{w.label}</h3>
              <p className="font-bangla text-sm text-muted-foreground mt-0.5">{w.bn}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LOCATIONS */}
      <section id="locations" className="bg-background py-16 lg:py-20 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              <span className="w-6 h-px bg-primary" /> Our Locations
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">
              Find your perfect residence in Dhaka
            </h2>
            <p className="text-muted-foreground mt-3">
              Each community is uniquely designed for its neighbourhood — explore apartments,
              amenities, and indicative monthly rent.
            </p>
          </div>

          <div className="space-y-8 lg:space-y-10">
            {LOCATIONS.map((loc, idx) => {
              const minPrice = Math.min(...loc.apartments.map((a) => a.priceFrom));
              const reverse = idx % 2 === 1;
              return (
                <Link
                  key={loc.id}
                  {...residenceLinkProps(loc.id)}
                  className="group block overflow-hidden rounded-3xl bg-surface border border-border shadow-card hover:shadow-elegant hover:border-primary/40 transition-all"
                >
                  <div className="grid lg:grid-cols-5 gap-0">
                    <div
                      className={`relative lg:col-span-3 aspect-[16/10] lg:aspect-auto lg:min-h-[360px] overflow-hidden ${reverse ? "lg:order-2" : ""}`}
                    >
                      <img
                        src={loc.image}
                        alt={loc.name}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent lg:bg-gradient-to-r lg:from-black/40 lg:via-transparent lg:to-transparent" />
                      <span className="absolute top-5 left-5 inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white">
                        <MapPin className="size-3.5" /> {loc.area}
                      </span>
                      <div className="absolute bottom-5 left-5 text-white">
                        <p className="font-bangla text-2xl font-bold drop-shadow-md">{loc.bn}</p>
                      </div>
                    </div>
                    <div
                      className={`lg:col-span-2 p-7 lg:p-9 flex flex-col justify-between gap-6 ${reverse ? "lg:order-1" : ""}`}
                    >
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                          Residence · 0{idx + 1}
                        </p>
                        <h3 className="font-display text-2xl lg:text-3xl font-bold leading-tight tracking-tight">
                          {loc.name.split("—")[1]?.trim() ?? loc.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                          {loc.tagline}
                        </p>
                        <ul className="mt-5 space-y-2">
                          {loc.highlights.slice(0, 3).map((h) => (
                            <li key={h} className="flex items-start gap-2 text-sm">
                              <Check className="size-4 text-primary shrink-0 mt-0.5" />
                              <span className="text-foreground/80">{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-end justify-between gap-4 pt-5 border-t border-dashed border-border">
                        <div>
                          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                            From
                          </p>
                          <p className="text-2xl font-bold tabular-nums leading-none mt-1">
                            ৳{formatBDT(minPrice)}
                            <span className="text-sm text-muted-foreground font-normal">/mo</span>
                          </p>
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary px-4 py-2 rounded-full border border-primary/30 bg-primary/5 group-hover:bg-primary group-hover:text-primary-foreground group-hover:gap-2.5 transition-all">
                          Explore <ArrowRight className="size-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="bg-background py-16 lg:py-20 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              <span className="w-6 h-px bg-primary" /> Packages & Pricing
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">
              Choose the plan that fits your life
            </h2>
            <p className="text-muted-foreground mt-3">
              All prices are indicative — final pricing is confirmed after a visit and consultation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {monthlyPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative flex flex-col p-7 rounded-2xl border bg-surface transition-all ${
                  pkg.popular
                    ? "border-primary shadow-elegant ring-1 ring-primary/20"
                    : "border-border hover:border-primary/40 hover:shadow-card"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-7 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold shadow-sm">
                    <Sparkles className="size-3" /> Most Popular
                  </span>
                )}
                <h3 className="font-display text-xl font-semibold">{pkg.name}</h3>
                <p className="font-bangla text-sm text-primary mt-0.5">{pkg.bangla}</p>
                <div className="mt-5 mb-6">
                  <div className="flex items-baseline gap-1.5 flex-wrap">
                    <span className="text-3xl font-bold tabular-nums">
                      ৳{formatBDT(pkg.priceFrom)}
                    </span>
                    <span className="text-muted-foreground">–</span>
                    <span className="text-3xl font-bold tabular-nums">
                      ৳{formatBDT(pkg.priceTo)}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    per month · indicative pricing
                  </p>
                </div>
                <ul className="space-y-2.5 mb-7 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check className="size-4 text-primary shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  size="lg"
                  variant={pkg.popular ? "default" : "outline"}
                  className={`w-full ${pkg.popular ? "shadow-cta" : ""}`}
                >
                  <Link to="/request" search={{ service: "residences", package: pkg.id }}>
                    Book a Visit
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN FEATURES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            <span className="w-6 h-px bg-primary" /> Design Features
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">
            Built around senior safety
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {DESIGN.map((d) => (
            <div key={d.title} className="p-6 rounded-2xl bg-background border border-border">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <d.icon className="size-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold">{d.title}</h3>
              <p className="font-bangla text-sm text-primary mt-0.5">{d.bn}</p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-foreground text-background py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-bangla text-3xl lg:text-4xl font-bold mb-4">
            একবার ঘুরে দেখুন — পার্থক্যটা নিজেই বুঝবেন
          </h2>
          <p className="text-background/80 max-w-2xl mx-auto mb-8">
            Schedule a personal visit to experience the lifestyle, meet our community, and explore
            the residences.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 gap-2"
            >
              <Link to="/request" search={{ service: "residences" }}>
                Schedule a Visit <ArrowRight className="size-4" />
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
