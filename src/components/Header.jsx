"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { navigation } from "@/lib/data";

function isActive(pathname, href) {
  return pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
}

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
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
          : "bg-white border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-20 py-3">
          <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="Kashless Ventures home">
            <img src="/logo.png" alt="Kashless Ventures Logo" className="h-8 sm:h-9 w-auto object-contain" />
            <span className="text-[#0B1E3D] font-bold text-base sm:text-lg tracking-wider uppercase whitespace-nowrap">
              Kashless Ventures
            </span>
          </Link>

          <nav className="hidden xl:flex items-center gap-1" aria-label="Primary navigation">
            {navigation.map((item) => {
              const active = isActive(pathname, item.href) || item.children?.some((child) => isActive(pathname, child.href));

              if (!item.children?.length) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      active
                        ? "text-[#0B1E3D] font-semibold bg-slate-50"
                        : "text-[#475569] hover:text-[#0B1E3D] hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div key={item.href} className="relative group">
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      active
                        ? "text-[#0B1E3D] font-semibold bg-slate-50"
                        : "text-[#475569] hover:text-[#0B1E3D] hover:bg-slate-50"
                    }`}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                  <div className="absolute left-0 top-full pt-2 invisible opacity-0 translate-y-1 pointer-events-none group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto focus-within:visible focus-within:opacity-100 focus-within:translate-y-0 focus-within:pointer-events-auto transition-all duration-150">
                    <div className="min-w-56 rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                            isActive(pathname, child.href)
                              ? "bg-slate-50 text-[#0B1E3D]"
                              : "text-[#475569] hover:bg-slate-50 hover:text-[#0B1E3D]"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="hidden xl:flex items-center gap-3">
            <Link href="/contact" className="btn-primary py-2.5 px-4 text-xs font-semibold tracking-wide uppercase">
              <span>Talk to Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden p-2 rounded-md text-[#0B1E3D] hover:bg-slate-100"
            aria-label={mobileOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white shadow-xl px-4 pt-3 pb-6">
          <nav className="space-y-1" aria-label="Mobile navigation">
            {navigation.map((item) => {
              const active = isActive(pathname, item.href) || item.children?.some((child) => isActive(pathname, child.href));

              return (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className={`block px-3 py-2.5 text-base font-medium rounded-md ${
                      active ? "text-[#0F6E62] bg-slate-50 font-semibold" : "text-[#0B1E3D]"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.children?.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={`ml-3 block border-l-2 pl-4 py-2 text-sm font-medium ${
                        isActive(pathname, child.href)
                          ? "border-[#0F6E62] text-[#0F6E62]"
                          : "border-slate-200 text-slate-600 hover:text-[#0B1E3D]"
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              );
            })}
            <Link href="/contact" className="btn-primary mt-3 w-full justify-center py-3">
              Talk to Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
