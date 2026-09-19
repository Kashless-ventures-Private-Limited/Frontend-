import Link from "next/link";
import { siteConfig, navigation } from "@/lib/data";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#071326] text-slate-300 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo-white.png" alt="Kashless Ventures Logo" className="h-8 w-auto object-contain" />
              <div>
                <div className="text-white font-bold text-base tracking-wider uppercase">{siteConfig.legalName}</div>
                <div className="text-xs text-[#0D9488] font-medium tracking-wide mt-1">{siteConfig.tagline}</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">{siteConfig.shortAbout}</p>
            <p className="text-xs text-slate-500">{siteConfig.positioning}</p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              {navigation.map((item) => (
                <li key={item.href}><Link href={item.href} className="hover:text-white transition-colors">{item.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold">Contact</h4>
            <div className="flex items-start gap-2.5 text-sm">
              <Mail className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white">{siteConfig.contact.email}</a>
            </div>
            <div className="flex items-start gap-2.5 text-sm">
              <MapPin className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
              <span>{siteConfig.contact.location}</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between gap-3 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <Link href="/disclaimer" className="hover:text-white">Website Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
