import { Reveal } from "./Reveal";
import serviceInstall from "@/assets/service-install.jpg";
import serviceGutters from "@/assets/service-gutters.jpg";
import textureShingle from "@/assets/texture-shingle.jpg";

const services = [
  {
    index: "01",
    title: "Full Roof Replacement",
    image: serviceInstall,
    body: "Architectural shingle systems installed to manufacturer spec, with premium underlayment, ice-and-water shield and flawless ridge detailing.",
  },
  {
    index: "02",
    title: "Repairs & Storm Damage",
    image: textureShingle,
    body: "Leak diagnosis, wind and hail restoration, and insurance-ready documentation photographed from the roof itself.",
  },
  {
    index: "03",
    title: "Gutters, Flashing & Trim",
    image: serviceGutters,
    body: "Seamless gutters, chimney and valley flashing, fascia and soffit finishing — the details that decide how long a roof lasts.",
  },
];

export function Services() {
  return (
    <section id="services" className="surface-cocoa grain-overlay relative py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="eyebrow text-champagne">Premium Work</p>
            <h2 className="mt-6 max-w-xl font-display text-[clamp(2.4rem,5vw,4.2rem)] leading-[1.02] tracking-[-0.02em] text-cream">
              Three ways I protect a home
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="max-w-sm text-sm leading-relaxed text-cream/70">
              Every scope is quoted line by line, in writing, with the exact materials named. You
              will always know what you are paying for.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-cream/12 bg-cream/12 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 140}
              className="group relative bg-cocoa-deep p-8 transition-colors duration-700 hover:bg-cocoa lg:p-10"
            >
              <div className="relative mb-9 h-52 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-80 transition-all duration-[1200ms] ease-out group-hover:scale-[1.07] group-hover:opacity-100"
                />
                <span className="absolute left-0 top-0 bg-champagne px-3 py-1 font-display text-sm text-cocoa-deep">
                  {s.index}
                </span>
              </div>
              <h3 className="font-display text-2xl text-cream lg:text-[1.75rem]">{s.title}</h3>
              <div className="gilt-rule my-5 w-14" />
              <p className="text-sm leading-[1.9] text-cream/72">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
