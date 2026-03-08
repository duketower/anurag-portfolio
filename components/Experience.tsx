"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronDown, MapPin, Calendar } from "lucide-react";
import { resumeData } from "@/lib/data";

const { experience } = resumeData;

function ExperienceCard({
  item,
  index,
  inView,
}: {
  item: (typeof experience)[0];
  index: number;
  inView: boolean;
}) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.55 }}
      className="relative"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-6 w-3 h-3 rounded-full border-2 border-cyan-DEFAULT bg-void z-10" />
      {/* Timeline line */}
      {index < experience.length - 1 && (
        <div className="absolute left-[5px] top-9 bottom-0 w-px bg-gradient-to-b from-cyan-DEFAULT/30 to-transparent" />
      )}

      <div className="ml-7">
        <button
          onClick={() => setOpen(!open)}
          className="w-full text-left group"
          aria-expanded={open}
        >
          <div
            className={`bracket-corner rounded-sm p-4 md:p-5 transition-all duration-300 border ${
              open
                ? "bg-card border-cyan-DEFAULT/20 shadow-[0_0_20px_rgba(6,182,212,0.06)]"
                : "bg-card/40 border-slate-800/60 hover:bg-card hover:border-slate-700"
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="font-syne font-bold text-slate-100 text-base md:text-lg">
                    {item.role}
                  </h3>
                  {/* Impact tags */}
                  {item.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-cyan-DEFAULT/10 text-cyan-DEFAULT/80 tracking-wider uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="font-syne font-semibold text-cyan-DEFAULT text-sm">
                  {item.company}
                </p>
                <div className="flex flex-wrap gap-3 mt-1.5">
                  <span className="flex items-center gap-1 font-mono text-xs text-slate-500">
                    <Calendar className="w-3 h-3" />
                    {item.dates}
                  </span>
                  {item.location && (
                    <span className="flex items-center gap-1 font-mono text-xs text-slate-500">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </span>
                  )}
                </div>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-slate-500 flex-shrink-0 transition-transform duration-300 mt-1 ${
                  open ? "rotate-180 text-cyan-DEFAULT" : ""
                }`}
              />
            </div>

            <AnimatePresence initial={false}>
              {open && item.bullets.length > 0 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <ul className="mt-4 space-y-2.5 pt-4 border-t border-slate-800/60">
                    {item.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-2.5 text-sm text-slate-300 font-body leading-relaxed">
                        <span className="text-cyan-DEFAULT/50 flex-shrink-0 mt-0.5 font-mono">›</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  {/* All tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[9px] px-2 py-0.5 rounded-sm bg-slate-800/80 text-slate-400 tracking-wider uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </button>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="experience" ref={ref} className="relative z-10 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-cyan-DEFAULT" />
            <span className="section-label">Career</span>
          </div>
          <h2 className="font-syne font-black text-4xl md:text-5xl text-slate-100">
            Experience
          </h2>
          <p className="font-body text-slate-400 mt-3 max-w-xl">
            4+ years coordinating enterprise projects across cloud migrations, Atlassian tooling, analytics and operations.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl space-y-4">
          {experience.map((item, i) => (
            <ExperienceCard key={i} item={item} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
