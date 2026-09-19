import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Digital Transformation | Kashless Ventures",
  description: "Process automation, workflow improvement, data-driven decision support and technology modernization for businesses.",
};

export default function DigitalTransformationPage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-white to-[#F8FAFC] border-b border-slate-200/80 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">Technology Solutions</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0B1E3D] mt-3">Digital Transformation</h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed">
            Process automation, workflow improvement, data-driven decision support and technology modernization to improve business efficiency.
          </p>
          <Link href="/contact" className="btn-primary mt-8 inline-flex py-3.5 px-6">Discuss Your IT Requirement <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Process automation", "Workflow improvement", "Data-driven decision support", "Technology modernization"].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 p-7 bg-[#F8FAFC]">
                <h2 className="font-bold text-[#0B1E3D]">{item}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
