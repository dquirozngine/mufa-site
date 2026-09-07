import { siteContent } from "@/lib/site-content";

export function Footer() {
  const { footer } = siteContent;
  // Static export: the year is baked in at build time, which is fine — a
  // rebuild happens on every deploy. Doing it client-side would only risk a
  // hydration mismatch for no real gain.
  const year = new Date().getFullYear();

  return (
    <footer className="px-5 py-16 lg:px-8">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto] lg:gap-20">
        <div>
          <img
            src="/logo.png"
            alt={footer.name}
            width={900}
            height={555}
            className="h-12 w-auto"
          />
        </div>

        {footer.columns.map((column) => (
          <div key={column.heading}>
            <p className="text-xs uppercase tracking-wide">{column.heading}</p>
            <div className="mt-4 flex flex-col gap-2">
              {column.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="text-sm uppercase tracking-wide transition hover:text-accent"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 border-t border-graphite pt-6">
        <p className="text-xs uppercase tracking-wide">
          © {year} {footer.name}
        </p>
      </div>
    </footer>
  );
}
