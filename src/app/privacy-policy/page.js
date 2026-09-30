import LegalPage from "@/components/LegalPage";
import {siteConfig, createSeoMetadata } from "@/lib/data";

export const metadata = createSeoMetadata("privacyPolicy", "/privacy-policy");

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" effectiveDate="25 September 2026" updated="25 September 2026">
      <p>
        {siteConfig.legalName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy describes how we collect, use, and safeguard personal information submitted through our website.
      </p>

      <h2>1. Information We May Collect</h2>
      <p>
        Depending on the Services you use and the nature of our relationship with you, we may collect information that you provide or that is generated through use of our Services, including:
      </p>
      <ul>
        <li><strong>Basic and Contact Information:</strong> Name, email address, mobile number, business name, designation, company details, and other contact information.</li>
        <li><strong>Account and Business Information:</strong> Account details, organization information, user roles, service preferences, project requirements, support requests, and onboarding, procurement, or service-delivery information.</li>
        <li><strong>Technology, Device and Network Information:</strong> IP address, browser type, operating system, device identifiers, logs, network information, and security-related technical information.</li>
        <li><strong>Usage and Communications Information:</strong> Website or application activity, feature usage, feedback, performance data, emails, support tickets, project discussions, and business communications.</li>
      </ul>

      <p>We do not routinely require or collect bank statements, KYC documents, Aadhaar details, detailed financial records, credit profiles, or borrower financial information for Kashless Ventures' general website or business operations.</p>

      <h2>2. How We Collect and Use Information</h2>
      <p>
        We may collect information through website, application, software and account forms; onboarding, proposals, contracts and procurement; APIs, platforms and dashboards; billing and licensing processes; cookies, SDKs, analytics and logs; and support or business communications. We use it for lawful business purposes, including:
      </p>
      <ul>
        <li>Providing, operating, maintaining, and improving our technology Services and integrations.</li>
        <li>Managing accounts, user access, roles, permissions, authentication, support, and implementation services.</li>
        <li>Processing billing, licensing, renewals, commercial transactions, audit trails, backups, and business continuity.</li>
        <li>Communicating about projects, support, service updates, renewals, security matters, and legal or contractual obligations.</li>
      </ul>
      <p>Where our technology Services process client-controlled regulated or sensitive data, processing is limited to the contracted Service, the client's instructions, and applicable contractual requirements.</p>

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
