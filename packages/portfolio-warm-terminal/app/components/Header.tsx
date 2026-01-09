import { Link, NavLink } from "react-router";

const navItems = [
  { to: "/", label: "home" },
  { to: "/about", label: "about" },
  { to: "/projects", label: "projects" },
  { to: "/blog", label: "blog" },
  { to: "/experience", label: "experience" },
  { to: "/skills", label: "skills" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[--color-bg]/80 backdrop-blur-md border-b border-[--color-border]">
      <div className="max-w-5xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-[--color-accent] hover:text-[--color-accent-hover] transition-colors">
            ~/radan
          </Link>
          
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    "text-sm transition-colors " +
                    (isActive
                      ? "text-[--color-accent]"
                      : "text-[--color-text-muted] hover:text-[--color-text]")
                  }
                >
                  ./{item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          
          <MobileMenu />
        </nav>
      </div>
    </header>
  );
}

function MobileMenu() {
  return (
    <div className="md:hidden">
      <details className="group">
        <summary className="list-none cursor-pointer p-2 text-[--color-text-muted] hover:text-[--color-text]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </summary>
        <div className="absolute right-4 mt-2 w-48 bg-[--color-bg-secondary] border border-[--color-border] rounded-lg shadow-xl overflow-hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                "block px-4 py-3 text-sm transition-colors " +
                (isActive
                  ? "bg-[--color-bg-tertiary] text-[--color-accent]"
                  : "text-[--color-text-muted] hover:bg-[--color-bg-tertiary] hover:text-[--color-text]")
              }
            >
              ./{item.label}
            </NavLink>
          ))}
        </div>
      </details>
    </div>
  );
}
