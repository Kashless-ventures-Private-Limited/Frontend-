import { createSeoMetadata } from "@/lib/data";
import ContactForm from "@/components/ContactForm";

export const metadata = createSeoMetadata("contact", "/contact");

export default function ContactPage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-white to-[#F8FAFC] border-b border-slate-200/80 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">Contact</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0B1E3D] mt-3">Let’s start a conversation.</h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed">
            Tell us what you are working on, the challenge you are facing or the opportunity you want to explore.
          </p>
        </div>
      </section>
      <section className="py-16 lg:py-20 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
