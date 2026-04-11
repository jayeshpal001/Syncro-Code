"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { cn } from "@/src/lib/utils";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
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
                "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 transition-all duration-500 md:px-12",
                isScrolled
                    ? "bg-black/50 backdrop-blur-xl border-b border-white/10 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
                    : "bg-transparent border-b border-transparent py-6"
            )}
        >
            {/* Premium Brand Logo */}
            <Link href="/" className="group text-2xl font-black tracking-tighter text-white transition-transform hover:scale-105">
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

            {/* Call to Action Buttons */}
            <div className="flex items-center gap-6">
                <Link
                    href="#contact"
                    className="hidden md:block text-sm font-medium text-gray-400 transition-colors hover:text-white"
                >
                    Client Login
                </Link>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative px-6 py-2.5 text-sm font-bold text-white rounded-full bg-gradient-to-r from-blue-600 to-blue-500 overflow-hidden group shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] transition-all"
                >
                    {/* Shine effect on hover */}
                    <span className="absolute inset-0 w-full h-full bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
                 <Link href="#contact" className="relative z-10">Let's Talk</Link>
                </motion.button>
            </div>
        </motion.nav>
    );
};