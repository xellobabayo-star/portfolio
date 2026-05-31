"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function GlassCard({ children, className = "", delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay }}
      whileHover={{ 
        y: -5,
        borderColor: "#00f2ff",
        boxShadow: "0px 0px 25px rgba(0, 242, 255, 0.15)"
      }}
      className={`relative overflow-hidden rounded-md border border-zinc-800 bg-zinc-950/40 p-6 backdrop-blur-md transition-all duration-300 ${className}`}
    >
      {/* Aksen sudut dekoratif khas UI Sci-Fi */}
      <span className="absolute top-0 left-0 w-2 h-[1px] bg-[#00f2ff]" />
      <span className="absolute top-0 left-0 w-[1px] h-2 bg-[#00f2ff]" />
      <span className="absolute bottom-0 right-0 w-2 h-[1px] bg-[#00f2ff]" />
      <span className="absolute bottom-0 right-0 w-[1px] h-2 bg-[#00f2ff]" />
      
      {children}
    </motion.div>
  );
}
