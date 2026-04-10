"use client";

import { cn } from "@/src/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
}

// Framer motion variants for the staggered child animation
export const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export const ServiceCard = ({ title, description, icon, className }: ServiceCardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -5 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm transition-colors hover:bg-white/[0.04]",
        className
      )}
    >
      {/* Subtle hover glow effect */}
      <div className="absolute -inset-px bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      <div className="relative z-10 flex flex-col items-start text-left">
        <div className="mb-6 rounded-lg bg-blue-500/10 p-3 text-blue-400 ring-1 ring-blue-500/20">
          {icon}
        </div>
        <h3 className="mb-3 text-xl font-bold tracking-tight text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};