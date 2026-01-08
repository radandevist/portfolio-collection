import { Badge } from "~/components/ui/Badge";
import type { SkillCategory as SkillCategoryType } from "~/data/skills";
import { cn } from "~/lib/utils";

interface SkillCategoryProps {
  category: SkillCategoryType;
  index: number;
}

const levelColors: Record<string, string> = {
  learning: "bg-blue-500/20 border-blue-500/30 text-blue-400",
  comfortable: "bg-green-500/20 border-green-500/30 text-green-400",
  proficient: "bg-accent-amber/20 border-accent-amber/30 text-accent-amber",
  expert: "bg-accent-coral/20 border-accent-coral/30 text-accent-coral",
};

const accentBorders = [
  "border-l-accent-amber",
  "border-l-accent-coral",
  "border-l-accent-rose",
  "border-l-accent-orange",
];

export function SkillCategory({ category, index }: SkillCategoryProps) {
  return (
    <div
      className={cn(
        "bg-background-card border border-border rounded-xl p-6",
        "border-l-4",
        accentBorders[index % accentBorders.length]
      )}
    >
      <h3 className="font-semibold text-lg text-foreground mb-4">
        {category.name}
      </h3>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <Badge
            key={skill.name}
            className={cn(
              skill.level && levelColors[skill.level]
            )}
          >
            {skill.name}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export function SkillLegend() {
  const levels = [
    { key: "expert", label: "Expert" },
    { key: "proficient", label: "Proficient" },
    { key: "comfortable", label: "Comfortable" },
    { key: "learning", label: "Learning" },
  ];

  return (
    <div className="flex flex-wrap items-center gap-4 text-sm text-foreground-muted">
      <span className="text-foreground-dim">Legend:</span>
      {levels.map((level) => (
        <div key={level.key} className="flex items-center gap-1.5">
          <span
            className={cn(
              "w-2 h-2 rounded-full",
              level.key === "expert" && "bg-accent-coral",
              level.key === "proficient" && "bg-accent-amber",
              level.key === "comfortable" && "bg-green-500",
              level.key === "learning" && "bg-blue-500"
            )}
          />
          <span>{level.label}</span>
        </div>
      ))}
    </div>
  );
}
