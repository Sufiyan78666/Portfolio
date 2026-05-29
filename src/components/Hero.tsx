"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="inline-block px-4 py-1 mb-8 border rounded-full border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium tracking-wide"
      >
        <span className="animate-pulse inline-block w-2 h-2 mr-2 bg-blue-500 rounded-full"></span>
        System Online · AI Protocol Initialized
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4"
      >
        Hi, I'm <span className="text-gradient">Sufiyan Khan</span>
      </motion.h1>

      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="text-2xl md:text-3xl font-medium text-gray-300 mb-6"
      >
        <span className="text-blue-400">AI Engineer</span> <span className="text-gray-600 px-2">|</span> <span className="text-purple-400">Machine Learning</span> <span className="text-gray-600 px-2">|</span> Deep Learning
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="max-w-2xl text-gray-400 text-lg md:text-xl mb-12 leading-relaxed"
      >
        Passionate IT student building intelligent systems.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="flex flex-col sm:flex-row gap-5"
      >
        <a
          href="#major-projects"
          className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all glow-blue"
        >
          View Projects
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
        </a>
        <a
          href="#contact"
          className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-purple-500/40 hover:border-purple-400 bg-black/50 hover:bg-purple-500/10 text-white font-semibold transition-all hover:glow-purple"
        >
          <Mail size={18} />
          Contact Me
        </a>
      </motion.div>
    </div>
  );
}
