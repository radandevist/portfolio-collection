import { useEffect, useState, useCallback } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(headings[0]?.id || "");

  const handleScroll = useCallback(() => {
    const headingElements = headings
      .map((h) => document.getElementById(h.id))
      .filter((el): el is HTMLElement => el !== null);

    const scrollPosition = window.scrollY + 100;

    // Find the heading that's currently in view
    for (let i = headingElements.length - 1; i >= 0; i--) {
      const element = headingElements[i];
      if (element.offsetTop <= scrollPosition) {
        setActiveId(element.id);
        return;
      }
    }

    // If no heading found, set to first one
    if (headingElements.length > 0) {
      setActiveId(headingElements[0].id);
    }
  }, [headings]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  if (headings.length === 0) return null;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 76;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
      setActiveId(id);
    }
  };

  return (
    <nav aria-label="Table of contents" className="toc-sidebar">
      <h2 className="mb-4 text-xs font-medium uppercase tracking-wide text-[var(--color-muted)]">
        On this page
      </h2>
      <ul className="space-y-1 border-l border-[var(--color-border)] pl-3">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              onClick={(e) => handleClick(e, heading.id)}
              className={`flex items-center gap-3 text-sm py-1.5 transition-all duration-150 ${
                activeId === heading.id
                  ? "text-[var(--color-foreground)] font-medium"
                  : "text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
              }`}
            >
              <span
                className={`shrink-0 text-[var(--color-accent)] transition-opacity duration-150 ${
                  activeId === heading.id ? "opacity-100" : "opacity-0"
                }`}
              >
                →
              </span>
              <span className="ml-2">{heading.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
