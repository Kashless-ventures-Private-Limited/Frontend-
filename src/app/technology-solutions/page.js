import Link from "next/link";
import { ArrowRight, Cpu, Cloud, ShieldCheck, Laptop, Wrench } from "lucide-react";
import ProcessTimeline from "@/components/ProcessTimeline";
import { techSolutionsList, howWeWork } from "@/lib/data";

export const metadata = {
  title: "Technology Solutions | Kashless Ventures",
  description:
    "Explore practical technology solutions across software, cloud, infrastructure, security, workplace technology and managed services.",
};

const iconMap = {
  "software-digital-products": Cpu,
  "cloud-infrastructure": Cloud,
  "cybersecurity": ShieldCheck,
  "hardware-workplace": Laptop,
  "licensing-managed-services": Wrench,
};

export default function TechnologySolutionsPage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-[#F8FAFC] border-b border-slate-200/80 pt-20 pb-20 lg:pt-24 lg:pb-28 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">
              Practical Technology
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0B1E3D] mt-3 leading-tight">
              Technology choices made clearer. Delivery made practical.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#475569] leading-relaxed">
              Technology should help your business operate with more confidence - not create unnecessary complexity. Kashless Ventures helps organisations assess needs, shape the right approach and move forward across software, infrastructure, security, cloud, hardware and ongoing support.
            </p>
          </div>
        </div>
      </section>

      {/* 4.6 How We Work Section */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">
              Engagement Model
            </span>
            <h2 className="text-3xl font-bold text-[#0B1E3D] mt-2 mb-4">
              How we work
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We begin with the business context: what needs to improve, what must be protected, and what progress should look like. From there, we help define a practical path spanning technology selection, implementation coordination and continuing support.
            </p>
          </div>

          {/* Desktop Horizontal / Mobile Vertical Timeline */}
          <div className="pt-4">
            <ProcessTimeline items={howWeWork} />
          </div>
        </div>
      </section>

      {/* Capabilities Cards Section */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1E3D] mt-2">
              Our technology capabilities
            </h2>
            <p className="text-slate-600 mt-4 text-lg">
              Explore our core capability areas designed to give organisations dependable, scalable technology foundations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techSolutionsList.map((item) => {
              const Icon = iconMap[item.slug] || Cpu;
              return (
                <div
                  key={item.slug}
                  className="bg-[#0B1E3D] border border-slate-700/80 rounded-2xl p-8 shadow-xl card-hover flex flex-col justify-between relative overflow-hidden group"
                >
                  {/* Vibrant teal circle accent in corner */}
                  <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-[#0EB89B]/15 blur-xl pointer-events-none transition-transform duration-300 group-hover:scale-125" />
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#0EB89B]/15 to-transparent rounded-bl-full pointer-events-none" />

                  <div>
                    {/* Vibrant teal circular icon badge matching reference image */}
                    <div className="w-12 h-12 rounded-full bg-[#0EB89B] text-[#0B1E3D] flex items-center justify-center mb-6 shadow-md transition-transform duration-300 group-hover:scale-105">
                      <Icon className="w-6 h-6 text-[#0B1E3D]" />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                      {item.cardCopy}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-700/70">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#0EB89B] hover:text-[#5eead4] transition-colors"
                    >
                      <span>Explore {item.title}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B1E3D] rounded-2xl p-10 sm:p-14 text-white shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-[#0D9488] font-semibold">
                Technology Advisory & Roadmaps
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold mt-2">
                Need a clearer technology roadmap?
              </h2>
              <p className="text-slate-300 mt-3 text-base">
                Let’s discuss your current environment and next priority.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/contact"
                className="btn-teal py-3.5 px-6 text-sm font-semibold tracking-wide"
              >
                <span>Talk to our technology team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
