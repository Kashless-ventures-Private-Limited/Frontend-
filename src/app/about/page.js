import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Compass, Eye, HeartHandshake, Zap, Scale } from "lucide-react";
import { valuesList } from "@/lib/data";

export const metadata = {
  title: "About Kashless Ventures | Technology & Strategic Thinking",
  description:
    "Learn how Kashless Ventures brings practical technology capability and long-term strategic thinking together.",
};

const valueIcons = [
  Zap, // Clarity over complexity
  Compass, // Long-term thinking
  CheckCircle2, // Practical execution
  HeartHandshake, // Partnership mindset
  Scale, // Responsible growth
];

export default function AboutPage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-[#F8FAFC] border-b border-slate-200/80 pt-20 pb-20 lg:pt-24 lg:pb-28 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">
              About Kashless Ventures
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0B1E3D] mt-3 leading-tight">
              Building the capability to move forward.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#475569] leading-relaxed">
              Kashless Ventures Pvt. Ltd. operates at the intersection of technology and strategic capital. We believe that businesses create lasting value when they are equipped with the right foundations, the right perspective and the willingness to act with intent.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">
                Origins & Purpose
              </span>
              <h2 className="text-3xl font-bold text-[#0B1E3D] mt-2">
                Our Story
              </h2>
              <div className="w-10 h-1 bg-[#0F6E62] rounded mt-4" />
            </div>

            <div className="lg:col-span-8 space-y-6 text-[#334155] text-lg leading-relaxed">
              <p>
                Kashless Ventures was created around a practical idea: businesses should be able to access thoughtful technology capability and long-term strategic thinking without losing sight of what makes their work distinctive.
              </p>
              <p>
                We bring these disciplines together to support progress that is grounded, relevant and built to last. By matching technological capability with patient strategic perspective, we help organisations navigate change with clarity and intent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Grid */}
      <section className="py-20 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-[#0B1E3D] border border-slate-700/80 p-8 sm:p-10 rounded-2xl shadow-xl card-hover flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-[#0EB89B]/15 blur-xl pointer-events-none transition-transform duration-300 group-hover:scale-125" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#0EB89B]/15 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                <div className="w-12 h-12 rounded-full bg-[#0EB89B] text-[#0B1E3D] flex items-center justify-center mb-6 shadow-md transition-transform duration-300 group-hover:scale-105">
                  <Compass className="w-6 h-6 text-[#0B1E3D]" />
                </div>
                <span className="text-xs uppercase tracking-widest text-[#0EB89B] font-semibold">
                  Purpose in Action
                </span>
                <h3 className="text-2xl font-bold text-white mt-1 mb-4 tracking-tight">
                  Mission
                </h3>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  To help businesses build stronger digital foundations and pursue meaningful growth through practical technology and disciplined strategic thinking.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-[#0B1E3D] border border-slate-700/80 p-8 sm:p-10 rounded-2xl shadow-xl card-hover flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-[#0EB89B]/15 blur-xl pointer-events-none transition-transform duration-300 group-hover:scale-125" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#0EB89B]/15 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                <div className="w-12 h-12 rounded-full bg-[#0EB89B] text-[#0B1E3D] flex items-center justify-center mb-6 shadow-md transition-transform duration-300 group-hover:scale-105">
                  <Eye className="w-6 h-6 text-[#0B1E3D]" />
                </div>
                <span className="text-xs uppercase tracking-widest text-[#0EB89B] font-semibold">
                  Enduring Aspiration
                </span>
                <h3 className="text-2xl font-bold text-white mt-1 mb-4 tracking-tight">
                  Vision
                </h3>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  To be a trusted partner for organisations and entrepreneurs building resilient, technology-enabled and enduring enterprises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">
              Principles & Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1E3D] mt-2">
              Our Values
            </h2>
            <p className="text-slate-600 mt-4 text-lg">
              The fundamental tenets that guide how we engage, decide and deliver across all initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valuesList.map((val, idx) => {
              const Icon = valueIcons[idx % valueIcons.length];
              return (
                <div
                  key={val.title}
                  className="bg-[#0B1E3D] border border-slate-700/80 p-8 rounded-2xl shadow-xl card-hover flex flex-col justify-between relative overflow-hidden group"
                >
                  <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#0EB89B]/15 blur-xl pointer-events-none transition-transform duration-300 group-hover:scale-125" />
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#0EB89B]/15 to-transparent rounded-bl-full pointer-events-none" />

                  <div>
                    <div className="w-11 h-11 rounded-full bg-[#0EB89B] text-[#0B1E3D] flex items-center justify-center mb-5 shadow-md transition-transform duration-300 group-hover:scale-105">
                      <Icon className="w-5 h-5 text-[#0B1E3D]" />
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {val.title}
                    </h3>
                    <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-700/70 text-xs font-semibold text-[#0EB89B] uppercase tracking-wider">
                    Core Standard
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership & Governance Section */}
      <section className="py-20 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">
              Governance & Oversight
            </span>
            <h2 className="text-3xl font-bold text-[#0B1E3D] mt-2 mb-6">
              Leadership
            </h2>
            <div className="bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-2xs">
              <ShieldCheck className="w-12 h-12 text-[#0F6E62] mx-auto mb-4" />
              <p className="text-lg sm:text-xl text-[#334155] font-medium leading-relaxed max-w-2xl mx-auto">
                “Kashless Ventures is guided by a team committed to thoughtful execution, rigorous decision-making and long-term value creation.”
              </p>
              <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-[#64748B]">
                <span>Institutional Governance</span>
                <span>•</span>
                <span>Multi-Disciplinary Expertise</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1E3D]">
              Speak with Kashless Ventures
            </h2>
            <p className="text-lg text-slate-600">
              We welcome conversations with organisations, founders and partners who share our commitment to durable progress.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="btn-primary py-3.5 px-8 text-sm font-semibold tracking-wide"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
