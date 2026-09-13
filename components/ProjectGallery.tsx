"use client";

import { useState } from "react";

type ProjectGalleryProps = {
  title: string;
  images: string[];
};

/**
 * Main image with a thumbnail strip beneath it. Clicking a thumbnail promotes
 * it into the main slot.
 */
export function ProjectGallery({ title, images }: ProjectGalleryProps) {
  const [active, setActive] = useState(0);
  // Images whose file is missing. Dropping them keeps a deleted photograph
  // from leaving a dead thumbnail that swaps the main slot to nothing.
  const [broken, setBroken] = useState<string[]>([]);

  const shown = images.filter((src) => !broken.includes(src));
  const current = shown[Math.min(active, shown.length - 1)];

  if (shown.length === 0) return null;

  return (
    <div>
      <img
        src={current}
        alt={`${title} — image ${active + 1} of ${shown.length}`}
        className="w-full border border-graphite"
        onError={() =>
          setBroken((prev) => (prev.includes(current) ? prev : [...prev, current]))
        }
      />

      {shown.length > 0 ? (
        <ul className="mt-4 flex flex-wrap gap-3">
          {shown.map((src, i) => (
            <li key={src}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-current={i === active}
                aria-label={`Show image ${i + 1}`}
                className={`block border transition-opacity duration-slow ${
                  i === active
                    ? "border-graphite opacity-100"
                    : "border-graphite/30 opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={src}
                  alt=""
                  className="h-16 w-24 object-cover sm:h-20 sm:w-28"
                  onError={() =>
                    setBroken((prev) => (prev.includes(src) ? prev : [...prev, src]))
                  }
                />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
