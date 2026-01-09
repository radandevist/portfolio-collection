import type { MetaFunction } from "react-router";
import { siteConfig } from "~/data/config";
import { projects } from "~/data/projects";

export const meta: MetaFunction = () => {
  return [
    { title: "Projects - " + siteConfig.name },
    { name: "description", content: "Projects by " + siteConfig.name },
  ];
};

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>

      <div className="space-y-6">
        {projects.map((project) => (
          <article key={project.title} className="card">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                  {project.featured && (
                    <span className="badge bg-[--color-primary]/10 text-[--color-primary]">
                      Featured
                    </span>
                  )}
                </div>
                <span className="text-sm text-[--color-text-dim]">{project.year}</span>
              </div>
            </div>
            
            <p className="text-[--color-text-muted] mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span key={t} className="badge">{t}</span>
              ))}
            </div>
            
            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link text-sm"
                >
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link text-sm"
                >
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
