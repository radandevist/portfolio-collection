import { bundleMDX } from "mdx-bundler";
import { readFile, readdir } from "fs/promises";
import path from "path";
import matter from "gray-matter";

const BLOG_PATH = path.join(process.cwd(), "content", "blog");

export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  tags: string[];
  published: boolean;
  readingTime?: string;
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
}

export interface BlogPostWithCode extends BlogPost {
  code: string;
}

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export async function getBlogPost(slug: string): Promise<BlogPostWithCode> {
  const filePath = path.join(BLOG_PATH, `${slug}.mdx`);
  const source = await readFile(filePath, "utf-8");

  const { code, frontmatter } = await bundleMDX<BlogFrontmatter>({
    source,
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? [])];
      options.rehypePlugins = [...(options.rehypePlugins ?? [])];
      return options;
    },
    esbuildOptions(options) {
      options.target = "es2020";
      return options;
    },
  });

  // Add reading time if not present
  if (!frontmatter.readingTime) {
    frontmatter.readingTime = calculateReadingTime(source);
  }

  return { code, frontmatter, slug };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const files = await readdir(BLOG_PATH);
    const posts = await Promise.all(
      files
        .filter((file) => file.endsWith(".mdx"))
        .map(async (file) => {
          const slug = file.replace(".mdx", "");
          const filePath = path.join(BLOG_PATH, file);
          const source = await readFile(filePath, "utf-8");
          const { data, content } = matter(source);

          const frontmatter = data as BlogFrontmatter;
          if (!frontmatter.readingTime) {
            frontmatter.readingTime = calculateReadingTime(content);
          }

          return { slug, frontmatter };
        })
    );

    return posts
      .filter((post) => post.frontmatter.published)
      .sort(
        (a, b) =>
          new Date(b.frontmatter.date).getTime() -
          new Date(a.frontmatter.date).getTime()
      );
  } catch (error) {
    // Return empty array if blog directory doesn't exist yet
    console.error("Error reading blog posts:", error);
    return [];
  }
}

export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter((post) =>
    post.frontmatter.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
  );
}

export async function getAllTags(): Promise<string[]> {
  const allPosts = await getAllPosts();
  const tags = new Set<string>();
  allPosts.forEach((post) => {
    post.frontmatter.tags.forEach((tag) => tags.add(tag.toLowerCase()));
  });
  return Array.from(tags).sort();
}
