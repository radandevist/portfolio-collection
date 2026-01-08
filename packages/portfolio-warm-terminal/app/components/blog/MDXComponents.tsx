import { Badge } from "~/components/ui/Badge";
import { TerminalWindow } from "~/components/ui/TerminalHeader";

// Custom components for MDX
export const MDXComponents = {
  // Headings
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="text-3xl md:text-4xl font-semibold text-foreground mb-6 mt-8 first:mt-0"
      {...props}
    />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-4"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-3"
      {...props}
    />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className="text-lg font-semibold text-foreground mt-6 mb-2"
      {...props}
    />
  ),

  // Paragraphs
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-foreground leading-relaxed mb-4" {...props} />
  ),

  // Links
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-accent-amber hover:text-accent-coral underline underline-offset-4 decoration-accent-amber/30 hover:decoration-accent-coral transition-colors"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    />
  ),

  // Code
  code: (props: React.HTMLAttributes<HTMLElement>) => {
    const isInlineCode = typeof props.children === "string";
    if (isInlineCode) {
      return (
        <code
          className="bg-background-secondary px-1.5 py-0.5 rounded text-accent-amber text-sm font-mono"
          {...props}
        />
      );
    }
    return <code {...props} />;
  },

  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="bg-background-secondary border border-border rounded-xl p-4 overflow-x-auto my-6 text-sm leading-relaxed"
      {...props}
    />
  ),

  // Lists
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-inside my-4 space-y-2 text-foreground" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-inside my-4 space-y-2 text-foreground" {...props} />
  ),
  li: (props: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li className="text-foreground-muted" {...props} />
  ),

  // Blockquote
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-accent-coral pl-4 italic text-foreground-muted my-6"
      {...props}
    />
  ),

  // Horizontal rule
  hr: () => <hr className="border-border my-8" />,

  // Images
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img
      className="rounded-xl border border-border my-6 max-w-full"
      loading="lazy"
      {...props}
    />
  ),

  // Tables
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto my-6">
      <table
        className="w-full border-collapse border border-border"
        {...props}
      />
    </div>
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th
      className="border border-border bg-background-secondary px-4 py-2 text-left font-semibold text-foreground"
      {...props}
    />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td
      className="border border-border px-4 py-2 text-foreground-muted"
      {...props}
    />
  ),

  // Custom components
  Badge,
  TerminalWindow,

  // Callout component
  Callout: ({
    type = "info",
    children,
  }: {
    type?: "info" | "warning" | "tip";
    children: React.ReactNode;
  }) => {
    const styles = {
      info: "border-l-blue-500 bg-blue-500/10",
      warning: "border-l-accent-amber bg-accent-amber/10",
      tip: "border-l-green-500 bg-green-500/10",
    };
    const icons = {
      info: "ℹ️",
      warning: "⚠️",
      tip: "💡",
    };

    return (
      <div
        className={`border-l-4 rounded-r-lg p-4 my-6 ${styles[type]}`}
      >
        <span className="mr-2">{icons[type]}</span>
        {children}
      </div>
    );
  },
};
