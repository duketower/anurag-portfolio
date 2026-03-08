"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cloud, Award, Shield, Target, Building2, Zap } from "lucide-react";
import { resumeData } from "@/lib/data";

const { achievements } = resumeData;

const ICONS: Record<string, React.ReactNode> = {
  cloud: <Cloud className="w-5 h-5" />,
  award: <Award className="w-5 h-5" />,
  shield: <Shield className="w-5 h-5" />,
  target: <Target className="w-5 h-5" />,
  building: <Building2 className="w-5 h-5" />,
  zap: <Zap className="w-5 h-5" />,
};

const CATEGORY_COLORS: Record<string, string> = {
  delivery: "from-cyan-DEFAULT/20 to-cyan-DEFAULT/5 border-cyan-DEFAULT/20",
  partnership: "from-violet-DEFAULT/20 to-violet-DEFAULT/5 border-violet-DEFAULT/20",
  certification: "from-amber-DEFAULT/20 to-amber-DEFAULT/5 border-amber-DEFAULT/20",
  leadership: "from-cyan-DEFAULT/15 to-transparent border-cyan-DEFAULT/15",
  ownership: "from-violet-DEFAULT/15 to-transparent border-violet-DEFAULT/15",
};

const CATEGORY_ICON_COLORS: Record<string, string> = {
  delivery: "text-cyan-DEFAULT",
  partnership: "text-violet-DEFAULT",
  certification: "text-amber-DEFAULT",
  leadership: "text-cyan-DEFAULT",
  ownership: "text-violet-DEFAULT",
};

export default function Achievements() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="achievements"
      ref={ref}
      className="relative z-10 py-20 md:py-28"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, rgba(6,182,212,0.02) 50%, transparent 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-violet-DEFAULT" />
            <span className="section-label" style={{ color: "#8b5cf6" }}>
              Highlights
            </span>
          </div>
          <h2 className="font-syne font-black text-4xl md:text-5xl text-slate-100">
            Achievements
          </h2>
          <p className="font-body text-slate-400 mt-3 max-w-xl">
            Key milestones and contributions across roles.
          </p>
        </motion.div>

        {/* Achievement cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.09, duration: 0.55 }}
              className={`bracket-corner relative p-5 rounded-sm border bg-gradient-to-br ${
                CATEGORY_COLORS[item.category] ?? "from-slate-800/40 to-transparent border-slate-800"
              } group cursor-default transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_24px_rgba(6,182,212,0.08)]`}
            >
              {/* Icon */}
              <div
                className={`mb-4 ${
                  CATEGORY_ICON_COLORS[item.category] ?? "text-cyan-DEFAULT"
                }`}
              >
                {ICONS[item.icon] ?? <Award className="w-5 h-5" />}
              </div>

              {/* Title */}
              <h3 className="font-syne font-bold text-slate-100 text-base mb-2 leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="font-body text-sm text-slate-400 leading-relaxed">
                {item.description}
              </p>

              {/* Category label */}
              <div className="mt-4 flex items-center justify-between">
                <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-slate-600">
                  {item.category}
                </span>
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    CATEGORY_ICON_COLORS[item.category]
                      ?.replace("text-", "bg-")
                      .replace("-DEFAULT", "") ?? "bg-cyan-500"
                  } opacity-60 group-hover:opacity-100 transition-opacity`}
                  style={{
                    backgroundColor:
                      item.category === "certification"
                        ? "#f59e0b"
                        : item.category === "partnership" || item.category === "ownership"
                        ? "#8b5cf6"
                        : "#06b6d4",
                  }}
                />
              </div>

              {/* Spotlight hover effect */}
              <div className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, rgba(6,182,212,0.06) 0%, transparent 70%)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
