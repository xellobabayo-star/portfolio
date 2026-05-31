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
    link: "#",
  },
  {
    title: "Decentralized Camp Network",
    desc: "Sistem enkripsi chat peer-to-peer anti-sadap menggunakan protokol PHP & WebSockets luar jaringan.",
    tech: ["PHP", "Swoole", "WebSockets"],
    image: "/projects/project2.jpg",
    link: "#",
  },
  {
    title: "Automated Grid Defenser",
    desc: "Modul skrip otomatisasi keamanan saringan data menggunakan Java untuk mendeteksi anomali paket data luar.",
    tech: ["Java", "Spring Boot", "Bash"],
    image: "/projects/project3.jpg",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle title="Archived_Projects" id="03" />
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, index) => (
          <GlassCard key={index} delay={index * 0.1}>
            <div className="flex flex-col h-full justify-between font-mono">

              {/* Thumbnail project */}
              <div className="relative w-full h-36 mb-4 overflow-hidden border border-zinc-800 bg-zinc-900">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
                {/* Overlay neon scanline */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-2 left-2 text-[9px] text-[#00f2ff] bg-[#0a0a0a]/70 px-2 py-0.5 border border-[#00f2ff]/30">
                  PROJECT_0{index + 1}
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-sm font-bold text-white mb-2 tracking-wide">{proj.title}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed mb-4">{proj.desc}</p>
              </div>

              {/* Tech tags + link */}
              <div className="pt-4 border-t border-zinc-900 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((t, idx) => (
                    <span key={idx} className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 text-[9px] text-zinc-400">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={proj.link}
                  className="inline-block text-[9px] tracking-widest text-[#00f2ff] border border-[#00f2ff]/30 px-3 py-1 hover:bg-[#00f2ff] hover:text-black transition-all duration-200"
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
