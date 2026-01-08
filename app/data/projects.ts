export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  github?: string;
  live?: string;
  featured: boolean;
  year: number;
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Modern E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    github: "https://github.com/iamradan/ecommerce-platform",
    live: "https://demo.example.com",
    featured: true,
    year: 2024,
  },
  {
    id: "project-2",
    title: "CLI Task Manager",
    description:
      "A beautiful terminal-based task management tool with vim keybindings and cloud sync.",
    technologies: ["Node.js", "TypeScript", "Ink", "SQLite"],
    github: "https://github.com/iamradan/cli-tasks",
    featured: true,
    year: 2024,
  },
  {
    id: "project-3",
    title: "Real-time Collaboration App",
    description:
      "WebSocket-powered collaborative document editor with conflict resolution and presence awareness.",
    technologies: ["Next.js", "Socket.io", "Y.js", "MongoDB"],
    github: "https://github.com/iamradan/collab-editor",
    live: "https://collab.example.com",
    featured: true,
    year: 2023,
  },
  {
    id: "project-4",
    title: "API Gateway Service",
    description:
      "High-performance API gateway with rate limiting, caching, and request transformation.",
    technologies: ["Go", "Redis", "Docker", "Kubernetes"],
    github: "https://github.com/iamradan/api-gateway",
    featured: false,
    year: 2023,
  },
  {
    id: "project-5",
    title: "Portfolio Website",
    description:
      "This minimalist portfolio built with React Router v7 and TailwindCSS.",
    technologies: ["React Router", "TailwindCSS", "MDX", "TypeScript"],
    github: "https://github.com/iamradan/portfolio",
    live: "https://iamradan.dev",
    featured: false,
    year: 2024,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
