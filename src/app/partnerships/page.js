import Link from "next/link";
import { ArrowRight, CheckCircle2, HeartHandshake, ShieldCheck, Cpu, Building2, Users } from "lucide-react";
import { partnershipPrinciples, seoMetadataMap } from "@/lib/data";

export const metadata = {
  title: seoMetadataMap.partnerships.title,
  description: seoMetadataMap.partnerships.description,
};

export default function PartnershipsPage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-[#F8FAFC] border-b border-slate-200/80 pt-20 pb-20 lg:pt-24 lg:pb-28 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">
              Ecosystem & Collaboration
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0B1E3D] mt-3 leading-tight">
              Better outcomes are built together.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#475569] leading-relaxed">
              Kashless Ventures values relationships with organisations that bring genuine capability, shared standards and a long-term mindset. We are open to conversations with technology providers, specialist delivery partners, ecosystem participants and strategic collaborators whose work can create meaningful value for the businesses we support.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Principles */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">
              Guiding Standards
            </span>
            <h2 className="text-3xl font-bold text-[#0B1E3D] mt-2">
              Partnership principles
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              The foundational standards that define every institutional collaboration we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnershipPrinciples.map((principle, idx) => (
              <div
                key={principle}
                className="p-6 rounded-2xl bg-[#0B1E3D] border border-slate-700/80 shadow-lg flex items-center gap-5 card-hover relative overflow-hidden group"
              >
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#0EB89B]/15 blur-lg pointer-events-none transition-transform duration-300 group-hover:scale-125" />
                <div className="w-10 h-10 rounded-full bg-[#0EB89B] text-[#0B1E3D] font-bold text-xs flex items-center justify-center shrink-0 shadow-md transition-transform duration-300 group-hover:scale-105">
                  0{idx + 1}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {principle}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Collaboration Tracks */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Track 1: Technology & Delivery Partners */}
            <div className="bg-[#0B1E3D] border border-slate-700/80 p-8 sm:p-10 rounded-2xl shadow-xl card-hover flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-[#0EB89B]/15 blur-xl pointer-events-none transition-transform duration-300 group-hover:scale-125" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#0EB89B]/15 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                <div className="w-12 h-12 rounded-full bg-[#0EB89B] text-[#0B1E3D] flex items-center justify-center mb-6 shadow-md transition-transform duration-300 group-hover:scale-105">
                  <Cpu className="w-6 h-6 text-[#0B1E3D]" />
                </div>
                <span className="text-xs uppercase tracking-widest text-[#0EB89B] font-semibold">
                  Capability Integration
                </span>
                <h3 className="text-2xl font-bold text-white mt-1 mb-4 tracking-tight">
                  For technology and delivery partners
                </h3>
                <p className="text-slate-300 text-base leading-relaxed">
                  If your capabilities complement our technology offering, we welcome an introduction. Please share the areas you cover, the markets you serve and the kind of collaboration you have in mind.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-700/70">
                <Link
                  href="/contact"
                  className="btn-primary py-3 px-6 text-sm font-semibold tracking-wide w-full sm:w-auto"
                >
                  <span>Introduce your capabilities</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Track 2: Strategic Collaborators */}
            <div className="bg-[#0B1E3D] border border-slate-700/80 p-8 sm:p-10 rounded-2xl shadow-xl card-hover flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-[#0EB89B]/15 blur-xl pointer-events-none transition-transform duration-300 group-hover:scale-125" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#0EB89B]/15 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                <div className="w-12 h-12 rounded-full bg-[#0EB89B] text-[#0B1E3D] flex items-center justify-center mb-6 shadow-md transition-transform duration-300 group-hover:scale-105">
                  <Building2 className="w-6 h-6 text-[#0B1E3D]" />
                </div>
                <span className="text-xs uppercase tracking-widest text-[#0EB89B] font-semibold">
                  Aligned Perspectives
                </span>
                <h3 className="text-2xl font-bold text-white mt-1 mb-4 tracking-tight">
                  For strategic collaborators
                </h3>
                <p className="text-slate-300 text-base leading-relaxed">
                  If you see a credible opportunity to create value through aligned expertise, relationships or shared perspective, we would be pleased to start a conversation.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-700/70">
                <Link
                  href="/contact"
                  className="btn-primary py-3 px-6 text-sm font-semibold tracking-wide w-full sm:w-auto"
                >
                  <span>Start a collaboration conversation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-[#0B1E3D]">
              Partner with Kashless Ventures
            </h2>
            <p className="text-slate-600 text-lg">
              We welcome exploratory conversations with verified technology providers, domain specialists and ecosystem partners.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="btn-primary py-3.5 px-8 text-sm font-semibold tracking-wide"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
