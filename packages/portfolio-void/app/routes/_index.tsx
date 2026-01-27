import { Link } from "react-router";
import { Typewriter } from "~/components/Typewriter";
import { FadeIn } from "~/components/FadeIn";
import { GitHubGraph } from "~/components/GitHubGraph";
import { AnimatedCounter } from "~/components/AnimatedCounter";

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
              <Typewriter text="I am Radan" delay={80} />
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
                <svg className="arrow w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link
                to="/blog"
                className="link-hover text-[var(--color-muted-light)]"
              >
                Read blog
              </Link>
              <Link
                to="/contact"
                className="link-hover text-[var(--color-muted)]"
              >
                Get in touch
              </Link>
            </div>
          </FadeIn>
        </section>
      </div>

      {/* GitHub Activity - Full Width Section */}
      <section className="mx-auto max-w-4xl overflow-hidden px-6 pb-16">
        <FadeIn delay={0}>
          <GitHubGraph />
        </FadeIn>
      </section>

      {/* Stats Row */}
      <div className="mx-auto max-w-2xl px-6">
        <section className="pb-20">
          <FadeIn delay={0}>
            <div className="hatched-divider mb-8" />
            <div className="flex gap-12">
              <div>
                <div className="number-highlight text-2xl font-medium">
                  <AnimatedCounter end={3} suffix="+" />
                </div>
                <div className="text-sm text-[var(--color-muted)]">Years coding</div>
              </div>
              <div>
                <div className="number-highlight text-2xl font-medium">
                  <AnimatedCounter end={10} suffix="+" />
                </div>
                <div className="text-sm text-[var(--color-muted)]">Projects built</div>
              </div>
              <div>
                <div className="number-highlight text-2xl font-medium">
                  <svg className="w-6 h-6 inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z"/>
                  </svg>
                </div>
                <div className="text-sm text-[var(--color-muted)]">Curiosity</div>
              </div>
            </div>
          </FadeIn>
        </section>
      </div>
    </>
  );
}
