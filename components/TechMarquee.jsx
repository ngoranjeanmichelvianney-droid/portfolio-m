"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from "framer-motion";
import { siReact, siNextdotjs, siJavascript, siTailwindcss, siSupabase, siFirebase, siGit, siGithub } from "simple-icons";

const TECHS = [siReact, siNextdotjs, siJavascript, siTailwindcss, siSupabase, siFirebase, siGit, siGithub];

// Le groupe est répété 4 fois : la ligne reste pleine même sur un grand écran, sans trou au moment de la boucle.
const COPIES = [0, 1, 2, 3];
const SPEED = 70; // pixels par seconde

export default function TechMarquee() {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const first = useRef(null);
  const width = useRef(0);
  const dir = useRef(-1); // -1 = vers la gauche, 1 = vers la droite
  const paused = useRef(false);

  useEffect(() => {
    const measure = () => { width.current = first.current?.offsetWidth || 0; };
    measure();

    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastY) dir.current = -1;
      else if (y < lastY) dir.current = 1;
      lastY = y;
    };

    window.addEventListener("resize", measure);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useAnimationFrame((_, delta) => {
    const w = width.current;
    if (!w || paused.current) return;
    const speed = reduce ? SPEED / 4 : SPEED;
    let next = x.get() + dir.current * speed * (delta / 1000);
    if (next <= -w) next += w;
    if (next > 0) next -= w;
    x.set(next);
  });

  return (
    <section aria-label="Technologies maîtrisées" className="border-y border-ink/10 py-12">
      <div
        className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]"
        onMouseEnter={() => { paused.current = true; }}
        onMouseLeave={() => { paused.current = false; }}
      >
        <motion.div className="flex w-max" style={{ x }}>
          {COPIES.map((c) => (
            <ul key={c} ref={c === 0 ? first : null} className="flex shrink-0 items-center" aria-hidden={c > 0 || undefined}>
              {TECHS.map((t) => (
                <li key={t.slug} title={t.title} className="group mx-6 flex w-28 shrink-0 flex-col items-center gap-3 sm:mx-9 sm:w-32">
                  <svg viewBox="0 0 24 24" role="img" aria-label={c > 0 ? undefined : t.title}
                    style={{ fill: ["000000", "181717"].includes(t.hex) ? "#F4F4F0" : `#${t.hex}` }}
                    className="h-10 w-10 transition duration-300 group-hover:scale-110 sm:h-12 sm:w-12">
                    <path d={t.path} />
                  </svg>
                  <span className="text-xs text-ink/55 transition group-hover:text-ink">{t.title}</span>
                </li>
              ))}
            </ul>
          ))}
        </motion.div>
      </div>
    </section>
  );
}