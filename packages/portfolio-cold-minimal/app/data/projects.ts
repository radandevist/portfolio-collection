export interface Project {
  title: string;
  description: string;
  url?: string;
  year: number;
}

export const projects: Project[] = [
  {
    title: "Project Alpha",
    description: "Full-stack application with real-time features",
    url: "https://github.com/radan/project-alpha",
    year: 2024,
  },
  {
    title: "CLI Tool",
    description: "Command-line tool for developer workflows",
    url: "https://github.com/radan/cli-tool",
    year: 2024,
  },
  {
    title: "API Gateway",
    description: "High-performance API gateway with caching",
    url: "https://github.com/radan/api-gateway",
    year: 2023,
  },
  {
    title: "Design System",
    description: "Component library with theming support",
    url: "https://github.com/radan/design-system",
    year: 2023,
  },
];
