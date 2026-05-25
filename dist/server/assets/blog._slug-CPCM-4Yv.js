import { U as reactExports, K as jsxRuntimeExports } from "./worker-entry-Be3-PIiG.js";
import { r as Route, a8 as supabase, L as Link } from "./router-C3WBn37j.js";
import { A as ArrowLeft } from "./arrow-left-BXm0zLv5.js";
import { M as Markdown } from "./index-B95qjrcZ.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function BlogPost() {
  const {
    slug
  } = Route.useParams();
  const [post, setPost] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    supabase.from("blog_posts").select("*").eq("slug", slug).eq("published", true).maybeSingle().then(({
      data
    }) => {
      setPost(data);
      setLoading(false);
    });
  }, [slug]);
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-2xl mx-auto p-12", children: "Loading…" });
  if (!post) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto p-12 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Post not found." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog", className: "text-primary", children: "Back to blog" })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "max-w-3xl mx-auto px-4 sm:px-6 py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "size-4" }),
      " Back to blog"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: post.cover_image || "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80", alt: post.title, className: "w-full aspect-[16/9] object-cover rounded-2xl mb-8" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl lg:text-5xl font-bold tracking-tight", children: post.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-3", children: new Date(post.created_at).toLocaleDateString() }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose prose-zinc max-w-none mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Markdown, { children: post.content }) })
  ] });
}
export {
  BlogPost as component
};
