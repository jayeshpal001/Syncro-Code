"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Environment } from "@react-three/drei";

export const Hero3D = () => {
    return (
        <div className="absolute inset-0 z-0 h-full w-full">
            {/* OPTIMIZATION 1: dpr={[1, 1.5]} 
              Yeh phone ko force karega ki maximum 1.5x resolution par render kare,
              jis se battery aur GPU dono bachenge. 
            */}
            <Canvas 
              camera={{ position: [0, 0, 5], fov: 45 }}
              dpr={[1, 1.5]} 
              gl={{ antialias: false }} // Mobile par extra smoothing band, performance boost
            >
                {/* Lighting setup for premium reflection */}
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={2} />
                <Environment preset="city" />

                {/* OPTIMIZATION 2: [1, 32, 32] 
                  Vertices ko 64x64 se 32x32 kar diya. Dikhne mein same, 
                  par math calculations 75% kam! 
                */}
                <Sphere visible args={[1, 32, 32]} scale={1.5}>          
                    <MeshDistortMaterial
                        color="#2563eb" // Brand Blue
                        attach="material"
                        distort={0.4} // Kitna deform hoga
                        speed={2}     // Animation speed
                        roughness={0.2}
                        metalness={0.8}
                    />
                </Sphere>
                {/* OPTIMIZATION 3: Touch Disable
                  enableRotate={false} karne se user 3D ko ghumane ke chakkar mein 
                  website ka scroll nahi atkayega. Auto-rotate ab bhi kaam karega!
                */}
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    enableRotate={false} 
                    autoRotate
                    autoRotateSpeed={0.5}
                />
            </Canvas>

            {/* Gradient overlay to blend 3D canvas smoothly with the dark background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black pointer-events-none" />
        </div>
    );
};