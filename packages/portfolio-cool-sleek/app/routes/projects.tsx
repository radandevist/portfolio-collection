import type { MetaFunction } from "react-router";
import { siteConfig } from "~/data/config";
import { projects } from "~/data/projects";

export const meta: MetaFunction = () => {
  return [
    { title: "Projects // " + siteConfig.name },
    { name: "description", content: "Projects by " + siteConfig.name },
  ];
};

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <header className="mb-12">
        <p className="text-[--color-cyan] text-sm mb-2">// work</p>
        <h1 className="text-3xl font-bold">Projects</h1>
      </header>

      <div className="space-y-4">
        {projects.map((project) => (
          <article key={project.title} className="card group">
            <div className="flex items-start justify-between mb-2">
              <h2 className="text-lg font-semibold text-[--color-text] group-hover:text-[--color-cyan] transition-colors">
                {project.title}
              </h2>
              <span className="text-sm text-[--color-text-dim]">{project.year}</span>
            </div>
            
            <p className="text-[--color-text-muted] mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span key={t} className="badge">{t}</span>
              ))}
            </div>
            
            <div className="flex items-center gap-4 text-sm">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  source
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
