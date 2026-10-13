"use client";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

export default function Ambient() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <>
      <motion.div aria-hidden style={{ scaleX }} className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-lime" />
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <motion.div className="absolute -right-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-lime/10 blur-[120px]"
          animate={reduce ? undefined : { x: [0, -80, 0], y: [0, 60, 0] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute -left-32 bottom-1/4 h-96 w-96 rounded-full bg-lime/[0.06] blur-[120px]"
          animate={reduce ? undefined : { x: [0, 70, 0], y: [0, -50, 0] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} />
      </div>
    </>
  );
}