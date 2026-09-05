import { Reveal, useParallax } from "./Reveal";
import textureShingle from "@/assets/texture-shingle.jpg";
import ownerPhoto from "@/assets/owner.jpg";

const OWNER_PHOTO: string | null = ownerPhoto;

const facts = [
  { value: "12+", label: "Years on rooftops" },
  { value: "480+", label: "Homes protected" },
  { value: "100%", label: "Woman-owned" },
];

export function About() {
  const parallaxRef = useParallax(22);

  return (
    <section id="about" className="relative overflow-hidden bg-background py-28 lg:py-40">
      <div
        className="pointer-events-none absolute -right-24 top-24 hidden h-[520px] w-[520px] rounded-full opacity-[0.07] blur-3xl lg:block"
        style={{ background: "var(--gradient-cocoa)" }}
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-12 lg:gap-24 lg:px-10">
        {/* Portrait column */}
        <div ref={parallaxRef} className="relative lg:col-span-5">
          <Reveal variant="mask" className="relative">
            <div className="absolute -left-5 -top-5 hidden h-full w-full border border-accent/35 lg:block" />
            <div className="relative aspect-[4/5] overflow-hidden bg-secondary shadow-lux">
              {OWNER_PHOTO ? (
                <img
                  src={OWNER_PHOTO}
                  alt="Portrait of the owner of RooferGirl"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="grain-overlay flex h-full w-full flex-col items-center justify-center gap-4 border border-dashed border-cocoa/25 bg-secondary px-8 text-center text-cocoa">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-cocoa/30 font-display text-2xl">
                    ✦
                  </span>
                  <p className="eyebrow text-cocoa-soft">Owner Photo</p>
                  <p className="max-w-[15rem] text-sm leading-relaxed text-muted-foreground">
                    Add your photo here — portrait orientation looks best.
                  </p>
                </div>
              )}
            </div>
          </Reveal>

          <Reveal
            delay={220}
            className="absolute -bottom-10 -right-4 hidden w-40 overflow-hidden border-4 border-background shadow-soft lg:block"
          >
            <img
              src={textureShingle}
              alt="Close detail of premium chocolate brown architectural shingles"
              loading="lazy"
              width={1200}
              height={900}
              className="h-32 w-full object-cover"
            />
          </Reveal>
        </div>

        {/* Copy column */}
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow text-accent">About Me</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 font-display text-[clamp(2.4rem,5vw,4.2rem)] leading-[1.02] tracking-[-0.02em] text-foreground">
              I treat a roof like the <span className="italic">crown</span> of the house.
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <div className="gilt-rule my-9 max-w-xs" />
          </Reveal>
          <Reveal delay={240}>
            <div className="max-w-xl space-y-5 text-[1.0625rem] leading-[1.85] text-muted-foreground">
              <p>
                I started RooferGirl because homeowners deserve a roofer who explains everything,
                shows up when promised, and leaves a site cleaner than she found it. Every project
                is walked, measured and photographed by me personally — beginning to end.
              </p>
              <p>
                From full replacements to storm repairs, the work is quiet, exacting and
                beautifully finished. No pressure, no surprises, no shortcuts hidden under the
                shingles.
              </p>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-9">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="font-display text-4xl text-cocoa lg:text-5xl">{f.value}</dt>
                  <dd className="eyebrow mt-3 text-muted-foreground">{f.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
