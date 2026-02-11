import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background-dark border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-extrabold text-xl shadow-[0_0_15px_rgba(0,217,255,0.3)]">
              AS
            </div>
            <div>
              <span className="block text-white font-bold text-lg tracking-tight">Anzal Shaikh</span>
              <span className="block text-[10px] text-slate-500 uppercase tracking-[0.2em]">Full Stack Developer</span>
            </div>
          </div>

          {/* Nav & Contact */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <nav className="flex flex-wrap justify-center md:justify-start gap-6">
              {[
                { name: "About", href: "/about" },
                { name: "Skills", href: "/skills" },
                { name: "Projects", href: "/projects" },
                { name: "Experience", href: "/experience" }
              ].map((item) => (
                <Link key={item.name} href={item.href} className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-primary transition-colors">
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mt-2">
              <a href="mailto:enganzalshaikh@gmail.com" className="group flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                <span className="material-icons text-primary text-base group-hover:scale-110 transition-transform">email</span>
                enganzalshaikh@gmail.com
              </a>
              <a href="tel:7045475587" className="group flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                <span className="material-icons text-primary text-base group-hover:scale-110 transition-transform">phone</span>
                +91 7045475587
              </a>
            </div>
          </div>

          {/* Socials Placeholder */}
          <div className="flex gap-4">
             <Link href="https://github.com/iamanzalshaikh" target="_blank" className="w-10 h-10 rounded-lg border border-slate-800 flex items-center justify-center text-slate-500 hover:border-primary hover:text-primary transition-all">
                <span className="material-icons text-xl">code</span>
             </Link>
             <Link href="https://www.linkedin.com/in/anzal-shaikh-1a313536b/" target="_blank" className="w-10 h-10 rounded-lg border border-slate-800 flex items-center justify-center text-slate-500 hover:border-primary hover:text-primary transition-all">
                <span className="material-icons text-xl">share</span>
             </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
           <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Anzal Shaikh. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Designed & Built with <span className="text-primary">♥</span> in Mumbai.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
