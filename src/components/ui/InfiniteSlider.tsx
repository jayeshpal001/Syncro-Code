"use client";

import { motion } from "framer-motion";

export const InfiniteSlider = () => {
  // Aap yahan apne clients ke naam ya tech stack (Next.js, MongoDB, TypeScript, Web3, etc.) daal sakte hain
  const items = [
    "Next.js", "React", "Node.js", "MongoDB", "TypeScript", 
    "Web3", "MetaMask", "Ethereum", "TailwindCSS", "AWS"
  ];

  return (
    <div className="relative flex w-full overflow-hidden border-y border-white/5 bg-black py-6">
      {/* Left & Right Gradients for smooth fading effect */}
      <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-black to-transparent" />
      <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-black to-transparent" />

      <motion.div
        className="flex w-max space-x-16 px-8"
        animate={{ x: ["0%", "-50%"] }} // Yeh -50% tak jayega aur wapas repeat hoga
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20, // Speed of the slider
        }}
      >
        {/* Array ko do baar map kar rahe hain taaki scroll kabhi khatam na ho (seamless loop) */}
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center justify-center">
            <span className="text-2xl font-black uppercase tracking-widest text-white/20 transition-colors hover:text-blue-500/80">
              {item}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};