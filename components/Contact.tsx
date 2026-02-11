"use client";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-12 pt-4">
          <div className="space-y-6">
            <h2 className="text-primary font-bold tracking-wider text-sm uppercase">Contact</h2>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight"
            >
              Let&apos;s build something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">exceptional.</span>
            </motion.h1>
            <p className="text-lg text-slate-400 max-w-md leading-relaxed">
              Interested in working together? Fill out the form with some info about your project and I will get back to you within 24 hours.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4 group">
              <div className="p-3 rounded-lg bg-surface-dark group-hover:bg-primary/10 transition-colors">
                <span className="material-icons text-primary">email</span>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">Email</p>
                <a href="mailto:enganzalshaikh@gmail.com" className="text-lg font-semibold text-white hover:text-primary transition-colors">enganzalshaikh@gmail.com</a>
              </div>
            </div>
            <div className="flex items-start space-x-4 group">
              <div className="p-3 rounded-lg bg-surface-dark group-hover:bg-primary/10 transition-colors">
                <span className="material-icons text-primary">phone</span>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">Phone</p>
                <a href="tel:7045475587" className="text-lg font-semibold text-white hover:text-primary transition-colors">+91 7045475587</a>
              </div>
            </div>
            <div className="flex items-start space-x-4 group">
              <div className="p-3 rounded-lg bg-surface-dark group-hover:bg-primary/10 transition-colors">
                <span className="material-icons text-primary">place</span>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">Location</p>
                <span className="text-lg font-semibold text-white">Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-7 bg-surface-dark/50 backdrop-blur-md border border-slate-700/50 rounded-xl p-8 md:p-10 shadow-xl relative"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/20 to-transparent rounded-tr-xl" />
          <form className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-4 py-3.5 bg-background-dark border border-slate-700 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-4 py-3.5 bg-background-dark border border-slate-700 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Subject</label>
              <input 
                type="text" 
                placeholder="Project Collaboration"
                className="w-full px-4 py-3.5 bg-background-dark border border-slate-700 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
              <textarea 
                rows={5} 
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3.5 bg-background-dark border border-slate-700 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
              />
            </div>
            <button className="w-full md:w-auto px-8 py-3.5 bg-primary text-background-dark font-bold rounded-lg hover:shadow-[0_0_25px_rgba(0,217,255,0.6)] transition-all flex items-center justify-center gap-2">
              Send Message
              <span className="material-icons text-sm">arrow_forward</span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
