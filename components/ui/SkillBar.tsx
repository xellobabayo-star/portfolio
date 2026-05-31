"use client";

import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  level: number;
  icon?: string;
}

export default function SkillBar({ name, level }: SkillBarProps) {
  return (
    <div className="w-full font-mono mb-6">
      <div className="flex justify-between text-sm mb-2">
        <span className="text-zinc-300 tracking-wide flex items-center gap-2">
          <span className="text-[#00f2ff]">&gt;</span> {name}
        </span>
        <span className="text-[#00f2ff]">{level}%</span>
      </div>
      
      {/* Track Bar */}
      <div className="h-2 w-full bg-zinc-900 border border-zinc-800 rounded-sm overflow-hidden p-[1px]">
        {/* Fill Bar Animasi */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-[#00f2ff] to-[#ff0055] shadow-[0_0_10px_rgba(0,242,255,0.5)] rounded-sm"
        />
      </div>
    </div>
  );
}
