import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  MessageCircle,
  Check,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Stethoscope,
  Users,
  Clock,
  HeartPulse,
  ChevronDown,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SITE, callLink, whatsappLink, formatBDT } from "@/lib/site";
import { findHomeCareService, type HomeCareService } from "@/lib/home-care-services";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { HeroSlider, HERO_IMAGES } from "@/components/HeroSlider";

export const Route = createFileRoute("/care-at-home/$slug")({
  loader: ({ params }) => {
    console.log("slug:", params.slug);
    

    const service = findHomeCareService(params.slug);

    console.log("service:", service);
    console.log("DETAIL PAGE RENDERED:", service.slug);

    if (!service) throw notFound();

    return { service };
  },

  head: (ctx) => {
    if (!ctx.loaderData) return { meta: [], links: [] };
    const { service } = ctx.loaderData;
    const params = ctx.params;
    const title = `${service.name} at Home in Bangladesh — Priyojon Care`;
    const description =
      service.subtitle ||
      service.description?.slice(0, 155) ||
      `${service.name} delivered at home by trained caregivers across Dhaka.`;
    const url = `https://pryiocare.lovable.app/care-at-home/${params.slug}`;
    const image = service.heroImage;
    const meta: Array<Record<string, string>> = [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content: `${service.name}, ${service.bangla}, home care Bangladesh, ${service.slug}, Priyojon Care`,
      },
      { property: "og:type", content: "article" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:site_name", content: "Priyojon Care" },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "bn_BD" },
      { name: "twitter:card", content: image ? "summary_large_image" : "summary" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ];
    if (image) {
      meta.push(
        { property: "og:image", content: image },
        { property: "og:image:alt", content: service.name },
        { name: "twitter:image", content: image },
      );
    }
    return {
      meta,
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: HomeCareServiceDetail,

  notFoundComponent: () => (
    <div className="max-w-2xl mx-auto px-6 py-24 text-center">
      <h1 className="font-display text-3xl font-bold">Service not found</h1>
      <Link to="/care-at-home" className="text-primary mt-4 inline-block">
        Back to Care at Home
      </Link>
    </div>
  ),

});

function HomeCareServiceDetail() {
  const { service } = Route.useLoaderData() as { service: HomeCareService };
console.log("DETAIL PAGE MOUNTED");
  const trustItems = [
    { icon: Users, label: `${service.trust.seniorsServed.toLocaleString()}+ Seniors Served` },
    { icon: Stethoscope, label: "Clinical Protocols" },
    { icon: Clock, label: "Easy Coordination" },
    { icon: ShieldCheck, label: "Comprehensive Solutions" },
    { icon: HeartPulse, label: "Continuity of Care" },
  ];

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-accent/40 via-background to-surface">
        <HeroSlider images={HERO_IMAGES.homeCare} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-20">
          <Link
            to="/care-at-home"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="size-4" /> All Care at Home services
          </Link>
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background border border-border text-xs font-semibold text-primary mb-5">
                <HeartPulse className="size-3.5" /> {service.bangla}
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                {service.name}
              </h1>
              <p className="font-bangla text-primary font-semibold mt-3 text-lg">
                {service.tagline}
              </p>
              <p className="text-lg text-muted-foreground mt-5 max-w-xl leading-relaxed">
                {service.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button asChild size="lg" className="gap-2">
                  <a href="#enquiry">
                    Enquire Now <ArrowRight className="size-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2 text-black !text-black">
                  <a href={callLink}>
                    <Phone className="size-4" /> Talk to Care Advisor
                  </a>
                </Button>
                <Button asChild size="lg" variant="ghost" className="gap-2 text-black !text-black">
                  <a
                    href={whatsappLink(`Hi, please send me the brochure for ${service.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="size-4 text-black !text-black" /> Brochure
                  </a>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-background border border-border shadow-card p-6 lg:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider mb-4 text-black !text-black">
                  Why families trust us
                </p>
                <ul className="space-y-3">
                  {trustItems.map((t) => (
                    <li key={t.label} className="flex items-center gap-3 text-black !text-black">
                      <div className="size-9 rounded-lg bg-accent flex items-center justify-center shrink-0">
                        <t.icon className="size-4 text-accent-foreground" />
                      </div>
                      <p className=" text-sm text-black !text-black">{t.label}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
          <span className="w-6 h-px bg-primary" /> About this service
        </span>
        <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">
          What is {service.name}?
        </h2>
        <p className="text-lg text-muted-foreground mt-5 leading-relaxed">{service.description}</p>
        <div className="mt-6 p-5 rounded-2xl bg-accent/40 border border-border">
          <p className="font-bangla text-base leading-relaxed">{service.emotionalNote}</p>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">
              Service Advantages
            </h2>
            <p className="font-bangla text-muted-foreground mt-2">{service.trainingInfo}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.advantages.map((a) => (
              <div
                key={a.title}
                className="p-6 rounded-2xl bg-background border border-border hover:border-primary hover:shadow-card transition-all"
              >
                <Sparkles className="size-5 text-primary mb-3" />
                <h3 className="font-display text-lg font-bold">{a.title}</h3>
                <p className="font-bangla text-xs text-primary mt-0.5">{a.bn}</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {service.features.map((f) => (
              <div key={f} className="flex items-start gap-2.5">
                <Check className="size-4 text-primary shrink-0 mt-1" />
                <span className="text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialsSection testimonials={service.testimonials} />

      {/* PACKAGES */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">
              Choose a Plan
            </h2>
            <p className="font-bangla text-muted-foreground mt-2">
              পরিবার অনুযায়ী মূল্য — কোনো লুকানো খরচ নয়
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {service.packages.map((p) => (
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
                  {p.features.map((f) => (
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
                  <a href="#enquiry">Request</a>
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 rounded-2xl bg-background border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold">
                <Sparkles className="inline size-4 text-primary mr-1" /> Custom Plan Available
              </p>
              <p className="text-sm text-muted-foreground font-bangla mt-0.5">
                বাজেট ও প্রয়োজন বুঝে প্ল্যান সাজিয়ে দেব
              </p>
            </div>
            <Button asChild variant="outline">
              <a href={callLink}>
                <Phone className="size-4 mr-1.5" /> Talk to Advisor
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">
            How It Works
          </h2>
          <p className="font-bangla text-muted-foreground mt-2">৩টি সহজ ধাপে সেবা শুরু</p>
        </div>
        {(() => {
          const steps =
            service.slug === "icu-setup"
              ? [
                  {
                    num: "01",
                    title: "Emergency Request",
                    bn: "জরুরি অনুরোধ",
                    desc: "Call or request — advisor responds within minutes.",
                    Icon: Phone,
                  },
                  {
                    num: "02",
                    title: "ICU Setup at Home",
                    bn: "ঘরেই ICU সেটআপ",
                    desc: "Equipment, bed & ICU nurses deployed in 6 hours.",
                    Icon: Stethoscope,
                  },
                  {
                    num: "03",
                    title: "Continuous Monitoring",
                    bn: "২৪/৭ মনিটরিং",
                    desc: "Round-the-clock care under doctor supervision.",
                    Icon: ShieldCheck,
                  },
                ]
              : [
                  {
                    num: "01",
                    title: "Submit Request",
                    bn: "অনুরোধ জমা দিন",
                    desc: "Share your needs in under a minute.",
                    Icon: Phone,
                  },
                  {
                    num: "02",
                    title: "Personalized Plan",
                    bn: "কাস্টম প্ল্যান",
                    desc: "Advisor designs the right care package.",
                    Icon: Stethoscope,
                  },
                  {
                    num: "03",
                    title: "Service Starts",
                    bn: "সেবা শুরু",
                    desc: "Trained team arrives, care begins.",
                    Icon: ShieldCheck,
                  },
                ];
          return (
            <div className="relative">
              {/* Desktop connector line */}
              <div
                className="hidden md:block absolute top-10 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-primary/30 via-primary/40 to-primary/30"
                aria-hidden
              />
              {/* Mobile vertical connector */}
              <div
                className="md:hidden absolute top-0 bottom-0 left-7 w-0.5 bg-gradient-to-b from-primary/30 via-primary/40 to-primary/30"
                aria-hidden
              />

              <div className="relative grid gap-5 md:grid-cols-3 md:gap-6">
                {steps.map((s, i) => (
                  <div
                    key={s.num}
                    className="relative flex md:flex-col items-start md:items-center gap-4 md:gap-0 md:text-center pl-0 md:pl-0"
                  >
                    {/* Icon bubble */}
                    <div className="relative z-10 flex items-center justify-center size-14 md:size-20 rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground shadow-elegant shrink-0">
                      <s.Icon className="size-6 md:size-8" />
                      <span className="absolute -top-1 -right-1 md:-top-2 md:-right-2 inline-flex items-center justify-center min-w-6 h-6 px-1.5 rounded-full bg-background border border-primary text-primary text-[11px] font-bold">
                        {s.num}
                      </span>
                    </div>

                    <div className="flex-1 md:mt-4">
                      <h3 className="font-display text-base md:text-lg font-bold">{s.title}</h3>
                      <p className="font-bangla text-xs text-primary mt-0.5">{s.bn}</p>
                      <p className="text-sm text-muted-foreground mt-1.5 md:mt-2 md:max-w-[220px] md:mx-auto leading-relaxed">
                        {s.desc}
                      </p>
                    </div>

                    {/* Arrow between steps - mobile */}
                    {i < steps.length - 1 && (
                      <ArrowRight className="md:hidden absolute -bottom-3 left-5 size-4 text-primary/60 rotate-90" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })()}
      </section>

      {/* FAQ */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">
              Frequently Asked
            </h2>
            <p className="font-bangla text-muted-foreground mt-2">আপনার প্রশ্নের উত্তর</p>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {service.faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="border border-border rounded-xl bg-background px-5"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ENQUIRY FORM */}
      <EnquirySection serviceName={service.name} serviceSlug={service.slug} />

      {/* FINAL CTA */}
      <section className="bg-foreground text-background py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-bangla text-3xl lg:text-4xl font-bold mb-4 leading-tight">
            আপনার প্রিয়জনের যত্ন <span className="text-primary">আজই শুরু করুন</span>
          </h2>
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
                href={whatsappLink(`Hi, I'd like info about ${service.name}.`)}
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

function EnquirySection({
  serviceName,
  serviceSlug,
}: {
  serviceName: string;
  serviceSlug: string;
}) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [agree, setAgree] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please enter your name and phone number.");
      return;
    }
    if (!agree) {
      toast.error("Please agree to be contacted.");
      return;
    }
    setSubmitting(true);
    const msg = `Enquiry: ${serviceName}\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nMessage: ${form.message}`;
    window.open(whatsappLink(msg), "_blank");
    setSubmitting(false);
    toast.success("Thanks! We'll reach out within 2 hours.");
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section id="enquiry" className="max-w-3xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
      <div className="text-center mb-10">
        <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">
          Request a Free Consultation
        </h2>
        <p className="font-bangla text-muted-foreground mt-2">
          আমাদের কেয়ার অ্যাডভাইজার ২ ঘণ্টার মধ্যে কল করবেন
        </p>
      </div>
      <form
        onSubmit={onSubmit}
        className="rounded-2xl border border-border bg-background p-6 lg:p-8 space-y-4 shadow-card"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
              required
              className="mt-1.5"
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone *</Label>
            <Input
              id="phone"
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              maxLength={20}
              required
              className="mt-1.5"
            />
          </div>
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            maxLength={255}
            className="mt-1.5"
          />
        </div>
        <div>
          <Label htmlFor="service">Service</Label>
          <div className="mt-1.5 flex items-center gap-2 px-3 h-9 rounded-md border border-input bg-muted/40 text-sm">
            <Check className="size-3.5 text-primary" />
            <span className="font-semibold">{serviceName}</span>
            <span className="text-xs text-muted-foreground">({serviceSlug})</span>
          </div>
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            maxLength={1000}
            rows={4}
            className="mt-1.5"
            placeholder="Tell us a little about your loved one's needs..."
          />
        </div>
        <div className="flex items-start gap-2">
          <Checkbox
            id="agree"
            checked={agree}
            onCheckedChange={(v) => setAgree(!!v)}
            className="mt-0.5"
          />
          <Label htmlFor="agree" className="text-sm font-normal leading-relaxed">
            I agree to be contacted via call / WhatsApp regarding this enquiry.
          </Label>
        </div>
        <Button type="submit" size="lg" className="w-full gap-2" disabled={submitting}>
          Submit Request <ArrowRight className="size-4" />
        </Button>
      </form>
    </section>
  );
}
