export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Go", "Rust", "SQL"],
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js", "Vue", "TailwindCSS", "HTML/CSS"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "FastAPI", "GraphQL", "REST"],
  },
  {
    name: "Database",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
  },
  {
    name: "DevOps",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Linux"],
  },
  {
    name: "Tools",
    skills: ["Git", "Vim", "VS Code", "Figma"],
  },
];
