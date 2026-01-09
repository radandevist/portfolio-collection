import { siteConfig } from "~/data/config";

export function Footer() {
  return (
    <footer className="bg-[--color-bg] border-t border-[--color-border] py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[--color-text-muted]">
            {new Date().getFullYear()} {siteConfig.name}
          </p>
          
          <div className="flex items-center gap-6">
            {siteConfig.social.github && (
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[--color-text-muted] hover:text-[--color-text] transition-colors"
              >
                GitHub
              </a>
            )}
            {siteConfig.social.twitter && (
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[--color-text-muted] hover:text-[--color-text] transition-colors"
              >
                Twitter
              </a>
            )}
            {siteConfig.social.linkedin && (
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[--color-text-muted] hover:text-[--color-text] transition-colors"
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
