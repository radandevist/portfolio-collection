import { useMemo } from "react";

interface ContributionDay {
  level: 0 | 1 | 2 | 3 | 4;
  date: string;
}

function generateMockContributions(): ContributionDay[][] {
  const weeks: ContributionDay[][] = [];
  const today = new Date();

  for (let w = 19; w >= 0; w--) {
    const week: ContributionDay[] = [];
    for (let d = 0; d < 7; d++) {
      const date = new Date(today);
      date.setDate(date.getDate() - (w * 7 + (6 - d)));

      const isWeekend = d === 0 || d === 6;
      const random = Math.random();

      let level: 0 | 1 | 2 | 3 | 4;
      if (isWeekend) {
        if (random < 0.5) level = 0;
        else if (random < 0.7) level = 1;
        else if (random < 0.85) level = 2;
        else if (random < 0.95) level = 3;
        else level = 4;
      } else {
        if (random < 0.2) level = 0;
        else if (random < 0.4) level = 1;
        else if (random < 0.65) level = 2;
        else if (random < 0.85) level = 3;
        else level = 4;
      }

      week.push({
        level,
        date: date.toISOString().split("T")[0],
      });
    }
    weeks.push(week);
  }

  return weeks;
}

export function GitHubGraph() {
  const contributions = useMemo(() => generateMockContributions(), []);

  const totalContributions = useMemo(() => {
    return contributions.flat().reduce((acc, day) => {
      const counts = [0, 3, 8, 15, 25];
      return acc + counts[day.level];
    }, 0);
  }, [contributions]);

  return (
    <div className="border border-[var(--color-border)] p-5">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-mono text-xs text-[var(--color-muted)]">
          {totalContributions} contributions
        </span>
        <span className="font-mono text-xs text-[var(--color-muted)]">
          last 20 weeks
        </span>
      </div>

      <div className="overflow-x-auto">
        <div className="flex gap-[3px]">
          {contributions.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-[3px]">
              {week.map((day, dayIndex) => (
                <div
                  key={`${weekIndex}-${dayIndex}`}
                  className="contribution-cell"
                  data-level={day.level}
                  title={`${day.date}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-end gap-2">
        <span className="text-[10px] text-[var(--color-muted)]">Less</span>
        {[0, 1, 2, 3, 4].map((level) => (
          <div
            key={level}
            className="contribution-cell"
            data-level={level}
          />
        ))}
        <span className="text-[10px] text-[var(--color-muted)]">More</span>
      </div>
    </div>
  );
}
