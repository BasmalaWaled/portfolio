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

     {/* Projects Grid */}
<section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {filteredProjects.map((project) => (
      <Link
        key={project.title}
        to={project.title === "Bunyan" ? "/projects/bunyan" : "#"}
        className="group overflow-hidden rounded-2xl border border-white/[0.06] bg-[#24252a] transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.12]"
      >
        {/* Project Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-[#1f2024]">
          <img
            src={`${import.meta.env.BASE_URL}${project.image.replace(/^\/+/, "")}`}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

         {/* Featured Badge */}
{project.title === "Bunyan" && (
  <span className="absolute right-5 top-5 rounded-full bg-[#343c72]/80 px-3 py-1 text-[10px] font-medium text-[#747cff] backdrop-blur-sm">
    FEATURED
  </span>
)}
        </div>

        {/* Project Info */}
        <div className="bg-[#24252a] p-5">
          <h2 className="text-lg font-bold text-white">
            {project.title}
          </h2>

          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-white/45">
            {project.description}
          </p>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-medium text-white/45"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    ))}
  </div>

  {/* Pagination */}
  <div className="mt-10 flex items-center justify-center gap-2">
    <button
      type="button"
      className="flex h-9 w-9 items-center justify-center rounded-lg text-sm text-white/40 transition hover:bg-white/5 hover:text-white"
    >
      ‹
    </button>

    <button
      type="button"
      className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-r from-violet-500 to-indigo-500 text-xs font-semibold text-white shadow-lg shadow-violet-500/25"
    >
      1
    </button>

    <button
      type="button"
      className="flex h-9 w-9 items-center justify-center rounded-lg text-xs text-white/45 transition hover:bg-white/5 hover:text-white"
    >
      2
    </button>

    <button
      type="button"
      className="flex h-9 w-9 items-center justify-center rounded-lg text-xs text-white/45 transition hover:bg-white/5 hover:text-white"
    >
      3
    </button>

    <button
      type="button"
      className="flex h-9 w-9 items-center justify-center rounded-lg text-sm text-white/40 transition hover:bg-white/5 hover:text-white"
    >
      ›
    </button>
  </div>
</section>

{/* CTA */}
<section className="mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-8">
  <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-r from-[#191a2d] via-[#20202a] to-[#191a20] px-8 py-10 sm:px-12 sm:py-12">
    
    {/* Purple Glow */}
    <div className="pointer-events-none absolute -left-20 -top-20 h-52 w-52 rounded-full bg-violet-600/10 blur-3xl" />

    <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
      
      {/* Text */}
      <div>
        <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
          Have a similar project?
        </h2>

        <p className="mt-4 max-w-md text-sm leading-relaxed text-white/45">
          Let's collaborate and build something extraordinary
          together. I'm always open to discussing new opportunities
          and creative ideas.
        </p>
      </div>

      {/* Button + Icons */}
      <div className="flex items-center gap-5">
        <Link
          to="/contact"
 className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(124,58,237,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(124,58,237,0.5)]"
        >
          Contact Me
          <ArrowRight className="h-4 w-4" />
        </Link>

        {/* <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="text-white/60 transition hover:text-white"
        >
          <Github className="h-5 w-5" />
        </a> */}

        <a
          href="#"
          className="text-white/60 transition hover:text-white"
        >
          <ExternalLink className="h-5 w-5" />
        </a>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}