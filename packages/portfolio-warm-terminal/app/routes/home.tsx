import type { Route } from "./+types/home";
import { HeroTerminal } from "~/components/home/HeroTerminal";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "iamradan | Full-Stack Developer" },
    {
      name: "description",
      content:
        "Full-Stack Developer passionate about building modern web applications. Explore my projects, blog, and experience.",
    },
    { property: "og:title", content: "iamradan | Full-Stack Developer" },
    {
      property: "og:description",
      content:
        "Full-Stack Developer passionate about building modern web applications.",
    },
    { property: "og:type", content: "website" },
  ];
}

export default function Home() {
  return (
    <div className="py-8 md:py-16">
      <HeroTerminal />
    </div>
  );
}
