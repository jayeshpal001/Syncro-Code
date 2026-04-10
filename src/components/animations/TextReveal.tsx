"use client";

import { motion } from "framer-motion";

export const TextReveal = ({ text, className }: { text: string; className?: string }) => {
  const words = text.split(" ");
  
  return (
    <motion.h2 className={className}>
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.05, // Har word thode delay ke baad aayega
              ease: [0.21, 0.47, 0.32, 0.98] 
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.h2>
  );
};