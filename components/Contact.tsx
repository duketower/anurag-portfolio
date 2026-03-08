"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, Github, Phone, MapPin, Download, ArrowUpRight } from "lucide-react";
import { resumeData } from "@/lib/data";

const { basics } = resumeData;

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" ref={ref} className="relative z-10 py-20 md:py-32">
      {/* Top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-DEFAULT/30 to-transparent" />

      {/* Glow backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(6,182,212,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-cyan-DEFAULT" />
              <span className="section-label">Let&apos;s Connect</span>
              <div className="h-px w-8 bg-cyan-DEFAULT" />
            </div>
            <h2 className="font-syne font-black text-4xl md:text-5xl text-slate-100 mb-4">
              Get In Touch
            </h2>
            <p className="font-body text-slate-400 text-base leading-relaxed mb-10">
              Open to project coordinator roles, agile consulting, and tech-adjacent opportunities.
              Feel free to reach out via LinkedIn or email.
            </p>
          </motion.div>

          {/* Contact cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8"
          >
            <a
              href={`mailto:${basics.email}`}
              className="bracket-corner group flex items-center gap-3 p-4 bg-card border border-slate-800/60 rounded-sm hover:border-cyan-DEFAULT/30 hover:bg-card-hover transition-all"
            >
              <div className="w-9 h-9 rounded-sm bg-cyan-DEFAULT/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4 text-cyan-DEFAULT" />
              </div>
              <div className="text-left min-w-0">
                <p className="font-mono text-[9px] text-slate-500 tracking-widest uppercase mb-0.5">
                  Email
                </p>
                <p className="font-body text-sm text-slate-200 truncate group-hover:text-cyan-DEFAULT transition-colors">
                  {basics.email}
                </p>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-DEFAULT ml-auto flex-shrink-0 transition-colors" />
            </a>

            <a
              href={basics.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bracket-corner group flex items-center gap-3 p-4 bg-card border border-slate-800/60 rounded-sm hover:border-cyan-DEFAULT/30 hover:bg-card-hover transition-all"
            >
              <div className="w-9 h-9 rounded-sm bg-cyan-DEFAULT/10 flex items-center justify-center flex-shrink-0">
                <Linkedin className="w-4 h-4 text-cyan-DEFAULT" />
              </div>
              <div className="text-left">
                <p className="font-mono text-[9px] text-slate-500 tracking-widest uppercase mb-0.5">
                  LinkedIn
                </p>
                <p className="font-body text-sm text-slate-200 group-hover:text-cyan-DEFAULT transition-colors">
                  anuragtiwari3
                </p>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-DEFAULT ml-auto flex-shrink-0 transition-colors" />
            </a>

            <a
              href={basics.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bracket-corner group flex items-center gap-3 p-4 bg-card border border-slate-800/60 rounded-sm hover:border-cyan-DEFAULT/30 hover:bg-card-hover transition-all"
            >
              <div className="w-9 h-9 rounded-sm bg-cyan-DEFAULT/10 flex items-center justify-center flex-shrink-0">
                <Github className="w-4 h-4 text-cyan-DEFAULT" />
              </div>
              <div className="text-left">
                <p className="font-mono text-[9px] text-slate-500 tracking-widest uppercase mb-0.5">
                  GitHub
                </p>
                <p className="font-body text-sm text-slate-200 group-hover:text-cyan-DEFAULT transition-colors">
                  duketower
                </p>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-DEFAULT ml-auto flex-shrink-0 transition-colors" />
            </a>

            <a
              href={`tel:${basics.phone}`}
              className="bracket-corner group flex items-center gap-3 p-4 bg-card border border-slate-800/60 rounded-sm hover:border-slate-700 hover:bg-card-hover transition-all"
            >
              <div className="w-9 h-9 rounded-sm bg-slate-800 flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4 text-slate-400" />
              </div>
              <div className="text-left">
                <p className="font-mono text-[9px] text-slate-500 tracking-widest uppercase mb-0.5">
                  Phone
                </p>
                <p className="font-body text-sm text-slate-200">
                  +91 {basics.phone}
                </p>
              </div>
            </a>

            <div className="bracket-corner flex items-center gap-3 p-4 bg-card/40 border border-slate-800/40 rounded-sm">
              <div className="w-9 h-9 rounded-sm bg-slate-800/60 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-slate-500" />
              </div>
              <div className="text-left">
                <p className="font-mono text-[9px] text-slate-500 tracking-widest uppercase mb-0.5">
                  Location
                </p>
                <p className="font-body text-sm text-slate-300">
                  {basics.location}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Download CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <a
              href={basics.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 font-syne font-semibold text-sm tracking-wide text-void bg-cyan-DEFAULT hover:bg-cyan-dim rounded transition-all hover:shadow-[0_0_24px_rgba(6,182,212,0.4)]"
            >
              <Download className="w-4 h-4" />
              Download Resume via LinkedIn
            </a>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 text-center">
        <div className="h-px w-full max-w-xs mx-auto bg-gradient-to-r from-transparent via-slate-800 to-transparent mb-6" />
        <p className="font-mono text-[10px] text-slate-700 tracking-wider">
          Anurag Tiwari — CSM® · Built with Next.js · {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
