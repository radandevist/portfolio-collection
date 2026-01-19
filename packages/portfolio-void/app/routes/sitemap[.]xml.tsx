import type { Route } from "./+types/sitemap[.]xml";
import { getAllPosts } from "~/lib/mdx.server";
import { getAllProjects } from "~/lib/projects";

const SITE_URL = "https://radan.dev";

export async function loader({}: Route.LoaderArgs) {
  const posts = await getAllPosts();
  const projects = getAllProjects();

  const staticPages = [
    { url: "", priority: "1.0", changefreq: "weekly" },
    { url: "/projects", priority: "0.8", changefreq: "weekly" },
    { url: "/blog", priority: "0.8", changefreq: "weekly" },
    { url: "/contact", priority: "0.6", changefreq: "monthly" },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map(
      (page) => `
  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join("")}
  ${posts
    .map(
      (post) => `
  <url>
    <loc>${SITE_URL}/blog/${post.slug}</loc>
    <lastmod>${new Date(post.date).toISOString().split("T")[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
