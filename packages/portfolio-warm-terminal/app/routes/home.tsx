import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import { siteConfig } from "~/data/config";
import { projects } from "~/data/projects";

export const meta: MetaFunction = () => {
  return [
    { title: siteConfig.name + " | " + siteConfig.title },
    { name: "description", content: siteConfig.description },
  ];
};

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <section className="mb-20">
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500" />
            <div className="terminal-dot bg-yellow-500" />
            <div className="terminal-dot bg-green-500" />
            <span className="ml-2 text-[--color-text-muted] text-sm">~/.intro</span>
          </div>
          <div className="terminal-body">
            <div className="mb-6">
              <p className="text-[--color-text-muted] mb-2">$ whoami</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-[--color-accent]">{siteConfig.name}</span>
              </h1>
            </div>
            <div className="mb-6">
              <p className="text-[--color-text-muted] mb-2">$ cat role.txt</p>
              <p className="text-xl text-[--color-coral]">{siteConfig.title}</p>
            </div>
            <div>
              <p className="text-[--color-text-muted] mb-2">$ echo $TAGLINE</p>
              <p className="text-[--color-text] typing">{siteConfig.tagline}</p>
              <span className="cursor" />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">
            <span className="text-[--color-coral]">const</span>{" "}
            <span className="text-[--color-accent]">featuredProjects</span>{" "}
            <span className="text-[--color-text-muted]">=</span>
          </h2>
          <Link to="/projects" className="link text-sm">
            View all &rarr;
          </Link>
        </div>
        <div className="grid gap-6 stagger">
          {featuredProjects.map((project) => (
            <article key={project.title} className="card group">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-[--color-accent] group-hover:text-[--color-accent-hover]">
                  {project.title}
                </h3>
                <span className="text-xs text-[--color-text-dim]">{project.year}</span>
              </div>
              <p className="text-[--color-text-muted] mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="badge">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-8">
          <span className="text-[--color-coral]">function</span>{" "}
          <span className="text-[--color-accent]">connect</span>
          <span className="text-[--color-text-muted]">()</span>
        </h2>
        <div className="card">
          <p className="text-[--color-text-muted] mb-4">
            Interested in working together or just want to chat?
          </p>
          <a href={"mailto:" + siteConfig.email} className="link">
            {siteConfig.email} &rarr;
          </a>
        </div>
      </section>
    </div>
  );
}
