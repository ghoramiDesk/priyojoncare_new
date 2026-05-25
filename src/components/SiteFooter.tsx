import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { SITE, callLink, whatsappLink } from "@/lib/site";
import logo from "@/assets/priyojon_logo.png"; // adjust path

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            {/* <div className="size-9 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-display font-bold">P</div> */}
            {/* <span className="font-semibold text-lg">{SITE.name}</span> */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <img src={logo} alt="Logo" className="h-14 rounded-md object-cover" />
            </Link>
          </div>
          <p className="text-background/70 max-w-md text-sm leading-relaxed">
            A digital bridge between Bangladeshi families and trusted caregivers. Dignified,
            professional, and deeply compassionate in-home care for elders.
          </p>
          <div className="flex gap-3 mt-6">
            <a
              href={callLink}
              className="size-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
              aria-label="Call"
            >
              <Phone className="size-4" />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="size-10 rounded-full bg-background/10 hover:bg-whatsapp flex items-center justify-center transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="size-4" />
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="size-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
              aria-label="Email"
            >
              <Mail className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-background/60">
            Services
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/residences" className="text-background/80 hover:text-background">
                Senior Residences
              </Link>
            </li>
            <li>
              <Link to="/care-homes" className="text-background/80 hover:text-background">
                Care Homes
              </Link>
            </li>
            <li>
              <Link to="/memory-care" className="text-background/80 hover:text-background">
                Memory Care
              </Link>
            </li>
            <li>
              <Link to="/care-at-home" className="text-background/80 hover:text-background">
                Care at Home
              </Link>
            </li>
            <li>
              <Link to="/caregivers" className="text-background/80 hover:text-background">
                Hire Caregivers
              </Link>
            </li>
            <li>
              <Link to="/video-consult" className="text-background/80 hover:text-background">
                Video Consultation
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-background/80 hover:text-background">
                All Services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-background/60">
            Reach Us
          </h4>
          <ul className="space-y-3 text-sm text-background/80">
            <li className="flex items-start gap-2">
              <Phone className="size-4 shrink-0 mt-0.5" />
              <a href={callLink}>{SITE.phoneDisplay}</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="size-4 shrink-0 mt-0.5" />
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="size-4 shrink-0 mt-0.5" />
              {SITE.address}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-background/60">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Caring for Bangladeshi families.
          </p>
          <div className="flex gap-6">
            <Link to="/faq" className="hover:text-background">
              FAQ
            </Link>
            <Link to="/about" className="hover:text-background">
              About
            </Link>
            <Link to="/contact" className="hover:text-background">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
