"use client";

import { cn } from "@/src/lib/utils";
import { motion } from "framer-motion";
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

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        "flex flex-col gap-8 rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm lg:items-center lg:p-10",
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      )}
    >
      {/* Abstract Image Placeholder (Premium Vibe) */}
      <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900/40 to-black lg:w-1/2 aspect-video group">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-blue-500/10 transition-transform duration-700 group-hover:scale-110" />
        {/* Yahan aap actual project screenshots <img> ya <Image> tag se daal sakte hain */}
        <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-white/20 tracking-widest uppercase">{title}</span>
        </div>
      </div>

      {/* Project Details */}
      <div className="flex w-full flex-col lg:w-1/2">
        <h3 className="mb-4 text-3xl font-extrabold text-white">{title}</h3>
        <p className="mb-6 text-lg text-gray-400 leading-relaxed">{description}</p>
        
        {/* Tech Stack Tags */}
        <div className="mb-8 flex flex-wrap gap-2">
          {techStack.map((tech, i) => (
            <span key={i} className="rounded-full bg-white/5 px-4 py-1.5 text-sm font-medium text-blue-400 ring-1 ring-white/10">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 mt-auto">
          <Link 
            href={liveLink} 
            target="_blank"
            className="flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]"
          >
            <ExternalLink size={18} />
            Live Demo
          </Link>
          <Link 
            href={githubLink} 
            target="_blank"
            className="flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
          >
            <FaGithub size={18} />
            Source Code
          </Link>
        </div>
      </div>
    </motion.div>
  );
};