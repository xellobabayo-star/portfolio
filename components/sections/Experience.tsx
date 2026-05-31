"use client";

import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import GlassCard from "../ui/GlassCard";

const experiences = [
  {
    title: "Senior Full-Stack Engineer",
    company: "NEXUS_CORP // Digital Reconstruction Bureau",
    period: "2106 — PRESENT",
    type: "ACTIVE_MISSION",
    desc: "Memimpin tim 5 developer membangun sistem distribusi data lintas wilayah Neo Jakarta. Implementasi microservices PHP/Laravel & Next.js untuk 200K+ daily active users pasca-kolaps infrastruktur.",
    tags: ["PHP", "Laravel", "Next.js", "PostgreSQL", "Redis", "Docker"],
  },
  {
    title: "Backend Architect",
    company: "DATACORE_LAB // Infrastructure Division",
    period: "2104 — 2106",
    type: "COMPLETED",
    desc: "Merancang ulang arsitektur backend yang lama dan korup. Migrasi dari monolith ke microservices — meningkatkan throughput sistem 340% tanpa satu detik downtime.",
    tags: ["Java", "Spring Boot", "Docker", "Kubernetes", "PostgreSQL"],
  },
  {
    title: "Frontend Specialist",
    company: "GRIDWAVE // Civilian Interface Unit",
    period: "2102 — 2104",
    type: "COMPLETED",
    desc: "Membangun antarmuka publik untuk jaringan komunikasi darurat pasca-kolaps. UI reaktif dengan data real-time via WebSockets — dipakai 50K+ penyintas setiap harinya.",
    tags: ["React", "TypeScript", "Framer Motion", "WebSocket", "Tailwind"],
  },
  {
    title: "Junior Developer",
    company: "ARCHIVAL_SYSTEMS // Legacy Recovery Unit",
    period: "2100 — 2102",
    type: "COMPLETED",
    desc: "Pemulihan database sistem lama dari arsip era 2015-2099. Konversi manual ribuan catatan analog ke format digital terenkripsi menggunakan Luau scripting engine.",
    tags: ["Luau", "Node.js", "SQLite", "Bash"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle title="Mission_Log" id="04" />

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-0 top-2 bottom-0 w-px bg-gradient-to-b from-[#00f2ff] via-zinc-800 to-transparent hidden md:block" />

        <div className="space-y-6 md:pl-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative"
            >
              {/* Timeline node dot */}
              <div className="absolute -left-[2.82rem] top-6 h-3 w-3 border border-[#00f2ff] bg-[#0a0a0a] hidden md:flex items-center justify-center">
                <span
                  className={`absolute inset-[2px] ${
                    exp.type === "ACTIVE_MISSION" ? "bg-[#00f2ff] animate-pulse" : "bg-zinc-700"
                  }`}
                />
              </div>

              <GlassCard className={exp.type === "ACTIVE_MISSION" ? "border-[#00f2ff]/40" : ""}>
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3 font-mono">
                  <div>
                    <div className="text-[9px] mb-1.5">
                      {exp.type === "ACTIVE_MISSION" ? (
                        <span className="text-[#00f2ff] animate-pulse tracking-widest">
                          ● ACTIVE_MISSION
                        </span>
                      ) : (
                        <span className="text-zinc-600 tracking-widest">◉ {exp.type}</span>
                      )}
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-white tracking-wide">
                      {exp.title}
                    </h3>
                    <div className="text-xs text-zinc-500 mt-0.5">{exp.company}</div>
                  </div>
                  <div className="text-[10px] text-[#ff0055] font-mono border border-[#ff0055]/30 px-3 py-1 shrink-0">
                    {exp.period}
                  </div>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed font-mono mb-4">{exp.desc}</p>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-900">
                  {exp.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 text-[9px] text-zinc-500 font-mono tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
