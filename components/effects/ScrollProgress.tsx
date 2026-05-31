"use client";
import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-gradient-to-r from-[#00f2ff] to-[#ff0055] origin-[0%]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
