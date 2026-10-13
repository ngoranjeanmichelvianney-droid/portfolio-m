"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import Tarifs from "./Tarifs";
import { PHOTOS } from "@/lib/config";

export default function Gallery() {
  const track = useRef(null);
  const [open, setOpen] = useState(null);
  const slide = (dir) => track.current?.scrollBy({ left: dir * 300, behavior: "smooth" });

  useEffect(() => {
    if (open === null) return;
    const k = (e) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open]);

  if (!PHOTOS.length) return null;
  const round = "flex h-12 w-12 items-center justify-center rounded-full border border-white/25 text-lg transition hover:border-lime hover:text-lime";

  return (
    <section id="photos" aria-label="Photos" className="mx-3 mt-12 rounded-[2.5rem] bg-night py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <Reveal className="px-5">
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">En <span className="hl">images</span></h2>
        </Reveal>

        <div ref={track} className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {PHOTOS.map((p, i) => (
            <button key={p.src} type="button" onClick={() => setOpen(i)} aria-label={`Agrandir : ${p.alt}`}
              className="group relative aspect-[3/4] w-[72vw] max-w-[320px] shrink-0 snap-center overflow-hidden rounded-3xl bg-white/5">
              <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <span aria-hidden className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-cream text-ink">↗</span>
            </button>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-5 px-5">
          <div className="flex gap-3">
            <button type="button" onClick={() => slide(-1)} aria-label="Photo précédente" className={round}>←</button>
            <button type="button" onClick={() => slide(1)} aria-label="Photo suivante" className={round}>→</button>
          </div>
          <Tarifs />
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(null)}>
            <img src={PHOTOS[open].src} alt={PHOTOS[open].alt} className="max-h-full max-w-full rounded-2xl object-contain" />
            <button type="button" onClick={() => setOpen(null)} aria-label="Fermer"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-lg text-white">✕</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}