import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { blogLinkProps } from "@/lib/routes";
import { HeroSlider, HERO_IMAGES } from "@/components/HeroSlider";

type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  cover_image: string | null;
  created_at: string;
};

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Health Blog — Priyojon Care" },
      {
        name: "description",
        content: "Elder care tips, health guides, and family stories from Priyojon Care.",
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    supabase
      .from("blog_posts")
      .select("id,slug,title,excerpt,cover_image,created_at")
      .eq("published", true)
      .order("created_at", { ascending: false })
      .then(({ data }) => setPosts((data as Post[]) ?? []));
  }, []);
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-accent via-background to-surface">
        <HeroSlider images={HERO_IMAGES.blog} />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight">
            Health & Care Blog
          </h1>
          <p className="text-muted-foreground mt-4 text-lg">
            Practical, culturally rooted guidance for families caring for elders.
          </p>
        </div>
      </section>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 gap-6">
          {posts.map((p) => (
            <Link
              key={p.id}
              {...blogLinkProps(p.slug)}
              className="group rounded-2xl border border-border bg-surface overflow-hidden hover:shadow-card transition-shadow"
            >
              {p.cover_image && (
                <img
                  src={
                    p.cover_image ||
                    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80"
                  }
                  alt={p.title}
                  loading="lazy"
                  className="w-full aspect-[16/9] object-cover"
                />
              )}
              <div className="p-5">
                <h2 className="font-display text-xl font-semibold group-hover:text-primary transition-colors">
                  {p.title}
                </h2>
                {p.excerpt && (
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{p.excerpt}</p>
                )}
                <p className="text-xs text-muted-foreground mt-3">
                  {new Date(p.created_at).toLocaleDateString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
