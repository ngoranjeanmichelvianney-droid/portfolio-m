"use client";
import { useEffect, useState } from "react";
import { motion, useTransform } from "framer-motion";
import { useScrollHide } from "@/lib/useScrollHide";

const ITEMS = [["projet", "Projet"], ["apropos", "À propos"], ["contact", "WhatsApp"]];

export default function BottomNav() {
  const [active, setActive] = useState("projet");
  const p = useScrollHide(160);
  const y = useTransform(p, [0, 1], [0, 120]);
  const opacity = useTransform(p, [0, 1], [1, 0]);

  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -45% 0px" });
    ITEMS.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  return (
    <motion.nav aria-label="Navigation mobile" style={{ y, opacity }}
      className="fixed inset-x-3 bottom-3 z-50 flex justify-around rounded-full bg-night border border-white/10 p-2 shadow-2xl md:hidden">
      {ITEMS.map(([id, label]) => (
        <a key={id} href={`#${id}`} className={`relative rounded-full px-5 py-3 text-sm font-medium ${active === id ? "text-night" : "text-white/70"}`}>
          {active === id && <motion.span layoutId="pill" className="absolute inset-0 rounded-full bg-lime" transition={{ type: "spring", stiffness: 400, damping: 32 }} />}
          <span className="relative">{label}</span>
        </a>
      ))}
    </motion.nav>
  );
}