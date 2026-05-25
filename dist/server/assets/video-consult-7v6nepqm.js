import { K as jsxRuntimeExports } from "./worker-entry-Be3-PIiG.js";
import { V as createLucideIcon, f as Button, ai as whatsappLink } from "./router-C3WBn37j.js";
import { a as HeroSlider, H as HERO_IMAGES } from "./HeroSlider-uiLwF9fq.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$2 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ]
];
const MessageSquare = createLucideIcon("message-square", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
      key: "ftymec"
    }
  ],
  ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" }]
];
const Video = createLucideIcon("video", __iconNode);
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-gradient-to-br from-accent via-background to-surface", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSlider, { images: HERO_IMAGES.videoConsult }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-16 lg:py-24 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-20 rounded-full bg-accent flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { className: "size-9 text-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl lg:text-5xl font-bold tracking-tight", children: "Video Consultation" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-4 text-lg max-w-xl mx-auto", children: "Connect with our visiting physicians and senior nurses face-to-face from anywhere — perfect for NRB families." })
    ] })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-3 gap-4", children: [{
      icon: Calendar,
      t: "Book a slot",
      d: "30 or 60-minute appointments."
    }, {
      icon: Video,
      t: "Secure HD video",
      d: "Private and encrypted."
    }, {
      icon: MessageSquare,
      t: "Written summary",
      d: "Notes sent via WhatsApp after."
    }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-2xl border border-border bg-surface text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "size-6 text-primary mb-3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-1", children: s.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: s.d })
    ] }, s.t)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 p-6 rounded-2xl bg-accent/40 border border-accent", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-accent-foreground", children: "📅 Video booking coming soon. To schedule today, message us on WhatsApp." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: whatsappLink("Hi! I'd like to book a video consultation."), target: "_blank", rel: "noopener noreferrer", children: "Book via WhatsApp" }) })
    ] })
  ] })
] });
export {
  SplitComponent as component
};
