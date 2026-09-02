import Link from "next/link";
import { ArrowRight, CheckCircle2, Cloud, ArrowLeft } from "lucide-react";
import { seoMetadataMap } from "@/lib/data";

export const metadata = {
  title: seoMetadataMap.cloud.title,
  description: seoMetadataMap.cloud.description,
};

export default function CloudInfrastructurePage() {
  const checklist = [
    "Cloud strategy and migration planning",
    "Infrastructure assessment and upgrade roadmaps",
    "Data, backup and recovery considerations",
    "Network and connectivity requirements",
    "Scalability and continuity planning",
  ];

  return (
    <div className="space-y-0">
      {/* Breadcrumb / Back Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/technology-solutions"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#0F6E62] hover:text-[#094F46] uppercase tracking-wider"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Technology Solutions</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-[#F8FAFC] border-b border-slate-200/80 pt-16 pb-20 lg:pt-20 lg:pb-24 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0B1E3D] text-white text-xs font-semibold uppercase tracking-wider mb-4">
              <Cloud className="w-3.5 h-3.5 text-[#0D9488]" />
              Cloud & Infrastructure
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1E3D] leading-tight">
              Infrastructure built for continuity, performance and change.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#475569] leading-relaxed">
              A resilient technology environment begins with the right foundations. We help organisations think through cloud, infrastructure, connectivity and operational readiness in a structured way.
            </p>
          </div>
        </div>
      </section>

      {/* What we help with Section */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">
                Core Domains
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1E3D] mt-2">
                What we help with
              </h2>
              <div className="w-10 h-1 bg-[#0F6E62] rounded mt-4" />
            </div>

            <div className="lg:col-span-8">
              <ul className="space-y-4">
                {checklist.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 p-4 rounded-lg bg-[#F8FAFC] border border-slate-200/80"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#0F6E62] shrink-0 mt-0.5" />
                    <span className="text-base text-[#334155] font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Approach & Good Outcome */}
      <section className="py-16 lg:py-20 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0B1E3D] border border-slate-700/80 p-8 sm:p-10 rounded-2xl shadow-xl card-hover relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-[#0EB89B]/15 blur-xl pointer-events-none transition-transform duration-300 group-hover:scale-125" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#0EB89B]/15 to-transparent rounded-bl-full pointer-events-none" />

              <span className="text-xs uppercase tracking-widest text-[#0EB89B] font-semibold">
                Methodology
              </span>
              <h3 className="text-2xl font-bold text-white mt-2 mb-4 tracking-tight">
                Our approach
              </h3>
              <p className="text-slate-300 leading-relaxed text-base">
                We align recommendations to the needs of the organisation, the people who will use the solution and the realities of implementation. Where specialist products, vendors or delivery partners are involved, scope and responsibilities are agreed before work begins.
              </p>
            </div>

            <div className="bg-[#0B1E3D] border border-slate-700/80 p-8 sm:p-10 rounded-2xl shadow-xl card-hover relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-[#0EB89B]/15 blur-xl pointer-events-none transition-transform duration-300 group-hover:scale-125" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#0EB89B]/15 to-transparent rounded-bl-full pointer-events-none" />

              <span className="text-xs uppercase tracking-widest text-[#0EB89B] font-semibold">
                Standard for Success
              </span>
              <h3 className="text-2xl font-bold text-white mt-2 mb-4 tracking-tight">
                What a good outcome looks like
              </h3>
              <p className="text-slate-300 leading-relaxed text-base">
                A more considered foundation for critical workloads and a clearer route from current state to the intended environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contextual CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-[#0B1E3D]">
              Strengthen your infrastructure foundation
            </h2>
            <p className="text-slate-600 text-lg">
              Explore a structured roadmap for your cloud migration, network resilience, and continuity requirements.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="btn-primary py-3.5 px-8 text-sm font-semibold tracking-wide"
              >
                <span>Plan your infrastructure roadmap</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
