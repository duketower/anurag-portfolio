"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) { onDone(); return; }

    const duration = 1600;
    const interval = 20;
    const steps = duration / interval;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const eased = 1 - Math.pow(1 - step / steps, 2);
      setProgress(Math.min(eased * 100, 100));
      if (step >= steps) {
        clearInterval(timer);
        setTimeout(() => { setVisible(false); setTimeout(onDone, 500); }, 200);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-void"
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Monogram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative mb-10"
          >
            <div className="relative w-24 h-24 flex items-center justify-center">
              {/* Rotating ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-cyan-DEFAULT/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-2 rounded-full border border-violet-DEFAULT/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              {/* Monogram text */}
              <span
                className="text-3xl font-syne font-black tracking-tight"
                style={{
                  background: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                AT
              </span>
            </div>
            {/* Corner decorators */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-cyan-DEFAULT/60" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-cyan-DEFAULT/60" />
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center mb-8"
          >
            <p className="font-mono text-xs tracking-[0.25em] text-cyan-DEFAULT/70 mb-1 uppercase">
              Initialising
            </p>
            <h1 className="font-syne text-xl font-bold text-slate-200 tracking-wider">
              Anurag Tiwari
            </h1>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="w-48"
          >
            <div className="h-px bg-slate-800 relative overflow-hidden rounded">
              <motion.div
                className="absolute inset-y-0 left-0 rounded"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #06b6d4, #8b5cf6)",
                  boxShadow: "0 0 8px rgba(6,182,212,0.6)",
                }}
              />
            </div>
            <p className="font-mono text-[10px] text-slate-600 text-right mt-1">
              {Math.round(progress)}%
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
