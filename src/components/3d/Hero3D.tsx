"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Environment } from "@react-three/drei";

export const Hero3D = () => {
  return (
    <div className="absolute inset-0 z-0 h-full w-full">
      {/* 3D Canvas initialization */}
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        {/* Lighting setup for premium reflection */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <Environment preset="city" />
        
        {/* The 3D Object: A sphere with liquid-like distortion */}
        <Sphere visible args={[1, 100, 200]} scale={1.5}>
          <MeshDistortMaterial
            color="#2563eb" // Brand Blue
            attach="material"
            distort={0.4} // Kitna deform hoga
            speed={2}     // Animation speed
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
        
        {/* User interaction and auto-rotation */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5} 
        />
      </Canvas>
      
      {/* Gradient overlay to blend 3D canvas smoothly with the dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
    </div>
  );
};