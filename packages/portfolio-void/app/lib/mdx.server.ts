import { bundleMDX } from "mdx-bundler";
import * as fs from "node:fs/promises";
import * as path from "node:path";
import matter from "gray-matter";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  published: boolean;
}

export interface BlogPostWithContent extends BlogPost {
  code: string;
  headings: { id: string; text: string; level: number }[];
}

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const files = await fs.readdir(CONTENT_DIR);
    const mdxFiles = files.filter((file) => file.endsWith(".mdx"));

    const posts = await Promise.all(
      mdxFiles.map(async (file) => {
        const slug = file.replace(/\.mdx$/, "");
        const filePath = path.join(CONTENT_DIR, file);
        const source = await fs.readFile(filePath, "utf-8");
        const { data } = matter(source);

        return {
          slug,
          title: data.title || slug,
          description: data.description || "",
          date: data.date || new Date().toISOString(),
          published: data.published !== false,
        };
      })
    );

    return posts
      .filter((post) => post.published)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch {
    return [];
  }
}

export async function getPost(slug: string): Promise<BlogPostWithContent | null> {
  try {
    const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
    const source = await fs.readFile(filePath, "utf-8");
    const { data, content } = matter(source);

    if (data.published === false) {
      return null;
    }

    const headings: { id: string; text: string; level: number }[] = [];

    // Remove code blocks before extracting headings to avoid matching comments
    const contentWithoutCodeBlocks = content.replace(/```[\s\S]*?```/g, "");
    const headingRegex = /^(#{1,3})\s+(.+)$/gm;
    let match;

    while ((match = headingRegex.exec(contentWithoutCodeBlocks)) !== null) {
      const level = match[1].length;
      const text = match[2].trim();
      // Match rehype-slug behavior: remove apostrophes, then replace other non-alphanumeric with hyphens
      const id = text
        .toLowerCase()
        .replace(/[']/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      headings.push({ id, text, level });
    }

    const { code } = await bundleMDX({
      source,
      mdxOptions(options) {
        options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm];
        options.rehypePlugins = [
          ...(options.rehypePlugins ?? []),
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: "wrap",
              properties: { className: ["anchor"] },
            },
          ],
          [
            rehypePrettyCode,
            {
              theme: "github-dark",
              keepBackground: true,
            },
          ],
        ];
        return options;
      },
    });

    return {
      slug,
      title: data.title || slug,
      description: data.description || "",
      date: data.date || new Date().toISOString(),
      published: true,
      code,
      headings,
    };
  } catch {
    return null;
  }
}
