"use client";

import { useRef } from "react";
import { cn } from "@/src/lib/utils";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  liveLink: string;
  githubLink: string;
  index: number;
  // THE UPGRADE: Injecting Real Media
  mediaUrl: string;
  mediaType: "video" | "image";
}

export const ProjectCard = ({ title, description, techStack, liveLink, githubLink, index, mediaUrl, mediaType }: ProjectCardProps) => {
  const isEven = index % 2 === 0;

  // --- 3D MOUSE TILT LOGIC (Ultra-Premium Physics) ---
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5); // Center by default
  const y = useMotionValue(0.5);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 40 });

  const rotateX = useTransform(mouseYSpring, [0, 1], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [0, 1], ["-15deg", "15deg"]);

  // --- DYNAMIC GLARE ---
  const glareX = useTransform(mouseXSpring, [0, 1], ["-100%", "100%"]);
  const glareY = useTransform(mouseYSpring, [0, 1], ["-100%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <div className="perspective-[1200px] z-20 w-full">
      <motion.div 
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ 
          rotateX, 
          rotateY,
          transformStyle: "preserve-3d" 
        }}
        className={cn(
          "relative flex flex-col gap-12 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-6 backdrop-blur-xl lg:items-center lg:p-10 overflow-hidden",
          "transition-colors duration-500 hover:border-white/20 hover:bg-white/[0.04] cursor-crosshair shadow-2xl",
          isEven ? "lg:flex-row" : "lg:flex-row-reverse"
        )}
      >
        {/* The Glare (Light Reflection) */}
        <motion.div 
          style={{ x: glareX, y: glareY, transform: "translateZ(40px)" }}
          className="absolute inset-0 z-10 w-[200%] h-[200%] bg-gradient-to-tr from-transparent via-white-[0.15] to-transparent blur-3xl pointer-events-none opacity-50"
        />

        {/* --- LEFT: REAL MEDIA CONTAINER (Translates Out in 3D Space) --- */}
        <div 
          className="relative w-full lg:w-1/2 aspect-[16/10] overflow-hidden rounded-2xl bg-black/50 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 border border-white/10 group"
          style={{ transform: "translateZ(60px)" }} // Massively pushes the video/image forward
        >
          {mediaType === "video" ? (
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
            >
              <source src={mediaUrl} type="video/mp4" />
            </video>
          ) : (
            <div className="absolute inset-0 h-full w-full opacity-90 transition-transform duration-1000 group-hover:scale-105">
              <Image 
                src={mediaUrl} 
                alt={title} 
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          )}
          
          {/* Subtle premium overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent pointer-events-none mix-blend-overlay" />
        </div>

        {/* --- RIGHT: TEXT CONTENT (Translates slightly forward) --- */}
        <motion.div 
          className="flex w-full flex-col lg:w-1/2 relative z-10"
          style={{ transform: "translateZ(30px)" }} // Pushes text forward, but less than the video
        >
          <h3 className="mb-4 text-4xl font-black text-white tracking-tight drop-shadow-md">{title}</h3>
          <p className="mb-8 text-lg text-gray-400 leading-relaxed font-medium">{description}</p>
          
          {/* Tech Stack Tags */}
          <div className="mb-10 flex flex-wrap gap-3">
            {techStack.map((tech, i) => (
              <span key={i} className="rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-blue-400 border border-white/10 shadow-inner backdrop-blur-md">
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-auto" style={{ transform: "translateZ(20px)" }}>
            <Link 
              href={liveLink} 
              target="_blank"
              className="group flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]"
            >
              <ExternalLink size={18} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              Live Demo
            </Link>
            <Link 
              href={githubLink} 
              target="_blank"
              className="group flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10 hover:border-white/40"
            >
              <FaGithub size={18} className="transition-transform group-hover:scale-110" />
              Source Code
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};