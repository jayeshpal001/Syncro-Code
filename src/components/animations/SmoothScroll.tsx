"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

export const SmoothScroll = ({ children }: { children: ReactNode }) => {
  return (
    <ReactLenis 
      root 
      options={{
        lerp: 0.08, // Scroll ki smoothness
        duration: 1.5, // Momentum
        smoothWheel: true,
      }}
    >
      {children as any}
    </ReactLenis>
  );
};