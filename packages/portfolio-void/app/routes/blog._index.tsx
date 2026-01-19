import { Link } from "react-router";
import type { MetaFunction } from "react-router";
import type { Route } from "./+types/blog._index";
import { FadeIn } from "~/components/FadeIn";
import { getAllPosts } from "~/lib/mdx.server";
import { formatDate } from "~/lib/utils";

export const meta: MetaFunction = () => [
  { title: "Blog - radan" },
  { name: "description", content: "Thoughts on software development and technology." },
];

export async function loader() {
  const posts = await getAllPosts();
  return { posts };
}

export default function BlogIndex({ loaderData }: Route.ComponentProps) {
  const { posts } = loaderData;

  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      {/* Header */}
      <FadeIn>
        <div className="mb-16">
          <p className="terminal-prompt mb-2 font-mono text-sm text-[var(--color-muted)]">
            ~/blog
          </p>
          <h1 className="mb-4 text-3xl font-medium tracking-tight text-[var(--color-foreground)]">
            Blog
          </h1>
          <p className="text-[var(--color-muted-light)]">
            Thoughts, learnings, and experiments.
          </p>
        </div>
      </FadeIn>

      {posts.length === 0 ? (
        <FadeIn delay={50}>
          <p className="text-[var(--color-muted)]">No posts yet. Check back soon.</p>
        </FadeIn>
      ) : (
        <div className="space-y-8">
          {posts.map((post, index) => (
            <FadeIn key={post.slug} delay={50 + index * 50}>
              <article className="item-card group py-1">
                <Link
                  to={`/blog/${post.slug}`}
                  className="block"
                >
                  <div className="mb-2 flex items-baseline justify-between gap-4">
                    <h2 className="text-lg font-medium text-[var(--color-foreground)] transition-colors duration-200 group-hover:text-[var(--color-accent-light)]">
                      {post.title}
                    </h2>
                    <time
                      dateTime={post.date}
                      className="shrink-0 font-mono text-xs text-[var(--color-muted)]"
                    >
                      {formatDate(post.date)}
                    </time>
                  </div>
                  {post.description && (
                    <p className="text-[var(--color-muted-light)]">
                      {post.description}
                    </p>
                  )}
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>
      )}

    </div>
  );
}
