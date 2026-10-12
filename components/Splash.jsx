"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAME = "Michel Dev";
const TOTAL = 4200; // durée totale en ms
const ONCE_PER_SESSION = false; // mets true quand tu es satisfait

export default function Splash() {
  const [show, setShow] = useState(true);
  const [n, setN] = useState(0);
  const [dot, setDot] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let seen = false;
    try { seen = ONCE_PER_SESSION && sessionStorage.getItem("md-splash") === "1"; } catch {}
    if (seen || reduce) { setShow(false); return; }

    const timers = [];
    let iv;
    timers.push(setTimeout(() => {
      let i = 0;
      iv = setInterval(() => {
        i += 1;
        setN(i);
        if (i >= NAME.length) {
          clearInterval(iv);
          timers.push(setTimeout(() => setDot(true), 350));
        }
      }, 120);
    }, 1200));
    timers.push(setTimeout(() => {
      try { sessionStorage.setItem("md-splash", "1"); } catch {}
      setShow(false);
    }, TOTAL));
    return () => { timers.forEach(clearTimeout); clearInterval(iv); };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div key="splash" role="presentation"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-cream px-5"
          exit={{ opacity: 0, scale: 1.04 }} transition={{ duration: 0.6, ease: "easeInOut" }}>

          {/* halo vert qui s'élargit derrière le logo */}
          <motion.div aria-hidden className="absolute h-80 w-80 rounded-full bg-lime/40 blur-[90px]"
            initial={{ opacity: 0, scale: 0.3 }} animate={{ opacity: 1, scale: 1.3 }} transition={{ duration: 2.2, ease: "easeOut" }} />

          <div className="relative flex items-center gap-4 sm:gap-6">
            {/* logo : tuile noire qui tourne et rebondit en arrivant */}
            <motion.div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-ink shadow-xl sm:h-20 sm:w-20"
              initial={{ opacity: 0, scale: 0, rotate: -120 }} animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 160, damping: 14, mass: 0.9 }}>
              <img src="/L1.png" alt="Michel Dev" className="h-8 w-auto sm:h-12" />
            </motion.div>

            {/* nom : chaque lettre monte, se précise et rebondit */}
            <p aria-label={NAME} className="relative isolate text-4xl font-bold tracking-tight text-ink sm:text-6xl">
              {NAME.split("").map((c, i) => (
                <motion.span key={i} aria-hidden className="inline-block whitespace-pre"
                  initial={{ opacity: 0, y: 28, filter: "blur(10px)", rotate: 6 }}
                  animate={i < n ? { opacity: 1, y: 0, filter: "blur(0px)", rotate: 0 } : { opacity: 0, y: 28, filter: "blur(10px)", rotate: 6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 16 }}>
                  {c === "i" ? (
                    <span className="relative inline-block">
                      ı
                      {/* le point tombe d'en haut et rebondit */}
                      {dot && (
                        <motion.span className="absolute left-1/2 top-[0.12em] h-[0.15em] w-[0.15em] -translate-x-1/2 rounded-full bg-ink"
                          initial={{ y: -90, opacity: 0, scale: 0.6 }} animate={{ y: 0, opacity: 1, scale: 1 }}
                          transition={{ type: "spring", stiffness: 300, damping: 9 }} />
                      )}
                    </span>
                  ) : c}
                </motion.span>
              ))}
              {/* trait vert qui se passe sous le nom, comme un surligneur */}
              <motion.span aria-hidden className="absolute inset-x-0 bottom-[0.02em] -z-10 h-[0.32em] origin-left bg-lime"
                initial={{ scaleX: 0 }} animate={{ scaleX: dot ? 1 : 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} />
            </p>
          </div>

          {/* barre de chargement */}
          <div aria-hidden className="absolute inset-x-0 bottom-0 h-1 bg-ink/10">
            <motion.div className="h-full bg-ink" initial={{ width: "0%" }} animate={{ width: "100%" }}
              transition={{ duration: TOTAL / 1000, ease: "linear" }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}