import { NavLink } from "react-router";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
];

export function Header() {
  return (
    <header className="mb-16">
      <nav className="flex items-center gap-6">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              "nav-link text-sm" + (isActive ? " text-[--color-text]" : "")
            }
            data-active={undefined}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
