"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] hero-glow rounded-full opacity-60" />
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-10 w-64 h-64 border border-primary/10 rounded-full" 
        />
        <div className="absolute bottom-20 left-10 w-96 h-96 border border-white/5 rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 sm:py-32 flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-xs font-medium text-primary tracking-wider uppercase">Open for new opportunities</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight mb-6 leading-[1.1]"
        >
          ANZAL <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">SHAIKH</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 max-w-2xl text-lg sm:text-xl text-slate-400 font-light leading-relaxed"
        >
          Full Stack Developer <span className="text-primary mx-2">|</span> MERN Stack Expert
          <br />
          <span className="text-base text-slate-500 mt-2 block">Crafting pixel-perfect, high-performance web experiences.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <button className="group relative px-8 py-4 bg-primary text-background-dark text-base font-bold rounded-lg shadow-[0_0_20px_rgba(0,217,255,0.3)] hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative flex items-center justify-center gap-2">
              View My Work 
              <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </span>
          </button>
          <button className="group px-8 py-4 bg-transparent border border-slate-600 text-white text-base font-semibold rounded-lg hover:border-primary hover:text-primary transition-all duration-300">
            Get In Touch
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-12 flex items-center gap-6"
        >
          <a 
            href="https://github.com/iamanzalshaikh" 
            target="_blank" 
            className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors group"
          >
            <span className="material-icons text-xl group-hover:scale-110 transition-transform">code</span>
            <span className="text-sm font-bold uppercase tracking-widest hidden sm:block">GitHub</span>
          </a>
          <div className="w-1 h-1 rounded-full bg-slate-800" />
          <a 
            href="https://www.linkedin.com/in/anzal-shaikh-1a313536b/" 
            target="_blank" 
            className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors group"
          >
            <span className="material-icons text-xl group-hover:scale-110 transition-transform">share</span>
            <span className="text-sm font-bold uppercase tracking-widest hidden sm:block">LinkedIn</span>
          </a>
        </motion.div>
      </div>

      {/* Floating Cards Mockups */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 w-48 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl rotate-[-3deg] hover:rotate-0 transition-all duration-500"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-full bg-[#61DAFB]/20 flex items-center justify-center text-[#61DAFB]">
            <span className="material-icons text-sm">code</span>
          </div>
          <span className="text-sm font-bold text-white">React</span>
        </div>
        <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
          <div className="h-full bg-[#61DAFB] w-[95%]" />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="hidden lg:block absolute right-8 top-2/3 -translate-y-1/2 w-48 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl rotate-[3deg] hover:rotate-0 transition-all duration-500"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-full bg-[#3C873A]/20 flex items-center justify-center text-[#3C873A]">
            <span className="material-icons text-sm">dns</span>
          </div>
          <span className="text-sm font-bold text-white">Node.js</span>
        </div>
        <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
          <div className="h-full bg-[#3C873A] w-[90%]" />
        </div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <span className="material-icons text-slate-500 text-3xl">keyboard_arrow_down</span>
      </div>
    </section>
  );
};

export default Hero;
