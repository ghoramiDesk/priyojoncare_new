export interface HomeCareService {
  slug: string
  name: string
  bangla: string
  tagline: string
  subtitle: string
  description: string
  heroImage?: string

  trust: {
    seniorsServed: number
  }

  features: string[]

  advantages: {
    title: string
    bn: string
    desc: string
  }[]

  packages: {
    id: string
    name: string
    bangla: string
    priceFrom: number
    priceTo: number
    unit: string
    popular?: boolean
    features: string[]
  }[]

  faqs: {
    q: string
    a: string
  }[]

  testimonials: any[]
}

export const HOME_CARE_SERVICES: HomeCareService[] = [
  {
    slug: 'nursing-care',

    name: 'Nursing Care',
    bangla: 'নার্সিং কেয়ার',

    tagline: 'Professional nursing at home',

    subtitle:
      'Certified nurses providing quality care at home.',

    description:
      'Our nursing care service ensures safe and professional treatment at home.',

    heroImage: '/images/nursing.jpg',

    trust: {
      seniorsServed: 2500,
    },

    features: [
      '24/7 Nursing',
      'Medication Support',
      'Vitals Monitoring',
    ],

    advantages: [
      {
        title: 'Experienced Nurses',
        bn: 'অভিজ্ঞ নার্স',
        desc: 'Trained nurses available anytime.',
      },
    ],

    packages: [
      {
        id: 'basic',
        name: 'Basic',
        bangla: 'বেসিক',
        priceFrom: 1500,
        priceTo: 3000,
        unit: 'day',
        popular: true,
        features: ['8 Hour Support'],
      },
    ],

    faqs: [
      {
        q: 'Is this available in Dhaka?',
        a: 'Yes, across Dhaka city.',
      },
    ],

    testimonials: [],
  },

  {
    slug: 'icu-setup',

    name: 'ICU Setup',
    bangla: 'আইসিইউ সেটআপ',

    tagline: 'Hospital-level ICU at home',

    subtitle:
      'Emergency ICU setup with equipment and ICU nurses.',

    description:
      'We provide complete ICU setup services at home.',

    trust: {
      seniorsServed: 900,
    },

    features: ['ICU Bed', 'Oxygen', 'ICU Nurse'],

    advantages: [],

    packages: [],

    faqs: [],

    testimonials: [],
  },
]