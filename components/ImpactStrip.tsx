"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { resumeData } from "@/lib/data";

const { topImpact } = resumeData;

export default function ImpactStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="impact" ref={ref} className="relative z-10 py-12 overflow-hidden">
      {/* Accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-DEFAULT/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-DEFAULT/20 to-transparent" />

      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "linear-gradient(135deg, rgba(6,182,212,0.04) 0%, rgba(139,92,246,0.04) 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-800/60">
          {topImpact.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="flex flex-col items-center py-8 px-6 text-center group"
            >
              <span
                className="font-syne font-black mb-1 leading-none transition-all duration-300 group-hover:drop-shadow-[0_0_16px_rgba(6,182,212,0.5)]"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  background: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {item.stat}
              </span>
              <span className="font-syne font-semibold text-slate-200 text-sm md:text-base tracking-wide mb-0.5">
                {item.label}
              </span>
              <span className="font-mono text-xs text-slate-500 tracking-wider">
                {item.sub}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
