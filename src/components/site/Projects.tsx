import { Reveal } from "./Reveal";

/**
 * RECENT PROJECTS — FACEBOOK REEL PLACEHOLDERS
 * ------------------------------------------------------------------
 * Paste each Facebook Reel URL into `url` below and the reel will embed
 * automatically. Leave it as null to keep the elegant placeholder.
 * Example: url: "https://www.facebook.com/reel/1234567890"
 */
const reels: { title: string; caption: string; url: string | null }[] = [
  { title: "Reel One", caption: "Full replacement · Cedar Ridge", url: null },
  { title: "Reel Two", caption: "Storm restoration · Lakeview", url: null },
  { title: "Reel Three", caption: "Gutters & flashing · Old Town", url: null },
];

function embedSrc(url: string) {
  return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false`;
}

export function Projects() {
  return (
    <section id="projects" className="relative bg-background py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="text-center">
          <p className="eyebrow text-accent">Recent Projects</p>
          <h2 className="mx-auto mt-6 max-w-2xl font-display text-[clamp(2.4rem,5vw,4.2rem)] leading-[1.02] tracking-[-0.02em] text-foreground">
            Straight from the rooftop
          </h2>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Short films from active job sites — real crews, real materials, real finished lines.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:gap-10">
          {reels.map((reel, i) => (
            <Reveal key={reel.title} delay={i * 150} className="group">
              <div className="relative aspect-[9/16] overflow-hidden border border-border bg-secondary shadow-soft transition-shadow duration-700 group-hover:shadow-lux">
                {reel.url ? (
                  <iframe
                    src={embedSrc(reel.url)}
                    title={reel.title}
                    loading="lazy"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    className="h-full w-full border-0"
                  />
                ) : (
                  <div className="grain-overlay flex h-full w-full flex-col items-center justify-center gap-5 border border-dashed border-cocoa/20 px-6 text-center text-cocoa">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full border border-cocoa/25 transition-transform duration-700 group-hover:scale-110">
                      <span className="ml-1 block h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-cocoa" />
                    </span>
                    <p className="eyebrow text-cocoa-soft">{reel.title}</p>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      Add a Facebook Reel here
                    </p>
                  </div>
                )}
              </div>
              <p className="eyebrow mt-5 text-muted-foreground">{reel.caption}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
