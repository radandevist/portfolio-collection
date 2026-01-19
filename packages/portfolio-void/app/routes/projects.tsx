import type { MetaFunction } from "react-router";
import { FadeIn } from "~/components/FadeIn";
import { getAllProjects, type Project } from "~/lib/projects";

export const meta: MetaFunction = () => [
  { title: "Projects - radan" },
  { name: "description", content: "Selected projects and work by radan." },
];

export default function Projects() {
  const projects = getAllProjects();

  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      {/* Header */}
      <FadeIn>
        <div className="mb-16">
          <p className="terminal-prompt mb-2 font-mono text-sm text-[var(--color-muted)]">
            ~/projects
          </p>
          <h1 className="mb-4 text-3xl font-medium tracking-tight text-[var(--color-foreground)]">
            Projects
          </h1>
          <p className="text-[var(--color-muted-light)]">
            Things I've built and shipped.
          </p>
        </div>
      </FadeIn>

      {/* Projects List */}
      <div className="space-y-12">
        {projects.map((project, index) => (
          <FadeIn key={project.slug} delay={50 + index * 50}>
            <ProjectItem project={project} index={index} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

function ProjectItem({ project, index }: { project: Project; index: number }) {
  return (
    <article className="item-card group py-1">
      {/* Project Number */}
      <div className="mb-3 font-mono text-xs text-[var(--color-muted)]">
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Title Row */}
      <div className="mb-3 flex items-baseline justify-between gap-4">
        <h2 className="text-xl font-medium text-[var(--color-foreground)] transition-colors duration-200 group-hover:text-[var(--color-accent-light)]">
          {project.title}
        </h2>
        <span className="shrink-0 font-mono text-sm text-[var(--color-muted)]">
          {project.year}
        </span>
      </div>

      {/* Context */}
      {project.context && (
        <p className="mb-3 text-sm text-[var(--color-muted)]">
          {project.context}
        </p>
      )}

      {/* Description */}
      <p className="mb-5 leading-relaxed text-[var(--color-muted-light)]">
        {project.description}
      </p>

      {/* Tech & Links */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-xs text-[var(--color-muted)] transition-colors duration-200 group-hover:text-[var(--color-muted-light)]"
            >
              {t}
            </span>
          ))}
        </div>

        {(project.links.demo || project.links.github) && (
          <>
            <span className="text-[var(--color-border-light)]">/</span>
            <div className="flex gap-4">
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="arrow-link text-sm text-[var(--color-accent)]"
                >
                  <span>Demo</span>
                  <svg className="arrow w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="arrow-link text-sm text-[var(--color-accent)]"
                >
                  <span>Code</span>
                  <svg className="arrow w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                </a>
              )}
            </div>
          </>
        )}
      </div>
    </article>
  );
}
