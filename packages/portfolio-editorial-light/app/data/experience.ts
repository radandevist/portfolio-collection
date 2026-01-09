export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string[];
  type: "work" | "education";
}

export const experiences: Experience[] = [
  {
    title: "Senior Full-Stack Developer",
    company: "Tech Company",
    location: "Remote",
    startDate: "2022-01",
    endDate: null,
    description: [
      "Led development of core platform features",
      "Architected microservices infrastructure",
      "Mentored junior developers",
    ],
    type: "work",
  },
  {
    title: "Full-Stack Developer",
    company: "Startup Inc",
    location: "San Francisco, CA",
    startDate: "2020-03",
    endDate: "2021-12",
    description: [
      "Built real-time collaboration features",
      "Implemented CI/CD pipelines",
      "Developed RESTful APIs",
    ],
    type: "work",
  },
  {
    title: "Junior Developer",
    company: "Agency Co",
    location: "New York, NY",
    startDate: "2018-06",
    endDate: "2020-02",
    description: [
      "Developed responsive web applications",
      "Collaborated with design team",
    ],
    type: "work",
  },
  {
    title: "B.S. Computer Science",
    company: "University",
    location: "Boston, MA",
    startDate: "2014-09",
    endDate: "2018-05",
    description: ["Graduated with honors"],
    type: "education",
  },
];
