"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 section-gradient card-glass z-20" id="experience">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1 mb-6 border rounded-full border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium tracking-wide">
            Work Experience
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Experience</span>
          </h2>
        </motion.div>
        <div className="space-y-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row gap-8"
          >
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-blue-400 mb-2">Software Development Intern</h3>
              <div className="text-gray-400 mb-2">Civil Supplies Department, Goa</div>
              <div className="text-xs text-gray-500 mb-2">Jul 2025 - Sep 2025 | Hybrid, Panaji</div>
              <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm mb-2">
                <li>Built road-aware FPS Redirection System serving 1,400+ shops and 8 lakh+ households using OpenRouteService API for real road distances</li>
                <li>Developed Smart Redirection algorithm reassigning 41+ beneficiaries per operation, replacing straight-line estimates with actual road routing</li>
                <li>Implemented real-time FPS Status Management for 43 shops with instant Open/Closed toggling triggering automatic beneficiary reassignment</li>
                <li>Integrated Leaflet.js Map Visualization showing user location, closed FPS, top-3 alternatives, and route paths</li>
                <li>Built Admin Dashboard for managing FPS network across 2 districts with downloadable Excel reports for audit and oversight</li>
                <li>Deployed on Vercel with secure auth, processing bulk Excel uploads of 43 FPS and 41+ beneficiary records per reassignment cycle</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 text-xs font-medium text-gray-300 bg-blue-500/10 border border-blue-500/20 rounded-full">Node.js</span>
                <span className="px-3 py-1 text-xs font-medium text-gray-300 bg-blue-500/10 border border-blue-500/20 rounded-full">React</span>
                <span className="px-3 py-1 text-xs font-medium text-gray-300 bg-blue-500/10 border border-blue-500/20 rounded-full">Leaflet.js</span>
                <span className="px-3 py-1 text-xs font-medium text-gray-300 bg-blue-500/10 border border-blue-500/20 rounded-full">OpenRouteService API</span>
                <span className="px-3 py-1 text-xs font-medium text-gray-300 bg-blue-500/10 border border-blue-500/20 rounded-full">Bootstrap</span>
                <span className="px-3 py-1 text-xs font-medium text-gray-300 bg-blue-500/10 border border-blue-500/20 rounded-full">JavaScript</span>
                <span className="px-3 py-1 text-xs font-medium text-gray-300 bg-blue-500/10 border border-blue-500/20 rounded-full">GitHub</span>
                <span className="px-3 py-1 text-xs font-medium text-gray-300 bg-blue-500/10 border border-blue-500/20 rounded-full">Vercel</span>
              </div>
            </div>
            {/* Contact info removed as per user request. All contact is now via the Contact Me button in the Hero section. */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
