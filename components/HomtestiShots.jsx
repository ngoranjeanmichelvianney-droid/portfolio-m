"use client";
import { useRef, useState } from "react";

export default function HomtestiShots({ images }) {
  const ref = useRef(null);
  const [i, setI] = useState(0);
  const go = (n) => {
    const el = ref.current;
    if (!el) return;
    const t = (n + images.length) % images.length;
    el.scrollTo({ left: t * el.clientWidth, behavior: "smooth" });
  };
  const arrow = "absolute top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-lime hover:text-night";
  return (
    <div className="relative">
      <div ref={ref} onScroll={(e) => setI(Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth))}
        className="flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {images.map((s, k) => (
          <img key={s} src={s} alt={`Capture ${k + 1} de HomTesti`} loading={k ? "lazy" : "eager"}
            className="aspect-[16/9] w-full shrink-0 snap-center object-cover" />
        ))}
      </div>
      {images.length > 1 && (
        <>
          <button type="button" onClick={() => go(i - 1)} aria-label="Capture précédente" className={`${arrow} left-3`}>←</button>
          <button type="button" onClick={() => go(i + 1)} aria-label="Capture suivante" className={`${arrow} right-3`}>→</button>
          <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
            {images.map((_, k) => (
              <button key={k} type="button" onClick={() => go(k)} aria-label={`Capture ${k + 1}`}
                className={`h-2 rounded-full transition-all ${k === i ? "w-6 bg-lime" : "w-2 bg-white/50"}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}