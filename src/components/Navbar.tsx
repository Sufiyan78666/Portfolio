"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Terminal } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-40 glass-nav px-6 py-4 flex justify-between items-center"
    >
      <div className="flex items-center gap-2">
        <Terminal className="text-blue-500" size={24} />
        <span className="font-bold text-xl tracking-wider text-white">SK<span className="text-blue-500">.</span>AI</span>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
        <Link href="#about" className="hover:text-blue-400 transition-colors">About</Link>
        <Link href="#skills" className="hover:text-purple-400 transition-colors">Skills</Link>
        <Link href="#major-projects" className="hover:text-blue-400 transition-colors">Projects</Link>
      </div>
      <div>
        <a
          href="/Sufiyan_Khan_Resume_v2.pdf.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-full border border-blue-500/30 hover:border-blue-400 text-sm font-medium transition-all hover:glow-blue hover:text-white text-gray-300"
        >
          Resume
        </a>
      </div>
    </motion.nav>
  );
}
