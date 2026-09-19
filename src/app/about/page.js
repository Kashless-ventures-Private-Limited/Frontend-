import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig, valuesList } from "@/lib/data";

export const metadata = {
  title: "About Us | Kashless Ventures",
  description: "Learn how Kashless Ventures combines practical technology, business thinking and collaboration to help organizations move forward.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-white to-[#F8FAFC] border-b border-slate-200/80 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">About Us</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0B1E3D] mt-3">Built to help businesses move forward.</h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed">{siteConfig.shortAbout}</p>
        </div>
      </section>

      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">What We Stand For</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1E3D] mt-2">We believe progress starts with clarity.</h2>
          </div>
          <div className="lg:col-span-7 text-lg text-slate-600 leading-relaxed">
            <p>Good decisions come from understanding the problem first. We combine practical technology, business thinking and collaboration to help turn challenges into opportunities.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">How We Work</span>
          <h2 className="text-3xl font-bold text-[#0B1E3D] mt-2">Understand. Strategize. Execute. Grow.</h2>
          <p className="text-lg text-slate-600 mt-5 max-w-3xl leading-relaxed">
            We listen first, identify the real challenge, define a practical path forward and work with the right people and technology to execute it.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">Values</span>
          <h2 className="text-3xl font-bold text-[#0B1E3D] mt-2">What guides us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {valuesList.map((value) => (
              <div key={value.title} className="rounded-2xl bg-[#0B1E3D] p-7">
                <h3 className="text-lg font-bold text-white">{value.title}</h3>
                <p className="text-slate-300 mt-3 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-600 mt-10 text-lg">We believe in straightforward communication, practical solutions, responsible execution and relationships built for the long term.</p>
        </div>
      </section>

      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold text-[#0B1E3D]">Ready to start a conversation?</h2>
        <Link href="/contact" className="btn-primary mt-7 inline-flex py-3.5 px-7">Talk to Us <ArrowRight className="w-4 h-4" /></Link>
      </section>
    </div>
  );
}
