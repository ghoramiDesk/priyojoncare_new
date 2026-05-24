/**
 * Centralized slug → route mapping.
 *
 * Single source of truth for navigating to dedicated service / residence /
 * care-at-home pages. Always go through these helpers instead of hand-rolling
 * `to="/services/$slug"` links so cards, headers, footers, and CTAs stay in
 * sync with the actual route files.
 */

import type { LinkProps } from "@tanstack/react-router";

/** Top-level service slug → its dedicated rich page. */
export const SERVICE_ROUTES = {
  residences: "/residences",
  "care-homes": "/care-homes",
  "memory-care": "/memory-care",
  "care-at-home": "/care-at-home",
} as const;

export type ServiceSlug = keyof typeof SERVICE_ROUTES;

/**
 * Returns typed `<Link>` props for a service slug.
 * Falls back to the generic `/services/$slug` page (and finally `/services`)
 * when the slug is not yet promoted to a dedicated route.
 */
export function serviceLinkProps(slug: string): LinkProps {
  if (slug in SERVICE_ROUTES) {
    return { to: SERVICE_ROUTES[slug as ServiceSlug] };
  }
  if (slug) {
    return { to: "/services/$slug", params: { slug } };
  }
  return { to: "/services" };
}

/** Care-at-home sub-service slug → detail page. */
export function careAtHomeLinkProps(slug: string): LinkProps {
  return { to: "/care-at-home/$slug", params: { slug } };
}

/** Residence location slug → detail page. */
export function residenceLinkProps(slug: string): LinkProps {
  return { to: "/residences/$slug", params: { slug } };
}

/** Blog post slug → detail page. */
export function blogLinkProps(slug: string): LinkProps {
  return { to: "/blog/$slug", params: { slug } };
}

/** Header / footer service nav (label + bangla + route). */
export const SERVICE_NAV = [
  { slug: "residences", label: "Senior Residences", bn: "সিনিয়র রেসিডেন্স" },
  { slug: "care-homes", label: "Care Homes", bn: "কেয়ার হোম" },
  { slug: "memory-care", label: "Memory Care", bn: "মেমোরি কেয়ার" },
  { slug: "care-at-home", label: "Care at Home", bn: "হোম কেয়ার" },
] as const satisfies ReadonlyArray<{ slug: ServiceSlug; label: string; bn: string }>;
