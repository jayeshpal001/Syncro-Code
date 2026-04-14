"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { FadeIn } from "../animations/FadeIn";
import { Hero3D } from "../3d/Hero3D";
import { TextReveal } from "../animations/TextReveal";

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track the scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"], // Start tracking when top of section hits top of viewport
  });

  // Parallax calculations (Speed mapping)
  // Text scroll karne par upar ki taraf (negative Y) move hoga aur fade out hoga
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  // 3D Background thoda slow move hoga (Parallax depth effect)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="relative flex h-[120vh] w-full items-start justify-center overflow-hidden bg-black pt-32 md:pt-40"
    >
      {/* 3D Background with Parallax */}
      <motion.div 
        style={{ y: backgroundY }} 
        className="absolute inset-0 z-0 h-screen w-full"
      >
        <Hero3D />
      </motion.div>

      {/* Content Overlay with Parallax and Fade */}
      <motion.div 
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 flex flex-col items-center justify-center px-4 text-center sticky top-40"
      >
        <FadeIn delay={0.2} direction="down">
          <div className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
            <span className="text-sm font-medium tracking-wide text-gray-300">
              Welcome to the Future of the Web
            </span>
          </div>
        </FadeIn>

        {/* Phase 1 ka TextReveal component yahan use ho raha hai */}
        <TextReveal 
          text="We Build Digital Masterpieces" 
          className="mb-6 max-w-5xl text-5xl font-extrabold tracking-tight text-white md:text-7xl lg:text-8xl"
        />

        <FadeIn delay={0.6} direction="up">
          <p className="mb-10 max-w-2xl text-lg text-gray-400 md:text-xl">
            Elevating brands with next-gen Web Development, AI Automation, and Cloud Solutions. Engineered for 0% lag and maximum impact.
          </p>
        </FadeIn>

        <FadeIn delay={0.8} direction="up">
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <button className="rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]">
              Start Your Project
            </button>
            <button className="rounded-full border border-white/20 bg-transparent px-8 py-4 font-semibold text-white transition-all hover:bg-white/10">
              Explore Services
            </button>
          </div>
        </FadeIn>
      </motion.div>
    </section>
  );
};