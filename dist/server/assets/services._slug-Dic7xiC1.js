import { K as jsxRuntimeExports } from "./worker-entry-Be3-PIiG.js";
import { a1 as formatBDT, aa as unitLabelBn, a9 as unitLabel, f as Button, L as Link, G as cn, o as Route, s as SITE, z as callLink, P as Phone, j as MessageCircle, ai as whatsappLink } from "./router-C3WBn37j.js";
import { S as Sparkles } from "./sparkles-CzBZlB2N.js";
import { C as Check } from "./check-BYKtKg3z.js";
import { a as HeroSlider, H as HERO_IMAGES } from "./HeroSlider-uiLwF9fq.js";
import { A as ArrowLeft } from "./arrow-left-BXm0zLv5.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function PackageCard({ pkg, serviceSlug, ctaLabel = "Request This Package" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "relative flex flex-col p-7 rounded-2xl border bg-background transition-all h-full",
        pkg.popular ? "border-primary shadow-elegant ring-1 ring-primary/20" : "border-border hover:border-primary/40 hover:shadow-card"
      ),
      children: [
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
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bangla", children: unitLabelBn[pkg.unit] }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: unitLabel[pkg.unit] }),
            " · indicative pricing"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5 mb-7 flex-1", children: pkg.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-4 text-primary shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: f })
        ] }, f)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            asChild: true,
            size: "lg",
            variant: pkg.popular ? "default" : "outline",
            className: cn("w-full", pkg.popular && "shadow-cta"),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/request", search: { service: serviceSlug, package: pkg.id }, children: ctaLabel })
          }
        )
      ]
    }
  );
}
function ServiceDetail() {
  const {
    service
  } = Route.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-surface", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSlider, { images: HERO_IMAGES.service }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "size-4" }),
          " All services"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-primary font-medium mb-2", children: service.bangla }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl lg:text-5xl font-bold tracking-tight", children: service.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground mt-4 max-w-2xl", children: service.tagline }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mt-6", children: service.subServices.map((sub) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm px-3 py-1.5 rounded-full bg-background border border-border font-medium", children: sub }, sub)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-6xl mx-auto px-4 sm:px-6 py-14 lg:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl lg:text-3xl font-bold", children: "Choose a Package" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-muted-foreground mt-1", children: "আপনার পরিবারের জন্য সঠিক প্ল্যান বেছে নিন" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/request", search: {
          service: service.slug,
          package: "custom"
        }, children: "Build Custom Plan" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid gap-5 ${service.packages.length >= 4 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 md:grid-cols-3"}`, children: service.packages.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(PackageCard, { pkg: p, serviceSlug: service.slug, ctaLabel: service.cta }, p.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-surface py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl lg:text-3xl font-bold mb-2", children: "Quick Comparison" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8", children: "All prices are indicative — final pricing is confirmed after a call with your care advisor." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto rounded-2xl border border-border bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-muted/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-4 font-semibold", children: "Plan" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-4 font-semibold", children: "Price (BDT)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-4 font-semibold hidden md:table-cell", children: "Includes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right p-4" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: service.packages.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border last:border-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-semibold", children: [
              p.name,
              " ",
              p.popular && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1.5 text-[10px] uppercase tracking-wider bg-primary text-primary-foreground px-1.5 py-0.5 rounded", children: "Popular" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bangla text-xs text-primary mt-0.5", children: p.bangla })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-4 tabular-nums", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
              "৳",
              formatBDT(p.priceFrom),
              " – ৳",
              formatBDT(p.priceTo)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bangla", children: unitLabelBn[p.unit] }),
              " ",
              unitLabel[p.unit]
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 hidden md:table-cell", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: p.features.slice(0, 3).map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3.5 text-primary shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: f })
          ] }, f)) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/request", search: {
            service: service.slug,
            package: p.id
          }, children: "Request" }) }) })
        ] }, p.id)) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-foreground text-background py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold mb-3", children: "Talk to a Care Advisor" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-background/80 mb-2", children: "পরিবারের প্রয়োজন বুঝে সঠিক প্ল্যান বেছে নিতে সাহায্য করব।" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-background/70 mb-7", children: "Final pricing, payment terms and start date are confirmed offline. No card required." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-background text-foreground hover:bg-background/90 gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: callLink, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-4" }),
          " Call ",
          SITE.phoneDisplay
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "bg-transparent border-background/30 text-background hover:bg-background/10 gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: whatsappLink(`Hi, I'd like info about ${service.title} packages.`), target: "_blank", rel: "noopener noreferrer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-4" }),
          " WhatsApp"
        ] }) })
      ] })
    ] }) })
  ] });
}
export {
  ServiceDetail as component
};
