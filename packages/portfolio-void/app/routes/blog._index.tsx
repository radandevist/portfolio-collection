import { Link } from "react-router";
import type { MetaFunction } from "react-router";
import type { Route } from "./+types/blog._index";
import { FadeIn } from "~/components/FadeIn";
import { getAllPosts } from "~/lib/mdx.server";
import { formatDate } from "~/lib/utils";

export const meta: MetaFunction = () => [
  { title: "Blog — radan" },
  { name: "description", content: "Thoughts on software development and technology." },
];

export async function loader() {
  const posts = await getAllPosts();
  return { posts };
}

export default function BlogIndex({ loaderData }: Route.ComponentProps) {
  const { posts } = loaderData;

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <FadeIn>
        <h1 className="mb-4 text-3xl font-medium text-[var(--color-foreground)]">
          Blog
        </h1>
        <p className="mb-12 text-[var(--color-muted)]">
          Thoughts and learnings.
        </p>
      </FadeIn>

      {posts.length === 0 ? (
        <FadeIn delay={100}>
          <p className="text-[var(--color-muted)]">No posts yet.</p>
        </FadeIn>
      ) : (
        <div className="space-y-8">
          {posts.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 100}>
              <article>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block"
                >
                  <div className="mb-1 flex items-baseline justify-between gap-4">
                    <h2 className="text-lg font-medium text-[var(--color-foreground)] transition-colors group-hover:text-[var(--color-accent)]">
                      {post.title}
                    </h2>
                    <time
                      dateTime={post.date}
                      className="shrink-0 text-sm text-[var(--color-muted)]"
                    >
                      {formatDate(post.date)}
                    </time>
                  </div>
                  {post.description && (
                    <p className="text-[var(--color-muted)]">{post.description}</p>
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
