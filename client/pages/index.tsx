import { homeData } from "../data/homeData";
import { Link } from "react-router-dom";

import {
  Activity,
  Award,
  Box,
  CheckCircle2,
  Code2,
  Database,
  Download,
  Flame,
  GitBranch,
  GitCommit,
  Hexagon,
  PenTool,
  Smartphone,
  Sparkles,
  Users,
} from "lucide-react";

const {
  hero,
  stats,
  about,
  projects,
  techStack,
  cta,
} = homeData;

const iconMap = {
  Activity,
  Users,
  Award,
  Download,
  Smartphone,
  Hexagon,
  Flame,
  Database,
  GitBranch,
  GitCommit,
  Box,
  PenTool,
};

export default function Index() {
  return (
    <div>
      {/* ================= HERO ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-14 pt-16 lg:px-8 lg:pb-16 lg:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">

          <div className="relative z-10">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-[#0b1020] px-4 py-1.5 text-xs font-medium text-foreground/80 shadow-sm">
              {hero.greeting}
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {hero.title}{" "}
              <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                {hero.highlightedTitle}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-foreground/55 sm:text-base">
              {hero.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={hero.hireButton.href}
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-violet-500/50"
              >
                {hero.hireButton.text}
              </a>

              <Link
                to={hero.contactButton.to}
                className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/[0.02] px-6 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-violet-500/40 hover:text-violet-400"
              >
                {hero.contactButton.text}
              </Link>
            </div>
          </div>

          {/* PROFILE */}
          <div className="relative mx-auto flex h-[330px] w-[330px] items-center justify-center sm:h-[380px] sm:w-[380px] lg:ml-auto lg:mr-6">

            <div className="absolute inset-0 rounded-full border border-primary/30" />

            <div className="absolute inset-4 rounded-full border-2 border-primary/30 shadow-[0_0_40px_rgba(124,58,237,0.18)]" />

            <div className="absolute inset-12 rounded-full bg-primary/20 blur-3xl" />

            <div className="relative h-[245px] w-[245px] overflow-hidden rounded-full border-4 border-[#11152a] bg-card shadow-[0_0_35px_rgba(124,58,237,0.35)] sm:h-[285px] sm:w-[285px]">
              <img
                src={hero.profileImage}
                alt={hero.profileImageAlt}
                className="h-full w-full object-cover"
              />
            </div>

            <span className="absolute right-10 top-2 flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-[#0b1020] text-primary shadow-lg shadow-primary/10">
              <Smartphone className="h-5 w-5" />
            </span>

            <span className="absolute left-0 top-[38%] flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-[#0b1020] text-emerald-400 shadow-lg">
              <Code2 className="h-5 w-5" />
            </span>

            <span className="absolute bottom-[20%] right-0 flex h-11 w-11 items-center justify-center rounded-xl border border-yellow-400/20 bg-[#0b1020] text-yellow-400 shadow-lg">
              <Database className="h-5 w-5" />
            </span>

            <span className="absolute bottom-0 left-[28%] flex h-11 w-11 items-center justify-center rounded-xl border border-orange-400/20 bg-[#0b1020] text-orange-400 shadow-lg">
              <Code2 className="h-5 w-5" />
            </span>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid grid-cols-2 overflow-hidden rounded-xl border border-white/[0.07] bg-[#080d19]/80 sm:grid-cols-4">

          {stats.map(({ icon, value, label }, index) => {
            const Icon =
              iconMap[icon as keyof typeof iconMap];

            return (
              <div
                key={label}
                className={`flex items-center gap-3 px-5 py-5 sm:px-7 ${
                  index !== 0
                    ? "border-l border-white/[0.06]"
                    : ""
                }`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" />
                </span>

                <div>
                  <p className="text-xl font-extrabold leading-none text-foreground sm:text-2xl">
                    {value}
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-wide text-foreground/40 sm:text-xs">
                    {label}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 lg:px-8"
      >
        <div className="rounded-3xl border border-white/10 bg-card/40 p-8 sm:p-12">

          <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            <Sparkles className="h-4 w-4" />
            {about.badge}
          </span>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            {about.title}
          </h2>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-2">

            <div className="overflow-hidden rounded-2xl border border-white/10">
              <img
                src={about.image}
                alt={about.imageAlt}
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <p className="text-base leading-relaxed text-foreground/60 sm:text-lg">
                {about.description}
              </p>

              <ul className="mt-8 space-y-4">
                {about.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 text-foreground/80"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    {point}
                  </li>
                ))}
              </ul>

              <Link
                to={about.button.to}
                className="mt-10 inline-flex items-center justify-center rounded-lg bg-brand-gradient px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-transform hover:scale-[1.03]"
              >
                {about.button.text}
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section
        id="projects"
        className="mx-auto max-w-7xl scroll-mt-24 px-6 py-8 lg:px-8"
      >
        <div className="flex flex-wrap items-end justify-between gap-4">

          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              {projects.title}
            </h2>

            <p className="mt-2 text-foreground/50">
              {projects.subtitle}
            </p>
          </div>

          <Link
            to={projects.viewAllButton.to}
            className="text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            {projects.viewAllButton.text}
          </Link>

        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">

          {projects.items.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-card/40 transition-colors hover:border-primary/30"
            >
              <div className="relative h-44 overflow-hidden">

                <img
                  src={`${import.meta.env.BASE_URL}${project.image.replace(
                    /^\/+/,
                    ""
                  )}`}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {project.tag && (
                  <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white">
                    {project.tag}
                  </span>
                )}

              </div>

              <div className="p-6">

                <h3 className="text-lg font-bold text-foreground">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-foreground/55">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-foreground/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ================= TECH STACK ================= */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <p className="text-sm font-semibold text-foreground/50">
          {techStack.title}
        </p>

        <div className="mt-6 flex flex-wrap gap-x-10 gap-y-4">

          {techStack.items.map(({ icon, label }) => {
            const Icon =
              iconMap[icon as keyof typeof iconMap];

            return (
              <div
                key={label}
                className="flex items-center gap-2 text-foreground/60"
              >
                <Icon className="h-5 w-5 text-primary" />

                <span className="text-sm font-medium">
                  {label}
                </span>
              </div>
            );
          })}

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">

        <div className="relative overflow-hidden rounded-2xl border border-violet-500/20 bg-gradient-to-r from-[#151044] via-[#21165c] to-[#24136b] px-7 py-7 shadow-[0_12px_40px_rgba(124,58,237,0.18)] sm:px-8 sm:py-8 lg:px-8 lg:py-7">

          <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-20 left-1/3 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">

            <div>
              <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                {cta.title}
              </h2>

              <p className="mt-2 text-xs text-white/45 sm:text-sm">
                {cta.description}
              </p>
            </div>

            <Link
              to={cta.button.to}
              className="shrink-0 rounded-none bg-gradient-to-r from-violet-500 to-indigo-500 px-6 py-3 text-xs font-semibold text-white shadow-lg shadow-violet-500/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-violet-500/50"
            >
              {cta.button.text}
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
}