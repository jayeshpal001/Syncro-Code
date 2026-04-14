"use client";

import { ReactLenis } from 'lenis/react'; 
import { ReactNode } from "react";

export const SmoothScroll = ({ children }: { children: ReactNode }) => {
  return (
    <ReactLenis 
      root 
      options={{
        lerp: 0.08, // Scroll ki smoothness
        duration: 1.5, // Momentum
        smoothWheel: true,
        // 🔥 MOBILE OPTIMIZATION: Phone par native swipe chalne do, hijack mat karo
        syncTouch: false, 
      }}
    >
      {/* Ab 'as any' likhne ki zaroorat nahi hai */}
      {children}
    </ReactLenis>
  );
};