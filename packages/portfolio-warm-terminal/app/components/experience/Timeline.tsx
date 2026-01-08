import { Badge } from "~/components/ui/Badge";
import type { ExperienceItem } from "~/data/experience";
import { cn } from "~/lib/utils";

interface TimelineProps {
  items: ExperienceItem[];
}

const accentColors = [
  { bg: "bg-accent-amber", border: "border-accent-amber", text: "text-accent-amber" },
  { bg: "bg-accent-coral", border: "border-accent-coral", text: "text-accent-coral" },
  { bg: "bg-accent-rose", border: "border-accent-rose", text: "text-accent-rose" },
];

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-[23px] md:left-[29px] top-8 bottom-8 w-0.5 bg-border" />

      <div className="space-y-8">
        {items.map((item, index) => (
          <TimelineItem
            key={item.id}
            item={item}
            colorScheme={accentColors[index % accentColors.length]}
            index={index + 1}
          />
        ))}
      </div>
    </div>
  );
}

interface TimelineItemProps {
  item: ExperienceItem;
  colorScheme: { bg: string; border: string; text: string };
  index: number;
}

function TimelineItem({ item, colorScheme, index }: TimelineItemProps) {
  return (
    <div className="relative flex gap-4 md:gap-6 group">
      {/* Number circle */}
      <div
        className={cn(
          "flex-shrink-0 w-12 h-12 md:w-[60px] md:h-[60px] rounded-full",
          "flex items-center justify-center text-background font-bold text-lg md:text-xl",
          "border-4 z-10 transition-transform group-hover:scale-110",
          colorScheme.bg,
          colorScheme.border
        )}
      >
        {index}
      </div>

      {/* Content card */}
      <div className="card-warm flex-1 min-w-0">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
          <h3 className="font-semibold text-lg text-foreground group-hover:text-accent-amber transition-colors">
            {item.title}
          </h3>
          <span className="text-foreground-dim text-sm shrink-0">
            {item.period}
          </span>
        </div>

        <p className={cn("font-medium mb-3", colorScheme.text)}>
          {item.company}
          {item.location && (
            <span className="text-foreground-muted font-normal">
              {" "}
              · {item.location}
            </span>
          )}
        </p>

        <p className="text-foreground-muted text-sm mb-4">{item.description}</p>

        {item.achievements && item.achievements.length > 0 && (
          <ul className="space-y-1.5 mb-4">
            {item.achievements.map((achievement, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-foreground-muted"
              >
                <span className={cn("mt-1.5", colorScheme.text)}>▸</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        )}

        {item.technologies && item.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
            {item.technologies.map((tech) => (
              <Badge key={tech} variant="default">
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
