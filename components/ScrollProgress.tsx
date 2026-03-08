"use client";
import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "impact", label: "Impact" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function ScrollProgress() {
  const [active, setActive] = useState("hero");
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(docH > 0 ? (window.scrollY / docH) * 100 : 0);

      let current = "hero";
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= scrollY) current = s.id;
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Top progress line */}
      <div className="fixed top-0 left-0 right-0 h-px z-50 bg-slate-800">
        <div
          className="h-full transition-all duration-100"
          style={{
            width: `${scrollPct}%`,
            background: "linear-gradient(90deg, #06b6d4, #8b5cf6)",
          }}
        />
      </div>

      {/* Right side dot nav — desktop only */}
      <nav
        className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3"
        aria-label="Page sections"
      >
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            title={s.label}
            aria-label={`Go to ${s.label}`}
            className="group flex items-center gap-2 justify-end"
          >
            <span
              className="font-mono text-[9px] tracking-widest uppercase text-slate-600 group-hover:text-cyan-DEFAULT transition-colors opacity-0 group-hover:opacity-100"
            >
              {s.label}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                active === s.id
                  ? "w-3 h-3 bg-cyan-DEFAULT shadow-[0_0_6px_rgba(6,182,212,0.8)]"
                  : "w-1.5 h-1.5 bg-slate-700 group-hover:bg-cyan-DEFAULT/60"
              }`}
            />
          </button>
        ))}
      </nav>
    </>
  );
}
