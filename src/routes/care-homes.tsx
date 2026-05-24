import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Phone,
  MessageCircle,
  Check,
  X,
  Hospital,
  Heart,
  ShieldCheck,
  HeartPulse,
  Users,
  Clock,
  Stethoscope,
  Activity,
  UtensilsCrossed,
  Bell,
  Smile,
  Home,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, callLink, whatsappLink, formatBDT, SERVICES } from "@/lib/site";
import { HeroSlider, HERO_IMAGES } from "@/components/HeroSlider";

export const Route = createFileRoute("/care-homes")({
  head: () => ({
    meta: [
      { title: "Care Homes — A Safe, Homely Alternative to Hospitals — Priyojon Care" },
      {
        name: "description",
        content:
          "Professional care homes in Dhaka offering 24/7 clinical support, assisted living, rehab, and post-surgery recovery — warm, dignified, and homely.",
      },
      { property: "og:title", content: "Care Homes — Priyojon Care" },
      {
        property: "og:description",
        content: "হাসপাতাল নয়, আপনার প্রিয়জনের জন্য নিরাপদ ঘর — care, dignity & recovery.",
      },
    ],
  }),
  component: CareHomesPage,
});

const TRUST = [
  { icon: Users, label: "3,000+ Residents Served", bn: "৩০০০+ সদস্য" },
  { icon: Clock, label: "24/7 Clinical Support", bn: "২৪/৭ ক্লিনিক্যাল সাপোর্ট" },
  { icon: ShieldCheck, label: "Trained Caregivers", bn: "প্রশিক্ষিত কেয়ারগিভার" },
];

const APPROACH: { title: string; bn: string; desc: string; image: string }[] = [
  {
    title: "Assisted Living",
    bn: "অ্যাসিস্টেড লিভিং",
    desc: "Daily personal assistance in a homely, supervised setting.",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Rehabilitation Care",
    bn: "রিহ্যাব কেয়ার",
    desc: "Structured physiotherapy and recovery support after illness.",
    image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Post-Surgery Recovery",
    bn: "পোস্ট-সার্জারি রিকভারি",
    desc: "Continuous nursing and monitoring after hospital discharge.",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Palliative Care",
    bn: "প্যালিয়েটিভ কেয়ার",
    desc: "Compassionate end-of-life comfort, dignity, and family support.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
  },
];

type Cell = boolean | "partial";
const COMPARE: { feature: string; bn: string; carehome: Cell; hospital: Cell; home: Cell }[] = [
  { feature: "Personal attention", bn: "ব্যক্তিগত যত্ন", carehome: true, hospital: false, home: "partial" },
  { feature: "24/7 medical supervision", bn: "২৪/৭ মেডিকেল তদারকি", carehome: true, hospital: true, home: false },
  { feature: "Calm, homely environment", bn: "শান্ত ঘরোয়া পরিবেশ", carehome: true, hospital: false, home: true },
  { feature: "Faster recovery setting", bn: "দ্রুত আরোগ্য", carehome: true, hospital: "partial", home: "partial" },
  { feature: "Social interaction", bn: "সামাজিক জীবন", carehome: true, hospital: false, home: false },
  { feature: "Affordability long-term", bn: "দীর্ঘমেয়াদে সাশ্রয়ী", carehome: true, hospital: false, home: "partial" },
];

const FEATURES = [
  { icon: UtensilsCrossed, title: "Nutritious Meals", bn: "পুষ্টিকর খাবার" },
  { icon: Stethoscope, title: "Regular Doctor Visits", bn: "নিয়মিত ডাক্তার ভিজিট" },
  { icon: Bell, title: "Emergency Response", bn: "জরুরি সেবা" },
  { icon: Smile, title: "Activities & Social Life", bn: "সামাজিক কার্যক্রম" },
];

const carehomeService = SERVICES.find((s) => s.slug === "care-homes")!;

function Cmp({ value }: { value: Cell }) {
  if (value === true) return <Check className="size-5 text-primary mx-auto" aria-label="Yes" />;
  if (value === false) return <X className="size-5 text-muted-foreground/50 mx-auto" aria-label="No" />;
  return <span className="text-xs font-semibold text-muted-foreground">Partial</span>;
}

