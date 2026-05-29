"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Self-Improving RAG (Retrieval-Augmented Generation)",
    role: "AI/ML Engineer",
    description: [
      "Built FAISS + BM25 Hybrid Retrieval via Reciprocal Rank Fusion + Cross-Encoder reranking, improving retrieval precision by ~30% over single method approaches.",
      "Integrated 4 LLM providers (Gemini, LLaMA 3/Groq, NVIDIA, Ollama) with LangSmith tracing capturing 100% of pipeline runs with latency metadata.",
      "Designed Smart Feedback Loop collecting 50+ signals (thumbs up/down, dwell time, citation clicks) to auto-build Cross-Encoder training datasets.",
      "Built automated fine-tuning pipeline with background scheduler, evaluating via NDCG@K — deploys only if new reranker outperforms baseline.",
      "Developed A/B testing framework comparing reranker versions, ensuring only performance-validated models are promoted to production.",
      "Built Streamlit UI with chat, document ingestion, and real-time metrics backed by async SQLite — 0 manual intervention in retraining cycle."
    ],
    tech: ["Python", "FAISS", "BM25", "SentenceTransformers", "Groq", "LangSmith", "SQLite", "Streamlit"],
    link: "https://erx8gib29mgjvxs4cufkcn.streamlit.app/",
    period: "Present"
  },
  {
    title: "Aura Voice Agent",
    role: "Agentic AI Developer",
    description: [
      "Built real-time voice AI assistant using Python async WebSocket + React, supporting natural conversation with 2 LLMs (Gemma 4 31B & Qwen 3.5 122B) via Ollama Cloud.",
      "Implemented persistent memory using PostgreSQL across 4 data stores — conversation history, user profile, alarms, and documents — surviving restarts and redeployments.",
      "Developed RAG pipeline using HuggingFace BAAI/bge-small-en-v1.5 embeddings + ChromaDB vector search, enabling voice-based chat with uploaded PDFs with 0 manual indexing.",
      "Integrated Smart Tool Routing across 6+ tools — Weather, Calculator, Alarms, Web Search (Tavily), RAG, Gmail API — auto-invoked based on user intent.",
      "Added 3-language support (English, Hindi, Hinglish) using Web Speech API (STT) and Browser Speech Synthesis (TTS) with smart language matching.",
      "Deployed on Cloudflare Pages + Railway via secure WebSocket (wss://), with 100% observability via Langfuse tracing across all pipeline runs."
    ],
    tech: ["Python", "React", "PostgreSQL", "Ollama", "ChromaDB", "Tavily", "WebSockets", "Langfuse"],
    link: "https://aura-voice-agent.sufiyankhan7339.workers.dev/",
    period: "Present"
  }
];

export default function MajorProjectsSection() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 section-gradient card-glass z-20" id="major-projects">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1 mb-6 border rounded-full border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-medium tracking-wide">
            Major Projects
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            AI & ML <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Projects</span>
          </h2>
        </motion.div>
        <div className="space-y-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col gap-4"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-bold text-purple-400">{project.title}</h3>
                  {project.link && project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 text-xs font-semibold rounded-full border border-purple-500/40 text-purple-400 hover:bg-purple-500/10 transition-colors"
                    >
                      Live
                    </a>
                  )}
                </div>
                <span className="text-xs text-gray-400 font-semibold">{project.role} | {project.period}</span>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm mb-2">
                {project.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-medium text-gray-300 bg-purple-500/10 border border-purple-500/20 rounded-full">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
