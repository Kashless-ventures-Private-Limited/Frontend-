import Link from "next/link";
import { ArrowRight, TrendingUp, CheckCircle2, ShieldAlert, Sparkles, Layers, Building2, Compass } from "lucide-react";
import { seoMetadataMap } from "@/lib/data";

export const metadata = {
  title: seoMetadataMap.capital.title,
  description: seoMetadataMap.capital.description,
};

export default function CapitalStrategicInvestmentsPage() {
  const guidingPrinciples = [
    "Long-term value creation over short-term optics",
    "Technology relevance and the potential for operational leverage",
    "Clear purpose, credible execution and aligned leadership",
    "Responsible governance and an informed view of risk",
    "Opportunities where constructive partnership can matter",
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-[#F8FAFC] border-b border-slate-200/80 pt-20 pb-20 lg:pt-24 lg:pb-28 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">
              Strategic Opportunity
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0B1E3D] mt-3 leading-tight">
              Patient perspective. Disciplined opportunity.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#475569] leading-relaxed">
              Kashless Ventures explores select strategic opportunities where thoughtful capital, technology insight and a long-term view can contribute to durable value creation. We approach each opportunity with care, context and a commitment to responsible decision-making.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="btn-primary py-3 px-6 text-sm font-semibold tracking-wide"
              >
                <span>Discuss a strategic opportunity</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Overview Section */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">
                Perspective & Criteria
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1E3D] mt-2">
                Our approach
              </h2>
              <div className="w-10 h-1 bg-[#0F6E62] rounded mt-4" />
            </div>

            <div className="lg:col-span-8 space-y-6 text-[#334155] text-lg leading-relaxed">
              <p>
                We look for businesses and situations where there is a credible pathway to build stronger capability, sharper execution and sustainable value over time.
              </p>
              <p>
                Our evaluation is selective and informed by commercial context, technology relevance, leadership alignment and the practical realities of growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Guides Our Thinking Section */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">
              Evaluation Tenets
            </span>
            <h2 className="text-3xl font-bold text-[#0B1E3D] mt-2">
              What guides our thinking
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              A disciplined framework ensuring aligned objectives, operational clarity, and long-term momentum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guidingPrinciples.map((item, idx) => (
              <div
                key={item}
                className="bg-[#0B1E3D] border border-slate-700/80 p-7 rounded-2xl shadow-xl card-hover flex flex-col justify-between relative overflow-hidden group"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#0EB89B]/15 blur-xl pointer-events-none transition-transform duration-300 group-hover:scale-125" />
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#0EB89B]/15 to-transparent rounded-bl-full pointer-events-none" />

                <div>
                  <div className="w-10 h-10 rounded-full bg-[#0EB89B] text-[#0B1E3D] font-bold text-xs flex items-center justify-center mb-4 shadow-md transition-transform duration-300 group-hover:scale-105">
                    0{idx + 1}
                  </div>
                  <p className="text-white font-semibold text-base leading-snug tracking-tight">
                    {item}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-700/70 flex items-center gap-1.5 text-xs text-[#0EB89B]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0EB89B]" />
                  <span className="font-semibold uppercase tracking-wider">Strategic Filter</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-routes Explorer */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">
              Deep Dives
            </span>
            <h2 className="text-3xl font-bold text-[#0B1E3D] mt-2">
              Explore our investment framework
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0B1E3D] border border-slate-700/80 rounded-2xl p-8 flex flex-col justify-between shadow-xl card-hover relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-[#0EB89B]/15 blur-xl pointer-events-none transition-transform duration-300 group-hover:scale-125" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#0EB89B]/15 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                <span className="text-xs font-bold text-[#0EB89B] uppercase tracking-wider">
                  01. Assessment
                </span>
                <h3 className="text-xl font-bold text-white mt-2 tracking-tight">
                  Investment Approach
                </h3>
                <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                  Understand how we assess opportunities across business quality, market context, technology relevance, leadership, and risk.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-700/70">
                <Link
                  href="/capital-strategic-investments/approach"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0EB89B] hover:text-[#5eead4] transition-colors"
                >
                  <span>Learn about our approach</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="bg-[#0B1E3D] border border-slate-700/80 rounded-2xl p-8 flex flex-col justify-between shadow-xl card-hover relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-[#0EB89B]/15 blur-xl pointer-events-none transition-transform duration-300 group-hover:scale-125" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#0EB89B]/15 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                <span className="text-xs font-bold text-[#0EB89B] uppercase tracking-wider">
                  02. Focus
                </span>
                <h3 className="text-xl font-bold text-white mt-2 tracking-tight">
                  Focus Areas
                </h3>
                <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                  Indicative themes across technology-enabled businesses and enterprises strengthening operational foundations.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-700/70">
                <Link
                  href="/capital-strategic-investments/focus-areas"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0EB89B] hover:text-[#5eead4] transition-colors"
                >
                  <span>Explore focus areas</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="bg-[#0B1E3D] border border-slate-700/80 rounded-2xl p-8 flex flex-col justify-between shadow-xl card-hover relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-[#0EB89B]/15 blur-xl pointer-events-none transition-transform duration-300 group-hover:scale-125" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#0EB89B]/15 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                <span className="text-xs font-bold text-[#0EB89B] uppercase tracking-wider">
                  03. Engagement
                </span>
                <h3 className="text-xl font-bold text-white mt-2 tracking-tight">
                  For Founders & Businesses
                </h3>
                <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                  What founders and leadership teams can expect from an initial conversation, diligence, and long-term collaboration.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-700/70">
                <Link
                  href="/capital-strategic-investments/founders-businesses"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0EB89B] hover:text-[#5eead4] transition-colors"
                >
                  <span>Connect with our team</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Non-solicitation disclaimer box */}
      <section className="py-12 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-lg bg-white border border-slate-200 text-xs text-slate-500 leading-relaxed max-w-4xl mx-auto flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-700">Important Regulatory Notice:</strong> The information presented on this page and its sub-pages is for general discussion and context only. It does not constitute investment advice, an offer, a public solicitation, a fund strategy, or a commitment to invest or provide capital.
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-[#0B1E3D]">
              Discuss a strategic opportunity
            </h2>
            <p className="text-slate-600 text-lg">
              If you are building, transforming or exploring a strategic next step, we welcome a considered conversation.
            </p>
            <div className="pt-2">
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
