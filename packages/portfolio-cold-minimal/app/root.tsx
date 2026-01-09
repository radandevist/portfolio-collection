import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
} from "react-router";
import type { LinksFunction } from "react-router";
import "./app.css";
import { Header } from "~/components/Header";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen">
        <div className="max-w-2xl mx-auto px-6 py-16">
          <Header />
          <main>{children}</main>
          <footer className="mt-24 pt-8 border-t border-[--color-border]">
            <p className="text-[--color-text-dim] text-sm">
              {new Date().getFullYear()}
            </p>
          </footer>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: { error: unknown }) {
  let message = "404";
  let details = "Page not found.";

  if (isRouteErrorResponse(error)) {
    message = String(error.status);
    details = error.statusText || details;
  } else if (error instanceof Error) {
    message = "Error";
    details = error.message;
  }

  return (
    <div className="py-24">
      <h1 className="text-4xl font-medium mb-4">{message}</h1>
      <p className="text-[--color-text-muted]">{details}</p>
    </div>
  );
}
