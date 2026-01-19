export interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  links: {
    demo?: string;
    github?: string;
  };
  featured?: boolean;
  year: number;
  context?: string; // e.g., "Personal project" or "Built at Company X"
}

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    description:
      "A brief description of what this project does and the problem it solves. Keep it concise and focused on the value delivered.",
    tech: ["TypeScript", "React", "Node.js"],
    links: {
      demo: "https://project-one.example.com",
      github: "https://github.com/radan/project-one",
    },
    featured: true,
    year: 2024,
    context: "Personal project",
  },
  {
    slug: "project-two",
    title: "Project Two",
    description:
      "Another project with a clear description. Focus on what makes this project interesting or unique.",
    tech: ["Go", "PostgreSQL", "Docker"],
    links: {
      github: "https://github.com/radan/project-two",
    },
    featured: true,
    year: 2024,
    context: "Built at Company",
  },
  {
    slug: "project-three",
    title: "Project Three",
    description:
      "A side project exploring new technologies. Mention any interesting challenges or learnings.",
    tech: ["Rust", "WebAssembly"],
    links: {
      demo: "https://project-three.example.com",
    },
    year: 2023,
  },
];

export function getAllProjects(): Project[] {
  return projects.sort((a, b) => b.year - a.year);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured).sort((a, b) => b.year - a.year);
}
