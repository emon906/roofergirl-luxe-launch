import { cn } from "@/lib/utils";
import { Play, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Marisa & Tom H.",
    role: "Full Roof Replacement",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    quote:
      "She walked our roof, photographed every problem and explained it in plain language. The finished work is genuinely beautiful.",
    rating: 5,
    videoThumbnail:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Denise R.",
    role: "Storm Restoration",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    quote:
      "Storm damage handled start to finish, insurance paperwork included. Crew was respectful and the yard was spotless.",
    rating: 5,
    videoThumbnail:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Carol & James W.",
    role: "Gutters & Flashing",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
    quote:
      "Written quote down to the last fastener, finished a day early, and the copper flashing is a work of art.",
    rating: 5,
    videoThumbnail:
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1200&auto=format&fit=crop",
  },
];

export const TestimonialBasic = () => {
  return (
    <section className="relative bg-secondary py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 text-center">
          <p className="eyebrow text-accent">« Testimonials »</p>
          <h2 className="mt-6 font-display text-[clamp(2.4rem,5vw,4rem)] leading-[1.04] tracking-[-0.02em] text-foreground">
            Social Proof.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.name}
              className="group overflow-hidden border border-border bg-card shadow-soft transition-shadow duration-700 hover:shadow-lux"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={t.videoThumbnail}
                  alt={`${t.name} project`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cocoa-deep/60 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex size-14 items-center justify-center rounded-full border border-cream/60 bg-cream/10 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
                    <Play className="ml-0.5 size-5 fill-cream text-cream" />
                  </span>
                </div>
                <span className="eyebrow absolute bottom-4 left-4 text-cream/90">
                  04:32 // HD_PLAYBACK
                </span>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    loading="lazy"
                    className="size-12 rounded-full border border-border object-cover"
                  />
                  <div>
                    <p className="font-display text-lg text-foreground">{t.name}</p>
                    <p className="eyebrow text-muted-foreground">{t.role}</p>
                  </div>
                </div>

                <blockquote className="mt-6 font-display text-xl leading-[1.6] text-foreground">
                  “{t.quote}”
                </blockquote>

                <div className="mt-6 flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn("size-4 fill-gilt text-gilt")}
                    />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialBasic;
