import type { MetaFunction, LoaderFunctionArgs } from "react-router";
import { useLoaderData, Link } from "react-router";
import { siteConfig } from "~/data/config";

const posts: Record<string, { title: string; date: string; content: string }> = {
  "react-router-v7": {
    title: "Getting Started with React Router v7",
    date: "2024-01-15",
    content: "React Router v7 introduces framework mode with built-in SSR support. It provides better type safety and improved performance through automatic code splitting.\n\nThe new declarative route configuration makes your app structure clear at a glance. Combined with loaders and actions, you get a powerful full-stack experience.",
  },
  "type-safe-apis": {
    title: "Building Type-Safe APIs",
    date: "2024-01-08",
    content: "Type safety across the stack prevents runtime errors. By sharing types between client and server, you catch issues at compile time.\n\nUse tools like tRPC and Zod to define schemas once and get validation plus TypeScript types automatically.",
  },
  "terminal-tips": {
    title: "Terminal Productivity Tips",
    date: "2023-12-20",
    content: "The terminal is powerful when used effectively. Learn core commands like grep, find, and awk for efficient text processing.\n\nCustomize your shell with aliases and use tmux for session management. These small investments pay dividends.",
  },
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) return [{ title: "Not Found // " + siteConfig.name }];
  return [{ title: data.title + " // " + siteConfig.name }];
};

export async function loader({ params }: LoaderFunctionArgs) {
  const post = posts[params.slug || ""];
  if (!post) throw new Response("Not Found", { status: 404 });
  return post;
}

export default function BlogPost() {
  const post = useLoaderData<typeof loader>();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link to="/blog" className="link text-sm mb-8 inline-block">
        // back
      </Link>

      <article>
        <header className="mb-12">
          <time className="text-sm text-[--color-text-dim]">{formatDate(post.date)}</time>
          <h1 className="text-3xl font-bold mt-2 gradient-text">{post.title}</h1>
        </header>

        <div className="space-y-6 text-[--color-text-muted] leading-relaxed">
          {post.content.split("\n\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </article>
    </div>
  );
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
