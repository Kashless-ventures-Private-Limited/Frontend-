import { Cloud, Code2, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

const icons = { Cloud, Code2, ShieldCheck };

export default function ServiceCard({ service, showCapabilities = false }) {
  const Icon = icons[service.icon];
  return (
    <Link
      href={`/services/${service.slug}`}
      className="card-hover group flex h-full flex-col rounded-xl border border-border-color bg-white p-7"
    >
      <div
        className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg"
        style={{ background: "rgba(15,110,98,0.1)" }}
      >
        <Icon size={24} color="var(--teal)" />
      </div>
      <h3 className="mb-2 text-lg font-bold text-navy">{service.name}</h3>
      <p className="mb-4 text-[15px] leading-relaxed text-secondary-text">
        {service.tagline}
      </p>

      {showCapabilities && (
        <ul className="mb-5 flex flex-col gap-2">
          {service.capabilityGroups[0].items.slice(0, 4).map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-secondary-text">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal" />
              {item}
            </li>
          ))}
        </ul>
      )}

      <span className="mt-auto flex items-center gap-1 text-sm font-semibold text-teal">
        Learn More
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
