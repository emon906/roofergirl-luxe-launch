import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { EMAIL } from "./site-config";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Transformations", href: "#transformations" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700",
        solid
          ? "border-b border-border/60 bg-background/85 py-3 backdrop-blur-xl"
          : "border-b border-transparent py-6",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="group flex items-baseline gap-2">
          <span
            className={cn(
              "font-display text-2xl tracking-[0.14em] transition-colors duration-500",
              solid ? "text-foreground" : "text-primary-foreground",
            )}
          >
            Roofer
          </span>
          <span className="gilt-text font-display text-2xl italic tracking-[0.06em]">Girl</span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "eyebrow relative transition-colors duration-500 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-500 hover:after:w-full",
                solid
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-primary-foreground/80 hover:text-primary-foreground",
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={`mailto:${EMAIL}`}
          className={cn(
            "eyebrow hidden rounded-sm border px-6 py-3 transition-all duration-500 md:inline-block",
            solid
              ? "border-primary bg-primary text-primary-foreground hover:bg-cocoa-deep"
              : "border-primary-foreground/45 text-primary-foreground hover:border-accent hover:bg-primary-foreground/10",
          )}
        >
          Request Estimate
        </a>
      </div>
    </header>
  );
}
