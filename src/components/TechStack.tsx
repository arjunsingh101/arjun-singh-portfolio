"use client";

import { motion } from "framer-motion";
import {
  Box,
  Code2,
  Cpu,
  Database,
  FileCode2,
  Gauge,
  GitBranch,
  Globe,
  Layers,
  Layout,
  Palette,
  Search,
  Server,
  ShieldCheck,
  Smartphone,
  Terminal,
  TestTube,
  Zap,
} from "lucide-react";

const techStack = [
  // Frontend
  { name: "React.js", icon: <Code2 />, category: "Library" },
  { name: "Next.js", icon: <Layers />, category: "Framework" },
  { name: "React Native", icon: <Smartphone />, category: "Mobile" },
  { name: "Redux", icon: <Database />, category: "State Management" },
  { name: "Tailwind", icon: <Palette />, category: "Styling" },
  { name: "Material UI", icon: <Palette />, category: "Styling" },
  { name: "Bootstrap", icon: <Palette />, category: "Styling" },

  // Languages
  { name: "JavaScript", icon: <FileCode2 />, category: "Language" },
  { name: "TypeScript", icon: <FileCode2 />, category: "Language" },
  { name: "HTML5", icon: <Code2 />, category: "Markup" },
  { name: "CSS3", icon: <Palette />, category: "Styling" },

  // Backend & Databases
  { name: "Node.js", icon: <Server />, category: "Backend" },
  { name: "Express", icon: <Server />, category: "Backend" },
  { name: "MySQL", icon: <Database />, category: "Database" },
  { name: "PostgreSQL", icon: <Database />, category: "Database" },
  { name: "MongoDB", icon: <Database />, category: "Database" },
  { name: "Firebase", icon: <Database />, category: "Database" },

  // Tools & DevOps
  { name: "Git", icon: <GitBranch />, category: "Version Control" },
  { name: "Docker", icon: <Box />, category: "DevOps" },
  { name: "AWS", icon: <Globe />, category: "Cloud" },
  // { name: "Vercel", icon: <Zap />, category: "Deployment" },
  { name: "Postman", icon: <TestTube />, category: "Testing" },
  { name: "Figma", icon: <Palette />, category: "Design" },
  { name: "VS Code", icon: <Terminal />, category: "IDE" },
  { name: "Jira", icon: <Layout />, category: "Management" },
];

const coreSkills = [
  { name: "Responsive Design", icon: <Smartphone className="w-4 h-4" /> },
  { name: "Web Performance", icon: <Gauge className="w-4 h-4" /> },
  { name: "Testing/Debugging", icon: <TestTube className="w-4 h-4" /> },
  { name: "SEO Optimization", icon: <Search className="w-4 h-4" /> },
  {
    name: "Secure KYC Implementation",
    icon: <ShieldCheck className="w-4 h-4" />,
  },
];

const certificates = [
  "SQL training from Intellipaat",
  "Automation Testing tool Workshop",
  "Workshop on CISCO networking and routing protocols",
  "Workshop on Digital Marketing",
];

export default function TechStack() {
  return (
    <section
      id="skills"
      className="relative z-10 py-32 overflow-hidden bg-black"
    >
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Central glow effect */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-150 w-200 -translate-x-1/2 -translate-y-1/2 bg-purple-600/20 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black tracking-tighter text-white sm:text-6xl uppercase"
          >
            Tech Stack
          </motion.h2>
          <div className="mt-4 h-1.5 w-24 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>

        {/* Clustered Tech Icons */}
        <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto px-4">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: index * 0.03,
              }}
              whileHover={{
                scale: 1.15,
                backgroundColor: "rgba(139, 92, 246, 0.2)",
                borderColor: "rgba(139, 92, 246, 0.4)",
                boxShadow: "0 0 30px rgba(139, 92, 246, 0.3)",
                zIndex: 20,
              }}
              className={`group flex h-24 w-24 flex-col items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 ${index % 2 === 0 ? "mt-8" : ""}`}
            >
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-primary group-hover:scale-110 transition-transform">
                {tech.icon}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 group-hover:text-white">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 grid gap-16 lg:grid-cols-2 lg:items-start">
          {/* Core Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-8 text-2xl font-bold text-white flex items-center gap-3">
              <Cpu className="text-primary" /> Core Competencies
            </h3>
            <div className="grid gap-4">
              {coreSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 text-zinc-300 transition-all hover:border-primary/30 hover:bg-white/[0.05]"
                >
                  <div className="rounded-lg bg-primary/10 p-2 text-primary">
                    {skill.icon}
                  </div>
                  <span className="font-medium text-lg">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certificates */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-8 text-2xl font-bold text-white flex items-center gap-3">
              <Zap className="text-primary" /> Certificates & Training
            </h3>
            <div className="space-y-4">
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="group relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all hover:border-primary/20"
                >
                  <div className="relative z-10 flex items-start gap-4">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors">
                      {cert}
                    </span>
                  </div>
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
