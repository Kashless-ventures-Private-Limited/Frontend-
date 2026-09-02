import LegalPage from "@/components/LegalPage";
import { siteConfig, seoMetadataMap } from "@/lib/data";

export const metadata = {
  title: seoMetadataMap.cookiePolicy.title,
  description: seoMetadataMap.cookiePolicy.description,
};

export default function CookiePolicy() {
  return (
    <LegalPage title="Cookie Notice" updated="2026">
      <p>
        This Cookie Notice explains how {siteConfig.legalName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) uses cookies and similar technologies on our website.
      </p>

      <h2>1. What Are Cookies?</h2>
      <p>
        Cookies are small text files placed on your device by websites you visit. They help the website function efficiently and provide basic anonymous usage analytics.
      </p>

      <h2>2. Cookies We Use</h2>
      <ul>
        <li><strong>Strictly Necessary Cookies:</strong> Required for the fundamental operation, routing, and security of the website.</li>
        <li><strong>Performance & Analytics Cookies:</strong> Used anonymously to understand visitor traffic patterns and improve interface speed.</li>
      </ul>

      <h2>3. Managing Cookie Preferences</h2>
      <p>
        You can control and disable cookies through your browser settings. Note that disabling certain essential cookies may impact website responsiveness.
      </p>

      <h2>4. Enquiries</h2>
      <p>
        For questions regarding our cookie practices, please contact{" "}
        <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold text-[#0F6E62] hover:underline">
          {siteConfig.contact.email}
        </a>.
      </p>
    </LegalPage>
  );
}
