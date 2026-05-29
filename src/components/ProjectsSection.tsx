"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Deep Audio Classification",
    category: "Deep Learning",
    description: "Advanced deep learning models designed to classify environmental sounds and speech patterns using CNNs operating on audio spectrograms.",
    tech: ["Python", "TensorFlow", "Librosa", "CNN"],
    color: "from-purple-500 to-blue-500",
    glow: "hover:shadow-[0_0_35px_rgba(168,85,247,0.4)] hover:border-purple-500/50"
  },
  {
    title: "Boston House Prediction",
    category: "Machine Learning",
    description: "End-to-end machine learning regression pipeline predicting housing prices through advanced feature engineering and ensemble methods.",
    tech: ["Python", "Scikit-Learn", "XGBoost", "Pandas"],
    color: "from-blue-400 to-cyan-400",
    glow: "hover:shadow-[0_0_35px_rgba(59,130,246,0.4)] hover:border-blue-500/50"
  },
  {
    title: "AI Document Retrieval",
    category: "AI Applications",
    description: "NLP-powered search application capable of parsing, indexing, and executing highly accurate semantic searches across vast document corpuses.",
    tech: ["Transformers", "FastAPI", "Pinecone", "Next.js"],
    color: "from-emerald-400 to-teal-400",
    glow: "hover:shadow-[0_0_35px_rgba(16,185,129,0.4)] hover:border-emerald-500/50"
  }
];

export default function ProjectsSection() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-black z-20" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1 mb-6 border rounded-full border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium tracking-wide">
            Portfolio
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Work</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl">
            A selection of my best work across Machine Learning, Deep Learning, and AI infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={`group relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col h-full transition-all duration-300 ${project.glow}`}
            >
              <div className="flex justify-between items-start mb-6">
                <span className={`text-xs font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r ${project.color}`}>
                  {project.category}
                </span>
                <div className="flex gap-3 text-gray-500">
                  <Github className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                  <ExternalLink className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-8 flex-grow leading-relaxed text-sm md:text-base">
                {project.description}
              </p>
              
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs font-medium text-gray-300 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative top gradient line */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
