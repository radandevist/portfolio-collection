import type { Route } from "./+types/skills";
import { SectionHeader } from "~/components/ui/SectionHeader";
import { SkillCategory, SkillLegend } from "~/components/skills/SkillCategory";
import { skillCategories } from "~/data/skills";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Skills | iamradan" },
    {
      name: "description",
      content:
        "My technical skills and tools I use for building web applications - from React and TypeScript to Node.js and AWS.",
    },
  ];
}

export default function Skills() {
  return (
    <div>
      <SectionHeader
        title="Skills & Tools"
        description="Technologies I work with daily."
        command="cat ~/skills.json | jq"
      />

      {/* Legend */}
      <div className="mb-8">
        <SkillLegend />
      </div>

      {/* Skill Categories Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category, index) => (
          <SkillCategory key={category.id} category={category} index={index} />
        ))}
      </div>

      {/* Currently Learning */}
      <div className="mt-12 p-6 bg-background-secondary border border-border rounded-xl">
        <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
          <span className="text-accent-amber">📚</span>
          Currently Exploring
        </h3>
        <p className="text-foreground-muted text-sm mb-4">
          Always learning something new. Here's what I'm diving into:
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="badge">Rust</span>
          <span className="badge">WebAssembly</span>
          <span className="badge">Edge Computing</span>
          <span className="badge">AI/ML Basics</span>
        </div>
      </div>

      {/* Tools Section */}
      <div className="mt-8 p-6 bg-background-secondary border border-border rounded-xl">
        <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
          <span className="text-accent-coral">⚙️</span>
          Development Setup
        </h3>
        <div className="grid gap-4 md:grid-cols-2 text-sm text-foreground-muted">
          <div>
            <span className="text-foreground-dim">Editor:</span>{" "}
            <span className="text-foreground">VS Code + Vim motions</span>
          </div>
          <div>
            <span className="text-foreground-dim">Terminal:</span>{" "}
            <span className="text-foreground">Warp + zsh</span>
          </div>
          <div>
            <span className="text-foreground-dim">OS:</span>{" "}
            <span className="text-foreground">macOS / Linux</span>
          </div>
          <div>
            <span className="text-foreground-dim">Theme:</span>{" "}
            <span className="text-foreground">Custom dark theme</span>
          </div>
        </div>
      </div>
    </div>
  );
}
