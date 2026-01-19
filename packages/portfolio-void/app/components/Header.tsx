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
      <div className="absolute inset-0 bg-[var(--color-background)]/80 backdrop-blur-md" />
      <nav className="relative mx-auto flex max-w-2xl items-center justify-between px-6 py-5">
        <Link
          to="/"
          className="link-glow text-lg font-medium tracking-tight text-[var(--color-foreground)]"
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
                  className={`relative text-sm transition-colors duration-300 ${
                    isActive
                      ? "text-[var(--color-foreground)]"
                      : "text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className="absolute -bottom-1 left-0 h-px w-full bg-[var(--color-accent)]"
                      style={{
                        boxShadow: "0 0 8px var(--color-accent-glow)",
                      }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
