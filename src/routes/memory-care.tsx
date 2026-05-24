import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Phone,
  MessageCircle,
  Check,
  Brain,
  ShieldCheck,
  HeartPulse,
  Users,
  Clock,
  Sparkles,
  Sunrise,
  Activity,
  Music,
  UtensilsCrossed,
  Moon,
  Stethoscope,
  ClipboardList,
  Home,
  CalendarCheck,
  PhoneCall,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, callLink, whatsappLink, formatBDT, SERVICES } from "@/lib/site";
import { HeroSlider, HERO_IMAGES } from "@/components/HeroSlider";

export const Route = createFileRoute("/memory-care")({
  head: () => ({
    meta: [
      { title: "Memory Care Homes — Dementia & Alzheimer's Care — Priyojon Care" },
      {
        name: "description",
        content:
          "Specialized memory care home in Dhaka for dementia and Alzheimer's — safe, structured, compassionate care with 24/7 trained supervision.",
      },
      { property: "og:title", content: "Memory Care Homes — Priyojon Care" },
      {
        property: "og:description",
        content: "স্মৃতিভ্রষ্টতার যত্ন, নিরাপদ ও সম্মানের সাথে — dementia care done right.",
      },
    ],
  }),
  component: MemoryCarePage,
});

const WHY = [
  { icon: Brain, label: "Mental Wellbeing Focus", bn: "মানসিক সুস্থতা" },
  { icon: Stethoscope, label: "Neuro Care Support", bn: "নিউরো কেয়ার" },
  { icon: Sparkles, label: "Specialized Therapy", bn: "বিশেষ থেরাপি" },
  { icon: ShieldCheck, label: "Secure Facility", bn: "সুরক্ষিত পরিবেশ" },
  { icon: Clock, label: "24/7 Monitoring", bn: "২৪/৭ তত্ত্বাবধান" },
];

const HOME_FEATURE_IMAGES: Record<string, string> = {
  "Structured Routine": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
  "Safe Environment": "https://images.unsplash.com/photo-1547573854-74d2a71d0826?auto=format&fit=crop&w=800&q=80",
  "Trained Caregivers": "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&q=80&auto=format&fit=crop",
  "Emotional + Medical Support": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80&auto=format&fit=crop",
};

const HOME_FEATURES = [
  { title: "Structured Routine", bn: "নিয়মিত রুটিন", desc: "Predictable daily rhythm reduces confusion and anxiety." },
  { title: "Safe Environment", bn: "নিরাপদ পরিবেশ", desc: "Wander-proof layout, fall prevention and supervised access." },
  { title: "Trained Caregivers", bn: "প্রশিক্ষিত কেয়ারগিভার", desc: "Dementia-certified staff trained in compassionate response." },
  { title: "Emotional + Medical Support", bn: "মানসিক ও চিকিৎসা সহায়তা", desc: "Behavioral support paired with on-call medical care." },
];

