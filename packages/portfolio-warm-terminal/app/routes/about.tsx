import type { MetaFunction } from "react-router";
import { siteConfig } from "~/data/config";

export const meta: MetaFunction = () => {
  return [
    { title: "About | " + siteConfig.name },
    { name: "description", content: "About " + siteConfig.name },
  ];
};

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <header className="mb-12">
        <p className="text-[--color-text-muted] mb-2">$ cat about.md</p>
        <h1 className="text-4xl font-bold text-[--color-accent]">About Me</h1>
      </header>

      <div className="terminal-window mb-8">
        <div className="terminal-header">
          <div className="terminal-dot bg-red-500" />
          <div className="terminal-dot bg-yellow-500" />
          <div className="terminal-dot bg-green-500" />
          <span className="ml-2 text-[--color-text-muted] text-sm">bio.txt</span>
        </div>
        <div className="terminal-body space-y-4 text-[--color-text-muted]">
          <p>
            Hey there! I am a <span className="text-[--color-accent]">{siteConfig.title}</span> who 
            loves building things that live on the internet.
          </p>
          <p>
            I enjoy the entire process of taking an idea from concept to deployment, 
            working across the full stack to create seamless user experiences backed 
            by robust, scalable systems.
          </p>
          <p>
            When I am not coding, you can find me exploring new technologies, 
            contributing to open source, or enjoying a good cup of coffee while 
            reading about the latest in tech.
          </p>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6">
          <span className="text-[--color-coral]">const</span>{" "}
          <span className="text-[--color-accent]">currentFocus</span>{" "}
          <span className="text-[--color-text-muted]">=</span>
        </h2>
        <ul className="space-y-3 text-[--color-text-muted]">
          <li className="flex items-center gap-3">
            <span className="text-[--color-orange]">→</span>
            Building scalable web applications
          </li>
          <li className="flex items-center gap-3">
            <span className="text-[--color-orange]">→</span>
            Exploring system design patterns
          </li>
          <li className="flex items-center gap-3">
            <span className="text-[--color-orange]">→</span>
            Contributing to open source projects
          </li>
          <li className="flex items-center gap-3">
            <span className="text-[--color-orange]">→</span>
            Writing about development experiences
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-6">
          <span className="text-[--color-coral]">export</span>{" "}
          <span className="text-[--color-accent]">contact</span>
        </h2>
        <p className="text-[--color-text-muted] mb-4">
          Feel free to reach out if you want to collaborate, have questions, 
          or just want to say hi!
        </p>
        <a href={"mailto:" + siteConfig.email} className="link">
          {siteConfig.email} &rarr;
        </a>
      </section>
    </div>
  );
}
