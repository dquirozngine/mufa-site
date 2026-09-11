"use client";

import { useState } from "react";
import { siteContent } from "@/lib/site-content";

export function BooksSection() {
  const { books } = siteContent;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // Covers that failed to load. A missing file shouldn't render as a broken
  // image icon — the row falls back to a typographic card instead.
  const [failed, setFailed] = useState<string[]>([]);

  return (
    <section id="library" className="scroll-mt-16 border-b border-graphite">
      <div className="flex items-baseline justify-between px-5 py-4 lg:px-8">
        <h2 className="text-xs uppercase tracking-wide">{books.label}</h2>
        <p className="text-xs uppercase tracking-wide tabular-nums">
          {books.items.length} titles
        </p>
      </div>

      <div className="border-t border-graphite">
        {books.items.map((book, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={book.cover}
              className={`transition-colors duration-slow [&:not(:first-child)]:rule-top ${
                isOpen ? "bg-graphite text-paper" : "bg-paper text-ink"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`book-${i}`}
                className="grid w-full grid-cols-[2.5rem_1fr_2rem] items-baseline gap-x-4 px-5 py-5 text-left transition-colors duration-slow hover:bg-graphite hover:text-paper sm:grid-cols-[3.5rem_1fr_16rem_2rem] lg:px-8"
              >
                <span className="text-xs uppercase tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="font-display text-lg font-bold uppercase leading-tight tracking-display sm:text-2xl lg:text-3xl">
                  {book.title}
                </span>

                {/* Author sits in its own column on desktop; on phones it drops
                    under the title, where there's room for it to wrap. */}
                <span className="col-start-2 row-start-2 mt-1.5 text-xs leading-snug sm:col-start-3 sm:row-start-1 sm:mt-0 sm:text-right">
                  {book.author}
                </span>

                <span
                  aria-hidden="true"
                  className={`col-start-3 row-start-1 justify-self-end text-xl leading-none transition-transform duration-slow sm:col-start-4 ${
                    isOpen ? "rotate-45" : "rotate-0"
                  }`}
                >
                  +
                </span>
              </button>

              <div
                id={`book-${i}`}
                className={`grid overflow-hidden transition-[grid-template-rows] duration-slow ease-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="min-h-0 overflow-hidden">
                  <div className="px-5 pb-10 sm:pl-[4.5rem] lg:px-8 lg:pl-[6.5rem]">
                    {/* Rendered only while open. With 49 rows, keeping every
                        cover in the DOM would queue 49 requests for images
                        nobody has asked to see yet. */}
                    {isOpen ? (
                      <figure className="max-w-[16rem]">
                        {failed.includes(book.cover) ? (
                          <div className="flex aspect-[2/3] w-full flex-col justify-between border-2 border-current p-4">
                            <span className="text-[0.625rem] uppercase tracking-wide">
                              Cover pending
                            </span>
                            <span className="font-display text-base font-bold uppercase leading-tight tracking-display">
                              {book.title}
                            </span>
                          </div>
                        ) : (
                          <img
                            src={book.cover}
                            alt={`Cover of ${book.title}`}
                            className="w-full"
                            onError={() =>
                              setFailed((prev) =>
                                prev.includes(book.cover) ? prev : [...prev, book.cover],
                              )
                            }
                          />
                        )}
                        {book.subtitle ? (
                          <figcaption className="mt-3 text-xs leading-snug">
                            {book.subtitle}
                          </figcaption>
                        ) : null}
                      </figure>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
