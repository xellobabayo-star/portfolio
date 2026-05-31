"use client";

import AnimatedText from "./AnimatedText";

interface SectionTitleProps {
  title: string;
  id: string;
}

export default function SectionTitle({ title, id }: SectionTitleProps) {
  return (
    <div className="mb-12 flex flex-col items-start font-mono select-none">
      <div className="text-xs text-zinc-600 mb-1">// SYSTEM_SECTION_{id}</div>
      <h2 className="text-2xl font-bold tracking-wider text-white md:text-4xl flex items-center gap-2">
        <span className="text-[#ff0055]">&lt;</span>
        <AnimatedText text={title} />
        <span className="text-[#ff0055]">/&gt;</span>
      </h2>
      <div className="mt-2 h-[2px] w-20 bg-gradient-to-r from-[#00f2ff] to-transparent" />
    </div>
  );
}
