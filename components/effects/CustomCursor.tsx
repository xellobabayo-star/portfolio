"use client";
import { motion } from "framer-motion";
import useMousePosition from "@/hooks/useMousePosition";

export default function CustomCursor() {
  const { x, y } = useMousePosition();

  return (
    <div className="pointer-events-none fixed inset-0 z-50 hidden md:block">
      {/* Titik Inti Kursor */}
      <motion.div
        className="fixed h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00f2ff]"
        animate={{ x, y }}
        transition={{ type: "spring", stiffness: 1000, damping: 50 }}
      />
      {/* Kotak Bidik Luar */}
      <motion.div
        className="fixed h-6 w-6 -translate-x-1/2 -translate-y-1/2 border border-[#ff0055]/50"
        animate={{ x, y }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <span className="absolute top-0 left-0 h-1 w-1 bg-[#00f2ff]" />
        <span className="absolute bottom-0 right-0 h-1 w-1 bg-[#00f2ff]" />
      </motion.div>
    </div>
  );
}
