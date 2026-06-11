"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "HBits Property Management Private Limited",
    period: "JAN 2024 - Present",
    description:
      "Leading the core UI team, migrated legacy micro-frontends to Next.js 14, and improved LCP by 40%.",
  },
  {
    role: "Software Development Engineer",
    company: "HDFC LIFE",
    period: "OCT 2022 - NOV 2023",
    description:
      "Spearheaded the creation of a cutting-edge retirement technology product. Utilized a modern tech stack that included Next.js,ReactJs,Material-UI (MUI), TypeScript, and Context API.",
  },
  {
    role: "Frontend Developer",
    company: "Brown Bunny Healthtech Private Limited",
    period: "SEP 2021 - SEP 2022",
    description:
      "Led the development of a sophisticated web portal catering to doctors and hospital officials. Utilized a robust tech stack comprising ReactJS, NextJs, TypeScript, Material-UI (MUI), and Redux.",
  },
  {
    role: "Web Developer",
    company: "Globtier Infotech Private Limited",
    period: "JAN 2020 - AUG 2021",
    description:
      "Worked on multiple web portal for client mahindra & mahindra Limited.",
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
