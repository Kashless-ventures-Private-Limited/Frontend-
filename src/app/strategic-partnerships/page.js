import Link from "next/link";
import { ArrowRight, Handshake } from "lucide-react";
import { partnershipPrinciples } from "@/lib/data";

export const metadata = {
  title: "Strategic Partnerships | Kashless Ventures",
  description: "Strategic business and technology partnerships that combine complementary capabilities to create meaningful opportunities and long-term value.",
};

export default function StrategicPartnershipsPage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-white to-[#F8FAFC] border-b border-slate-200/80 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">Strategic Partnerships</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0B1E3D] mt-3">Better together.</h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed">
            Kashless Ventures works with businesses, technology providers and specialists to combine complementary capabilities and create stronger outcomes.
          </p>
          <Link href="/contact" className="btn-primary mt-8 inline-flex py-3.5 px-6">Explore a Partnership <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>

      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">Our Approach</span>
              <h2 className="text-3xl font-bold text-[#0B1E3D] mt-2">Connect. Collaborate. Create Value.</h2>
            </div>
            <p className="lg:col-span-7 text-lg text-slate-600 leading-relaxed">
              We look for partnerships where capabilities, expertise and goals align — creating practical value for everyone involved.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">Partnership Principles</span>
          <h2 className="text-3xl font-bold text-[#0B1E3D] mt-2">What matters to us</h2>
          <div className="grid md:grid-cols-2 gap-5 mt-10">
            {partnershipPrinciples.map((item) => (
              <div key={item} className="bg-white border border-slate-200 rounded-xl p-6 flex gap-4">
                <Handshake className="w-5 h-5 text-[#0F6E62] shrink-0 mt-1" />
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 max-w-3xl">
            <h3 className="text-2xl font-bold text-[#0B1E3D]">Who we work with</h3>
            <p className="text-slate-600 mt-4 text-lg leading-relaxed">
              Businesses seeking technology or business support; technology providers; implementation specialists; domain experts; and organizations exploring mutually beneficial collaborations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 text-center bg-white">
        <h2 className="text-3xl font-bold text-[#0B1E3D]">Have an idea for a partnership?</h2>
        <p className="text-slate-600 mt-4 text-lg">Tell us what you are building, what you need and where you see an opportunity to collaborate.</p>
        <Link href="/contact" className="btn-primary mt-7 inline-flex py-3.5 px-7">Start a Conversation <ArrowRight className="w-4 h-4" /></Link>
      </section>
    </div>
  );
}
