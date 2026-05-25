import { K as jsxRuntimeExports } from "./worker-entry-Be3-PIiG.js";
import { f as Button, L as Link, d as ArrowRight, j as MessageCircle, ai as whatsappLink, s as SITE, z as callLink, P as Phone, a1 as formatBDT, U as UtensilsCrossed, u as Stethoscope, B as Bell, X, S as SERVICES } from "./router-C3WBn37j.js";
import { a as HeroSlider, H as HERO_IMAGES } from "./HeroSlider-uiLwF9fq.js";
import { U as Users } from "./users-8jP-Eu3B.js";
import { C as Clock } from "./clock-Ki_UlKqs.js";
import { S as ShieldCheck } from "./shield-check-CKJHgl4o.js";
import { H as Hospital } from "./hospital-DV3gTmHK.js";
import { S as Sparkles } from "./sparkles-CzBZlB2N.js";
import { C as Check } from "./check-BYKtKg3z.js";
import { S as Smile } from "./smile-BJ-QOtv5.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const TRUST = [{
  icon: Users,
  label: "3,000+ Residents Served",
  bn: "৩০০০+ সদস্য"
}, {
  icon: Clock,
  label: "24/7 Clinical Support",
  bn: "২৪/৭ ক্লিনিক্যাল সাপোর্ট"
}, {
  icon: ShieldCheck,
  label: "Trained Caregivers",
  bn: "প্রশিক্ষিত কেয়ারগিভার"
}];
const APPROACH = [{
  title: "Assisted Living",
  bn: "অ্যাসিস্টেড লিভিং",
  desc: "Daily personal assistance in a homely, supervised setting.",
  image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80"
}, {
  title: "Rehabilitation Care",
  bn: "রিহ্যাব কেয়ার",
  desc: "Structured physiotherapy and recovery support after illness.",
  image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=1200&q=80"
}, {
  title: "Post-Surgery Recovery",
  bn: "পোস্ট-সার্জারি রিকভারি",
  desc: "Continuous nursing and monitoring after hospital discharge.",
  image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80"
}, {
  title: "Palliative Care",
  bn: "প্যালিয়েটিভ কেয়ার",
  desc: "Compassionate end-of-life comfort, dignity, and family support.",
  image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80"
}];
const COMPARE = [{
  feature: "Personal attention",
  bn: "ব্যক্তিগত যত্ন",
  carehome: true,
  hospital: false,
  home: "partial"
}, {
  feature: "24/7 medical supervision",
  bn: "২৪/৭ মেডিকেল তদারকি",
  carehome: true,
  hospital: true,
  home: false
}, {
  feature: "Calm, homely environment",
  bn: "শান্ত ঘরোয়া পরিবেশ",
  carehome: true,
  hospital: false,
  home: true
}, {
  feature: "Faster recovery setting",
  bn: "দ্রুত আরোগ্য",
  carehome: true,
  hospital: "partial",
  home: "partial"
}, {
  feature: "Social interaction",
  bn: "সামাজিক জীবন",
  carehome: true,
  hospital: false,
  home: false
}, {
  feature: "Affordability long-term",
  bn: "দীর্ঘমেয়াদে সাশ্রয়ী",
  carehome: true,
  hospital: false,
  home: "partial"
}];
const FEATURES = [{
  icon: UtensilsCrossed,
  title: "Nutritious Meals",
  bn: "পুষ্টিকর খাবার"
}, {
  icon: Stethoscope,
  title: "Regular Doctor Visits",
  bn: "নিয়মিত ডাক্তার ভিজিট"
}, {
  icon: Bell,
  title: "Emergency Response",
  bn: "জরুরি সেবা"
}, {
  icon: Smile,
  title: "Activities & Social Life",
  bn: "সামাজিক কার্যক্রম"
}];
const carehomeService = SERVICES.find((s) => s.slug === "care-homes");
function Cmp({
  value
}) {
  if (value === true) return /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-5 text-primary mx-auto", "aria-label": "Yes" });
  if (value === false) return /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-5 text-muted-foreground/50 mx-auto", "aria-label": "No" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-muted-foreground", children: "Partial" });
}
function CareHomesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surface", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-gradient-to-br from-accent via-background to-surface", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSlider, { images: HERO_IMAGES.careHomes }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-16 lg:pt-24 pb-16 lg:pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-10 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 h-px bg-primary" }),
            " Care Homes"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-bangla font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight", children: "হাসপাতাল নয়, আপনার প্রিয়জনের জন্য নিরাপদ ঘর" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg lg:text-xl text-muted-foreground mt-5 max-w-2xl", children: "A place where seniors receive medical care, emotional support, and dignity — all under one warm, professionally managed roof." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 mt-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "shadow-cta gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/request", search: {
              service: "care-homes"
            }, children: [
              "Book Consultation ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "gap-2 text-black !text-black", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: whatsappLink("Hi, I'd like to enquire about Care Home placement."), target: "_blank", rel: "noopener noreferrer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-4" }),
              " Enquire Now"
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-3 gap-4 max-w-xl", children: TRUST.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-background border border-border p-3 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(t.icon, { className: "size-5 text-primary mx-auto mb-1.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold leading-tight text-black !text-black", children: t.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-[11px] text-muted-foreground mt-0.5 text-black !text-black", children: t.bn })
          ] }, t.label)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-background border border-border shadow-elegant p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Hospital, { className: "size-7 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold mb-2 text-black !text-black", children: "More than a facility — a home" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed text-black !text-black", children: "Our care homes blend hospital-grade clinical safety with the warmth of family living. No sterile wards. No isolation. Just dignity, routine, and people who know your loved one by name." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-6 border-t border-border ", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground text-black !text-black", children: "Talk to an advisor" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: callLink, className: "font-display text-xl font-bold text-black !text-black mt-1 inline-flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-5" }),
              " ",
              SITE.phoneDisplay
            ] })
          ] })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-5xl mx-auto px-4 sm:px-6 py-16 lg:py-20 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 h-px bg-primary" }),
        " What is a Care Home?"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl lg:text-4xl font-bold tracking-tight", children: [
        "A professionally managed home for seniors who need ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "daily care or recovery" }),
        " support."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-lg text-muted-foreground mt-5 max-w-3xl mx-auto leading-relaxed", children: "কেয়ার হোম এমন একটি জায়গা যেখানে বয়োজ্যেষ্ঠরা পেশাদার চিকিৎসা সেবা, পুষ্টিকর খাবার, এবং পরিবারের মতো আন্তরিক যত্ন পান — হাসপাতালের একাকীত্ব ছাড়াই।" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-16 lg:py-20 border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 h-px bg-primary" }),
          " Care Approach"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl lg:text-4xl font-bold tracking-tight", children: "Four pillars of care, one peaceful home" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: APPROACH.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-surface border border-border hover:border-primary/40 hover:shadow-card transition-all overflow-hidden flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[16/10] overflow-hidden bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: a.image, alt: a.title, loading: "lazy", className: "w-full h-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex flex-col flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold", children: a.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-sm text-primary mt-0.5", children: a.bn }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-3 leading-relaxed", children: a.desc })
        ] })
      ] }, a.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 h-px bg-primary" }),
          " Care Home vs Hospital vs Home"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl lg:text-4xl font-bold tracking-tight", children: "Why families are choosing care homes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-base text-muted-foreground mt-3", children: "✔ More personal attention   ✔ শান্ত পরিবেশ   ✔ Better recovery" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto rounded-2xl border border-border bg-background shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm min-w-[640px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-semibold p-4", children: "Feature" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center font-semibold p-4 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Hospital, { className: "size-4" }),
            " Care Home"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center font-semibold p-4 text-muted-foreground", children: "Hospital" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center font-semibold p-4 text-muted-foreground", children: "Home Alone" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: COMPARE.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: row.feature }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-xs text-muted-foreground", children: row.bn })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 text-center bg-primary/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cmp, { value: row.carehome }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cmp, { value: row.hospital }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cmp, { value: row.home }) })
        ] }, row.feature)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-16 lg:py-20 border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 h-px bg-primary" }),
          " Packages & Pricing"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl lg:text-4xl font-bold tracking-tight", children: "Transparent monthly plans" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-3", children: "All prices are indicative — final pricing is confirmed after a call with your care advisor." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: carehomeService.packages.map((pkg) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative flex flex-col p-7 rounded-2xl border bg-surface transition-all ${pkg.popular ? "border-primary shadow-elegant ring-1 ring-primary/20" : "border-border hover:border-primary/40 hover:shadow-card"}`, children: [
        pkg.popular && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute -top-3 left-7 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-3" }),
          " Most Popular"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold", children: pkg.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-sm text-primary mt-0.5", children: pkg.bangla }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-1.5 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-3xl font-bold tabular-nums", children: [
              "৳",
              formatBDT(pkg.priceFrom)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "–" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-3xl font-bold tabular-nums", children: [
              "৳",
              formatBDT(pkg.priceTo)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "per month · indicative pricing" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5 mb-7 flex-1", children: pkg.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-4 text-primary shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: f })
        ] }, f)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: pkg.popular ? "default" : "outline", className: `w-full ${pkg.popular ? "shadow-cta" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/request", search: {
          service: "care-homes",
          package: pkg.id
        }, children: "Request Placement" }) })
      ] }, pkg.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 rounded-2xl bg-accent/40 border border-border p-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg font-semibold", children: "Need a custom plan?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "We tailor care plans for complex medical needs, short stays, and family preferences." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 h-px bg-primary" }),
          " Inside the Home"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl lg:text-4xl font-bold tracking-tight", children: "Everything they need, every day" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: FEATURES.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-2xl bg-background border border-border text-center hover:shadow-card transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "size-6 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: f.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-sm text-muted-foreground mt-1", children: f.bn })
      ] }, f.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-foreground text-background py-16 lg:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bangla text-3xl lg:text-4xl font-bold mb-4", children: "একটি ফোনেই শুরু হোক যত্নের পথচলা" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-background/80 max-w-2xl mx-auto mb-8", children: "Speak with our care advisor. We'll listen, recommend the right plan, and arrange a visit — no pressure, no online payment." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-background text-foreground hover:bg-background/90 gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/request", search: {
          service: "care-homes"
        }, children: [
          "Request Placement ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "bg-transparent border-background/30 text-background hover:bg-background/10 gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: callLink, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-4" }),
          " Call Advisor — ",
          SITE.phoneDisplay
        ] }) })
      ] })
    ] }) })
  ] });
}
export {
  CareHomesPage as component
};
