"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Mail, MapPin, ShieldCheck, Send, Layers } from "lucide-react";
import { enquiryRoutes, siteConfig } from "@/lib/data";

export default function ContactPage() {
  const [selectedRoute, setSelectedRoute] = useState("technology");
  const [formData, setFormData] = useState({
    name: "",
    organisation: "",
    email: "",
    phone: "",
    enquiryType: "technology",
    message: "",
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const activeRouteObj =
    enquiryRoutes.find((r) => r.id === selectedRoute) || enquiryRoutes[0];

  const handleRouteChange = (routeId) => {
    setSelectedRoute(routeId);
    setFormData({ ...formData, enquiryType: routeId });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-[#F8FAFC] border-b border-slate-200/80 pt-20 pb-20 lg:pt-24 lg:pb-28 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0B1E3D] mt-3 leading-tight">
              Start with a conversation.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#475569] leading-relaxed">
              Whether you are considering a technology initiative, exploring a strategic opportunity or interested in partnering with Kashless Ventures, tell us what is on your mind. We will route your enquiry to the appropriate team.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Enquiry Routes Section */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Enquiry Routes & Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">
                  Select Context
                </span>
                <h2 className="text-2xl font-bold text-[#0B1E3D] mt-1 mb-4">
                  Enquiry routes
                </h2>
                <p className="text-sm text-slate-600 mb-6">
                  Select the track that best fits your conversation to route your request directly to the appropriate team lead:
                </p>

                <div className="space-y-3">
                  {enquiryRoutes.map((route) => {
                    const isSelected = selectedRoute === route.id;
                    return (
                      <button
                        key={route.id}
                        type="button"
                        onClick={() => handleRouteChange(route.id)}
                        className={`w-full text-left p-4 rounded-xl border transition-all ${
                          isSelected
                            ? "bg-[#0B1E3D] text-white border-[#0B1E3D] shadow-md"
                            : "bg-[#F8FAFC] text-[#0B1E3D] border-slate-200/90 hover:bg-slate-100"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold capitalize">
                            {route.name}
                          </span>
                          {isSelected && (
                            <span className="text-xs text-[#0D9488] font-semibold">
                              Active Track
                            </span>
                          )}
                        </div>
                        <p
                          className={`text-xs mt-1.5 leading-relaxed ${
                            isSelected ? "text-slate-300" : "text-slate-600"
                          }`}
                        >
                          {route.intro}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Verified Contact Details Card */}
              <div className="p-6 rounded-2xl bg-[#0B1E3D] border border-slate-700/80 shadow-xl space-y-4 relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-[#0EB89B]/15 blur-xl pointer-events-none transition-transform duration-300 group-hover:scale-125" />
                <h3 className="text-xs uppercase tracking-widest text-[#0EB89B] font-bold">
                  Official Communication
                </h3>
                <div className="space-y-4 text-sm text-slate-200">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0EB89B] text-[#0B1E3D] flex items-center justify-center shrink-0 shadow-xs">
                      <Mail className="w-4 h-4 text-[#0B1E3D]" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block">General & Practice Enquiries</span>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="font-semibold text-white hover:text-[#0EB89B] transition-colors"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0EB89B] text-[#0B1E3D] flex items-center justify-center shrink-0 shadow-xs">
                      <MapPin className="w-4 h-4 text-[#0B1E3D]" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block">Location</span>
                      <span className="font-semibold text-white">{siteConfig.contact.location}</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-400 pt-3 border-t border-slate-700/70">
                  Submissions are reviewed under strict professional confidence.
                </p>
              </div>
            </div>

            {/* Right: Core Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-2xs">
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">
                    Direct Submission
                  </span>
                  <h3 className="text-2xl font-bold text-[#0B1E3D] mt-1">
                    {activeRouteObj.formCta}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    {activeRouteObj.intro}
                  </p>
                </div>

                {submitted ? (
                  <div className="p-10 rounded-xl bg-teal-50 border border-teal-200 text-center space-y-4 animate-in fade-in duration-200">
                    <CheckCircle2 className="w-14 h-14 text-[#0F6E62] mx-auto" />
                    <h4 className="text-2xl font-bold text-[#0B1E3D]">
                      Message Received
                    </h4>
                    <p className="text-base text-[#334155] leading-relaxed max-w-md mx-auto">
                      Thank you. Your message has been received. We will review it and respond where appropriate.
                    </p>
                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: "",
                            organisation: "",
                            email: "",
                            phone: "",
                            enquiryType: selectedRoute,
                            message: "",
                            consent: false,
                          });
                        }}
                        className="btn-secondary text-xs uppercase tracking-wider py-2.5 px-5"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#0B1E3D] uppercase tracking-wider mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-sm text-[#0B1E3D] focus:outline-none focus:ring-2 focus:ring-[#0F6E62] focus:border-transparent"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#0B1E3D] uppercase tracking-wider mb-1.5">
                          Organisation
                        </label>
                        <input
                          type="text"
                          value={formData.organisation}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              organisation: e.target.value,
                            })
                          }
                          className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-sm text-[#0B1E3D] focus:outline-none focus:ring-2 focus:ring-[#0F6E62] focus:border-transparent"
                          placeholder="Company or entity name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#0B1E3D] uppercase tracking-wider mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-sm text-[#0B1E3D] focus:outline-none focus:ring-2 focus:ring-[#0F6E62] focus:border-transparent"
                          placeholder="you@company.com"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#0B1E3D] uppercase tracking-wider mb-1.5">
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-sm text-[#0B1E3D] focus:outline-none focus:ring-2 focus:ring-[#0F6E62] focus:border-transparent"
                          placeholder="+91..."
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0B1E3D] uppercase tracking-wider mb-1.5">
                        Enquiry Type *
                      </label>
                      <select
                        value={formData.enquiryType}
                        onChange={(e) => {
                          const val = e.target.value;
                          setFormData({ ...formData, enquiryType: val });
                          setSelectedRoute(val);
                        }}
                        className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-sm text-[#0B1E3D] bg-white focus:outline-none focus:ring-2 focus:ring-[#0F6E62] focus:border-transparent"
                      >
                        <option value="technology">Technology Solutions</option>
                        <option value="strategic">Strategic Opportunities</option>
                        <option value="partnerships">Partnerships</option>
                        <option value="general">General Enquiries</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0B1E3D] uppercase tracking-wider mb-1.5">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-sm text-[#0B1E3D] focus:outline-none focus:ring-2 focus:ring-[#0F6E62] focus:border-transparent"
                        placeholder={activeRouteObj.placeholderMessage}
                      />
                    </div>

                    <div className="pt-2">
                      <label className="flex items-start gap-2.5 text-xs text-[#475569] cursor-pointer">
                        <input
                          type="checkbox"
                          required
                          checked={formData.consent}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              consent: e.target.checked,
                            })
                          }
                          className="mt-0.5 rounded border-slate-300 text-[#0F6E62] focus:ring-[#0F6E62]"
                        />
                        <span>
                          By submitting this form, you agree that Kashless Ventures may use your information to respond to your enquiry in accordance with its Privacy Policy. *
                        </span>
                      </label>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full justify-center py-3.5 text-sm font-semibold tracking-wide uppercase"
                      >
                        <span>{isSubmitting ? "Sending..." : activeRouteObj.formCta}</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
