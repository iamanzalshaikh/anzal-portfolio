"use client";

import { motion } from "framer-motion";
import { 
  Code2, Layout, Server, Database, Shield, Zap, 
  Layers, Lock, Activity, Globe, Cpu, 
  Terminal, Boxes, Cloud, GitBranch, Package, 
  Smartphone, Search, Workflow, AlertCircle,Clock , Box
} from "lucide-react";

const skillCategories = [
  {
    title: "Core Tech Stack",
    skills: [
      { name: "HTML5 / CSS3", icon: <Layout className="w-5 h-5 text-orange-500" />, desc: "Semantic structure & modern styling" },
      { name: "JavaScript / TS", icon: <Code2 className="w-5 h-5 text-yellow-400" />, desc: "Type-safe robust scripting" },
      { name: "React / Next.js", icon: <Globe className="w-5 h-5 text-cyan-400" />, desc: "High-performance web apps" },
      { name: "React Native", icon: <Smartphone className="w-5 h-5 text-blue-400" />, desc: "Cross-platform mobile apps" },
      { name: "Node / Express", icon: <Server className="w-5 h-5 text-green-500" />, desc: "Scalable backend architecture" },
      { name: "Socket.io", icon: <Zap className="w-5 h-5 text-purple-400" />, desc: "Real-time communication" },
      { name: "Prisma ORM", icon: <Database className="w-5 h-5 text-slate-300" />, desc: "Modern database toolkit" },
      { name: "TanStack Query", icon: <Activity className="w-5 h-5 text-rose-500" />, desc: "Powerful async state mgmt" },
      { name: "JWT Auth", icon: <Lock className="w-5 h-5 text-amber-500" />, desc: "Secure authentication" },
      { name: "Mongo & Postgre", icon: <Database className="w-5 h-5 text-emerald-500" />, desc: "NoSQL & Relational DBs" },
      { name: "Redis Caching", icon: <Zap className="w-5 h-5 text-red-500" />, desc: "High-speed performance" },
      { name: "RTK / Redux", icon: <Layers className="w-5 h-5 text-indigo-400" />, desc: "Global state management" }
    ]
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "VS Code / IDE", icon: <Terminal className="w-5 h-5 text-blue-500" />, desc: "Advanced development env" },
      { name: "Vite / Babel", icon: <Zap className="w-5 h-5 text-purple-500" />, desc: "Next-gen frontend tooling" },
      { name: "Git / GitHub", icon: <GitBranch className="w-5 h-5 text-white" />, desc: "Version control & collaboration" },
      { name: "AWS / Vercel", icon: <Cloud className="w-5 h-5 text-orange-400" />, desc: "Cloud & Infrastructure" },
      { name: "Netlify Deploy", icon: <Box className="w-5 h-5 text-cyan-400" />, desc: "CI/CD & Serverless" },
      { name: "Yarn / NPM", icon: <Package className="w-5 h-5 text-red-400" />, desc: "Package & dependency mgmt" },
      { name: "Linux / Shell", icon: <Terminal className="w-5 h-5 text-green-400" />, desc: "Server mgmt & PowerShell" },
      { name: "ESLint / Prett", icon: <AlertCircle className="w-5 h-5 text-purple-400" />, desc: "Code quality & linting" }
    ]
  },
  {
    title: "Advanced Engineering",
    skills: [
      { name: "BullMQ / Workers", icon: <Workflow className="w-5 h-5 text-blue-400" />, desc: "Asynchronous task queues" },
      { name: "Logger / Client", icon: <Activity className="w-5 h-5 text-rose-400" />, desc: "Reliability & Analytics" },
      { name: "Rate Limiting", icon: <Clock className="w-5 h-5 text-amber-500" />, desc: "Traffic control & security" },
      { name: "Input Validation", icon: <Shield className="w-5 h-5 text-cyan-500" />, desc: "Data integrity & Middleware" },
      { name: "Tailwind / Bootst", icon: <Layout className="w-5 h-5 text-sky-400" />, desc: "Modern styling frameworks" },
      { name: "React Router", icon: <Boxes className="w-5 h-5 text-indigo-500" />, desc: "Dynamic client-side routing" }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 max-w-7xl mx-auto px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="mb-20 text-left">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 text-primary font-bold tracking-widest text-xs uppercase mb-4"
        >
          <span className="w-8 h-[2px] bg-primary"></span>
          Abilities
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-black text-white mb-6"
        >
          Technical Tech Stack
        </motion.h2>
        <p className="text-xl text-slate-400 font-light max-w-2xl leading-relaxed">
          Comprehensive toolkit for building scalable, high-performance digital ecosystems.
        </p>
      </div>

      <div className="space-y-20">
        {skillCategories.map((category, catIdx) => (
          <div key={category.title}>
            <motion.h3 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xl font-bold text-white mb-8 flex items-center gap-3 border-l-2 border-primary pl-4"
            >
              {category.title}
            </motion.h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {category.skills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 + catIdx * 0.1 }}
                  className="group relative bg-surface-dark/40 backdrop-blur-sm border border-slate-800/50 rounded-xl p-5 hover:border-primary/40 hover:bg-surface-dark/60 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-background-dark border border-slate-800 group-hover:border-primary/20 transition-colors">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-primary transition-colors">
                        {skill.name}
                      </h4>
                      <p className="text-[10px] text-slate-500 mt-1 leading-relaxed font-medium uppercase tracking-tighter">
                        {skill.desc}
                      </p>
                    </div>
                  </div>
                  
                  {/* Subtle hover glow */}
                  <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity blur-xl pointer-events-none" />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
