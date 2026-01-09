export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  year: number;
}

export const projects: Project[] = [
  {
    title: "Project Alpha",
    description: "A full-stack application with real-time collaboration, authentication, and a clean user interface.",
    tech: ["React", "Node.js", "PostgreSQL", "WebSocket"],
    github: "https://github.com/radan/project-alpha",
    demo: "https://project-alpha.demo",
    featured: true,
    year: 2024,
  },
  {
    title: "CLI Tool",
    description: "Command-line tool that automates development tasks and improves workflow efficiency.",
    tech: ["Rust", "Tokio"],
    github: "https://github.com/radan/cli-tool",
    featured: true,
    year: 2024,
  },
  {
    title: "API Gateway",
    description: "High-performance API gateway with rate limiting, caching, and monitoring.",
    tech: ["Go", "Redis", "Docker"],
    github: "https://github.com/radan/api-gateway",
    featured: true,
    year: 2023,
  },
  {
    title: "Design System",
    description: "Component library with accessible components, theming support, and documentation.",
    tech: ["TypeScript", "React", "Storybook"],
    github: "https://github.com/radan/design-system",
    demo: "https://design-system.demo",
    year: 2023,
  },
  {
    title: "Data Pipeline",
    description: "ETL pipeline for processing large datasets with fault tolerance.",
    tech: ["Python", "Apache Spark", "Airflow"],
    github: "https://github.com/radan/data-pipeline",
    year: 2022,
  },
];
