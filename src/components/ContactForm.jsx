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
  budget: "",
  timeline: "",
  message: "",
  consent: false,
};

function generateReferenceId() {
  const rand = Math.floor(100000 + Math.random() * 900000);
  return `KL-${rand}`;
}

export default function ContactForm() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success
  const [referenceId, setReferenceId] = useState("");

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function validate() {
    const next = {};
    if (!form.fullName.trim()) next.fullName = "Enter your full name.";
    if (!form.companyName.trim()) next.companyName = "Enter your company name.";
    if (!form.workEmail.trim()) {
      next.workEmail = "Enter your work email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.workEmail)) {
      next.workEmail = "Enter a valid email address.";
    }
    if (!form.service) next.service = "Select a service.";
    if (!form.message.trim()) next.message = "Tell us about your requirement.";
    if (!form.consent) next.consent = "Consent is required to submit this form.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    const refId = generateReferenceId();
    const enquiry = {
      id: refId,
      name: form.fullName,
      company: form.companyName,
      email: form.workEmail,
      phone: form.phone,
      service: form.service,
      budget: form.budget,
      timeline: form.timeline,
      message: form.message,
      status: "New",
      notes: "",
      createdAt: new Date().toISOString(),
    };

    // Simulate server-side validation, DB write and email notifications.
    await new Promise((resolve) => setTimeout(resolve, 900));

    try {
      const existing = JSON.parse(localStorage.getItem("kashless_enquiries") || "[]");
      localStorage.setItem("kashless_enquiries", JSON.stringify([enquiry, ...existing]));
    } catch {
      // localStorage unavailable — demo still succeeds without persistence
    }

    setReferenceId(refId);
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-border-color bg-white p-8 text-center sm:p-10">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full" style={{ background: "rgba(15,110,98,0.1)" }}>
          <CheckCircle2 size={30} color="var(--teal)" />
        </div>
        <h3 className="text-xl font-bold text-navy">Enquiry submitted</h3>
        <p className="mt-2 text-[15px] text-secondary-text">
          Thanks, {form.fullName.split(" ")[0]}. We&rsquo;ve sent a confirmation to{" "}
          {form.workEmail} and our team has been notified.
        </p>
        <div
          className="mx-auto mt-6 inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-navy"
          style={{ background: "var(--surface-bg)", border: "1px solid var(--border-color)" }}
        >
          Reference ID: <span className="font-bold text-teal">{referenceId}</span>
        </div>
        <div className="mt-6">
          <button
            onClick={() => {
              setForm(emptyForm);
              setStatus("idle");
            }}
            className="text-sm font-semibold text-teal hover:underline"
          >
            Submit another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-xl border border-border-color bg-white p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" required error={errors.fullName}>
          <input
            type="text"
            value={form.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            className={inputClass(errors.fullName)}
            placeholder="Jordan Mehta"
          />
        </Field>

        <Field label="Company Name" required error={errors.companyName}>
          <input
            type="text"
            value={form.companyName}
            onChange={(e) => update("companyName", e.target.value)}
            className={inputClass(errors.companyName)}
            placeholder="Acme Retail Pvt Ltd"
          />
        </Field>

        <Field label="Work Email" required error={errors.workEmail}>
          <input
            type="email"
            value={form.workEmail}
            onChange={(e) => update("workEmail", e.target.value)}
            className={inputClass(errors.workEmail)}
            placeholder="jordan@acme.com"
          />
        </Field>

        <Field label="Phone Number" error={errors.phone}>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputClass(errors.phone)}
            placeholder="+91 98765 43210"
          />
        </Field>

        <Field label="Service Required" required error={errors.service}>
          <select
            value={form.service}
            onChange={(e) => update("service", e.target.value)}
            className={inputClass(errors.service)}
          >
            <option value="">Select a service</option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Project Budget" hint="Optional">
          <input
            type="text"
            value={form.budget}
            onChange={(e) => update("budget", e.target.value)}
            className={inputClass()}
            placeholder="e.g. ₹5–10 lakh"
          />
        </Field>

        <Field label="Project Timeline" hint="Optional" className="sm:col-span-2">
          <input
            type="text"
            value={form.timeline}
            onChange={(e) => update("timeline", e.target.value)}
            className={inputClass()}
            placeholder="e.g. Q1 2027, or as soon as possible"
          />
        </Field>

        <Field label="Requirement / Message" required error={errors.message} className="sm:col-span-2">
          <textarea
            rows={5}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            className={inputClass(errors.message)}
            placeholder="Tell us what you're trying to achieve..."
          />
        </Field>
      </div>

      <label className="mt-6 flex items-start gap-3 text-sm text-secondary-text">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={(e) => update("consent", e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 rounded border-border-color accent-[color:var(--teal)]"
        />
        I consent to Kashless contacting me about this enquiry and storing my
        details in line with the Privacy Policy. *
      </label>
      {errors.consent && <p className="mt-1 text-sm text-error">{errors.consent}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-7 flex w-full items-center justify-center gap-2 rounded-md px-6 py-3.5 text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5 disabled:opacity-70 sm:w-auto"
        style={{ background: "var(--navy)" }}
      >
        {status === "submitting" && <Loader2 size={18} className="animate-spin" />}
        {status === "submitting" ? "Submitting..." : "Submit Enquiry"}
      </button>
    </form>
  );
}

function Field({ label, required, error, hint, className = "", children }) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-sm font-semibold text-navy">
        {label} {required && <span className="text-error">*</span>}
        {hint && <span className="ml-1 font-normal text-slate">({hint})</span>}
      </label>
      {children}
      {error && <p className="mt-1.5 text-sm text-error">{error}</p>}
    </div>
  );
}

function inputClass(error) {
  return `w-full rounded-md border bg-white px-3.5 py-2.5 text-[15px] text-[#1A1A1A] outline-none transition-colors focus:border-teal ${
    error ? "border-error" : "border-border-color"
  }`;
}
