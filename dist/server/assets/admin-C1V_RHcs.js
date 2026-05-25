import { U as reactExports, K as jsxRuntimeExports } from "./worker-entry-Be3-PIiG.js";
import { V as createLucideIcon, ab as useAuth, ah as useNavigate, a0 as findPackage, a1 as formatBDT, a8 as supabase } from "./router-C3WBn37j.js";
import { C as Card, a as CardContent, b as CardHeader, c as CardTitle } from "./card-tX6W7B6C.js";
import { B as Badge } from "./badge-C2fLz4j0.js";
import { S as Select, c as SelectTrigger, d as SelectValue, a as SelectContent, b as SelectItem } from "./select-Buv9BuKL.js";
import { T as Textarea } from "./textarea-etiRFo2K.js";
import { t as toast } from "./index-DdrJ5Ons.js";
import { I as Input } from "./input-BilJhqqL.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./Combination-D5qDQFKK.js";
import "./index-BbL5rAWR.js";
import "./index-RyQy-ocC.js";
import "./check-BYKtKg3z.js";
const __iconNode = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "M12 8v4", key: "1got3b" }],
  ["path", { d: "M12 16h.01", key: "1drbdi" }]
];
const ShieldAlert = createLucideIcon("shield-alert", __iconNode);
const STATUSES = ["pending", "confirmed", "ongoing", "completed", "cancelled"];
function AdminPanel() {
  const {
    user,
    isAdmin,
    loading
  } = useAuth();
  const navigate = useNavigate();
  const [requests, setRequests] = reactExports.useState([]);
  const [caregivers, setCaregivers] = reactExports.useState([]);
  const [busy, setBusy] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (loading) return;
    if (!user) navigate({
      to: "/login",
      search: {
        redirect: "/admin"
      }
    });
  }, [user, loading, navigate]);
  const load = async () => {
    const [{
      data: r
    }, {
      data: c
    }] = await Promise.all([supabase.from("care_requests").select("*").order("created_at", {
      ascending: false
    }), supabase.from("caregivers").select("id,full_name,specialization").order("full_name")]);
    setRequests(r ?? []);
    setCaregivers(c ?? []);
  };
  reactExports.useEffect(() => {
    if (isAdmin) load();
  }, [isAdmin]);
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-12 text-center", children: "Loading…" });
  if (!isAdmin) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md mx-auto p-12 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "size-12 text-destructive mx-auto mb-4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold", children: "Admin access required" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2 text-sm", children: "Your account does not have admin privileges." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-4", children: [
      "To grant admin access, run this in the Cloud SQL editor:",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("code", { className: "block bg-muted p-2 rounded mt-1 text-left", children: [
        "INSERT INTO user_roles (user_id, role) VALUES ('",
        user?.id ?? "YOUR_USER_ID",
        "', 'admin');"
      ] })
    ] })
  ] });
  const updateRequest = async (id, patch) => {
    setBusy(true);
    const {
      error
    } = await supabase.from("care_requests").update(patch).eq("id", id);
    setBusy(false);
    if (error) toast.error(error.message);
    else {
      toast.success("Updated");
      load();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold mb-2", children: "Admin Panel" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8", children: "Review care requests and assign caregivers." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-3 gap-3 mb-8", children: STATUSES.slice(0, 3).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase text-muted-foreground tracking-wider", children: s }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold tabular-nums", children: requests.filter((r) => r.status === s).length })
    ] }) }, s)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: requests.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "No care requests yet." }) : requests.map((r) => {
      const pkg = r.package_id ? findPackage(r.package_id) : null;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-between items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base", children: [
              r.patient_name,
              r.patient_age ? `, ${r.patient_age}` : "",
              " — ",
              r.service_type
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
              "ID ",
              r.id.slice(0, 8).toUpperCase(),
              " · ",
              new Date(r.created_at).toLocaleString(),
              " · ",
              r.contact_phone
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs mt-1", children: [
              "Plan: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: pkg ? pkg.name : r.package_id === "custom" ? "Custom Plan" : "—" }),
              pkg && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                " · ৳",
                formatBDT(pkg.priceFrom),
                "–৳",
                formatBDT(pkg.priceTo),
                "/",
                pkg.unit
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { children: r.status })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Condition:" }),
            " ",
            r.patient_condition
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Location:" }),
            " ",
            r.location
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-3 gap-3 pt-3 border-t border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Confirmed price (BDT)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", defaultValue: r.custom_price ?? "", placeholder: "e.g. 55000", onBlur: (e) => {
                const v = e.target.value === "" ? null : parseInt(e.target.value, 10);
                if (v !== (r.custom_price ?? null)) updateRequest(r.id, {
                  custom_price: v
                });
              } })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: r.status, onValueChange: (v) => updateRequest(r.id, {
                status: v
              }), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: STATUSES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Assigned caregiver" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: r.assigned_caregiver_id ?? "", onValueChange: (v) => updateRequest(r.id, {
                assigned_caregiver_id: v || null
              }), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "None" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: caregivers.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: c.id, children: [
                  c.full_name,
                  " — ",
                  c.specialization
                ] }, c.id)) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Admin note" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { defaultValue: r.admin_notes ?? "", onBlur: (e) => {
              if (e.target.value !== (r.admin_notes ?? "")) updateRequest(r.id, {
                admin_notes: e.target.value
              });
            }, placeholder: "Note visible to the family" })
          ] })
        ] })
      ] }, r.id);
    }) }),
    busy && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-4", children: "Saving…" })
  ] });
}
export {
  AdminPanel as component
};
