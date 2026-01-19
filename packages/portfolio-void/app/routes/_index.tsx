import { Link } from "react-router";
import { Typewriter } from "~/components/Typewriter";
import { FadeIn } from "~/components/FadeIn";

export default function Index() {
  return (
    <div className="mx-auto max-w-2xl px-6">
      <section className="flex min-h-[70vh] flex-col justify-center py-24">
        <FadeIn direction="none">
          <h1 className="hero-title mb-6 text-5xl font-medium tracking-tight md:text-6xl">
            <Typewriter text="radan" delay={120} />
          </h1>
        </FadeIn>

        <FadeIn delay={700}>
          <p className="text-xl text-[var(--color-muted)]">Software developer</p>
        </FadeIn>

        <FadeIn delay={900}>
          <p className="mt-10 max-w-md text-[var(--color-muted-light)] leading-relaxed">
            Building software with care. Focused on crafting elegant
            solutions and exploring what's possible.
          </p>
        </FadeIn>

        <FadeIn delay={1100}>
          <div className="mt-12 flex items-center gap-8">
            <Link
              to="/projects"
              className="link-hover text-[var(--color-foreground)]"
            >
              View projects
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
  );
}
