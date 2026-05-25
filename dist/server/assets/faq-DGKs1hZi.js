import { K as jsxRuntimeExports } from "./worker-entry-Be3-PIiG.js";
import { A as Accordion, F as FAQS, b as AccordionItem, c as AccordionTrigger, a as AccordionContent } from "./router-C3WBn37j.js";
import { a as HeroSlider, H as HERO_IMAGES } from "./HeroSlider-uiLwF9fq.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-gradient-to-br from-accent via-background to-surface", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSlider, { images: HERO_IMAGES.faq }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-16 lg:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl lg:text-5xl font-bold tracking-tight", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-4 text-lg", children: "Answers to the questions families ask us most." })
    ] })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-2xl mx-auto px-4 sm:px-6 py-12 lg:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { type: "single", collapsible: true, children: FAQS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: f.q, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "text-left font-semibold", children: f.q }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "text-muted-foreground leading-relaxed", children: f.a })
  ] }, f.q)) }) })
] });
export {
  SplitComponent as component
};
