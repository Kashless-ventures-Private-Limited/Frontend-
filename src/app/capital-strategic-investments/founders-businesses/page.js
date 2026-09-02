import Link from "next/link";
import { ArrowRight, ArrowLeft, CheckCircle2, ShieldCheck, Lock, FileText, Send } from "lucide-react";
import { seoMetadataMap } from "@/lib/data";

export const metadata = {
  title: seoMetadataMap.foundersBusinesses.title,
  description: seoMetadataMap.foundersBusinesses.description,
};

export default function FoundersBusinessesPage() {
  const checklist = [
    "A short description of the business and the problem it solves",
    "Current stage and the strategic question you are exploring",
    "The role you see for technology, capital or partnership",
    "Relevant materials you are comfortable sharing at this stage",
    "Your contact details and preferred next step",
  ];

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
              For Founders & Business Leaders
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1E3D] mt-3 leading-tight">
              Bring the opportunity. We will bring a considered perspective.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#475569] leading-relaxed">
              Building a business often means making consequential decisions with incomplete information. Kashless Ventures welcomes introductions from founders and business leaders who are thinking seriously about growth, technology capability, strategic partnerships or a potential capital conversation.
            </p>
          </div>
        </div>
      </section>

      {/* What to include Section */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">
                Introduction Guidelines
              </span>
              <h2 className="text-3xl font-bold text-[#0B1E3D] mt-2">
                What to include
              </h2>
              <div className="w-10 h-1 bg-[#0F6E62] rounded mt-4" />
              <p className="text-sm text-slate-500 mt-4 leading-relaxed">
                When reaching out, sharing these concise details helps us prepare for a relevant, thoughtful conversation.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-4">
              {checklist.map((item, idx) => (
                <div
                  key={item}
                  className="p-5 rounded-2xl bg-[#0B1E3D] border border-slate-700/80 shadow-md flex items-center gap-4 card-hover relative overflow-hidden group"
                >
                  <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#0EB89B]/15 blur-lg pointer-events-none transition-transform duration-300 group-hover:scale-125" />
                  <div className="w-8 h-8 rounded-full bg-[#0EB89B] text-[#0B1E3D] font-bold text-xs flex items-center justify-center shrink-0 shadow-md transition-transform duration-300 group-hover:scale-105">
                    {idx + 1}
                  </div>
                  <span className="text-base text-slate-200 font-medium tracking-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA & Fine Print Section */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200 shadow-2xs max-w-3xl mx-auto text-center space-y-6">
            <div className="w-12 h-12 rounded-lg bg-[#0B1E3D] text-white flex items-center justify-center mx-auto shadow-xs">
              <Lock className="w-6 h-6 text-[#0D9488]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1E3D]">
              Begin a confidential conversation
            </h2>
            <p className="text-slate-600 text-lg">
              Reach out directly to start a considered discussion around your company’s strategic opportunities and technology needs.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="btn-primary py-3.5 px-8 text-sm font-semibold tracking-wide"
              >
                <span>Begin a confidential conversation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="pt-6 border-t border-slate-100 text-xs text-slate-500 leading-relaxed max-w-xl mx-auto">
              <strong>Fine print:</strong> Submission of information does not create a duty to review, respond, invest or enter into any relationship.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
