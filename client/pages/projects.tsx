import { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

import {
  projectData,
  type ProjectCategory,
} from "../data/projectData";

const {
  header,
  filters,
  projects,
  pagination,
  cta,
} = projectData;

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

      {/* ================= PAGE HEADER ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-20 text-center lg:px-8">

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          {header.title}{" "}
          <span className="text-primary">
            {header.highlight}
          </span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-foreground/50">
          {header.description}
        </p>

      </section>


      {/* ================= PROJECTS GRID ================= */}
      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8">

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {filteredProjects.map((project) => (

            <Link
              key={project.title}
              to={project.link || "#"}
              className="group overflow-hidden rounded-2xl border border-white/[0.06] bg-[#24252a] transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.12]"
            >

              {/* Project Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#1f2024]">

                <img
                  src={`${import.meta.env.BASE_URL}${project.image.replace(
                    /^\/+/,
                    ""
                  )}`}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Featured Badge */}
                {project.featured && (
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


        {/* ================= PAGINATION ================= */}
        <div className="mt-10 flex items-center justify-center gap-2">

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-sm text-white/40 transition hover:bg-white/5 hover:text-white"
          >
            ‹
          </button>


          {pagination.pages.map((page) => (

            <button
              key={page}
              type="button"
              className={`flex h-9 w-9 items-center justify-center rounded-lg text-xs transition ${
                page === 1
                  ? "bg-gradient-to-r from-violet-500 to-indigo-500 font-semibold text-white shadow-lg shadow-violet-500/25"
                  : "text-white/45 hover:bg-white/5 hover:text-white"
              }`}
            >
              {page}
            </button>

          ))}


          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-sm text-white/40 transition hover:bg-white/5 hover:text-white"
          >
            ›
          </button>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-8">

        <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-r from-[#191a2d] via-[#20202a] to-[#191a20] px-8 py-10 sm:px-12 sm:py-12">

          {/* Purple Glow */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-52 w-52 rounded-full bg-violet-600/10 blur-3xl" />


          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            {/* Text */}
            <div>

              <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                {cta.title}
              </h2>

              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/45">
                {cta.description}
              </p>

            </div>


            {/* Button + Icon */}
            <div className="flex items-center gap-5">

              <Link
                to={cta.buttonLink}
                className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(124,58,237,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(124,58,237,0.5)]"
              >
                {cta.buttonText}

                <ArrowRight className="h-4 w-4" />
              </Link>


              <a
                href={cta.externalLink}
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