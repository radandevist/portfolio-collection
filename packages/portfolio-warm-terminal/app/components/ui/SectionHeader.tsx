import { cn } from "~/lib/utils";

interface SectionHeaderProps {
  title: string;
  description?: string;
  command?: string;
  className?: string;
}

export function SectionHeader({
  title,
  description,
  command,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-8", className)}>
      {command && (
        <div className="font-mono text-sm mb-2">
          <span className="text-accent-coral">$</span>
          <span className="text-foreground-muted ml-2">{command}</span>
        </div>
      )}
      <h1 className="text-2xl md:text-3xl font-semibold text-foreground">
        {title}
      </h1>
      {description && (
        <p className="mt-2 text-foreground-muted">{description}</p>
      )}
    </div>
  );
}

interface SectionMarkerProps {
  variant?: "asterisks" | "dashes" | "dots";
  className?: string;
}

export function SectionMarker({
  variant = "asterisks",
  className,
}: SectionMarkerProps) {
  const markers = {
    asterisks: "* * *",
    dashes: "───",
    dots: "• • •",
  };

  return (
    <div
      className={cn(
        "text-foreground-dim text-center py-8 tracking-[0.5em] font-mono text-sm",
        className
      )}
    >
      {markers[variant]}
    </div>
  );
}
