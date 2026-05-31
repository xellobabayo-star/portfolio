"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LoadingScreen() {
  const [logs, setLogs] = useState<string[]>([]);
  const bootSequences = [
    "[ CORE ] Initializing GeminiXD Core System...",
    "[ DECRYPT ] Unpacking assets from Archive 2015...",
    "[ NETWORK ] Establishing decentralized node over Neo Jakarta...",
    "[ BYPASS ] Firewall status: BYPASSED (No filters loaded)...",
    "[ RECOVERY ] Scanning system administrator profile: annas...",
    "[ ACCESS ] Credentials verified. Welcome back, Admin.",
    "[ BOOT ] Launching Graphic User Interface..."
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < bootSequences.length) {
        setLogs((prev) => [...prev, bootSequences[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 350);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-between bg-[#0a0a0a] p-6 font-mono text-xs text-zinc-500 selection:bg-[#00f2ff] selection:text-black">
      {/* Efek TV CRT Jadul */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none" />
      
      {/* Top Banner */}
      <div className="flex justify-between border-b border-zinc-900 pb-2">
        <div>SYS_BOOT: v2108.4.1</div>
        <div className="animate-pulse text-[#00f2ff]">LOAD_ACTIVE</div>
      </div>

      {/* Main Console Logs */}
      <div className="flex-1 py-6 flex flex-col justify-end gap-1 overflow-hidden">
        {logs.map((log, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.1 }}
            className={index === bootSequences.length - 1 ? "text-[#00f2ff] font-bold" : ""}
          >
            {log}
          </motion.div>
        ))}
        <span className="w-2 h-4 bg-[#00f2ff] inline-block animate-pulse mt-1" />
      </div>

      {/* Bottom Banner */}
      <div className="flex justify-between border-t border-zinc-900 pt-2 text-[10px]">
        <div>SECURE_LAYER: NONE</div>
        <div>AUTHORIZED_BY: ANNAS</div>
      </div>
    </div>
  );
}
