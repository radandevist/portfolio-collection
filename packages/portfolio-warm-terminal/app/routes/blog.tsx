import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import { siteConfig } from "~/data/config";

export const meta: MetaFunction = () => {
  return [
    { title: "Blog | " + siteConfig.name },
    { name: "description", content: "Blog posts by " + siteConfig.name },
  ];
};

const posts = [
  {
    slug: "getting-started-with-react-router-v7",
    title: "Getting Started with React Router v7",
    description: "A comprehensive guide to the new features in React Router v7 and how to leverage them in your projects.",
    date: "2024-01-15",
    readTime: "5 min read",
  },
  {
    slug: "building-type-safe-apis",
    title: "Building Type-Safe APIs with TypeScript",
    description: "Learn how to create fully type-safe APIs that catch errors at compile time rather than runtime.",
    date: "2024-01-08",
    readTime: "8 min read",
  },
  {
    slug: "terminal-productivity-tips",
    title: "Terminal Productivity Tips for Developers",
    description: "Essential terminal commands and workflows that will boost your development productivity.",
    date: "2023-12-20",
    readTime: "6 min read",
  },
];

export default function Blog() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <header className="mb-12">
        <p className="text-[--color-text-muted] mb-2">$ cat ~/blog/*.md</p>
        <h1 className="text-4xl font-bold text-[--color-accent]">Blog</h1>
      </header>

      <div className="space-y-6 stagger">
        {posts.map((post) => (
          <article key={post.slug} className="card group">
            <Link to={"/blog/" + post.slug} className="block">
              <div className="flex items-center gap-3 text-sm text-[--color-text-dim] mb-2">
                <time>{formatDate(post.date)}</time>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-xl font-semibold text-[--color-accent] group-hover:text-[--color-accent-hover] mb-2">
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
