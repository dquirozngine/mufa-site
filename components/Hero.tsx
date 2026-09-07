import { siteContent } from "@/lib/site-content";

export function Hero() {
  const { hero } = siteContent;

  return (
    <section className="border-b border-graphite px-5 pb-12 pt-20 lg:px-8 lg:pb-16 lg:pt-32">
      {/* text-[clamp()] rather than responsive steps so the display type scales
          continuously instead of jumping at breakpoints. */}
      <h1 className="font-display text-[clamp(3.5rem,15vw,13rem)] font-bold uppercase leading-[0.84] tracking-tightest">
        {hero.title}
      </h1>

      <div className="mt-10 border-t border-graphite pt-6">
        <p className="max-w-2xl text-base leading-relaxed sm:text-lg">
          {hero.standfirst}
        </p>
      </div>
    </section>
  );
}
