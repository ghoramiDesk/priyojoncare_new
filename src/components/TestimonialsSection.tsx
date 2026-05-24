import { useState } from "react";
import { Quote, Play, Star, X } from "lucide-react";
import type { HCTestimonial } from "@/lib/home-care-services";

type Props = {
  testimonials: HCTestimonial[];
  title?: string;
  subtitle?: string;
};

const isYouTube = (url: string) => /youtube\.com|youtu\.be/.test(url);
const toYouTubeEmbed = (url: string) => {
  const id =
    url.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/)?.[1] ?? "";
  return id ? `https://www.youtube.com/embed/${id}?autoplay=1` : url;
};

export function TestimonialsSection({
  testimonials,
  title = "Real Families. Real Outcomes.",
  subtitle = "আমাদের পরিবারগুলোর অভিজ্ঞতা",
}: Props) {
  const [active, setActive] = useState<HCTestimonial | null>(null);

  if (!testimonials.length) return null;

  const videos = testimonials.filter((t) => t.videoUrl);
  const cards = testimonials;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">{title}</h2>
        <p className="font-bangla text-muted-foreground mt-2">{subtitle}</p>
      </div>

      {videos.length > 0 && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-10">
          {videos.map((t) => (
            <button
              key={`v-${t.name}`}
              type="button"
              onClick={() => setActive(t)}
              className="group relative aspect-video overflow-hidden rounded-2xl border border-border bg-foreground text-background text-left"
            >
              {t.thumbnail ? (
                <img
                  src={t.thumbnail}
                  alt={`${t.name} testimonial`}
                  className="absolute inset-0 size-full object-cover opacity-80 group-hover:opacity-100 transition"
                  loading="lazy"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-foreground" />
              )}
              <div className="absolute inset-0 bg-foreground/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="size-14 rounded-full bg-background/90 text-foreground grid place-content-center group-hover:scale-110 transition">
                  <Play className="size-6 fill-current" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs opacity-80">{t.relation}</p>
              </div>
            </button>
          ))}
        </div>
      )}

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((t) => (
          <article
            key={`c-${t.name}`}
            className="p-6 rounded-2xl bg-background border border-border shadow-card flex flex-col"
          >
            <div className="flex items-center justify-between mb-3">
              <Quote className="size-6 text-primary/40" />
              {t.rating ? (
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`size-3.5 ${i < t.rating! ? "fill-primary text-primary" : "text-muted"}`}
                    />
                  ))}
                </div>
              ) : null}
            </div>
            <p className="text-base leading-relaxed flex-1">"{t.experience}"</p>
            <div className="mt-4 p-3 rounded-lg bg-accent/40 border border-border">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">Outcome</p>
              <p className="text-sm text-muted-foreground mt-0.5">{t.outcome}</p>
            </div>
            <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.relation}</p>
              </div>
              {t.videoUrl && (
                <button
                  type="button"
                  onClick={() => setActive(t)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:gap-2 transition-all"
                >
                  <Play className="size-3.5 fill-current" /> Watch
                </button>
              )}
            </div>
          </article>
        ))}
      </div>

      {active?.videoUrl && (
        <div
          className="fixed inset-0 z-50 bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute top-4 right-4 size-10 rounded-full bg-background text-foreground grid place-content-center"
            onClick={() => setActive(null)}
          >
            <X className="size-5" />
          </button>
          <div
            className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            {isYouTube(active.videoUrl) ? (
              <iframe
                src={toYouTubeEmbed(active.videoUrl)}
                title={`${active.name} testimonial`}
                className="size-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video src={active.videoUrl} controls autoPlay className="size-full" />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
