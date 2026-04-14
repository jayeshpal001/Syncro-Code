"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/src/lib/utils";
import { Menu, X } from "lucide-react"; // 🔥 MOBILE ICONS ADD KIYE 🔥

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // 🔥 MOBILE MENU STATE 🔥
    const { scrollY } = useScroll();

    // Scroll Track: 50px se niche jate hi Navbar glass mode mein aa jayega
    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    const navLinks = [
        { name: "Home", path: "#hero" },
        { name: "Services", path: "#services" },
        { name: "Portfolio", path: "#portfolio" },
        { name: "About", path: "#about" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 flex flex-col justify-center transition-all duration-500",
                isScrolled || isMobileMenuOpen
                    ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
                    : "bg-transparent border-b border-transparent"
            )}
        >
            <div className="flex items-center justify-between px-6 py-4 md:px-12 md:py-6">
                {/* Premium Brand Logo */}
                <Link 
                    href="/" 
                    className="group text-2xl font-black tracking-tighter text-white transition-transform hover:scale-105 z-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    Syncro<span className="text-blue-500 transition-colors group-hover:text-blue-400">Code</span>
                    <span className="text-blue-500">.</span>
                </Link>

                {/* Floating Pill Menu for Desktop */}
                <div className={cn(
                    "hidden md:flex items-center space-x-1 p-1 rounded-full transition-all duration-500",
                    isScrolled ? "bg-white/[0.03] border border-white/5" : "bg-transparent"
                )}>
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.path}
                            className="relative px-5 py-2 text-sm font-medium text-gray-300 transition-all duration-300 rounded-full hover:text-white hover:bg-white/10"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Call to Action Buttons & Mobile Toggle */}
                <div className="flex items-center gap-4 md:gap-6 z-50">
                    <Link
                        href="#contact"
                        className="hidden md:block text-sm font-medium text-gray-400 transition-colors hover:text-white"
                    >
                        Client Login
                    </Link>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden sm:block" // Chote phones par hide, thode bade par show
                    >
                        <Link 
                            href="#contact" 
                            className="relative block px-6 py-2.5 md:px-7 md:py-3 text-sm font-bold text-white rounded-full bg-gradient-to-r from-blue-600 to-blue-500 overflow-hidden group shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] transition-all"
                        >
                            {/* Shine effect on hover */}
                            <span className="absolute inset-0 w-full h-full bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
                            
                            {/* The Powerful CTA */}
                            <span className="relative z-10 flex items-center gap-2">
                                Book a Call
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                        </Link>
                    </motion.div>

                    {/* MOBILE MENU TOGGLE BUTTON */}
                    <button 
                        className="md:hidden flex items-center justify-center p-2 text-white transition-transform active:scale-95"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/*  MOBILE DROPDOWN MENU */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden overflow-hidden border-t border-white/10 bg-black/50"
                    >
                        <div className="flex flex-col px-6 py-6 gap-4">
                            {navLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.path}
                                    onClick={() => setIsMobileMenuOpen(false)} // Link click hone par menu close
                                    className="text-lg font-medium text-gray-300 transition-colors hover:text-white"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="h-px w-full bg-white/10 my-2"></div>
                            <Link
                                href="#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-lg font-medium text-gray-400 transition-colors hover:text-white"
                            >
                                Client Login
                            </Link>
                            {/* Mobile specific CTA for very small screens */}
                            <Link 
                                href="#contact" 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="sm:hidden mt-2 flex items-center justify-center w-full py-3 text-sm font-bold text-white rounded-full bg-blue-600"
                            >
                                Book a Call
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};