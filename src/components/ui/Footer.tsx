"use client";

import Link from "next/link";
import {  ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";




export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-8">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-6 md:col-span-1.5">
            <Link href="/" className="text-3xl font-bold tracking-tighter text-white">
              Syncro<span className="text-blue-500">Code</span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Engineered for performance. We build next-generation scalable web applications, enterprise AI solutions, and robust cloud architectures.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="rounded-full bg-white/5 p-2 text-gray-400 transition-colors hover:bg-white/10 hover:text-white">
                <ImLinkedin  size={20} />
              </Link>
              <Link href="#" className="rounded-full bg-white/5 p-2 text-gray-400 transition-colors hover:bg-white/10 hover:text-white">
                <BsTwitterX size={20} />
              </Link>
              <Link href="#" className="rounded-full bg-white/5 p-2 text-gray-400 transition-colors hover:bg-white/10 hover:text-white">
                <FaGithub size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <Link href="/about" className="text-sm text-gray-400 transition-colors hover:text-blue-400">About Us</Link>
            <Link href="/careers" className="text-sm text-gray-400 transition-colors hover:text-blue-400">Careers</Link>
            <Link href="/privacy" className="text-sm text-gray-400 transition-colors hover:text-blue-400">Privacy Policy</Link>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <Link href="#services" className="text-sm text-gray-400 transition-colors hover:text-blue-400">Web Development</Link>
            <Link href="#services" className="text-sm text-gray-400 transition-colors hover:text-blue-400">AI & Automation</Link>
            <Link href="#services" className="text-sm text-gray-400 transition-colors hover:text-blue-400">Cloud Solutions</Link>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4 md:col-span-1.5 lg:col-span-1">
            <h4 className="text-lg font-semibold text-white">Stay Updated</h4>
            <p className="text-sm text-gray-400">Subscribe to our newsletter for the latest tech insights.</p>
            <div className="relative mt-2 flex w-full items-center">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full rounded-full border border-white/10 bg-white/5 py-3 pl-4 pr-12 text-sm text-white outline-none transition-all focus:border-blue-500"
              />
              <button className="absolute right-1 top-1 bottom-1 flex aspect-square items-center justify-center rounded-full bg-blue-600 text-white transition-colors hover:bg-blue-500">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">
          <p>© {currentYear} SyncroCode. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Engineered with precision.</p>
        </div>
      </div>
    </footer>
  );
};