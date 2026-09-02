import Link from "next/link";
import { ArrowRight, ShieldCheck, Cpu, Building2, TrendingUp, Layers, CheckCircle2, ArrowUpRight, Lock, Server, Sparkles } from "lucide-react";
import { techSolutionsList, valuesList } from "@/lib/data";

export const metadata = {
  title: "Kashless Ventures | Technology. Capital. Growth.",
  description:
    "Kashless Ventures helps organisations build stronger technology foundations and explore strategic opportunities for long-term value.",
};

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* 01 / Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-[#F8FAFC] border-b border-slate-200/80 pt-20 pb-24 lg:pt-28 lg:pb-32 bg-grid-pattern">
        {/* Abstract Architectural Accent Lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
          <div className="absolute -top-40 right-10 w-96 h-96 rounded-full bg-[#0F6E62]/5 blur-3xl" />
          <div className="absolute top-60 -left-20 w-[500px] h-[500px] rounded-full bg-[#0B1E3D]/5 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white border border-slate-200 text-xs font-semibold uppercase tracking-widest text-[#0F6E62] mb-6 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
              Kashless Ventures
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0B1E3D] leading-[1.12]">
              Technology that moves business forward.{" "}
              <span className="text-[#0F6E62] block sm:inline">
                Capital that helps value grow.
              </span>
            </h1>

            {/* Body */}
            <p className="mt-6 text-lg sm:text-xl text-[#475569] leading-relaxed max-w-3xl">
              Kashless Ventures brings together practical technology solutions and a long-term strategic perspective. We help organisations strengthen how they operate today while identifying opportunities to build for what comes next.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/technology-solutions"
                className="btn-primary py-3.5 px-6 text-sm font-semibold tracking-wide"
              >
                <span>Explore Technology Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/capital-strategic-investments"
                className="btn-secondary py-3.5 px-6 text-sm font-semibold tracking-wide"
              >
                <span>Explore Strategic Investments</span>
              </Link>
            </div>

            {/* Institutional Trust Sub-bar */}
            <div className="mt-14 pt-8 border-t border-slate-200/90 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-[#64748B]">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#0F6E62] shrink-0" />
                <span>Evidence-Led & Rigorous Decisions</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Layers className="w-4 h-4 text-[#0F6E62] shrink-0" />
                <span>End-to-End Technology Capabilities</span>
              </div>
              <div className="flex items-center gap-2.5">
                <TrendingUp className="w-4 h-4 text-[#0F6E62] shrink-0" />
                <span>Patient, Long-Term Value Creation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 / Section: Two capabilities, one long-term view */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">
              Strategic Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1E3D] mt-2">
              Two capabilities, one long-term view
            </h2>
            <p className="text-slate-600 mt-4 text-base leading-relaxed">
              We connect practical execution in technology with the disciplined thinking of strategic capital.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Capability 1: Technology Solutions */}
            <div className="bg-[#0B1E3D] border border-slate-700/80 rounded-2xl p-8 sm:p-10 flex flex-col justify-between card-hover relative overflow-hidden group shadow-xl">
              {/* Vibrant teal circle accent in corner matching image 2 */}
              <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-[#0EB89B]/15 blur-2xl pointer-events-none transition-transform duration-300 group-hover:scale-125" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0EB89B]/15 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                {/* Vibrant teal circular icon badge matching image 2 */}
                <div className="w-12 h-12 rounded-full bg-[#0EB89B] text-[#0B1E3D] flex items-center justify-center mb-6 shadow-md transition-transform duration-300 group-hover:scale-105">
                  <Cpu className="w-6 h-6 text-[#0B1E3D]" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Technology Solutions
                </h3>
                <p className="text-slate-300 mt-4 leading-relaxed text-base">
                  From software and cloud to infrastructure, security and workplace technology, we help businesses choose, deploy and support the capabilities that matter.
                </p>

                <div className="mt-8 space-y-3 border-t border-slate-700/70 pt-6">
                  <p className="text-xs uppercase tracking-wider text-[#0EB89B] font-semibold">
                    Core Focus Areas:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-200">
                    <li className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#0EB89B] shrink-0" />
                      Software & Digital Products
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#0EB89B] shrink-0" />
                      Cloud & Infrastructure
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#0EB89B] shrink-0" />
                      Cybersecurity
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#0EB89B] shrink-0" />
                      Workplace & Managed Services
                    </li>
                  </ul>
                </div>
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

            {/* Capability 2: Capital & Strategic Investments */}
            <div className="bg-[#0B1E3D] border border-slate-700/80 rounded-2xl p-8 sm:p-10 flex flex-col justify-between card-hover relative overflow-hidden group shadow-xl">
              {/* Vibrant teal circle accent in corner matching image 2 */}
              <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-[#0EB89B]/15 blur-2xl pointer-events-none transition-transform duration-300 group-hover:scale-125" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0EB89B]/15 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                {/* Vibrant teal circular icon badge matching image 2 */}
                <div className="w-12 h-12 rounded-full bg-[#0EB89B] text-[#0B1E3D] flex items-center justify-center mb-6 shadow-md transition-transform duration-300 group-hover:scale-105">
                  <TrendingUp className="w-6 h-6 text-[#0B1E3D]" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Capital & Strategic Investments
                </h3>
                <p className="text-slate-300 mt-4 leading-relaxed text-base">
                  We evaluate select opportunities where disciplined capital, technology insight and active strategic thinking can help build durable value.
                </p>

                <div className="mt-8 space-y-3 border-t border-slate-700/70 pt-6">
                  <p className="text-xs uppercase tracking-wider text-[#0EB89B] font-semibold">
                    Evaluation Principles:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-200">
                    <li className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#0EB89B] shrink-0" />
                      Long-Term Value Creation
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#0EB89B] shrink-0" />
                      Operational Leverage
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#0EB89B] shrink-0" />
                      Leadership Alignment
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#0EB89B] shrink-0" />
                      Constructive Partnership
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-700/70">
                <Link
                  href="/capital-strategic-investments"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0EB89B] hover:text-[#5eead4] transition-colors"
                >
                  <span>Explore Our Investment Approach</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 / Section: The Kashless perspective */}
      <section className="py-20 lg:py-28 bg-[#071326] text-white relative overflow-hidden bg-grid-pattern-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#0D9488] font-semibold">
                Guiding Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                The Kashless perspective
              </h2>
              <div className="w-12 h-1 bg-[#0D9488] rounded mt-2" />
            </div>

            <div className="lg:col-span-7 space-y-6">
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-light">
                We see technology as more than an operational requirement. It can be a source of resilience, differentiation and measurable momentum.
              </p>
              <div className="p-6 rounded-lg bg-slate-900/80 border border-slate-800 text-white font-medium text-base sm:text-lg border-l-4 border-l-[#0D9488]">
                “Our work is guided by a simple belief: stronger businesses are built when practical execution is matched with a long-term view.”
              </div>
              <div className="pt-2">
                <Link
                  href="/technology-capital"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#0D9488] hover:text-teal-300 transition-colors"
                >
                  <span>Read how technology and capital inform one another</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 / Section: Built for meaningful progress */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">
              Partnership In Practice
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1E3D] mt-2">
              Built for meaningful progress
            </h2>
            <p className="text-slate-600 mt-4 text-lg leading-relaxed">
              Whether you are modernising critical systems, securing a growing operation, or exploring a strategic opportunity, Kashless Ventures brings a focused, partnership-minded approach to the conversation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0B1E3D] border border-slate-700/80 p-8 rounded-2xl shadow-xl card-hover flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-[#0EB89B]/15 blur-xl pointer-events-none transition-transform duration-300 group-hover:scale-125" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#0EB89B]/15 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                <div className="w-12 h-12 rounded-full bg-[#0EB89B] text-[#0B1E3D] flex items-center justify-center mb-6 shadow-md transition-transform duration-300 group-hover:scale-105">
                  <Server className="w-6 h-6 text-[#0B1E3D]" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Modernising Critical Systems
                </h3>
                <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                  Streamlining architectures, migrating legacy workloads, and creating resilient digital infrastructure designed for continuity.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-700/70">
                <Link
                  href="/technology-solutions/cloud-infrastructure"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0EB89B] hover:text-[#5eead4] transition-colors"
                >
                  <span>Infrastructure Roadmaps</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-[#0B1E3D] border border-slate-700/80 p-8 rounded-2xl shadow-xl card-hover flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-[#0EB89B]/15 blur-xl pointer-events-none transition-transform duration-300 group-hover:scale-125" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#0EB89B]/15 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                <div className="w-12 h-12 rounded-full bg-[#0EB89B] text-[#0B1E3D] flex items-center justify-center mb-6 shadow-md transition-transform duration-300 group-hover:scale-105">
                  <Lock className="w-6 h-6 text-[#0B1E3D]" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Securing a Growing Operation
                </h3>
                <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                  Establishing proportionate security safeguards, identity visibility, and risk governance tailored to how teams actually operate.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-700/70">
                <Link
                  href="/technology-solutions/cybersecurity"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0EB89B] hover:text-[#5eead4] transition-colors"
                >
                  <span>Cybersecurity Planning</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-[#0B1E3D] border border-slate-700/80 p-8 rounded-2xl shadow-xl card-hover flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-[#0EB89B]/15 blur-xl pointer-events-none transition-transform duration-300 group-hover:scale-125" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#0EB89B]/15 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                <div className="w-12 h-12 rounded-full bg-[#0EB89B] text-[#0B1E3D] flex items-center justify-center mb-6 shadow-md transition-transform duration-300 group-hover:scale-105">
                  <Building2 className="w-6 h-6 text-[#0B1E3D]" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Exploring Strategic Growth
                </h3>
                <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                  Evaluating opportunities where commercial clarity, active technology insight, and patient capital can unlock long-term value.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-700/70">
                <Link
                  href="/capital-strategic-investments/founders-businesses"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0EB89B] hover:text-[#5eead4] transition-colors"
                >
                  <span>For Founders & Leaders</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 / Closing CTA Section */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0B1E3D] via-[#16305A] to-[#0B1E3D] rounded-2xl p-10 sm:p-14 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-[#0D9488] font-semibold">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2">
                Start a conversation
              </h2>
              <p className="text-slate-300 mt-3 text-base sm:text-lg">
                Tell us what you are building, improving or exploring. We route each enquiry directly to our practice leaders.
              </p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="btn-white py-3.5 px-6 text-sm font-semibold"
              >
                <span>Contact Kashless</span>
                <ArrowRight className="w-4 h-4 text-[#0B1E3D]" />
              </Link>
              <Link
                href="/about"
                className="btn-outline-white py-3.5 px-6 text-sm font-medium"
              >
                <span>About Our Approach</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
