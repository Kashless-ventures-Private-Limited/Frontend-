import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig, seoMetadataMap } from "@/lib/data";

export const metadata = {
  title: seoMetadataMap.disclaimer.title,
  description: seoMetadataMap.disclaimer.description,
};

export default function DisclaimerPage() {
  return (
    <div>
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-[#0F6E62] uppercase tracking-wider">
            <ArrowLeft className="w-3.5 h-3.5" /> Return to Home
          </Link>
        </div>
      </div>
      <section className="bg-gradient-to-b from-white to-[#F8FAFC] border-b border-slate-200/80 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">Legal</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0B1E3D] mt-2">Website Disclaimer</h1>
          <p className="mt-4 text-slate-600 text-sm">Last updated: 2026</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose-legal">
          <h2>General Information</h2>
          <p>
            The information on this website is provided for general informational purposes only. Service descriptions are indicative and do not create a commitment to provide a particular product, service, outcome or availability. Specific services, deliverables, responsibilities and timelines are governed by separate written agreements.
          </p>
          <h2>Technology Services</h2>
          <p>
            Technology recommendations and implementations depend on the client environment, requirements and agreed scope. Organizations should assess their own operational, security and compliance requirements before adopting a technology solution.
          </p>
          <h2>Submissions</h2>
          <p>
            Information submitted through the website may be reviewed by {siteConfig.legalName} for responding to an enquiry and determining an appropriate next step. Please do not submit information you are not authorized to share.
          </p>
          <h2>Accuracy</h2>
          <p>
            {siteConfig.legalName} aims to keep website information clear and current, but does not warrant that every item is complete, error-free or current at all times. Content may be updated without notice.
          </p>
          <h2>Contact</h2>
          <p>
            Questions about this disclaimer can be sent to <a href={`mailto:${siteConfig.contact.email}`} className="text-[#0F6E62] underline">{siteConfig.contact.email}</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
