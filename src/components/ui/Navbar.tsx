"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export const Navbar = () => {
  const navLinks = [
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-black/40 backdrop-blur-md border-b border-white/5"
    >
      {/* Brand Logo */}
      <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
        Syncro<span className="text-blue-500">Code</span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-8">
        {navLinks.map((link, index) => (
          <Link 
            key={index} 
            href={link.path}
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Call to Action Button */}
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-5 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:bg-blue-500 transition-all"
      >
        Let's Talk
      </motion.button>
    </motion.nav>
  );
};