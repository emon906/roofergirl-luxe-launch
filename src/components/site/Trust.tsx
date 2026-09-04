import { Reveal } from "./Reveal";

const pillars = [
  {
    title: "Fully Licensed & Insured",
    body: "Certificates provided before a single ladder touches your gutter line.",
  },
  {
    title: "Written, Itemised Quotes",
    body: "Named materials, exact quantities, one fixed price. No day-of surprises.",
  },
  {
    title: "Manufacturer-Backed Warranty",
    body: "Workmanship guarantee alongside the full material warranty, in writing.",
  },
  {
    title: "Immaculate Sites",
    body: "Magnet-swept lawns, protected landscaping, debris hauled the same day.",
  },
];

const testimonials = [
  {
    quote:
      "She walked our roof, photographed every problem and explained it in plain language. The finished work is genuinely beautiful.",
    name: "Marisa & Tom H.",
    detail: "Full replacement",
  },
  {
    quote:
      "Storm damage handled start to finish, insurance paperwork included. Crew was respectful and the yard was spotless.",
    name: "Denise R.",
    detail: "Storm restoration",
  },
];

export function Trust() {
  return (
    <section className="relative bg-background py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-accent">Why Homeowners Trust Me</p>
              <h2 className="mt-6 font-display text-[clamp(2.4rem,5vw,4rem)] leading-[1.04] tracking-[-0.02em] text-foreground">
                Quiet confidence, <span className="italic">documented</span>.
              </h2>
            </Reveal>
            <Reveal delay={140} className="mt-10 space-y-8">
              {testimonials.map((t) => (
                <figure key={t.name} className="border-l-2 border-accent/50 pl-6">
                  <blockquote className="font-display text-xl leading-[1.6] text-foreground">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="eyebrow mt-4 text-muted-foreground">
                    {t.name} · {t.detail}
                  </figcaption>
                </figure>
              ))}
            </Reveal>
          </div>

          <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:col-span-7">
            {pillars.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 110}
                className="group bg-card p-8 transition-colors duration-700 hover:bg-secondary lg:p-10"
              >
                <span className="font-display text-sm text-accent">0{i + 1}</span>
                <h3 className="mt-6 font-display text-2xl text-foreground">{p.title}</h3>
                <p className="mt-4 text-sm leading-[1.9] text-muted-foreground">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
