import type { Route } from "./+types/blog.$slug";
import { getBlogPost } from "~/lib/mdx.server";
import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import { MDXComponents } from "~/components/blog/MDXComponents";
import { Badge } from "~/components/ui/Badge";
import { Link } from "react-router";

export function meta({ data }: Route.MetaArgs) {
  if (!data) {
    return [{ title: "Post Not Found | iamradan" }];
  }
  return [
    { title: `${data.frontmatter.title} | iamradan` },
    { name: "description", content: data.frontmatter.description },
    { property: "og:title", content: data.frontmatter.title },
    { property: "og:description", content: data.frontmatter.description },
    { property: "og:type", content: "article" },
    {
      property: "article:published_time",
      content: data.frontmatter.date,
    },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  const { slug } = params;
  if (!slug) {
    throw new Response("Not Found", { status: 404 });
  }

  try {
    const post = await getBlogPost(slug);
    return post;
  } catch (error) {
    throw new Response("Not Found", { status: 404 });
  }
}

export default function BlogPost({ loaderData }: Route.ComponentProps) {
  const { code, frontmatter, slug } = loaderData;
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <article className="max-w-none">
      {/* Back link */}
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-foreground-muted hover:text-accent-amber transition-colors mb-8"
      >
        <span>←</span>
        <span>Back to blog</span>
      </Link>

      {/* Header */}
      <header className="mb-8 pb-8 border-b border-border">
        <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
          {frontmatter.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-foreground-muted mb-4">
          <time>
            {new Date(frontmatter.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          {frontmatter.readingTime && (
            <>
              <span className="text-foreground-dim">·</span>
              <span>{frontmatter.readingTime}</span>
            </>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {frontmatter.tags.map((tag) => (
            <Badge key={tag} variant="accent">
              {tag}
            </Badge>
          ))}
        </div>
      </header>

      {/* Content */}
      <div className="prose-warm">
        <Component components={MDXComponents} />
      </div>

      {/* Footer */}
      <footer className="mt-12 pt-8 border-t border-border">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-foreground-muted text-sm">
            Thanks for reading! Have thoughts?{" "}
            <a
              href="https://twitter.com/iamradan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-amber hover:text-accent-coral transition-colors"
            >
              Let me know on Twitter
            </a>
            .
          </div>
          <Link
            to="/blog"
            className="text-accent-amber hover:text-accent-coral transition-colors text-sm"
          >
            ← More posts
          </Link>
        </div>
      </footer>
    </article>
  );
}
