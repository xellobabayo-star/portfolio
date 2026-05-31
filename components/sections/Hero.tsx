"use client";

import { motion } from "framer-motion";
import AnimatedText from "../ui/AnimatedText";

const stats = [
  { label: "MISSIONS_COMPLETE", value: "47+" },
  { label: "LINES_OF_CODE", value: "100K+" },
  { label: "SYSTEMS_RESTORED", value: "12" },
  { label: "THREAT_LEVEL", value: "ZERO" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 select-none overflow-hidden">
      {/* Animated scan line sweep */}
      <motion.div
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00f2ff]/30 to-transparent pointer-events-none z-10"
        animate={{ y: ["-5vh", "110vh"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">

        {/* System breadcrumb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 0.6 }}
          className="font-mono text-[10px] text-zinc-700 mb-6 flex flex-wrap gap-4"
        >
          <span>ROOT@NEO_JAKARTA_2108</span>
          <span className="text-zinc-600">~/</span>
          <span className="text-[#00f2ff]">admin/sam</span>
          <span className="text-zinc-600">$</span>
          <span className="text-zinc-500 animate-pulse">▮</span>
        </motion.div>

        {/* Main Name — glitch on hover */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.6, duration: 0.7 }}
          className="mb-2"
        >
          <p className="font-mono text-xs text-zinc-600 mb-3">// IDENTITY_LOCK: CONFIRMED</p>
          <h1
            className="text-7xl md:text-[10rem] font-black tracking-tighter text-white leading-none group cursor-default"
            onMouseEnter={(e) => {
              e.currentTarget.classList.add("animate-cyber-glitch");
              setTimeout(() => e.currentTarget.classList.remove("animate-cyber-glitch"), 400);
            }}
          >
            SAM
            <span className="text-[#00f2ff] text-4xl md:text-6xl font-mono font-light ml-3 align-middle tracking-wider">
              .DEV
            </span>
          </h1>
        </motion.div>

        {/* Subtitle typewriter */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 3.9, duration: 0.5 }}
          className="font-mono text-sm md:text-base text-zinc-400 mb-10 flex items-center gap-3"
        >
          <span className="text-[#ff0055] text-lg">›</span>
          <AnimatedText
            text="FULL-STACK DEV // SYSTEM ARCHITECT // DIGITAL SURVIVOR"
            delay={1}
          />
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.2, duration: 0.5 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              whileHover={{ borderColor: "#00f2ff", boxShadow: "0 0 12px rgba(0,242,255,0.2)" }}
              className="border border-zinc-800 bg-zinc-950/70 px-4 py-2.5 font-mono transition-all duration-300"
            >
              <div className="text-[9px] text-zinc-600 mb-1 tracking-widest">{s.label}</div>
              <div className="text-[#00f2ff] font-bold text-sm">{s.value}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.6, duration: 0.5 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="font-mono text-xs border border-[#00f2ff] text-[#00f2ff] px-7 py-3 uppercase tracking-widest transition-all duration-300 hover:bg-[#00f2ff] hover:text-black shadow-[0_0_15px_rgba(0,242,255,0.1)] hover:shadow-[0_0_30px_rgba(0,242,255,0.3)]"
          >
            [ VIEW_ARCHIVE ]
          </a>
          <a
            href="#contact"
            className="font-mono text-xs border border-zinc-700 text-zinc-400 px-7 py-3 uppercase tracking-widest transition-all duration-300 hover:border-[#ff0055] hover:text-[#ff0055]"
          >
            [ OPEN_CHANNEL ]
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5.2 }}
          className="mt-20 font-mono text-[10px] text-zinc-700 flex items-center gap-2"
        >
          <motion.span animate={{ y: [0, 5, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
            ▼
          </motion.span>
          SCROLL_TO_EXPLORE
        </motion.div>
      </div>
    </section>
  );
}
