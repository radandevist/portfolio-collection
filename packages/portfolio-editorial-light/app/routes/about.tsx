import type { MetaFunction } from "react-router";
import { siteConfig } from "~/data/config";

export const meta: MetaFunction = () => {
  return [
    { title: "About - " + siteConfig.name },
    { name: "description", content: "About " + siteConfig.name },
  ];
};

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6">
      <h1 className="text-3xl font-bold mb-8">About Me</h1>
      
      <div className="card mb-8">
        <div className="space-y-4 text-[--color-text-muted]">
          <p>
            Hi! I am a {siteConfig.title.toLowerCase()} passionate about 
            building great software. I enjoy working across the entire stack, 
            from crafting intuitive user interfaces to designing robust backend systems.
          </p>
          <p>
            My approach to development focuses on writing clean, maintainable code 
            that solves real problems. I believe in continuous learning and staying 
            up-to-date with the latest technologies and best practices.
          </p>
          <p>
            When I am not coding, you can find me exploring new technologies, 
            contributing to open source projects, or enjoying a good cup of coffee.
          </p>
        </div>
      </div>

      <section className="mb-8">
        <h2 className="section-title">What I Do</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="card">
            <h3 className="font-semibold mb-2">Frontend Development</h3>
            <p className="text-sm text-[--color-text-muted]">
              Building responsive, accessible, and performant user interfaces.
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold mb-2">Backend Development</h3>
            <p className="text-sm text-[--color-text-muted]">
              Designing scalable APIs and robust server-side applications.
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold mb-2">System Design</h3>
            <p className="text-sm text-[--color-text-muted]">
              Architecting systems that scale and perform under load.
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold mb-2">DevOps</h3>
            <p className="text-sm text-[--color-text-muted]">
              Setting up CI/CD pipelines and cloud infrastructure.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-title">Contact</h2>
        <div className="card">
          <p className="text-[--color-text-muted] mb-4">
            Feel free to reach out if you want to collaborate or just say hi!
          </p>
          <a href={"mailto:" + siteConfig.email} className="link">
            {siteConfig.email}
          </a>
        </div>
      </section>
    </div>
  );
}
