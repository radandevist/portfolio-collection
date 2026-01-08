import { cn } from "~/lib/utils";

type BadgeVariant = "default" | "accent" | "outline";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default:
    "bg-background-secondary border-border text-foreground-muted hover:border-accent-amber/50 hover:text-foreground",
  accent:
    "bg-accent-amber/10 border-accent-amber/30 text-accent-amber hover:bg-accent-amber/20",
  outline:
    "bg-transparent border-border text-foreground-muted hover:border-foreground-dim hover:text-foreground",
};

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-md border",
        "transition-colors duration-200",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
