"use client";

import { useRef } from "react";
import { cn } from "@/src/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  liveLink: string;
  githubLink: string;
  index: number;
}

export const ProjectCard = ({ title, description, techStack, liveLink, githubLink, index }: ProjectCardProps) => {
  // Alternate layout: Even index left image, Odd index right image
  const isEven = index % 2 === 0;

  // Reference for the scroll tracking
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"], // Track from bottom of screen to top
  });

  // 3D Parallax Magic: Image moves slower (-15% to 15%), Text moves slightly faster (10% to -10%)
  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <div 
      ref={cardRef}
      className={cn(
        "relative flex flex-col gap-12 rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm lg:items-center lg:p-12 overflow-hidden",
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      )}
    >
      {/* Abstract Image Placeholder with Parallax */}
      <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900/40 to-black lg:w-1/2 aspect-video group">
        <motion.div 
          style={{ y: imageY }} 
          className="absolute -inset-y-[15%] h-[130%] w-full"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-blue-500/10 transition-transform duration-700 group-hover:scale-110" />
          {/* Yahan aap actual project screenshots <img> ya <Image> tag se daal sakte hain */}
          <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-black text-white/20 tracking-widest uppercase rotate-[-5deg] scale-150 transition-transform duration-500 group-hover:scale-125">
                {title}
              </span>
          </div>
        </motion.div>
      </div>

      {/* Project Details with Parallax */}
      <motion.div 
        style={{ y: textY }}
        className="flex w-full flex-col lg:w-1/2 relative z-10"
      >
        <h3 className="mb-4 text-4xl font-extrabold text-white tracking-tight">{title}</h3>
        <p className="mb-8 text-lg text-gray-400 leading-relaxed">{description}</p>
        
        {/* Tech Stack Tags */}
        <div className="mb-10 flex flex-wrap gap-2">
          {techStack.map((tech, i) => (
            <span key={i} className="rounded-full bg-white/5 px-4 py-1.5 text-sm font-medium text-blue-400 ring-1 ring-white/10 shadow-[0_0_10px_rgba(37,99,235,0.1)]">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-4 mt-auto">
          <Link 
            href={liveLink} 
            target="_blank"
            className="group flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]"
          >
            <ExternalLink size={18} className="transition-transform group-hover:rotate-12" />
            Live Demo
          </Link>
          <Link 
            href={githubLink} 
            target="_blank"
            className="group flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
          >
            <FaGithub size={18} className="transition-transform group-hover:scale-110" />
            Source Code
          </Link>
        </div>
      </motion.div>
    </div>
  );
};