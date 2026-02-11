"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "AECC I Pvt Ltd. | India",
    period: "December 2025 – Present",
    description: [
      "Designing and developing high-performance full-stack applications tailored for real-time data handling and high-traffic workflows.",
      "Building and optimizing RESTful APIs with secure authentication and seamless third-party service integrations.",
      "Implementing advanced features like live tracking and instant notifications using Redis, WebSockets, and event-driven processing.",
      "Managing features end-to-end, from initial database modeling and backend logic to frontend integration and deployment."
    ],
    tech: ["Real-time Systems", "Scalable Arch", "API Security", "Redis", "WebSockets"],
    icon: "terminal"
  },
  {
    title: "Full Stack Developer (Intern)",
    company: "Uponly Pvt Ltd. | Mumbai, India",
    period: "August 2025 – December 2025",
    description: [
      "Focused on building robust backend logic and integrating it with responsive frontend components using modern stacks.",
      "Collaborated on optimizing database queries and background tasks to ensure system reliability during peak usage.",
      "Worked closely with the product team to implement and test new features, ensuring technical requirements were exceeded."
    ],
    tech: ["Backend Logic", "Query Optimization", "Performance", "Team Collab"],
    icon: "lan"
  },
  {
    title: "Full Stack Developer (Intern)",
    company: "Hasbasoft Technology Pvt Ltd. | Mumbai",
    period: "October 2021 – June 2022",
    description: [
      "Assisted in troubleshooting, debugging, and enhancing existing software modules for enterprise applications.",
      "Gained hands-on experience in the software development lifecycle, contributing to both UI/UX improvements and server-side updates."
    ],
    tech: ["Software Maintenance", "SDLC", "UI/UX", "Debugging"],
    icon: "developer_board"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 max-w-6xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        <h2 className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">My Career Path</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Journey</span>
        </h1>
        <p className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed">
          A timeline of technical evolution, showcasing my growth from academic foundations to delivering scalable enterprise solutions.
        </p>
      </div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-slate-700 to-transparent" />
        
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative flex items-center justify-between w-full ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              <div className="hidden md:block w-5/12 text-right px-8">
                <span className={`text-sm font-mono tracking-wider ${idx === 0 ? "text-primary" : "text-slate-500"}`}>
                  {exp.period}
                </span>
              </div>

              {/* Center Dot */}
              <div className="absolute left-[-5px] md:left-1/2 md:-ml-[5px] w-[11px] h-[11px] rounded-full bg-background-dark border-2 border-primary z-10 shadow-[0_0_10px_rgba(0,217,255,0.6)]" />

              <div className="md:w-5/12 pl-8 md:pl-0">
                <div className="md:hidden text-primary font-mono text-sm mb-2">{exp.period}</div>
                <div className="bg-surface-dark p-6 rounded-lg border border-slate-800 hover:border-primary/30 shadow-lg transition-all group overflow-hidden relative">
                   <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <span className="material-icons text-6xl">{exp.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                  <div className="text-sm font-medium text-slate-400 mb-4 flex items-center">
                    <span className="material-icons text-base mr-1">business</span> {exp.company}
                  </div>
                  <ul className="space-y-2 mb-5">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-slate-300">
                        <span className="material-icons text-primary text-sm mt-0.5 mr-2">check_circle</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Education Header */}
      <div className="text-center mb-16 mt-32">
        <h2 className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">Foundations</h2>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Education & Certifications
        </motion.h1>
      </div>

      {/* Education Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            title: "Bachelor of Engineering",
            sub: "Computer Engineering",
            info: "Mumbai University • 2019 - 2023",
            icon: "school",
            tags: ["Data Structures", "Algorithms", "DBMS", "OS"],
            status: "Completed"
          },
          {
            title: "AI-Enhanced Full Stack Dev",
            sub: "Advanced Certification",
            info: "IIT Roorkee • 2023",
            icon: "workspace_premium",
            tags: ["Generative AI", "MERN Stack", "Cloud Deployment"],
            status: "Completed"
          }
        ].map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group h-full bg-surface-dark/50 rounded-xl p-1 relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,217,255,0.15)] border border-slate-800"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent"></div>
            <div className="p-8 h-full flex flex-col">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-icons text-2xl">{edu.icon}</span>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-900/30 text-emerald-400 border border-emerald-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5"></span>
                  {edu.status}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{edu.title}</h3>
              <p className="text-primary font-medium mb-1">{edu.sub}</p>
              <p className="text-sm text-slate-400 mb-6">{edu.info}</p>
              <div className="mt-auto pt-6 border-t border-white/5">
                <h4 className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold mb-3">Key Coursework</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 bg-background-dark text-slate-300 rounded border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <section className="mt-24 text-center">
        <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-transparent via-primary to-transparent w-full max-w-md mx-auto mb-8"></div>
        <h3 className="text-2xl font-bold text-white mb-4">Ready to collaborate?</h3>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          My journey is defined by solving complex problems. Let's build the next big thing together.
        </p>
        <button className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-background-dark bg-primary rounded-lg hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(0,217,255,0.4)] hover:shadow-[0_0_30px_rgba(0,217,255,0.6)]">
          <span className="material-icons mr-2 text-lg">mail_outline</span>
          Get in Touch
        </button>
      </section>
    </section>
  );
};

export default Experience;
