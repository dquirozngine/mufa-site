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

  if (images.length === 0) return null;

  return (
    <div>
      <img
        src={images[active]}
        alt={`${title} — image ${active + 1} of ${images.length}`}
        className="w-full border border-graphite"
      />

      {images.length > 0 ? (
        <ul className="mt-4 flex flex-wrap gap-3">
          {images.map((src, i) => (
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
                />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
