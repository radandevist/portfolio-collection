import { Link } from "react-router";
import { Typewriter } from "~/components/Typewriter";
import { FadeIn } from "~/components/FadeIn";
import { GitHubGraph } from "~/components/GitHubGraph";

export default function Index() {
  return (
    <div className="mx-auto max-w-2xl px-6">
      {/* Hero Section */}
      <section className="flex min-h-[75vh] flex-col justify-center py-20">
        {/* Status Badge */}
        <FadeIn delay={0}>
          <div className="status-badge mb-8 w-fit">
            <span className="status-dot" />
            <span>Available for work</span>
          </div>
        </FadeIn>

        {/* Main Title */}
        <FadeIn delay={50}>
          <h1 className="hero-title mb-4 text-5xl font-medium tracking-tight sm:text-6xl md:text-7xl">
            <Typewriter text="radan" delay={80} />
          </h1>
        </FadeIn>

        {/* Role with decoration */}
        <FadeIn delay={500}>
          <p className="hatched-border mb-12 w-fit pb-4 text-xl text-[var(--color-muted-light)] sm:text-2xl">
            Software Developer
          </p>
        </FadeIn>

        {/* Description */}
        <FadeIn delay={600}>
          <p className="mb-10 max-w-md leading-relaxed">
            Crafting digital experiences with precision and care.
            Focused on building software that matters.
          </p>
        </FadeIn>

        {/* CTA Links */}
        <FadeIn delay={700}>
          <div className="flex flex-wrap items-center gap-6">
            <Link
              to="/projects"
              className="arrow-link link-hover text-[var(--color-foreground)]"
            >
              <span>View projects</span>
              <span className="arrow">→</span>
            </Link>
            <Link
              to="/blog"
              className="link-hover text-[var(--color-muted-light)]"
            >
              Read blog
            </Link>
            <Link
              to="/contact"
              className="link-glow text-[var(--color-muted)]"
            >
              Get in touch
            </Link>
          </div>
        </FadeIn>

        {/* Stats Row */}
        <FadeIn delay={800}>
          <div className="mt-16 flex gap-12 border-t border-[var(--color-border)] pt-8">
            <div>
              <div className="number-highlight text-2xl font-medium">3+</div>
              <div className="text-sm text-[var(--color-muted)]">Years coding</div>
            </div>
            <div>
              <div className="number-highlight text-2xl font-medium">10+</div>
              <div className="text-sm text-[var(--color-muted)]">Projects built</div>
            </div>
            <div>
              <div className="number-highlight text-2xl font-medium">∞</div>
              <div className="text-sm text-[var(--color-muted)]">Curiosity</div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* GitHub Activity */}
      <section className="pb-20">
        <FadeIn delay={850}>
          <div className="mb-4">
            <span className="terminal-prompt font-mono text-sm text-[var(--color-muted)]">
              ~/activity
            </span>
          </div>
          <GitHubGraph />
        </FadeIn>
      </section>
    </div>
  );
}
