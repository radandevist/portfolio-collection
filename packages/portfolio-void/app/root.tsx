import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
} from "react-router";
import type { LinksFunction, MetaFunction } from "react-router";
import type { Route } from "./+types/root";

import stylesheet from "~/styles/app.css?url";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { SkipLink } from "~/components/SkipLink";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap",
  },
  { rel: "stylesheet", href: stylesheet },
  { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
];

export const meta: MetaFunction = () => [
  { charSet: "utf-8" },
  { name: "viewport", content: "width=device-width, initial-scale=1" },
  { title: "radan — Software developer" },
  { name: "description", content: "Software developer crafting elegant solutions." },
  { property: "og:title", content: "radan — Software developer" },
  { property: "og:description", content: "Software developer crafting elegant solutions." },
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary" },
  { name: "twitter:title", content: "radan — Software developer" },
  { name: "twitter:description", content: "Software developer crafting elegant solutions." },
  { name: "theme-color", content: "#0c0a09" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <ConsoleEasterEgg />
      </head>
      <body className="flex min-h-screen flex-col">
        <SkipLink />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

function ConsoleEasterEgg() {
  const script = `
    console.log(
      "%cHey, curious one.\\n\\n" +
      "%cSource: github.com/radan\\n" +
      "Say hi: hello@radan.dev",
      "color: #f59e0b; font-size: 16px; font-weight: bold;",
      "color: #a8a29e; font-size: 14px;"
    );
  `;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let title = "Something went wrong";
  let message = "An unexpected error occurred.";

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      title = "404";
      message = "This page doesn't exist.";
    } else {
      title = `${error.status}`;
      message = error.statusText || message;
    }
  }

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
      <h1 className="mb-4 text-6xl font-medium text-[var(--color-foreground)]">{title}</h1>
      <p className="mb-8 text-lg text-[var(--color-muted)]">{message}</p>
      <a
        href="/"
        className="text-[var(--color-accent)] transition-opacity hover:opacity-80"
      >
        ← Back home
      </a>
    </div>
  );
}
