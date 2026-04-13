"use client";

import { motion } from "framer-motion";
import { MessageCircle, Star, TrendingUp, ShieldCheck } from "lucide-react";
import Image from "next/image";

export const TrustSection = () => {
  // Infinite Logo Marquee Data
  const partnerLogos = [
    "TechNova", "GlobalReach", "ApexVentures", "HealthSync", "LocalEats", 
    "TechNova", "GlobalReach", "ApexVentures", "HealthSync", "LocalEats" // Repeated for seamless loop
  ];

  return (
    <section className="relative w-full bg-black py-32 px-4 md:px-8 overflow-hidden border-t border-white/5">
      <div className="relative mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            Trusted by <span className="text-blue-500">Industry Leaders</span>
          </h2>
          <p className="max-w-2xl text-gray-400">
            Real results. Real conversations. 100% verified track record.
          </p>
        </div>

        {/* 1. Infinite Client Logos Marquee */}
        <div className="relative mb-24 flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex w-max space-x-16 px-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          >
            {partnerLogos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <span className="text-2xl font-black uppercase tracking-widest text-white/10 transition-colors hover:text-white/40">
                  {logo}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 2. The Trust Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Bento Box 1: Technical Excellence (GitHub/Metrics) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative col-span-1 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-md transition-colors hover:bg-white/[0.04]"
          >
            <ShieldCheck className="mb-6 h-10 w-10 text-blue-500" />
            <h3 className="mb-2 text-2xl font-bold text-white">Engineering Metrics</h3>
            <p className="mb-8 text-sm text-gray-400">Our code doesn't just work, it dominates.</p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-gray-400">Average Uptime</span>
                <span className="font-bold text-white">99.99%</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-gray-400">Lighthouse Score</span>
                <span className="font-bold text-green-400">100/100</span>
              </div>
              <div className="flex items-center justify-between pb-2">
                <span className="text-gray-400">Client Retention</span>
                <span className="font-bold text-blue-400">98%</span>
              </div>
            </div>
          </motion.div>

          {/* Bento Box 2: The "Blurred Chat" Reveal (High Conversion Tactic) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative col-span-1 md:col-span-2 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900/10 to-black p-8 backdrop-blur-md"
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <MessageCircle className="mb-4 h-10 w-10 text-green-500" />
                <h3 className="text-2xl font-bold text-white">Real Client Reactions</h3>
              </div>
              <div className="flex gap-1 text-yellow-500">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
            </div>

            {/* Simulated Chat Interface */}
            <div className="relative mx-auto max-w-lg rounded-2xl border border-white/5 bg-white/[0.03] p-4 shadow-inner">
              {/* Privacy overlay that disappears on hover */}
              <div className="absolute inset-0 z-10 flex items-center justify-center rounded-2xl bg-black/60 backdrop-blur-[4px] transition-all duration-500 group-hover:bg-black/0 group-hover:backdrop-blur-none">
                <span className="rounded-full border border-white/10 bg-black/80 px-4 py-2 text-sm font-semibold text-white shadow-xl transition-opacity group-hover:opacity-0">
                  Hover to reveal chat
                </span>
              </div>

              {/* Chat Bubbles */}
              <div className="flex flex-col gap-4 opacity-50 transition-opacity duration-500 group-hover:opacity-100">
                <div className="flex items-end gap-2">
                  <div className="h-8 w-8 rounded-full bg-blue-500/20 text-center leading-8 text-xs font-bold text-blue-400">CEO</div>
                  <div className="max-w-[80%] rounded-2xl rounded-bl-none bg-white/[0.05] p-3 text-sm text-gray-300">
                    Jayesh, the new dashboard is insane. Load times went from 4s to instant.
                  </div>
                </div>
                <div className="flex items-end justify-end gap-2">
                  <div className="max-w-[80%] rounded-2xl rounded-br-none bg-blue-600 p-3 text-sm text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                    Happy to hear that! The Next.js transition worked exactly as planned. We also reduced your server costs by 30%.
                  </div>
                </div>
                <div className="flex items-end gap-2">
                  <div className="h-8 w-8 rounded-full bg-blue-500/20 text-center leading-8 text-xs font-bold text-blue-400">CEO</div>
                  <div className="max-w-[80%] rounded-2xl rounded-bl-none bg-white/[0.05] p-3 text-sm text-gray-300">
                    Mind-blowing. Sending the rest of the payment now. Best decision we made this year! 
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};