import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import { siteConfig } from "~/data/config";

export const meta: MetaFunction = () => {
  return [
    { title: "Blog - " + siteConfig.name },
    { name: "description", content: "Blog posts by " + siteConfig.name },
  ];
};

const posts = [
  {
    slug: "react-router-v7",
    title: "Getting Started with React Router v7",
    description: "A comprehensive guide to the new features in React Router v7.",
    date: "2024-01-15",
    readTime: "5 min",
  },
  {
    slug: "type-safe-apis",
    title: "Building Type-Safe APIs with TypeScript",
    description: "Learn how to create fully type-safe APIs.",
    date: "2024-01-08",
    readTime: "8 min",
  },
  {
    slug: "terminal-tips",
    title: "Terminal Productivity Tips for Developers",
    description: "Essential commands and workflows for productivity.",
    date: "2023-12-20",
    readTime: "6 min",
  },
];

export default function Blog() {
  return (
    <div className="max-w-3xl mx-auto px-6">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>

      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.slug} className="card card-interactive">
            <Link to={"/blog/" + post.slug} className="block">
              <div className="flex items-center gap-3 text-sm text-[--color-text-dim] mb-2">
                <time>{formatDate(post.date)}</time>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-xl font-semibold mb-2 group-hover:text-[--color-primary]">
                {post.title}
              </h2>
              <p className="text-[--color-text-muted]">{post.description}</p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
