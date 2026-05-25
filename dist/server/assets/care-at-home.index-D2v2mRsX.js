import { K as jsxRuntimeExports } from "./worker-entry-Be3-PIiG.js";
import { S as SERVICES, H as HeartPulse, f as Button, L as Link, d as ArrowRight, z as callLink, P as Phone, u as Stethoscope, E as careAtHomeLinkProps, a1 as formatBDT, s as SITE, j as MessageCircle, ai as whatsappLink } from "./router-C3WBn37j.js";
import { a as HeroSlider, H as HERO_IMAGES } from "./HeroSlider-uiLwF9fq.js";
import { U as Users } from "./users-8jP-Eu3B.js";
import { C as Clock } from "./clock-Ki_UlKqs.js";
import { S as ShieldCheck } from "./shield-check-CKJHgl4o.js";
import { C as Check } from "./check-BYKtKg3z.js";
import { S as Sparkles } from "./sparkles-CzBZlB2N.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const OFFERING_IMAGES = {
  "neuro-care": "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80&auto=format&fit=crop",
  "dementia-caregiver": "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&q=80&auto=format&fit=crop",
  "icu-setup": "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80&auto=format&fit=crop",
  "nursing-care": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
  "patient-caregiver": "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=800&q=80",
  physiotherapy: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80&auto=format&fit=crop",
  "lab-test": "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80&auto=format&fit=crop",
  "x-ray": "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80&auto=format&fit=crop",
  ecg: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80&auto=format&fit=crop"
};
const OFFERINGS = [
  {
    title: "Neuro Care at Home",
    bn: "নিউরো কেয়ার",
    desc: "Stroke recovery, Parkinson's & post-neurosurgery care with specialist supervision.",
    slug: "neuro-care"
  },
  {
    title: "Dementia Caregiver",
    bn: "ডিমেনশিয়া কেয়ারগিভার",
    desc: "Trained caregivers for memory loss, behavioral support and a safe daily routine.",
    slug: "dementia-caregiver"
  },
  {
    title: "ICU Setup at Home",
    bn: "হোম আইসিইউ সেটআপ",
    desc: "Hospital-grade equipment, ICU-trained nurses and doctor supervision at home.",
    slug: "icu-setup"
  },
  {
    title: "Nursing Care",
    bn: "নার্সিং কেয়ার",
    desc: "Registered nurses for wound care, IV, injections, catheter and post-op recovery.",
    slug: "nursing-care"
  },
  {
    title: "Patient Caregiver",
    bn: "পেশেন্ট কেয়ারগিভার",
    desc: "Compassionate attendants for bathing, feeding, mobility and daily comfort.",
    slug: "patient-caregiver"
  },
  {
    title: "Physiotherapy",
    bn: "ফিজিওথেরাপি",
    desc: "Personalized at-home physio for mobility, recovery and pain management.",
    slug: "physiotherapy"
  },
  {
    title: "Lab Test at Home",
    bn: "ল্যাব টেস্ট",
    desc: "Blood, urine and full panel sample collection from your doorstep.",
    slug: "lab-test"
  },
  {
    title: "X-ray at Home",
    bn: "এক্স-রে",
    desc: "Portable digital X-ray with quick reporting — no hospital visit required.",
    slug: "x-ray"
  },
  {
    title: "ECG at Home",
    bn: "ইসিজি",
    desc: "On-spot cardiac ECG with cardiologist review delivered to your phone.",
    slug: "ecg"
  }
];
const TRUST = [
  { icon: Users, label: "10,000+ Seniors Served", bn: "১০,০০০+ পরিবার" },
  { icon: Stethoscope, label: "Medical Supervision", bn: "মেডিকেল সুপারভিশন" },
  { icon: Clock, label: "Easy Coordination", bn: "সহজ সমন্বয়" },
  { icon: ShieldCheck, label: "Comprehensive Solutions", bn: "সম্পূর্ণ সমাধান" },
  { icon: HeartPulse, label: "Continuity of Care", bn: "ধারাবাহিক যত্ন" }
];
const STEPS = [
  {
    num: "01",
    title: "Submit request",
    bn: "অনুরোধ জমা দিন",
    desc: "Tell us about your loved one's needs in 1 minute."
  },
  {
    num: "02",
    title: "Talk to advisor",
    bn: "অ্যাডভাইজারের সাথে কথা",
    desc: "A care advisor calls within 2 hours to understand the situation."
  },
  {
    num: "03",
    title: "Customized plan",
    bn: "কাস্টম প্ল্যান",
    desc: "We design a plan that fits your budget and medical needs."
  },
  {
    num: "04",
    title: "Caregiver assigned",
    bn: "কেয়ারগিভার নিযুক্ত",
    desc: "A trained, vetted caregiver is matched and starts care."
  }
];
function CareAtHomePage() {
  const homecare = SERVICES.find((s) => s.slug === "care-at-home");
  const featured = homecare.packages.filter(
    (p) => ["hc-hourly", "hc-daily", "hc-monthly", "hc-icu"].includes(p.id)
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-gradient-to-br from-accent/40 via-background to-surface", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSlider, { images: HERO_IMAGES.homeCare }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 grid lg:grid-cols-12 gap-10 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background border border-border text-xs font-semibold text-primary mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(HeartPulse, { className: "size-3.5" }),
            " Care at Home — হোম কেয়ার"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-bangla text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight", children: [
            "ঘরেই পাবেন ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "পেশাদার" }),
            " চিকিৎসা সেবা"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground mt-5 max-w-xl leading-relaxed", children: "We bring hospital-level care to your home — so your loved ones stay safe, comfortable, and cared for in the place they know best." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 mt-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/request", search: { service: "care-at-home", package: "" }, children: [
              "Request Home Care ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "gap-2 text-black !text-black", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: callLink, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-4 text-black !text-black" }),
              " Talk to Care Advisor"
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-4 font-bangla", children: "✓ কোনো অনলাইন পেমেন্ট নেই · ফোনে কথা বলে কনফার্ম" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-background border border-border text-black !text-black p-6 lg:p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-black !text-black mb-4", children: "Why families trust us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: TRUST.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-9 rounded-lg bg-accent flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(t.icon, { className: "size-4 text-accent-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-black !text-black", children: t.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-xs text-black !text-black", children: t.bn })
            ] })
          ] }, t.label)) })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-16 lg:py-20 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 h-px bg-primary" }),
        " Care comes to you"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl lg:text-4xl font-bold tracking-tight", children: "Personalized care, in the comfort of your home" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground mt-5 leading-relaxed", children: "We believe care should come to you. Whether it's nursing, physiotherapy, or diagnostics, our trained caregivers ensure your loved ones receive personalized care in a familiar environment — surrounded by family." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-surface py-16 lg:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl lg:text-4xl font-bold tracking-tight", children: "Care at Home Offerings" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-muted-foreground mt-2", children: "আপনার প্রিয়জনের প্রয়োজন অনুযায়ী সম্পূর্ণ সেবা" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: OFFERINGS.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "group flex flex-col rounded-2xl bg-background border border-border hover:border-primary hover:shadow-card transition-all overflow-hidden",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[16/9] overflow-hidden bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: o.slug ? OFFERING_IMAGES[o.slug] : OFFERING_IMAGES["nursing-care"],
                alt: o.title,
                loading: "lazy",
                className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex flex-col flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold", children: o.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-xs text-primary mt-0.5", children: o.bn }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-3 leading-relaxed flex-1", children: o.desc }),
              o.slug ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  ...careAtHomeLinkProps(o.slug),
                  className: "inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all",
                  children: [
                    "Know More ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
                  ]
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/request",
                  search: { service: "care-at-home", package: "" },
                  className: "inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all",
                  children: [
                    "Know More ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
                  ]
                }
              )
            ] })
          ]
        },
        o.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl lg:text-4xl font-bold tracking-tight", children: "Transparent Packages" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-muted-foreground mt-2", children: "পরিষ্কার মূল্য — কোনো লুকানো খরচ নয়" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4", children: featured.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `relative p-6 rounded-2xl bg-background border-2 transition-all flex flex-col ${p.popular ? "border-primary shadow-card" : "border-border"}`,
          children: [
            p.popular && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider", children: "Most Popular" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold", children: p.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-xs text-primary mt-0.5", children: p.bangla }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-2xl font-bold mt-4 tabular-nums", children: [
              "৳",
              formatBDT(p.priceFrom),
              "–",
              formatBDT(p.priceTo)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              "/ ",
              p.unit
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2 text-sm flex-1", children: p.features.slice(0, 3).map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3.5 text-primary shrink-0 mt-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: f })
            ] }, f)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                asChild: true,
                size: "sm",
                className: "mt-5 w-full",
                variant: p.popular ? "default" : "outline",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/request", search: { service: "care-at-home", package: p.id }, children: "Request" })
              }
            )
          ]
        },
        p.id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 p-5 rounded-2xl bg-accent/40 border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "inline size-4 text-primary mr-1" }),
            " Custom Plan Available"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-bangla mt-0.5", children: "পরিবার অনুযায়ী প্ল্যান সাজিয়ে দেব — বাজেট ও প্রয়োজন বুঝে" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/request", search: { service: "care-at-home", package: "custom" }, children: "Build Custom Plan" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold mb-2", children: "Quick Comparison" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6", children: "All prices are indicative — final pricing is confirmed after a call with your care advisor." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto rounded-2xl border border-border bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-muted/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-4 font-semibold", children: "Plan" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-4 font-semibold", children: "Price (BDT)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-4 font-semibold hidden md:table-cell", children: "Best for" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right p-4" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: homecare.packages.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border last:border-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: p.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bangla text-xs text-primary mt-0.5", children: p.bangla })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-4 tabular-nums", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
                "৳",
                formatBDT(p.priceFrom),
                "–",
                formatBDT(p.priceTo)
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                "/ ",
                p.unit
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 hidden md:table-cell text-muted-foreground", children: p.features[0] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "sm", variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/request", search: { service: "care-at-home", package: p.id }, children: "Request" }) }) })
          ] }, p.id)) })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-surface py-16 lg:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl lg:text-4xl font-bold tracking-tight", children: "How It Works" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-muted-foreground mt-2", children: "৪টি সহজ ধাপে শুরু হবে আপনার সেবা" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4", children: STEPS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "relative p-6 rounded-2xl bg-background border border-border",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-4xl font-bold text-primary/20", children: s.num }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold mt-2", children: s.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-xs text-primary mt-0.5", children: s.bn }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-3", children: s.desc }),
            i < STEPS.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 size-5 text-border" })
          ]
        },
        s.num
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-foreground text-background py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bangla text-3xl lg:text-4xl font-bold mb-4 leading-tight", children: [
        "আপনার প্রিয়জনের যত্ন ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "আজই শুরু করুন" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-background/70 mb-8", children: "One call is all it takes. Our care advisor will listen, suggest the right plan, and confirm pricing — no online payment, ever." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            asChild: true,
            size: "lg",
            className: "bg-background text-foreground hover:bg-background/90 gap-2",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: callLink, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-4" }),
              " Call ",
              SITE.phoneDisplay
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            asChild: true,
            size: "lg",
            variant: "outline",
            className: "bg-transparent border-background/30 text-background hover:bg-background/10 gap-2",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: whatsappLink("Hi, I'd like to start home care for my family member."),
                target: "_blank",
                rel: "noopener noreferrer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-4" }),
                  " WhatsApp"
                ]
              }
            )
          }
        )
      ] })
    ] }) })
  ] });
}
const SplitComponent = CareAtHomePage;
export {
  SplitComponent as component
};
