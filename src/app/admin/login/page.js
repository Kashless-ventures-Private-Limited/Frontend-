"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError("Enter your email and password.");
      return;
    }
    // Demo-only auth: any non-empty credentials sign in.
    localStorage.setItem("kashless_admin_auth", "1");
    router.push("/admin");
  }

  return (
    <section className="flex min-h-[70vh] items-center justify-center px-5 py-16">
      <div className="w-full max-w-sm rounded-xl border border-border-color bg-white p-8">
        <div className="mx-auto mb-4 flex items-center justify-center">
          <img src="/logo.png" alt="Kashless Ventures" className="h-10 w-auto object-contain" />
        </div>
        <h1 className="text-center text-xl font-bold text-navy">Admin Sign In</h1>
        <p className="mt-1 text-center text-sm text-secondary-text">
          Enquiries dashboard access only.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-navy">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@kashless.in"
              className="w-full rounded-md border border-border-color px-3.5 py-2.5 text-[15px] outline-none focus:border-teal"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-navy">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-md border border-border-color px-3.5 py-2.5 text-[15px] outline-none focus:border-teal"
            />
          </div>
          {error && <p className="text-sm text-error">{error}</p>}
          <button
            type="submit"
            className="mt-2 rounded-md px-5 py-3 text-[15px] font-semibold text-white"
            style={{ background: "var(--navy)" }}
          >
            Sign In
          </button>
          <button type="button" className="text-center text-sm font-semibold text-teal hover:underline">
            Forgot password?
          </button>
        </form>
        <p className="mt-6 text-center text-xs text-slate">
          Demo mode — any email and password signs in.
        </p>
      </div>
    </section>
  );
}
