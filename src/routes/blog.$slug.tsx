import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { ArrowLeft } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type Post = {
  id: string;
  title: string;
  content: string;
  cover_image: string | null;
  excerpt: string | null;
  created_at: string;
};

export const Route = createFileRoute("/blog/$slug")({
  component: BlogPost,
});

function BlogPost() {
  const { slug } = Route.useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    supabase
      .from("blog_posts")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .maybeSingle()
      .then(({ data }) => {
        setPost(data as Post | null);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <div className="max-w-2xl mx-auto p-12">Loading…</div>;
  if (!post)
    return (
      <div className="max-w-2xl mx-auto p-12 text-center">
        <p>Post not found.</p>
        <Link to="/blog" className="text-primary">
          Back to blog
        </Link>
      </div>
    );

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="size-4" /> Back to blog
      </Link>
     
        <img
          src={
            post.cover_image ||
            "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80"
          }
          alt={post.title}
          className="w-full aspect-[16/9] object-cover rounded-2xl mb-8"
        />
    
      <h1 className="font-display text-3xl lg:text-5xl font-bold tracking-tight">{post.title}</h1>
      <p className="text-sm text-muted-foreground mt-3">
        {new Date(post.created_at).toLocaleDateString()}
      </p>
      <div className="prose prose-zinc max-w-none mt-8">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
}
