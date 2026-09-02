import Link from "next/link";
import { ShieldAlert, ArrowLeft } from "lucide-react";
import { siteConfig, seoMetadataMap } from "@/lib/data";

export const metadata = {
  title: seoMetadataMap.disclaimer.title,
  description: seoMetadataMap.disclaimer.description,
};

export default function DisclaimerPage() {
  return (
    <div className="space-y-0">
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#0F6E62] hover:text-[#094F46] uppercase tracking-wider"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>

      <section className="bg-gradient-to-b from-white to-[#F8FAFC] border-b border-slate-200/80 pt-16 pb-16 lg:pt-20 lg:pb-20 bg-grid-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">
            Legal & Governance
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1E3D] mt-2">
            Legal & Investment Disclaimer
          </h1>
          <p className="mt-4 text-slate-600 text-sm">
            Last updated: 2026. Official disclaimer applicable to all content and communications on this website.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose-legal">
          <div className="p-6 rounded-lg bg-[#F8FAFC] border border-slate-200 mb-8 flex items-start gap-3">
            <ShieldAlert className="w-6 h-6 text-[#0F6E62] shrink-0 mt-0.5" />
            <p className="text-xs text-slate-600 leading-relaxed mb-0">
              <strong>Notice:</strong> The content below is published in accordance with the corporate governance guidelines of {siteConfig.legalName} Please read these terms carefully before engaging with the website.
            </p>
          </div>

          <h2>Website Disclaimer</h2>
          <p>
            The information on this website is provided for general informational purposes only. It does not constitute, and should not be relied upon as, legal, financial, investment, tax or other professional advice. Nothing on this website is an offer, invitation, solicitation or recommendation to buy, sell, subscribe for or otherwise deal in any securities, investment product or financial instrument, or to enter into any transaction.
          </p>
          <p>
            {siteConfig.legalName} does not make any representation or warranty, express or implied, as to the accuracy, completeness or suitability of the information on this website. Any discussion of strategic opportunities is illustrative and does not constitute a commitment to evaluate, invest, partner or provide services. Outcomes are not guaranteed, and past performance, if referenced in the future, is not indicative of future results.
          </p>
          <p>
            You should obtain independent professional advice before making any decision based on information available through this website. {siteConfig.legalName} may amend website content at any time without notice.
          </p>

          <h2>Submission Disclaimer</h2>
          <p>
            Any information submitted through this website may be reviewed by {siteConfig.legalName} for the purpose of responding to an enquiry or assessing whether a conversation may be appropriate. Submission of information does not create a fiduciary, advisory, confidential, contractual or other relationship, and does not oblige {siteConfig.legalName} to review, respond to, pursue or invest in any opportunity. Do not submit information that you are not permitted to share.
          </p>

          <h2>Technology Services Disclaimer</h2>
          <p>
            Technology solutions are scoped and delivered subject to a separate written agreement. Website descriptions are general in nature and do not create any representation, warranty or commitment regarding specific products, services, outcomes, availability, security or suitability.
          </p>

          <h2>Contact & Jurisdiction</h2>
          <p>
            If you have questions regarding this disclaimer, you may reach our compliance and legal team via{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-[#0F6E62] underline font-medium">
              {siteConfig.contact.email}
            </a>.
          </p>
        </div>
      </section>
    </div>
  );
}
