import { Link } from "react-router";
import { Badge } from "~/components/ui/Badge";
import type { BlogPost } from "~/lib/mdx.server";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const { slug, frontmatter } = post;

  return (
    <article className="card-warm group">
      <Link to={`/blog/${slug}`} className="block">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="font-semibold text-lg text-foreground group-hover:text-accent-amber transition-colors">
            {frontmatter.title}
          </h3>
          {frontmatter.readingTime && (
            <span className="text-foreground-dim text-xs shrink-0 mt-1">
              {frontmatter.readingTime}
            </span>
          )}
        </div>

        <time className="text-foreground-dim text-sm block mb-3">
          {new Date(frontmatter.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>

        <p className="text-foreground-muted text-sm mb-4 line-clamp-2">
          {frontmatter.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {frontmatter.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="default">
              {tag}
            </Badge>
          ))}
          {frontmatter.tags.length > 3 && (
            <Badge variant="outline">+{frontmatter.tags.length - 3}</Badge>
          )}
        </div>
      </Link>
    </article>
  );
}
