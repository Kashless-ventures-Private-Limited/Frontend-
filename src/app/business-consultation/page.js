import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {consultationServices, createSeoMetadata } from "@/lib/data";

export const metadata = createSeoMetadata("consultation", "/business-consultation");

export default function BusinessConsultationPage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-white to-[#F8FAFC] border-b border-slate-200/80 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">Business Consultation</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0B1E3D] mt-3">Clarity for better business decisions.</h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed">
            We help businesses understand challenges, improve processes, plan execution and identify practical opportunities for growth.
          </p>
          <Link href="/contact" className="btn-primary mt-8 inline-flex py-3.5 px-6">Discuss Your Business Challenge <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">What We Help With</span>
            <h2 className="text-3xl font-bold text-[#0B1E3D] mt-2">Practical support from planning to execution</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {consultationServices.map((service) => (
              <div key={service.title} className="rounded-2xl border border-slate-200 p-7 bg-[#F8FAFC]">
                <h3 className="text-lg font-bold text-[#0B1E3D]">{service.title}</h3>
                <p className="text-slate-600 mt-3 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0B1E3D] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Move from plan to execution.</h2>
          <p className="text-slate-300 mt-4 text-lg">We stay practical: understand the challenge, define the path and support the actions required to move forward.</p>
          <Link href="/contact" className="btn-primary mt-8 inline-flex py-3.5 px-7">Talk to a Consultant <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </div>
  );
}
