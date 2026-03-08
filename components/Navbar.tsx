"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const NAV_LINKS = [
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-1 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-void/90 backdrop-blur-xl border-b border-slate-800/60"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav("#hero")}
            className="font-syne font-black text-lg tracking-tight group"
          >
            <span
              style={{
                background: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              AT
            </span>
            <span className="text-slate-500 text-xs font-mono ml-2 tracking-widest group-hover:text-slate-300 transition-colors">
              ®CSM
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className="font-body text-sm text-slate-400 hover:text-cyan-DEFAULT transition-colors tracking-wide relative group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-cyan-DEFAULT group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}
              className="font-mono text-xs px-3 py-1.5 border border-cyan-DEFAULT/40 text-cyan-DEFAULT hover:bg-cyan-DEFAULT/10 rounded transition-all tracking-wider"
            >
              <Download className="inline w-3 h-3 mr-1.5 -mt-0.5" />
              Resume
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-slate-400 hover:text-cyan-DEFAULT transition-colors p-1"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-14 left-0 right-0 z-40 bg-void/95 backdrop-blur-xl border-b border-slate-800 md:hidden"
          >
            <nav className="flex flex-col py-4 px-6 gap-1">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.href}
                  onClick={() => handleNav(l.href)}
                  className="text-left font-body text-base text-slate-300 hover:text-cyan-DEFAULT py-3 border-b border-slate-800/50 transition-colors"
                >
                  {l.label}
                </button>
              ))}
              <button
                onClick={() => handleNav("#contact")}
                className="mt-3 font-mono text-sm px-4 py-2.5 border border-cyan-DEFAULT/40 text-cyan-DEFAULT hover:bg-cyan-DEFAULT/10 rounded transition-all tracking-wider text-center"
              >
                Download Resume
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-void/95 backdrop-blur-xl border-t border-slate-800 mobile-nav">
        <div className="flex">
          {NAV_LINKS.slice(0, 5).map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className="flex-1 flex flex-col items-center py-2.5 text-slate-500 hover:text-cyan-DEFAULT transition-colors"
            >
              <span className="font-mono text-[9px] tracking-wider uppercase">{l.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
