import { Link, useLocation } from "react-router";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { href: "/projects", label: "projects" },
  { href: "/blog", label: "blog" },
  { href: "/contact", label: "contact" },
];

export function Header() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="absolute inset-0 bg-[var(--color-background)]/60 backdrop-blur-lg" />
      <nav className="relative mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-2 px-6 py-4 min-[426px]:justify-between">
        <div className="flex items-center justify-between w-full min-[426px]:w-auto">
          <Link
            to="/"
            className="group flex items-center gap-2"
          >
            <span className="font-mono text-xs text-[var(--color-accent)]">→</span>
            <span className="text-lg font-medium tracking-tight text-[var(--color-foreground)] transition-colors duration-150 group-hover:text-[var(--color-accent-light)]">
              radan
            </span>
          </Link>
          <div className="min-[426px]:hidden">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <ul className="flex items-center gap-4 min-[426px]:gap-6">
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
          <div className="hidden min-[426px]:block">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
