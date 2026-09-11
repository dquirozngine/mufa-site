import { siteContent } from "@/lib/site-content";

export function Hero() {
  const { hero } = siteContent;

  return (
    <section className="border-b border-graphite px-5 pb-10 pt-20 lg:px-8 lg:pb-12 lg:pt-32">
      {/* Headline and standfirst share a row, bottom-aligned so the small text
          sits on the baseline of the display type rather than floating beside
          it. Stacks on phones, where there's no room for two columns. */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
        {/* text-[clamp()] rather than responsive steps so the display type scales
            continuously instead of jumping at breakpoints. */}
        <h1 className="font-display text-[clamp(3.5rem,15vw,13rem)] font-bold uppercase leading-[0.84] tracking-tightest">
          {hero.title}
        </h1>

        <p className="max-w-md text-base leading-relaxed lg:max-w-sm lg:pb-2 lg:text-right">
          {hero.standfirst}
        </p>
      </div>
    </section>
  );
}
