import { Link } from "@tanstack/react-router";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type Package, formatBDT, unitLabel, unitLabelBn } from "@/lib/site";
import { cn } from "@/lib/utils";

type Props = {
  pkg: Package;
  serviceSlug: string;
  ctaLabel?: string;
};

export function PackageCard({ pkg, serviceSlug, ctaLabel = "Request This Package" }: Props) {
  return (
    <div
      className={cn(
        "relative flex flex-col p-7 rounded-2xl border bg-background transition-all h-full",
        pkg.popular
          ? "border-primary shadow-elegant ring-1 ring-primary/20"
          : "border-border hover:border-primary/40 hover:shadow-card",
      )}
    >
      {pkg.popular && (
        <span className="absolute -top-3 left-7 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold shadow-sm">
          <Sparkles className="size-3" /> Most Popular
        </span>
      )}
      <h3 className="font-display text-xl font-semibold">{pkg.name}</h3>
      <p className="font-bangla text-sm text-primary mt-0.5">{pkg.bangla}</p>

      <div className="mt-5 mb-6">
        <div className="flex items-baseline gap-1.5 flex-wrap">
          <span className="text-3xl font-bold tabular-nums">৳{formatBDT(pkg.priceFrom)}</span>
          <span className="text-muted-foreground">–</span>
          <span className="text-3xl font-bold tabular-nums">৳{formatBDT(pkg.priceTo)}</span>
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          <span className="font-bangla">{unitLabelBn[pkg.unit]}</span>{" "}
          <span>{unitLabel[pkg.unit]}</span> · indicative pricing
        </p>
      </div>

      <ul className="space-y-2.5 mb-7 flex-1">
        {pkg.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <Check className="size-4 text-primary shrink-0 mt-0.5" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <Button
        asChild
        size="lg"
        variant={pkg.popular ? "default" : "outline"}
        className={cn("w-full", pkg.popular && "shadow-cta")}
      >
        <Link to="/request" search={{ service: serviceSlug, package: pkg.id }}>
          {ctaLabel}
        </Link>
      </Button>
    </div>
  );
}
