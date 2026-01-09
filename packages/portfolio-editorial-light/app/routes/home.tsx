import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import { siteConfig } from "~/data/config";
import { projects } from "~/data/projects";

export const meta: MetaFunction = () => {
  return [
    { title: siteConfig.name + " - " + siteConfig.title },
    { name: "description", content: siteConfig.description },
  ];
};

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto px-6">
      <section className="py-16 md:py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I am {siteConfig.name}
          </h1>
          <p className="text-xl text-[--color-text-muted] mb-6">
            {siteConfig.title}. {siteConfig.tagline}.
          </p>
          <p className="text-[--color-text-muted] leading-relaxed mb-8">
            I build full-stack applications with modern technologies. 
            Passionate about clean code, user experience, and solving 
            interesting problems.
          </p>
          <div className="flex gap-3">
            <Link to="/projects" className="btn btn-primary">
              View Projects
            </Link>
            <Link to="/about" className="btn btn-secondary">
              About Me
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="section-title">Featured Projects</h2>
          <Link to="/projects" className="link text-sm">
            View all
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <article key={project.title} className="card card-interactive">
              <div className="mb-3">
                <h3 className="font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-[--color-text-muted] line-clamp-2">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.slice(0, 3).map((t) => (
                  <span key={t} className="badge">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-12">
        <h2 className="section-title">Get in Touch</h2>
        <div className="card">
          <p className="text-[--color-text-muted] mb-4">
            Interested in working together? Feel free to reach out.
          </p>
          <a href={"mailto:" + siteConfig.email} className="link">
            {siteConfig.email}
          </a>
        </div>
      </section>
    </div>
  );
}
