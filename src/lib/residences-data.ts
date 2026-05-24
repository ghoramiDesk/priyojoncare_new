import {
  Dumbbell,
  UtensilsCrossed,
  Wifi,
  Car,
  Stethoscope,
  Trees,
  BookOpen,
  Coffee,
  HeartPulse,
  Bell,
  ShoppingBag,
  Home,
  type LucideIcon,
} from "lucide-react";

export type Apartment = {
  id: string;
  type: string;
  bn: string;
  size: string;
  beds: number;
  baths: number;
  priceFrom: number;
  priceTo: number;
  description: string;
  gallery: string[];
  video?: string;
  videoPoster?: string;
  features: string[];
};

export type ResidenceLocation = {
  id: string;
  name: string;
  bn: string;
  area: string;
  address: string;
  image: string;
  tagline: string;
  description: string;
  highlights: string[];
  apartments: Apartment[];
  amenities: { icon: LucideIcon; label: string }[];
  gallery: string[];
  video?: string;
  videoPoster?: string;
};

const SAMPLE_VIDEO =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";

export const RESIDENCE_LOCATIONS: ResidenceLocation[] = [
  {
    id: "gulshan",
    name: "Priyojon Residences — Gulshan",
    bn: "গুলশান",
    area: "Gulshan-2, Dhaka",
    address: "Road 41, Gulshan-2, Dhaka 1212",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1600&q=80&auto=format&fit=crop",
    tagline: "Premium high-rise living in the heart of diplomatic Dhaka.",
    description:
      "A landmark senior-living tower in Gulshan-2 with concierge services, an on-site clinic, and a curated calendar of social events — minutes from Gulshan Lake and top hospitals.",
    highlights: ["Rooftop garden & lounge", "On-site clinic 24/7", "Walking distance to lakes"],
    gallery: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80&auto=format&fit=crop",
    ],
    video: SAMPLE_VIDEO,
    videoPoster:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1600&q=80&auto=format&fit=crop",
    apartments: [
      {
        id: "studio",
        type: "Studio Suite",
        bn: "স্টুডিও",
        size: "550 sqft",
        beds: 1,
        baths: 1,
        priceFrom: 65000,
        priceTo: 85000,
        description:
          "A bright, efficient studio with senior-safe bath, kitchenette, and emergency alarm — ideal for an independent resident.",
        gallery: [
          "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1600&q=80&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1600&q=80&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1600&q=80&auto=format&fit=crop",
        ],
        video: SAMPLE_VIDEO,
        features: ["Senior-safe bathroom", "Kitchenette", "Emergency alarm", "City view"],
      },
      {
        id: "1bhk",
        type: "1 BHK Deluxe",
        bn: "১ বেডরুম",
        size: "850 sqft",
        beds: 1,
        baths: 1,
        priceFrom: 95000,
        priceTo: 125000,
        description:
          "A spacious one-bedroom with separate living area, walk-in shower, and a private balcony overlooking Gulshan.",
        gallery: [
          "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1600&q=80&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1600&q=80&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80&auto=format&fit=crop",
        ],
        features: ["Private balcony", "Walk-in shower", "Separate living area", "Smart lighting"],
      },
      {
        id: "2bhk",
        type: "2 BHK Premium",
        bn: "২ বেডরুম",
        size: "1,250 sqft",
        beds: 2,
        baths: 2,
        priceFrom: 145000,
        priceTo: 185000,
        description:
          "A premium two-bedroom for couples or live-in caregivers — full kitchen, two ensuite baths, and panoramic skyline views.",
        gallery: [
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600&q=80&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1600&q=80&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1600&q=80&auto=format&fit=crop",
        ],
        features: ["Two ensuite baths", "Full kitchen", "Caregiver room", "Skyline view"],
      },
    ],
    amenities: [
      { icon: Dumbbell, label: "Gym & Yoga" },
      { icon: UtensilsCrossed, label: "Fine Dining" },
      { icon: Wifi, label: "High-speed Wi-Fi" },
      { icon: Car, label: "Valet Parking" },
      { icon: Stethoscope, label: "On-site Clinic" },
      { icon: Trees, label: "Rooftop Garden" },
    ],
  },
  {
    id: "dhanmondi",
    name: "Priyojon Residences — Dhanmondi",
    bn: "ধানমন্ডি",
    area: "Dhanmondi, Dhaka",
    address: "Road 27, Dhanmondi, Dhaka 1209",
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1600&q=80&auto=format&fit=crop",
    tagline: "Cultural heartland with lakeside views and easy hospital access.",
    description:
      "Nestled near Dhanmondi Lake, this community blends quiet greenery with cultural energy — a library, café lounge, and on-call nurse round out daily life.",
    highlights: ["Lakeside walking paths", "Library & cultural hall", "Near top hospitals"],
    gallery: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1600&q=80&auto=format&fit=crop",
    ],
    video: SAMPLE_VIDEO,
    videoPoster:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1600&q=80&auto=format&fit=crop",
    apartments: [
      {
        id: "studio",
        type: "Studio Suite",
        bn: "স্টুডিও",
        size: "500 sqft",
        beds: 1,
        baths: 1,
        priceFrom: 55000,
        priceTo: 75000,
        description:
          "Compact, light-filled studio steps from Dhanmondi Lake — perfect for an active independent resident.",
        gallery: [
          "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1600&q=80&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1600&q=80&auto=format&fit=crop",
        ],
        features: ["Lake-side window", "Senior-safe bath", "Emergency alarm", "Quiet floor"],
      },
      {
        id: "1bhk",
        type: "1 BHK Classic",
        bn: "১ বেডরুম",
        size: "800 sqft",
        beds: 1,
        baths: 1,
        priceFrom: 85000,
        priceTo: 110000,
        description:
          "Classic one-bedroom layout with a generous living room and a sun-lit reading nook.",
        gallery: [
          "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1600&q=80&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1600&q=80&auto=format&fit=crop",
        ],
        features: ["Reading nook", "Walk-in closet", "Library access", "Concierge"],
      },
      {
        id: "2bhk",
        type: "2 BHK Family",
        bn: "২ বেডরুম",
        size: "1,150 sqft",
        beds: 2,
        baths: 2,
        priceFrom: 130000,
        priceTo: 165000,
        description:
          "Designed for couples or visiting family — two bedrooms, full kitchen, and a relaxed lakeside outlook.",
        gallery: [
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600&q=80&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1600&q=80&auto=format&fit=crop",
        ],
        features: ["Family bedroom", "Full kitchen", "Lake view", "Guest sofa"],
      },
    ],
    amenities: [
      { icon: BookOpen, label: "Library" },
      { icon: Coffee, label: "Café Lounge" },
      { icon: Trees, label: "Lakeside Walks" },
      { icon: HeartPulse, label: "On-call Nurse" },
      { icon: Bell, label: "Emergency Alarms" },
      { icon: Car, label: "Covered Parking" },
    ],
  },
  {
    id: "uttara",
    name: "Priyojon Residences — Uttara",
    bn: "উত্তরা",
    area: "Sector 7, Uttara, Dhaka",
    address: "Road 15, Sector 7, Uttara, Dhaka 1230",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80&auto=format&fit=crop",
    tagline: "Spacious, modern community close to airport and family neighbourhoods.",
    description:
      "A green, low-rise campus designed for active seniors — pool, walking trails, and a shuttle to nearby family neighbourhoods and the airport.",
    highlights: ["Wide green campus", "Senior-safe swimming pool", "10 mins from airport"],
    gallery: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1600&q=80&auto=format&fit=crop",
    ],
    video: SAMPLE_VIDEO,
    videoPoster:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80&auto=format&fit=crop",
    apartments: [
      {
        id: "studio",
        type: "Studio Suite",
        bn: "স্টুডিও",
        size: "520 sqft",
        beds: 1,
        baths: 1,
        priceFrom: 50000,
        priceTo: 70000,
        description:
          "Garden-view studio with private patio access and modern senior-safe finishes.",
        gallery: [
          "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1600&q=80&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1600&q=80&auto=format&fit=crop",
        ],
        features: ["Garden patio", "Senior-safe bath", "Smart lighting", "Quiet zone"],
      },
      {
        id: "1bhk",
        type: "1 BHK Garden",
        bn: "১ বেডরুম",
        size: "820 sqft",
        beds: 1,
        baths: 1,
        priceFrom: 78000,
        priceTo: 105000,
        description:
          "One-bedroom apartment opening onto landscaped lawns and walking trails.",
        gallery: [
          "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1600&q=80&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1600&q=80&auto=format&fit=crop",
        ],
        features: ["Garden access", "Walking trails", "Open kitchen", "Bright living"],
      },
      {
        id: "2bhk",
        type: "2 BHK Villa",
        bn: "২ বেডরুম",
        size: "1,300 sqft",
        beds: 2,
        baths: 2,
        priceFrom: 120000,
        priceTo: 158000,
        description:
          "Villa-style two-bedroom with a wraparound veranda and direct campus garden views.",
        gallery: [
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600&q=80&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1600&q=80&auto=format&fit=crop",
        ],
        features: ["Wraparound veranda", "Two baths", "Private entry", "Garden view"],
      },
    ],
    amenities: [
      { icon: Dumbbell, label: "Pool & Gym" },
      { icon: Trees, label: "Green Campus" },
      { icon: ShoppingBag, label: "Convenience Store" },
      { icon: UtensilsCrossed, label: "Community Dining" },
      { icon: Stethoscope, label: "Visiting Doctors" },
      { icon: Car, label: "Shuttle Service" },
    ],
  },
];

export const APARTMENT_ICON = Home;
