import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntroSplash from "@/components/IntroSplash";

export const metadata = {
  metadataBase: new URL("https://www.kashless.in"),
  title: {
    default: "Kashless Ventures Pvt. Ltd. | Technology Solutions & Business Consultation",
    template: "%s | Kashless Ventures",
  },
  description:
    "Technology solutions, business consultation and strategic partnerships for businesses looking to build, improve and grow.",
  openGraph: {
    title: "Kashless Ventures Pvt. Ltd. | Technology Solutions & Business Consultation",
    description:
      "Technology solutions, business consultation and strategic partnerships for businesses looking to build, improve and grow.",
    siteName: "Kashless Ventures Pvt. Ltd.",
    type: "website",
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="antialiased min-h-screen flex flex-col font-sans selection:bg-[#0F6E62] selection:text-white">
        <IntroSplash />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
