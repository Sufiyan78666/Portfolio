"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "Java", "SQL"]
  },
  {
    category: "AI/ML & Deep Learning",
    items: ["PyTorch", "Scikit-learn", "Transformers", "Deep Learning", "CNNs", "RNNs", "LSTMs", "Embeddings", "Fine-tuning", "RAG", "Prompt Engineering", "Machine Learning"]
  },
  {
    category: "LLM Frameworks",
    items: ["LangChain", "LangGraph", "LlamaIndex", "SentenceTransformers"]
  },
  {
    category: "Vector DBs & Retrieval",
    items: ["FAISS", "ChromaDB", "BM25", "Hybrid Search", "Reranking"]
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "SQLite"]
  },
  {
    category: "Deployment & Tools",
    items: ["Docker", "Git", "GitHub", "Streamlit", "Render", "Railway", "Ollama", "LangSmith", "Langfuse"]
  },
  {
    category: "Libraries",
    items: ["Pandas", "NumPy", "Matplotlib", "OpenCV"]
  }
];

export default function SkillsSection() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 section-gradient card-glass z-20" id="skills">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1 mb-6 border rounded-full border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium tracking-wide">
            Skills
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Skills</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col gap-4"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-2">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-medium text-gray-300 bg-blue-500/10 border border-blue-500/20 rounded-full">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
