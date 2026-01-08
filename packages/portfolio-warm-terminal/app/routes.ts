import { type RouteConfig, route, index, layout } from "@react-router/dev/routes";

export default [
  layout("components/layout/Layout.tsx", [
    index("routes/home.tsx"),
    route("blog", "routes/blog._index.tsx"),
    route("blog/:slug", "routes/blog.$slug.tsx"),
    route("projects", "routes/projects.tsx"),
    route("experience", "routes/experience.tsx"),
    route("skills", "routes/skills.tsx"),
  ]),
] satisfies RouteConfig;
