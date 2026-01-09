import { Link, NavLink } from "react-router";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
];

export function Header() {
  return (
    <header className="border-b border-[--color-border]">
      <div className="max-w-4xl mx-auto px-6 py-5">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-lg font-semibold gradient-text">
            radan_
          </Link>
          
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    "nav-link text-sm " + (isActive ? "active" : "")
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
