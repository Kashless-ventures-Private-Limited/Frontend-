import Link from "next/link";
import { siteConfig } from "@/lib/data";
import { ShieldCheck, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#071326] text-slate-300 border-t border-slate-800/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand & Positioning (lg: 4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-9 w-auto flex items-center justify-center">
                <img
                  src="/logo-white.png"
                  alt="Kashless Ventures Logo"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div>
                <span className="text-white font-bold text-base tracking-wider uppercase">
                  {siteConfig.legalName}
                </span>
                <p className="text-xs text-[#0D9488] font-medium tracking-wide">
                  {siteConfig.tagline}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              {siteConfig.shortAbout}
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-slate-900/90 border border-slate-800 text-xs text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0D9488]" />
                <span>Evidence-led & Institutional Perspective</span>
              </div>
            </div>
          </div>

          {/* Column 2: Explore Navigation (lg: 3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/technology-solutions"
                  className="hover:text-white transition-colors"
                >
                  Technology Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/capital-strategic-investments"
                  className="hover:text-white transition-colors"
                >
                  Capital & Strategic Investments
                </Link>
              </li>
              <li>
                <Link
                  href="/technology-capital"
                  className="hover:text-white transition-colors"
                >
                  Technology & Capital
                </Link>
              </li>
              <li>
                <Link
                  href="/partnerships"
                  className="hover:text-white transition-colors"
                >
                  Partnerships
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Enquiries (lg: 3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold">
              Enquiries & Office
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-500 uppercase font-medium">Official Contact</p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-500 uppercase font-medium">Registered Region</p>
                  <p className="text-slate-300">{siteConfig.contact.location}</p>
                </div>
              </div>

              <p className="text-xs text-slate-500 pt-2 leading-relaxed">
                Official contact details and registered office information are verified. Routine enquiries are routed to relevant practice leads.
              </p>
            </div>
          </div>

          {/* Column 4: Legal & Governance (lg: 2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold">
              Legal
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="hover:text-white transition-colors text-[#0D9488]"
                >
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="hover:text-white transition-colors"
                >
                  Cookie Notice
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Note */}
        <div className="mt-12 pt-6 border-t border-slate-800 text-xs text-slate-500 leading-relaxed">
          <p>
            <strong>General Notice:</strong> The information on this website is provided for general informational purposes only and does not constitute financial, investment, legal, or tax advice. Nothing herein is an offer, solicitation or recommendation regarding securities or investment products. Technology services are scoped and delivered subject to separate written agreements.
          </p>
        </div>

        {/* Bottom Legal Line */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} {siteConfig.legalName} All rights reserved.</p>
          <p className="tracking-wide">
            Kashless Ventures Pvt. Ltd. | Institutional Digital Platform
          </p>
        </div>
      </div>
    </footer>
  );
}
