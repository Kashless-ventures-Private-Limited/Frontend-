import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntroSplash from "@/components/IntroSplash";
import { siteConfig } from "@/lib/data";

const siteUrl = "https://www.kashless.in";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.name,
    template: "%s | Kashless Ventures",
  },
  description:
    "Technology solutions, business consultation and strategic partnerships for businesses looking to build, improve and grow.",
  applicationName: siteConfig.name,
  category: "Technology and business services",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.name,
    description:
      "Technology solutions, business consultation and strategic partnerships for businesses looking to build, improve and grow.",
    url: siteUrl,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: siteConfig.name,
    description:
      "Technology solutions, business consultation and strategic partnerships for businesses looking to build, improve and grow.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/logo.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: siteConfig.legalName,
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  email: `mailto:${siteConfig.contact.email}`,
  description: siteConfig.shortAbout,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: siteConfig.name,
  url: siteUrl,
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  inLanguage: "en-IN",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" data-scroll-behavior="smooth">
      <body className="antialiased min-h-screen flex flex-col font-sans selection:bg-[#0F6E62] selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <IntroSplash />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
