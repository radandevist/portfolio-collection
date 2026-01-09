import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import { siteConfig } from "~/data/config";
import { projects } from "~/data/projects";

export const meta: MetaFunction = () => {
  return [
    { title: siteConfig.name + " // " + siteConfig.title },
    { name: "description", content: siteConfig.description },
  ];
};

export default function Home() {
  const recentProjects = projects.slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <section className="mb-20">
        <p className="text-[--color-cyan] mb-2 text-sm">// hello world</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          I am <span className="gradient-text">{siteConfig.name}</span>
        </h1>
        <p className="text-xl text-[--color-text-muted] mb-6">
          {siteConfig.title}
        </p>
        <p className="text-[--color-text-muted] max-w-xl leading-relaxed mb-8">
          {siteConfig.description} I focus on building performant, 
          accessible, and well-designed applications.
        </p>
        <div className="flex items-center gap-6">
          <a href={"mailto:" + siteConfig.email} className="link">
            {siteConfig.email}
          </a>
          <a href={siteConfig.social.github} className="link" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-sm text-[--color-text-dim] uppercase tracking-wider">
            // recent projects
          </h2>
          <Link to="/projects" className="link text-sm">
            view all
          </Link>
        </div>
        <div className="space-y-4">
          {recentProjects.map((project) => (
            <article key={project.title} className="card group">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-[--color-text] group-hover:text-[--color-cyan] transition-colors">
                  {project.title}
                </h3>
                <span className="text-sm text-[--color-text-dim]">{project.year}</span>
              </div>
              <p className="text-[--color-text-muted] text-sm mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="badge">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
