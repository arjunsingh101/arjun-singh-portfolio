"use client";

import { Float, Icosahedron } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

export default function HeroObject() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Mouse interaction
    const mouseX = state.mouse.x * 2;
    const mouseY = state.mouse.y * 2;

    // Smooth rotation matching mouse
    meshRef.current.rotation.x += (mouseY * 0.5 - meshRef.current.rotation.x) * 0.05;
    meshRef.current.rotation.y += (mouseX * 0.5 - meshRef.current.rotation.y) * 0.05;
    
    // Constant slow rotation
    meshRef.current.rotation.z += 0.005;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <group ref={meshRef}>
            <Icosahedron args={[1, 1]}>
                <meshStandardMaterial 
                    color="#4f46e5" 
                    roughness={0.3} 
                    metalness={0.8}
                    wireframe={true} 
                /> 
            </Icosahedron>
            <Icosahedron args={[0.8, 1]} position={[0,0,0]}>
                 <meshStandardMaterial 
                    color="#8b5cf6" 
                    roughness={0.1} 
                    metalness={0.5}
                    emissive="#4f46e5"
                    emissiveIntensity={0.2}
                 />
            </Icosahedron>
        </group>
    </Float>
  );
}
