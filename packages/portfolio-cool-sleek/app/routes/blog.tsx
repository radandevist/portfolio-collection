import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import { siteConfig } from "~/data/config";

export const meta: MetaFunction = () => {
  return [
    { title: "Blog // " + siteConfig.name },
    { name: "description", content: "Writing by " + siteConfig.name },
  ];
};

const posts = [
  {
    slug: "react-router-v7",
    title: "Getting Started with React Router v7",
    date: "2024-01-15",
  },
  {
    slug: "type-safe-apis",
    title: "Building Type-Safe APIs",
    date: "2024-01-08",
  },
  {
    slug: "terminal-tips",
    title: "Terminal Productivity Tips",
    date: "2023-12-20",
  },
];

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <header className="mb-12">
        <p className="text-[--color-cyan] text-sm mb-2">// thoughts</p>
        <h1 className="text-3xl font-bold">Blog</h1>
      </header>

      <div className="space-y-4">
        {posts.map((post) => (
          <article key={post.slug} className="card group">
            <Link to={"/blog/" + post.slug} className="block">
              <span className="text-sm text-[--color-text-dim]">
                {formatDate(post.date)}
              </span>
              <h2 className="text-lg font-semibold text-[--color-text] group-hover:text-[--color-cyan] transition-colors mt-1">
                {post.title}
              </h2>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
