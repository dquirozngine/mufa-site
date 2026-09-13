import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: `${siteContent.bio.label} — ${siteContent.meta.title}`,
  description: siteContent.bio.paragraphs[0],
};

export default function BioPage() {
  const { bio } = siteContent;

  return (
    <>
      <Header />
      <main>
        <section className="border-b border-graphite px-5 pb-12 pt-20 lg:px-8 lg:pb-16 lg:pt-32">
          <h1 className="font-display text-[clamp(3.5rem,15vw,13rem)] font-bold uppercase leading-[0.84] tracking-tightest">
            {bio.title}
          </h1>
        </section>

        <section className="border-b border-graphite px-5 py-16 lg:px-8 lg:py-24">
          {/* Portrait in the left column, prose in a measured column beside it.
              On phones the image leads and the text follows. */}
          <div className="grid gap-10 lg:grid-cols-[22rem_1fr] lg:gap-20">
            <img
              src={bio.portrait}
              alt={bio.portraitAlt}
              width={1200}
              height={1600}
              className="w-full max-w-sm border border-graphite"
            />

            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-bold uppercase leading-tight tracking-display sm:text-3xl">
                {bio.name}
              </h2>
              {/* Collective, set in the original Japanese. */}
              <p className="mt-2 text-xs leading-snug">{bio.collective}</p>

              {/* Set at the same size as the collective line above, so the
                  whole block reads as one small-type column. */}
              <div className="mt-8 space-y-6 border-t border-graphite pt-8">
                {bio.paragraphs.map((paragraph, i) => (
                  <p
                    key={i}
                    className="hyphens-auto text-justify text-xs leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-graphite px-5 py-16 lg:px-8 lg:py-24">
          <h2 className="text-xs uppercase tracking-wide">
            {bio.education.label}
          </h2>

          <div className="mt-8 border-t border-graphite">
            {bio.education.items.map((item) => (
              <div
                key={item.title}
                className="grid gap-x-8 gap-y-2 py-6 sm:grid-cols-[6rem_1fr] [&:not(:first-child)]:rule-top"
              >
                <span className="text-xs uppercase tracking-wide tabular-nums">
                  {item.year}
                </span>
                <div className="max-w-2xl">
                  <p className="font-display text-lg font-bold uppercase leading-tight tracking-display sm:text-xl">
                    {item.title}
                  </p>
                  <p className="mt-2 text-base leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
