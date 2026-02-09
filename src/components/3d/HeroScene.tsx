"use client";

import { Environment, OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import HeroObject from "./HeroObject";

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full">
      <Canvas dpr={[1, 2]} gl={{ antialias: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#4f46e5" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#06b6d4" />
        <spotLight
          position={[0, 10, 0]}
          angle={0.5}
          penumbra={1}
          intensity={2}
          castShadow
          shadow-mapSize={1024}
        />

        <Suspense fallback={null}>
          <HeroObject />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <Environment preset="city" />
        </Suspense>

        <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            maxPolarAngle={Math.PI / 2} 
            minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
