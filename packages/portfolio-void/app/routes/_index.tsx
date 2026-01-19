import { Link } from "react-router";
import { BlinkingCursor } from "~/components/BlinkingCursor";
import { FadeIn } from "~/components/FadeIn";

export default function Index() {
  return (
    <div className="mx-auto max-w-2xl px-6">
      <section className="flex min-h-[60vh] flex-col justify-center py-20">
        <FadeIn>
          <h1 className="mb-4 text-4xl font-medium text-[var(--color-foreground)]">
            radan
            <BlinkingCursor />
          </h1>
        </FadeIn>

        <FadeIn delay={100}>
          <p className="text-xl text-[var(--color-muted)]">Software developer</p>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="mt-8 max-w-md leading-relaxed">
            Building software with care. Currently focused on crafting elegant
            solutions and exploring new technologies.
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="mt-10 flex gap-6">
            <Link
              to="/projects"
              className="text-[var(--color-foreground)] link-underline"
            >
              View projects
            </Link>
            <Link
              to="/contact"
              className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
            >
              Get in touch
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
