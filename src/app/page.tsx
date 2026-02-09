import HeroScene from "@/components/3d/HeroScene";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-black text-white selection:bg-primary selection:text-white overflow-x-hidden">
      <Navbar />
      
      {/* 3D Background - Confined to Hero section height */}
      <div className="relative h-screen w-full overflow-hidden">
        <HeroScene />
        <Hero />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 space-y-24 bg-black pb-24">
        <About />
        <TechStack />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
