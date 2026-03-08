"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Linkedin, Github, ChevronDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import { resumeData } from "@/lib/data";

const { basics } = resumeData;

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-24 md:pb-0"
    >
      {/* Diagonal accent line */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-DEFAULT/10 to-transparent" />
        <div className="absolute top-0 left-1/3 w-px h-1/2 bg-gradient-to-b from-transparent via-violet-DEFAULT/8 to-transparent" />
        {/* Large faded AT monogram */}
        <div
          className="absolute -right-16 top-1/2 -translate-y-1/2 font-syne font-black select-none pointer-events-none"
          style={{
            fontSize: "clamp(200px, 30vw, 400px)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(6,182,212,0.05)",
            lineHeight: 1,
          }}
        >
          AT
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">

          {/* Photo — desktop left, mobile top */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="flex-shrink-0 order-first lg:order-last lg:self-center"
          >
            <div className="relative w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72">
              {/* Outer glow rings */}
              <div className="absolute inset-0 rounded-full"
                style={{ boxShadow: "0 0 40px rgba(6,182,212,0.15), 0 0 80px rgba(6,182,212,0.07)" }} />
              <motion.div
                className="absolute -inset-3 rounded-full border border-cyan-DEFAULT/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -inset-6 rounded-full border border-violet-DEFAULT/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              {/* Corner HUD ticks */}
              {[0, 90, 180, 270].map((deg) => (
                <div
                  key={deg}
                  className="absolute w-2 h-2 border-t border-l border-cyan-DEFAULT/60"
                  style={{
                    top: "50%", left: "50%",
                    transform: `rotate(${deg}deg) translate(130px, -1px)`,
                    transformOrigin: "0 0",
                  }}
                />
              ))}
              {/* Photo */}
              <div className="relative w-full h-full rounded-full overflow-hidden border border-cyan-DEFAULT/20">
                <Image
                  src="/photo.jpg"
                  alt="Anurag Tiwari"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </motion.div>

        <div className="max-w-2xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-cyan-DEFAULT" />
            <span className="section-label">Portfolio · New Delhi, India</span>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <h1
              className="font-syne font-black leading-none mb-3"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
            >
              <span className="text-slate-100">Anurag</span>
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #06b6d4 30%, #8b5cf6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Tiwari
              </span>
              <span
                className="font-mono text-lg align-top mt-2 ml-2 text-cyan-DEFAULT/70"
                style={{ fontSize: "clamp(0.75rem, 2vw, 1.1rem)" }}
              >
                CSM®
              </span>
            </h1>
          </motion.div>

          {/* Title / tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="font-mono text-sm md:text-base tracking-widest text-slate-400 mb-6 uppercase"
          >
            {basics.tagline}
          </motion.p>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="font-body text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mb-8"
          >
            4+ years driving enterprise technology projects — from{" "}
            <span className="text-cyan-DEFAULT">AWS cloud migrations</span> to{" "}
            <span className="text-violet-DEFAULT">Jira enterprise rollouts</span> — with a
            CSM® certification and a builder&apos;s mindset that goes beyond coordination.
          </motion.p>

          {/* Contact chips */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <a
              href={`mailto:${basics.email}`}
              className="flex items-center gap-1.5 font-mono text-xs text-slate-400 hover:text-cyan-DEFAULT transition-colors border border-slate-700/60 hover:border-cyan-DEFAULT/40 rounded px-3 py-1.5"
            >
              <Mail className="w-3 h-3" />
              {basics.email}
            </a>
            <a
              href={basics.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-slate-400 hover:text-cyan-DEFAULT transition-colors border border-slate-700/60 hover:border-cyan-DEFAULT/40 rounded px-3 py-1.5"
            >
              <Linkedin className="w-3 h-3" />
              LinkedIn
            </a>
            <a
              href={basics.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-slate-400 hover:text-cyan-DEFAULT transition-colors border border-slate-700/60 hover:border-cyan-DEFAULT/40 rounded px-3 py-1.5"
            >
              <Github className="w-3 h-3" />
              GitHub
            </a>
            <span className="flex items-center gap-1.5 font-mono text-xs text-slate-500 border border-slate-800 rounded px-3 py-1.5">
              <MapPin className="w-3 h-3" />
              {basics.location}
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollToSection("experience")}
              className="group flex items-center gap-2 px-6 py-3 font-syne font-semibold text-sm tracking-wide text-void bg-cyan-DEFAULT hover:bg-cyan-dim rounded transition-all hover:shadow-[0_0_24px_rgba(6,182,212,0.4)]"
            >
              View Experience
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="group flex items-center gap-2 px-6 py-3 font-syne font-semibold text-sm tracking-wide text-slate-300 border border-slate-700 hover:border-cyan-DEFAULT/50 hover:text-cyan-DEFAULT rounded transition-all"
            >
              Download Resume
            </button>
          </motion.div>
        </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-slate-600"
      >
        <span className="section-label">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-cyan-DEFAULT/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
