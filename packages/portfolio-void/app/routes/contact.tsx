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
    value: "hello@radan.dev",
    description: "Best way to reach me",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/1234567890",
    value: "Chat on WhatsApp",
    description: "Quick messages",
  },
  {
    label: "GitHub",
    href: "https://github.com/radan",
    value: "github.com/radan",
    description: "Check out my code",
  },
  {
    label: "X",
    href: "https://x.com/radan",
    value: "x.com/radan",
    description: "Follow me",
  },
  {
    label: "Reddit",
    href: "https://reddit.com/u/radan",
    value: "u/radan",
    description: "Join the discussion",
  },
];

export default function Contact() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      {/* Header */}
      <FadeIn>
        <div className="mb-16">
          <p className="terminal-prompt mb-2 font-mono text-sm text-[var(--color-muted)]">
            ~/contact
          </p>
          <h1 className="mb-4 text-3xl font-medium tracking-tight text-[var(--color-foreground)]">
            Get in touch
          </h1>
          <p className="text-[var(--color-muted-light)]">
            Have an idea? Let's talk.
          </p>
        </div>
      </FadeIn>

      {/* Contact Links */}
      <div className="space-y-6">
        {links.map((link, index) => (
          <FadeIn key={link.label} delay={50 + index * 50}>
            <a
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="corner-brackets group block p-6 transition-colors duration-200"
            >
              <div className="mb-1 font-mono text-xs uppercase tracking-wider text-[var(--color-muted)]">
                {link.label}
              </div>
              <div className="mb-2 text-xl font-medium text-[var(--color-foreground)] transition-colors duration-200 group-hover:text-[var(--color-accent-light)]">
                {link.value}
              </div>
              <div className="text-sm text-[var(--color-muted-light)]">
                {link.description}
              </div>
            </a>
          </FadeIn>
        ))}
      </div>

      {/* Availability */}
      <FadeIn delay={150}>
        <div className="mt-16">
          <div className="hatched-divider mb-8" />
          <div className="flex items-center gap-3">
            <span className="status-dot" />
            <span className="text-sm text-[var(--color-muted-light)]">
              Currently available for freelance and full-time opportunities
            </span>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
