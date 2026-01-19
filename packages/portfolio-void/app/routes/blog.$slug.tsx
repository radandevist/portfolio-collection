import { useMemo, useEffect, useState, useRef } from "react";
import { Link, data } from "react-router";
import type { Route } from "./+types/blog.$slug";
import { getMDXComponent } from "mdx-bundler/client";
import { getPost } from "~/lib/mdx.server";
import { formatDate } from "~/lib/utils";
import { FadeIn } from "~/components/FadeIn";
import { TableOfContents } from "~/components/TableOfContents";
import { CodeBlockEnhancer } from "~/components/CodeBlockEnhancer";

export function meta({ data }: Route.MetaArgs) {
  if (!data) {
    return [{ title: "Post not found — radan" }];
  }
  return [
    { title: `${data.post.title} — radan` },
    { name: "description", content: data.post.description },
    { property: "og:title", content: data.post.title },
    { property: "og:description", content: data.post.description },
    { property: "og:type", content: "article" },
    { property: "article:published_time", content: data.post.date },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  const post = await getPost(params.slug);

  if (!post) {
    throw data(null, { status: 404 });
  }

  return { post };
}

function ArticleSpacer({ headings }: { headings: { id: string }[] }) {
  const [spacerHeight, setSpacerHeight] = useState(0);
  const spacerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateSpacer = () => {
      if (headings.length === 0) {
        setSpacerHeight(0);
        return;
      }

      // Find the last heading element
      const lastHeadingId = headings[headings.length - 1].id;
      const lastHeading = document.getElementById(lastHeadingId);

      if (!lastHeading || !spacerRef.current) {
        setSpacerHeight(0);
        return;
      }

      const headerOffset = 76; // Same as TOC scroll offset
      const viewportHeight = window.innerHeight;
      const lastHeadingTop = lastHeading.getBoundingClientRect().top + window.scrollY;
      const articleEnd = spacerRef.current.getBoundingClientRect().top + window.scrollY;

      // Content below the last heading (before spacer)
      const contentBelowLastHeading = articleEnd - lastHeadingTop;

      // Minimum space needed for last heading to scroll to top with footer visible
      const minSpaceNeeded = viewportHeight - headerOffset;

      // Calculate needed spacer height
      const neededHeight = Math.max(0, minSpaceNeeded - contentBelowLastHeading);

      setSpacerHeight(neededHeight);
    };

    // Calculate after content is rendered
    const timer = setTimeout(calculateSpacer, 100);
    window.addEventListener("resize", calculateSpacer);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", calculateSpacer);
    };
  }, [headings]);

  return (
    <div
      ref={spacerRef}
      style={{ height: spacerHeight }}
      aria-hidden="true"
    />
  );
}

export default function BlogPost({ loaderData }: Route.ComponentProps) {
  const { post } = loaderData;

  const Component = useMemo(() => getMDXComponent(post.code), [post.code]);

  return (
    <div className="relative">
      {/* Main content - aligned with header */}
      <div className="mx-auto max-w-2xl px-6 py-16">
        <FadeIn>
          <Link
            to="/blog"
            className="mb-8 inline-block text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
          >
            ← Back to blog
          </Link>
        </FadeIn>

        <article>
          <FadeIn>
            <header className="mb-12">
              <h1 className="mb-4 text-3xl font-medium text-[var(--color-foreground)]">
                {post.title}
              </h1>
              <time
                dateTime={post.date}
                className="text-sm text-[var(--color-muted)]"
              >
                {formatDate(post.date)}
              </time>
            </header>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="prose">
              <Component />
            </div>
          </FadeIn>

          <CodeBlockEnhancer />

          {/* Dynamic spacer to allow scrolling to last heading */}
          <ArticleSpacer headings={post.headings} />
        </article>
      </div>

      {/* Sidebar TOC - positioned to the right of the main content */}
      <aside className="hidden xl:block fixed top-24 left-[calc(50%+21rem+2rem)] w-52">
        <FadeIn delay={200}>
          <TableOfContents headings={post.headings} />
        </FadeIn>
      </aside>
    </div>
  );
}
