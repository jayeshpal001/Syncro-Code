"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aisha Sharma",
    role: "CEO, TechNova",
    text: "SyncroCode completely transformed our legacy architecture. Their transition to a unified Next.js stack dropped our server costs by 40% while making the app blazing fast.",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    name: "Rahul Verma",
    role: "Founder, LocalEats",
    text: "The UI/UX design is out of this world. Our user retention doubled in just one month after the redesign.",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    name: "Priya Desai",
    role: "CTO, HealthSync",
    text: "They built our role-based systems with absolute precision. Security and scalability are clearly their top priorities.",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    name: "James Carter",
    role: "Director, Apex Cloud",
    text: "Zero lag, 100% professionalism. The AI automation workflows they integrated saved us hundreds of manual hours every week. Highly recommended for enterprise solutions.",
    span: "md:col-span-2 md:row-span-1",
  },
];

export const TestimonialSection = () => {
  return (
    <section className="bg-black py-32 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            Trusted by <span className="text-blue-500">Industry Leaders</span>
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            Don't just take our word for it. Here's what our clients have to say about the digital masterpieces we've engineered.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-3 lg:gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm hover:bg-white/[0.04] transition-colors ${item.span}`}
            >
              <Quote className="absolute -right-4 -top-4 h-24 w-24 text-white/5 transition-transform group-hover:scale-110 group-hover:text-blue-500/10" />
              
              <div className="relative z-10 flex h-full flex-col justify-between">
                <p className="mb-8 text-lg leading-relaxed text-gray-300 md:text-xl">
                  "{item.text}"
                </p>
                <div>
                  <h4 className="font-bold text-white">{item.name}</h4>
                  <p className="text-sm text-blue-400">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};