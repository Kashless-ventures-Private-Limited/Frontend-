"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Download, LogOut, Search, X } from "lucide-react";
import { serviceOptions } from "@/lib/data";

const STATUSES = ["New", "Contacted", "Qualified", "In Progress", "Converted", "Closed"];

const seedEnquiries = [
  {
    id: "KL-482913",
    name: "Ritika Sharma",
    company: "Meridian Retail Group",
    email: "ritika.sharma@meridianretail.in",
    phone: "+91 98100 22341",
    service: "Cloud & Infrastructure",
    budget: "₹10–20 lakh",
    timeline: "Q1 2027",
    message: "Migrating our on-prem ERP and file servers to a hybrid cloud setup.",
    status: "Contacted",
    notes: "Discovery call scheduled for next week.",
    createdAt: "2026-08-12T09:30:00.000Z",
  },
  {
    id: "KL-291047",
    name: "Arjun Kapoor",
    company: "Kapoor & Sons Textiles",
    email: "arjun@kapoorsons.com",
    phone: "+91 99530 11209",
    service: "Web Development",
    budget: "₹3–5 lakh",
    timeline: "As soon as possible",
    message: "Need a new corporate site plus a basic customer portal for order tracking.",
    status: "New",
    notes: "",
    createdAt: "2026-08-18T14:05:00.000Z",
  },
  {
    id: "KL-773652",
    name: "Priya Nair",
    company: "Nair Diagnostics Pvt Ltd",
    email: "priya.nair@nairdiagnostics.in",
    phone: "+91 90210 88453",
    service: "Cybersecurity",
    budget: "₹5–10 lakh",
    timeline: "Q2 2027",
    message: "Requesting a full security assessment ahead of a compliance audit.",
    status: "Qualified",
    notes: "Sent NDA. Awaiting signature before scoping call.",
    createdAt: "2026-08-05T11:20:00.000Z",
  },
  {
    id: "KL-104985",
    name: "Devendra Rao",
    company: "Rao Logistics",
    email: "devendra.rao@raologistics.com",
    phone: "",
    service: "Cloud & Infrastructure",
    budget: "",
    timeline: "",
    message: "Exploring options to modernize our network infrastructure across 3 warehouses.",
    status: "In Progress",
    notes: "Proposal shared. Following up Friday.",
    createdAt: "2026-07-29T08:45:00.000Z",
  },
];

function loadEnquiries() {
  let stored = [];
  try {
    stored = JSON.parse(localStorage.getItem("kashless_enquiries") || "[]");
  } catch {
    stored = [];
  }
  return [...stored, ...seedEnquiries];
}

