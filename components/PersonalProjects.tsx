"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ExternalLink, Github, ChevronDown, Cpu, Globe, Bot, Zap, Wrench } from "lucide-react";
import { resumeData, type PersonalProject } from "@/lib/data";

const { personalProjects } = resumeData;

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "automation", label: "Automation" },
  { id: "ai-agent", label: "AI Agent" },
  { id: "tool", label: "Tool" },
  { id: "bot", label: "Bot" },
];

const CAT_ICONS: Record<string, React.ReactNode> = {
  web: <Globe className="w-4 h-4" />,
  automation: <Zap className="w-4 h-4" />,
  "ai-agent": <Cpu className="w-4 h-4" />,
  tool: <Wrench className="w-4 h-4" />,
  bot: <Bot className="w-4 h-4" />,
};

const STACK_COLORS: Record<string, string> = {
  Python: "bg-blue-900/40 text-blue-300 border-blue-700/30",
  "HTML/CSS/JS": "bg-orange-900/30 text-orange-300 border-orange-700/30",
  "HTML5": "bg-orange-900/30 text-orange-300 border-orange-700/30",
  "HTML": "bg-orange-900/30 text-orange-300 border-orange-700/30",
  "Next.js": "bg-slate-700/50 text-slate-200 border-slate-600/30",
  "Node.js": "bg-green-900/30 text-green-300 border-green-700/30",
  Netlify: "bg-teal-900/30 text-teal-300 border-teal-700/30",
  n8n: "bg-red-900/30 text-red-300 border-red-700/30",
  Automation: "bg-cyan-900/30 text-cyan-300 border-cyan-700/30",
  "Claude Code": "bg-violet-900/30 text-violet-300 border-violet-700/30",
  "AI Agents": "bg-violet-900/30 text-violet-300 border-violet-700/30",
  "AI Tools": "bg-violet-900/30 text-violet-300 border-violet-700/30",
  "Telegram API": "bg-sky-900/30 text-sky-300 border-sky-700/30",
  "Google Sheets API": "bg-green-900/30 text-green-300 border-green-700/30",
  SEO: "bg-yellow-900/30 text-yellow-300 border-yellow-700/30",
  GitHub: "bg-slate-700/40 text-slate-200 border-slate-600/30",
  "Responsive Design": "bg-pink-900/30 text-pink-300 border-pink-700/30",
};

const DEFAULT_BADGE = "bg-slate-800/60 text-slate-400 border-slate-700/30";

function ProjectCard({ item, index, inView }: { item: PersonalProject; index: number; inView: boolean }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.07, duration: 0.55 }}
      className="bracket-corner group relative flex flex-col bg-card border border-slate-800/70 rounded-sm hover:border-cyan-DEFAULT/25 hover:shadow-[0_0_28px_rgba(6,182,212,0.07)] transition-all duration-300"
    >
      {/* Card header */}
      <div className="p-5 flex-1">
        {/* Category icon + label */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-cyan-DEFAULT/60">
            {CAT_ICONS[item.category] ?? <Cpu className="w-4 h-4" />}
            <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-slate-600">
              {item.category.replace("-", " ")}
            </span>
          </div>
          {item.links && item.links.length > 0 && (
            <div className="flex gap-2">
              {item.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-cyan-DEFAULT transition-colors"
                  aria-label={link.label}
                >
                  {link.label === "GitHub" ? (
                    <Github className="w-3.5 h-3.5" />
                  ) : (
                    <ExternalLink className="w-3.5 h-3.5" />
                  )}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="font-syne font-bold text-slate-100 text-base leading-snug mb-1">
          {item.title}
        </h3>

        {/* Tagline */}
        <p className="font-body text-xs text-slate-400 leading-relaxed mb-3">
          {item.tagline}
        </p>

        {/* Capability badge */}
        <div className="mb-4">
          <span
            className="font-mono text-[9px] px-2 py-1 rounded-sm tracking-wider uppercase border"
            style={{
              background: "rgba(6,182,212,0.07)",
              borderColor: "rgba(6,182,212,0.2)",
              color: "#06b6d4",
            }}
          >
            {item.capability}
          </span>
        </div>

        {/* Stack badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {item.stack.map((s) => (
            <span
              key={s}
              className={`font-mono text-[9px] px-1.5 py-0.5 rounded border tracking-wide ${
                STACK_COLORS[s] ?? DEFAULT_BADGE
              }`}
            >
              {s}
            </span>
          ))}
        </div>

        {/* What I did — always show first bullet */}
        <ul className="space-y-1.5">
          <li className="flex gap-2 text-xs text-slate-300 font-body leading-relaxed">
            <span className="text-cyan-DEFAULT/50 flex-shrink-0 font-mono">›</span>
            <span>{item.what_i_did[0]}</span>
          </li>
        </ul>

        {/* Expandable remaining bullets */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden space-y-1.5 mt-1.5"
            >
              {item.what_i_did.slice(1).map((b, bi) => (
                <li key={bi} className="flex gap-2 text-xs text-slate-300 font-body leading-relaxed">
                  <span className="text-cyan-DEFAULT/50 flex-shrink-0 font-mono">›</span>
                  <span>{b}</span>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>

      {/* Expand toggle */}
      {item.what_i_did.length > 1 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 px-5 py-3 border-t border-slate-800/60 text-slate-500 hover:text-cyan-DEFAULT transition-colors font-mono text-[10px] tracking-wider uppercase w-full"
        >
          <ChevronDown
            className={`w-3 h-3 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
          />
          {expanded ? "Less" : `+${item.what_i_did.length - 1} more`}
        </button>
      )}

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "radial-gradient(circle at 50% 0%, rgba(6,182,212,0.05) 0%, transparent 60%)" }}
      />
    </motion.div>
  );
}

export default function PersonalProjects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const filtered =
    activeFilter === "all"
      ? personalProjects
      : personalProjects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" ref={ref} className="relative z-10 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-cyan-DEFAULT" />
            <span className="section-label">Personal Projects</span>
          </div>
          <h2 className="font-syne font-black text-4xl md:text-5xl text-slate-100 mb-3">
            What I Build
          </h2>
          <p className="font-body text-slate-400 max-w-2xl">
            Beyond my professional roles, I independently build tools, websites and automation systems — here is what that looks like in practice.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`font-mono text-xs px-3 py-1.5 rounded-sm border tracking-wider uppercase transition-all duration-200 ${
                activeFilter === cat.id
                  ? "bg-cyan-DEFAULT/15 border-cyan-DEFAULT/40 text-cyan-DEFAULT"
                  : "border-slate-800 text-slate-500 hover:border-slate-700 hover:text-slate-300"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {filtered.map((item, i) => (
              <ProjectCard key={item.title} item={item} index={i} inView={true} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
