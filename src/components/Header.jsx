"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isTechActive = pathname.startsWith("/technology-solutions");
  const isInvestActive = pathname.startsWith("/capital-strategic-investments");

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs"
          : "bg-white border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo: True transparent KV Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="h-10 sm:h-11 w-auto flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
              <img
                src="/logo.png"
                alt="Kashless Ventures Logo"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </div>
            <span className="text-[#0B1E3D] font-bold text-base sm:text-lg tracking-wider uppercase font-sans whitespace-nowrap group-hover:text-[#0F6E62] transition-colors">
              Kashless Ventures
            </span>
          </Link>

          {/* Desktop Navigation: Direct links with zero dropdowns */}
          <nav className="hidden lg:flex items-center gap-2 font-sans">
            <Link
              href="/"
              className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === "/"
                  ? "text-[#0B1E3D] font-semibold bg-slate-50"
                  : "text-[#475569] hover:text-[#0B1E3D] hover:bg-slate-50"
              }`}
            >
              Home
            </Link>

            <Link
              href="/technology-solutions"
              className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                isTechActive
                  ? "text-[#0B1E3D] font-semibold bg-slate-50"
                  : "text-[#475569] hover:text-[#0B1E3D] hover:bg-slate-50"
              }`}
            >
              Technology Solutions
            </Link>

            <Link
              href="/capital-strategic-investments"
              className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                isInvestActive
                  ? "text-[#0B1E3D] font-semibold bg-slate-50"
                  : "text-[#475569] hover:text-[#0B1E3D] hover:bg-slate-50"
              }`}
            >
              Capital & Strategic Investments
            </Link>
          </nav>

          {/* Header Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="btn-primary py-2.5 px-4 text-xs font-semibold tracking-wide uppercase"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md text-[#0B1E3D] hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay & Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto px-4 pt-3 pb-6">
          <div className="space-y-1">
            <Link
              href="/"
              className={`block px-3 py-2 text-base font-medium rounded-md ${
                pathname === "/" ? "text-[#0F6E62] bg-slate-50 font-semibold" : "text-[#0B1E3D]"
              }`}
            >
              Home
            </Link>

            <Link
              href="/technology-solutions"
              className={`block px-3 py-2 text-base font-medium rounded-md ${
                isTechActive ? "text-[#0F6E62] bg-slate-50 font-semibold" : "text-[#0B1E3D]"
              }`}
            >
              Technology Solutions
            </Link>

            <Link
              href="/capital-strategic-investments"
              className={`block px-3 py-2 text-base font-medium rounded-md ${
                isInvestActive ? "text-[#0F6E62] bg-slate-50 font-semibold" : "text-[#0B1E3D]"
              }`}
            >
              Capital & Strategic Investments
            </Link>

            <Link
              href="/technology-capital"
              className={`block px-3 py-2 text-base font-medium rounded-md ${
                pathname === "/technology-capital"
                  ? "text-[#0F6E62] bg-slate-50 font-semibold"
                  : "text-[#0B1E3D]"
              }`}
            >
              Technology & Capital
            </Link>

            <Link
              href="/about"
              className={`block px-3 py-2 text-base font-medium rounded-md ${
                pathname === "/about"
                  ? "text-[#0F6E62] bg-slate-50 font-semibold"
                  : "text-[#0B1E3D]"
              }`}
            >
              About
            </Link>

            <Link
              href="/partnerships"
              className={`block px-3 py-2 text-base font-medium rounded-md ${
                pathname === "/partnerships"
                  ? "text-[#0F6E62] bg-slate-50 font-semibold"
                  : "text-[#0B1E3D]"
              }`}
            >
              Partnerships
            </Link>

            <Link
              href="/careers"
              className={`block px-3 py-2 text-base font-medium rounded-md ${
                pathname === "/careers"
                  ? "text-[#0F6E62] bg-slate-50 font-semibold"
                  : "text-[#0B1E3D]"
              }`}
            >
              Careers
            </Link>

            <div className="pt-4 border-t border-slate-200 mt-2">
              <Link
                href="/contact"
                className="btn-primary w-full justify-center py-3 text-sm font-semibold uppercase tracking-wider"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
