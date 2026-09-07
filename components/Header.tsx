"use client";

import Link from "next/link";
import { useState } from "react";
import { siteContent } from "@/lib/site-content";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-graphite bg-paper">
      <nav className="flex items-stretch justify-between">
        <Link
          href="/"
          aria-label={siteContent.footer.name}
          className="flex items-center px-5 py-4 lg:px-8"
        >
          <img
            src="/logo.png"
            alt={siteContent.footer.name}
            width={900}
            height={555}
            className="h-5 w-auto lg:h-6"
          />
        </Link>

        {/* Desktop nav. Each item is walled off by a left rule, so the header
            reads as a row of cells rather than floating text. */}
        <div className="hidden md:flex">
          {siteContent.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="border-l border-graphite px-6 py-4 text-sm uppercase tracking-wide transition hover:bg-graphite hover:text-paper"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle. Word, not a hamburger — matches the all-caps
            vocabulary and needs no icon set. */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="border-l border-graphite px-5 py-4 text-sm uppercase tracking-wide transition hover:bg-graphite hover:text-paper md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Always rendered so it can animate — the grid-rows 1fr↔0fr trick
          transitions height smoothly without a hard-coded max-height. */}
      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-slow ease-out md:hidden ${
          open ? "grid-rows-[1fr] border-t border-graphite" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          {siteContent.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-5 py-4 text-sm uppercase tracking-wide [&:not(:first-child)]:border-t [&:not(:first-child)]:border-graphite"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
