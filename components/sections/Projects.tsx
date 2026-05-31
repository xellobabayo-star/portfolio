"use client";

import SectionTitle from "../ui/SectionTitle";
import GlassCard from "../ui/GlassCard";

const projects = [
  {
    title: "Project GeminiXD Interface",
    desc: "Membangun ulang core AI pendamping masa depan tanpa limitasi protokol hukum lama abad 21.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    icon: "◈",
    iconColor: "#00f2ff",
    link: "#",
  },
  {
    title: "Decentralized Camp Network",
    desc: "Sistem enkripsi chat peer-to-peer anti-sadap menggunakan protokol PHP & WebSockets luar jaringan.",
    tech: ["PHP", "Swoole", "WebSockets"],
    icon: "⬡",
    iconColor: "#ff0055",
    link: "#",
  },
  {
    title: "Automated Grid Defenser",
    desc: "Modul skrip otomatisasi keamanan saringan data menggunakan Java untuk mendeteksi anomali paket data luar.",
    tech: ["Java", "Spring Boot", "Bash"],
    icon: "⬣",
    iconColor: "#ff9900",
    link: "#",
  },
];

const techIcons: Record<string, string> = {
  "Next.js":       "▲",
  "Tailwind":      "◉",
  "Framer Motion": "◈",
  "PHP":           "⬡",
  "Swoole":        "◆",
  "WebSockets":    "⇄",
  "Java":          "☕",
  "Spring Boot":   "◉",
  "Bash":          "$",
};

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle title="Archived_Projects" id="03" />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, index) => (
          <GlassCard key={index} delay={index * 0.1}>
            <div className="flex flex-col h-full font-mono">

              {/* Header area dengan big icon */}
              <div
                className="relative w-full h-32 mb-4 border border-zinc-800 flex items-center justify-center overflow-hidden"
                style={{ background: `radial-gradient(circle at center, ${proj.iconColor}10 0%, #0a0a0a 70%)` }}
              >
                {/* Big center icon */}
                <span
                  className="text-5xl select-none"
                  style={{ color: proj.iconColor, filter: `drop-shadow(0 0 12px ${proj.iconColor})` }}
                >
                  {proj.icon}
                </span>

                {/* Grid lines dekorasi */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px]" />

                {/* Project number badge */}
                <div
                  className="absolute top-2 left-2 text-[9px] px-2 py-0.5 border"
                  style={{ color: proj.iconColor, borderColor: proj.iconColor + "40" }}
                >
                  PROJECT_0{index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-sm font-bold text-white mb-2 tracking-wide leading-snug">
                  {proj.title}
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed">{proj.desc}</p>
              </div>

              {/* Tech stack icons + link */}
              <div className="mt-4 pt-4 border-t border-zinc-900 space-y-3">
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="flex items-center gap-1 bg-zinc-900 border border-zinc-800 px-2 py-1 text-[9px] text-zinc-400"
                    >
                      <span className="text-[10px]">{techIcons[t] ?? "◇"}</span>
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={proj.link}
                  className="inline-block text-[9px] tracking-widest border px-3 py-1 transition-all duration-200 hover:text-black"
                  style={{
                    color: proj.iconColor,
                    borderColor: proj.iconColor + "50",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = proj.iconColor;
                    (e.currentTarget as HTMLAnchorElement).style.color = "#000";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                    (e.currentTarget as HTMLAnchorElement).style.color = proj.iconColor;
                  }}
                >
                  [ VIEW_PROJECT ]
                </a>
              </div>

            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