const DAILY: { time: string; title: string; bn: string; desc: string; image: string }[] = [
  { time: "Morning", title: "Gentle Morning Routine", bn: "সকালের রুটিন", desc: "Personal hygiene, light stretching and a calm start to the day.", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80" },
  { time: "9 AM", title: "Health Monitoring", bn: "স্বাস্থ্য পরীক্ষা", desc: "Vitals check, medication and a quick wellness review.", image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=1200&q=80" },
  { time: "11 AM", title: "Therapy Sessions", bn: "থেরাপি সেশন", desc: "Cognitive exercises, memory games and physiotherapy.", image: "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=1200&q=80" },
  { time: "Afternoon", title: "Social Activities", bn: "সামাজিক কার্যক্রম", desc: "Music, art and group activities tailored to comfort levels.", image: "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?auto=format&fit=crop&w=1200&q=80" },
  { time: "Meals", title: "Nutritious Meals", bn: "পুষ্টিকর খাবার", desc: "Dietitian-planned meals served on a consistent schedule.", image: "https://images.unsplash.com/photo-1547573854-74d2a71d0826?auto=format&fit=crop&w=1200&q=80" },
  { time: "Evening", title: "Evening Relaxation", bn: "সন্ধ্যার বিশ্রাম", desc: "Quiet time, family calls and a peaceful wind-down to sleep.", image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1200&q=80" },
];

const JOURNEY = [
  { icon: ClipboardList, num: "01", title: "Assessment", bn: "মূল্যায়ন", desc: "Specialist evaluates cognitive stage, behavior and medical history." },
  { icon: Sparkles, num: "02", title: "Care Plan", bn: "কেয়ার প্ল্যান", desc: "A personalized plan is built around routine, therapy and medication." },
  { icon: Home, num: "03", title: "Admission", bn: "ভর্তি", desc: "Smooth move-in with familiar items to ease the transition." },
  { icon: HeartPulse, num: "04", title: "Daily Care", bn: "দৈনন্দিন যত্ন", desc: "Trained team delivers structured care, every single day." },
  { icon: PhoneCall, num: "05", title: "Family Updates", bn: "পরিবারকে আপডেট", desc: "Regular reports and video calls keep family connected." },
];

function MemoryCarePage() {
  const memory = SERVICES.find((s) => s.slug === "memory-care")!;

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-accent/40 via-background to-surface">
        <HeroSlider images={HERO_IMAGES.memoryCare} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background border border-border text-xs font-semibold text-primary mb-5">
              <Brain className="size-3.5" /> Memory Care — মেমোরি কেয়ার
            </span>
            <h1 className="font-display font-bangla text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              স্মৃতিভ্রষ্টতার যত্ন, <span className="text-primary">নিরাপদ ও সম্মানের</span> সাথে
            </h1>
            <p className="text-lg text-muted-foreground mt-5 max-w-xl leading-relaxed">
              Specialized care for dementia and Alzheimer's patients in a structured, safe, and deeply
              compassionate environment — designed by specialists, delivered with empathy.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Button asChild size="lg" className="gap-2">
                <Link to="/request" search={{ service: "memory-care", package: "" }}>
                  Enquire Now <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 text-black !text-black">
                <a href={callLink}>
                  <Phone className="size-4" /> Talk to Specialist
                </a>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4 font-bangla">
              ✓ বিনামূল্যে অ্যাসেসমেন্ট · ফোনে কথা বলে কনফার্ম
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-background border border-border shadow-card p-6 lg:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4 text-black !text-black">
                Why families choose us
              </p>
              <ul className="space-y-3">
                {WHY.map((t) => (
                  <li key={t.label} className="flex items-center gap-3 text-black !text-black">
                    <div className="size-9 rounded-lg bg-accent flex items-center justify-center shrink-0">
                      <t.icon className="size-4 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-black !text-black">{t.label}</p>
                      <p className="font-bangla text-xs text-muted-foreground text-black !text-black">{t.bn}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS DEMENTIA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              <span className="w-6 h-px bg-primary" /> Understanding Dementia
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">What is Dementia?</h2>
            <p className="font-bangla text-lg text-muted-foreground mt-4 leading-relaxed">
              ডিমেনশিয়া হলো এমন একটি অবস্থা যা স্মৃতিশক্তি, চিন্তাভাবনা ও দৈনন্দিন কাজকর্মে প্রভাব ফেলে।
              এটি শুধু ভুলে যাওয়া নয় — আচরণ, আবেগ ও সিদ্ধান্ত নেওয়ার ক্ষমতাকেও পরিবর্তন করে দেয়।
            </p>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Dementia is progressive memory loss that affects daily life, behavior, and emotional stability.
              Families often feel overwhelmed — but with the right structured care, dignity and quality of life
              can be preserved for years.
            </p>
          </div>
          <div className="rounded-2xl bg-accent/40 border border-border p-6 lg:p-8">
            <h3 className="font-display text-xl font-bold mb-4">Common signs to watch for</h3>
            <ul className="space-y-3 text-sm">
              {[
                ["Forgetting recent events or names", "সাম্প্রতিক ঘটনা ভুলে যাওয়া"],
                ["Confusion about time, place, or people", "সময় ও স্থান নিয়ে বিভ্রান্তি"],
                ["Mood swings, anxiety or withdrawal", "মেজাজ পরিবর্তন ও উদ্বেগ"],
                ["Difficulty with familiar daily tasks", "পরিচিত কাজ করতে অসুবিধা"],
                ["Wandering or getting lost easily", "পথ হারিয়ে ফেলা"],
              ].map(([en, bn]) => (
                <li key={en} className="flex items-start gap-3">
                  <Check className="size-4 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">{en}</p>
                    <p className="font-bangla text-xs text-muted-foreground">{bn}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WHAT IS MEMORY CARE HOME */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">
              What is a Memory Care Home?
            </h2>
            <p className="font-bangla text-muted-foreground mt-3">
              একটি বিশেষায়িত পরিবেশ — যেখানে ডিমেনশিয়া রোগীরা নিরাপদ, সম্মানিত ও যত্নশীলভাবে থাকেন
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {HOME_FEATURES.map((f) => (
              <div
                key={f.title}
                className="group flex flex-col rounded-2xl bg-background border border-border hover:border-primary hover:shadow-card transition-all overflow-hidden"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                  <img
                    src={HOME_FEATURE_IMAGES[f.title]}
                    alt={f.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-lg font-bold">{f.title}</h3>
                  <p className="font-bangla text-xs text-primary mt-0.5">{f.bn}</p>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DAILY LIFE EXPERIENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            <span className="w-6 h-px bg-primary" /> A day in their life
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">Daily Life Experience</h2>
          <p className="font-bangla text-muted-foreground mt-3">
            প্রতিটি দিন গঠিত হয় শান্তি, নিরাপত্তা ও আনন্দ ঘিরে
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DAILY.map((d) => (
            <div key={d.title} className="rounded-2xl bg-background border border-border overflow-hidden flex flex-col">
              <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                <img src={d.image} alt={d.title} loading="lazy" className="w-full h-full object-cover" />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-background/90 backdrop-blur text-[10px] font-semibold uppercase tracking-wider text-foreground">
                  {d.time}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-lg font-bold">{d.title}</h3>
                <p className="font-bangla text-xs text-primary mt-0.5">{d.bn}</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PACKAGES */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">Care Packages</h2>
            <p className="font-bangla text-muted-foreground mt-2">
              পরিবারের প্রয়োজন অনুযায়ী নির্ধারিত প্ল্যান
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3 max-w-5xl mx-auto">
            {memory.packages.map((p) => (
              <div
                key={p.id}
                className={`relative p-6 lg:p-7 rounded-2xl bg-background border-2 transition-all flex flex-col ${
                  p.popular ? "border-primary shadow-card" : "border-border"
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display text-xl font-bold">{p.name}</h3>
                <p className="font-bangla text-xs text-primary mt-0.5">{p.bangla}</p>
                <p className="font-display text-3xl font-bold mt-5 tabular-nums">
                  ৳{formatBDT(p.priceFrom)}–{formatBDT(p.priceTo)}
                </p>
                <p className="text-xs text-muted-foreground">/ {p.unit}</p>
                <ul className="mt-5 space-y-2 text-sm flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="size-3.5 text-primary shrink-0 mt-1" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6 w-full" variant={p.popular ? "default" : "outline"}>
                  <Link to="/request" search={{ service: "memory-care", package: p.id }}>
                    Request This Plan
                  </Link>
                </Button>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-6">
            All prices are indicative — final pricing is confirmed after a call with your care advisor.
          </p>
        </div>
      </section>

      {/* PATIENT JOURNEY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">Patient Journey</h2>
          <p className="font-bangla text-muted-foreground mt-2">
            অ্যাসেসমেন্ট থেকে শুরু করে দৈনন্দিন যত্ন — আমরা আপনার পাশে
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {JOURNEY.map((j, i) => (
            <div key={j.num} className="relative p-6 rounded-2xl bg-background border border-border">
              <div className="flex items-center justify-between mb-3">
                <div className="size-11 rounded-xl bg-accent flex items-center justify-center">
                  <j.icon className="size-5 text-accent-foreground" />
                </div>
                <span className="font-display text-2xl font-bold text-primary/20">{j.num}</span>
              </div>
              <h3 className="font-display text-base font-bold">{j.title}</h3>
              <p className="font-bangla text-xs text-primary mt-0.5">{j.bn}</p>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{j.desc}</p>
              {i < JOURNEY.length - 1 && (
                <ArrowRight className="hidden lg:block absolute -right-3 top-10 size-5 text-border" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-foreground text-background py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-3 leading-tight">
            Get a <span className="text-primary">Personalized Care Plan</span>
          </h2>
          <p className="font-bangla text-background/80 mb-2">
            আপনার প্রিয়জনের জন্য সঠিক পরিকল্পনা তৈরি করে দেব
          </p>
          <p className="text-background/70 mb-8">
            Speak with a memory care specialist. Free assessment, transparent pricing, no online payment required.
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
                href={whatsappLink("Hi, I'd like a memory care assessment for my family member.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="size-4" /> WhatsApp Specialist
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
