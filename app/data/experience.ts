export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location?: string;
  period: string;
  startDate: string;
  endDate?: string;
  description: string;
  achievements?: string[];
  technologies?: string[];
  type: "work" | "education" | "freelance";
}

export const experience: ExperienceItem[] = [
  {
    id: "exp-1",
    title: "Senior Full-Stack Developer",
    company: "Tech Innovation Co.",
    location: "Remote",
    period: "2023 - Present",
    startDate: "2023-01",
    description:
      "Leading development of customer-facing applications and mentoring junior developers. Architecting scalable solutions for high-traffic systems.",
    achievements: [
      "Reduced page load time by 40% through performance optimization",
      "Mentored a team of 3 junior developers",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
    type: "work",
  },
  {
    id: "exp-2",
    title: "Full-Stack Developer",
    company: "Digital Solutions Ltd",
    location: "San Francisco, CA",
    period: "2021 - 2023",
    startDate: "2021-03",
    endDate: "2023-01",
    description:
      "Built and maintained multiple web applications for enterprise clients. Collaborated with design and product teams to deliver user-centric solutions.",
    achievements: [
      "Developed a real-time dashboard serving 10K+ daily users",
      "Migrated legacy codebase to modern React architecture",
      "Integrated third-party APIs and payment systems",
    ],
    technologies: ["React", "TypeScript", "Python", "Django", "MongoDB"],
    type: "work",
  },
  {
    id: "exp-3",
    title: "Frontend Developer",
    company: "StartupXYZ",
    location: "New York, NY",
    period: "2019 - 2021",
    startDate: "2019-06",
    endDate: "2021-02",
    description:
      "Joined as the second engineer and helped build the product from ground up. Focused on creating responsive, accessible user interfaces.",
    achievements: [
      "Built the initial product MVP in 3 months",
      "Established frontend architecture and coding standards",
      "Grew team from 2 to 8 engineers",
    ],
    technologies: ["Vue.js", "JavaScript", "SCSS", "Firebase"],
    type: "work",
  },
  {
    id: "exp-4",
    title: "Freelance Web Developer",
    company: "Self-employed",
    period: "2017 - 2019",
    startDate: "2017-01",
    endDate: "2019-05",
    description:
      "Delivered custom web solutions for small businesses and startups. Managed full project lifecycle from requirements to deployment.",
    achievements: [
      "Completed 20+ projects for diverse clients",
      "Maintained 100% client satisfaction rating",
      "Built long-term relationships with repeat clients",
    ],
    technologies: ["JavaScript", "PHP", "WordPress", "MySQL"],
    type: "freelance",
  },
];
