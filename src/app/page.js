import Link from "next/link";
import { ArrowRight, Cpu, BriefcaseBusiness, Handshake } from "lucide-react";
import {howWeWork, siteConfig, createSeoMetadata } from "@/lib/data";

export const metadata = createSeoMetadata("home", "/");

const pillars = [
  {
    title: "Technology Solutions",
    copy: "From software and web development to cloud, infrastructure, cybersecurity, licensing, managed IT and digital transformation, we build technology around real business needs.",
    href: "/technology-solutions",
    icon: Cpu,
    cta: "Explore Technology Solutions",
  },
  {
    title: "Business Consultation",
    copy: "We bring clarity to business challenges through process improvement, operational planning, technology strategy, workflow design and practical decision support.",
    href: "/business-consultation",
    icon: BriefcaseBusiness,
    cta: "Explore Business Consultation",
  },
  {
    title: "Strategic Partnerships",
    copy: "We collaborate with businesses, technology providers and specialists to bring complementary capabilities together and create meaningful opportunities for growth.",
    href: "/strategic-partnerships",
    icon: Handshake,
    cta: "Explore Partnerships",
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-white to-[#F8FAFC] border-b border-slate-200/80 pt-20 pb-20 lg:pt-28 lg:pb-28 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">
              Kashless Ventures Pvt. Ltd.
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0B1E3D] mt-3 leading-tight">
              Building Better Businesses for What’s Next.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#475569] leading-relaxed max-w-3xl">
              Kashless Ventures helps businesses move forward through practical technology solutions, business consultation and strategic partnerships.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/technology-solutions" className="btn-primary py-3.5 px-6 text-sm font-semibold tracking-wide">
                <span>Explore Our Solutions</span><ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="btn-secondary py-3.5 px-6 text-sm font-semibold tracking-wide">
                Talk to Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">Our Positioning</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1E3D] mt-2">Technology. Consultation. Growth.</h2>
            <p className="text-slate-600 mt-4 text-lg leading-relaxed">
              We help businesses solve meaningful challenges, make informed decisions and turn ideas into practical action.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">What We Do</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1E3D] mt-2">Practical capabilities for businesses</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {pillars.map(({ title, copy, href, icon: Icon, cta }) => (
              <div key={title} className="bg-[#0B1E3D] rounded-2xl p-8 shadow-xl flex flex-col">
                <div className="w-12 h-12 rounded-full bg-[#0EB89B] text-[#0B1E3D] flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="text-slate-300 mt-4 leading-relaxed flex-1">{copy}</p>
                <Link href={href} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#0EB89B] hover:text-[#5eead4]">
                  {cta}<ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">Philosophy</span>
              <h2 className="text-3xl font-bold text-[#0B1E3D] mt-2">Good ideas are only the beginning.</h2>
            </div>
            <p className="lg:col-span-8 text-lg text-slate-600 leading-relaxed">
              Meaningful progress happens when ideas are supported by clarity, the right technology, strong people and disciplined execution.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">How We Work</span>
            <h2 className="text-3xl font-bold text-[#0B1E3D] mt-2">Understand. Plan. Build. Secure. Deploy. Support. Scale.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {howWeWork.map((item, i) => (
              <div key={item.step} className="bg-white border border-slate-200 rounded-xl p-5">
                <div className="text-xs font-bold text-[#0F6E62]">0{i + 1}</div>
                <h3 className="font-bold text-[#0B1E3D] mt-2">{item.step}</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0B1E3D] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Let’s build what’s next.</h2>
          <p className="text-slate-300 text-lg mt-5 leading-relaxed">
            Whether you are solving a technology challenge, improving your business or looking for the right partner, Kashless Ventures is ready to start the conversation.
          </p>
          <Link href="/contact" className="btn-primary mt-8 py-3.5 px-7 inline-flex">
            Discuss Your Requirement <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
