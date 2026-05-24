import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { careAtHomeLinkProps } from "@/lib/routes";
import {
  Phone,
  MessageCircle,
  Check,
  Stethoscope,
  Brain,
  HeartPulse,
  Syringe,
  UserRound,
  Activity,
  FlaskConical,
  ScanLine,
  Waves,
  ShieldCheck,
  Clock,
  Users,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, callLink, whatsappLink, formatBDT, SERVICES } from "@/lib/site";
import { HeroSlider, HERO_IMAGES } from "@/components/HeroSlider";

const OFFERING_IMAGES: Record<string, string> = {
  "neuro-care":
    "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80&auto=format&fit=crop",
  "dementia-caregiver":
    "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&q=80&auto=format&fit=crop",
  "icu-setup":
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80&auto=format&fit=crop",
  "nursing-care":
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
  "patient-caregiver":
    "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=800&q=80",
  physiotherapy:
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80&auto=format&fit=crop",
  "lab-test":
    "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80&auto=format&fit=crop",
  "x-ray":
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80&auto=format&fit=crop",
  ecg: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80&auto=format&fit=crop",
};

const OFFERINGS: Array<{
  title: string;
  bn: string;
  desc: string;
  slug?: string;
}> = [
  {
    title: "Neuro Care at Home",
    bn: "নিউরো কেয়ার",
    desc: "Stroke recovery, Parkinson's & post-neurosurgery care with specialist supervision.",
    slug: "neuro-care",
  },
  {
    title: "Dementia Caregiver",
    bn: "ডিমেনশিয়া কেয়ারগিভার",
    desc: "Trained caregivers for memory loss, behavioral support and a safe daily routine.",
    slug: "dementia-caregiver",
  },
  {
    title: "ICU Setup at Home",
    bn: "হোম আইসিইউ সেটআপ",
    desc: "Hospital-grade equipment, ICU-trained nurses and doctor supervision at home.",
    slug: "icu-setup",
  },
  {
    title: "Nursing Care",
    bn: "নার্সিং কেয়ার",
    desc: "Registered nurses for wound care, IV, injections, catheter and post-op recovery.",
    slug: "nursing-care",
  },
  {
    title: "Patient Caregiver",
    bn: "পেশেন্ট কেয়ারগিভার",
    desc: "Compassionate attendants for bathing, feeding, mobility and daily comfort.",
    slug: "patient-caregiver",
  },
  {
    title: "Physiotherapy",
    bn: "ফিজিওথেরাপি",
    desc: "Personalized at-home physio for mobility, recovery and pain management.",
    slug: "physiotherapy",
  },
  {
    title: "Lab Test at Home",
    bn: "ল্যাব টেস্ট",
    desc: "Blood, urine and full panel sample collection from your doorstep.",
    slug: "lab-test",
  },
  {
    title: "X-ray at Home",
    bn: "এক্স-রে",
    desc: "Portable digital X-ray with quick reporting — no hospital visit required.",
    slug: "x-ray",
  },
  {
    title: "ECG at Home",
    bn: "ইসিজি",
    desc: "On-spot cardiac ECG with cardiologist review delivered to your phone.",
    slug: "ecg",
  },
];

const TRUST = [
  { icon: Users, label: "10,000+ Seniors Served", bn: "১০,০০০+ পরিবার" },
  { icon: Stethoscope, label: "Medical Supervision", bn: "মেডিকেল সুপারভিশন" },
  { icon: Clock, label: "Easy Coordination", bn: "সহজ সমন্বয়" },
  { icon: ShieldCheck, label: "Comprehensive Solutions", bn: "সম্পূর্ণ সমাধান" },
  { icon: HeartPulse, label: "Continuity of Care", bn: "ধারাবাহিক যত্ন" },
];

const STEPS = [
  {
    num: "01",
    title: "Submit request",
    bn: "অনুরোধ জমা দিন",
    desc: "Tell us about your loved one's needs in 1 minute.",
  },
  {
    num: "02",
    title: "Talk to advisor",
    bn: "অ্যাডভাইজারের সাথে কথা",
    desc: "A care advisor calls within 2 hours to understand the situation.",
  },
  {
    num: "03",
    title: "Customized plan",
    bn: "কাস্টম প্ল্যান",
    desc: "We design a plan that fits your budget and medical needs.",
  },
  {
    num: "04",
    title: "Caregiver assigned",
    bn: "কেয়ারগিভার নিযুক্ত",
    desc: "A trained, vetted caregiver is matched and starts care.",
  },
];

