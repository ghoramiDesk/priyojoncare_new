import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ShieldCheck,
  HeartPulse,
  Clock,
  ArrowRight,
  Stethoscope,
  Building2,
  Hospital,
  Brain,
  House,
  Phone,
  Star,
  Play,
  Users,
  Award,
  Smile,
  BadgeCheck,
  Lock,
  FileCheck2,
  HeartHandshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES, callLink, whatsappLink, SITE, formatBDT } from "@/lib/site";
import { serviceLinkProps } from "@/lib/routes";
import heroImage from "@/assets/hero-care.jpg";
import { HeroSlider, HERO_IMAGES } from "@/components/HeroSlider";

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

const GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=900&q=80",
    caption: "Morning physiotherapy",
  },
  {
    src: "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=900&q=80",
    caption: "Health monitoring",
  },
  // { src: "https://images.unsplash.com/photo-1559757175-7cb036e0d465?auto=format&fit=crop&w=900&q=80", caption: "Companionship" },
  {
    src: "https://images.unsplash.com/photo-1547573854-74d2a71d0826?auto=format&fit=crop&w=900&q=80",
    caption: "Nutritious meals",
  },
  {
    src: "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?auto=format&fit=crop&w=900&q=80",
    caption: "Group activities",
  },
  {
    src: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=900&q=80",
    caption: "Rehab support",
  },
  {
    src: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=80",
    caption: "Post-surgery care",
  },
  {
    src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80",
    caption: "Peaceful evenings",
  },
];

const VIDEOS = [
  {
    id: "_VB39Jo8mAQ",
    title: "A Day at Priyojon Care",
    desc: "Inside our home — morning rituals, therapy and warmth.",
    thumb:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "ScMzIvxBSi4",
    title: "Family Stories",
    desc: "Real families share how care changed their daily life.",
    thumb:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "aqz-KE-bpKQ",
    title: "Our Caregivers",
    desc: "Trained, certified and compassionate — meet the team.",
    thumb:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1200&q=80",
  },
];

const COUNTERS = [
  { icon: Users, value: 3000, suffix: "+", label: "Residents Served", bn: "সদস্য সেবা" },
  {
    icon: HeartHandshake,
    value: 250,
    suffix: "+",
    label: "Trained Caregivers",
    bn: "প্রশিক্ষিত কেয়ারগিভার",
  },
  { icon: Award, value: 12, suffix: "+", label: "Years of Experience", bn: "বছরের অভিজ্ঞতা" },
  { icon: Smile, value: 98, suffix: "%", label: "Family Satisfaction", bn: "পরিবারের সন্তুষ্টি" },
];

const TRUST_PILLARS = [
  {
    icon: BadgeCheck,
    title: "Verified Caregivers",
    desc: "Background checks, certifications and ongoing training for every team member.",
  },
  {
    icon: Stethoscope,
    title: "Doctor Supervised",
    desc: "Every care plan is reviewed and signed off by a licensed physician.",
  },
  {
    icon: Lock,
    title: "Safe & Private",
    desc: "Confidential health records and secure family-only communication.",
  },
  {
    icon: FileCheck2,
    title: "Transparent Pricing",
    desc: "Clear packages, no hidden fees — you always know what you're paying for.",
  },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => `${Math.round(v).toLocaleString()}${suffix}`);
  const [text, setText] = useState(`0${suffix}`);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, { duration: 2, ease: "easeOut" });
    const unsub = rounded.on("change", setText);
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, to, mv, rounded, suffix]);
  return <span ref={ref}>{text}</span>;
}

