import Link from "next/link";

export function PrimaryButton({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`btn-fill-primary inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-[15px] font-semibold transition-all duration-300 ${className}`}
    >
      {children}
    </Link>
  );
}

export function SecondaryButton({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`btn-fill-secondary inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-[15px] font-semibold transition-all duration-300 ${className}`}
    >
      {children}
    </Link>
  );
}

export function TextLink({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`link-underline inline-flex items-center gap-1 text-sm font-semibold text-teal ${className}`}
    >
      {children}
    </Link>
  );
}
