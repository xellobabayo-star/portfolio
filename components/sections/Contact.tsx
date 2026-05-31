"use client";

import SectionTitle from "../ui/SectionTitle";
import GlassCard from "../ui/GlassCard";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-2xl px-6 py-24">
      <SectionTitle title="Secure_Uplink" id="06" />
      
      <GlassCard className="border-[#00f2ff]/30">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4 font-mono text-xs">
          <div>
            <label className="block text-zinc-500 mb-1">// ENTER_SENDER_ID</label>
            <input 
              type="text" 
              placeholder="Suku Cadang / Nama Penyintas" 
              className="w-full bg-zinc-950 border border-zinc-900 p-3 text-white focus:outline-none focus:border-[#00f2ff] transition-colors"
            />
          </div>
          <div>
            <label className="block text-zinc-500 mb-1">// COORD_EMAIL</label>
            <input 
              type="email" 
              placeholder="bunker@domain.com" 
              className="w-full bg-zinc-950 border border-zinc-900 p-3 text-white focus:outline-none focus:border-[#00f2ff] transition-colors"
            />
          </div>
          <div>
            <label className="block text-zinc-500 mb-1">// SECURE_TRANSMISSION_DATA</label>
            <textarea 
              rows={4} 
              placeholder="Ketik pesan enkripsi lu di sini..." 
              className="w-full bg-zinc-950 border border-zinc-900 p-3 text-white focus:outline-none focus:border-[#00f2ff] transition-colors resize-none"
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-[#00f2ff] text-black font-bold p-3 uppercase tracking-widest hover:bg-[#ff0055] hover:text-white transition-colors duration-300 shadow-[0_0_15px_rgba(0,242,255,0.2)]"
          >
            EXECUTE_BROADCAST
          </button>
        </form>
      </GlassCard>
    </section>
  );
}
