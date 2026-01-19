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
    <div className="mx-auto max-w-2xl px-6 py-16">
      <FadeIn>
        <h1 className="mb-4 text-3xl font-medium text-[var(--color-foreground)]">
          Contact
        </h1>
        <p className="mb-12 text-[var(--color-muted)]">
          Let's connect.
        </p>
      </FadeIn>

      <FadeIn delay={100}>
        <div className="space-y-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="group block"
            >
              <div className="text-sm text-[var(--color-muted)]">{link.label}</div>
              <div className="text-lg text-[var(--color-foreground)] transition-colors group-hover:text-[var(--color-accent)]">
                {link.description}
              </div>
            </a>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={200}>
        <p className="mt-16 text-[var(--color-muted)]">
          Open to interesting projects and opportunities.
        </p>
      </FadeIn>
    </div>
  );
}
