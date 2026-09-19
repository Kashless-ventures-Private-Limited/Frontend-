"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { navigation } from "@/lib/data";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-200 ${scrolled ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm" : "bg-white border-b border-slate-100"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-20 py-3">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <img src="/logo.png" alt="Kashless Ventures Logo" className="h-8 sm:h-9 w-auto object-contain" />
            <span className="text-[#0B1E3D] font-bold text-base sm:text-lg tracking-wider uppercase whitespace-nowrap">Kashless Ventures</span>
          </Link>

          <nav className="hidden xl:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                    ? "text-[#0B1E3D] font-semibold bg-slate-50"
                    : "text-[#475569] hover:text-[#0B1E3D] hover:bg-slate-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact" className="btn-primary py-2.5 px-4 text-xs font-semibold tracking-wide uppercase">
              <span>Talk to Us</span><ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md text-[#0B1E3D] hover:bg-slate-100"
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white shadow-xl px-4 pt-3 pb-6">
          <div className="space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2.5 text-base font-medium rounded-md ${
                  pathname === item.href ? "text-[#0F6E62] bg-slate-50 font-semibold" : "text-[#0B1E3D]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary mt-3 w-full justify-center py-3">Talk to Us</Link>
          </div>
        </div>
      )}
    </header>
  );
}
