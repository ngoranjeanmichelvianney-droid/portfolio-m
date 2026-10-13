"use client";
import { motion, useReducedMotion } from "framer-motion";

const PILLS = ["Sites web", "Applications", "SaaS"];

export default function Hero() {
  const reduce = useReducedMotion();
  const up = (d) => ({ initial: reduce ? false : { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { delay: d, duration: 0.8, ease: [0.22, 1, 0.36, 1] } });
  return (
    <section id="top" className="mx-auto flex min-h-[92svh] max-w-6xl flex-col justify-center px-5 pb-16 pt-32">
      <motion.h1 {...up(2.7)} className="max-w-5xl text-[clamp(2.5rem,8.5vw,6.5rem)] font-bold leading-[1.04] tracking-tight">
        Je développe des <span className="hl">expériences web</span> qui donnent vie à <span className="hl">vos idées</span>.
      </motion.h1>
      <motion.ul {...up(2.85)} className="mt-8 flex flex-wrap gap-3">
        {PILLS.map((p) => <li key={p} className="rounded-full border border-ink/20 px-5 py-2.5 text-lg">{p}</li>)}
      </motion.ul>
      <motion.p {...up(3)} className="mt-8 max-w-xl text-lg text-ink/70">
        Je conçois des sites web et des applications modernes pour transformer des besoins concrets en solutions numériques utiles.
      </motion.p>
      <motion.div {...up(3.15)} className="mt-10 flex flex-wrap gap-3">
        <a href="#contact" className="rounded-full bg-lime px-7 py-4 font-medium text-night transition hover:-translate-y-0.5 hover:brightness-110">Parlons de votre projet</a>
        <a href="#projet" className="rounded-full border border-ink/25 px-7 py-4 font-medium transition hover:-translate-y-0.5 hover:border-ink">Découvrir mon travail</a>
      </motion.div>
    </section>
  );
}