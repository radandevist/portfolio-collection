import { siteConfig } from "~/data/config";

export function Footer() {
  return (
    <footer className="border-t border-[--color-border] py-8 mt-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[--color-text-dim]">
            {new Date().getFullYear()} // radan
          </p>
          
          <div className="flex items-center gap-6">
            {siteConfig.social.github && (
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[--color-text-dim] hover:text-[--color-cyan] transition-colors text-sm"
              >
                github
              </a>
            )}
            {siteConfig.social.twitter && (
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[--color-text-dim] hover:text-[--color-cyan] transition-colors text-sm"
              >
                twitter
              </a>
            )}
            {siteConfig.social.linkedin && (
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[--color-text-dim] hover:text-[--color-cyan] transition-colors text-sm"
              >
                linkedin
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
