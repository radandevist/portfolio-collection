import type { MetaFunction, LoaderFunctionArgs } from "react-router";
import { useLoaderData, Link } from "react-router";
import { siteConfig } from "~/data/config";

const posts: Record<string, { title: string; description: string; date: string; content: string }> = {
  "react-router-v7": {
    title: "Getting Started with React Router v7",
    description: "A comprehensive guide to the new features in React Router v7.",
    date: "2024-01-15",
    content: "React Router v7 brings exciting new features including framework mode with built-in SSR support, improved type safety, and better performance through automatic code splitting.\n\nThe new route configuration is declarative and easy to understand. Combined with loaders and actions, it creates a powerful development experience.\n\nGetting started is straightforward - create a new project, configure your routes, and begin building your application.",
  },
  "type-safe-apis": {
    title: "Building Type-Safe APIs with TypeScript",
    description: "Learn how to create fully type-safe APIs.",
    date: "2024-01-08",
    content: "Type safety across your entire stack prevents runtime errors and improves developer experience. By sharing types between client and server, you catch issues at compile time.\n\nTools like tRPC and Zod make this straightforward. Define your schemas once and get validation plus TypeScript types automatically.\n\nAlways validate input at API boundaries and leverage TypeScript inference to reduce boilerplate code.",
  },
  "terminal-tips": {
    title: "Terminal Productivity Tips for Developers",
    description: "Essential commands and workflows for productivity.",
    date: "2023-12-20",
    content: "The terminal is a powerful tool when used effectively. Learning core commands like grep, find, and awk helps you process text efficiently.\n\nCustomize your shell with aliases and functions to speed up common tasks. Consider using Oh My Zsh or Fish for enhanced features.\n\nUse tmux or screen for session management, especially when working on remote servers or long-running processes.",
  },
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) return [{ title: "Not Found - " + siteConfig.name }];
  return [
    { title: data.title + " - " + siteConfig.name },
    { name: "description", content: data.description },
  ];
};

export async function loader({ params }: LoaderFunctionArgs) {
  const post = posts[params.slug || ""];
  if (!post) throw new Response("Not Found", { status: 404 });
  return post;
}

export default function BlogPost() {
  const post = useLoaderData<typeof loader>();

  return (
    <div className="max-w-3xl mx-auto px-6">
      <Link to="/blog" className="link text-sm mb-8 inline-block">
        Back to Blog
      </Link>

      <article className="card">
        <header className="mb-8 pb-6 border-b border-[--color-border]">
          <time className="text-sm text-[--color-text-dim]">{formatDate(post.date)}</time>
          <h1 className="text-3xl font-bold mt-2 mb-3">{post.title}</h1>
          <p className="text-[--color-text-muted]">{post.description}</p>
        </header>

        <div className="space-y-4 text-[--color-text-muted] leading-relaxed">
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
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
