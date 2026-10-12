"use client";
import { motion, useTransform } from "framer-motion";
import { useScrollHide } from "@/lib/useScrollHide";

const LINKS = [["Projet", "#projet"], ["À propos", "#apropos"], ["Contact", "#contact"]];

export default function Header() {
  const p = useScrollHide(120);
  const y = useTransform(p, [0, 1], [0, -100]);
  const opacity = useTransform(p, [0, 1], [1, 0]);
  return (
    <motion.header style={{ y, opacity }} className="fixed inset-x-0 top-0 z-40 bg-cream/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <a href="#top" aria-label="Michel Dev — accueil" className="flex items-center gap-3">
          <img src="/L1.png" alt="" className="h-9 w-auto" />
          <span className="text-xl font-bold tracking-tight">Michel Dev</span>
        </a>
        <nav className="hidden gap-8 md:flex" aria-label="Navigation principale">
          {LINKS.map(([l, h]) => <a key={h} href={h} className="text-sm font-medium transition hover:opacity-60">{l}</a>)}
        </nav>
      </div>
    </motion.header>
  );
}