/** Shared FAQ list — used by /faq page and the global FaqBlogSection card. */
export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "How quickly can a caregiver start?",
    a: "Most non-critical care can begin within 24-48 hours of your first call. Critical care setup is typically same-day in Dhaka.",
  },
  {
    q: "Do I have to pay online?",
    a: "No. We never collect payment online. Billing is monthly via cash or bank transfer after care begins.",
  },
  {
    q: "Are caregivers verified?",
    a: "Yes — every caregiver passes background checks, NID verification, training assessments, and a probation period.",
  },
  {
    q: "What areas do you serve?",
    a: "Currently all of Dhaka city. We're expanding to Chattogram and Sylhet later this year.",
  },
  {
    q: "Can my parents try a caregiver before committing?",
    a: "Yes. We offer a no-obligation introductory visit so your family can meet the caregiver first.",
  },
  {
    q: "What if I'm an NRB (non-resident Bangladeshi)?",
    a: "Our NRB Family Plans include weekly video updates, monthly health summaries, and a dedicated advisor reachable on WhatsApp in your timezone.",
  },
];
