"use client";

import { useEffect, useState } from "react";
import { siteContent } from "@/lib/site-content";

/** Total time the splash owns the screen: hold, then fade. Keep in sync with
 *  the `intro-*` keyframes in globals.css. */
const INTRO_MS = 2000;

/**
 * Entry splash: the logo alone on white for two seconds, then the overlay
 * fades away to reveal the page.
 *
 * The animation is pure CSS and the overlay ships in the initial HTML, so
 * there is no flash of the page underneath and it still clears itself if
 * hydration never happens. React only unmounts the leftover node afterwards.
 */
export function Intro() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Freeze the page while the splash is up, otherwise a stray wheel or
    // arrow key scrolls the hero out of view behind the overlay.
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => {
      document.body.style.overflow = overflow;
      setDone(true);
    }, INTRO_MS + 100);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = overflow;
    };
  }, []);

  if (done) return null;

  return (
    <div className="intro" aria-hidden="true">
      <div className="intro-logo">
        <img
          src="/logo.png"
          alt={siteContent.footer.name}
          width={900}
          height={555}
          className="h-28 w-auto sm:h-36 lg:h-48"
        />
      </div>
    </div>
  );
}
