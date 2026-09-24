import Link from "next/link";
import { ArrowRight, Cpu, Cloud, ShieldCheck, Laptop, Wrench, Workflow } from "lucide-react";
import {techSolutionsList, howWeWork, createSeoMetadata } from "@/lib/data";

export const metadata = createSeoMetadata("technologySolutions", "/technology-solutions");

const icons = { 
  "software-digital-products": Cpu,
  "cloud-infrastructure": Cloud,
  cybersecurity: ShieldCheck,
  "hardware-workplace": Laptop,
  "licensing-managed-services": Wrench,
  "digital-transformation": Workflow,
};

export default function TechnologySolutionsPage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-white to-[#F8FAFC] border-b border-slate-200/80 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">Technology Solutions</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0B1E3D] mt-3">Technology that works for your business.</h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed">
            We design, implement and support technology solutions that help businesses operate better, work smarter and scale with confidence.
          </p>
          <Link href="/contact" className="btn-primary mt-8 inline-flex py-3.5 px-6">Discuss Your IT Requirement <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>

      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1E3D] mt-2">Build smarter. Modernize. Secure. Support.</h2>
            <p className="text-slate-600 mt-4 text-lg">
              We focus on practical technology capabilities aligned to real business requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {techSolutionsList.map((item) => {
              const Icon = icons[item.slug] || Cpu;
              return (
                <div key={item.slug} className="bg-[#0B1E3D] rounded-2xl p-8 shadow-xl flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-[#0EB89B] text-[#0B1E3D] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-slate-300 mt-4 leading-relaxed">{item.cardCopy}</p>
                  <ul className="mt-6 space-y-2 text-sm text-slate-300">
                    {item.whatWeHelpWith.slice(0, 4).map((entry) => <li key={entry}>• {entry}</li>)}
                  </ul>
                  <Link href={item.href} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#0EB89B] hover:text-[#5eead4]">
                    Explore capability <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">Delivery Framework</span>
            <h2 className="text-3xl font-bold text-[#0B1E3D] mt-2">Understand → Plan → Build → Secure → Deploy → Support → Scale.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {howWeWork.map((step, i) => (
              <div key={step.step} className="bg-white rounded-xl border border-slate-200 p-5">
                <div className="text-xs font-bold text-[#0F6E62]">0{i + 1}</div>
                <h3 className="font-bold text-[#0B1E3D] mt-2">{step.step}</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
