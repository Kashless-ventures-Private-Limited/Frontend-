export default function ProcessTimeline({
  items = [
    { step: "Discover", description: "Understand business goals and technology challenges" },
    { step: "Assess", description: "Analyze infrastructure, applications, security and cost" },
    { step: "Design", description: "Create the technical approach and roadmap" },
    { step: "Build", description: "Develop, migrate and implement" },
    { step: "Secure", description: "Protect users, applications, infrastructure and data" },
    { step: "Scale", description: "Continuously evolve as the business grows" },
  ],
}) {
  return (
    <div className="w-full">
      {/* Desktop: Horizontal Timeline */}
      <div className="hidden md:grid md:grid-cols-6 gap-4 relative">
        {items.map((item, i) => (
          <div key={item.step} className="relative flex flex-col items-center text-center group">
            {/* Connecting line behind icons */}
            {i !== 0 && (
              <div
                className="absolute right-1/2 top-5 h-[2px] w-full -translate-y-1/2 -z-0"
                style={{ background: "var(--border-color)" }}
              />
            )}
            {i !== items.length - 1 && (
              <div
                className="absolute left-1/2 top-5 h-[2px] w-full -translate-y-1/2 -z-0"
                style={{ background: "var(--border-color)" }}
              />
            )}

            {/* Step Circle Badge */}
            <div
              className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white shadow-xs transition-transform duration-200 group-hover:scale-110"
              style={{ background: "var(--navy)" }}
            >
              {i + 1}
            </div>

            {/* Step Title */}
            <h4 className="mt-4 text-base font-bold text-[#0B1E3D] tracking-tight">
              {item.step}
            </h4>

            {/* Step Description */}
            <p className="mt-2 text-xs text-[#44506A] leading-relaxed max-w-[160px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile: Vertical Timeline */}
      <div className="flex flex-col gap-6 md:hidden">
        {items.map((item, i) => (
          <div key={item.step} className="flex gap-4">
            <div className="flex flex-col items-center">
              {/* Step Circle Badge */}
              <div
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white shadow-xs"
                style={{ background: "var(--navy)" }}
              >
                {i + 1}
              </div>

              {/* Vertical connecting line */}
              {i !== items.length - 1 && (
                <div
                  className="mt-1 w-[2px] flex-1 min-h-[36px]"
                  style={{ background: "var(--border-color)" }}
                />
              )}
            </div>

            <div className="pb-3 pt-0.5">
              <h4 className="text-base font-bold text-[#0B1E3D]">
                {item.step}
              </h4>
              <p className="mt-1 text-sm text-[#44506A] leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
