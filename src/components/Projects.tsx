"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitBranch } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "SM REits Landing Page",
    description: "A New Era of Real Estate Investments in India.",
    tags: ["Next.Js", "React.Js", "Javascript"],
    image: "/sm-reits.png",
    link: "https://hbits.co",
    github: "",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Jewellery Web App",
    description:
      "Discover our exquisite collection of handcrafted Indian jewellery, designed to celebrate your most precious moments.",
    tags: ["Next.Js", "React.Js", "Javascript"],
    image: "/parni-jewels.png",
    link: "https://parnijewels.com",
    github: "",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Premium Tours and Travel Website;",
    description:
      "Custom domestic and international itineraries for luxury escapes | bold adventures | family vacations | cruises | honeymoons and corporate travel.",
    tags: ["Nextjs", "ReactJs", "NodeJs"],
    image: "/travel-bug-tales.png",
    link: "https://travelbugtales.com/",
    github: "",
    color: "from-green-500 to-red-500",
  },
  {
    title: "Zark News Android App",
    description:
      "A news aggregation mobile application built for Android platforms.",
    tags: ["React Native", "Javascript"],
    image: "",
    link: "",
    github: "",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website designed for an institute to showcase curriculum and events.",
    tags: ["React.js", "Javascript"],
    image: "",
    link: "",
    github: "",
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "E-commerce Book Shop",
    description:
      "A full-stack e-commerce platform for selling books with inventory management.",
    tags: ["PHP", "MySQL"],
    image: "",
    link: "",
    github: "",
    color: "from-orange-500 to-red-500",
  },
];

export default function Projects() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    const mouseX = clientX - left;
    const mouseY = clientY - top;

    currentTarget.style.setProperty("--mouse-x", `${mouseX}px`);
    currentTarget.style.setProperty("--mouse-y", `${mouseY}px`);
  };

  return (
    <section id="projects" className="bg-black py-24 text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-4xl font-bold tracking-tight sm:text-5xl"
        >
          Featured Work
        </motion.h2>

        <div className="grid gap-12 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              onMouseMove={handleMouseMove}
              onClick={() => {
                project.link && window.open(project.link, "_blank");
              }}
              className="group cursor-pointer relative rounded-2xl bg-zinc-900 overflow-hidden border border-white/10"
            >
              {/* Image Placeholder area */}
              <div
                className={`h-48 w-full bg-linear-to-br ${project.color} opacity-80 transition-opacity group-hover:opacity-100`}
              >
                {project.image && (
                  <Image
                    alt="project image"
                    className="w-full h-full"
                    src={project.image}
                    width={200}
                    height={200}
                  />
                )}
              </div>

              <div className="p-8">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="mb-3 text-2xl font-bold">{project.title}</h3>
                <p className="mb-6 text-zinc-400">{project.description}</p>

                <div className="flex items-center gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      className="flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-primary"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-primary"
                    >
                      <GitBranch size={16} /> Code
                    </a>
                  )}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(255,255,255,0.06), transparent 40%)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
