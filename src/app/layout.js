import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntroSplash from "@/components/IntroSplash";

export const metadata = {
  metadataBase: new URL("https://www.kashless.in"),
  title: {
    default: "Kashless Ventures | Technology. Capital. Growth.",
    template: "%s | Kashless Ventures",
  },
  description:
    "Kashless Ventures helps organisations build stronger technology foundations and explore strategic opportunities for long-term value.",
  openGraph: {
    title: "Technology. Capital. Growth. | Kashless Ventures",
    description:
      "Practical technology solutions and thoughtful strategic perspective for businesses building what comes next.",
    siteName: "Kashless Ventures",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
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
