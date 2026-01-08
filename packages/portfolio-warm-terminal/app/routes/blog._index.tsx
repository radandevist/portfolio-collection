import type { Route } from "./+types/blog._index";
import { SectionHeader } from "~/components/ui/SectionHeader";
import { BlogCard } from "~/components/blog/BlogCard";
import { getAllPosts } from "~/lib/mdx.server";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blog | iamradan" },
    {
      name: "description",
      content:
        "Thoughts on web development, programming, and technology. Articles about React, TypeScript, Node.js, and more.",
    },
  ];
}

export async function loader({}: Route.LoaderArgs) {
  const posts = await getAllPosts();
  return { posts };
}

export default function BlogIndex({ loaderData }: Route.ComponentProps) {
  const { posts } = loaderData;

  return (
    <div>
      <SectionHeader
        title="Blog"
        description="Thoughts, tutorials, and things I've learned."
        command="ls ~/blog"
      />

      {posts.length > 0 ? (
        <div className="grid gap-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📝</div>
          <p className="text-foreground-muted mb-2">No posts yet</p>
          <p className="text-foreground-dim text-sm">
            Check back soon for new content!
          </p>
        </div>
      )}
    </div>
  );
}
