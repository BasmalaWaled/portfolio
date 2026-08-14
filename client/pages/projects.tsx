 import { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

type ProjectCategory = "All" | "Mobile" | "Web" | "Security" | "Featured";

type Project = {
  title: string;
  description: string;
  category: Exclude<ProjectCategory, "All">[];
  image: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "Bunyan",
    description:
      "Brand management platform that helps companies manage their identity, teams, and digital presence.",
    category: ["Mobile", "Featured"],
    image: "/image/6c75421a-c74f-4cb9-929a-bff93ca0d6ba.webp",
    tags: ["Flutter", "Laravel", "Bloc", "MySQL"],
  },
  {
    title: "WebRTC QR Calling",
    description:
      "Peer-to-peer calling app using WebRTC and QR codes for secure and real-time communication.",
    category: ["Mobile", "Featured"],
    image: "/image/cd36c60c-035b-4f3b-a852-b5df251b2d9b.webp",
    tags: ["Flutter", "WebRTC", "Socket.IO"],
  },
  {
    title: "Biometric Login",
    description:
      "Secure authentication using Android Keystore and biometric verification for enhanced security.",
    category: ["Security", "Featured"],
     image: "/image/117f7be4-7a7b-4d15-9c59-8a1ab1237cbb.webp",
    tags: ["Flutter", "Android", "Security"],
  },
  {
    title: "Task Manager",
    description:
      "A productivity app for teams to manage tasks and projects efficiently with real-time collaboration.",
    category: ["Mobile", "Web"],
 image: "/image/3120c457-94f7-415e-8933-b323b18cbc8b.webp",
    tags: ["Flutter", "Firebase", "Bloc"],
  },
  {
    title: "E-Commerce App",
    description:
      "Full e-commerce platform with cart, payments, and order tracking features.",
    category: ["Mobile", "Web"],
    image: "/image/ec235850-69f7-4731-b170-14edb52d71c2.webp",
    tags: ["Flutter", "Stripe", "Firebase"],
  },
  {
    title: "Finance Tracker",
    description:
      "Personal finance tracking app with beautiful charts and insights to manage your budget and expenses.",
    category: ["Mobile", "Web"],
    image: "/image/117f7be4-7a7b-4d15-9c59-8a1ab1237cbb.webp",
    tags: ["Flutter", "Charts", "Hive"],
  },
];

const filters: ProjectCategory[] = [
  "All",
  "Mobile",
  "Web",
  "Security",
  "Featured",
];

export default function Projects() {
  const [activeFilter, setActiveFilter] =
    useState<ProjectCategory>("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.category.includes(activeFilter)
        );

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Page Header */}
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-20 text-center lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          My <span className="text-primary">Projects</span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-foreground/50">
          A collection of digital products and experiences I've built,
          focusing on high-performance mobile applications and clean
          web interfaces.
        </p>
      </section>

      {/* Filters */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-center gap-2 overflow-x-auto pb-2">
          {filters.map((filter) => {
            const active = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`shrink-0 rounded-lg px-5 py-2.5 text-xs font-medium transition-all ${
                  active
                    ? "bg-brand-gradient text-white shadow-lg shadow-primary/25"
                    : "bg-muted text-foreground/50 hover:bg-muted/80"
                }`}
              >
                {filter}
              </button>
            );
          })}
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/5 text-sm text-foreground/40 transition-colors hover:text-foreground"
          >
            ›
          </button>
        </div>
      </section>
{/* Projects Grid */}
<section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {filteredProjects.map((project) => (
      <Link
  key={project.title}
  to={project.title === "Bunyan" ? "/projects/bunyan" : "#"}
  className="group block overflow-hidden rounded-2xl border border-white/10 bg-card/50 transition-all hover:-translate-y-1 hover:border-primary/30"
>
        {/* Project Image */}
        <div className="aspect-[16/10] overflow-hidden bg-muted">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Project Info */}
        <div className="p-6">
          <h2 className="text-xl font-bold text-foreground">
            {project.title}
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-foreground/50">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-foreground/60"
              >
                {tag}
              </span>
            ))}
          </div>

          <button
            type="button"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            View Project
            <ExternalLink className="h-4 w-4" />
          </button>
        </div>
      </Link>
    ))}
  </div>
</section>
      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-card/50 p-8 sm:p-10 lg:p-12">
          {/* Glow */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-primary/5 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <h2 className="text-2xl font-extrabold sm:text-3xl">
                Have a similar project?
              </h2>

              <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground/50">
                Let's collaborate and build something extraordinary
                together. I'm always open to discussing new opportunities
                and creative ideas.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-brand-gradient px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-transform hover:scale-105"
            >
              Contact Me
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}