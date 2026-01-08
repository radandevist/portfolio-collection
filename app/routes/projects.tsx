import type { Route } from "./+types/projects";
import { SectionHeader } from "~/components/ui/SectionHeader";
import { ProjectCard } from "~/components/projects/ProjectCard";
import { projects } from "~/data/projects";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Projects | iamradan" },
    {
      name: "description",
      content:
        "Explore my portfolio of web development projects, from full-stack applications to CLI tools.",
    },
  ];
}

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div>
      <SectionHeader
        title="Projects"
        description="A collection of things I've built."
        command="ls ~/projects"
      />

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="mb-12">
          <h2 className="text-sm font-medium text-foreground-muted mb-4 flex items-center gap-2">
            <span className="text-accent-amber">★</span>
            Featured
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <section>
          <h2 className="text-sm font-medium text-foreground-muted mb-4">
            Other Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <p className="text-foreground-muted mb-4">
          Want to see more? Check out my GitHub for additional projects.
        </p>
        <a
          href="https://github.com/iamradan"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-accent-amber hover:text-accent-coral transition-colors"
        >
          <span>View GitHub Profile</span>
          <span>→</span>
        </a>
      </div>
    </div>
  );
}
