import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Star, Shield, Briefcase } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { HeroSlider, HERO_IMAGES } from "@/components/HeroSlider";

type Caregiver = {
  id: string; full_name: string; photo_url: string | null;
  experience_years: number; specialization: string; skills: string[];
  bio: string | null; rating: number | null; verified: boolean; languages: string[] | null;
};

export const Route = createFileRoute("/caregivers")({
  head: () => ({
    meta: [
      { title: "Verified Caregivers — Priyojon Care" },
      { name: "description", content: "Meet our trained, background-verified nurses, physiotherapists, and elder companions serving Dhaka families." },
    ],
  }),
  component: CaregiversPage,
});

function CaregiversPage() {
  const [list, setList] = useState<Caregiver[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.from("caregivers").select("*").order("rating", { ascending: false })
      .then(({ data }) => { setList((data as Caregiver[]) ?? []); setLoading(false); });
  }, []);

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-accent via-background to-surface">
        <HeroSlider images={HERO_IMAGES.caregivers} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-40">
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight">Our Caregivers</h1>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl">Every caregiver is background-verified, professionally trained, and supervised by our medical team.</p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">

      {loading ? (
        <div className="text-muted-foreground">Loading caregivers…</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {list.map((c) => (
            <article key={c.id} className="rounded-2xl border border-border bg-surface overflow-hidden shadow-card flex flex-col">
              <div className="aspect-[4/3] bg-muted overflow-hidden">
                {c.photo_url ? (
                  <img src={c.photo_url} alt={c.full_name} loading="lazy" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">No photo</div>
                )}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-lg">{c.full_name}</h3>
                  {c.verified && <Shield className="size-4 text-success shrink-0 mt-1" aria-label="Verified" />}
                </div>
                <p className="text-sm text-primary font-medium">{c.specialization}</p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mt-2">
                  <span className="flex items-center gap-1"><Star className="size-3.5 fill-warning text-warning" />{c.rating?.toFixed(1) ?? "—"}</span>
                  <span className="flex items-center gap-1"><Briefcase className="size-3.5" />{c.experience_years}+ yrs</span>
                </div>
                {c.bio && <p className="text-sm text-muted-foreground mt-3 leading-relaxed line-clamp-3">{c.bio}</p>}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {c.skills.slice(0, 3).map((s) => <span key={s} className="text-[11px] px-2 py-0.5 rounded-full bg-accent text-accent-foreground">{s}</span>)}
                </div>
                <Button asChild size="sm" className="mt-5 self-start">
                  <Link to="/request">Request care</Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      )}
      </div>
    </div>
  );
}
