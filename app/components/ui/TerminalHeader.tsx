import { cn } from "~/lib/utils";

interface TerminalHeaderProps {
  command: string;
  className?: string;
  showCursor?: boolean;
}

export function TerminalHeader({
  command,
  className,
  showCursor = true,
}: TerminalHeaderProps) {
  return (
    <div className={cn("font-mono text-lg mb-6", className)}>
      <span className="text-accent-coral">$</span>
      <span className="text-accent-amber ml-2">{command}</span>
      {showCursor && (
        <span className="animate-blink text-foreground ml-1">_</span>
      )}
    </div>
  );
}

interface TerminalWindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function TerminalWindow({
  title = "terminal",
  children,
  className,
}: TerminalWindowProps) {
  return (
    <div
      className={cn(
        "bg-background-secondary border border-border rounded-xl overflow-hidden",
        className
      )}
    >
      {/* Terminal Header Bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-background border-b border-border">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-accent-rose" />
          <div className="w-3 h-3 rounded-full bg-accent-amber" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="ml-2 text-foreground-muted text-sm">{title}</span>
      </div>

      {/* Terminal Content */}
      <div className="p-4 md:p-6 font-mono text-sm">{children}</div>
    </div>
  );
}
