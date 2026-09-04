import { EMAIL } from "./site-config";

const columns = [
  {
    title: "Services",
    links: [
      { label: "Roof Replacement", href: "#services" },
      { label: "Repairs & Storm Damage", href: "#services" },
      { label: "Gutters & Flashing", href: "#services" },
    ],
  },
  {
    title: "Studio",
    links: [
      { label: "About Me", href: "#about" },
      { label: "Recent Projects", href: "#projects" },
      { label: "Transformations", href: "#transformations" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="grain-overlay bg-background pb-10 pt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 border-b border-border pb-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-3xl tracking-[0.1em] text-foreground">
              Roofer<span className="gilt-text italic">Girl</span>
            </p>
            <p className="mt-6 max-w-sm text-sm leading-[1.9] text-muted-foreground">
              A woman-owned residential roofing studio. Precision craftsmanship, honest pricing and
              rooflines finished to the last detail.
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-8 inline-block font-display text-xl text-cocoa underline decoration-accent/40 underline-offset-8 transition-colors hover:text-accent"
            >
              {EMAIL}
            </a>
          </div>

          {columns.map((col) => (
            <nav key={col.title} className="lg:col-span-3">
              <p className="eyebrow text-accent">{col.title}</p>
              <ul className="mt-6 space-y-4">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="lg:col-span-1">
            <p className="eyebrow text-accent">Hours</p>
            <p className="mt-6 text-sm leading-[1.9] text-muted-foreground">
              Mon – Sat
              <br />
              7am – 6pm
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
            © {new Date().getFullYear()} RooferGirl · Licensed &amp; Insured
          </p>
          <a href="#top" className="eyebrow text-muted-foreground hover:text-foreground">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
