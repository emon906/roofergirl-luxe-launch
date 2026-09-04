import { useEffect, useState } from "react";
import heroRoof from "@/assets/hero-roof.jpg";
import { EMAIL } from "./site-config";

export function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setOffset(window.scrollY);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-cocoa-deep">
      {/* Layer 1 — cinematic photograph with slow push-in + parallax drift */}
      <div
        className="absolute inset-0"
        style={{ transform: `translate3d(0, ${offset * 0.32}px, 0)` }}
      >
        <img
          src={heroRoof}
          alt="Luxury estate home with a flawless dark slate roof photographed at golden hour"
          width={1920}
          height={1280}
          className="animate-slow-zoom h-[112svh] w-full object-cover"
        />
      </div>

      {/* Layer 2 — chocolate veil for contrast */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-veil)" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(120% 80% at 15% 60%, color-mix(in oklab, var(--cocoa-deep) 78%, transparent) 0%, transparent 62%)",
        }}
        aria-hidden="true"
      />

      {/* Layer 3 — thin gilt frame */}
      <div
        className="pointer-events-none absolute inset-5 hidden border border-champagne/20 md:block lg:inset-8"
        aria-hidden="true"
      />

      {/* Layer 4 — content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-24 pt-40 lg:px-16 lg:pb-32">
        <p
          className="eyebrow animate-lux-rise text-champagne/85"
          style={{ animationDelay: "180ms" }}
        >
          Licensed &amp; Insured · Residential Roofing
        </p>

        <h1 className="mt-7 max-w-4xl font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.92] tracking-[-0.02em] text-cream">
          <span className="animate-lux-rise block" style={{ animationDelay: "320ms" }}>
            Rooflines
          </span>
          <span
            className="animate-lux-rise block pl-[0.08em] italic"
            style={{ animationDelay: "480ms" }}
          >
            worthy of the <span className="gilt-text">home</span>
          </span>
          <span className="animate-lux-rise block" style={{ animationDelay: "640ms" }}>
            beneath them.
          </span>
        </h1>

        <div
          className="animate-lux-rise mt-10 flex flex-col gap-8 border-t border-cream/15 pt-8 md:flex-row md:items-end md:justify-between"
          style={{ animationDelay: "820ms" }}
        >
          <p className="max-w-md text-base leading-relaxed text-cream/80">
            A woman-owned roofing studio built on precision, immaculate craftsmanship and a
            standard of care usually reserved for interiors.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="eyebrow shimmer rounded-sm bg-champagne px-9 py-4 text-cocoa-deep transition-transform duration-500 hover:-translate-y-0.5"
            >
              Book a Roof Consultation
            </a>
            <a
              href="#projects"
              className="eyebrow rounded-sm border border-cream/40 px-9 py-4 text-cream transition-colors duration-500 hover:border-champagne hover:text-champagne"
            >
              View Recent Work
            </a>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex"
        aria-hidden="true"
      >
        <span className="eyebrow text-cream/45">Scroll</span>
        <span className="animate-scroll-pulse h-10 w-px bg-cream/50" />
      </div>
    </section>
  );
}
