import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/effects/CustomCursor";
import MouseGlow from "@/components/effects/MouseGlow";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "SAM // CYBER PORTFOLIO 2108",
  description: "Restoring digital civilization from the ashes.",
  metadataBase: new URL("https://sam-portfolio.vercel.app"),
  openGraph: {
    title: "SAM // CYBER PORTFOLIO 2108",
    description: "Full-Stack Developer. System Architect. Digital Survivor.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${jetbrainsMono.variable} font-mono bg-[#0a0a0a] text-white antialiased overflow-x-hidden`}
      >
        {/* CRT scanlines overlay */}
        <div className="scanlines" />
        {/* Mouse effects */}
        <CustomCursor />
        <MouseGlow />
        {children}
      </body>
    </html>
  );
}
