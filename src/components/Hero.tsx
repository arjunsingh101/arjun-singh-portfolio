"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export default function Hero() {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Only show cursor if it's over the hero section (roughly)
      // or just show it everywhere if we want global.
      // Let's show it only when x/y is within a reasonable range or based on section ref
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const now = Date.now();
    
    // Add a new ripple
    setRipples((prev) => [
      ...prev.slice(-30), // Increased history for a longer trail
      { id: now, x: clientX, y: clientY }
    ]);
  }, []);

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      className="relative z-10 flex h-screen flex-col items-center justify-center px-6 pt-20 text-center overflow-hidden cursor-none"
    >
      {/* Custom Cursor Dot */}
      <motion.div
        className="pointer-events-none fixed z-50 h-3 w-3 rounded-full bg-primary shadow-[0_0_15px_rgba(79,70,229,0.8)]"
        animate={{
          x: mousePos.x - 6,
          y: mousePos.y - 6,
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 250, mass: 0.5 }}
      />

      {/* Interactive Ripples (Water-like) */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{ scale: 0.2, opacity: 0.8 }}
            animate={{ scale: 12, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            onAnimationComplete={() => {
              setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
            }}
            className="pointer-events-none absolute h-10 w-10 rounded-full border border-primary/30"
            style={{
              left: ripple.x - 20,
              top: ripple.y - 20,
              background: "radial-gradient(circle, rgba(79, 70, 229, 0.15) 0%, transparent 70%)",
              boxShadow: "0 0 20px rgba(79, 70, 229, 0.1) inset"
            }}
          />
        ))}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 max-w-4xl"
      >
        <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-accent drop-shadow-md">
          Senior Frontend Engineer
        </h2>
        <h1 className="mb-6 text-6xl font-bold tracking-tight text-white drop-shadow-2xl sm:text-7xl md:text-8xl">
          Arjun Singh
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg font-medium text-zinc-100 drop-shadow-xl md:text-xl">
          Crafting immersive digital experiences with high-performance code and
          stunning visuals. Specializing in React, Next.js, and 3D interactions.
        </p>

        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
          <a
            href="#projects"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-primary px-8 font-medium text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-primary/40"
          >
            <span className="mr-2">View Projects</span>
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
          </a>
          
          <div className="flex gap-4">
             {/* Social Links */}
             <a href="#" className="p-3 text-zinc-300 transition-colors hover:text-white hover:bg-white/10 rounded-full hover:shadow-lg hover:shadow-white/5 drop-shadow-md">
                <Github className="h-6 w-6" />
             </a>
             <a href="#" className="p-3 text-zinc-300 transition-colors hover:text-white hover:bg-white/10 rounded-full hover:shadow-lg hover:shadow-white/5 drop-shadow-md">
                <Linkedin className="h-6 w-6" />
             </a>
             <a href="#" className="p-3 text-zinc-300 transition-colors hover:text-white hover:bg-white/10 rounded-full hover:shadow-lg hover:shadow-white/5 drop-shadow-md">
                <Mail className="h-6 w-6" />
             </a>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-muted">Scroll</span>
            <div className="h-12 w-[1px] bg-gradient-to-b from-muted to-transparent"></div>
        </div>
      </motion.div>
    </section>
  );
}
