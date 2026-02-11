"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Left Column: Bio */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 text-primary font-semibold tracking-wider text-sm uppercase"
            >
              <span className="w-8 h-[2px] bg-primary"></span>
              <span>About Me</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-extrabold leading-tight text-white"
            >
              Crafting digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-200">excellence through code.</span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-lg text-slate-400 font-light leading-relaxed"
          >
            <p>
              I am a Full Stack Web Developer passionate about building robust and scalable web applications. With a keen eye for modern aesthetics and a deep understanding of software architecture, I bridge the gap between elegant design and high-performance engineering.
            </p>
            <p>
              My journey involves mastering the complexities of the React ecosystem and server-side technologies. I thrive in collaborative environments where innovation is the currency and clean code is the standard.
            </p>
          </motion.div>

          <div className="pt-4 flex flex-wrap gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-primary text-background-dark font-bold rounded-lg overflow-hidden transition-all shadow-[0_0_20px_rgba(0,217,255,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Download CV 
                <span className="material-icons text-sm group-hover:translate-y-1 transition-transform">download</span>
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </motion.button>
            <button className="px-8 py-4 bg-transparent border border-slate-700 hover:border-primary text-white font-medium rounded-lg transition-colors flex items-center gap-2">
              View Projects
              <span className="material-icons text-sm">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Right Column: Stats */}
        <div className="lg:col-span-5 relative">
          <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-2xl opacity-20" />
          <div className="relative bg-surface-dark border border-slate-800 p-8 lg:p-10 rounded-2xl shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-white">Quick Stats</h3>
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            </div>
            
            <div className="space-y-8">
              {[
                { label: "Years Experience", value: "1+", icon: "timer" },
                { label: "Projects Completed", value: "10+", icon: "rocket_launch" },
                { label: "Lines of Code", value: "50k+", icon: "code" },
              ].map((stat, idx) => (
                <div key={idx} className="group">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-xl bg-background-dark flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <span className="material-icons text-3xl text-slate-500 group-hover:text-primary transition-colors">{stat.icon}</span>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-white group-hover:text-primary transition-colors">{stat.value}</div>
                      <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">{stat.label}</div>
                    </div>
                  </div>
                  {idx < 2 && <div className="mt-8 w-full h-px bg-slate-800" />}
                </div>
              ))}
            </div>
          </div>
          
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -right-6 bg-surface-dark border border-slate-700 p-4 rounded-xl shadow-lg hidden lg:flex items-center gap-3"
          >
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-white">Open for work</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
