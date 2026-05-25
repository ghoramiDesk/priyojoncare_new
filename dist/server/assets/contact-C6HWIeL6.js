import { K as jsxRuntimeExports } from "./worker-entry-Be3-PIiG.js";
import { C as Card } from "./card-tX6W7B6C.js";
import { z as callLink, P as Phone, s as SITE, j as MessageCircle, ai as whatsappLink, M as Mail, i as MapPin } from "./router-C3WBn37j.js";
import { a as HeroSlider, H as HERO_IMAGES } from "./HeroSlider-uiLwF9fq.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function ContactPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-gradient-to-br from-accent via-background to-surface", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSlider, { images: HERO_IMAGES.contact }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 lg:py-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl lg:text-5xl font-bold tracking-tight", children: "Talk to us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-4 text-lg max-w-xl", children: "We pick up. Day or night. Call, message, or visit — whichever feels easiest." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 py-12 lg:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4 mt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: callLink, className: "p-6 rounded-2xl bg-primary text-primary-foreground shadow-cta flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-7" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider opacity-80", children: "24/7 Careline" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold", children: SITE.phoneDisplay })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: whatsappLink(), target: "_blank", rel: "noopener noreferrer", className: "p-6 rounded-2xl bg-whatsapp text-white shadow-cta flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-7" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider opacity-80", children: "WhatsApp" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold", children: "Chat with advisor" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6 flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-6 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${SITE.email}`, className: "text-lg font-semibold", children: SITE.email })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6 flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-6 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Office" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold", children: SITE.address })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  ContactPage as component
};
