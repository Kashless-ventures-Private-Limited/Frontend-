"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { serviceOptions } from "@/lib/data";

const emptyForm = {
  fullName: "",
  companyName: "",
  workEmail: "",
  phone: "",
  service: "",
  message: "",
  consent: false,
};

function generateReferenceId() {
  return `KV-${Math.floor(100000 + Math.random() * 900000)}`;
}

export default function ContactForm() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [referenceId, setReferenceId] = useState("");

  function update(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function validate() {
    const next = {};
    if (!form.fullName.trim()) next.fullName = "Enter your full name.";
    if (!form.companyName.trim()) next.companyName = "Enter your company name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.workEmail)) next.workEmail = "Enter a valid work email.";
    if (!form.service) next.service = "Select an enquiry type.";
    if (!form.message.trim()) next.message = "Tell us about your requirement.";
    if (!form.consent) next.consent = "Consent is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    const referenceId = generateReferenceId();
    const enquiry = {
      id: referenceId,
      name: form.fullName,
      company: form.companyName,
      email: form.workEmail,
      phone: form.phone,
      enquiryType: form.service,
      message: form.message,
      createdAt: new Date().toISOString(),
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL || ""}/api/enquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(enquiry),
      });

      if (!response.ok) throw new Error("Submission failed");
      const result = await response.json();
      setReferenceId(result.referenceId || referenceId);
    } catch {
      // Keep the enquiry journey usable when the API is not connected yet.
      try {
        const existing = JSON.parse(localStorage.getItem("kashless_enquiries") || "[]");
        localStorage.setItem("kashless_enquiries", JSON.stringify([enquiry, ...existing]));
      } catch {}
      setReferenceId(referenceId);
    }

    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 text-center">
        <CheckCircle2 className="mx-auto text-[#0F6E62]" size={42} />
        <h2 className="text-2xl font-bold text-[#0B1E3D] mt-5">Enquiry submitted</h2>
        <p className="mt-2 text-slate-600">Thanks, {form.fullName.split(" ")[0]}. Your enquiry has been recorded.</p>
        <div className="mx-auto mt-6 inline-flex rounded-md bg-[#F8FAFC] border border-slate-200 px-5 py-3 text-sm font-semibold">
          Reference ID: <span className="ml-2 text-[#0F6E62]">{referenceId}</span>
        </div>
        <button onClick={() => { setForm(emptyForm); setStatus("idle"); }} className="block mx-auto mt-6 text-sm font-semibold text-[#0F6E62] hover:underline">
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" required error={errors.fullName}>
          <input value={form.fullName} onChange={(e) => update("fullName", e.target.value)} className={inputClass(errors.fullName)} placeholder="Your name" />
        </Field>
        <Field label="Company Name" required error={errors.companyName}>
          <input value={form.companyName} onChange={(e) => update("companyName", e.target.value)} className={inputClass(errors.companyName)} placeholder="Your company" />
        </Field>
        <Field label="Work Email" required error={errors.workEmail}>
          <input type="email" value={form.workEmail} onChange={(e) => update("workEmail", e.target.value)} className={inputClass(errors.workEmail)} placeholder="name@company.com" />
        </Field>
        <Field label="Phone">
          <input value={form.phone} onChange={(e) => update("phone", e.target.value)} className={inputClass()} placeholder="Optional" />
        </Field>
        <Field label="How can we help?" required error={errors.service}>
          <select value={form.service} onChange={(e) => update("service", e.target.value)} className={inputClass(errors.service)}>
            <option value="">Select an enquiry type</option>
            {serviceOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field label="Message" required error={errors.message}>
            <textarea rows={6} value={form.message} onChange={(e) => update("message", e.target.value)} className={inputClass(errors.message)} placeholder="Tell us what you are working on, the challenge you are facing or the opportunity you want to explore..." />
          </Field>
        </div>
      </div>

      <label className="mt-6 flex items-start gap-3 text-sm text-slate-600">
        <input type="checkbox" checked={form.consent} onChange={(e) => update("consent", e.target.checked)} className="mt-1" />
        <span>I consent to Kashless Ventures using the information provided to respond to my enquiry. {errors.consent && <span className="block text-red-600 mt-1">{errors.consent}</span>}</span>
      </label>

      <button type="submit" disabled={status === "submitting"} className="btn-primary mt-7 py-3.5 px-7 disabled:opacity-60">
        {status === "submitting" ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : <>Send an Enquiry</>}
      </button>
    </form>
  );
}

function Field({ label, required, error, children }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-[#0B1E3D] mb-2">{label}{required && " *"}</label>
      {children}
      {error && <p className="text-xs text-red-600 mt-1.5">{error}</p>}
    </div>
  );
}

function inputClass(error) {
  return `w-full rounded-lg border ${error ? "border-red-400" : "border-slate-300"} bg-white px-3.5 py-3 text-sm text-[#0B1E3D] outline-none focus:border-[#0F6E62] focus:ring-2 focus:ring-[#0F6E62]/10`;
}
