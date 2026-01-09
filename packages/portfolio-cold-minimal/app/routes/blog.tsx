import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import { siteConfig } from "~/data/config";

export const meta: MetaFunction = () => {
  return [
    { title: "Blog - " + siteConfig.name },
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
    <div>
      <h1 className="text-3xl font-medium mb-12">Blog</h1>

      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={"/blog/" + post.slug} className="group block">
              <span className="text-sm text-[--color-text-dim]">
                {formatDate(post.date)}
              </span>
              <h2 className="link font-medium">{post.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
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
