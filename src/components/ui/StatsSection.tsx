"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

interface CounterProps {
  value: number;
  label: string;
  suffix?: string;
}

const AnimatedCounter = ({ value, label, suffix = "" }: CounterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const count = useMotionValue(0);
  // Premium spring physics for smooth slow-down at the end
  const spring = useSpring(count, { duration: 2500, bounce: 0 });
  const rounded = useTransform(spring, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      count.set(value);
    }
  }, [inView, value, count]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 text-center">
      <div className="flex items-center justify-center">
        <motion.span className="text-5xl font-black tracking-tighter text-white md:text-7xl">
          {rounded}
        </motion.span>
        <span className="text-4xl font-bold text-blue-500 md:text-6xl">{suffix}</span>
      </div>
      <p className="mt-4 text-sm font-medium tracking-wide text-gray-400 uppercase">
        {label}
      </p>
    </div>
  );
};

export const StatsSection = () => {
  return (
    <section className="relative z-10 border-y border-white/5 bg-white/[0.01] py-20 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <AnimatedCounter value={50} label="Happy Clients" suffix="+" />
          <AnimatedCounter value={120} label="Projects Delivered" suffix="+" />
          <AnimatedCounter value={99} label="Client Retention" suffix="%" />
          <AnimatedCounter value={24} label="Tech Experts" suffix="/7" />
        </div>
      </div>
    </section>
  );
};