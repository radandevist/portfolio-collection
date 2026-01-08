import { Link } from "react-router";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/iamradan" },
  { label: "LinkedIn", href: "https://linkedin.com/in/iamradan" },
  { label: "Twitter", href: "https://twitter.com/iamradan" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-auto">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-foreground-muted text-sm">
            <span className="text-accent-coral">$</span>{" "}
            <span className="text-foreground-dim">echo</span>{" "}
            <span>&copy; {currentYear}</span>{" "}
            <Link to="/" className="text-accent-amber hover:text-accent-coral transition-colors">
              iamradan
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-muted text-sm hover:text-accent-amber transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* ASCII decoration */}
        <div className="mt-8 text-center">
          <p className="text-foreground-dim text-xs font-mono">
            {"< "}crafted with{" "}
            <span className="text-accent-coral">♥</span> and{" "}
            <span className="text-accent-amber">coffee</span>
            {" />"}
          </p>
        </div>
      </div>
    </footer>
  );
}
