"use client";

import { motion } from "framer-motion";

const socials = [
  { label: "GITHUB",   href: "https://github.com/sam" },
  { label: "LINKEDIN", href: "https://linkedin.com/in/sam" },
  { label: "TWITTER",  href: "https://twitter.com/sam" },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 py-8 font-mono">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">

          {/* Branding */}
          <div className="text-xs text-zinc-600">
            <span className="text-white font-bold">ANNAS</span>
            <span className="mx-2 text-zinc-700">//</span>
            CYBER_PORTFOLIO_2108
          </div>

          {/* Social links */}
          <div className="flex gap-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-widest text-zinc-600 hover:text-[#00f2ff] transition-colors duration-200"
              >
                [{s.label}]
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-[10px] text-zinc-700">
            &copy; 2108 // ALL_RIGHTS_RESERVED
          </div>
        </div>

        {/* Glowing bottom line */}
        <motion.div
          className="mt-6 h-px w-full"
          style={{ background: "linear-gradient(to right, transparent, #00f2ff22, #ff005522, transparent)" }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
    </footer>
  );
}
