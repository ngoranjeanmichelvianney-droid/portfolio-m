"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { WHATSAPP_NUMBER, TARIFS_TEXT } from "@/lib/config";

export default function Tarifs() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const k = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open]);

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour Michel, je voudrais connaître vos tarifs.")}`;

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}
        className="flex items-center gap-4 rounded-full bg-lime py-2 pl-6 pr-2 font-medium text-night transition hover:-translate-y-0.5">
        Tarifs
        <span aria-hidden className="flex h-11 w-11 items-center justify-center rounded-full bg-night text-lime">↗</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-[90] flex items-end justify-center bg-black/60"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)}>
            <motion.div role="dialog" aria-modal="true" aria-label="Tarifs"
              className="w-full max-w-xl rounded-t-[2rem] bg-cream p-6 pb-10 text-ink"
              initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              onClick={(e) => e.stopPropagation()}>
              <div aria-hidden className="mx-auto mb-5 h-1.5 w-12 rounded-full bg-ink/20" />
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">Tarifs</h3>
                <button type="button" onClick={() => setOpen(false)} aria-label="Fermer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-ink/10 text-lg">✕</button>
              </div>
              <p className="mt-6 text-3xl font-bold tracking-tight">{TARIFS_TEXT}</p>
              <a href={WHATSAPP_NUMBER ? href : undefined} target="_blank" rel="noopener noreferrer" aria-disabled={!WHATSAPP_NUMBER}
                className={`mt-8 flex items-center justify-between rounded-full py-2 pl-7 pr-2 font-medium ${WHATSAPP_NUMBER ? "bg-lime text-night" : "pointer-events-none bg-ink/15 text-ink/45"}`}>
                M'écrire
                <span aria-hidden className="flex h-11 w-11 items-center justify-center rounded-full bg-night text-lime">↗</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}