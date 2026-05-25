import { K as jsxRuntimeExports, U as reactExports } from "./worker-entry-Be3-PIiG.js";
import { V as createLucideIcon, p as Route, L as Link, i as MapPin, a1 as formatBDT, s as SITE, z as callLink, P as Phone, f as Button, d as ArrowRight, j as MessageCircle, ai as whatsappLink } from "./router-C3WBn37j.js";
import { A as ArrowLeft } from "./arrow-left-BXm0zLv5.js";
import { S as Sparkles } from "./sparkles-CzBZlB2N.js";
import { C as Check } from "./check-BYKtKg3z.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$3 = [
  ["path", { d: "M10 4 8 6", key: "1rru8s" }],
  ["path", { d: "M17 19v2", key: "ts1sot" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }],
  ["path", { d: "M7 19v2", key: "12npes" }],
  [
    "path",
    {
      d: "M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",
      key: "14ym8i"
    }
  ]
];
const Bath = createLucideIcon("bath", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M2 4v16", key: "vw9hq8" }],
  ["path", { d: "M2 8h18a2 2 0 0 1 2 2v10", key: "1dgv2r" }],
  ["path", { d: "M2 17h20", key: "18nfp3" }],
  ["path", { d: "M6 8v9", key: "1yriud" }]
];
const Bed = createLucideIcon("bed", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",
      key: "kmsa83"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
];
const CirclePlay = createLucideIcon("circle-play", __iconNode$1);
const __iconNode = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "m21 3-7 7", key: "1l2asr" }],
  ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
  ["path", { d: "M9 21H3v-6", key: "wtvkvv" }]
];
const Maximize2 = createLucideIcon("maximize-2", __iconNode);
function LocationDetailsPage() {
  const {
    location
  } = Route.useLoaderData();
  const minPrice = Math.min(...location.apartments.map((a) => a.priceFrom));
  const shortName = location.name.split("—")[1]?.trim() ?? location.name;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surface", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative bg-background border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 pt-8 lg:pt-12 pb-12 lg:pb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/residences", className: "inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "size-4" }),
        " All Residences"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-8 lg:gap-12 items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 h-px bg-primary" }),
            " Senior Residence"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight", children: shortName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-2xl text-primary mt-3", children: location.bn }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl", children: location.tagline }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-foreground/80", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-4 text-primary" }),
              " ",
              location.address
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-foreground/80", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-4 text-primary" }),
              " From ৳",
              formatBDT(minPrice),
              "/mo"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-[28px] overflow-hidden aspect-[4/3] lg:aspect-[5/4] shadow-elegant", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: location.image, alt: location.name, className: "absolute inset-0 w-full h-full object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute top-5 left-5 inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-3.5" }),
            " ",
            location.area
          ] })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-7xl mx-auto px-4 sm:px-6 py-14 lg:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-10 lg:gap-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 h-px bg-primary" }),
            " About"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl lg:text-4xl font-bold tracking-tight", children: "A community designed for graceful living" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-5 leading-relaxed text-lg", children: location.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-3 gap-3 mt-8", children: location.highlights.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl border border-border bg-background hover:border-primary/40 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-5 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium mt-2 leading-snug", children: h })
          ] }, h)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:sticky lg:top-24 rounded-3xl bg-foreground text-background p-7 shadow-elegant", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.2em] text-background/60", children: "Indicative from" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-4xl font-bold tabular-nums mt-2", children: [
            "৳",
            formatBDT(minPrice),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base text-background/60 font-normal", children: "/mo" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-background/70 mt-2", children: "All-inclusive senior living, dining & care." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-6 border-t border-background/15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.2em] text-background/60", children: "Schedule a private tour" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: callLink, className: "font-display text-xl font-bold mt-1 inline-flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-5" }),
              " ",
              SITE.phoneDisplay
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-col gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-background text-foreground hover:bg-background/90 gap-2 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/request", search: {
              service: "residences"
            }, children: [
              "Book a Visit ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "bg-transparent border-background/30 text-background hover:bg-background/10 gap-2 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: whatsappLink(`Hi, I'd like a tour of ${location.name}.`), target: "_blank", rel: "noopener noreferrer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-4" }),
              " WhatsApp Us"
            ] }) })
          ] })
        ] }) })
      ] }),
      location.video && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end justify-between mb-5 gap-4 flex-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 h-px bg-primary" }),
            " Walk-through"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl lg:text-3xl font-bold tracking-tight", children: "Video tour" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative rounded-3xl overflow-hidden border border-border shadow-elegant bg-black aspect-video", children: /* @__PURE__ */ jsxRuntimeExports.jsx("video", { controls: true, preload: "metadata", poster: location.videoPoster, className: "w-full h-full object-cover", children: /* @__PURE__ */ jsxRuntimeExports.jsx("source", { src: location.video, type: "video/mp4" }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end justify-between mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 h-px bg-primary" }),
            " Gallery"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl lg:text-3xl font-bold tracking-tight", children: "Inside the residence" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 grid-rows-2 gap-3 sm:gap-4 h-[440px] sm:h-[560px]", children: location.gallery.slice(0, 5).map((src, i) => {
          const layouts = ["col-span-2 row-span-2", "col-span-2 row-span-1", "col-span-1 row-span-1", "col-span-1 row-span-1", "col-span-2 row-span-1"];
          return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `relative overflow-hidden rounded-2xl border border-border ${layouts[i] ?? "col-span-1 row-span-1"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: `${location.name} photo ${i + 1}`, loading: "lazy", className: "absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" }) }, src);
        }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-16 lg:py-24 border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 h-px bg-primary" }),
          " Apartments"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl lg:text-5xl font-bold tracking-tight leading-[1.05]", children: "Choose your residence" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-4 text-lg", children: "Each apartment is designed for senior comfort, safety, and independence." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-16 lg:space-y-24", children: location.apartments.map((apt, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(ApartmentRow, { apt, index: idx, reverse: idx % 2 === 1, location }, apt.id)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 h-px bg-primary" }),
          " Community Amenities"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl lg:text-4xl font-bold tracking-tight", children: "Everything on-site, every day" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3", children: location.amenities.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex flex-col items-center text-center p-5 rounded-2xl bg-background border border-border hover:border-primary hover:bg-primary/5 transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(a.icon, { className: "size-6 text-primary group-hover:text-primary-foreground transition-colors" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium mt-3 leading-tight", children: a.label })
      ] }, a.label)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-foreground text-background py-16 lg:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl lg:text-5xl font-bold mb-4 leading-tight", children: [
        "Ready to see ",
        shortName,
        " in person?"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-background/80 max-w-2xl mx-auto mb-8 text-lg", children: "Book a private tour and meet the community." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-background text-foreground hover:bg-background/90 gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/request", search: {
          service: "residences"
        }, children: [
          "Book a Visit ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "bg-transparent border-background/30 text-background hover:bg-background/10 gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: callLink, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-4" }),
          " Call ",
          SITE.phoneDisplay
        ] }) })
      ] })
    ] }) })
  ] });
}
function ApartmentRow({
  apt,
  index,
  reverse,
  location
}) {
  const [activeImg, setActiveImg] = reactExports.useState(0);
  const [showVideo, setShowVideo] = reactExports.useState(false);
  const mediaSlot = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[4/3] rounded-3xl overflow-hidden border border-border bg-black shadow-elegant", children: showVideo && apt.video ? /* @__PURE__ */ jsxRuntimeExports.jsx("video", { controls: true, autoPlay: true, preload: "metadata", className: "absolute inset-0 w-full h-full object-cover", children: /* @__PURE__ */ jsxRuntimeExports.jsx("source", { src: apt.video, type: "video/mp4" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: apt.gallery[activeImg], alt: `${apt.type} photo ${activeImg + 1}`, className: "absolute inset-0 w-full h-full object-cover transition-opacity" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-5 left-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white", children: apt.size }) }),
      apt.video && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShowVideo(true), className: "absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group", "aria-label": "Play video tour", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-16 rounded-full bg-white/95 text-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlay, { className: "size-10" }) }) })
    ] }) }),
    !showVideo && apt.gallery.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-2.5 mt-3", children: apt.gallery.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setActiveImg(i), className: `relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${i === activeImg ? "border-primary shadow-card" : "border-transparent opacity-60 hover:opacity-100"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: "", className: "absolute inset-0 w-full h-full object-cover" }) }, src)) })
  ] });
  const infoSlot = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3", children: [
      "Apartment · 0",
      index + 1
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl lg:text-4xl font-bold tracking-tight leading-tight", children: apt.type }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-base text-primary mt-1", children: apt.bn }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-5 leading-relaxed", children: apt.description }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2.5 mt-6", children: [{
      Icon: Bed,
      label: "Beds",
      value: String(apt.beds)
    }, {
      Icon: Bath,
      label: "Baths",
      value: String(apt.baths)
    }, {
      Icon: Maximize2,
      label: "Size",
      value: apt.size
    }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl border border-border bg-surface flex flex-col items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(s.Icon, { className: "size-5 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-wider text-muted-foreground mt-2", children: s.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-sm mt-0.5", children: s.value })
    ] }, s.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3", children: "Features" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-x-4 gap-y-2.5", children: apt.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-4 text-primary shrink-0 mt-0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80", children: f })
      ] }, f)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 pt-6 border-t border-dashed border-border flex flex-wrap items-end justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: "Indicative rent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-2xl lg:text-3xl font-bold tabular-nums leading-none mt-1", children: [
          "৳",
          formatBDT(apt.priceFrom),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-normal text-base", children: " – " }),
          "৳",
          formatBDT(apt.priceTo),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground font-normal", children: "/mo" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "shadow-cta gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/request", search: {
          service: "residences"
        }, children: [
          "Book a Visit ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", className: "gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: whatsappLink(`Hi, I'd like more details about the ${apt.type} at ${location.name}.`), target: "_blank", rel: "noopener noreferrer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-4" }),
          " WhatsApp"
        ] }) })
      ] })
    ] })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "grid lg:grid-cols-2 gap-10 lg:gap-16 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: reverse ? "lg:order-2" : "", children: mediaSlot }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: reverse ? "lg:order-1" : "", children: infoSlot })
  ] });
}
export {
  LocationDetailsPage as component
};
