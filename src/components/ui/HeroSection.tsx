"use client";

import { Hero3D } from "../3d/Hero3D";
import { FadeIn } from "../animations/FadeIn";


export const HeroSection = () => {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black pt-20">
      {/* 3D Background Component */}
      <Hero3D />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
        
        <FadeIn delay={0.2} direction="down">
          <div className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
            <span className="text-sm font-medium tracking-wide text-gray-300">
              Welcome to the Future of the Web
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.4} direction="up">
          <h1 className="mb-6 max-w-5xl text-5xl font-extrabold tracking-tight text-white md:text-7xl lg:text-8xl">
            We Build <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Digital Masterpieces
            </span>
          </h1>
        </FadeIn>

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
        
      </div>
    </section>
  );
};