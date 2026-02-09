"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "HBits Property Management Private Limited",
    period: "JAN 2024 - Present",
    description: "Leading the core UI team, migrating legacy micro-frontends to Next.js 14, and improving LCP by 40%.",
  },
  {
    role: "Software Development Engineer",
    company: "HDFC LIFE",
    period: "OCT 2022 - NOV 2023",
    description: "Developed award-winning campaigns for Fortune 500 clients using WebGL and GSAP.",
  },
  {
    role: "Junior Web Developer",
    company: "Startup Inc.",
    period: "2018 - 2020",
    description: "Full-stack development with React and Node.js, focusing on internal dashboard tools.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-zinc-950 py-24 text-white">
      <div className="container mx-auto px-6">
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Experience
        </h2>

        <div className="relative border-l border-white/20 ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Dot on timeline */}
              <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-black" />
              
              <h3 className="text-xl font-bold text-white">{exp.role}</h3>
              <div className="mb-2 flex items-center gap-2 text-sm text-zinc-400">
                <span>{exp.company}</span>
                <span>•</span>
                <span>{exp.period}</span>
              </div>
              <p className="max-w-2xl text-zinc-400 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