function VideoCard({ v }: { v: (typeof VIDEOS)[number] }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="group relative aspect-video rounded-2xl overflow-hidden bg-foreground/5 border border-border shadow-card">
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0`}
          title={v.title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="absolute inset-0 block w-full h-full text-left"
          aria-label={`Play ${v.title}`}
        >
          <img src={v.thumb} alt={v.title} loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="size-16 rounded-full bg-background/95 flex items-center justify-center shadow-elegant group-hover:scale-110 transition-transform">
              <Play className="size-7 text-primary fill-primary ml-1" />
            </span>
          </span>
          <span className="absolute left-5 right-5 bottom-5 text-background">
            <span className="block font-display text-lg font-bold">{v.title}</span>
            <span className="block text-sm text-background/80 mt-1">{v.desc}</span>
          </span>
        </button>
      )}
    </div>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Priyojon Care — Compassionate Senior Care at Home in Bangladesh" },
      {
        name: "description",
        content:
          "Verified, doctor-supervised caregivers for Bangladeshi families. Nursing, ICU at home, physiotherapy, and elder companion services across Dhaka.",
      },
      { property: "og:title", content: "Priyojon Care — Senior Care at Home in Bangladesh" },
      {
        property: "og:description",
        content: "A digital bridge between families and trusted caregivers.",
      },
    ],
  }),
  component: HomePage,
});

const ICONS = { residence: Building2, carehome: Hospital, memory: Brain, homecare: House } as const;

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-hero overflow-hidden">
        <HeroSlider images={HERO_IMAGES.home} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-7"
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
              <span className="w-6 h-px bg-primary" /> Dhaka's Trusted Senior Care
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] text-balance">
              আপনার প্রিয়জনের যত্ন,
              <br />
              <span className="text-primary">এখন আপনার কাছেই</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-[55ch] leading-relaxed">
              Doctor-supervised caregivers bringing structured medical protocols and deep compassion
              to your home — so your parents can age with dignity surrounded by family.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="shadow-cta">
                <Link to="/request">Request Care Plan</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a
                  href={whatsappLink("Hi! I'd like to talk to a Care Advisor.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2 text-black !text-black"
                >
                  Talk to Care Advisor
                </a>
              </Button>
            </div>
            <div className="pt-7 border-t border-border flex flex-wrap gap-x-7 gap-y-3">
              {[
                { icon: ShieldCheck, label: "Verified Caregivers" },
                { icon: Stethoscope, label: "Doctor Supervised" },
                { icon: Clock, label: "24/7 Support" },
              ].map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-2 text-sm font-medium text-black !text-black"
                >
                  <b.icon className="size-4 text-primary" /> {b.label}
                </div>
              ))}
            </div>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-6 relative"
          >
            <div className="p-3 bg-surface rounded-2xl shadow-card border border-border">
              <div className="rounded-xl overflow-hidden relative">
                <img src={heroImage} alt="Compassionate caregiver attending an elderly Bangladeshi grandmother at home" width={1024} height={1280} className="w-full aspect-[4/5] object-cover" />
                <div className="absolute bottom-3 left-3 right-3 bg-background/95 backdrop-blur-sm border border-border p-3 rounded-lg shadow-sm flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Now Serving</p>
                    <p className="font-semibold text-sm">Dhaka & Surrounding Areas</p>
                  </div>
                  <a href={callLink} className="text-xs font-bold text-primary tabular-nums px-3 py-1.5 bg-primary/10 rounded-full">CALL NOW</a>
                </div>
              </div>
            </div>
          </motion.div> */}
        </div>
      </section>

      {/* Service selector */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">
                Structured Care Pathways
              </h2>
              <p className="text-muted-foreground mt-3 max-w-xl">
                Tailored care plans for every stage — from daily companionship to critical ICU
                support at home.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/services">
                View all services <ArrowRight className="size-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.map((s, i) => {
              const Icon = ICONS[s.icon];
              const min = Math.min(...s.packages.map((p) => p.priceFrom));

              return (
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Link
                    {...serviceLinkProps(s.slug)}
                    className="group relative block overflow-hidden rounded-xl border border-border bg-background hover:border-primary hover:shadow-card transition-all h-full"
                  >
                    {/* Image */}
                    <div className="relative h-40 w-full overflow-hidden">
                      <img
                        src={SERVICE_IMAGES[s.slug] ?? SERVICE_IMAGES.residences}
                        alt={s.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Overlay for readability */}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-semibold text-lg mb-1.5 text-foreground">{s.title}</h3>

                      <p className="font-bangla text-xs text-primary mb-3">{s.bangla}</p>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {s.tagline}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust / How it works */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="font-display text-3xl lg:text-4xl font-bold">How {SITE.name} works</h2>
            <p className="text-muted-foreground mt-3">
              No checkout, no instant booking. We listen first, then match the right caregiver.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                n: "01",
                t: "Submit a request",
                d: "Tell us about your loved one in 2 minutes — by form, call, or WhatsApp.",
              },
              {
                n: "02",
                t: "Talk to an advisor",
                d: "Our care advisor calls you within hours to understand your specific needs.",
              },
              {
                n: "03",
                t: "Caregiver assigned",
                d: "We match a verified, trained caregiver and start care on your schedule.",
              },
            ].map((s) => (
              <div key={s.n} className="p-7 rounded-xl border border-border bg-surface">
                <div className="text-sm font-bold text-primary tabular-nums mb-3">{s.n}</div>
                <h3 className="font-semibold text-primary text-xl mb-2">{s.t}</h3>
                <p className="text-muted-foreground text-black text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COUNTERS */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/20 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {COUNTERS.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center"
              >
                <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <c.icon className="size-7 text-primary" />
                </div>
                <p className="font-display text-4xl lg:text-5xl font-bold tabular-nums text-foreground">
                  <Counter to={c.value} suffix={c.suffix} />
                </p>
                <p className="text-sm font-semibold mt-2">{c.label}</p>
                <p className="font-bangla text-xs text-muted-foreground mt-0.5">{c.bn}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIVITY GALLERY */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                <span className="w-6 h-px bg-primary" /> Activity Gallery
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">
                Moments from our homes
              </h2>
              <p className="font-bangla text-muted-foreground mt-3">
                প্রতিদিনের জীবন, যত্ন ও আনন্দের ছোট ছোট মুহূর্ত
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
            {GALLERY.map((g, i) => (
              <motion.div
                key={g.src}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
                className={`relative overflow-hidden rounded-2xl bg-muted group ${i === 0 || i === 5 ? "row-span-2 aspect-[3/4] md:aspect-auto" : "aspect-square"}`}
              >
                <img
                  src={g.src}
                  alt={g.caption}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute left-4 bottom-4 right-4 text-background text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  {g.caption}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO GALLERY */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              <span className="w-6 h-px bg-primary" /> Watch & Listen
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">
              See care in action
            </h2>
            <p className="font-bangla text-muted-foreground mt-3">
              আমাদের যত্ন, পরিবার ও কেয়ারগিভারদের গল্প
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {VIDEOS.map((v, i) => (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <VideoCard v={v} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BUILDING */}
      <section className="py-20 lg:py-28 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              <span className="w-6 h-px bg-primary" /> Why families trust us
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">
              Built on trust, safety and dignity
            </h2>
            <p className="text-muted-foreground mt-3">
              Four commitments that guide every decision we make for your family.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST_PILLARS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="p-6 rounded-2xl bg-background border border-border hover:border-primary/40 hover:shadow-card transition-all"
              >
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <p.icon className="size-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 lg:py-28 bg-foreground text-background">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Star className="size-6 text-warning mx-auto mb-6 fill-warning" />
          <blockquote className="font-display text-2xl md:text-3xl font-medium leading-relaxed text-pretty">
            "When my father had his stroke, the nurse from Priyojon didn't just bring clinical
            expertise — she brought a profound calm to our entire household. I could finally
            breathe."
          </blockquote>
          <div className="mt-8 flex flex-col items-center gap-1">
            <span className="font-semibold">Farah Rahman</span>
            <span className="text-sm text-background/60">Gulshan, Dhaka</span>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
            Ready to give your parents the care they deserve?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Speak to a care advisor today. No obligations, no online payments — just a conversation
            about what your family needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="shadow-cta">
              <Link to="/request">Request Care</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href={callLink}>
                <Phone className="size-4" /> Call {SITE.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
