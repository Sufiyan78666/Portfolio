"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 section-gradient card-glass z-20" id="contact">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 mb-6 border rounded-full border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-medium tracking-wide">
            Contact
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg md:text-xl">
            Feel free to reach out for collaboration, project inquiries, or just to connect!
          </p>
        </motion.div>
        <div className="flex flex-col gap-6 items-center justify-center">
          <a
            href="mailto:sufiyankhan7339@gmail.com"
            className="flex items-center gap-3 px-8 py-4 rounded-full border border-blue-500/30 hover:border-blue-400 text-blue-400 hover:text-white bg-black/50 hover:bg-blue-500/10 font-semibold transition-all w-full max-w-md justify-center text-lg"
            title="Email"
          >
            <Mail size={22} />
            sufiyankhan7339@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/sufiyan-khan-636408286"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full border border-blue-500/30 hover:border-blue-400 text-blue-400 hover:text-white bg-black/50 hover:bg-blue-500/10 font-semibold transition-all w-full max-w-md justify-center text-lg"
            title="LinkedIn"
          >
            <Linkedin size={22} />
            LinkedIn
          </a>
          <a
            href="https://github.com/Sufiyan78666"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full border border-blue-500/30 hover:border-blue-400 text-blue-400 hover:text-white bg-black/50 hover:bg-blue-500/10 font-semibold transition-all w-full max-w-md justify-center text-lg"
            title="GitHub"
          >
            <Github size={22} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
