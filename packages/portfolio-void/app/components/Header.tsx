import { Link, useLocation } from "react-router";

const navItems = [
  { href: "/projects", label: "projects" },
  { href: "/blog", label: "blog" },
  { href: "/contact", label: "contact" },
];

export function Header() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="absolute inset-0 bg-[var(--color-background)]/90 backdrop-blur-md" />
      <nav className="relative mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="group flex items-center gap-2"
        >
          <span className="font-mono text-xs text-[var(--color-accent)]">→</span>
          <span className="text-lg font-medium tracking-tight text-[var(--color-foreground)] transition-colors duration-150 group-hover:text-[var(--color-accent-light)]">
            radan
          </span>
        </Link>

        <ul className="flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = location.pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={`relative font-mono text-sm transition-colors duration-150 ${
                    isActive
                      ? "text-[var(--color-foreground)]"
                      : "text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
                  }`}
                >
                  {isActive && (
                    <span className="absolute -left-3 text-[var(--color-accent)]">/</span>
                  )}
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
