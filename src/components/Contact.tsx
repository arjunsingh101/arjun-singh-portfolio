"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 py-24 text-center">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl space-y-8 rounded-3xl bg-white/5 p-12 ring-1 ring-white/10 backdrop-blur-xl"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let's Build Something Amazing
          </h2>
          <p className="text-lg text-zinc-400">
            I'm currently available for freelance projects and open to new opportunities.
            If you have a project in mind or just want to say hi, feel free to reach out!
          </p>

          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <a
              href="mailto:hello@arjunsingh.dev"
              className="flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-medium text-white transition-all hover:bg-primary/90 hover:scale-105"
            >
              <Mail className="h-5 w-5" />
              mailonarjunsingh@gmail.com
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-sm text-zinc-500">
             <MapPin className="h-4 w-4" />
             Based in Mumbai, IN
          </div>
        </motion.div>

        <footer className="mt-20 text-sm text-zinc-600">
          © {new Date().getFullYear()} Arjun Singh. All rights reserved.
        </footer>
      </div>
    </section>
  );
}
