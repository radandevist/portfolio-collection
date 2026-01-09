import type { MetaFunction } from "react-router";
import { siteConfig } from "~/data/config";
import { experiences } from "~/data/experience";

export const meta: MetaFunction = () => {
  return [
    { title: "Experience - " + siteConfig.name },
    { name: "description", content: "Experience of " + siteConfig.name },
  ];
};

export default function Experience() {
  return (
    <div className="max-w-3xl mx-auto px-6">
      <h1 className="text-3xl font-bold mb-8">Experience</h1>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <article key={index} className="card">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h2 className="font-semibold">{exp.title}</h2>
                <p className="text-[--color-primary]">{exp.company}</p>
              </div>
              <span className={"badge " + (exp.type === "education" ? "bg-green-100 text-green-700" : "")}>
                {exp.type}
              </span>
            </div>
            
            <div className="text-sm text-[--color-text-dim] mb-3">
              {exp.location} · {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : "Present"}
            </div>
            
            <ul className="space-y-1">
              {exp.description.map((desc, i) => (
                <li key={i} className="text-[--color-text-muted] text-sm flex items-start gap-2">
                  <span className="text-[--color-primary] mt-1">•</span>
                  {desc}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

function formatDate(dateStr: string): string {
  const [year, month] = dateStr.split("-");
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}
