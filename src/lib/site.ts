export const SITE = {
  name: "Priyojon Care",
  tagline: "Structured senior care with transparent pricing",
  phone: "+880 1994 888999",
  phoneDisplay: "+880 1994 888999",
  whatsapp: "+8801994888999",
  hotline: "+8801994888999",
  email: "info@priyojon.care",
  googleMap: "https://share.google/5mYtUBj9UhC6W92Gq",
  address: "93, Kazi Nazrul Islam Avenue Dhaka 1215",
};

export const whatsappLink = (msg = "Hello, I would like to learn more about Priyojon Care.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

export const callLink = `tel:${SITE.phone}`;

export type Package = {
  id: string;
  name: string;
  bangla: string;
  priceFrom: number;
  priceTo: number;
  unit: "month" | "day" | "hour" | "visit";
  popular?: boolean;
  features: string[];
};

export type Service = {
  slug: string;
  title: string;
  bangla: string;
  tagline: string;
  summary: string;
  icon: "residence" | "carehome" | "memory" | "homecare";
  subServices: string[];
  cta: string;
  packages: Package[];
};

export const SERVICES: Service[] = [
  {
    slug: "residences",
    title: "Residences for Seniors",
    bangla: "সিনিয়র রেসিডেন্স",
    tagline: "A new chapter — independent, social, beautifully cared for.",
    summary:
      "Purpose-built residences with hospitality, healthcare, and an active community for seniors who want freedom with safety.",
    icon: "residence",
    subServices: ["Independent Living", "Assisted Living", "Luxury Living", "Short Stay"],
    cta: "Schedule a Visit",
    packages: [
      {
        id: "res-basic",
        name: "Basic Residence",
        bangla: "বেসিক রেসিডেন্স",
        priceFrom: 25000,
        priceTo: 40000,
        unit: "month",
        features: ["Shared room", "3 meals daily", "Basic assistance", "Community lounge access"],
      },
      {
        id: "res-standard",
        name: "Standard Assisted Living",
        bangla: "অ্যাসিস্টেড লিভিং",
        priceFrom: 40000,
        priceTo: 70000,
        unit: "month",
        popular: true,
        features: [
          "Private or shared room",
          "Daily personal assistance",
          "Basic medical monitoring",
          "Recreation activities",
        ],
      },
      {
        id: "res-premium",
        name: "Premium Senior Living",
        bangla: "প্রিমিয়াম লিভিং",
        priceFrom: 70000,
        priceTo: 120000,
        unit: "month",
        features: [
          "Private luxury suite",
          "Personal caregiver",
          "Priority medical access",
          "Premium dining & recreation",
        ],
      },
      {
        id: "res-trial",
        name: "Trial Stay",
        bangla: "ট্রায়াল স্টে",
        priceFrom: 2000,
        priceTo: 5000,
        unit: "day",
        features: ["Short-term stay", "Full residence access", "Try before committing", "Family visits welcome"],
      },
    ],
  },
  {
    slug: "care-homes",
    title: "Care Homes",
    bangla: "কেয়ার হোম",
    tagline: "Round-the-clock nursing in a warm, supervised setting.",
    summary:
      "Residential nursing for seniors recovering from surgery, hospital discharge, or needing continuous medical attention.",
    icon: "carehome",
    subServices: ["Nursing Care Home", "Rehabilitation", "Post-Hospital Care"],
    cta: "Request Care Home Placement",
    packages: [
      {
        id: "ch-basic",
        name: "Basic Nursing Care",
        bangla: "বেসিক নার্সিং",
        priceFrom: 30000,
        priceTo: 50000,
        unit: "month",
        features: ["Shared facility", "Day-shift nurse support", "Meals & hygiene", "Weekly family report"],
      },
      {
        id: "ch-advanced",
        name: "Advanced Care Plan",
        bangla: "অ্যাডভান্সড কেয়ার",
        priceFrom: 50000,
        priceTo: 90000,
        unit: "month",
        popular: true,
        features: [
          "24/7 nurse coverage",
          "Medication management",
          "Daily report updates",
          "Doctor visit on call",
        ],
      },
      {
        id: "ch-critical",
        name: "Critical Recovery Plan",
        bangla: "ক্রিটিক্যাল রিকভারি",
        priceFrom: 90000,
        priceTo: 150000,
        unit: "month",
        features: [
          "Post-ICU recovery setup",
          "Scheduled doctor visits",
          "Physiotherapy included",
          "Specialist consultations",
        ],
      },
    ],
  },
  {
    slug: "memory-care",
    title: "Memory Care Homes",
    bangla: "মেমোরি কেয়ার",
    tagline: "Specialized environment for dementia & Alzheimer's.",
    summary:
      "A safe, structured home with trained caregivers specialized in cognitive decline, behavioral support, and therapy.",
    icon: "memory",
    subServices: ["Dementia Care", "Alzheimer's Care"],
    cta: "Get Specialized Care Plan",
    packages: [
      {
        id: "mem-basic",
        name: "Basic Memory Support",
        bangla: "বেসিক মেমোরি সাপোর্ট",
        priceFrom: 40000,
        priceTo: 60000,
        unit: "month",
        features: ["Safe, secure environment", "Routine-based care", "Trained attendants", "Family communication"],
      },
      {
        id: "mem-specialized",
        name: "Specialized Memory Care",
        bangla: "স্পেশালাইজড কেয়ার",
        priceFrom: 60000,
        priceTo: 100000,
        unit: "month",
        popular: true,
        features: [
          "Dementia-trained caregiver",
          "Behavioral monitoring",
          "Cognitive activities",
          "Monthly clinical review",
        ],
      },
      {
        id: "mem-intensive",
        name: "Intensive Care Plan",
        bangla: "ইনটেনসিভ কেয়ার",
        priceFrom: 100000,
        priceTo: 160000,
        unit: "month",
        features: [
          "High-supervision ratio",
          "Therapy sessions included",
          "Medical specialist on call",
          "Personalized care plan",
        ],
      },
    ],
  },
  {
    slug: "care-at-home",
    title: "Care at Home",
    bangla: "হোম কেয়ার",
    tagline: "Hospital-grade care in the comfort of your own home.",
    summary:
      "From an hour of help to full ICU setup, our nurses, caregivers and doctors come to you — across Dhaka.",
    icon: "homecare",
    subServices: [
      "Nursing Care",
      "Caregiver / Attendant",
      "Physiotherapy",
      "ICU Setup",
      "Doctor Visit",
      "Diagnostic",
    ],
    cta: "Request Home Care",
    packages: [
      {
        id: "hc-hourly",
        name: "Hourly Care",
        bangla: "আওয়ারলি কেয়ার",
        priceFrom: 150,
        priceTo: 300,
        unit: "hour",
        features: ["Trained attendant", "Minimum 4 hours", "Bathing & feeding help", "Same-day available"],
      },
      {
        id: "hc-daily",
        name: "Daily Care (8–12 hrs)",
        bangla: "ডেইলি কেয়ার",
        priceFrom: 800,
        priceTo: 2000,
        unit: "day",
        popular: true,
        features: ["Day-shift caregiver", "Vitals monitoring", "Meals & medication", "Family update calls"],
      },
      {
        id: "hc-fullday",
        name: "Full-Day Care (24 hrs)",
        bangla: "২৪ ঘণ্টা কেয়ার",
        priceFrom: 1500,
        priceTo: 3500,
        unit: "day",
        features: ["Round-the-clock attendant", "Two-shift rotation", "Emergency on-call nurse", "Daily report"],
      },
      {
        id: "hc-monthly",
        name: "Monthly Caregiver",
        bangla: "মাসিক কেয়ারগিভার",
        priceFrom: 25000,
        priceTo: 60000,
        unit: "month",
        features: ["Dedicated caregiver", "Replacement guarantee", "Care plan supervision", "Discounted rate"],
      },
      {
        id: "hc-icu",
        name: "ICU at Home Setup",
        bangla: "হোম আইসিইউ",
        priceFrom: 5000,
        priceTo: 15000,
        unit: "day",
        features: ["Hospital-grade equipment", "ICU-trained nurse", "Doctor supervision", "Oxygen & ventilator"],
      },
      {
        id: "hc-doctor",
        name: "Doctor Home Visit",
        bangla: "ডাক্তার ভিজিট",
        priceFrom: 500,
        priceTo: 1500,
        unit: "visit",
        features: ["Registered physician", "Within 24 hours", "Prescription provided", "Follow-up included"],
      },
    ],
  },
];

export const ALL_PACKAGES: (Package & { serviceSlug: string; serviceTitle: string })[] =
  SERVICES.flatMap((s) =>
    s.packages.map((p) => ({ ...p, serviceSlug: s.slug, serviceTitle: s.title })),
  );

export const findPackage = (id: string) => ALL_PACKAGES.find((p) => p.id === id);

export const formatBDT = (n: number) =>
  new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(n);

export const unitLabel: Record<Package["unit"], string> = {
  month: "/ month",
  day: "/ day",
  hour: "/ hour",
  visit: "/ visit",
};

export const unitLabelBn: Record<Package["unit"], string> = {
  month: "মাসে",
  day: "দিনে",
  hour: "ঘণ্টায়",
  visit: "ভিজিটে",
};
