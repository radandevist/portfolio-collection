import { cn } from "~/lib/utils";

interface AsciiArtProps {
  art: string;
  className?: string;
  animate?: boolean;
}

export function AsciiArt({ art, className, animate = false }: AsciiArtProps) {
  return (
    <pre
      className={cn(
        "font-mono text-accent-amber text-xs leading-tight select-none whitespace-pre",
        animate && "animate-fade-in",
        className
      )}
    >
      {art}
    </pre>
  );
}

// Pre-defined ASCII art
export const ASCII_LOGO = ` _                              _
(_) __ _ _ __ ___  _ __ __ _  __| | __ _ _ __
| |/ _\` | '_ \` _ \\| '__/ _\` |/ _\` |/ _\` | '_ \\
| | (_| | | | | | | | | (_| | (_| | (_| | | | |
|_|\\__,_|_| |_| |_|_|  \\__,_|\\__,_|\\__,_|_| |_|`;

export const ASCII_LOGO_SMALL = `╭─────────────────╮
│   iamradan      │
│   ─────────     │
│   full-stack    │
│   developer     │
╰─────────────────╯`;

export const ASCII_DIVIDER = `─────────────────────────────────────────`;

export const ASCII_ARROW = `>>`;