export function CareAtHomePage() {
  const homecare = SERVICES.find((s) => s.slug === "care-at-home")!;
  const featured = homecare.packages.filter((p) =>
    ["hc-hourly", "hc-daily", "hc-monthly", "hc-icu"].includes(p.id),
  );

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-accent/40 via-background to-surface">
        <HeroSlider images={HERO_IMAGES.homeCare} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background border border-border text-xs font-semibold text-primary mb-5">
              <HeartPulse className="size-3.5" /> Care at Home — হোম কেয়ার
            </span>
            <h1 className="font-display font-bangla text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              ঘরেই পাবেন <span className="text-primary">পেশাদার</span> চিকিৎসা সেবা
            </h1>
            <p className="text-lg text-muted-foreground mt-5 max-w-xl leading-relaxed">
              We bring hospital-level care to your home — so your loved ones stay safe, comfortable,
              and cared for in the place they know best.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Button asChild size="lg" className="gap-2">
                <Link to="/request" search={{ service: "care-at-home", package: "" }}>
                  Request Home Care <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 text-black !text-black">
                <a href={callLink}>
                  <Phone className="size-4 text-black !text-black" /> Talk to Care Advisor
                </a>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4 font-bangla">
              ✓ কোনো অনলাইন পেমেন্ট নেই · ফোনে কথা বলে কনফার্ম
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-background border border-border text-black !text-black p-6 lg:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-black !text-black mb-4">
                Why families trust us
              </p>

              <ul className="space-y-3">
                {TRUST.map((t) => (
                  <li key={t.label} className="flex items-center gap-3">
                    <div className="size-9 rounded-lg bg-accent flex items-center justify-center shrink-0">
                      <t.icon className="size-4 text-accent-foreground" />
                    </div>

                    <div>
                      <p className="font-semibold text-sm text-black !text-black">{t.label}</p>

                      <p className="font-bangla text-xs text-black !text-black">{t.bn}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 lg:py-20 text-center">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
          <span className="w-6 h-px bg-primary" /> Care comes to you
        </span>
        <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">
          Personalized care, in the comfort of your home
        </h2>
        <p className="text-lg text-muted-foreground mt-5 leading-relaxed">
          We believe care should come to you. Whether it's nursing, physiotherapy, or diagnostics,
          our trained caregivers ensure your loved ones receive personalized care in a familiar
          environment — surrounded by family.
        </p>
      </section>

      {/* OFFERINGS */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">
                Care at Home Offerings
              </h2>
              <p className="font-bangla text-muted-foreground mt-2">
                আপনার প্রিয়জনের প্রয়োজন অনুযায়ী সম্পূর্ণ সেবা
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {OFFERINGS.map((o) => (
              <div
                key={o.title}
                className="group flex flex-col rounded-2xl bg-background border border-border hover:border-primary hover:shadow-card transition-all overflow-hidden"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                  <img
                    src={o.slug ? OFFERING_IMAGES[o.slug] : OFFERING_IMAGES["nursing-care"]}
                    alt={o.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-lg font-bold">{o.title}</h3>
                  <p className="font-bangla text-xs text-primary mt-0.5">{o.bn}</p>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed flex-1">
                    {o.desc}
                  </p>
                  {o.slug ? (
                    
                    <Link
                      {...careAtHomeLinkProps(o.slug)}
                      className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all"
                    >
                      Know More <ArrowRight className="size-4" />
                    </Link>
                    ) : (
                    <Link
                      to="/request"
                      search={{ service: "care-at-home", package: "" }}
                      className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all"
                    >
                      Know More <ArrowRight className="size-4" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">
            Transparent Packages
          </h2>
          <p className="font-bangla text-muted-foreground mt-2">
            পরিষ্কার মূল্য — কোনো লুকানো খরচ নয়
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <div
              key={p.id}
              className={`relative p-6 rounded-2xl bg-background border-2 transition-all flex flex-col ${
                p.popular ? "border-primary shadow-card" : "border-border"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-lg font-bold">{p.name}</h3>
              <p className="font-bangla text-xs text-primary mt-0.5">{p.bangla}</p>
              <p className="font-display text-2xl font-bold mt-4 tabular-nums">
                ৳{formatBDT(p.priceFrom)}–{formatBDT(p.priceTo)}
              </p>
              <p className="text-xs text-muted-foreground">/ {p.unit}</p>
              <ul className="mt-4 space-y-2 text-sm flex-1">
                {p.features.slice(0, 3).map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="size-3.5 text-primary shrink-0 mt-1" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="sm"
                className="mt-5 w-full"
                variant={p.popular ? "default" : "outline"}
              >
                <Link to="/request" search={{ service: "care-at-home", package: p.id }}>
                  Request
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-8 p-5 rounded-2xl bg-accent/40 border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold">
              <Sparkles className="inline size-4 text-primary mr-1" /> Custom Plan Available
            </p>
            <p className="text-sm text-muted-foreground font-bangla mt-0.5">
              পরিবার অনুযায়ী প্ল্যান সাজিয়ে দেব — বাজেট ও প্রয়োজন বুঝে
            </p>
          </div>
          <Button asChild variant="outline">
            <Link to="/request" search={{ service: "care-at-home", package: "custom" }}>
              Build Custom Plan
            </Link>
          </Button>
        </div>

        {/* Quick comparison */}
        <div className="mt-12">
          <h3 className="font-display text-2xl font-bold mb-2">Quick Comparison</h3>
          <p className="text-sm text-muted-foreground mb-6">
            All prices are indicative — final pricing is confirmed after a call with your care
            advisor.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-border bg-background">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="text-left p-4 font-semibold">Plan</th>
                  <th className="text-left p-4 font-semibold">Price (BDT)</th>
                  <th className="text-left p-4 font-semibold hidden md:table-cell">Best for</th>
                  <th className="text-right p-4" />
                </tr>
              </thead>
              <tbody>
                {homecare.packages.map((p) => (
                  <tr key={p.id} className="border-b border-border last:border-0">
                    <td className="p-4">
                      <div className="font-semibold">{p.name}</div>
                      <div className="font-bangla text-xs text-primary mt-0.5">{p.bangla}</div>
                    </td>
                    <td className="p-4 tabular-nums">
                      <span className="font-semibold">
                        ৳{formatBDT(p.priceFrom)}–{formatBDT(p.priceTo)}
                      </span>
                      <div className="text-xs text-muted-foreground">/ {p.unit}</div>
                    </td>
                    <td className="p-4 hidden md:table-cell text-muted-foreground">
                      {p.features[0]}
                    </td>
                    <td className="p-4 text-right">
                      <Button asChild size="sm" variant="outline">
                        <Link to="/request" search={{ service: "care-at-home", package: p.id }}>
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

      {/* HOW IT WORKS */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">
              How It Works
            </h2>
            <p className="font-bangla text-muted-foreground mt-2">
              ৪টি সহজ ধাপে শুরু হবে আপনার সেবা
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <div
                key={s.num}
                className="relative p-6 rounded-2xl bg-background border border-border"
              >
                <div className="font-display text-4xl font-bold text-primary/20">{s.num}</div>
                <h3 className="font-display text-lg font-bold mt-2">{s.title}</h3>
                <p className="font-bangla text-xs text-primary mt-0.5">{s.bn}</p>
                <p className="text-sm text-muted-foreground mt-3">{s.desc}</p>
                {i < STEPS.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 size-5 text-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-foreground text-background py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-bangla text-3xl lg:text-4xl font-bold mb-4 leading-tight">
            আপনার প্রিয়জনের যত্ন <span className="text-primary">আজই শুরু করুন</span>
          </h2>
          <p className="text-background/70 mb-8">
            One call is all it takes. Our care advisor will listen, suggest the right plan, and
            confirm pricing — no online payment, ever.
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
                href={whatsappLink("Hi, I'd like to start home care for my family member.")}
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
