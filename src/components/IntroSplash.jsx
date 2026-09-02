"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export default function IntroSplash() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(0);

  const dismiss = () => {
    if (fading) return;
    setFading(true);
    // Restore page scroll
    document.body.style.overflow = "";
    setTimeout(() => {
      setVisible(false);
    }, 850);
  };

  useEffect(() => {
    // Lock scroll during splash screen
    document.body.style.overflow = "hidden";

    // Progress bar animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 4;
      });
    }, 70);

    // Auto dismiss after animation duration (2.8 seconds)
    const timer = setTimeout(() => {
      dismiss();
    }, 2800);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      onClick={dismiss}
      className={`fixed inset-0 z-[99999] flex flex-col justify-between bg-[#071326] cursor-pointer select-none transition-all duration-800 cubic-bezier(0.77,0,0.175,1) ${
        fading
          ? "-translate-y-full opacity-0 pointer-events-none"
          : "translate-y-0 opacity-100"
      }`}
      aria-label="Uni Cards Style Splash Screen"
    >
      {/* Top Header bar with Skip */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 pt-8 flex items-center justify-between relative z-20">
        <div className="flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-[#0EB89B] animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold font-sans">
            Kashless Ventures
          </span>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            dismiss();
          }}
          className="group/skip inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-xs font-semibold uppercase tracking-widest text-slate-300 hover:text-white transition-all shadow-lg backdrop-blur-md"
        >
          <span>Enter Website</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#0EB89B] group-hover/skip:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Center Cinematic Stage - 100% Transparent Logo Zoom Animation */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto px-4 text-center">
        {/* Ambient Radial Lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] sm:w-[38rem] h-[28rem] sm:h-[38rem] bg-[#0EB89B]/15 rounded-full blur-3xl pointer-events-none animate-pulse" />

        {/* Animated Zooming Logo with ZERO box containers */}
        <div className="relative flex items-center justify-center my-6">
          <img
            src="/logo-white.png"
            alt="Kashless Ventures"
            className="h-28 sm:h-36 md:h-44 w-auto object-contain animate-logo-zoom"
          />
        </div>

        {/* Brand Reveal Text */}
        <div className="mt-4 space-y-2 animate-fade-in-up">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-widest uppercase font-sans">
            Kashless Ventures
          </h1>
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#0EB89B] font-semibold">
            Technology · Strategic Capital · Enduring Value
          </p>
        </div>
      </div>

      {/* Bottom Progress Bar */}
      <div className="w-full max-w-md mx-auto px-6 pb-10 relative z-20">
        <div className="w-full h-1 bg-slate-800/80 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#0D9488] to-[#0EB89B] transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
