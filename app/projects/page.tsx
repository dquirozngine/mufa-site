import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProjectGallery } from "@/components/ProjectGallery";
import { siteContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: `${siteContent.projects.label} — ${siteContent.meta.title}`,
  description: siteContent.meta.description,
};

export default function ProjectsPage() {
  const { projects } = siteContent;

  return (
    <>
      <Header />
      <main>
        <section className="border-b border-graphite px-5 pb-10 pt-20 lg:px-8 lg:pb-12 lg:pt-32">
          <h1 className="font-display text-[clamp(3.5rem,15vw,13rem)] font-bold uppercase leading-[0.84] tracking-tightest">
            {projects.title}
          </h1>
        </section>

        {/* One band per project, so the page stays a single scroll rather than
            a grid of links out to detail pages. */}
        {projects.items.map((project, i) => (
          <section
            key={project.title}
            className="border-b border-graphite px-5 py-16 lg:px-8 lg:py-24"
          >
            <div className="grid gap-8 lg:grid-cols-[6rem_1fr] lg:gap-16">
              <span className="text-xs uppercase tracking-wide tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Text left, images right. Stacks on phones, text first. */}
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                <div>
                  <h2 className="font-display text-2xl font-bold uppercase leading-tight tracking-display sm:text-4xl">
                    {project.title}
                  </h2>
                  {project.year ? (
                    <p className="mt-2 text-xs uppercase tracking-wide tabular-nums">
                      {project.year}
                    </p>
                  ) : null}

                  <div className="mt-6 space-y-4">
                    {project.paragraphs.map((paragraph, j) => (
                      <p
                        key={j}
                        className="hyphens-auto text-justify text-xs leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Sticks while the long text scrolls past, so the images stay
                    in view instead of stranding an empty column. */}
                <div className="lg:sticky lg:top-24 lg:self-start">
                  <ProjectGallery title={project.title} images={project.images} />
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}
