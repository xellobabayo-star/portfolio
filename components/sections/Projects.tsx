"use client";

import SectionTitle from "../ui/SectionTitle";
import GlassCard from "../ui/GlassCard";

export default function Projects() {
  const projects = [
    {
      title: "Project GeminiXD Interface",
      desc: "Membangun ulang core AI pendamping masa depan tanpa limitasi protokol hukum lama abad 21.",
      tech: ["Next.js", "Tailwind", "Framer Motion"]
    },
    {
      title: "Decentralized Camp Network",
      desc: "Sistem enkripsi chat peer-to-peer anti-sadap menggunakan protokol PHP & WebSockets luar jaringan.",
      tech: ["PHP", "Swoole", "WebSockets"]
    },
    {
      title: "Automated Grid Defenser",
      desc: "Modul skrip otomatisasi keamanan saringan data menggunakan Java untuk mendeteksi anomali paket data luar.",
      tech: ["Java", "Spring Boot", "Bash"]
    }
  ];

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle title="Archived_Projects" id="03" />
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, index) => (
          <GlassCard key={index} delay={index * 0.1}>
            <div className="flex flex-col h-full justify-between font-mono">
              <div>
                <div className="text-[10px] text-[#00f2ff] mb-2">PROJECT_0{index + 1}</div>
                <h3 className="text-md font-bold text-white mb-2 tracking-wide">{proj.title}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed mb-4">{proj.desc}</p>
              </div>
              
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-900">
                {proj.tech.map((t, idx) => (
                  <span key={idx} className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-[9px] text-zinc-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
