import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, HelpCircle, Newspaper } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { supabase } from "@/integrations/supabase/client";
import { blogLinkProps } from "@/lib/routes";
import { FAQS } from "@/lib/faqs";

type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  cover_image: string | null;
};

/** Routes where the global FAQ + Blog card should NOT render. */
const HIDDEN_PREFIXES = ["/faq", "/blog", "/login", "/admin", "/dashboard", "/request"];

export function FaqBlogSection() {
  const { pathname } = useLocation();
  const hidden = HIDDEN_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`));

  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    if (hidden) return;
    let cancelled = false;
    supabase
      .from("blog_posts")
      .select("id,slug,title,excerpt,cover_image")
      .eq("published", true)
      .order("created_at", { ascending: false })
      .limit(3)
      .then(({ data }) => {
        if (!cancelled) setPosts((data as Post[]) ?? []);
      });
    return () => {
      cancelled = true;
    };
  }, [hidden]);

  if (hidden) return null;

  const topFaqs = FAQS.slice(0, 4);

  return (
    <section className="border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 lg:py-20 grid lg:grid-cols-2 gap-10 lg:gap-14">
        {/* FAQ card */}
        <div className="rounded-3xl bg-background border border-border shadow-card p-6 sm:p-8 flex flex-col">
          <div className="flex items-center gap-3 mb-2">
            <span className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <HelpCircle className="size-5" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Common Questions
            </span>
          </div>
          <h2 className="font-display text-2xl lg:text-3xl font-bold tracking-tight">
            Families ask us
          </h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Quick answers about caregivers, pricing, and how Priyojon Care works.
          </p>

          <Accordion type="single" collapsible className="mt-5 flex-1">
            {topFaqs.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger className="text-left font-semibold text-sm">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Link
            to="/faq"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all w-fit"
          >
            See all FAQs <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* Blog card */}
        <div className="rounded-3xl bg-background border border-border shadow-card p-6 sm:p-8 flex flex-col">
          <div className="flex items-center gap-3 mb-2">
            <span className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Newspaper className="size-5" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              From the Blog
            </span>
          </div>
          <h2 className="font-display text-2xl lg:text-3xl font-bold tracking-tight">
            Care guides & stories
          </h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Practical, culturally-rooted advice for Bangladeshi families.
          </p>

          <ul className="mt-5 flex-1 divide-y divide-border">
            {posts.length === 0 && (
              <li className="py-4 text-sm text-muted-foreground">New articles coming soon.</li>
            )}
            {posts.map((p) => (
              <li key={p.id}>
                <Link {...blogLinkProps(p.slug)} className="group flex gap-4 py-4 items-center">
                  <img
                    src={
                      p.cover_image ||
                      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80"
                    }
                    alt=""
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80";
                    }}
                    className="size-16 sm:size-20 rounded-xl object-cover border border-border shrink-0"
                  />
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm sm:text-base group-hover:text-primary transition-colors line-clamp-2">
                      {p.title}
                    </h3>
                    {p.excerpt && (
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1 line-clamp-2">
                        {p.excerpt}
                      </p>
                    )}
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="/blog"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all w-fit"
          >
            Read the blog <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
