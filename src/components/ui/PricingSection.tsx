"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, Rocket, Search } from "lucide-react";

export const PricingSection = () => {
  const packages = [
    {
      name: "Starter Website",
      price: "₹25k - ₹50k",
      description: "Perfect for emerging startups needing a solid digital presence.",
      features: ["Up to 5 Pages", "Mobile Responsive", "Basic SEO Setup", "Contact Form Integration"],
      icon: <Zap className="text-blue-400" size={32} />,
      popular: false,
    },
    {
      name: "Business Website",
      price: "₹50k - ₹1.5L",
      description: "High-performance platform designed for conversions and growth.",
      features: ["Up to 15 Pages", "CMS Integration", "Advanced SEO & Analytics", "Custom UI/UX Animations", "Lead Generation Forms"],
      icon: <Rocket className="text-blue-500" size={32} />,
      popular: true,
    },
    {
      name: "SaaS / Custom App",
      price: "₹1.5L+",
      description: "Complex web applications and scalable enterprise solutions.",
      features: ["Full-Stack Architecture", "Authentication & Roles", "Database Design", "API Integrations", "Zero-Lag Performance"],
      icon: <CheckCircle2 className="text-purple-400" size={32} />,
      popular: false,
    }
  ];

  return (
    <section id="pricing" className="relative w-full bg-black py-32 px-4 md:px-8 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Pricing</span>
          </h2>
          <p className="max-w-2xl text-gray-400 md:text-xl">
            No hidden fees. No guesswork. Just high-performance engineering tailored to your business scale.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-24 items-center">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative flex flex-col rounded-3xl border p-8 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] hover:-translate-y-2 ${
                pkg.popular 
                  ? "bg-gradient-to-b from-blue-900/20 to-black border-blue-500/30 md:scale-105 z-10 shadow-2xl" 
                  : "bg-white/[0.02] border-white/10"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                  Most Recommended
                </div>
              )}
              
              <div className="mb-6">{pkg.icon}</div>
              <h3 className="mb-2 text-2xl font-bold text-white">{pkg.name}</h3>
              <div className="mb-4 text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                {pkg.price}
              </div>
              <p className="mb-8 text-sm text-gray-400 h-10">{pkg.description}</p>
              
              <ul className="mb-8 flex flex-col gap-4 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-medium text-gray-300">
                    <CheckCircle2 size={16} className="text-blue-500 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full rounded-full py-3.5 text-sm font-bold transition-all ${
                pkg.popular 
                  ? "bg-blue-600 text-white hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]" 
                  : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
              }`}>
                Select Package
              </button>
            </motion.div>
          ))}
        </div>

        {/* The Lead Magnet (Website Audit) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2.5rem] border border-blue-500/20 bg-gradient-to-r from-blue-900/20 to-black p-8 md:p-12 shadow-[0_0_50px_rgba(37,99,235,0.1)]"
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/10 blur-[80px]"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h3 className="mb-4 text-3xl font-extrabold text-white">Not sure where to start?</h3>
              <p className="text-lg text-gray-400">
                Get a <span className="font-semibold text-blue-400">Free Website Performance Audit</span>. We'll analyze your current site and show you exactly how to increase conversions and reduce load times.
              </p>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="flex w-full items-center rounded-full border border-white/10 bg-black/50 p-2 backdrop-blur-md focus-within:border-blue-500/50 focus-within:ring-1 focus-within:ring-blue-500/50 transition-all">
                <div className="pl-4 pr-2 text-gray-400">
                  <Search size={20} />
                </div>
                <input 
                  type="url" 
                  placeholder="Paste your website URL..." 
                  className="w-full bg-transparent px-2 py-3 text-white placeholder-gray-500 outline-none"
                />
                <button className="shrink-0 rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                  Get Free Audit
                </button>
              </div>
              <p className="mt-3 text-center md:text-left text-xs text-gray-500">
                100% Free. No commitment required. Delivered in 24 hours.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};