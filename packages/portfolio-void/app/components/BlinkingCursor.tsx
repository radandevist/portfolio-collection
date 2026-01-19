export function BlinkingCursor() {
  return (
    <span
      className="ml-1 inline-block h-[1.1em] w-[2px] bg-[var(--color-accent)] animate-pulse"
      aria-hidden="true"
    />
  );
}
