import { PrimaryButton, SecondaryButton } from "./Buttons";

export default function CTABand({
  heading = "Ready to Build What's Next?",
  body = "Let's discuss your technology challenges and build the right solution for your business.",
  primaryLabel = "Talk to an Expert",
  primaryHref = "/contact",
  secondaryLabel = "Contact Us",
  secondaryHref = "/contact",
}) {
  return (
    <section className="py-20" style={{ background: "var(--navy)" }}>
      <div className="mx-auto max-w-[1300px] px-5 text-center lg:px-8">
        <h2 className="text-3xl font-bold text-white md:text-4xl">{heading}</h2>
        <p className="mx-auto mt-4 max-w-xl text-[17px] text-white/70">{body}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <PrimaryButton href={primaryHref} className="!bg-teal">
            {primaryLabel}
          </PrimaryButton>
          <SecondaryButton
            href={secondaryHref}
            className="!border-white !text-white hover:!bg-white/10"
          >
            {secondaryLabel}
          </SecondaryButton>
        </div>
      </div>
    </section>
  );
}
