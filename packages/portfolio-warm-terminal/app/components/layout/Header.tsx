import { useState } from "react";
import { Link, NavLink } from "react-router";
import { cn } from "~/lib/utils";

const navLinks = [
  { to: "/", label: "home" },
  { to: "/blog", label: "blog" },
  { to: "/projects", label: "projects" },
  { to: "/experience", label: "experience" },
  { to: "/skills", label: "skills" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-accent-amber font-semibold text-lg hover:text-accent-coral transition-colors"
          >
            <span className="text-accent-coral">~</span>/iamradan
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2 text-sm transition-colors rounded-lg",
                    isActive
                      ? "text-accent-amber bg-background-secondary"
                      : "text-foreground-muted hover:text-foreground hover:bg-background-secondary"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground-muted hover:text-foreground transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-64 bg-background-secondary border-l border-border",
          "transform transition-transform duration-300 ease-out md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between h-16 px-4 border-b border-border">
            <span className="text-foreground-muted text-sm">menu</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-foreground-muted hover:text-foreground transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Nav Links */}
          <nav className="flex-1 p-4">
            <ul className="space-y-1">
              {navLinks.map((link, index) => (
                <li
                  key={link.to}
                  className="animate-slide-in-right opacity-0"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <NavLink
                    to={link.to}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center gap-3 px-3 py-3 rounded-lg transition-colors",
                        isActive
                          ? "text-accent-amber bg-background"
                          : "text-foreground-muted hover:text-foreground hover:bg-background"
                      )
                    }
                  >
                    <span className="text-accent-coral">$</span>
                    <span>{link.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Footer */}
          <div className="p-4 border-t border-border">
            <p className="text-foreground-dim text-xs">
              <span className="text-accent-amber">iamradan</span> · Full-Stack Developer
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
