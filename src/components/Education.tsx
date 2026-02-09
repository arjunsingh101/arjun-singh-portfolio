"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="bg-black py-24 text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
           className="mb-12 text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Education
        </motion.h2>

        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 p-8 transition-colors hover:border-primary/50"
        >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                   <div className="mb-2 flex items-center gap-3">
                        <div className="rounded-lg bg-primary/20 p-2 text-primary">
                            <GraduationCap size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white">B.Sc (Information Technology)</h3>
                   </div>
                   <p className="text-lg text-zinc-300">Mumbai University</p>
                   <p className="text-sm text-zinc-400">Shailendra College of Arts, Commerce and Science, Dahisar</p>
                </div>
                <div className="text-right">
                    <span className="block text-sm font-medium text-primary">04/2016 - 06/2019</span>
                    <span className="mt-1 block text-sm text-zinc-500">CGPA: 7.47</span>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
