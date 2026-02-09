"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative z-10 py-20 lg:py-32">
      <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="mb-8 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                About Me
              </h2>
              
              <div className="space-y-6 text-lg leading-relaxed text-zinc-400">
                <p>
                  I am a passionate Senior Frontend Engineer with over 6 years of experience in building high-performance 
                  web applications. My journey involves bridging the gap between design and technology, ensuring that 
                  every user interface I build is not only functional but also visually stunning and intuitive.
                </p>
                <p>
                  Specializing in the React ecosystem (Next.js, React Native, Redux), I have successfully delivered 
                  complex projects ranging from Real Estate platforms to FinTech dashboards. I thrive in collaborative 
                  environments where I can lead frontend architecture, mentor junior developers, and drive code quality 
                  standards.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new 3D web technologies, contributing to open-source, 
                  or staying up-to-date with the latest trends in UI/UX design. I believe in continuous learning 
                  and applying cutting-edge solutions to solve real-world problems.
                </p>
              </div>
            </motion.div>
      </div>
    </section>
  );
}
