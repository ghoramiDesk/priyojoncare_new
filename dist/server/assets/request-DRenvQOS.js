import { U as reactExports, K as jsxRuntimeExports } from "./worker-entry-Be3-PIiG.js";
import { V as createLucideIcon, m as Route, ah as useNavigate, ab as useAuth, S as SERVICES, a0 as findPackage, f as Button, z as callLink, P as Phone, a1 as formatBDT, a9 as unitLabel, aa as unitLabelBn, s as SITE, j as MessageCircle, ai as whatsappLink, L as Link, a8 as supabase, a2 as objectType, a7 as stringType, I as coerce } from "./router-C3WBn37j.js";
import { I as Input } from "./input-BilJhqqL.js";
import { L as Label } from "./label-BpUWl_YU.js";
import { T as Textarea } from "./textarea-etiRFo2K.js";
import { S as Select, c as SelectTrigger, d as SelectValue, a as SelectContent, b as SelectItem } from "./select-Buv9BuKL.js";
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from "./card-tX6W7B6C.js";
import { t as toast } from "./index-DdrJ5Ons.js";
import { S as Sparkles } from "./sparkles-CzBZlB2N.js";
import { L as LoaderCircle } from "./loader-circle-Dr-TzxJk.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./Combination-D5qDQFKK.js";
import "./index-BbL5rAWR.js";
import "./index-RyQy-ocC.js";
import "./check-BYKtKg3z.js";
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode);
const formSchema = objectType({
  service_type: stringType().min(1, "Select a service"),
  package_id: stringType().min(1, "Select a package"),
  patient_name: stringType().trim().min(1).max(120),
  patient_age: coerce.number().int().min(0).max(130).optional(),
  patient_condition: stringType().trim().min(5, "Describe the condition").max(2e3),
  preferred_date: stringType().optional(),
  preferred_time: stringType().max(50).optional(),
  location: stringType().trim().min(2).max(300),
  contact_phone: stringType().trim().min(6).max(30),
  notes: stringType().max(2e3).optional()
});
function RequestPage() {
  const search = Route.useSearch();
  const navigate = useNavigate();
  const {
    user
  } = useAuth();
  const [loading, setLoading] = reactExports.useState(false);
  const [requestId, setRequestId] = reactExports.useState(null);
  const [serviceSlug, setServiceSlug] = reactExports.useState(search.service ?? "");
  const [packageId, setPackageId] = reactExports.useState(search.package ?? "");
  const selectedService = SERVICES.find((s) => s.slug === serviceSlug);
  const selectedPkg = packageId && packageId !== "custom" ? findPackage(packageId) : null;
  const isCustom = packageId === "custom";
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("Please sign in to submit a request");
      navigate({
        to: "/login",
        search: {
          redirect: "/request"
        }
      });
      return;
    }
    const fd = new FormData(e.currentTarget);
    const parsed = formSchema.safeParse(Object.fromEntries(fd.entries()));
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Check the form");
      return;
    }
    setLoading(true);
    const {
      data,
      error
    } = await supabase.from("care_requests").insert({
      user_id: user.id,
      service_type: parsed.data.service_type,
      package_id: parsed.data.package_id,
      patient_name: parsed.data.patient_name,
      patient_age: parsed.data.patient_age ?? null,
      patient_condition: parsed.data.patient_condition,
      preferred_date: parsed.data.preferred_date || null,
      preferred_time: parsed.data.preferred_time ?? null,
      location: parsed.data.location,
      contact_phone: parsed.data.contact_phone,
      notes: parsed.data.notes ?? null
    }).select("id").single();
    setLoading(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    setRequestId(data.id);
    toast.success("Request submitted! A care advisor will call you shortly.");
  };
  if (requestId) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl mx-auto px-6 py-24 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-16 text-success mx-auto mb-6" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold", children: "Request received" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-muted-foreground mt-3", children: "আপনার অনুরোধ গ্রহণ করা হয়েছে।" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mt-3", children: [
        "Your request ID:",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "font-mono bg-muted px-2 py-1 rounded", children: requestId.slice(0, 8).toUpperCase() })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-3", children: "A care advisor will call you within a few hours to confirm your plan and final pricing." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 justify-center mt-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => navigate({
          to: "/dashboard"
        }), children: "Go to Dashboard" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: callLink, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-4" }),
          " Call now"
        ] }) })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface min-h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 py-12 lg:py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl lg:text-4xl font-bold", children: "Request a Care Package" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-muted-foreground mt-2", children: "ফর্ম পূরণ করুন — আমাদের কেয়ার অ্যাডভাইজার শীঘ্রই আপনাকে কল করবেন।" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2", children: "No online payment. Final pricing is confirmed by phone after we understand your needs." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "lg:col-span-1 lg:order-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-24 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-primary/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-4 text-primary" }),
            " Selected Plan"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "text-sm space-y-3", children: [
            selectedService ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Service" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: selectedService.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-xs text-primary", children: selectedService.bangla })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Choose a service below." }),
            selectedPkg && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Package" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: selectedPkg.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base font-bold tabular-nums mt-1", children: [
                "৳",
                formatBDT(selectedPkg.priceFrom),
                " – ৳",
                formatBDT(selectedPkg.priceTo)
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bangla", children: unitLabelBn[selectedPkg.unit] }),
                " ",
                unitLabel[selectedPkg.unit]
              ] })
            ] }),
            isCustom && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-lg bg-accent text-accent-foreground text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold mb-1", children: "Custom Plan" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla", children: "পরিবার অনুযায়ী প্ল্যান সাজানো হবে।" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Prefer to talk?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", size: "sm", className: "w-full justify-start gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: callLink, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-4" }),
            " ",
            SITE.phoneDisplay
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", size: "sm", className: "w-full justify-start gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: whatsappLink("Hi, I'd like to talk to a Care Advisor."), target: "_blank", rel: "noopener noreferrer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-4" }),
            " WhatsApp Advisor"
          ] }) })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2 lg:order-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Care Request Details" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "service_type", children: "Service" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { name: "service_type", value: serviceSlug, onValueChange: (v) => {
                setServiceSlug(v);
                setPackageId("");
              }, required: true, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "service_type", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Choose a service" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: SERVICES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s.slug, children: s.title }, s.slug)) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "package_id", children: "Package" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { name: "package_id", value: packageId, onValueChange: setPackageId, required: true, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "package_id", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: selectedService ? "Choose a package" : "Select service first" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  selectedService?.packages.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: p.id, children: [
                    p.name,
                    " — ৳",
                    formatBDT(p.priceFrom),
                    "+"
                  ] }, p.id)),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "custom", children: "✨ Custom Plan (advisor designs it)" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "patient_name", children: "Patient name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "patient_name", name: "patient_name", required: true, maxLength: 120 })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "patient_age", children: "Age" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "patient_age", name: "patient_age", type: "number", min: 0, max: 130 })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "patient_condition", children: "Patient condition" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { id: "patient_condition", name: "patient_condition", required: true, maxLength: 2e3, placeholder: "E.g. Recently discharged after stroke, needs daily nursing and physiotherapy." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "preferred_date", children: "Preferred start date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "preferred_date", name: "preferred_date", type: "date" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "preferred_time", children: "Preferred time" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "preferred_time", name: "preferred_time", placeholder: "e.g. Morning shift", maxLength: 50 })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "location", children: "Location / address" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "location", name: "location", required: true, maxLength: 300, placeholder: "House, Road, Area, Dhaka" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "contact_phone", children: "Contact phone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "contact_phone", name: "contact_phone", required: true, maxLength: 30, placeholder: "+8801XXXXXXXXX" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "notes", children: "Anything else? (optional)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { id: "notes", name: "notes", maxLength: 2e3, placeholder: "Budget concerns, special preferences, family context…" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", size: "lg", className: "w-full shadow-cta", disabled: loading, children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "size-4 animate-spin" }) : "Submit Request" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center", children: "By submitting you agree to be contacted by our care team. No payment is collected online." }),
          !user && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-center text-muted-foreground", children: [
            "You'll be asked to",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "text-primary font-medium", children: "sign in" }),
            " ",
            "to track your request."
          ] })
        ] }) })
      ] }) })
    ] })
  ] }) });
}
export {
  RequestPage as component
};
