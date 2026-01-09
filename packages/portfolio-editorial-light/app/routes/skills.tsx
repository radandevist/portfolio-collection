import type { MetaFunction } from "react-router";
import { siteConfig } from "~/data/config";
import { skillCategories } from "~/data/skills";

export const meta: MetaFunction = () => {
  return [
    { title: "Skills - " + siteConfig.name },
    { name: "description", content: "Skills of " + siteConfig.name },
  ];
};

export default function Skills() {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <h1 className="text-3xl font-bold mb-8">Skills</h1>

      <div className="grid sm:grid-cols-2 gap-6">
        {skillCategories.map((category) => (
          <div key={category.name} className="card">
            <h2 className="font-semibold mb-4">{category.name}</h2>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="badge">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
