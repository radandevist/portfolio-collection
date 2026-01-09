import type { MetaFunction } from "react-router";
import { siteConfig } from "~/data/config";
import { skillCategories } from "~/data/skills";

export const meta: MetaFunction = () => {
  return [
    { title: "Skills | " + siteConfig.name },
    { name: "description", content: "Skills of " + siteConfig.name },
  ];
};

export default function Skills() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <header className="mb-12">
        <p className="text-[--color-text-muted] mb-2">$ neofetch --skills</p>
        <h1 className="text-4xl font-bold text-[--color-accent]">Skills</h1>
      </header>

      <div className="grid md:grid-cols-2 gap-6 stagger">
        {skillCategories.map((category) => (
          <div key={category.name} className="card">
            <h2 className="text-lg font-semibold mb-4">
              <span className="text-[--color-coral]">type</span>{" "}
              <span className="text-[--color-accent]">{category.name}</span>{" "}
              <span className="text-[--color-text-muted]">=</span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
