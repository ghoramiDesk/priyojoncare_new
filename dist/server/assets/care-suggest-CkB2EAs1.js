import { U as reactExports, K as jsxRuntimeExports } from "./worker-entry-Be3-PIiG.js";
import { f as Button } from "./router-C3WBn37j.js";
import { T as Textarea } from "./textarea-etiRFo2K.js";
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from "./card-tX6W7B6C.js";
import { a as HeroSlider, H as HERO_IMAGES } from "./HeroSlider-uiLwF9fq.js";
import { S as Sparkles } from "./sparkles-CzBZlB2N.js";
import { L as LoaderCircle } from "./loader-circle-Dr-TzxJk.js";
import { T as TriangleAlert } from "./triangle-alert-C8i3BRue.js";
import { M as Markdown } from "./index-B95qjrcZ.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function CareSuggestPage() {
  const [desc, setDesc] = reactExports.useState("");
  const [response, setResponse] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (desc.trim().length < 10) {
      setError("Please describe the situation in a bit more detail.");
      return;
    }
    setError(null);
    setResponse("");
    setLoading(true);
    try {
      const url = `${"https://xvelxomclyugmmghhrtp.supabase.co"}/functions/v1/care-suggest`;
      const resp = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh2ZWx4b21jbHl1Z21tZ2hocnRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY2OTk2NDAsImV4cCI6MjA5MjI3NTY0MH0.-G16C7n9f1K93lDCViWrH98RFyVEIFOnKQEY4cPqHrg"}`
        },
        body: JSON.stringify({
          description: desc
        })
      });
      if (!resp.ok) {
        if (resp.status === 429) throw new Error("Too many requests. Please wait a moment.");
        if (resp.status === 402) throw new Error("AI credits exhausted. Please contact support.");
        throw new Error("AI service error");
      }
      if (!resp.body) throw new Error("No response stream");
      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buf = "";
      let done = false;
      while (!done) {
        const {
          done: d,
          value
        } = await reader.read();
        if (d) break;
        buf += decoder.decode(value, {
          stream: true
        });
        let idx;
        while ((idx = buf.indexOf("\n")) !== -1) {
          let line = buf.slice(0, idx);
          buf = buf.slice(idx + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (!line.startsWith("data: ")) continue;
          const json = line.slice(6).trim();
          if (json === "[DONE]") {
            done = true;
            break;
          }
          try {
            const parsed = JSON.parse(json);
            const c = parsed.choices?.[0]?.delta?.content;
            if (c) setResponse((r) => r + c);
          } catch {
            buf = line + "\n" + buf;
            break;
          }
        }
      }
    } catch (e2) {
      setError(e2 instanceof Error ? e2.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-gradient-to-br from-accent via-background to-surface", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSlider, { images: HERO_IMAGES.careSuggest }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-16 lg:py-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-7 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl lg:text-4xl font-bold", children: "AI Care Advisor" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
          "Describe your loved one's situation and get personalized suggestions instantly. ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Not a substitute for medical diagnosis." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 py-10 lg:py-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "mt-8 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 5, maxLength: 2e3, value: desc, onChange: (e) => setDesc(e.target.value), placeholder: "E.g. My 78-year-old father had a mild stroke 2 weeks ago. He's home now, has trouble walking, and sometimes forgets recent events. We need help with daily routines and exercises.", className: "text-base" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", size: "lg", disabled: loading || desc.length < 10, children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "size-4 animate-spin mr-2" }),
          "Thinking…"
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-4 mr-2" }),
          "Get Suggestions"
        ] }) })
      ] }),
      error && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 p-4 rounded-lg bg-destructive/10 text-destructive flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "size-5 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: error })
      ] }),
      response && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-5 text-primary" }),
          " Care Suggestions"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose prose-zinc max-w-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Markdown, { children: response }) }) })
      ] })
    ] })
  ] });
}
export {
  CareSuggestPage as component
};
