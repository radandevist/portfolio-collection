import { Link, NavLink } from "react-router";
import { siteConfig } from "~/data/config";

const navItems = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
  { to: "/experience", label: "Experience" },
  { to: "/skills", label: "Skills" },
];

export function Header() {
  return (
    <header className="bg-[--color-bg] border-b border-[--color-border] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <nav className="flex items-center justify-between h-16">
          <Link to="/" className="font-semibold text-lg hover:text-[--color-primary] transition-colors">
            {siteConfig.name}
          </Link>
          
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors " +
                    (isActive
                      ? "bg-[--color-bg-tertiary] text-[--color-text]"
                      : "text-[--color-text-muted] hover:text-[--color-text] hover:bg-[--color-bg-secondary]")
                  }
                >
                  {item.label}
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
      <details className="group relative">
        <summary className="list-none cursor-pointer p-2 rounded-lg hover:bg-[--color-bg-secondary]">
          <svg className="w-6 h-6 text-[--color-text-muted]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </summary>
        <div className="absolute right-0 top-full mt-2 w-48 bg-[--color-bg] border border-[--color-border] rounded-xl shadow-lg overflow-hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                "block px-4 py-3 text-sm font-medium transition-colors " +
                (isActive
                  ? "bg-[--color-bg-tertiary] text-[--color-primary]"
                  : "text-[--color-text-muted] hover:bg-[--color-bg-secondary]")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </details>
    </div>
  );
}
