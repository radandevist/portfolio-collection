export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-[var(--color-border)]">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-8">
        <p className="text-sm text-[var(--color-muted)]">
          © {currentYear} radan
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/radan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
            aria-label="GitHub profile"
          >
            github
          </a>
          <a
            href="/rss.xml"
            className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
            aria-label="RSS feed"
          >
            rss
          </a>
        </div>
      </div>
    </footer>
  );
}
