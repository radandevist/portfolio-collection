import { Link } from "react-router";
import { Typewriter } from "~/components/Typewriter";
import { FadeIn } from "~/components/FadeIn";
import { GitHubGraph } from "~/components/GitHubGraph";

export default function Index() {
  return (
    <>
      {/* Hero Section */}
      <div className="mx-auto max-w-2xl px-6">
        <section className="py-20">
          {/* Status Badge */}
          <FadeIn delay={0}>
            <div className="status-badge mb-8 w-fit">
              <span className="status-dot" />
              <span>Available for work</span>
            </div>
          </FadeIn>

          {/* Main Title */}
          <FadeIn delay={0}>
            <h1 className="hero-title mb-4 text-5xl font-medium tracking-tight sm:text-6xl md:text-7xl">
              <Typewriter text="radan" delay={80} />
            </h1>
          </FadeIn>

          {/* Role with decoration */}
          <FadeIn delay={0}>
            <p className="hatched-border mb-12 w-fit pb-4 text-xl text-[var(--color-muted-light)] sm:text-2xl">
              Software Developer
            </p>
          </FadeIn>

          {/* Description */}
          <FadeIn delay={0}>
            <p className="mb-10 max-w-md leading-relaxed">
              Crafting digital experiences with precision and care.
              Focused on building software that matters.
            </p>
          </FadeIn>

          {/* CTA Links */}
          <FadeIn delay={0}>
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
        </section>
      </div>

      {/* GitHub Activity - Full Width Section */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <FadeIn delay={0}>
          <GitHubGraph />
        </FadeIn>
      </section>

      {/* Stats Row */}
      <div className="mx-auto max-w-2xl px-6">
        <section className="pb-20">
          <FadeIn delay={0}>
            <div className="flex gap-12 border-t border-[var(--color-border)] pt-8">
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
      </div>
    </>
  );
}
