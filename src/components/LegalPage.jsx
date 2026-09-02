import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LegalPage({ title, updated, children }) {
  return (
    <div className="space-y-0">
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#0F6E62] hover:text-[#094F46] uppercase tracking-wider"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>

      <section className="bg-gradient-to-b from-white to-[#F8FAFC] border-b border-slate-200/80 pt-16 pb-16 lg:pt-20 lg:pb-20 bg-grid-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">
            Corporate Governance
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1E3D] mt-2">
            {title}
          </h1>
          <p className="mt-4 text-slate-600 text-sm">
            Last updated: {updated || "2026"}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose-legal">
          {children}
        </div>
      </section>
    </div>
  );
}
