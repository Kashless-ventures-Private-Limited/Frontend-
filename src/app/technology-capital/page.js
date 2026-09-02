import Link from "next/link";
import { ArrowRight, Cpu, TrendingUp, Layers, CheckCircle2, Building2, ShieldCheck, Sparkles } from "lucide-react";
import { seoMetadataMap } from "@/lib/data";

export const metadata = {
  title: seoMetadataMap.technologyCapital.title,
  description: seoMetadataMap.technologyCapital.description,
};

export default function TechnologyCapitalPage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-[#F8FAFC] border-b border-slate-200/80 pt-20 pb-20 lg:pt-24 lg:pb-28 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">
              The Differentiating Narrative
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0B1E3D] mt-3 leading-tight">
              Better foundations can create better options.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#475569] leading-relaxed">
              Technology and capital are often discussed separately. We see value in understanding how they can inform one another. Strong technology can make an organisation more resilient, more informed and better prepared to act. Thoughtful capital can help turn that capability into sustained progress.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/technology-solutions"
                className="btn-primary py-3.5 px-6 text-sm font-semibold tracking-wide"
              >
                <span>Explore our capabilities</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="btn-secondary py-3.5 px-6 text-sm font-semibold tracking-wide"
              >
                <span>Discuss an opportunity</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* A Connected Perspective Section */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">
                Unified Approach
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1E3D]">
                A connected perspective
              </h2>
              <div className="w-12 h-1 bg-[#0F6E62] rounded" />
            </div>

            <div className="lg:col-span-7 space-y-6 text-[#334155] text-lg leading-relaxed">
              <p>
                Our work brings together two disciplines that share a common concern: <strong>how to create durable value</strong>. Whether the starting point is a technology requirement or a strategic opportunity, we look for the practical actions that can strengthen the business behind it.
              </p>
              <p>
                By breaking down the traditional silos between technological execution and strategic investment, we ensure that digital systems drive genuine operational leverage rather than isolated cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Pillars Breakdown */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* For Organisations */}
            <div className="bg-[#0B1E3D] border border-slate-700/80 p-8 sm:p-12 rounded-2xl shadow-xl card-hover flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-[#0EB89B]/15 blur-xl pointer-events-none transition-transform duration-300 group-hover:scale-125" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#0EB89B]/15 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                <div className="w-12 h-12 rounded-full bg-[#0EB89B] text-[#0B1E3D] flex items-center justify-center mb-6 shadow-md transition-transform duration-300 group-hover:scale-105">
                  <Cpu className="w-6 h-6 text-[#0B1E3D]" />
                </div>
                <span className="text-xs uppercase tracking-widest text-[#0EB89B] font-semibold">
                  For Organisations
                </span>
                <h3 className="text-2xl font-bold text-white mt-1 mb-4 tracking-tight">
                  Operational Capability & Scale
                </h3>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  Build technology capability with a clearer view of operational priorities, growth context and what sustainable progress requires.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-700/70">
                <Link
                  href="/technology-solutions"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0EB89B] hover:text-[#5eead4] transition-colors"
                >
                  <span>Explore Technology Solutions</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* For Founders & Business Leaders */}
            <div className="bg-[#0B1E3D] border border-slate-700/80 p-8 sm:p-12 rounded-2xl shadow-xl card-hover flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-[#0EB89B]/15 blur-xl pointer-events-none transition-transform duration-300 group-hover:scale-125" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#0EB89B]/15 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                <div className="w-12 h-12 rounded-full bg-[#0EB89B] text-[#0B1E3D] flex items-center justify-center mb-6 shadow-md transition-transform duration-300 group-hover:scale-105">
                  <TrendingUp className="w-6 h-6 text-[#0B1E3D]" />
                </div>
                <span className="text-xs uppercase tracking-widest text-[#0EB89B] font-semibold">
                  For Founders & Business Leaders
                </span>
                <h3 className="text-2xl font-bold text-white mt-1 mb-4 tracking-tight">
                  Strategic Alignment & Capital
                </h3>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  Explore strategic opportunities with a partner that recognises the connection between commercial direction, operational capability and technology readiness.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-700/70">
                <Link
                  href="/capital-strategic-investments"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0EB89B] hover:text-[#5eead4] transition-colors"
                >
                  <span>Explore Investment Approach</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-[#0B1E3D]">
              Connect capability with opportunity
            </h2>
            <p className="text-slate-600 text-lg">
              Let’s discuss how technology foundations and strategic capital can support your organisation’s next phase.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary py-3.5 px-8 text-sm font-semibold tracking-wide"
              >
                <span>Start a conversation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
