"use client";

import SectionTitle from "../ui/SectionTitle";
import GlassCard from "../ui/GlassCard";
import SkillBar from "../ui/SkillBar";

export default function Skills() {
  const skillsData = [
    { name: "PHP / Laravel (Core Backend)", level: 92 },
    { name: "Java (Enterprise & System Recovery)", level: 85 },
    { name: "Luau / Scripting Simulation", level: 95 },
    { name: "Next.js / TypeScript (Frontend Engine)", level: 88 },
  ];

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle title="Core_Skills" id="02" />
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <GlassCard>
          <h3 className="text-sm font-bold tracking-widest text-zinc-500 mb-6">// PROGRAMMING_LANGUAGES</h3>
          {skillsData.map((skill, index) => (
            <SkillBar key={index} name={skill.name} level={skill.level} />
          ))}
        </GlassCard>

        <GlassCard className="border-[#ff0055]/20">
          <h3 className="text-sm font-bold tracking-widest text-zinc-500 mb-4">// TACTICAL_STACK</h3>
          <div className="font-mono text-xs text-zinc-400 space-y-3">
            <div className="flex items-start gap-2">
              <span className="text-[#ff0055]">[✓]</span>
              <span><strong>Database:</strong> PostgreSQL, Redis Cluster, SQLite Archive</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#ff0055]">[✓]</span>
              <span><strong>Cyber Security:</strong> Protocol Hardening, Penetration Testing</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#ff0055]">[✓]</span>
              <span><strong>Tools:</strong> Neovim, Docker Containment, Git Terminal Only</span>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
