import type { MetaFunction } from "react-router";
import { siteConfig } from "~/data/config";
import { experiences } from "~/data/experience";

export const meta: MetaFunction = () => {
  return [
    { title: "Experience | " + siteConfig.name },
    { name: "description", content: "Experience of " + siteConfig.name },
  ];
};

export default function Experience() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <header className="mb-12">
        <p className="text-[--color-text-muted] mb-2">$ git log --oneline career</p>
        <h1 className="text-4xl font-bold text-[--color-accent]">Experience</h1>
      </header>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-[--color-border]" />
        
        <div className="space-y-12 stagger">
          {experiences.map((exp, index) => (
            <article key={index} className="relative pl-8">
              <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[--color-accent] -translate-x-1/2" />
              
              <div className="card">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h2 className="text-lg font-semibold text-[--color-accent]">
                      {exp.title}
                    </h2>
                    <p className="text-[--color-coral]">{exp.company}</p>
                  </div>
                  <span className={
                    "px-2 py-0.5 text-xs rounded " +
                    (exp.type === "work" 
                      ? "bg-[--color-accent]/20 text-[--color-accent]"
                      : exp.type === "education"
                      ? "bg-[--color-coral]/20 text-[--color-coral]"
                      : "bg-[--color-orange]/20 text-[--color-orange]")
                  }>
                    {exp.type}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-[--color-text-dim] mb-4">
                  <span>{exp.location}</span>
                  <span>•</span>
                  <span>
                    {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : "Present"}
                  </span>
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-2 text-[--color-text-muted]">
                      <span className="text-[--color-orange] mt-1">→</span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function formatDate(dateStr: string): string {
  const [year, month] = dateStr.split("-");
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}
