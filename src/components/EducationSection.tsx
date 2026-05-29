"use client";

import { motion } from "framer-motion";

const education = {
  college: "Goa Engineering College, Ponda, Goa",
  degree: "Bachelor in Information Technology",
  cgpa: "7.55",
  period: "Sep 2022 - Present"
};

const certifications = [
  "IBM - Machine Learning with Python",
  "IBM - Databases and SQL for Data Science",
  "IBM - Python for Data Science, AI and Development",
  "NPTEL - Data Analytics with Python",
  "NPTEL - Joy of Computing using Python",
  "HuggingFace - Agent Course"
];

export default function EducationSection() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 section-gradient card-glass z-20" id="education">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1 mb-6 border rounded-full border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium tracking-wide">
            Education & Certifications
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Education</span>
          </h2>
        </motion.div>
        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col gap-6 mb-10">
          <h3 className="text-2xl font-bold text-green-400 mb-2">{education.college}</h3>
          <div className="text-gray-400 mb-1">{education.degree}</div>
          <div className="text-xs text-gray-500 mb-1">{education.period}</div>
          {/* CGPA removed as per user request */}
        </div>
        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col gap-4">
          <h3 className="text-xl font-bold text-green-400 mb-2">Certifications</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
            {certifications.map((cert, idx) => (
              <li key={idx}>{cert}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
