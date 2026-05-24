import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SITE, callLink, whatsappLink } from "@/lib/site";
import { useAuth } from "@/lib/auth";
import { SERVICE_NAV, serviceLinkProps } from "@/lib/routes";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { user, isAdmin } = useAuth();

  const links = [
    { to: "/caregivers", label: "Caregivers" },
    { to: "/care-suggest", label: "AI Advisor" },
    { to: "/blog", label: "Blog" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ] as const;

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 lg:h-20 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="size-9 rounded-md bg-gradient-primary flex items-center justify-center text-primary-foreground font-display font-bold">
            P
          </div>
          <span className="font-semibold tracking-tight text-lg">{SITE.name}</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-muted-foreground">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground font-semibold" }}
            >
              Services <ChevronDown className="size-3.5" />
            </Link>
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-72 z-50">
                <div className="rounded-xl bg-background border border-border shadow-elegant p-2">
                  {SERVICE_NAV.map((s) => (
                    <Link
                      key={s.slug}
                      {...serviceLinkProps(s.slug)}
                      className="flex flex-col px-3 py-2.5 rounded-lg hover:bg-accent transition-colors"
                      activeProps={{ className: "bg-accent" }}
                    >
                      <span className="text-sm font-semibold text-foreground">{s.label}</span>
                      <span className="font-bangla text-xs text-primary">{s.bn}</span>
                    </Link>
                  ))}
                  <Link
                    to="/services"
                    className="block px-3 py-2 mt-1 text-xs font-semibold text-primary border-t border-border hover:bg-accent rounded-lg"
                  >
                    View all services →
                  </Link>
                </div>
              </div>
            )}
          </div>
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground font-semibold" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href={callLink} className="hidden xl:flex flex-col items-end leading-tight">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">24/7 Careline</span>
            <span className="text-sm font-semibold text-primary tabular-nums">{SITE.phoneDisplay}</span>
          </a>
          <Button asChild variant="outline" size="sm" className="gap-2">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-4" /> WhatsApp
            </a>
          </Button>
          {/* {user ? (
            <Button asChild size="sm">
              <Link to={isAdmin ? "/admin" : "/dashboard"}>{isAdmin ? "Admin" : "Dashboard"}</Link>
            </Button>
          ) : (
            <Button asChild size="sm">
              <Link to="/login">Sign in</Link>
            </Button>
          )} */}
        </div>

        <button className="lg:hidden p-2" onClick={() => setOpen((o) => !o)} aria-label="Menu">
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="px-4 py-4 flex flex-col gap-1">
            <p className="px-2 pt-2 pb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              Services
            </p>
            {SERVICE_NAV.map((s) => (
              <Link
                key={s.slug}
                {...serviceLinkProps(s.slug)}
                onClick={() => setOpen(false)}
                className="flex flex-col px-2 py-2 rounded-lg hover:bg-accent"
                activeProps={{ className: "bg-accent" }}
              >
                <span className="text-sm font-semibold">{s.label}</span>
                <span className="font-bangla text-xs text-primary">{s.bn}</span>
              </Link>
            ))}
            <Link
              to="/services"
              onClick={() => setOpen(false)}
              className="px-2 py-2 text-xs font-semibold text-primary"
            >
              View all services →
            </Link>
            <div className="border-t border-border my-2" />
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2 px-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                activeProps={{ className: "text-foreground font-semibold" }}
              >
                {l.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2 border-t border-border">
              <Button asChild variant="outline" size="sm" className="flex-1 gap-2">
                <a href={callLink}><Phone className="size-4" /> Call</a>
              </Button>
              <Button asChild size="sm" className="flex-1 gap-2">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-4" /> WhatsApp
                </a>
              </Button>
            </div>
            {/* <Button asChild variant="secondary" size="sm">
              <Link to={user ? (isAdmin ? "/admin" : "/dashboard") : "/login"} onClick={() => setOpen(false)}>
                {user ? (isAdmin ? "Admin Panel" : "My Dashboard") : "Sign in"}
              </Link>
            </Button> */}
          </nav>
        </div>
      )}
    </header>
  );
}
