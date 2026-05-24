// Dynamic data for individual Care-at-Home sub-services.
// Each entry powers /care-at-home/$slug.

export type HCPackage = {
  id: string;
  name: string;
  bangla: string;
  priceFrom: number;
  priceTo: number;
  unit: "month" | "day" | "hour" | "visit";
  popular?: boolean;
  features: string[];
};

export type HCTestimonial = {
  name: string;
  relation: string; // e.g. Daughter of patient
  experience: string;
  outcome: string;
  videoUrl?: string; // YouTube embed or mp4
  thumbnail?: string; // poster image
  rating?: number; // 1–5
};

export type HCFaq = { q: string; a: string };

export type HCAdvantage = { title: string; bn: string; desc: string };

export type HomeCareService = {
  slug: string;
  name: string;
  bangla: string;
  subtitle: string;
  tagline: string; // short Bangla+English line
  description: string; // long rich description
  emotionalNote: string; // bangla emotional paragraph
  heroImage?: string;
  trust: {
    seniorsServed: number; // e.g. 10000
    trainingHours?: number; // e.g. 120
  };
  features: string[]; // bullet list of what's included
  trainingInfo: string;
  advantages: HCAdvantage[];
  packages: HCPackage[];
  testimonials: HCTestimonial[];
  faqs: HCFaq[];
};

const COMMON_FAQS: HCFaq[] = [
  {
    q: "How trained are your caregivers?",
    a: "Every caregiver completes 120+ hours of structured training covering elderly care, hygiene, vitals, emergency response and emotional support. They are background-verified before deployment.",
  },
  {
    q: "Can the service be customized?",
    a: "Yes. Every plan is tailored after a free consultation with our care advisor — duration, shift hours, medical needs, and budget are all flexible.",
  },
  {
    q: "How often does a supervisor visit?",
    a: "A clinical supervisor visits weekly for monthly plans and is available on-call 24/7 for emergencies. You also receive daily/weekly reports.",
  },
  {
    q: "What if I need to change the caregiver?",
    a: "Replacement is guaranteed. Just call your advisor and we will arrange a new trained caregiver within 24 hours, free of cost.",
  },
];

