"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Briefcase, Sparkles, Send, ShieldCheck } from "lucide-react";
import { careersValues } from "@/lib/data";

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    portfolioUrl: "",
    areaOfInterest: "Technology Engineering",
    message: "",
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
              Careers & Culture
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0B1E3D] mt-3 leading-tight">
              Build work that helps businesses move forward.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#475569] leading-relaxed">
              Kashless Ventures is for people who enjoy solving meaningful problems with clarity, care and practical intent. We are interested in people who can combine strong craft with good judgement - and who see collaboration as part of doing excellent work.
            </p>
          </div>
        </div>
      </section>

      {/* What We Value Section */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">
              Our Culture
            </span>
            <h2 className="text-3xl font-bold text-[#0B1E3D] mt-2">
              What we value
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              The professional mindset and craftsmanship we cherish across our teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careersValues.map((val, idx) => (
              <div
                key={val}
                className="p-6 rounded-2xl bg-[#0B1E3D] border border-slate-700/80 shadow-lg flex items-center gap-5 card-hover relative overflow-hidden group"
              >
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#0EB89B]/15 blur-lg pointer-events-none transition-transform duration-300 group-hover:scale-125" />
                <div className="w-10 h-10 rounded-full bg-[#0EB89B] text-[#0B1E3D] font-bold text-xs flex items-center justify-center shrink-0 shadow-md transition-transform duration-300 group-hover:scale-105">
                  0{idx + 1}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {val}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles & Application Section */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Open Roles Notice */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">
                Opportunities
              </span>
              <h2 className="text-3xl font-bold text-[#0B1E3D]">
                Open roles
              </h2>

              <div className="p-8 rounded-2xl bg-[#0B1E3D] border border-slate-700/80 shadow-xl space-y-4 relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-[#0EB89B]/15 blur-xl pointer-events-none transition-transform duration-300 group-hover:scale-125" />
                <div className="w-12 h-12 rounded-full bg-[#0EB89B] text-[#0B1E3D] flex items-center justify-center shadow-md">
                  <Briefcase className="w-6 h-6 text-[#0B1E3D]" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Current Status
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  We do not have a listed opening at present, but we are always interested in hearing from thoughtful people whose experience may be relevant to our work.
                </p>
                <div className="pt-2">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0EB89B]">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>General applications actively reviewed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Introduce Yourself Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-2xs">
                <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">
                  Get In Touch
                </span>
                <h3 className="text-2xl font-bold text-[#0B1E3D] mt-1 mb-6">
                  Introduce yourself
                </h3>

                {submitted ? (
                  <div className="p-8 rounded-xl bg-teal-50 border border-teal-200 text-center space-y-4">
                    <CheckCircle2 className="w-12 h-12 text-[#0F6E62] mx-auto" />
                    <h4 className="text-xl font-bold text-[#0B1E3D]">
                      Thank you for reaching out
                    </h4>
                    <p className="text-sm text-[#334155] leading-relaxed max-w-md mx-auto">
                      Your introduction has been received. We will review your background and reach out if a relevant opportunity arises.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="btn-secondary text-xs uppercase tracking-wider py-2 px-4 mt-2"
                    >
                      Submit Another Introduction
                    </button>
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
                          placeholder="you@domain.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#0B1E3D] uppercase tracking-wider mb-1.5">
                          Location
                        </label>
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) =>
                            setFormData({ ...formData, location: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-sm text-[#0B1E3D] focus:outline-none focus:ring-2 focus:ring-[#0F6E62] focus:border-transparent"
                          placeholder="City, Country"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#0B1E3D] uppercase tracking-wider mb-1.5">
                          LinkedIn or Portfolio URL (Optional)
                        </label>
                        <input
                          type="url"
                          value={formData.portfolioUrl}
                          onChange={(e) =>
                            setFormData({ ...formData, portfolioUrl: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-sm text-[#0B1E3D] focus:outline-none focus:ring-2 focus:ring-[#0F6E62] focus:border-transparent"
                          placeholder="https://linkedin.com/in/..."
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0B1E3D] uppercase tracking-wider mb-1.5">
                        Area of Interest
                      </label>
                      <select
                        value={formData.areaOfInterest}
                        onChange={(e) =>
                          setFormData({ ...formData, areaOfInterest: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-sm text-[#0B1E3D] bg-white focus:outline-none focus:ring-2 focus:ring-[#0F6E62] focus:border-transparent"
                      >
                        <option>Software & Product Engineering</option>
                        <option>Cloud & Infrastructure Architecture</option>
                        <option>Cybersecurity & Risk</option>
                        <option>Strategic Capital & Business Operations</option>
                        <option>Other Specialisation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0B1E3D] uppercase tracking-wider mb-1.5">
                        Short Message *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-sm text-[#0B1E3D] focus:outline-none focus:ring-2 focus:ring-[#0F6E62] focus:border-transparent"
                        placeholder="Tell us briefly about your background, craftsmanship and what kind of work excites you..."
                      />
                    </div>

                    <div className="pt-2">
                      <label className="flex items-start gap-2.5 text-xs text-[#475569] cursor-pointer">
                        <input
                          type="checkbox"
                          required
                          checked={formData.consent}
                          onChange={(e) =>
                            setFormData({ ...formData, consent: e.target.checked })
                          }
                          className="mt-0.5 rounded border-slate-300 text-[#0F6E62] focus:ring-[#0F6E62]"
                        />
                        <span>
                          I agree that Kashless Ventures may review and retain my submitted information for potential career opportunities in accordance with its Privacy Policy.
                        </span>
                      </label>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full justify-center py-3 text-sm font-semibold tracking-wide"
                      >
                        <span>{isSubmitting ? "Submitting..." : "Introduce Yourself"}</span>
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
