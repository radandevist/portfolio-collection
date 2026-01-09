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
import { Footer } from "~/components/Footer";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" },
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
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-12">{children}</main>
        <Footer />
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
  let details = "The page you're looking for doesn't exist.";

  if (isRouteErrorResponse(error)) {
    message = String(error.status);
    details = error.statusText || details;
  } else if (error instanceof Error) {
    message = "Error";
    details = error.message;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-24 text-center">
      <div className="card inline-block px-12 py-8">
        <h1 className="text-6xl font-bold text-[--color-primary] mb-4">{message}</h1>
        <p className="text-[--color-text-muted]">{details}</p>
      </div>
    </div>
  );
}
