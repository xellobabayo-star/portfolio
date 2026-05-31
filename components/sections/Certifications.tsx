"use client";

import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import GlassCard from "../ui/GlassCard";

const certs = [
  {
    id: "AUTH_TOKEN_001",
    name: "AWS Certified Solutions Architect",
    issuer: "AMAZON_WEB_SERVICES // Cloud Division",
    year: "2105",
    status: "VERIFIED",
    color: "#ff9900",
    icon: "☁",
  },
  {
    id: "AUTH_TOKEN_002",
    name: "Google Associate Cloud Engineer",
    issuer: "GOOGLE_CLOUD // Infrastructure Branch",
    year: "2104",
    status: "VERIFIED",
    color: "#00f2ff",
    icon: "⬡",
  },
  {
    id: "AUTH_TOKEN_003",
    name: "Meta Frontend Developer",
    issuer: "META_PLATFORMS // Developer Division",
    year: "2103",
    status: "VERIFIED",
    color: "#0082fb",
    icon: "◈",
  },
  {
    id: "AUTH_TOKEN_004",
    name: "Certified Ethical Hacker",
    issuer: "EC_COUNCIL // Security Operations",
    year: "2106",
    status: "CLASSIFIED",
    color: "#ff0055",
    icon: "⬣",
  },
  {
    id: "AUTH_TOKEN_005",
    name: "Oracle Java SE Developer",
    issuer: "ORACLE_CORP // Language Division",
    year: "2103",
    status: "VERIFIED",
    color: "#f80000",
    icon: "◉",
  },
  {
    id: "AUTH_TOKEN_006",
    name: "Docker Certified Associate",
    issuer: "DOCKER_INC // Container Authority",
    year: "2105",
    status: "VERIFIED",
    color: "#2496ed",
    icon: "▣",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle title="Auth_Tokens" id="05" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certs.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <GlassCard delay={index * 0.08} className="h-full">
              <div className="font-mono flex flex-col gap-3 h-full">
                {/* Header row: ID + status badge */}
                <div className="flex items-center justify-between">
                  <span className="text-[9px] text-zinc-700 tracking-wider">{cert.id}</span>
                  <span
                    className={`px-2 py-0.5 text-[8px] tracking-widest border ${
                      cert.status === "CLASSIFIED"
                        ? "border-[#ff0055]/50 text-[#ff0055]"
                        : "border-[#00ff00]/40 text-[#00ff00]"
                    }`}
                  >
                    {cert.status}
                  </span>
                </div>

                {/* Icon badge */}
                <div
                  className="h-14 w-14 border flex items-center justify-center text-2xl transition-all duration-300"
                  style={{ borderColor: cert.color + "40", color: cert.color }}
                >
                  {cert.icon}
                </div>

                {/* Cert name + issuer */}
                <div className="flex-1">
                  <h3 className="text-xs font-bold text-white leading-snug mb-1.5">
                    {cert.name}
                  </h3>
                  <div className="text-[9px] text-zinc-600 leading-relaxed">{cert.issuer}</div>
                </div>

                {/* Footer: issued year + scan bar */}
                <div className="pt-3 border-t border-zinc-900">
                  <div
                    className="text-[10px] font-mono mb-2"
                    style={{ color: cert.color }}
                  >
                    ISSUED: {cert.year}
                  </div>
                  {/* Fake scan/verify bar */}
                  <div className="h-0.5 w-full bg-zinc-900 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: index * 0.1 }}
                      className="h-full"
                      style={{ background: cert.color + "80" }}
                    />
                  </div>
                  <div className="text-[8px] text-zinc-700 mt-1">SIGNATURE_VERIFIED</div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
