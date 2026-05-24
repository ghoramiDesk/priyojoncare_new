import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { residenceLinkProps } from "@/lib/routes";
import {
  Phone,
  MessageCircle,
  Check,
  ArrowRight,
  Sparkles,
  Users,
  ShieldCheck,
  Stethoscope,
  CalendarHeart,
  Dumbbell,
  UtensilsCrossed,
  BellRing,
  HeartPulse,
  Brain,
  Smile,
  BookOpen,
  Sun,
  Building2,
  Bell,
  Accessibility,
  MapPin,
  Home,
  Wifi,
  Car,
  Trees,
  Coffee,
  ShoppingBag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, callLink, whatsappLink, formatBDT, SERVICES } from "@/lib/site";
import { HeroSlider, HERO_IMAGES } from "@/components/HeroSlider";

export const Route = createFileRoute("/residences")({
  head: () => ({
    meta: [
      { title: "Senior Residences — Independent Living Communities — Priyojon Care" },
      {
        name: "description",
        content:
          "Premium independent senior living communities in Dhaka — social, safe, and beautifully designed for an active retirement lifestyle.",
      },
      { property: "og:title", content: "Senior Residences — Priyojon Care" },
      {
        property: "og:description",
        content: "স্বাধীন জীবন, নিরাপদ পরিবেশ — golden years lived with comfort and community.",
      },
    ],
  }),
  component: CareAtResidenceLayout,
});

function CareAtResidenceLayout() {
  return <Outlet />;
}
