import { useMemo } from "react";
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

export default function BlogPost({ loaderData }: Route.ComponentProps) {
  const { post } = loaderData;

  const Component = useMemo(() => getMDXComponent(post.code), [post.code]);

  return (
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
          <TableOfContents headings={post.headings} />
        </FadeIn>

        <FadeIn delay={200}>
          <div className="prose">
            <Component />
          </div>
        </FadeIn>

        <CodeBlockEnhancer />
      </article>
    </div>
  );
}
