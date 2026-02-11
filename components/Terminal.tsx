"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Terminal = () => {
  const [text, setText] = useState("");
  const fullText = "sh skill.sh --premium --animate";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 max-w-4xl mx-auto px-6">
      <div className="bg-[#0c1a1c] rounded-xl border border-slate-800 shadow-2xl overflow-hidden font-mono">
        {/* Terminal Header */}
        <div className="bg-slate-900 px-4 py-2 flex items-center justify-between border-b border-slate-800">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <span className="text-xs text-slate-500 uppercase tracking-widest">zsh — anzal@shaikh-pro</span>
          <div className="w-10" />
        </div>
        
        {/* Terminal Body */}
        <div className="p-6 text-sm sm:text-base leading-relaxed h-64 overflow-y-auto custom-scrollbar">
          <div className="flex gap-2 mb-4">
            <span className="text-primary">➜</span>
            <span className="text-slate-300">~</span>
            <span className="text-white">{text}</span>
            <motion.span 
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-2 h-5 bg-primary"
            />
          </div>
          
          {text === fullText && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-2 text-slate-400"
            >
              <p className="text-green-400">Loading premium environment...</p>
              <div className="flex gap-4">
                <span className="text-primary">[OK]</span>
                <span>Framer Motion Loaded</span>
              </div>
              <div className="flex gap-4">
                <span className="text-primary">[OK]</span>
                <span>Tailwind Glassmorphism Active</span>
              </div>
              <div className="flex gap-4">
                <span className="text-primary">[OK]</span>
                <span>Responsive Matrix Initialized</span>
              </div>
              <p className="mt-4 text-white">System ready. Crafting excellence...</p>
              <p className="text-primary">Ready to build the next big thing. _</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Terminal;
