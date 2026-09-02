import Link from "next/link";
import { ArrowRight, ArrowLeft, CheckCircle2, Layers, Sparkles, Building2 } from "lucide-react";
import { focusAreaThemes, seoMetadataMap } from "@/lib/data";

export const metadata = {
  title: seoMetadataMap.focusAreas.title,
  description: seoMetadataMap.focusAreas.description,
};

export default function FocusAreasPage() {
  return (
    <div className="space-y-0">
      {/* Breadcrumb / Back Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/capital-strategic-investments"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#0F6E62] hover:text-[#094F46] uppercase tracking-wider"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Capital & Strategic Investments</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-[#F8FAFC] border-b border-slate-200/80 pt-16 pb-20 lg:pt-20 lg:pb-24 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">
              Strategic Themes
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1E3D] mt-3 leading-tight">
              Interested in businesses with room to build.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#475569] leading-relaxed">
              Kashless Ventures is interested in exploring opportunities where technology capability, commercial clarity and long-term thinking can work together. Specific sector, stage, geography and transaction preferences should only be added after they are formally defined and approved.
            </p>
          </div>
        </div>
      </section>

      {/* Indicative Themes Section */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">
                Core Themes
              </span>
              <h2 className="text-3xl font-bold text-[#0B1E3D] mt-2">
                Indicative themes
              </h2>
              <div className="w-10 h-1 bg-[#0F6E62] rounded mt-4" />
              <p className="text-sm text-slate-500 mt-4 leading-relaxed">
                Areas where technology leverage, disciplined capital, and operational insight create compounding value.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-4">
              {focusAreaThemes.map((theme, idx) => (
                <div
                  key={theme}
                  className="p-6 rounded-2xl bg-[#0B1E3D] border border-slate-700/80 shadow-lg flex items-center gap-5 card-hover relative overflow-hidden group"
                >
                  <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#0EB89B]/15 blur-lg pointer-events-none transition-transform duration-300 group-hover:scale-125" />
                  <div className="w-10 h-10 rounded-full bg-[#0EB89B] text-[#0B1E3D] font-bold text-xs flex items-center justify-center shrink-0 shadow-md transition-transform duration-300 group-hover:scale-105">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {theme}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Share an opportunity prompt box */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200 shadow-2xs max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">
              Introduction Prompt
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1E3D]">
              Share an opportunity
            </h2>
            <div className="p-6 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 italic text-base leading-relaxed">
              “Tell us briefly about your business, the opportunity you are exploring and why Kashless Ventures may be relevant.”
            </div>
            <div className="pt-2">
              <Link
                href="/contact"
                className="btn-primary py-3.5 px-8 text-sm font-semibold tracking-wide"
              >
                <span>Share an opportunity</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