function CareHomesPage() {
  return (
    <div className="bg-surface">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-accent via-background to-surface">
        <HeroSlider images={HERO_IMAGES.careHomes} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-16 lg:pt-24 pb-16 lg:pb-20">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                <span className="w-6 h-px bg-primary" /> Care Homes
              </span>
              <h1 className="font-bangla font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
                হাসপাতাল নয়, আপনার প্রিয়জনের জন্য নিরাপদ ঘর
              </h1>
              <p className="font-display text-lg lg:text-xl text-muted-foreground mt-5 max-w-2xl">
                A place where seniors receive medical care, emotional support, and dignity — all under one warm,
                professionally managed roof.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button asChild size="lg" className="shadow-cta gap-2">
                  <Link to="/request" search={{ service: "care-homes" }}>
                    Book Consultation <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2 text-black !text-black">
                  <a href={whatsappLink("Hi, I'd like to enquire about Care Home placement.")} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="size-4" /> Enquire Now
                  </a>
                </Button>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl">
                {TRUST.map((t) => (
                  <div key={t.label} className="rounded-xl bg-background border border-border p-3 text-center">
                    <t.icon className="size-5 text-primary mx-auto mb-1.5" />
                    <p className="text-xs font-semibold leading-tight text-black !text-black">{t.label}</p>
                    <p className="font-bangla text-[11px] text-muted-foreground mt-0.5 text-black !text-black">{t.bn}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-background border border-border shadow-elegant p-8">
                <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <Hospital className="size-7 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-bold mb-2 text-black !text-black">More than a facility — a home</h2>
                <p className="text-muted-foreground text-sm leading-relaxed text-black !text-black">
                  Our care homes blend hospital-grade clinical safety with the warmth of family living. No sterile
                  wards. No isolation. Just dignity, routine, and people who know your loved one by name.
                </p>
                <div className="mt-6 pt-6 border-t border-border ">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground text-black !text-black">Talk to an advisor</p>
                  <a href={callLink} className="font-display text-xl font-bold text-black !text-black mt-1 inline-flex items-center gap-2">
                    <Phone className="size-5" /> {SITE.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS CARE HOME */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 lg:py-20 text-center">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
          <span className="w-6 h-px bg-primary" /> What is a Care Home?
        </span>
        <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">
          A professionally managed home for seniors who need <span className="text-primary">daily care or recovery</span> support.
        </h2>
        <p className="font-bangla text-lg text-muted-foreground mt-5 max-w-3xl mx-auto leading-relaxed">
          কেয়ার হোম এমন একটি জায়গা যেখানে বয়োজ্যেষ্ঠরা পেশাদার চিকিৎসা সেবা, পুষ্টিকর খাবার, এবং পরিবারের মতো আন্তরিক যত্ন পান —
          হাসপাতালের একাকীত্ব ছাড়াই।
        </p>
      </section>

      {/* CARE APPROACH */}
      <section className="bg-background py-16 lg:py-20 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              <span className="w-6 h-px bg-primary" /> Care Approach
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">
              Four pillars of care, one peaceful home
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {APPROACH.map((a) => (
              <div key={a.title} className="rounded-2xl bg-surface border border-border hover:border-primary/40 hover:shadow-card transition-all overflow-hidden flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <img src={a.image} alt={a.title} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-lg font-bold">{a.title}</h3>
                  <p className="font-bangla text-sm text-primary mt-0.5">{a.bn}</p>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            <span className="w-6 h-px bg-primary" /> Care Home vs Hospital vs Home
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">
            Why families are choosing care homes
          </h2>
          <p className="font-bangla text-base text-muted-foreground mt-3">
            ✔ More personal attention &nbsp; ✔ শান্ত পরিবেশ &nbsp; ✔ Better recovery
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-border bg-background shadow-card">
          <table className="w-full text-sm min-w-[640px]">
            <thead className="bg-surface">
              <tr>
                <th className="text-left font-semibold p-4">Feature</th>
                <th className="text-center font-semibold p-4 text-primary">
                  <div className="flex flex-col items-center gap-1">
                    <Hospital className="size-4" /> Care Home
                  </div>
                </th>
                <th className="text-center font-semibold p-4 text-muted-foreground">Hospital</th>
                <th className="text-center font-semibold p-4 text-muted-foreground">Home Alone</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE.map((row) => (
                <tr key={row.feature} className="border-t border-border">
                  <td className="p-4">
                    <p className="font-medium">{row.feature}</p>
                    <p className="font-bangla text-xs text-muted-foreground">{row.bn}</p>
                  </td>
                  <td className="p-4 text-center bg-primary/5"><Cmp value={row.carehome} /></td>
                  <td className="p-4 text-center"><Cmp value={row.hospital} /></td>
                  <td className="p-4 text-center"><Cmp value={row.home} /></td>
                </tr>
              ))}
            </tbody>
          </table>
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
              Transparent monthly plans
            </h2>
            <p className="text-muted-foreground mt-3">
              All prices are indicative — final pricing is confirmed after a call with your care advisor.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {carehomeService.packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative flex flex-col p-7 rounded-2xl border bg-surface transition-all ${
                  pkg.popular ? "border-primary shadow-elegant ring-1 ring-primary/20" : "border-border hover:border-primary/40 hover:shadow-card"
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
                    <span className="text-3xl font-bold tabular-nums">৳{formatBDT(pkg.priceFrom)}</span>
                    <span className="text-muted-foreground">–</span>
                    <span className="text-3xl font-bold tabular-nums">৳{formatBDT(pkg.priceTo)}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">per month · indicative pricing</p>
                </div>
                <ul className="space-y-2.5 mb-7 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check className="size-4 text-primary shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg" variant={pkg.popular ? "default" : "outline"} className={`w-full ${pkg.popular ? "shadow-cta" : ""}`}>
                  <Link to="/request" search={{ service: "care-homes", package: pkg.id }}>
                    Request Placement
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-accent/40 border border-border p-6 text-center">
            <p className="font-display text-lg font-semibold">Need a custom plan?</p>
            <p className="text-sm text-muted-foreground mt-1">
              We tailor care plans for complex medical needs, short stays, and family preferences.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            <span className="w-6 h-px bg-primary" /> Inside the Home
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">
            Everything they need, every day
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((f) => (
            <div key={f.title} className="p-6 rounded-2xl bg-background border border-border text-center hover:shadow-card transition-all">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <f.icon className="size-6 text-primary" />
              </div>
              <h3 className="font-semibold">{f.title}</h3>
              <p className="font-bangla text-sm text-muted-foreground mt-1">{f.bn}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-foreground text-background py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-bangla text-3xl lg:text-4xl font-bold mb-4">
            একটি ফোনেই শুরু হোক যত্নের পথচলা
          </h2>
          <p className="text-background/80 max-w-2xl mx-auto mb-8">
            Speak with our care advisor. We'll listen, recommend the right plan, and arrange a visit — no pressure,
            no online payment.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 gap-2">
              <Link to="/request" search={{ service: "care-homes" }}>
                Request Placement <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-background/30 text-background hover:bg-background/10 gap-2">
              <a href={callLink}>
                <Phone className="size-4" /> Call Advisor — {SITE.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
