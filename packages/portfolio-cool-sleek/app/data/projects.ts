export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  year: number;
}

export const projects: Project[] = [
  {
    title: "Project Alpha",
    description: "Full-stack application with real-time collaboration and modern UI.",
    tech: ["React", "Node.js", "PostgreSQL", "WebSocket"],
    github: "https://github.com/radan/project-alpha",
    demo: "https://project-alpha.demo",
    year: 2024,
  },
  {
    title: "CLI Tool",
    description: "Command-line tool for automating development workflows.",
    tech: ["Rust", "Tokio"],
    github: "https://github.com/radan/cli-tool",
    year: 2024,
  },
  {
    title: "API Gateway",
    description: "High-performance gateway with caching and monitoring.",
    tech: ["Go", "Redis", "Docker"],
    github: "https://github.com/radan/api-gateway",
    year: 2023,
  },
  {
    title: "Design System",
    description: "Component library with theming and documentation.",
    tech: ["TypeScript", "React", "Storybook"],
    github: "https://github.com/radan/design-system",
    demo: "https://design-system.demo",
    year: 2023,
  },
];
