import { useCallback, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import beforeRoof from "@/assets/before-roof.jpg";
import afterRoof from "@/assets/after-roof.jpg";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const frameRef = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  return (
    <section id="transformations" className="relative bg-secondary py-28 lg:py-40">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-accent">Before &amp; After</p>
          <h2 className="mt-6 font-display text-[clamp(2.4rem,5vw,4.2rem)] leading-[1.02] tracking-[-0.02em] text-foreground">
            Drag to see the difference
          </h2>
        </Reveal>

        <Reveal delay={140} className="mt-14">
          <div
            ref={frameRef}
            role="group"
            aria-label="Before and after roof comparison"
            className="relative aspect-[7/5] w-full cursor-ew-resize select-none overflow-hidden border border-border shadow-lux"
            onPointerDown={(e) => {
              dragging.current = true;
              e.currentTarget.setPointerCapture(e.pointerId);
              move(e.clientX);
            }}
            onPointerMove={(e) => dragging.current && move(e.clientX)}
            onPointerUp={() => (dragging.current = false)}
            onPointerCancel={() => (dragging.current = false)}
          >
            <img
              src={afterRoof}
              alt="Roof after replacement with new chocolate brown architectural shingles"
              loading="lazy"
              width={1400}
              height={1000}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <img
                src={beforeRoof}
                alt="Roof before replacement with worn weathered shingles"
                loading="lazy"
                width={1400}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>

            <span className="eyebrow absolute left-5 top-5 bg-cocoa-deep/80 px-3 py-1.5 text-cream backdrop-blur-sm">
              Before
            </span>
            <span className="eyebrow absolute right-5 top-5 bg-champagne/90 px-3 py-1.5 text-cocoa-deep backdrop-blur-sm">
              After
            </span>

            <div
              className="pointer-events-none absolute inset-y-0 w-px bg-champagne"
              style={{ left: `${pos}%` }}
            >
              <span className="absolute top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-champagne bg-cocoa-deep text-cream shadow-lux">
                <span className="text-xs tracking-[0.2em]">◀▶</span>
              </span>
            </div>
          </div>

          <label className="sr-only" htmlFor="ba-range">
            Comparison position
          </label>
          <input
            id="ba-range"
            type="range"
            min={0}
            max={100}
            value={pos}
            onChange={(e) => setPos(Number(e.target.value))}
            className="mt-6 w-full accent-cocoa"
          />
        </Reveal>
      </div>
    </section>
  );
}