export default function AdminDashboard() {
  const router = useRouter();
  const [authed, setAuthed] = useState(false);
  const [checked, setChecked] = useState(false);
  const [enquiries, setEnquiries] = useState([]);
  const [search, setSearch] = useState("");
  const [serviceFilter, setServiceFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const isAuthed = localStorage.getItem("kashless_admin_auth") === "1";
    setAuthed(isAuthed);
    setChecked(true);
    if (!isAuthed) {
      router.push("/admin/login");
    } else {
      setEnquiries(loadEnquiries());
    }
  }, [router]);

  const filtered = useMemo(() => {
    return enquiries.filter((e) => {
      const matchesSearch =
        !search ||
        [e.name, e.company, e.email].some((f) => f.toLowerCase().includes(search.toLowerCase()));
      const matchesService = serviceFilter === "all" || e.service === serviceFilter;
      const matchesStatus = statusFilter === "all" || e.status === statusFilter;
      return matchesSearch && matchesService && matchesStatus;
    });
  }, [enquiries, search, serviceFilter, statusFilter]);

  function updateEnquiry(id, patch) {
    setEnquiries((list) => list.map((e) => (e.id === id ? { ...e, ...patch } : e)));
    setSelected((sel) => (sel && sel.id === id ? { ...sel, ...patch } : sel));
  }

  function exportCsv() {
    const headers = ["Enquiry ID", "Name", "Company", "Email", "Phone", "Service", "Status", "Date"];
    const rows = filtered.map((e) => [
      e.id,
      e.name,
      e.company,
      e.email,
      e.phone,
      e.service,
      e.status,
      new Date(e.createdAt).toLocaleDateString(),
    ]);
    const csv = [headers, ...rows]
      .map((r) => r.map((v) => `"${String(v ?? "").replace(/"/g, '""')}"`).join(","))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "kashless-enquiries.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  function logout() {
    localStorage.removeItem("kashless_admin_auth");
    router.push("/admin/login");
  }

  if (!checked || !authed) {
    return <div className="py-24 text-center text-secondary-text">Loading…</div>;
  }

  return (
    <section className="min-h-[70vh] py-10">
      <div className="mx-auto max-w-[1300px] px-5 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-navy">Enquiries</h1>
            <p className="text-sm text-secondary-text">
              {filtered.length} of {enquiries.length} enquiries
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={exportCsv}
              className="flex items-center gap-2 rounded-md border border-border-color px-4 py-2.5 text-sm font-semibold text-navy hover:border-teal hover:text-teal"
            >
              <Download size={16} /> Export CSV
            </button>
            <button
              onClick={logout}
              className="flex items-center gap-2 rounded-md border border-border-color px-4 py-2.5 text-sm font-semibold text-navy hover:border-teal hover:text-teal"
            >
              <LogOut size={16} /> Log Out
            </button>
          </div>
        </div>

        <div className="mb-6 flex flex-wrap gap-3">
          <div className="relative flex-1 min-w-[220px]">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, company or email"
              className="w-full rounded-md border border-border-color py-2.5 pl-9 pr-3 text-sm outline-none focus:border-teal"
            />
          </div>
          <select
            value={serviceFilter}
            onChange={(e) => setServiceFilter(e.target.value)}
            className="rounded-md border border-border-color px-3 py-2.5 text-sm outline-none focus:border-teal"
          >
            <option value="all">All services</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-md border border-border-color px-3 py-2.5 text-sm outline-none focus:border-teal"
          >
            <option value="all">All statuses</option>
            {STATUSES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className="overflow-x-auto rounded-xl border border-border-color bg-white">
          <table className="w-full min-w-[820px] text-left text-sm">
            <thead>
              <tr className="border-b border-border-color text-secondary-text">
                <th className="px-4 py-3 font-semibold">ID</th>
                <th className="px-4 py-3 font-semibold">Name</th>
                <th className="px-4 py-3 font-semibold">Company</th>
                <th className="px-4 py-3 font-semibold">Service</th>
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3 font-semibold">Date</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {filtered.map((e) => (
                <tr key={e.id} className="border-b border-border-color last:border-0 hover:bg-surface-bg">
                  <td className="px-4 py-3 font-medium text-navy">{e.id}</td>
                  <td className="px-4 py-3">{e.name}</td>
                  <td className="px-4 py-3 text-secondary-text">{e.company}</td>
                  <td className="px-4 py-3 text-secondary-text">{e.service}</td>
                  <td className="px-4 py-3">
                    <StatusBadge status={e.status} />
                  </td>
                  <td className="px-4 py-3 text-secondary-text">
                    {new Date(e.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button
                      onClick={() => setSelected(e)}
                      className="text-sm font-semibold text-teal hover:underline"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-4 py-10 text-center text-secondary-text">
                    No enquiries match these filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {selected && (
        <EnquiryModal
          enquiry={selected}
          onClose={() => setSelected(null)}
          onUpdate={(patch) => updateEnquiry(selected.id, patch)}
        />
      )}
    </section>
  );
}

function StatusBadge({ status }) {
  const styles = {
    New: { bg: "rgba(15,110,98,0.12)", color: "var(--teal)" },
    Contacted: { bg: "rgba(11,30,61,0.08)", color: "var(--navy)" },
    Qualified: { bg: "rgba(183,121,31,0.14)", color: "var(--warning)" },
    "In Progress": { bg: "rgba(11,30,61,0.08)", color: "var(--navy)" },
    Converted: { bg: "rgba(31,138,76,0.14)", color: "var(--success)" },
    Closed: { bg: "rgba(107,118,144,0.14)", color: "var(--slate)" },
  };
  const s = styles[status] || styles.New;
  return (
    <span
      className="rounded-full px-3 py-1 text-xs font-semibold"
      style={{ background: s.bg, color: s.color }}
    >
      {status}
    </span>
  );
}

function EnquiryModal({ enquiry, onClose, onUpdate }) {
  const [notes, setNotes] = useState(enquiry.notes || "");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-xl bg-white p-6">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h2 className="text-lg font-bold text-navy">{enquiry.id}</h2>
            <p className="text-sm text-secondary-text">
              {new Date(enquiry.createdAt).toLocaleString()}
            </p>
          </div>
          <button onClick={onClose} aria-label="Close" className="text-slate hover:text-navy">
            <X size={20} />
          </button>
        </div>

        <dl className="grid grid-cols-2 gap-3 text-sm">
          <Info label="Name" value={enquiry.name} />
          <Info label="Company" value={enquiry.company} />
          <Info label="Email" value={enquiry.email} />
          <Info label="Phone" value={enquiry.phone || "—"} />
          <Info label="Service" value={enquiry.service} />
          <Info label="Budget" value={enquiry.budget || "—"} />
          <Info label="Timeline" value={enquiry.timeline || "—"} span={2} />
        </dl>

        <div className="mt-4">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate">
            Message
          </p>
          <p className="rounded-md bg-surface-bg p-3 text-sm text-secondary-text">
            {enquiry.message}
          </p>
        </div>

        <div className="mt-4">
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate">
            Status
          </label>
          <select
            value={enquiry.status}
            onChange={(e) => onUpdate({ status: e.target.value })}
            className="w-full rounded-md border border-border-color px-3 py-2.5 text-sm outline-none focus:border-teal"
          >
            {STATUSES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-4">
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate">
            Internal notes
          </label>
          <textarea
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            onBlur={() => onUpdate({ notes })}
            className="w-full rounded-md border border-border-color px-3 py-2.5 text-sm outline-none focus:border-teal"
            placeholder="Add a note for the team..."
          />
        </div>
      </div>
    </div>
  );
}

function Info({ label, value, span = 1 }) {
  return (
    <div style={{ gridColumn: `span ${span}` }}>
      <p className="text-xs font-semibold uppercase tracking-wide text-slate">{label}</p>
      <p className="text-navy">{value}</p>
    </div>
  );
}
