"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass-nav py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-2">
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

          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: "About", path: "/about" },
              { name: "Skills", path: "/skills" },
              { name: "Projects", path: "/projects" },
              { name: "Experience", path: "/experience" }
            ].map((item) => (
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

          <button className="md:hidden text-slate-400 hover:text-white transition-colors">
            <span className="material-icons">menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
