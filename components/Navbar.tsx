"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[60] transition-all duration-300 ${
          scrolled || isOpen ? "glass-nav py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="group flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="h-8 w-8 rounded bg-primary flex items-center justify-center text-background-dark font-bold text-lg"
              >
                A
              </motion.div>
              <span className="text-white font-bold tracking-tight text-lg group-hover:text-primary transition-colors">
                ANZAL.
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 rounded-lg bg-primary/10 text-primary border border-primary/30 hover:bg-primary hover:text-background-dark transition-all text-sm font-semibold"
                >
                  Contact Me
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 md:hidden bg-background-dark/95 backdrop-blur-2xl flex flex-col items-center justify-center p-6"
          >
            <div className="flex flex-col items-center space-y-8 w-full">
              {navLinks.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="w-full text-center"
                >
                  <Link
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-bold text-slate-400 hover:text-primary transition-colors block py-2"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * navLinks.length }}
                className="w-full pt-8"
              >
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <button className="w-full py-4 rounded-xl bg-primary text-background-dark text-lg font-black uppercase tracking-widest shadow-glow">
                    Contact Me
                  </button>
                </Link>
              </motion.div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[120px]" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
