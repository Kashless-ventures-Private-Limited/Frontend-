import Link from "next/link";
import { ArrowRight, ArrowLeft, ShieldAlert, CheckCircle2, Search, Target, Compass, Users, Scale } from "lucide-react";
import { investmentLenses, seoMetadataMap } from "@/lib/data";

export const metadata = {
  title: seoMetadataMap.investmentApproach.title,
  description: seoMetadataMap.investmentApproach.description,
};

const lensIcons = [Target, Search, Compass, Users, Scale];

export default function InvestmentApproachPage() {
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
              Evaluation Framework
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1E3D] mt-3 leading-tight">
              A considered approach to strategic opportunity.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#475569] leading-relaxed">
              Our approach starts with understanding. Before forming a view, we seek context on the business, market, operating model, leadership priorities and the role technology may play in its future. We believe that well-informed decisions require both analytical discipline and appreciation for the realities behind the numbers.
            </p>
          </div>
        </div>
      </section>

      {/* How We Assess Opportunities Section */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">
              The 5 Assessment Lenses
            </span>
            <h2 className="text-3xl font-bold text-[#0B1E3D] mt-2">
              How we assess opportunities
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              A structured, context-driven evaluation across fundamental operational and strategic dimensions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {investmentLenses.map((item, idx) => {
              const Icon = lensIcons[idx % lensIcons.length];
              return (
                <div
                  key={item.lens}
                  className="bg-[#0B1E3D] border border-slate-700/80 p-8 rounded-2xl shadow-xl card-hover flex flex-col justify-between relative overflow-hidden group"
                >
                  <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#0EB89B]/15 blur-xl pointer-events-none transition-transform duration-300 group-hover:scale-125" />
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#0EB89B]/15 to-transparent rounded-bl-full pointer-events-none" />

                  <div>
                    <div className="w-12 h-12 rounded-full bg-[#0EB89B] text-[#0B1E3D] flex items-center justify-center mb-6 shadow-md transition-transform duration-300 group-hover:scale-105">
                      <Icon className="w-6 h-6 text-[#0B1E3D]" />
                    </div>
                    <span className="text-xs font-bold text-[#0EB89B] uppercase tracking-wider">
                      Lens 0{idx + 1}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1 mb-3 tracking-tight">
                      {item.lens}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {item.copy}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-700/70 flex items-center gap-2 text-xs text-[#0EB89B]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0EB89B]" />
                    <span className="font-semibold uppercase tracking-wider">Rigorous Review</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Non-solicitation disclaimer box */}
      <section className="py-12 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-lg bg-white border border-slate-200 text-xs text-slate-500 leading-relaxed max-w-4xl mx-auto flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-700">Implementation Note:</strong> This content does not constitute investment advice, an offer, a public solicitation, a fund strategy, or a commitment to invest.
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-[#0B1E3D]">
              Explore an opportunity with us
            </h2>
            <p className="text-slate-600 text-lg">
              We welcome thoughtful conversations with founders, operators and advisors.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="btn-primary py-3.5 px-8 text-sm font-semibold tracking-wide"
              >
                <span>Discuss an opportunity</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
