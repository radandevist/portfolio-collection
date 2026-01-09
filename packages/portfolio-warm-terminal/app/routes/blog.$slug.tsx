import type { MetaFunction, LoaderFunctionArgs } from "react-router";
import { useLoaderData, Link } from "react-router";
import { siteConfig } from "~/data/config";

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) {
    return [{ title: "Post Not Found | " + siteConfig.name }];
  }
  return [
    { title: data.title + " | " + siteConfig.name },
    { name: "description", content: data.description },
  ];
};

const posts: Record<string, { title: string; description: string; date: string; content: string }> = {
  "getting-started-with-react-router-v7": {
    title: "Getting Started with React Router v7",
    description: "A comprehensive guide to the new features in React Router v7.",
    date: "2024-01-15",
    content: `
React Router v7 brings exciting new features that make building web applications even more enjoyable.

## Key Features

### Framework Mode
React Router v7 introduces framework mode, which provides a full-stack development experience with built-in SSR support.

### Improved Type Safety
The new version comes with enhanced TypeScript support, making your routes fully type-safe.

### Better Performance
With automatic code splitting and optimized loading strategies, your apps will be faster than ever.

## Getting Started

First, create a new project using the React Router template. Then configure your routes and start building!

The new declarative route configuration makes it easy to understand your app structure at a glance.
    `.trim(),
  },
  "building-type-safe-apis": {
    title: "Building Type-Safe APIs with TypeScript",
    description: "Learn how to create fully type-safe APIs.",
    date: "2024-01-08",
    content: `
Type safety is crucial for building robust applications. Here is how to achieve it end-to-end.

## The Problem

Traditional API development often leads to runtime errors because types are not shared between client and server.

## The Solution

By using TypeScript throughout your stack, you can catch errors at compile time.

### Shared Types
Define your types once and share them between frontend and backend.

### Runtime Validation
Use libraries like Zod to validate data at runtime while maintaining type safety.

## Best Practices

Always validate input at your API boundaries and leverage TypeScript inference to reduce boilerplate.
    `.trim(),
  },
  "terminal-productivity-tips": {
    title: "Terminal Productivity Tips for Developers",
    description: "Essential terminal commands and workflows.",
    date: "2023-12-20",
    content: `
The terminal is a powerful tool. Here are some tips to boost your productivity.

## Essential Commands

Learn these commands to speed up your workflow:
- grep for searching
- find for locating files
- awk for text processing

## Shell Customization

A well-configured shell can save hours. Consider using:
- Oh My Zsh or Fish for enhanced features
- Custom aliases for common commands
- Prompt customization for context awareness

## Workflow Tips

Use tmux or screen for session management. Learn keyboard shortcuts to avoid reaching for the mouse.
    `.trim(),
  },
};

export async function loader({ params }: LoaderFunctionArgs) {
  const slug = params.slug;
  if (!slug || !posts[slug]) {
    throw new Response("Not Found", { status: 404 });
  }
  return { slug, ...posts[slug] };
}

export default function BlogPost() {
  const post = useLoaderData<typeof loader>();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link to="/blog" className="link text-sm mb-8 inline-block">
        &larr; Back to blog
      </Link>

      <header className="mb-12">
        <time className="text-[--color-text-dim] text-sm">{formatDate(post.date)}</time>
        <h1 className="text-4xl font-bold text-[--color-accent] mt-2">{post.title}</h1>
        <p className="text-[--color-text-muted] mt-4">{post.description}</p>
      </header>

      <article className="prose prose-invert max-w-none">
        {post.content.split("\n\n").map((paragraph, i) => {
          if (paragraph.startsWith("## ")) {
            return (
              <h2 key={i} className="text-2xl font-bold text-[--color-accent] mt-8 mb-4">
                {paragraph.replace("## ", "")}
              </h2>
            );
          }
          if (paragraph.startsWith("### ")) {
            return (
              <h3 key={i} className="text-xl font-semibold text-[--color-coral] mt-6 mb-3">
                {paragraph.replace("### ", "")}
              </h3>
            );
          }
          if (paragraph.startsWith("- ")) {
            const items = paragraph.split("\n").filter(Boolean);
            return (
              <ul key={i} className="list-none space-y-2 my-4">
                {items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-[--color-text-muted]">
                    <span className="text-[--color-orange]">→</span>
                    {item.replace("- ", "")}
                  </li>
                ))}
              </ul>
            );
          }
          return (
            <p key={i} className="text-[--color-text-muted] my-4 leading-relaxed">
              {paragraph}
            </p>
          );
        })}
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
