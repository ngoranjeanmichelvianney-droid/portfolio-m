import { useEffect } from "react";
import { useMotionValue, useSpring } from "framer-motion";

// Renvoie une valeur de 0 (visible) à 1 (cachée) qui suit le défilement.
// "range" = nombre de pixels à défiler pour cacher complètement l'élément.
export function useScrollHide(range = 120) {
  const p = useMotionValue(0);
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const diff = y - last;
      last = y;
      if (y <= 0) { p.set(0); return; }
      p.set(Math.min(1, Math.max(0, p.get() + diff / range)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [p, range]);
  return useSpring(p, { stiffness: 220, damping: 32, mass: 0.5 }); // adoucit le mouvement
}