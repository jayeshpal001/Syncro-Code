"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Calendar, X } from "lucide-react";
import Link from "next/link";

export const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 20, scale: 0.8, filter: "blur(10px)" }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="flex flex-col gap-3 rounded-[2rem] border border-white/10 bg-black/60 p-4 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
          >
            {/* Calendly Booking Action */}
            <Link 
              href="https://calendly.com/YOUR_LINK" // Yahan apna Calendly link daalein
              target="_blank"
              className="group flex items-center gap-4 rounded-2xl bg-white/5 pr-6 p-2 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                <Calendar size={20} />
              </div>
              <div>
                <span className="block text-xs font-medium text-gray-400">Free Consultation</span>
                <span className="block">Book Strategy Call</span>
              </div>
            </Link>

            {/* WhatsApp Direct Action */}
            <Link 
              href="https://wa.me/919876543210" // Yahan apna number daalein (country code ke sath)
              target="_blank"
              className="group flex items-center gap-4 rounded-2xl bg-white/5 pr-6 p-2 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/20 text-green-400 transition-colors group-hover:bg-green-500 group-hover:text-white">
                <MessageCircle size={20} />
              </div>
              <div>
                <span className="block text-xs font-medium text-gray-400">Instant Reply</span>
                <span className="block">Chat on WhatsApp</span>
              </div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X size={28} />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <MessageCircle size={28} />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Radar Ping Animation */}
        {!isOpen && (
          <span className="absolute -z-10 inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-40"></span>
        )}
      </motion.button>
    </div>
  );
};