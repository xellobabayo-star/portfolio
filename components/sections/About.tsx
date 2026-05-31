"use client";

import Image from "next/image";
import GlassCard from "../ui/GlassCard";
import SectionTitle from "../ui/SectionTitle";

const profileData = [
  { label: "HAIR",      value: "BLACK" },
  { label: "VISUAL",    value: "GLASSES_EQUIPPED" },
  { label: "STRUCTURE", value: "SHARP_JAWLINE" },
  { label: "LOC",       value: "NEO_JAKARTA (2108)" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 select-none">
      <SectionTitle title="About_Me" id="01" />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Kolom Kiri: Profile Card */}
        <GlassCard className="md:col-span-1 border-[#ff0055]/30">
          <div className="flex flex-col items-center text-center font-mono">

            {/* Foto Profil */}
            <div className="relative mb-4 h-36 w-36 overflow-hidden border border-[#00f2ff]/40">
              <Image
                src="/icons/profile.jpg"
                alt="SAM"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Overlay efek scan */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]/50 pointer-events-none" />
              {/* Corner brackets */}
              <span className="absolute top-1 left-1 w-3 h-3 border-t border-l border-[#00f2ff]" />
              <span className="absolute top-1 right-1 w-3 h-3 border-t border-r border-[#00f2ff]" />
              <span className="absolute bottom-1 left-1 w-3 h-3 border-b border-l border-[#00f2ff]" />
              <span className="absolute bottom-1 right-1 w-3 h-3 border-b border-r border-[#00f2ff]" />
            </div>

            <div className="text-sm font-bold tracking-widest text-[#00f2ff]">ADMIN::SAM</div>
            <div className="text-[10px] text-zinc-500 mt-1 animate-pulse">STATUS: OPERATIONAL</div>

            <div className="mt-6 w-full text-left text-xs text-zinc-400 space-y-2 border-t border-zinc-900 pt-4">
              {profileData.map((item) => (
                <div key={item.label}>
                  <span className="text-zinc-600">{item.label}:</span>{" "}
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>

        {/* Kolom Kanan: Narasi */}
        <GlassCard className="md:col-span-2">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-[#00f2ff]">&gt;</span> OVERVIEW_
          </h3>
          <p className="text-sm leading-relaxed text-zinc-400 font-mono">
            Gw adalah seorang{" "}
            <span className="text-[#00f2ff]">Full-Stack Developer</span>{" "}
            yang berhasil selamat dari runtuhnya peradaban lama. Mengenakan kacamata tebal untuk menembus baris kode dan bermodalkan logika tajam, gw mendedikasikan hidup gw di tahun 2108 ini buat merestorasi sisa-sisa infrastruktur digital abad 21.
          </p>
          <p className="text-sm leading-relaxed text-zinc-400 font-mono mt-4">
            Gak peduli seberapa hancur ekosistem jaringan di luar sana, tugas gw cuma satu: bypass kegagalan sistem lama, bangun desentralisasi node baru, dan mastiin peradaban manusia bisa kembali ke setelan awal lewat kekuatan kode murni tanpa filter.
          </p>
        </GlassCard>
      </div>
    </section>
  );
}
