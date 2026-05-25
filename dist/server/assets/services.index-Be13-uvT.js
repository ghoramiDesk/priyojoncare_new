import { K as jsxRuntimeExports } from "./worker-entry-Be3-PIiG.js";
import { S as SERVICES, L as Link, a6 as serviceLinkProps, f as Button, s as SITE, z as callLink, P as Phone, j as MessageCircle, ai as whatsappLink } from "./router-C3WBn37j.js";
import { a as HeroSlider, H as HERO_IMAGES } from "./HeroSlider-uiLwF9fq.js";
import { H as House, B as Brain } from "./house-L1ngIjUV.js";
import { H as Hospital } from "./hospital-DV3gTmHK.js";
import { B as Building2 } from "./building-2-CSn6mSrg.js";
import { C as Check } from "./check-BYKtKg3z.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const ICONS = {
  residence: Building2,
  carehome: Hospital,
  memory: Brain,
  homecare: House
};
const SERVICE_IMAGES = {
  residences: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80&auto=format&fit=crop",
  "care-homes": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&q=80&auto=format&fit=crop",
  "memory-care": "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80&auto=format&fit=crop",
  "care-at-home": "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1200&q=80&auto=format&fit=crop",
  "home-care": "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1200&q=80&auto=format&fit=crop"
};
function ServicesIndex() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surface", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-gradient-to-br from-accent via-background to-surface", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSlider, { images: HERO_IMAGES.service }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-16 lg:pt-40 pb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 h-px bg-primary" }),
          " Services & Packages"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl lg:text-5xl font-bold tracking-tight", children: [
          "Structured care plans with",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "transparent pricing" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-lg text-muted-foreground mt-4", children: "পরিষ্কার প্যাকেজ, পরিবার অনুযায়ী প্ল্যান। প্রতিটি সার্ভিসের বিস্তারিত আলাদা পেজে।" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-7xl mx-auto px-4 sm:px-6 pb-20 mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-4", children: SERVICES.map((s) => {
      ICONS[s.icon];
      Math.min(...s.packages.map((p) => p.priceFrom));
      Math.max(...s.packages.map((p) => p.priceTo));
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { ...serviceLinkProps(s.slug), className: "group flex flex-col rounded-2xl bg-background border border-border hover:border-primary hover:shadow-card transition-all overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[16/9] overflow-hidden bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: SERVICE_IMAGES[s.slug] ?? SERVICE_IMAGES.residences, alt: s.title, loading: "lazy", className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col p-6 lg:p-8 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-primary font-medium text-sm", children: s.bangla }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold tracking-tight mt-1", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2 text-sm leading-relaxed", children: s.summary }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-1.5", children: s.subServices.slice(0, 4).map((sub) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-4 text-primary shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80", children: sub })
          ] }, sub)) })
        ] })
      ] }, s.slug);
    }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-foreground text-background py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold mb-3", children: "Not sure which plan fits?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-background/80 mb-2", children: "আমাদের কেয়ার অ্যাডভাইজার আপনাকে সাহায্য করবেন।" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-background/70 mb-7 max-w-xl mx-auto", children: "Talk to a care advisor — we'll listen, suggest the right plan, and confirm pricing offline. No payment online, ever." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-background text-foreground hover:bg-background/90 gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: callLink, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-4" }),
          " Call ",
          SITE.phoneDisplay
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "bg-transparent border-background/30 text-background hover:bg-background/10 gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: whatsappLink("Hi, I'd like advice on choosing a care package."), target: "_blank", rel: "noopener noreferrer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-4" }),
          " WhatsApp Advisor"
        ] }) })
      ] })
    ] }) })
  ] });
}
export {
  ServicesIndex as component
};
