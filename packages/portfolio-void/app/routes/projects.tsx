import type { MetaFunction } from "react-router";
import { FadeIn } from "~/components/FadeIn";
import { getAllProjects, type Project } from "~/lib/projects";

export const meta: MetaFunction = () => [
  { title: "Projects — radan" },
  { name: "description", content: "Selected projects and work by radan." },
];

export default function Projects() {
  const projects = getAllProjects();

  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      <FadeIn>
        <h1 className="mb-4 text-3xl font-medium tracking-tight text-[var(--color-foreground)]">
          Projects
        </h1>
        <p className="mb-16 text-[var(--color-muted)]">
          A selection of things I've built.
        </p>
      </FadeIn>

      <div className="space-y-16">
        {projects.map((project, index) => (
          <FadeIn key={project.slug} delay={100 + index * 100}>
            <ProjectItem project={project} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

function ProjectItem({ project }: { project: Project }) {
  return (
    <article className="group item-hover">
      <div className="mb-3 flex items-baseline justify-between gap-4">
        <h2 className="text-xl font-medium text-[var(--color-foreground)] transition-colors duration-300 group-hover:text-[var(--color-accent)]">
          {project.title}
        </h2>
        <span className="shrink-0 text-sm text-[var(--color-muted)]">
          {project.year}
        </span>
      </div>

      {project.context && (
        <p className="mb-3 text-sm text-[var(--color-muted)]">
          {project.context}
        </p>
      )}

      <p className="mb-5 leading-relaxed text-[var(--color-muted-light)]">
        {project.description}
      </p>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <div className="flex flex-wrap gap-3">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-sm text-[var(--color-muted)] transition-colors duration-300 group-hover:text-[var(--color-muted-light)]"
            >
              {t}
            </span>
          ))}
        </div>

        {(project.links.demo || project.links.github) && (
          <>
            <span className="text-[var(--color-border)]">·</span>
            <div className="flex gap-4">
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-hover text-sm text-[var(--color-accent)]"
                >
                  Demo
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-hover text-sm text-[var(--color-accent)]"
                >
                  GitHub
                </a>
              )}
            </div>
          </>
        )}
      </div>
    </article>
  );
}
