"use client";

export default function BackgroundGrid() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 opacity-20">
      {/* Pola Grid CSS */}
      <div 
        className="h-full w-full bg-[linear-gradient(to_right,#16161a_1px,transparent_1px),linear-gradient(to_bottom,#16161a_1px,transparent_1px)] bg-[size:40px_40px]" 
      />
      {/* Efek Vignette Biar Pojokan Layar Agak Gelap */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#0a0a0a_80%)]" />
    </div>
  );
}
