"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

type Command = {
  cmd: string;
  output: React.ReactNode;
};

const WELCOME_MESSAGE = "Welcome to SK.OS v1.0.0. Initializing AI environment... Type 'help' to see available commands.";

export default function TerminalPortfolio() {
  const [history, setHistory] = useState<Command[]>([]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyPointer, setHistoryPointer] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial typing anmation for welcome
    setHistory([{ cmd: "", output: <Typewriter text={WELCOME_MESSAGE} /> }]);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    let output: React.ReactNode = "";

    switch (trimmed) {
      case "help":
        output = (
          <div className="flex flex-col gap-2 mt-2">
            <p className="text-cyan-400 font-semibold mb-1">Available commands:</p>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
              <span className="bg-blue-900/40 border border-blue-500/20 rounded px-3 py-1 text-blue-300 font-mono text-xs">about <span className="text-gray-400">- Info about me</span></span>
              <span className="bg-indigo-900/40 border border-indigo-500/20 rounded px-3 py-1 text-indigo-300 font-mono text-xs">experience <span className="text-gray-400">- Work experience</span></span>
              <span className="bg-purple-900/40 border border-purple-500/20 rounded px-3 py-1 text-purple-300 font-mono text-xs">projects <span className="text-gray-400">- My work</span></span>
              <span className="bg-green-900/40 border border-green-500/20 rounded px-3 py-1 text-green-300 font-mono text-xs">skills <span className="text-gray-400">- Skills & tools</span></span>
              <span className="bg-yellow-900/40 border border-yellow-500/20 rounded px-3 py-1 text-yellow-300 font-mono text-xs">education <span className="text-gray-400">- Education</span></span>
              <span className="bg-pink-900/40 border border-pink-500/20 rounded px-3 py-1 text-pink-300 font-mono text-xs">contact <span className="text-gray-400">- Get in touch</span></span>
              <span className="bg-gray-900/40 border border-gray-500/20 rounded px-3 py-1 text-gray-300 font-mono text-xs">clear <span className="text-gray-400">- Clear history</span></span>
            </div>
          </div>
        );
        break;
            case "experience":
              output = (
                <div className="mt-2 p-4 rounded-lg bg-gradient-to-r from-indigo-900/40 to-blue-900/40 border border-indigo-500/10">
                  <div className="text-lg font-bold text-indigo-300 mb-1">Software Development Intern</div>
                  <div className="text-md font-semibold text-gray-300 mb-1">Civil Supplies Department, Goa</div>
                  <div className="text-gray-400 text-xs mb-2">Jul 2025 - Sep 2025 | Hybrid, Panaji</div>
                  <ul className="list-disc pl-5 text-gray-200 text-sm space-y-1">
                    <li>Built road-aware FPS Redirection System serving 1,400+ shops and 8 lakh+ households using OpenRouteService API for real road distances</li>
                    <li>Developed Smart Redirection algorithm reassigning 41+ beneficiaries per operation, replacing straight-line estimates with actual road routing</li>
                    <li>Implemented real-time FPS Status Management for 43 shops with instant Open/Closed toggling triggering automatic beneficiary reassignment</li>
                    <li>Integrated Leaflet.js Map Visualization showing user location, closed FPS, top-3 alternatives, and route paths</li>
                    <li>Built Admin Dashboard for managing FPS network across 2 districts with downloadable Excel reports for audit and oversight</li>
                    <li>Deployed on Vercel with secure auth, processing bulk Excel uploads of 43 FPS and 41+ beneficiary records per reassignment cycle</li>
                  </ul>
                </div>
              );
              break;
      case "about":
        output = (
          <div className="mt-2 p-4 rounded-lg bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-500/10">
            <div className="text-xl font-bold text-cyan-300 mb-1">Sufiyan Khan <span className="text-purple-300">(AI/ML Engineer)</span></div>
            <div className="text-gray-200">Passionate IT student building intelligent systems, specializing in <span className="text-blue-400">AI</span>, <span className="text-purple-400">ML</span>, and agentic workflows.</div>
          </div>
        );
        break;
      case "projects":
        output = (
          <div className="mt-2 grid gap-3">
            <div className="rounded-lg border border-purple-500/20 bg-purple-900/20 p-3">
              <div className="font-bold text-purple-300">Self-Improving RAG</div>
              <div className="text-gray-300 text-xs mb-1">Retrieval-Augmented Generation | FAISS + BM25 + LLMs</div>
              <a href="https://erx8gib29mgjvxs4cufkcn.streamlit.app/" target="_blank" rel="noopener noreferrer" className="inline-block mt-1 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-semibold hover:bg-blue-500/40 transition">Live Demo</a>
            </div>
            <div className="rounded-lg border border-pink-500/20 bg-pink-900/20 p-3">
              <div className="font-bold text-pink-300">Aura Voice Agent</div>
              <div className="text-gray-300 text-xs mb-1">Voice AI Assistant | WebSocket + LLM + RAG</div>
              <a href="https://aura-voice-agent.sufiyankhan7339.workers.dev/" target="_blank" rel="noopener noreferrer" className="inline-block mt-1 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-semibold hover:bg-purple-500/40 transition">Live Demo</a>
            </div>
          </div>
        );
        break;
      case "skills":
        output = (
          <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-2">
            <span className="px-3 py-1 rounded-full bg-blue-900/30 text-blue-300 border border-blue-500/20 text-xs font-semibold">Python</span>
            <span className="px-3 py-1 rounded-full bg-purple-900/30 text-purple-300 border border-purple-500/20 text-xs font-semibold">Java</span>
            <span className="px-3 py-1 rounded-full bg-green-900/30 text-green-300 border border-green-500/20 text-xs font-semibold">SQL</span>
            <span className="px-3 py-1 rounded-full bg-pink-900/30 text-pink-300 border border-pink-500/20 text-xs font-semibold">PyTorch</span>
            <span className="px-3 py-1 rounded-full bg-yellow-900/30 text-yellow-300 border border-yellow-500/20 text-xs font-semibold">Scikit-learn</span>
            <span className="px-3 py-1 rounded-full bg-blue-900/30 text-blue-300 border border-blue-500/20 text-xs font-semibold">Transformers</span>
            <span className="px-3 py-1 rounded-full bg-purple-900/30 text-purple-300 border border-purple-500/20 text-xs font-semibold">Deep Learning</span>
            <span className="px-3 py-1 rounded-full bg-green-900/30 text-green-300 border border-green-500/20 text-xs font-semibold">CNNs</span>
            <span className="px-3 py-1 rounded-full bg-pink-900/30 text-pink-300 border border-pink-500/20 text-xs font-semibold">RNNs</span>
            <span className="px-3 py-1 rounded-full bg-yellow-900/30 text-yellow-300 border border-yellow-500/20 text-xs font-semibold">LSTMs</span>
            <span className="px-3 py-1 rounded-full bg-blue-900/30 text-blue-300 border border-blue-500/20 text-xs font-semibold">Embeddings</span>
            <span className="px-3 py-1 rounded-full bg-purple-900/30 text-purple-300 border border-purple-500/20 text-xs font-semibold">Fine-tuning</span>
            <span className="px-3 py-1 rounded-full bg-green-900/30 text-green-300 border border-green-500/20 text-xs font-semibold">RAG</span>
            <span className="px-3 py-1 rounded-full bg-pink-900/30 text-pink-300 border border-pink-500/20 text-xs font-semibold">Prompt Engineering</span>
            <span className="px-3 py-1 rounded-full bg-yellow-900/30 text-yellow-300 border border-yellow-500/20 text-xs font-semibold">LangChain</span>
            <span className="px-3 py-1 rounded-full bg-blue-900/30 text-blue-300 border border-blue-500/20 text-xs font-semibold">FAISS</span>
            <span className="px-3 py-1 rounded-full bg-purple-900/30 text-purple-300 border border-purple-500/20 text-xs font-semibold">ChromaDB</span>
            <span className="px-3 py-1 rounded-full bg-green-900/30 text-green-300 border border-green-500/20 text-xs font-semibold">Docker</span>
            <span className="px-3 py-1 rounded-full bg-pink-900/30 text-pink-300 border border-pink-500/20 text-xs font-semibold">Git</span>
            <span className="px-3 py-1 rounded-full bg-yellow-900/30 text-yellow-300 border border-yellow-500/20 text-xs font-semibold">GitHub</span>
            <span className="px-3 py-1 rounded-full bg-blue-900/30 text-blue-300 border border-blue-500/20 text-xs font-semibold">Streamlit</span>
            <span className="px-3 py-1 rounded-full bg-purple-900/30 text-purple-300 border border-purple-500/20 text-xs font-semibold">Pandas</span>
            <span className="px-3 py-1 rounded-full bg-green-900/30 text-green-300 border border-green-500/20 text-xs font-semibold">NumPy</span>
            <span className="px-3 py-1 rounded-full bg-pink-900/30 text-pink-300 border border-pink-500/20 text-xs font-semibold">Matplotlib</span>
            <span className="px-3 py-1 rounded-full bg-yellow-900/30 text-yellow-300 border border-yellow-500/20 text-xs font-semibold">OpenCV</span>
          </div>
        );
        break;
      case "education":
        output = (
          <div className="mt-2 p-4 rounded-lg bg-gradient-to-r from-green-900/40 to-blue-900/40 border border-green-500/10">
            <div className="text-lg font-bold text-green-300 mb-1">Goa Engineering College, Ponda, Goa</div>
            <div className="text-gray-200">Bachelor in Information Technology</div>
            <div className="text-gray-400 text-xs mt-1">Sep 2022 - Present</div>
          </div>
        );
        break;
      case "contact":
        output = (
          <div className="mt-2 p-4 rounded-lg bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-500/10 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-cyan-300 font-bold">Email:</span>
              <a href="mailto:sufiyankhan7339@gmail.com" className="text-cyan-400 hover:text-white hover:underline transition-colors">sufiyankhan7339@gmail.com</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-300 font-bold">LinkedIn:</span>
              <a href="https://www.linkedin.com/in/sufiyan-khan-636408286" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white hover:underline transition-colors">linkedin.com/in/sufiyan-khan-636408286</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-300 font-bold">GitHub:</span>
              <a href="https://github.com/Sufiyan78666" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-white hover:underline transition-colors">github.com/Sufiyan78666</a>
            </div>
          </div>
        );
        break;
      case "clear":
        setHistory([]);
        return;
      case "":
        output = "";
        break;
      default:
        output = <p className="mt-2 text-red-400">Command not found: '{trimmed}'. Type 'help' for available commands.</p>;
    }

    setHistory((prev) => [...prev, { cmd: cmdStr, output }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (input.trim() !== "") {
        setCmdHistory((prev) => [...prev, input]);
      }
      handleCommand(input);
      setInput("");
      setHistoryPointer(-1); // reset pointer
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const newPointer = historyPointer === -1 ? cmdHistory.length - 1 : Math.max(0, historyPointer - 1);
        setHistoryPointer(newPointer);
        setInput(cmdHistory[newPointer]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyPointer !== -1) {
        const newPointer = historyPointer + 1;
        if (newPointer >= cmdHistory.length) {
          setHistoryPointer(-1);
          setInput("");
        } else {
          setHistoryPointer(newPointer);
          setInput(cmdHistory[newPointer]);
        }
      }
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="w-full flex justify-center items-center py-24 px-4 bg-black relative z-20" id="terminal">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl bg-black/90 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(34,197,94,0.15)] border border-green-500/30 backdrop-blur-md"
        onClick={focusInput}
      >
        {/* Terminal Header */}
        <div className="flex items-center px-4 py-3 bg-gray-900/90 border-b border-green-500/30">
          <div className="flex gap-2.5">
            <div className="w-3.5 h-3.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.6)] cursor-pointer hover:bg-red-400 transition-colors"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.6)] cursor-pointer hover:bg-yellow-400 transition-colors"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)] cursor-pointer hover:bg-green-400 transition-colors"></div>
          </div>
          <div className="mx-auto text-green-500/70 text-sm font-mono tracking-widest text-center">
            guest@sufiyan-ai:~
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 h-[450px] overflow-y-auto font-mono text-sm md:text-base scrollbar-hide">
          {history.map((item, index) => (
            <div key={index} className="mb-4">
              {item.cmd && (
                <div className="flex items-center text-green-400">
                  <span className="text-cyan-400 mr-2">➜</span>
                  <span className="text-purple-400 mr-2">~/portfolio</span>
                  <span className="text-white">{item.cmd}</span>
                </div>
              )}
              {item.output}
            </div>
          ))}

          {/* Current Input */}
          <div className="flex items-center text-green-400 mt-2">
            <span className="text-cyan-400 mr-2">➜</span>
            <span className="text-purple-400 mr-2 animate-pulse">~/portfolio</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 w-full caret-green-500"
              autoComplete="off"
              spellCheck="false"
              autoFocus
            />
          </div>
          <div ref={bottomRef} className="h-4 w-full flex-shrink-0" />
        </div>
      </motion.div>
    </div>
  );
}

const Typewriter = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index += 1;
      if (index === text.length) clearInterval(interval);
    }, 25);
    return () => clearInterval(interval);
  }, [text]);

  return <span className="text-green-400 p-1">{displayedText}</span>;
};
