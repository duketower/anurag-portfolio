"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { resumeData } from "@/lib/data";

const { skills } = resumeData;

const CAT_ACCENT: Record<string, string> = {
  "Project Management": "#06b6d4",
  "Tools & Platforms": "#8b5cf6",
  "Business Skills": "#f59e0b",
  "Tech (Personal Projects)": "#06b6d4",
  "Soft Skills": "#8b5cf6",
};

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative z-10 py-20 md:py-28"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, rgba(139,92,246,0.02) 50%, transparent 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-violet-DEFAULT" />
            <span className="section-label" style={{ color: "#8b5cf6" }}>
              Capabilities
            </span>
          </div>
          <h2 className="font-syne font-black text-4xl md:text-5xl text-slate-100">
            Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, gi) => {
            const accent = CAT_ACCENT[group.category] ?? "#06b6d4";
            return (
              <motion.div
                key={gi}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: gi * 0.08, duration: 0.55 }}
                className="bracket-corner p-5 bg-card border border-slate-800/60 rounded-sm hover:border-slate-700 transition-colors"
              >
                {/* Category header */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1 h-4 rounded-full" style={{ backgroundColor: accent }} />
                  <h3 className="font-syne font-semibold text-slate-200 text-sm tracking-wide">
                    {group.category}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((skill, si) => (
                    <motion.span
                      key={si}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: gi * 0.08 + si * 0.03, duration: 0.3 }}
                      className="font-body text-xs px-2.5 py-1 rounded-sm bg-slate-800/60 text-slate-300 hover:text-slate-100 border border-slate-700/40 hover:border-slate-600 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
