import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/care-at-home")({
  head: () => ({
    meta: [
      { title: "Care at Home — ঘরেই পেশাদার চিকিৎসা সেবা — Priyojon Care" },
      {
        name: "description",
        content:
          "Hospital-level care at home in Dhaka — nursing, physiotherapy, ICU setup, dementia care, lab tests, X-ray and ECG at home. Trusted by 10,000+ families.",
      },
      { property: "og:title", content: "Care at Home — Priyojon Care" },
      {
        property: "og:description",
        content:
          "Hospital-level care brought to your home — safe, comfortable, expertly supervised.",
      },
    ],
  }),
  component: CareAtHomeLayout,
});

function CareAtHomeLayout() {
  return <Outlet />;
}
