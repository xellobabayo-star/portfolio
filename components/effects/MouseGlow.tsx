"use client";
import { motion } from "framer-motion";
import useMousePosition from "@/hooks/useMousePosition";

export default function MouseGlow() {
  const { x, y } = useMousePosition();

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,242,255,0.04)_0%,rgba(0,0,0,0)_70%)]"
        animate={{ x, y }}
        transition={{ type: "spring", stiffness: 150, damping: 25 }}
      />
    </div>
  );
}