export const HOME_CARE_SERVICES: HomeCareService[] = [
  {
    slug: "dementia-caregiver",
    name: "Dementia Caregiver At Home",
    bangla: "ডিমেনশিয়া কেয়ারগিভার",
    subtitle: "Specialized memory-care caregivers for your loved one — at home.",
    tagline: "Expert care, ঘরের মতো যত্ন",
    description:
      "Our dementia-trained caregivers help families manage memory loss, confusion, and behavioral changes with patience and structure. They follow a personalized routine designed by our clinical team — covering safety, nutrition, gentle cognitive activities, and emotional support — so your loved one feels secure in the place they know best.",
    emotionalNote:
      "আমরা বুঝি যে এই ধরনের কেয়ার শুধু চিকিৎসা নয়, ধৈর্য, সহানুভূতি এবং ভালোবাসার প্রয়োজন। আমাদের প্রশিক্ষিত কেয়ারগিভাররা আপনার প্রিয়জনকে ঘরের মতো নিরাপদ পরিবেশে যত্ন করেন।",
    trust: { seniorsServed: 10000, trainingHours: 120 },
    features: [
      "Dementia-specific behavioral training",
      "Safe daily routine & memory cues",
      "Medication reminders & monitoring",
      "Family updates and incident reports",
      "Psychologist-supervised care plan",
    ],
    trainingInfo:
      "120+ ঘণ্টার বিশেষ ডিমেনশিয়া ট্রেনিং, সাইকোলজিস্ট সুপারভিশন সহ — সবাই ব্যাকগ্রাউন্ড ভেরিফাইড।",
    advantages: [
      {
        title: "Specialized Training",
        bn: "১২০+ ঘণ্টা ট্রেনিং",
        desc: "Caregivers trained specifically in dementia and Alzheimer's care.",
      },
      {
        title: "Psychologist Support",
        bn: "সাইকোলজিস্ট সাপোর্ট",
        desc: "Clinical psychologist reviews each case and supervises caregivers.",
      },
      {
        title: "Custom Care Plan",
        bn: "কাস্টম প্ল্যান",
        desc: "Daily routine designed around your loved one's stage and personality.",
      },
      {
        title: "Flexible Coverage",
        bn: "ফ্লেক্সিবল কভারেজ",
        desc: "Day, night, or 24-hour shifts — change anytime.",
      },
      {
        title: "Regular Monitoring",
        bn: "নিয়মিত মনিটরিং",
        desc: "Weekly supervisor visits and detailed family reports.",
      },
    ],
    packages: [
      {
        id: "dem-basic",
        name: "Basic Support",
        bangla: "বেসিক সাপোর্ট",
        priceFrom: 25000,
        priceTo: 40000,
        unit: "month",
        features: [
          "Day-shift caregiver",
          "Routine & meals",
          "Medication reminders",
          "Weekly report",
        ],
      },
      {
        id: "dem-advanced",
        name: "Advanced Care",
        bangla: "অ্যাডভান্সড কেয়ার",
        priceFrom: 40000,
        priceTo: 70000,
        unit: "month",
        popular: true,
        features: [
          "12-hour trained caregiver",
          "Behavioral support",
          "Psychologist plan review",
          "Bi-weekly supervisor visit",
        ],
      },
      {
        id: "dem-intensive",
        name: "Intensive Care",
        bangla: "ইনটেনসিভ কেয়ার",
        priceFrom: 70000,
        priceTo: 100000,
        unit: "month",
        features: [
          "24/7 dual-caregiver coverage",
          "Doctor on call",
          "Full clinical plan",
          "Daily detailed report",
        ],
      },
    ],
    testimonials: [
      {
        name: "Tasnim Rahman",
        relation: "Daughter of patient",
        experience:
          "Priyojon's caregiver helped my mother through her toughest dementia months at home.",
        outcome: "She is calmer, eats on time, and sleeps better — and we finally feel at peace.",
      },
      {
        name: "Imran Hossain",
        relation: "Son of patient",
        experience: "The team built a routine my father could follow without confusion.",
        outcome: "His agitation dropped within 3 weeks of structured care.",
      },
    ],
    faqs: [
      {
        q: "What is dementia care at home?",
        a: "It is specialized in-home support for seniors living with dementia or Alzheimer's — combining trained caregivers, structured routines and clinical supervision so they can stay safely at home.",
      },
      ...COMMON_FAQS,
    ],
  },
  {
    slug: "nursing-care",
    name: "Nursing Care At Home",
    bangla: "নার্সিং কেয়ার",
    subtitle: "Registered nurses for clinical care, in the comfort of your home.",
    tagline: "Hospital-quality nursing, ঘরে বসেই",
    description:
      "Our registered nurses provide post-operative recovery, wound dressing, IV therapy, catheter care, injections and chronic disease management at home. Every shift is supervised by a senior clinical lead and supported by 24/7 emergency backup — so families get hospital-grade safety without the hospital stay.",
    emotionalNote:
      "হাসপাতালের ব্যস্ততা ছাড়াই, আমরা আপনার ঘরেই নিয়ে আসি দক্ষ নার্সিং সেবা — যাতে রোগী পরিবারের কাছে থাকতে পারেন।",
    trust: { seniorsServed: 10000, trainingHours: 200 },
    features: [
      "Registered, BNMC-licensed nurses",
      "Wound care, IV, injections, catheter",
      "Vitals tracking & medication management",
      "Doctor coordination & reporting",
      "24/7 emergency clinical backup",
    ],
    trainingInfo: "নার্সরা সরকার-নিবন্ধিত (BNMC) এবং ২০০+ ঘণ্টা হ্যান্ডস-অন ট্রেনিং প্রাপ্ত।",
    advantages: [
      {
        title: "Licensed Nurses",
        bn: "লাইসেন্সড নার্স",
        desc: "Only BNMC-registered nurses with hospital experience.",
      },
      {
        title: "Clinical Protocols",
        bn: "ক্লিনিকাল প্রোটোকল",
        desc: "Every procedure follows standardized hospital protocols.",
      },
      {
        title: "Doctor Coordination",
        bn: "ডাক্তার সমন্বয়",
        desc: "We sync with your treating physician and update charts.",
      },
      {
        title: "Flexible Coverage",
        bn: "ফ্লেক্সিবল শিফট",
        desc: "8, 12 or 24-hour shifts — change as recovery progresses.",
      },
      {
        title: "Continuity of Care",
        bn: "ধারাবাহিক যত্ন",
        desc: "Same nurse continues across the recovery journey.",
      },
    ],
    packages: [
      {
        id: "nur-shift",
        name: "Single Shift Nursing",
        bangla: "শিফট নার্সিং",
        priceFrom: 1200,
        priceTo: 2500,
        unit: "day",
        features: ["8-hour shift", "Vitals & medication", "Wound dressing", "Daily report"],
      },
      {
        id: "nur-24",
        name: "24-Hour Nursing",
        bangla: "২৪ ঘণ্টা নার্সিং",
        priceFrom: 2500,
        priceTo: 4500,
        unit: "day",
        popular: true,
        features: [
          "Two-shift rotation",
          "All clinical procedures",
          "Doctor coordination",
          "Detailed reports",
        ],
      },
      {
        id: "nur-monthly",
        name: "Monthly Nursing Plan",
        bangla: "মাসিক প্ল্যান",
        priceFrom: 45000,
        priceTo: 90000,
        unit: "month",
        features: [
          "Dedicated nurse",
          "Supervisor visits",
          "Discounted rate",
          "Replacement guarantee",
        ],
      },
    ],
    testimonials: [
      {
        name: "Farzana Akter",
        relation: "Wife of patient",
        experience: "Post-surgery dressing and medication were perfectly managed at home.",
        outcome: "My husband recovered faster than the doctor expected.",
      },
      {
        name: "Mahmud Khan",
        relation: "Son of patient",
        experience: "The nurse was professional, kind, and always on time.",
        outcome: "We avoided a re-admission to hospital entirely.",
      },
    ],
    faqs: [
      {
        q: "What kind of nursing care can be done at home?",
        a: "Wound care, IV fluids, injections, catheter care, tracheostomy care, post-surgical recovery, vitals monitoring and chronic disease management — all under doctor coordination.",
      },
      ...COMMON_FAQS,
    ],
  },
  {
    slug: "physiotherapy",
    name: "Physiotherapy At Home",
    bangla: "ফিজিওথেরাপি",
    subtitle: "Personalized physiotherapy sessions delivered to your doorstep.",
    tagline: "Mobility & recovery, ঘরে বসেই",
    description:
      "Our certified physiotherapists design personalized recovery plans for stroke, post-surgery, joint pain, paralysis, and elderly mobility. Sessions happen on your schedule — with progress tracked weekly and exercises adapted as your loved one improves.",
    emotionalNote:
      "প্রিয়জনকে আবার চলাফেরা করতে দেখার আনন্দ অমূল্য — আমরা সেই পথটা সহজ করে দিই, ঘরে বসেই।",
    trust: { seniorsServed: 8000, trainingHours: 150 },
    features: [
      "Certified BPT/MPT physiotherapists",
      "Personalized exercise plan",
      "Stroke, ortho & geriatric specialists",
      "Progress tracking & home equipment guidance",
      "Doctor-coordinated recovery",
    ],
    trainingInfo: "সকল থেরাপিস্ট BPT/MPT সার্টিফাইড এবং সিনিয়র কেয়ারে অভিজ্ঞ।",
    advantages: [
      {
        title: "Certified Therapists",
        bn: "সার্টিফাইড থেরাপিস্ট",
        desc: "BPT/MPT qualified and experienced in elderly recovery.",
      },
      {
        title: "Personalized Plan",
        bn: "পার্সোনাল প্ল্যান",
        desc: "Designed around your condition and progress goals.",
      },
      {
        title: "Progress Tracking",
        bn: "প্রগ্রেস ট্র্যাকিং",
        desc: "Weekly assessment and plan adjustment.",
      },
      {
        title: "Specialized Therapy",
        bn: "বিশেষ থেরাপি",
        desc: "Stroke, post-surgery, ortho, neuro and chest physio.",
      },
      {
        title: "Equipment Support",
        bn: "ইকুইপমেন্ট সাপোর্ট",
        desc: "Guidance on home setup and assistive devices.",
      },
    ],
    packages: [
      {
        id: "phy-single",
        name: "Single Session",
        bangla: "সিঙ্গেল সেশন",
        priceFrom: 800,
        priceTo: 1500,
        unit: "visit",
        features: [
          "45–60 min session",
          "Assessment included",
          "Home exercises",
          "Same-day available",
        ],
      },
      {
        id: "phy-pack",
        name: "10-Session Pack",
        bangla: "১০ সেশন প্যাক",
        priceFrom: 7000,
        priceTo: 12000,
        unit: "visit",
        popular: true,
        features: ["Discounted rate", "Same therapist", "Progress report", "Plan revision"],
      },
      {
        id: "phy-monthly",
        name: "Monthly Recovery Plan",
        bangla: "মাসিক রিকভারি",
        priceFrom: 18000,
        priceTo: 30000,
        unit: "month",
        features: [
          "Daily sessions",
          "Doctor coordination",
          "Family training",
          "Equipment guidance",
        ],
      },
    ],
    testimonials: [
      {
        name: "Nazmul Islam",
        relation: "Stroke recovery patient",
        experience: "Within 6 weeks of home physio I was walking with support again.",
        outcome: "Regained 80% of mobility without leaving home.",
      },
      {
        name: "Rumana Begum",
        relation: "Daughter of patient",
        experience: "Therapist was punctual and explained every exercise to our family.",
        outcome: "My mother's knee pain reduced significantly in a month.",
      },
    ],
    faqs: [
      {
        q: "Who needs home physiotherapy?",
        a: "Patients recovering from stroke, surgery, fractures, paralysis, or elderly people with mobility, balance, or chronic pain issues benefit greatly from home physio.",
      },
      ...COMMON_FAQS,
    ],
  },
  {
    slug: "icu-setup",
    name: "ICU Setup At Home",
    bangla: "হোম আইসিইউ সেটআপ",
    subtitle: "Hospital-grade ICU care in the comfort of home.",
    tagline: "Critical care, ঘরের নিরাপত্তায়",
    description:
      "We turn one room of your home into a fully-equipped ICU — ventilator, oxygen, cardiac monitor, suction, hospital bed and ICU-trained nurses around the clock, all under doctor supervision. Ideal for long-term critical patients, post-ICU recovery, and end-of-life dignity care.",
    emotionalNote:
      "হাসপাতালের আইসিইউয়ের চাপ এবং খরচ থেকে মুক্তি — পরিবারের কাছে থেকেই পাবেন সর্বোচ্চ চিকিৎসা।",
    trust: { seniorsServed: 1500, trainingHours: 300 },
    features: [
      "Ventilator, monitor, oxygen, suction",
      "Hospital bed & ICU consumables",
      "ICU-trained nurses 24/7",
      "Intensivist doctor supervision",
      "Setup within 6 hours",
    ],
    trainingInfo: "আইসিইউ নার্সরা ৩০০+ ঘণ্টা ক্রিটিক্যাল কেয়ার ট্রেনিং প্রাপ্ত এবং ICU অভিজ্ঞ।",
    advantages: [
      {
        title: "Full Equipment",
        bn: "সম্পূর্ণ ইকুইপমেন্ট",
        desc: "Ventilator, monitor, oxygen, suction, defib — all included.",
      },
      {
        title: "ICU-Trained Team",
        bn: "আইসিইউ ট্রেইন্ড টিম",
        desc: "Nurses with hospital ICU experience, not general nursing.",
      },
      {
        title: "Intensivist on Call",
        bn: "ইন্টেনসিভিস্ট কল",
        desc: "Specialist doctor reviews daily and is on call 24/7.",
      },
      {
        title: "Rapid Setup",
        bn: "দ্রুত সেটআপ",
        desc: "Functional ICU at your home within 6 hours of confirmation.",
      },
      {
        title: "Family Comfort",
        bn: "পরিবারের শান্তি",
        desc: "Loved ones stay close — no hospital visiting hours.",
      },
    ],
    packages: [
      {
        id: "icu-basic",
        name: "Basic ICU Setup",
        bangla: "বেসিক আইসিইউ",
        priceFrom: 5000,
        priceTo: 8000,
        unit: "day",
        features: ["Oxygen + monitor", "ICU nurse 24/7", "Doctor visits", "Daily reports"],
      },
      {
        id: "icu-ventilator",
        name: "Ventilator ICU",
        bangla: "ভেন্টিলেটর আইসিইউ",
        priceFrom: 8000,
        priceTo: 15000,
        unit: "day",
        popular: true,
        features: [
          "Full ventilator setup",
          "Two-shift ICU nursing",
          "Intensivist supervision",
          "All consumables",
        ],
      },
      {
        id: "icu-longterm",
        name: "Long-Term ICU Plan",
        bangla: "লং-টার্ম প্ল্যান",
        priceFrom: 180000,
        priceTo: 350000,
        unit: "month",
        features: [
          "Discounted monthly rate",
          "Equipment included",
          "Dedicated team",
          "Family training",
        ],
      },
    ],
    testimonials: [
      {
        name: "Dr. Saiful Karim",
        relation: "Family physician",
        experience: "The home ICU setup was indistinguishable from a hospital unit.",
        outcome: "Patient recovered with dignity, surrounded by family.",
      },
      {
        name: "Salma Choudhury",
        relation: "Daughter of patient",
        experience: "We avoided weeks of hospital ICU costs and stress.",
        outcome: "Father stabilized within 10 days at home.",
      },
    ],
    faqs: [
      {
        q: "Who is home ICU suitable for?",
        a: "Long-term ventilator patients, post-ICU step-down, advanced cancer or neuro patients, and those whose families prefer dignity-focused critical care at home.",
      },
      ...COMMON_FAQS,
    ],
  },
  {
    slug: "neuro-care",
    name: "Neuro Care At Home",
    bangla: "নিউরো কেয়ার",
    subtitle: "Specialized neurological care for stroke, paralysis & Parkinson's at home.",
    tagline: "Expert neuro care, ঘরের মতো যত্ন",
    description:
      "Our neuro-care team supports patients living with stroke, paralysis, Parkinson's, post-neurosurgery recovery and other neurological conditions. Trained caregivers, neuro physiotherapists and supervising doctors work together on a single plan — covering mobility, swallowing, speech support, medication and family training — so recovery happens safely at home.",
    emotionalNote:
      "নিউরো রোগীর যত্নে দরকার বিশেষ দক্ষতা ও ধৈর্য। আমাদের টিম পরিবারের পাশে থেকে প্রতিটি ছোট অগ্রগতিকে সম্ভব করে তোলে।",
    trust: { seniorsServed: 4500, trainingHours: 180 },
    features: [
      "Stroke & paralysis trained caregivers",
      "Neuro physiotherapy sessions",
      "Swallowing & speech support",
      "Medication & seizure monitoring",
      "Doctor-supervised recovery plan",
    ],
    trainingInfo: "১৮০+ ঘণ্টার নিউরো কেয়ার ট্রেনিং, নিউরোলজিস্ট সুপারভিশন সহ।",
    advantages: [
      {
        title: "Neuro-Trained Team",
        bn: "নিউরো ট্রেইন্ড টিম",
        desc: "Caregivers and therapists specialized in neurological recovery.",
      },
      {
        title: "Doctor Supervision",
        bn: "ডাক্তার সুপারভিশন",
        desc: "Neurologist reviews the plan and adjusts as recovery progresses.",
      },
      {
        title: "Mobility Recovery",
        bn: "মোবিলিটি রিকভারি",
        desc: "Structured physio for stroke, paralysis and Parkinson's.",
      },
      {
        title: "Family Training",
        bn: "পরিবারের ট্রেনিং",
        desc: "We train family members on safe transfers and daily care.",
      },
      {
        title: "Continuity of Care",
        bn: "ধারাবাহিক যত্ন",
        desc: "Same team across the recovery journey for trust and consistency.",
      },
    ],
    packages: [
      {
        id: "neuro-basic",
        name: "Basic Neuro Support",
        bangla: "বেসিক নিউরো",
        priceFrom: 35000,
        priceTo: 55000,
        unit: "month",
        features: [
          "Day-shift trained caregiver",
          "Weekly physio session",
          "Medication management",
          "Weekly report",
        ],
      },
      {
        id: "neuro-advanced",
        name: "Advanced Neuro Care",
        bangla: "অ্যাডভান্সড নিউরো",
        priceFrom: 55000,
        priceTo: 90000,
        unit: "month",
        popular: true,
        features: [
          "12-hour caregiver",
          "3x weekly neuro physio",
          "Doctor coordination",
          "Bi-weekly supervisor visit",
        ],
      },
      {
        id: "neuro-intensive",
        name: "Intensive Neuro Care",
        bangla: "ইনটেনসিভ নিউরো",
        priceFrom: 90000,
        priceTo: 160000,
        unit: "month",
        features: [
          "24/7 dual-caregiver",
          "Daily physio",
          "Neurologist on call",
          "Detailed daily report",
        ],
      },
    ],
    testimonials: [
      {
        name: "Anika Sultana",
        relation: "Daughter of stroke patient",
        experience: "The neuro team rebuilt my mother's daily routine after her stroke.",
        outcome: "She regained partial speech and can sit independently within 2 months.",
      },
      {
        name: "Rafiqul Alam",
        relation: "Son of Parkinson's patient",
        experience: "Caregivers were patient and well-trained for tremors and falls.",
        outcome: "Father had zero falls and felt safe again at home.",
      },
    ],
    faqs: [
      {
        q: "What conditions does neuro care cover?",
        a: "Stroke, paralysis, Parkinson's, post-neurosurgery recovery, dementia overlap, seizure disorders and other neurological conditions requiring specialized home support.",
      },
      ...COMMON_FAQS,
    ],
  },
  {
    slug: "patient-caregiver",
    name: "Patient Caregiver At Home",
    bangla: "পেশেন্ট কেয়ারগিভার",
    subtitle: "Compassionate attendants for daily comfort, mobility and personal care.",
    tagline: "Daily care, ভালোবাসার সাথে",
    description:
      "Our patient caregivers help with bathing, feeding, mobility, toileting, companionship and gentle daily activities. They are trained in elderly care basics, vitals monitoring and emergency response — giving families peace of mind that their loved one is safe and dignified at all times.",
    emotionalNote:
      "প্রিয়জনের দৈনন্দিন যত্ন এমন একজনের হাতে যিনি ধৈর্যশীল, প্রশিক্ষিত এবং সম্মানের সাথে সেবা দেন।",
    trust: { seniorsServed: 12000, trainingHours: 120 },
    features: [
      "Bathing, feeding & grooming support",
      "Mobility & transfer assistance",
      "Companionship & emotional support",
      "Vitals monitoring & medication reminders",
      "Daily activity & family reports",
    ],
    trainingInfo: "১২০+ ঘণ্টা সিনিয়র কেয়ার ট্রেনিং, ব্যাকগ্রাউন্ড ভেরিফাইড।",
    advantages: [
      {
        title: "Trained & Verified",
        bn: "প্রশিক্ষিত ও যাচাইকৃত",
        desc: "Background-checked caregivers with structured elderly care training.",
      },
      {
        title: "Compassion First",
        bn: "সহানুভূতি প্রথমে",
        desc: "Patience, dignity and respect at the heart of every shift.",
      },
      {
        title: "Flexible Shifts",
        bn: "ফ্লেক্সিবল শিফট",
        desc: "Day, night or 24-hour coverage — change as needs evolve.",
      },
      {
        title: "Supervisor Visits",
        bn: "সুপারভাইজার ভিজিট",
        desc: "Regular quality checks and family updates.",
      },
      {
        title: "Replacement Guarantee",
        bn: "রিপ্লেসমেন্ট গ্যারান্টি",
        desc: "Not the right fit? We replace within 24 hours, free.",
      },
    ],
    packages: [
      {
        id: "pc-day",
        name: "Day Shift",
        bangla: "ডে শিফট",
        priceFrom: 18000,
        priceTo: 28000,
        unit: "month",
        features: [
          "12-hour day caregiver",
          "Bathing & feeding",
          "Medication reminders",
          "Weekly report",
        ],
      },
      {
        id: "pc-24",
        name: "24-Hour Caregiver",
        bangla: "২৪ ঘণ্টা কেয়ারগিভার",
        priceFrom: 28000,
        priceTo: 45000,
        unit: "month",
        popular: true,
        features: ["Two-shift coverage", "Full daily care", "Supervisor visits", "Family updates"],
      },
      {
        id: "pc-premium",
        name: "Premium Care Plan",
        bangla: "প্রিমিয়াম প্ল্যান",
        priceFrom: 45000,
        priceTo: 70000,
        unit: "month",
        features: [
          "Senior trained caregiver",
          "Doctor visits monthly",
          "Custom routine",
          "Daily report",
        ],
      },
    ],
    testimonials: [
      {
        name: "Sharmin Nahar",
        relation: "Daughter of patient",
        experience:
          "Our caregiver became part of the family — patient and dependable every single day.",
        outcome: "Mother's hygiene and appetite improved within weeks.",
      },
      {
        name: "Kamal Uddin",
        relation: "Son of patient",
        experience: "We finally felt safe leaving father at home while we worked.",
        outcome: "Zero accidents, daily reports and steady mood.",
      },
    ],
    faqs: [
      {
        q: "How is a patient caregiver different from a nurse?",
        a: "Caregivers focus on daily living support — bathing, feeding, mobility, companionship and basic monitoring. Nurses handle clinical procedures like IV, wound care and injections. We can combine both if needed.",
      },
      ...COMMON_FAQS,
    ],
  },
  {
    slug: "lab-test",
    name: "Lab Test At Home",
    bangla: "ল্যাব টেস্ট",
    subtitle: "Sample collection from your doorstep — reports on your phone.",
    tagline: "ঘরে বসেই ল্যাব টেস্ট",
    description:
      "Skip the queues. Our trained phlebotomists collect blood, urine and other samples from your home with full hygiene and accredited lab partnerships. Reports are delivered digitally to your phone, with optional doctor consultation to explain results.",
    emotionalNote:
      "বয়স্ক বা অসুস্থ প্রিয়জনকে আর ল্যাবে নেয়ার ঝামেলা নয় — আমরা ঘরে এসেই নমুনা সংগ্রহ করি।",
    trust: { seniorsServed: 15000, trainingHours: 80 },
    features: [
      "Trained phlebotomist at home",
      "NABL/accredited lab partners",
      "Blood, urine, hormone, full panels",
      "Digital reports within 24 hours",
      "Optional doctor consultation",
    ],
    trainingInfo:
      "ফ্লেবোটমিস্টরা ৮০+ ঘণ্টা ট্রেনিং প্রাপ্ত এবং সম্পূর্ণ স্বাস্থ্যবিধি মেনে কাজ করেন।",
    advantages: [
      {
        title: "No Travel",
        bn: "ভ্রমণ নেই",
        desc: "Skip traffic and waiting rooms — collection at your home.",
      },
      {
        title: "Accredited Labs",
        bn: "অ্যাক্রিডিটেড ল্যাব",
        desc: "Samples processed at top NABL/ISO certified labs.",
      },
      {
        title: "Fast Reports",
        bn: "দ্রুত রিপোর্ট",
        desc: "Digital reports delivered within 24 hours for most tests.",
      },
      {
        title: "Hygienic Process",
        bn: "স্বাস্থ্যকর প্রক্রিয়া",
        desc: "Single-use kits, trained staff and full safety protocols.",
      },
      {
        title: "Doctor Add-On",
        bn: "ডাক্তার কনসাল্ট",
        desc: "Optional consultation to interpret results.",
      },
    ],
    packages: [
      {
        id: "lab-basic",
        name: "Basic Test (CBC/Sugar)",
        bangla: "বেসিক টেস্ট",
        priceFrom: 500,
        priceTo: 1500,
        unit: "visit",
        features: ["Home collection", "Standard reports", "Digital delivery", "Same-day option"],
      },
      {
        id: "lab-health",
        name: "Health Checkup Panel",
        bangla: "হেলথ চেকআপ",
        priceFrom: 2500,
        priceTo: 5000,
        unit: "visit",
        popular: true,
        features: [
          "50+ parameters",
          "Lipid, sugar, kidney, liver",
          "Doctor consult included",
          "Detailed report",
        ],
      },
      {
        id: "lab-senior",
        name: "Senior Wellness Panel",
        bangla: "সিনিয়র প্যানেল",
        priceFrom: 5000,
        priceTo: 9000,
        unit: "visit",
        features: [
          "Comprehensive 80+ tests",
          "Cardiac & diabetes markers",
          "Doctor consult",
          "Year-on-year tracking",
        ],
      },
    ],
    testimonials: [
      {
        name: "Arifa Khatun",
        relation: "Daughter of patient",
        experience: "Booking was easy and the technician arrived on time with all hygiene gear.",
        outcome: "Reports came in 18 hours — saved a hospital visit.",
      },
      {
        name: "Tariq Aziz",
        relation: "Son of patient",
        experience: "Excellent service for my elderly mother who can't travel.",
        outcome: "Doctor explained results over a call — very convenient.",
      },
    ],
    faqs: [
      {
        q: "Which tests can be done at home?",
        a: "Almost all routine tests — CBC, sugar, lipid, kidney, liver, thyroid, hormone panels, vitamin levels and more. Some specialized imaging tests still require a center visit.",
      },
      ...COMMON_FAQS,
    ],
  },
  {
    slug: "x-ray",
    name: "X-ray At Home",
    bangla: "এক্স-রে",
    subtitle: "Portable digital X-ray at your doorstep — no hospital visit needed.",
    tagline: "ঘরেই এক্স-রে, দ্রুত রিপোর্ট",
    description:
      "Our portable digital X-ray service brings imaging to your home — ideal for elderly, post-surgical or bedridden patients. A trained radiographer performs the scan with safety shielding, and a qualified radiologist delivers a digital report within hours.",
    emotionalNote:
      "যাঁদের নড়াচড়া কঠিন, তাঁদের আর হাসপাতালে নিয়ে যাওয়ার দরকার নেই — আমরা ঘরে এসেই এক্স-রে করি।",
    trust: { seniorsServed: 3500, trainingHours: 100 },
    features: [
      "Portable digital X-ray machine",
      "Certified radiographer at home",
      "Radiologist-reviewed report",
      "Safety shielding for family",
      "Digital report in 4–6 hours",
    ],
    trainingInfo: "রেডিওগ্রাফাররা সরকার-নিবন্ধিত এবং সম্পূর্ণ সেফটি প্রোটোকল মেনে কাজ করেন।",
    advantages: [
      {
        title: "Truly Portable",
        bn: "পোর্টেবল মেশিন",
        desc: "Battery-powered digital X-ray that fits in any room.",
      },
      {
        title: "Bedridden Friendly",
        bn: "বেডরিডেন রোগীর জন্য",
        desc: "No transfers needed — scan happens on the bed.",
      },
      {
        title: "Radiologist Report",
        bn: "রেডিওলজিস্ট রিপোর্ট",
        desc: "Reviewed by qualified radiologists, not just imaging.",
      },
      {
        title: "Quick Turnaround",
        bn: "দ্রুত রিপোর্ট",
        desc: "Digital report on your phone within 4–6 hours.",
      },
      {
        title: "Safe for Family",
        bn: "পরিবারের জন্য নিরাপদ",
        desc: "Lead shielding and distance protocols followed strictly.",
      },
    ],
    packages: [
      {
        id: "xr-single",
        name: "Single View X-ray",
        bangla: "সিঙ্গেল ভিউ",
        priceFrom: 1500,
        priceTo: 2500,
        unit: "visit",
        features: ["One body part", "Radiologist report", "Digital delivery", "Same-day"],
      },
      {
        id: "xr-multi",
        name: "Multi-View / Multiple Parts",
        bangla: "মাল্টি ভিউ",
        priceFrom: 2500,
        priceTo: 4500,
        unit: "visit",
        popular: true,
        features: ["Multiple views", "Detailed report", "Same radiographer", "Same-day report"],
      },
      {
        id: "xr-followup",
        name: "Follow-up Pack (3 visits)",
        bangla: "ফলো-আপ প্যাক",
        priceFrom: 6000,
        priceTo: 10000,
        unit: "visit",
        features: ["3 home visits", "Comparison reports", "Doctor coordination", "Discounted rate"],
      },
    ],
    testimonials: [
      {
        name: "Habibur Rahman",
        relation: "Son of patient",
        experience: "Father had a hip fracture — they did the X-ray on his bed without moving him.",
        outcome: "Avoided the painful hospital trip entirely.",
      },
      {
        name: "Nasrin Sultana",
        relation: "Daughter of patient",
        experience: "Report came on WhatsApp the same evening with radiologist notes.",
        outcome: "Doctor could plan treatment without delay.",
      },
    ],
    faqs: [
      {
        q: "Is home X-ray as accurate as hospital X-ray?",
        a: "Yes — we use modern portable digital X-ray machines that produce hospital-grade images, reviewed by qualified radiologists.",
      },
      ...COMMON_FAQS,
    ],
  },
  {
    slug: "ecg",
    name: "ECG At Home",
    bangla: "ইসিজি",
    subtitle: "On-the-spot cardiac ECG with cardiologist review at home.",
    tagline: "ঘরে বসেই ইসিজি, দ্রুত রিভিউ",
    description:
      "Our ECG service brings 12-lead cardiac monitoring to your home, performed by trained technicians. Reports are reviewed by qualified cardiologists and delivered to your phone — perfect for routine cardiac checks, post-discharge follow-up or sudden symptoms in elderly patients.",
    emotionalNote:
      "বুকে ব্যথা বা অস্বস্তি হলে দ্রুত পরীক্ষা প্রয়োজন — আমরা ঘরে এসেই করি, যাতে দেরি না হয়।",
    trust: { seniorsServed: 6000, trainingHours: 60 },
    features: [
      "12-lead digital ECG at home",
      "Trained cardiac technician",
      "Cardiologist-reviewed report",
      "Same-day digital delivery",
      "Optional doctor consultation",
    ],
    trainingInfo: "টেকনিশিয়ানরা ৬০+ ঘণ্টা কার্ডিয়াক ট্রেনিং প্রাপ্ত।",
    advantages: [
      {
        title: "Quick Response",
        bn: "দ্রুত সাড়া",
        desc: "ECG technician dispatched within hours of booking.",
      },
      {
        title: "Cardiologist Review",
        bn: "কার্ডিওলজিস্ট রিভিউ",
        desc: "Every report is read by a qualified cardiologist.",
      },
      {
        title: "Digital Reports",
        bn: "ডিজিটাল রিপোর্ট",
        desc: "Delivered to your phone — easy to share with doctor.",
      },
      {
        title: "Repeat Discounts",
        bn: "রিপিট ডিসকাউন্ট",
        desc: "Lower cost for follow-up ECGs in the same plan.",
      },
      {
        title: "Family Reassurance",
        bn: "পরিবারের নিশ্চিন্ততা",
        desc: "Quick clarity when symptoms strike — no hospital rush.",
      },
    ],
    packages: [
      {
        id: "ecg-single",
        name: "Single ECG",
        bangla: "সিঙ্গেল ইসিজি",
        priceFrom: 600,
        priceTo: 1200,
        unit: "visit",
        features: ["12-lead ECG", "Cardiologist review", "Digital report", "Same-day"],
      },
      {
        id: "ecg-doctor",
        name: "ECG + Doctor Consult",
        bangla: "ইসিজি + কনসাল্ট",
        priceFrom: 1500,
        priceTo: 2500,
        unit: "visit",
        popular: true,
        features: [
          "12-lead ECG",
          "Phone consult with doctor",
          "Detailed report",
          "Treatment guidance",
        ],
      },
      {
        id: "ecg-monthly",
        name: "Monthly Cardiac Pack",
        bangla: "মাসিক প্যাক",
        priceFrom: 4000,
        priceTo: 7000,
        unit: "month",
        features: [
          "4 ECGs / month",
          "Cardiologist tracking",
          "Trend report",
          "Doctor coordination",
        ],
      },
    ],
    testimonials: [
      {
        name: "Sultana Begum",
        relation: "Wife of patient",
        experience: "My husband felt chest discomfort — they came within 2 hours with ECG.",
        outcome: "Cardiologist reviewed and reassured us the same evening.",
      },
      {
        name: "Faisal Ahmed",
        relation: "Son of patient",
        experience: "Monthly ECG tracking helped us catch a rhythm change early.",
        outcome: "Father started treatment before any complications.",
      },
    ],
    faqs: [
      {
        q: "When should I book a home ECG?",
        a: "For routine cardiac checks, post-discharge follow-up, palpitations, chest discomfort, or whenever your doctor recommends one but the patient cannot travel easily.",
      },
      ...COMMON_FAQS,
    ],
  },
];

// export const findHomeCareService = (slug: string) =>
//   HOME_CARE_SERVICES.find((s) => s.slug === slug);

export function findHomeCareService(slug?: string) {
  if (!slug) return undefined;

  return HOME_CARE_SERVICES.find(
    (service) => service.slug.trim().toLowerCase() === slug.trim().toLowerCase(),
  );
}
