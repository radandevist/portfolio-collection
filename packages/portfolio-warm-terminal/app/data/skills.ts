export interface Skill {
  name: string;
  level?: "learning" | "comfortable" | "proficient" | "expert";
}

export interface SkillCategory {
  id: string;
  name: string;
  icon?: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend",
    skills: [
      { name: "React", level: "expert" },
      { name: "TypeScript", level: "expert" },
      { name: "Next.js", level: "proficient" },
      { name: "TailwindCSS", level: "expert" },
      { name: "Vue.js", level: "comfortable" },
      { name: "HTML/CSS", level: "expert" },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    skills: [
      { name: "Node.js", level: "expert" },
      { name: "Python", level: "proficient" },
      { name: "Go", level: "comfortable" },
      { name: "PostgreSQL", level: "proficient" },
      { name: "MongoDB", level: "proficient" },
      { name: "Redis", level: "comfortable" },
    ],
  },
  {
    id: "devops",
    name: "DevOps & Tools",
    skills: [
      { name: "Docker", level: "proficient" },
      { name: "AWS", level: "comfortable" },
      { name: "Git", level: "expert" },
      { name: "CI/CD", level: "proficient" },
      { name: "Linux", level: "proficient" },
      { name: "Kubernetes", level: "learning" },
    ],
  },
  {
    id: "other",
    name: "Other",
    skills: [
      { name: "GraphQL", level: "comfortable" },
      { name: "REST APIs", level: "expert" },
      { name: "Testing", level: "proficient" },
      { name: "Agile/Scrum", level: "proficient" },
      { name: "UI/UX Design", level: "comfortable" },
    ],
  },
];

export const allSkills = skillCategories.flatMap((cat) => cat.skills);
