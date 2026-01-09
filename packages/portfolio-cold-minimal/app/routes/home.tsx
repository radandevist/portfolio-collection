import type { MetaFunction } from "react-router";
import { siteConfig } from "~/data/config";

export const meta: MetaFunction = () => {
  return [
    { title: siteConfig.name },
    { name: "description", content: siteConfig.description },
  ];
};

export default function Home() {
  return (
    <div>
      <section className="mb-16">
        <h1 className="text-3xl font-medium mb-4">{siteConfig.name}</h1>
        <p className="text-[--color-text-muted] mb-6">{siteConfig.title}</p>
        <p className="text-[--color-text-muted] leading-relaxed">
          {siteConfig.description} Currently focused on building scalable web 
          applications and exploring new technologies.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-sm text-[--color-text-dim] uppercase tracking-wider mb-6">
          Connect
        </h2>
        <ul className="space-y-3">
          <li>
            <a href={siteConfig.social.github} className="link" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href={siteConfig.social.twitter} className="link" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </li>
          <li>
            <a href={siteConfig.social.linkedin} className="link" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={"mailto:" + siteConfig.email} className="link">
              {siteConfig.email}
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
