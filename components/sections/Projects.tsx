"use client";

import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";
import GlassCard from "../ui/GlassCard";

const projects = [
  {
    title: "Project GeminiXD Interface",
    desc: "Membangun ulang core AI pendamping masa depan tanpa limitasi protokol hukum lama abad 21.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    image: "/projects/project1.jpg",
    icon: null,
    iconColor: "#00f2ff",
    link: "#",
  },
  {
    title: "Decentralized Camp Network",
    desc: "Sistem enkripsi chat peer-to-peer anti-sadap menggunakan protokol PHP & WebSockets luar jaringan.",
    tech: ["PHP", "Swoole", "WebSockets"],
    image: "/projects/project2.jpg",
    icon: null,
    iconColor: "#ff0055",
    link: "#",
  },
  {
    title: "Automated Grid Defenser",
    desc: "Modul skrip otomatisasi keamanan saringan data menggunakan Java untuk mendeteksi anomali paket data luar.",
    tech: ["Java", "Spring Boot", "Bash"],
    image: null,
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

              {/* Thumbnail: foto kalau ada, icon kalau tidak */}
              <div
                className="relative w-full h-36 mb-4 border border-zinc-800 overflow-hidden flex items-center justify-center"
                style={
                  !proj.image
                    ? { background: `radial-gradient(circle at center, ${proj.iconColor}15 0%, #0a0a0a 70%)` }
                    : {}
                }
              >
                {proj.image ? (
                  <>
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                    />
                    {/* Gradient overlay bawah */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent pointer-events-none" />
                  </>
                ) : (
                  <>
                    <span
                      className="text-5xl select-none"
                      style={{ color: proj.iconColor, filter: `drop-shadow(0 0 12px ${proj.iconColor})` }}
                    >
                      {proj.icon}
                    </span>
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:20px_20px]" />
                  </>
                )}

                {/* Badge nomor project */}
                <div
                  className="absolute top-2 left-2 text-[9px] px-2 py-0.5 border bg-[#0a0a0a]/70"
                  style={{ color: proj.iconColor, borderColor: proj.iconColor + "40" }}
                >
                  PROJECT_0{index + 1}
                </div>
              </div>

              {/* Judul & deskripsi */}
              <div className="flex-1">
                <h3 className="text-sm font-bold text-white mb-2 tracking-wide leading-snug">
                  {proj.title}
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed">{proj.desc}</p>
              </div>

              {/* Tech tags + link */}
              <div className="mt-4 pt-4 border-t border-zinc-900 space-y-3">
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="flex items-center gap-1 bg-zinc-900 border border-zinc-800 px-2 py-1 text-[9px] text-zinc-400"
                    >
                      <span>{techIcons[t] ?? "◇"}</span>
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={proj.link}
                  className="inline-block text-[9px] tracking-widest border px-3 py-1 transition-all duration-200"
                  style={{ color: proj.iconColor, borderColor: proj.iconColor + "50" }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = proj.iconColor;
                    el.style.color = "#000";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "transparent";
                    el.style.color = proj.iconColor;
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
