import { siteContent } from "@/lib/site-content";

/**
 * The epigraph that opens the catalogue: set full width and justified, with
 * the citation held in a margin column the way the printed page sets it.
 */
export function Epigraph() {
  const { epigraph } = siteContent;

  // Nothing to show until the passage is pasted into site-content.ts.
  if (epigraph.paragraphs.length === 0) return null;

  return (
    <section className="border-b border-graphite px-5 py-16 lg:px-8 lg:py-24">
      <div className="grid gap-8 lg:grid-cols-[1fr_14rem] lg:gap-16">
        <blockquote className="space-y-6">
          {epigraph.paragraphs.map((text, i) => (
            <p
              key={i}
              className="hyphens-auto text-justify text-base italic leading-relaxed sm:text-lg lg:text-xl lg:leading-relaxed"
            >
              {text}
            </p>
          ))}
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
