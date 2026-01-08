import { TypeWriter } from "~/components/ui/TypeWriter";
import { TerminalWindow } from "~/components/ui/TerminalHeader";
import { AsciiArt, ASCII_LOGO } from "~/components/ui/AsciiArt";
import { Link } from "react-router";

const roles = [
  "Full-Stack Developer",
  "Open Source Enthusiast",
  "Problem Solver",
  "Coffee Addict",
];

const interests = [
  "building modern web applications",
  "exploring new technologies",
  "writing clean, maintainable code",
  "contributing to open source",
];

export function HeroTerminal() {
  return (
    <div className="space-y-8">
      {/* ASCII Logo - Hidden on mobile */}
      <div className="hidden md:block text-center">
        <AsciiArt art={ASCII_LOGO} animate className="inline-block" />
      </div>

      {/* Mobile Logo */}
      <div className="md:hidden text-center">
        <h1 className="text-2xl font-bold text-accent-amber">iamradan</h1>
        <p className="text-foreground-muted text-sm mt-1">full-stack developer</p>
      </div>

      {/* Terminal Window */}
      <TerminalWindow title="~/.profile">
        <div className="space-y-4">
          {/* whoami */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-accent-coral">$</span>
              <span className="text-foreground">whoami</span>
            </div>
            <div className="text-accent-amber pl-4">
              <TypeWriter
                text={roles}
                speed={80}
                deleteSpeed={40}
                delay={2000}
                loop
              />
            </div>
          </div>

          {/* cat interests.txt */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-accent-coral">$</span>
              <span className="text-foreground">cat interests.txt</span>
            </div>
            <div className="text-foreground-muted pl-4">
              <TypeWriter
                text={interests}
                speed={50}
                deleteSpeed={30}
                delay={2500}
                loop
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-accent-coral">$</span>
              <span className="text-foreground">echo $LOCATION</span>
            </div>
            <div className="text-foreground-muted pl-4">
              Working remotely from Earth{" "}
              <span className="text-accent-amber">🌍</span>
            </div>
          </div>

          {/* Status */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-accent-coral">$</span>
              <span className="text-foreground">cat status.md</span>
            </div>
            <div className="text-foreground-muted pl-4">
              <span className="text-green-500">●</span> Available for new opportunities
            </div>
          </div>
        </div>
      </TerminalWindow>

      {/* Quick Links */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-4 py-2 bg-accent-amber text-background font-medium rounded-lg hover:bg-accent-orange transition-colors"
        >
          <span>View Projects</span>
          <span>→</span>
        </Link>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 px-4 py-2 border border-border text-foreground-muted rounded-lg hover:border-accent-amber hover:text-accent-amber transition-colors"
        >
          <span>Read Blog</span>
          <span>→</span>
        </Link>
      </div>

      {/* Social Links */}
      <div className="flex items-center justify-center gap-6 pt-4">
        <a
          href="https://github.com/iamradan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground-muted hover:text-accent-amber transition-colors"
        >
          GitHub
        </a>
        <span className="text-foreground-dim">·</span>
        <a
          href="https://linkedin.com/in/iamradan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground-muted hover:text-accent-amber transition-colors"
        >
          LinkedIn
        </a>
        <span className="text-foreground-dim">·</span>
        <a
          href="https://twitter.com/iamradan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground-muted hover:text-accent-amber transition-colors"
        >
          Twitter
        </a>
        <span className="text-foreground-dim">·</span>
        <a
          href="mailto:hello@iamradan.dev"
          className="text-foreground-muted hover:text-accent-amber transition-colors"
        >
          Email
        </a>
      </div>
    </div>
  );
}
