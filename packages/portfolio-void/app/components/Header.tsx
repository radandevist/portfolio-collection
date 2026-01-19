import { Link, useLocation } from "react-router";

const navItems = [
  { href: "/projects", label: "projects" },
  { href: "/blog", label: "blog" },
  { href: "/contact", label: "contact" },
];

export function Header() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--color-background)]/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-2xl items-center justify-between px-6 py-6">
        <Link
          to="/"
          className="text-lg font-medium text-[var(--color-foreground)] transition-opacity hover:opacity-70"
        >
          radan
        </Link>

        <ul className="flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = location.pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={`text-sm transition-colors ${
                    isActive
                      ? "text-[var(--color-foreground)]"
                      : "text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
                  }`}
                >
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
