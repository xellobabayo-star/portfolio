"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const menuItems = [
  { name: "// About",   href: "#about" },
  { name: "// Skills",  href: "#skills" },
  { name: "// Projects", href: "#projects" },
  { name: "// XP",      href: "#experience" },
  { name: "// Certs",   href: "#certifications" },
  { name: "// Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 3.2 }}
      className="fixed top-0 left-0 right-0 z-40 border-b border-zinc-900/50 bg-zinc-950/60 backdrop-blur-md select-none"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="#"
          className="font-mono text-sm font-bold tracking-widest text-white hover:text-[#00f2ff] transition-colors group"
        >
          SAM<span className="text-[#ff0055] group-hover:animate-ping">.DEV</span>
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-6">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="font-mono text-[11px] tracking-wider text-zinc-400 hover:text-[#00f2ff] transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Online indicator */}
        <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-500">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00ff00] animate-ping" />
          <span className="hidden sm:inline">ONLINE_NODE</span>
        </div>
      </div>
    </motion.header>
  );
}
