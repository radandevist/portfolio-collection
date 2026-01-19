import type { MetaFunction } from "react-router";
import { FadeIn } from "~/components/FadeIn";

export const meta: MetaFunction = () => [
  { title: "Contact — radan" },
  { name: "description", content: "Get in touch with radan." },
];

const links = [
  {
    label: "Email",
    href: "mailto:hello@radan.dev",
    description: "hello@radan.dev",
  },
  {
    label: "GitHub",
    href: "https://github.com/radan",
    description: "github.com/radan",
  },
];

export default function Contact() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      <FadeIn>
        <h1 className="mb-4 text-3xl font-medium tracking-tight text-[var(--color-foreground)]">
          Contact
        </h1>
        <p className="mb-16 text-[var(--color-muted)]">
          Let's connect.
        </p>
      </FadeIn>

      <div className="space-y-8">
        {links.map((link, index) => (
          <FadeIn key={link.label} delay={100 + index * 100}>
            <a
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="group item-hover block"
            >
              <div className="text-sm text-[var(--color-muted)] transition-colors duration-300 group-hover:text-[var(--color-muted-light)]">
                {link.label}
              </div>
              <div className="text-xl font-medium text-[var(--color-foreground)] transition-all duration-300 group-hover:text-[var(--color-accent)] group-hover:tracking-wide">
                {link.description}
              </div>
            </a>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={300}>
        <p className="mt-20 text-[var(--color-muted)]">
          Open to interesting projects and opportunities.
        </p>
      </FadeIn>
    </div>
  );
}
