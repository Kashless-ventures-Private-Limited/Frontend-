import LegalPage from "@/components/LegalPage";
import { siteConfig, seoMetadataMap } from "@/lib/data";

export const metadata = {
  title: seoMetadataMap.terms.title,
  description: seoMetadataMap.terms.description,
};

export default function TermsOfUse() {
  return (
    <LegalPage title="Terms of Use" updated="2026">
      <p>
        These Terms of Use govern your access to and use of the website operated by {siteConfig.legalName} (&ldquo;Kashless Ventures&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). By accessing this website, you agree to be bound by these terms.
      </p>

      <h2>1. General Information Only</h2>
      <p>
        The content on this website is for general informational purposes only. It does not constitute financial, investment, legal, or tax advice. Nothing herein is an offer or solicitation regarding securities or investments.
      </p>

      <h2>2. Intellectual Property</h2>
      <p>
        All content, trademarks, logos, typography, visual layouts, and materials displayed on this website are the property of {siteConfig.legalName} or licensed partners and are protected by applicable intellectual property laws.
      </p>

      <h2>3. Limitation of Liability</h2>
      <p>
        {siteConfig.legalName} makes no warranties or representations as to the accuracy, completeness, or timeliness of website materials. In no event will the company be liable for any direct, indirect, incidental, or consequential damages resulting from your use of this website.
      </p>

      <h2>4. Technology Services</h2>
      <p>
        Technology services, deliverables, and SLAs are governed exclusively by separate written agreements executed between {siteConfig.legalName} and its clients.
      </p>

      <h2>5. Contact & Notice</h2>
      <p>
        For inquiries regarding these Terms of Use, please contact{" "}
        <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold text-[#0F6E62] hover:underline">
          {siteConfig.contact.email}
        </a>.
      </p>
    </LegalPage>
  );
}
