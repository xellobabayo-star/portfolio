"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function AnimatedText({ text, className = "", delay = 0 }: AnimatedTextProps) {
  const [displayText, setDisplayText] = useState("");
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*+/=";

  useEffect(() => {
    let isMounted = true;
    
    const startTimeout = setTimeout(() => {
      let iterations = 0;
      const interval = setInterval(() => {
        if (!isMounted) return;

        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";
              if (index < iterations) return text[index];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (iterations >= text.length) {
          clearInterval(interval);
        }
        iterations += 1 / 2; // Kecepatan dekripsi
      }, 30);

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => {
      isMounted = false;
      clearTimeout(startTimeout);
    };
  }, [text, delay]);

  return (
    <motion.span 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`${className} font-mono`}
    >
      {displayText || text}
    </motion.span>
  );
}
