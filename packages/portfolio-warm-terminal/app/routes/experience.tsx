import type { Route } from "./+types/experience";
import { SectionHeader } from "~/components/ui/SectionHeader";
import { Timeline } from "~/components/experience/Timeline";
import { experience } from "~/data/experience";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Experience | iamradan" },
    {
      name: "description",
      content:
        "My professional journey as a Full-Stack Developer, from freelancing to leading development teams.",
    },
  ];
}

export default function Experience() {
  return (
    <div>
      <SectionHeader
        title="Experience"
        description="My professional journey so far."
        command="cat ~/experience.log"
      />

      <Timeline items={experience} />

      {/* Download Resume CTA */}
      <div className="mt-12 text-center">
        <p className="text-foreground-muted mb-4">
          Want the full picture?
        </p>
        <a
          href="/resume.pdf"
          className="inline-flex items-center gap-2 px-4 py-2 border border-border text-foreground-muted rounded-lg hover:border-accent-amber hover:text-accent-amber transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <span>Download Resume</span>
        </a>
      </div>
    </div>
  );
}
