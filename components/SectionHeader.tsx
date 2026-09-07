type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={`mx-auto max-w-3xl ${
        align === "center" ? "text-center" : "text-center lg:mx-0 lg:text-left"
      }`}
    >
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-serif text-3xl font-semibold text-ink sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-8 text-soft">{description}</p>
      ) : null}
    </div>
  );
}
