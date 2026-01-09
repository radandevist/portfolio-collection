import type { MetaFunction, LoaderFunctionArgs } from "react-router";
import { useLoaderData, Link } from "react-router";
import { siteConfig } from "~/data/config";

const posts: Record<string, { title: string; date: string; content: string }> = {
  "react-router-v7": {
    title: "Getting Started with React Router v7",
    date: "2024-01-15",
    content: "React Router v7 introduces framework mode with built-in SSR. It provides better type safety and improved performance through automatic code splitting.\n\nThe new route configuration is declarative and easy to understand. Combined with loaders and actions, it creates a powerful full-stack development experience.",
  },
  "type-safe-apis": {
    title: "Building Type-Safe APIs",
    date: "2024-01-08",
    content: "Type safety across the stack prevents runtime errors. By sharing types between client and server, you catch issues at compile time.\n\nTools like tRPC and Zod make this straightforward. Define your schemas once and get validation plus TypeScript types automatically.",
  },
  "terminal-tips": {
    title: "Terminal Productivity Tips",
    date: "2023-12-20",
    content: "The terminal is powerful when used effectively. Learn core commands like grep, find, and awk to process text efficiently.\n\nCustomize your shell with aliases and functions. Use tmux for session management. These small investments compound over time.",
  },
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) return [{ title: "Not Found - " + siteConfig.name }];
  return [{ title: data.title + " - " + siteConfig.name }];
};

export async function loader({ params }: LoaderFunctionArgs) {
  const post = posts[params.slug || ""];
  if (!post) throw new Response("Not Found", { status: 404 });
  return post;
}

export default function BlogPost() {
  const post = useLoaderData<typeof loader>();

  return (
    <article>
      <Link to="/blog" className="text-sm text-[--color-text-dim] hover:text-[--color-text-muted]">
        Back
      </Link>
      
      <header className="mt-8 mb-12">
        <time className="text-sm text-[--color-text-dim]">{formatDate(post.date)}</time>
        <h1 className="text-3xl font-medium mt-2">{post.title}</h1>
      </header>

      <div className="space-y-6 text-[--color-text-muted] leading-relaxed">
        {post.content.split("\n\n").map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </article>
  );
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
