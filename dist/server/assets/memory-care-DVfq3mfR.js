import { K as jsxRuntimeExports } from "./worker-entry-Be3-PIiG.js";
import { V as createLucideIcon, S as SERVICES, f as Button, L as Link, d as ArrowRight, z as callLink, P as Phone, u as Stethoscope, a1 as formatBDT, H as HeartPulse, s as SITE, j as MessageCircle, ai as whatsappLink } from "./router-C3WBn37j.js";
import { a as HeroSlider, H as HERO_IMAGES } from "./HeroSlider-uiLwF9fq.js";
import { B as Brain, H as House } from "./house-L1ngIjUV.js";
import { S as Sparkles } from "./sparkles-CzBZlB2N.js";
import { S as ShieldCheck } from "./shield-check-CKJHgl4o.js";
import { C as Clock } from "./clock-Ki_UlKqs.js";
import { C as Check } from "./check-BYKtKg3z.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "M12 11h4", key: "1jrz19" }],
  ["path", { d: "M12 16h4", key: "n85exb" }],
  ["path", { d: "M8 11h.01", key: "1dfujw" }],
  ["path", { d: "M8 16h.01", key: "18s6g9" }]
];
const ClipboardList = createLucideIcon("clipboard-list", __iconNode$1);
const __iconNode = [
  ["path", { d: "M13 2a9 9 0 0 1 9 9", key: "1itnx2" }],
  ["path", { d: "M13 6a5 5 0 0 1 5 5", key: "11nki7" }],
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const PhoneCall = createLucideIcon("phone-call", __iconNode);
const WHY = [{
  icon: Brain,
  label: "Mental Wellbeing Focus",
  bn: "মানসিক সুস্থতা"
}, {
  icon: Stethoscope,
  label: "Neuro Care Support",
  bn: "নিউরো কেয়ার"
}, {
  icon: Sparkles,
  label: "Specialized Therapy",
  bn: "বিশেষ থেরাপি"
}, {
  icon: ShieldCheck,
  label: "Secure Facility",
  bn: "সুরক্ষিত পরিবেশ"
}, {
  icon: Clock,
  label: "24/7 Monitoring",
  bn: "২৪/৭ তত্ত্বাবধান"
}];
const HOME_FEATURE_IMAGES = {
  "Structured Routine": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
  "Safe Environment": "https://images.unsplash.com/photo-1547573854-74d2a71d0826?auto=format&fit=crop&w=800&q=80",
  "Trained Caregivers": "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&q=80&auto=format&fit=crop",
  "Emotional + Medical Support": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80&auto=format&fit=crop"
};
const HOME_FEATURES = [{
  title: "Structured Routine",
  bn: "নিয়মিত রুটিন",
  desc: "Predictable daily rhythm reduces confusion and anxiety."
}, {
  title: "Safe Environment",
  bn: "নিরাপদ পরিবেশ",
  desc: "Wander-proof layout, fall prevention and supervised access."
}, {
  title: "Trained Caregivers",
  bn: "প্রশিক্ষিত কেয়ারগিভার",
  desc: "Dementia-certified staff trained in compassionate response."
}, {
  title: "Emotional + Medical Support",
  bn: "মানসিক ও চিকিৎসা সহায়তা",
  desc: "Behavioral support paired with on-call medical care."
}];
const DAILY = [{
  time: "Morning",
  title: "Gentle Morning Routine",
  bn: "সকালের রুটিন",
  desc: "Personal hygiene, light stretching and a calm start to the day.",
  image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80"
}, {
  time: "9 AM",
  title: "Health Monitoring",
  bn: "স্বাস্থ্য পরীক্ষা",
  desc: "Vitals check, medication and a quick wellness review.",
  image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=1200&q=80"
}, {
  time: "11 AM",
  title: "Therapy Sessions",
  bn: "থেরাপি সেশন",
  desc: "Cognitive exercises, memory games and physiotherapy.",
  image: "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=1200&q=80"
}, {
  time: "Afternoon",
  title: "Social Activities",
  bn: "সামাজিক কার্যক্রম",
  desc: "Music, art and group activities tailored to comfort levels.",
  image: "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?auto=format&fit=crop&w=1200&q=80"
}, {
  time: "Meals",
  title: "Nutritious Meals",
  bn: "পুষ্টিকর খাবার",
  desc: "Dietitian-planned meals served on a consistent schedule.",
  image: "https://images.unsplash.com/photo-1547573854-74d2a71d0826?auto=format&fit=crop&w=1200&q=80"
}, {
  time: "Evening",
  title: "Evening Relaxation",
  bn: "সন্ধ্যার বিশ্রাম",
  desc: "Quiet time, family calls and a peaceful wind-down to sleep.",
  image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1200&q=80"
}];
const JOURNEY = [{
  icon: ClipboardList,
  num: "01",
  title: "Assessment",
  bn: "মূল্যায়ন",
  desc: "Specialist evaluates cognitive stage, behavior and medical history."
}, {
  icon: Sparkles,
  num: "02",
  title: "Care Plan",
  bn: "কেয়ার প্ল্যান",
  desc: "A personalized plan is built around routine, therapy and medication."
}, {
  icon: House,
  num: "03",
  title: "Admission",
  bn: "ভর্তি",
  desc: "Smooth move-in with familiar items to ease the transition."
}, {
  icon: HeartPulse,
  num: "04",
  title: "Daily Care",
  bn: "দৈনন্দিন যত্ন",
  desc: "Trained team delivers structured care, every single day."
}, {
  icon: PhoneCall,
  num: "05",
  title: "Family Updates",
  bn: "পরিবারকে আপডেট",
  desc: "Regular reports and video calls keep family connected."
}];
function MemoryCarePage() {
  const memory = SERVICES.find((s) => s.slug === "memory-care");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-gradient-to-br from-accent/40 via-background to-surface", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSlider, { images: HERO_IMAGES.memoryCare }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 grid lg:grid-cols-12 gap-10 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background border border-border text-xs font-semibold text-primary mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "size-3.5" }),
            " Memory Care — মেমোরি কেয়ার"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-bangla text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight", children: [
            "স্মৃতিভ্রষ্টতার যত্ন, ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "নিরাপদ ও সম্মানের" }),
            " সাথে"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground mt-5 max-w-xl leading-relaxed", children: "Specialized care for dementia and Alzheimer's patients in a structured, safe, and deeply compassionate environment — designed by specialists, delivered with empathy." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 mt-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/request", search: {
              service: "memory-care",
              package: ""
            }, children: [
              "Enquire Now ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "gap-2 text-black !text-black", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: callLink, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-4" }),
              " Talk to Specialist"
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-4 font-bangla", children: "✓ বিনামূল্যে অ্যাসেসমেন্ট · ফোনে কথা বলে কনফার্ম" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-background border border-border shadow-card p-6 lg:p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4 text-black !text-black", children: "Why families choose us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: WHY.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 text-black !text-black", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-9 rounded-lg bg-accent flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(t.icon, { className: "size-4 text-accent-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-black !text-black", children: t.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-xs text-muted-foreground text-black !text-black", children: t.bn })
            ] })
          ] }, t.label)) })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-10 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 h-px bg-primary" }),
          " Understanding Dementia"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl lg:text-4xl font-bold tracking-tight", children: "What is Dementia?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-lg text-muted-foreground mt-4 leading-relaxed", children: "ডিমেনশিয়া হলো এমন একটি অবস্থা যা স্মৃতিশক্তি, চিন্তাভাবনা ও দৈনন্দিন কাজকর্মে প্রভাব ফেলে। এটি শুধু ভুলে যাওয়া নয় — আচরণ, আবেগ ও সিদ্ধান্ত নেওয়ার ক্ষমতাকেও পরিবর্তন করে দেয়।" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-4 leading-relaxed", children: "Dementia is progressive memory loss that affects daily life, behavior, and emotional stability. Families often feel overwhelmed — but with the right structured care, dignity and quality of life can be preserved for years." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-accent/40 border border-border p-6 lg:p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold mb-4", children: "Common signs to watch for" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 text-sm", children: [["Forgetting recent events or names", "সাম্প্রতিক ঘটনা ভুলে যাওয়া"], ["Confusion about time, place, or people", "সময় ও স্থান নিয়ে বিভ্রান্তি"], ["Mood swings, anxiety or withdrawal", "মেজাজ পরিবর্তন ও উদ্বেগ"], ["Difficulty with familiar daily tasks", "পরিচিত কাজ করতে অসুবিধা"], ["Wandering or getting lost easily", "পথ হারিয়ে ফেলা"]].map(([en, bn]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-4 text-primary shrink-0 mt-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: en }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-xs text-muted-foreground", children: bn })
          ] })
        ] }, en)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-surface py-16 lg:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl lg:text-4xl font-bold tracking-tight", children: "What is a Memory Care Home?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-muted-foreground mt-3", children: "একটি বিশেষায়িত পরিবেশ — যেখানে ডিমেনশিয়া রোগীরা নিরাপদ, সম্মানিত ও যত্নশীলভাবে থাকেন" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4", children: HOME_FEATURES.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex flex-col rounded-2xl bg-background border border-border hover:border-primary hover:shadow-card transition-all overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[16/9] overflow-hidden bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: HOME_FEATURE_IMAGES[f.title], alt: f.title, loading: "lazy", className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex flex-col flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold", children: f.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-xs text-primary mt-0.5", children: f.bn }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-3 leading-relaxed", children: f.desc })
        ] })
      ] }, f.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 h-px bg-primary" }),
          " A day in their life"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl lg:text-4xl font-bold tracking-tight", children: "Daily Life Experience" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-muted-foreground mt-3", children: "প্রতিটি দিন গঠিত হয় শান্তি, নিরাপত্তা ও আনন্দ ঘিরে" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: DAILY.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-background border border-border overflow-hidden flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/9] overflow-hidden bg-muted", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: d.image, alt: d.title, loading: "lazy", className: "w-full h-full object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 right-3 px-2.5 py-1 rounded-full bg-background/90 backdrop-blur text-[10px] font-semibold uppercase tracking-wider text-foreground", children: d.time })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex flex-col flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold", children: d.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-xs text-primary mt-0.5", children: d.bn }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-3 leading-relaxed", children: d.desc })
        ] })
      ] }, d.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-surface py-16 lg:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl lg:text-4xl font-bold tracking-tight", children: "Care Packages" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-muted-foreground mt-2", children: "পরিবারের প্রয়োজন অনুযায়ী নির্ধারিত প্ল্যান" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 md:grid-cols-3 max-w-5xl mx-auto", children: memory.packages.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative p-6 lg:p-7 rounded-2xl bg-background border-2 transition-all flex flex-col ${p.popular ? "border-primary shadow-card" : "border-border"}`, children: [
        p.popular && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider", children: "Most Popular" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold", children: p.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-xs text-primary mt-0.5", children: p.bangla }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-3xl font-bold mt-5 tabular-nums", children: [
          "৳",
          formatBDT(p.priceFrom),
          "–",
          formatBDT(p.priceTo)
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
          "/ ",
          p.unit
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-2 text-sm flex-1", children: p.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3.5 text-primary shrink-0 mt-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: f })
        ] }, f)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "mt-6 w-full", variant: p.popular ? "default" : "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/request", search: {
          service: "memory-care",
          package: p.id
        }, children: "Request This Plan" }) })
      ] }, p.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-muted-foreground mt-6", children: "All prices are indicative — final pricing is confirmed after a call with your care advisor." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl lg:text-4xl font-bold tracking-tight", children: "Patient Journey" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-muted-foreground mt-2", children: "অ্যাসেসমেন্ট থেকে শুরু করে দৈনন্দিন যত্ন — আমরা আপনার পাশে" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-5", children: JOURNEY.map((j, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-6 rounded-2xl bg-background border border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-11 rounded-xl bg-accent flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(j.icon, { className: "size-5 text-accent-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl font-bold text-primary/20", children: j.num })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base font-bold", children: j.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-xs text-primary mt-0.5", children: j.bn }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2 leading-relaxed", children: j.desc }),
        i < JOURNEY.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "hidden lg:block absolute -right-3 top-10 size-5 text-border" })
      ] }, j.num)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-foreground text-background py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl lg:text-4xl font-bold mb-3 leading-tight", children: [
        "Get a ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Personalized Care Plan" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-background/80 mb-2", children: "আপনার প্রিয়জনের জন্য সঠিক পরিকল্পনা তৈরি করে দেব" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-background/70 mb-8", children: "Speak with a memory care specialist. Free assessment, transparent pricing, no online payment required." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-background text-foreground hover:bg-background/90 gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: callLink, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-4" }),
          " Call ",
          SITE.phoneDisplay
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "bg-transparent border-background/30 text-background hover:bg-background/10 gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: whatsappLink("Hi, I'd like a memory care assessment for my family member."), target: "_blank", rel: "noopener noreferrer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-4" }),
          " WhatsApp Specialist"
        ] }) })
      ] })
    ] }) })
  ] });
}
export {
  MemoryCarePage as component
};
