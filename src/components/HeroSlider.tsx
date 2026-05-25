import { useEffect, useState } from "react";
import fallBackSlide from "@/assets/priyo_fall_back.jpeg"; // adjust path

type Props = {
  images: string[];
  interval?: number;
  /** Overlay opacity 0-100, default 0 (full image visible). */
  overlay?: number;
  className?: string;
  fallbackImage?: string;
};

/**
 * Auto-cycling background image slider for hero sections.
 * Place inside a `relative` parent and put hero content above it (z-10).
 */

export function HeroSlider({
  images,
  interval = 5000,
  overlay = 0,
  className = "",
  fallbackImage = fallBackSlide,
}: Props) {
  const validImages = images && images.length > 0 ? images : [fallbackImage];

  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>(new Array(validImages.length).fill(false));

  useEffect(() => {
    // preload all images
    validImages.forEach((src, i) => {
      const img = new Image();
      img.src = src;

      img.onload = () => {
        setLoaded((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      };

      img.onerror = () => {
        setLoaded((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      };
    });
  }, [validImages]);

  useEffect(() => {
    if (validImages.length < 2) return;

    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % validImages.length);
    }, interval);

    return () => clearInterval(t);
  }, [validImages.length, interval]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {validImages.map((src, i) => (
        <div
          key={`${src}-${i}`}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${src || fallbackImage})`,
            opacity: i === index && loaded[i] ? 1 : 0,
            willChange: "opacity",
          }}
        />
      ))}

      {overlay > 0 && (
        <div
          className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-accent/40 pointer-events-none"
          style={{ opacity: overlay / 100 }}
        />
      )}
    </div>
  );
}

// Curated, royalty-free image sets per page theme (Unsplash CDN).
export const HERO_IMAGES = {
  home: [
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581579438747-104c53e7a8f3?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1920&q=80&auto=format&fit=crop",
  ],
  homeCare: [
    "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581579438747-104c53e7a8f3?w=1920&q=80&auto=format&fit=crop",
  ],
  service: [
    "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1920&q=80&auto=format&fit=crop",
  ],
  caregivers: [
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1920&q=80&auto=format&fit=crop",
  ],
  residences: [
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80&auto=format&fit=crop",
  ],
  careHomes: [
    "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1920&q=80&auto=format&fit=crop",
  ],
  memoryCare: [
    "https://images.unsplash.com/photo-1517948433651-2a6d9d2b1b81?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559131397-f94da358f7ca?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=1920&q=80&auto=format&fit=crop",
  ],
  videoConsult: [
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=80&auto=format&fit=crop",
  ],
  about: [
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1920&q=80&auto=format&fit=crop",
  ],
  contact: [
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80&auto=format&fit=crop",
  ],
  blog: [
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=1920&q=80&auto=format&fit=crop",
  ],
  faq: [
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80&auto=format&fit=crop",
  ],
  careSuggest: [
    "https://images.unsplash.com/photo-1551076805-e1869033e561?w=1920&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&q=80&auto=format&fit=crop",
  ],
} satisfies Record<string, string[]>;
