import { useMemo } from "react";

interface ContributionDay {
  level: 0 | 1 | 2 | 3 | 4;
  date: string;
}

// Seeded random for consistent SSR/client results
function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function generateMockContributions(): ContributionDay[][] {
  const weeks: ContributionDay[][] = [];

  for (let w = 52; w >= 0; w--) {
    const week: ContributionDay[] = [];
    for (let d = 0; d < 7; d++) {
      const isWeekend = d === 0 || d === 6;
      // Use week and day as seed for deterministic "random"
      const seed = w * 7 + d + 1000;
      const random = seededRandom(seed);

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
        date: "",
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
    <div className="hatched-box mx-auto p-5 max-w-full min-[789px]:w-fit">
      <div className="mb-4 flex items-center justify-between gap-4">
        <span className="font-mono text-xs text-[var(--color-muted)] whitespace-nowrap">
          {totalContributions} contributions
        </span>
        <span className="font-mono text-xs text-[var(--color-muted)] whitespace-nowrap">
          last year
        </span>
      </div>

      <div className="overflow-x-auto pb-1">
        <div className="flex gap-[3px] w-fit">
          {contributions.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-[3px]">
              {week.map((day, dayIndex) => (
                <div
                  key={`${weekIndex}-${dayIndex}`}
                  className="contribution-cell"
                  data-level={day.level}
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
