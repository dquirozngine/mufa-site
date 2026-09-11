"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { siteContent } from "@/lib/site-content";

/** Whole passage resolves in this long, however many characters it runs to —
 *  so adding or cutting a paragraph never changes the pacing. */
const REVEAL_MS = 9000;

/** How many characters are actively scrambling ahead of the settled text. A
 *  long zone is what makes it read as a wave of decoding sweeping through the
 *  paragraph rather than a cursor typing. */
const ZONE = 72;

/** Glyphs cycle on their own clock, slower than the frame rate — at 60fps the
 *  churn is too fast to register as characters at all. */
const GLYPH_TICK_MS = 45;

/** Dense, code-like set. Latin and digits rather than katakana so every glyph
 *  comes from the page's own font and the line never reflows mid-scramble. */
const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/\\{}[]#*+=~:;·—|!?%&$@";

type Cell = { c: string; o: number };

function makeZone(): Cell[] {
  const cells: Cell[] = [];
  for (let i = 0; i < ZONE; i++) {
    cells.push({
      c: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
      // Three brightness levels, so the zone has depth instead of reading as
      // one solid bar — a spread of greys darkening toward the settled text.
      o: Math.random() < 0.25 ? 1 : Math.random() < 0.5 ? 0.62 : 0.35,
    });
  }
  return cells;
}

// useLayoutEffect warns during SSR; the reveal is client-only anyway.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function Epigraph() {
  const { epigraph } = siteContent;
  const paragraphs = epigraph.paragraphs;
  const total = paragraphs.reduce((sum, p) => sum + p.length, 0);

  const sectionRef = useRef<HTMLElement | null>(null);
  // Starts fully revealed so the server-rendered HTML carries the real text —
  // crawlers and no-JS readers get the passage, not a pile of glyphs.
  const [revealed, setRevealed] = useState(total);
  const [zone, setZone] = useState<Cell[]>([]);

  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Hide before first paint rather than in an effect, so there's no flash of
  // finished text on the way down the page.
  useIsomorphicLayoutEffect(() => {
    if (total === 0 || reduced) return;
    setRevealed(0);
    setZone(makeZone());
  }, [total, reduced]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || total === 0 || reduced) return;

    let frame = 0;
    let start = 0;
    let lastTick = 0;

    function step(now: number) {
      if (!start) start = now;
      const progress = Math.min((now - start) / REVEAL_MS, 1);
      setRevealed(Math.floor(progress * total));

      if (progress < 1) {
        if (now - lastTick >= GLYPH_TICK_MS) {
          lastTick = now;
          setZone(makeZone());
        }
        frame = requestAnimationFrame(step);
      } else {
        setZone([]);
      }
    }

    // Fires once, when the passage is actually on screen — the reader sets
    // the pace by scrolling to it rather than waiting on a timer.
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          observer.disconnect();
          frame = requestAnimationFrame(step);
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [total, reduced]);

  // Nothing to show until the passage is pasted into site-content.ts.
  if (total === 0) return null;

  let consumed = 0;

  return (
    <section
      ref={sectionRef}
      className="border-b border-graphite px-5 py-16 lg:px-8 lg:py-24"
    >
      {/* Full bleed across the measure, with the citation held in a narrow
          margin column — the same two-column setting the printed page uses. */}
      <div className="grid gap-8 lg:grid-cols-[1fr_14rem] lg:gap-16">
        <blockquote className="space-y-6">
          {paragraphs.map((text, i) => {
            const offset = consumed;
            consumed += text.length;

            const local = Math.max(0, Math.min(revealed - offset, text.length));
            const zoneLen = Math.min(zone.length, text.length - local);
            const pending = text.slice(local + zoneLen);

            return (
              <p
                key={i}
                className="hyphens-auto text-justify text-base italic leading-relaxed sm:text-lg lg:text-xl lg:leading-relaxed"
              >
                {text.slice(0, local)}
                {zone.slice(0, zoneLen).map((cell, j) => (
                  <span
                    key={j}
                    className="not-italic text-smoke"
                    style={{ opacity: cell.o }}
                  >
                    {cell.c}
                  </span>
                ))}
                {/* Kept in the flow at zero opacity so the block never
                    reflows as the text resolves. */}
                <span className="opacity-0">{pending}</span>
              </p>
            );
          })}
        </blockquote>

        <footer className="border-t border-graphite pt-4 text-xs leading-snug lg:border-l lg:border-t-0 lg:pl-4 lg:pt-0">
          {epigraph.citation.map((line, i) => (
            <p key={i} className={i === 1 ? "italic" : undefined}>
              {line}
            </p>
          ))}
          <p className="mt-3 tabular-nums">{epigraph.isbn}</p>
        </footer>
      </div>
    </section>
  );
}
