import { U as reactExports, K as jsxRuntimeExports } from "./worker-entry-Be3-PIiG.js";
import { a8 as supabase, L as Link, x as blogLinkProps } from "./router-C3WBn37j.js";
import { a as HeroSlider, H as HERO_IMAGES } from "./HeroSlider-uiLwF9fq.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function BlogIndex() {
  const [posts, setPosts] = reactExports.useState([]);
  reactExports.useEffect(() => {
    supabase.from("blog_posts").select("id,slug,title,excerpt,cover_image,created_at").eq("published", true).order("created_at", {
      ascending: false
    }).then(({
      data
    }) => setPosts(data ?? []));
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-gradient-to-br from-accent via-background to-surface", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSlider, { images: HERO_IMAGES.blog }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 lg:py-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl lg:text-5xl font-bold tracking-tight", children: "Health & Care Blog" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-4 text-lg", children: "Practical, culturally rooted guidance for families caring for elders." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 py-12 lg:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-6", children: posts.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { ...blogLinkProps(p.slug), className: "group rounded-2xl border border-border bg-surface overflow-hidden hover:shadow-card transition-shadow", children: [
      p.cover_image && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.cover_image || "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80", alt: p.title, loading: "lazy", className: "w-full aspect-[16/9] object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-semibold group-hover:text-primary transition-colors", children: p.title }),
        p.excerpt && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-2 leading-relaxed", children: p.excerpt }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-3", children: new Date(p.created_at).toLocaleDateString() })
      ] })
    ] }, p.id)) }) })
  ] });
}
export {
  BlogIndex as component
};
