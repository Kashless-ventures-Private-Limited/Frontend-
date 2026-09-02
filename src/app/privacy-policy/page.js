import LegalPage from "@/components/LegalPage";
import { siteConfig, seoMetadataMap } from "@/lib/data";

export const metadata = {
  title: seoMetadataMap.privacyPolicy.title,
  description: seoMetadataMap.privacyPolicy.description,
};

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" updated="2026">
      <p>
        {siteConfig.legalName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy describes how we collect, use, and safeguard personal information submitted through our website.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        We collect information that you directly provide to us when submitting an enquiry or introducing an opportunity, including:
      </p>
      <ul>
        <li><strong>Contact Information:</strong> Name, professional email address, telephone number, and organisation name.</li>
        <li><strong>Enquiry Details:</strong> Business context, technology priorities, or strategic objectives you share with us.</li>
        <li><strong>Career Submissions:</strong> Location, CV/resume details, and background notes submitted through the careers portal.</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>
        We use the information we collect strictly to evaluate enquiries and communicate with you, including:
      </p>
      <ul>
        <li>Routing enquiries to practice leads across Technology Solutions or Strategic Capital.</li>
        <li>Reviewing potential partnerships, supplier relationships, or career applications.</li>
        <li>Ensuring website security, preventing fraudulent activity, and meeting regulatory requirements.</li>
      </ul>

      <h2>3. Confidentiality & Security</h2>
      <p>
        We implement appropriate administrative and technical safeguards to protect personal information against unauthorized access, alteration, disclosure, or destruction. We do not sell, rent, or trade your personal information.
      </p>

      <h2>4. Data Retention</h2>
      <p>
        We retain personal information only for as long as necessary to fulfill the purposes for which it was collected or to satisfy applicable legal, statutory, or regulatory retention obligations.
      </p>

      <h2>5. Your Rights & Enquiries</h2>
      <p>
        You may request access to, correction of, or deletion of your personal data by contacting our compliance team at{" "}
        <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold text-[#0F6E62] hover:underline">
          {siteConfig.contact.email}
        </a>.
      </p>
    </LegalPage>
  );
}
