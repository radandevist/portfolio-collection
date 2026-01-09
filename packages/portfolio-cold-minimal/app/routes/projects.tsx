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
    <div>
      <h1 className="text-3xl font-medium mb-12">Projects</h1>

      <ul className="space-y-8">
        {projects.map((project) => (
          <li key={project.title}>
            <article>
              <div className="flex items-baseline justify-between gap-4 mb-1">
                {project.url ? (
                  <a href={project.url} className="link font-medium" target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                ) : (
                  <span className="font-medium">{project.title}</span>
                )}
                <span className="text-sm text-[--color-text-dim]">{project.year}</span>
              </div>
              <p className="text-[--color-text-muted]">{project.description}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
