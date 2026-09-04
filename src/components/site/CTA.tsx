import { Reveal, useParallax } from "./Reveal";
import ctaHome from "@/assets/cta-home.jpg";
import { EMAIL } from "./site-config";

export function CTA() {
  const ref = useParallax(30);

  return (
    <section id="contact" className="relative overflow-hidden bg-cocoa-deep">
      <div ref={ref} className="absolute inset-0" style={{ willChange: "transform" }}>
        <img
          src={ctaHome}
          alt="Luxury home at dusk with a pristine dark brown roof and warm glowing windows"
          loading="lazy"
          width={1920}
          height={1080}
          className="h-[118%] w-full -translate-y-[7%] object-cover"
          style={{ transform: "translateY(calc(-6% + var(--parallax, 0px)))" }}
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, color-mix(in oklab, var(--cocoa-deep) 94%, transparent) 0%, color-mix(in oklab, var(--cocoa-deep) 72%, transparent) 55%, color-mix(in oklab, var(--cocoa-deep) 40%, transparent) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-44">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-champagne">Free On-Site Estimate</p>
          <h2 className="mt-7 font-display text-[clamp(2.6rem,6vw,5rem)] leading-[1] tracking-[-0.02em] text-cream">
            Let's talk about your <span className="italic gilt-text">roof</span>.
          </h2>
          <div className="gilt-rule my-9 max-w-sm" />
          <p className="max-w-lg text-base leading-[1.9] text-cream/80">
            Send a few photos and your address and you'll receive a written, itemised estimate —
            usually within two business days. No obligation, no sales pressure.
          </p>
          <div className="mt-11 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="eyebrow shimmer rounded-sm bg-champagne px-10 py-4 text-cocoa-deep transition-transform duration-500 hover:-translate-y-0.5"
            >
              Email RooferGirl
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="font-display text-lg text-cream underline decoration-champagne/50 underline-offset-8 transition-colors hover:text-champagne"
            >
              {EMAIL}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
