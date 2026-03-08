"use client";
import { useState } from "react";
import dynamic from "next/dynamic";

import SplashScreen from "@/components/SplashScreen";
import AnimatedBackground from "@/components/AnimatedBackground";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImpactStrip from "@/components/ImpactStrip";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import PersonalProjects from "@/components/PersonalProjects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {!splashDone && <SplashScreen onDone={() => setSplashDone(true)} />}
      <AnimatedBackground />
      {splashDone && (
        <>
          <ScrollProgress />
          <Navbar />
          <main className="relative z-10 pb-20 md:pb-0">
            <Hero />
            <ImpactStrip />
            <Experience />
            <Achievements />
            <PersonalProjects />
            <Skills />
            <Education />
            <Contact />
          </main>
        </>
      )}
    </>
  );
}
