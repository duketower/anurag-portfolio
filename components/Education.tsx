"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, BadgeCheck } from "lucide-react";
import { resumeData } from "@/lib/data";

const { education, certifications } = resumeData;

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="education" ref={ref} className="relative z-10 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-cyan-DEFAULT" />
            <span className="section-label">Background</span>
          </div>
          <h2 className="font-syne font-black text-4xl md:text-5xl text-slate-100">
            Education & Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-4 h-4 text-cyan-DEFAULT" />
              <h3 className="font-syne font-semibold text-slate-200 text-sm tracking-widest uppercase">
                Education
              </h3>
            </div>
            <div className="space-y-3">
              {education.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.45 }}
                  className={`p-4 rounded-sm border transition-colors ${
                    i < 2
                      ? "bg-card border-slate-800/70 hover:border-cyan-DEFAULT/20"
                      : "bg-card/40 border-slate-800/40 hover:border-slate-700"
                  }`}
                >
                  <p className="font-syne font-semibold text-slate-100 text-sm leading-snug">
                    {item.institution}
                  </p>
                  <p className="font-body text-xs text-slate-400 mt-0.5">
                    {item.degree}
                  </p>
                  <p className="font-mono text-[10px] text-slate-600 mt-1">
                    {item.years}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <BadgeCheck className="w-4 h-4 text-violet-DEFAULT" />
              <h3 className="font-syne font-semibold text-slate-200 text-sm tracking-widest uppercase">
                Certifications
              </h3>
            </div>
            <div className="space-y-2.5">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.06, duration: 0.4 }}
                  className={`flex items-start gap-3 p-3.5 rounded-sm border transition-colors ${
                    cert.highlight
                      ? "bg-gradient-to-r from-amber-DEFAULT/10 to-transparent border-amber-DEFAULT/25 hover:border-amber-DEFAULT/40"
                      : "bg-card/40 border-slate-800/60 hover:border-slate-700"
                  }`}
                >
                  <BadgeCheck
                    className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                      cert.highlight ? "text-amber-DEFAULT" : "text-slate-600"
                    }`}
                  />
                  <div>
                    <p
                      className={`font-syne font-semibold text-sm leading-snug ${
                        cert.highlight ? "text-slate-100" : "text-slate-300"
                      }`}
                    >
                      {cert.name}
                    </p>
                    <p className="font-mono text-[10px] text-slate-500 mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
