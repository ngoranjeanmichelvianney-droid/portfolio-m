"use client";
import { motion, useReducedMotion } from "framer-motion";
import { SOCIALS, WHATSAPP_NUMBER } from "@/lib/config";
import { ICONS, LABELS } from "./SocialIcons";

export default function Footer() {
  const reduce = useReducedMotion();
  const links = { ...(WHATSAPP_NUMBER ? { whatsapp: `https://wa.me/${WHATSAPP_NUMBER}` } : {}), ...SOCIALS };
  const list = Object.keys(LABELS).filter((k) => links[k]);
  const btn = "group flex h-16 w-16 items-center justify-center rounded-full border border-white/20 transition duration-300 hover:border-lime";

  const appear = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" },
    transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <footer className="bg-night px-5 pb-32 pt-20 text-white md:pb-12">
      <div className="mx-auto max-w-6xl">
        <ul aria-label="Réseaux sociaux" className="flex flex-wrap gap-4">
          {list.map((k, i) => (
            <motion.li key={k} {...appear(i * 0.08)} whileHover={reduce ? undefined : { y: -6, scale: 1.08 }} whileTap={{ scale: 0.92 }}>
              <a href={links[k]} target="_blank" rel="noopener noreferrer" aria-label={LABELS[k]} className={btn}>
                <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6 fill-white transition group-hover:fill-lime"><path d={ICONS[k].path} /></svg>
              </a>
            </motion.li>
          ))}
          <motion.li {...appear(list.length * 0.08)} whileHover={reduce ? undefined : { y: -6, scale: 1.08 }} whileTap={{ scale: 0.92 }}>
            <a href="#top" aria-label="Retour en haut" className={`${btn} text-2xl hover:text-lime`}>
              <motion.span aria-hidden animate={reduce ? undefined : { y: [0, -4, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>↑</motion.span>
            </a>
          </motion.li>
        </ul>

        <motion.div {...appear(0.2)} className="mt-16 flex items-center gap-4">
          <motion.img src="/L1.png" alt="" whileHover={reduce ? undefined : { rotate: -8, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }} className="h-12 w-auto rounded-xl" />
          <span className="text-2xl font-bold tracking-tight">Michel Dev</span>
        </motion.div>

        <motion.p {...appear(0.3)} className="mt-6 border-t border-white/15 pt-6 text-sm text-white/50">
          © 2026 Michel Dev — Tous droits réservés
        </motion.p>
      </div>
    </footer>
  );
}