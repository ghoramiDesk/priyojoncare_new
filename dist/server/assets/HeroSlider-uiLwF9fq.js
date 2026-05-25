import { U as reactExports, K as jsxRuntimeExports } from "./worker-entry-Be3-PIiG.js";
function HeroSlider({ images, interval = 5e3, overlay = 0, className = "" }) {
  const [index, setIndex] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (images.length < 2) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % images.length), interval);
    return () => clearInterval(t);
  }, [images.length, interval]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `absolute inset-0 -z-0 overflow-hidden ${className}`, "aria-hidden": "true", children: [
    images.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 transition-opacity duration-[1500ms] ease-in-out bg-cover bg-center",
        style: {
          backgroundImage: `url(${src})`,
          opacity: i === index ? 1 : 0
        }
      },
      src
    )),
    overlay > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 bg-gradient-to-br from-background via-background/80 to-accent/40",
        style: { opacity: overlay / 100 }
      }
    )
  ] });
}
const HERO_IMAGES = {
  home: [
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581579438747-104c53e7a8f3?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1920&q=80&auto=format&fit=crop"
  ],
  homeCare: [
    "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581579438747-104c53e7a8f3?w=1920&q=80&auto=format&fit=crop"
  ],
  service: [
    "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1920&q=80&auto=format&fit=crop"
  ],
  caregivers: [
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1920&q=80&auto=format&fit=crop"
  ],
  residences: [
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80&auto=format&fit=crop"
  ],
  careHomes: [
    "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1920&q=80&auto=format&fit=crop"
  ],
  memoryCare: [
    "https://images.unsplash.com/photo-1517948433651-2a6d9d2b1b81?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559131397-f94da358f7ca?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=1920&q=80&auto=format&fit=crop"
  ],
  videoConsult: [
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=80&auto=format&fit=crop"
  ],
  about: [
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1920&q=80&auto=format&fit=crop"
  ],
  contact: [
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80&auto=format&fit=crop"
  ],
  blog: [
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=1920&q=80&auto=format&fit=crop"
  ],
  faq: [
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80&auto=format&fit=crop"
  ],
  careSuggest: [
    "https://images.unsplash.com/photo-1551076805-e1869033e561?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&q=80&auto=format&fit=crop"
  ]
};
export {
  HERO_IMAGES as H,
  HeroSlider as a
};
