import {
  ArrowLeft,
  ExternalLink,
  GitBranch,
  Calendar,
  User,
  Layers,
  Code2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const galleryImages = [
  "/image/a5cc9721-ef24-4852-81b0-8221ab8a26fc.webp",
  "/image/88a01d4d-0554-4ed3-a16c-b9166ca562f4.webp",
  "/image/ae355335-a162-442c-a560-4113fd87e5f1.webp",
];

const technologies = ["Flutter", "Laravel", "Bloc", "MySQL"];

export default function Bunyan() {
  return (
    <div className="min-h-screen bg-background text-foreground">

     

      {/* ================= HERO ================= */}
      <main>
        <section className="mx-auto max-w-7xl px-6 pb-10 pt-10 lg:px-8">

          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-xs text-foreground/40">
            <Link to="/projects" className="hover:text-primary">
              Projects
            </Link>

            <span>/</span>

            <span>Bunyan</span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">

            {/* Left */}
            <div>

              <Link
                to="/projects"
                className="mb-6 inline-flex items-center gap-2 text-xs text-foreground/50 transition-colors hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Projects
              </Link>

              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Code2 className="h-5 w-5" />
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                Bunyan
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground/50">
                Brand management platform that helps companies manage
                their identity, teams, assets and digital presence.
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-foreground/70"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-lg bg-brand-gradient px-5 py-3 text-xs font-semibold text-white shadow-lg shadow-primary/20"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <GitBranch className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>

            {/* Main Image */}
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-card shadow-xl">
  <img
    src={`${import.meta.env.BASE_URL}image/8801618c-01aa-4616-954e-b42ff121cb23.webp`}
    alt="Bunyan project"
    className="h-[320px] w-full object-cover"
  />
</div>

          </div>
        </section>

        {/* ================= CONTENT ================= */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[1fr_320px]">

            {/* Main content */}
            <div>

              {/* Tabs */}
              <div className="flex gap-7 border-b border-white/10 text-xs">
                <button className="border-b-2 border-primary pb-4 text-primary">
                  Overview
                </button>

                <button className="pb-4 text-foreground/40 hover:text-white">
                  Features
                </button>

                <button className="pb-4 text-foreground/40 hover:text-white">
                  Tech Stack
                </button>

                <button className="pb-4 text-foreground/40 hover:text-white">
                  Challenges
                </button>

                <button className="pb-4 text-foreground/40 hover:text-white">
                  Gallery
                </button>
              </div>

              {/* The Problem */}
              <div className="mt-8">

                <h2 className="flex items-center gap-2 text-sm font-bold">
                  <span className="text-primary">◎</span>
                  The Problem
                </h2>

                <p className="mt-4 text-sm leading-7 text-foreground/55">
                  Companies struggle to manage their brand assets,
                  team members, and permissions across different
                  platforms. Managing multiple brand identities and
                  keeping everything organized can become complicated.
                </p>

              </div>

              {/* Solution */}
              <div className="mt-8">

                <h2 className="flex items-center gap-2 text-sm font-bold">
                  <span className="text-primary">◎</span>
                  The Solution
                </h2>

                <p className="mt-4 text-sm leading-7 text-foreground/55">
                  Bunyan provides a centralized platform that unifies
                  brand management, team collaboration and powerful
                  features. It provides a simple and intuitive
                  interface for teams to manage their brand assets
                  efficiently.
                </p>

              </div>

              {/* Gallery */}
              <div className="mt-10">

                <h2 className="text-sm font-bold">
                  Project Gallery
                </h2>

                <div className="mt-5 grid grid-cols-3 gap-4">

                  {galleryImages.map((image, index) => (
                   <div
  key={image}
  className="overflow-hidden rounded-xl border border-white/10"
>
  <img
    src={`${import.meta.env.BASE_URL}${image.replace(/^\/+/, "")}`}
    alt={`Bunyan screenshot ${index + 1}`}
    className="h-32 w-full object-cover transition-transform duration-500 hover:scale-105"
  />
</div>
                  ))}

                </div>
              </div>

            </div>

      {/* ================= PROJECT DETAILS ================= */}
<aside className="flex flex-col gap-6">

  {/* Project Details Card */}
  <div className="rounded-2xl border border-white/[0.07] bg-[#24252a] p-6">

    <h2 className="text-sm font-bold text-white">
      Project Details
    </h2>

    <div className="mt-6 space-y-6">

      {/* Role */}
      <div className="flex items-start gap-3">
        <div className="mt-0.5 text-violet-500">
          <Code2 className="h-4 w-4" />
        </div>

        <div>
          <p className="text-[9px] uppercase tracking-wide text-white/30">
            Role
          </p>

          <p className="mt-1 text-xs font-medium text-white">
            Full Stack Developer
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="flex items-start gap-3">
        <div className="mt-0.5 text-violet-500">
          <Calendar className="h-4 w-4" />
        </div>

        <div>
          <p className="text-[9px] uppercase tracking-wide text-white/30">
            Timeline
          </p>

          <p className="mt-1 text-xs font-medium text-white">
            3 Months
          </p>
        </div>
      </div>

      {/* Team */}
      <div className="flex items-start gap-3">
        <div className="mt-0.5 text-violet-500">
          <Layers className="h-4 w-4" />
        </div>

        <div>
          <p className="text-[9px] uppercase tracking-wide text-white/30">
            Team
          </p>

          <p className="mt-1 text-xs font-medium text-white">
            3 Developers
          </p>
        </div>
      </div>

      {/* Client */}
      <div className="flex items-start gap-3">
        <div className="mt-0.5 text-violet-500">
          <User className="h-4 w-4" />
        </div>

        <div>
          <p className="text-[9px] uppercase tracking-wide text-white/30">
            Client
          </p>

          <p className="mt-1 text-xs font-medium text-white">
            Bunyan Inc.
          </p>
        </div>
      </div>

      {/* Date */}
      <div className="flex items-start gap-3">
        <div className="mt-0.5 text-violet-500">
          <Calendar className="h-4 w-4" />
        </div>

        <div>
          <p className="text-[9px] uppercase tracking-wide text-white/30">
            Date
          </p>

          <p className="mt-1 text-xs font-medium text-white">
            Jan 2024 - Jun 2024
          </p>
        </div>
      </div>

    </div>

    {/* Share Project */}
    <button
      type="button"
      className="mt-8 flex w-full items-center justify-center rounded-xl bg-[#292a36] py-4 text-xs font-semibold text-violet-400 transition-all duration-300 hover:bg-[#303143] hover:text-violet-300"
    >
      Share Project
    </button>

  </div>


  {/* ================= NEED A SIMILAR SOLUTION ================= */}
  <div className="rounded-2xl border border-white/[0.06] bg-gradient-to-br from-violet-500/20 via-[#24252a] to-[#24252a] p-6">

    <h3 className="text-sm font-bold text-white">
      Need a similar solution?
    </h3>

    <p className="mt-3 text-xs leading-relaxed text-white/45">
      I specialize in building complex management platforms
      with Flutter and Laravel.
    </p>

    <Link
      to="/contact"
      className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-violet-400 transition hover:text-violet-300"
    >
      Start a conversation
      <ArrowRight className="h-3.5 w-3.5" />
    </Link>

  </div>

</aside>
</div>
</section>

        {/* ================= CTA ================= */}
        <section className="mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-8">
  <div className="relative overflow-hidden rounded-[32px] border border-white/[0.05] bg-gradient-to-r from-[#292b57] via-[#292a38] to-[#30243e] px-8 py-14 text-center sm:px-12 sm:py-16">

    <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-violet-600/10 blur-3xl" />

    <div className="pointer-events-none absolute -bottom-32 -right-24 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

    <div className="relative mx-auto max-w-2xl">

      <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        Have a similar project?
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/50 sm:text-base">
        Let's build something great together. I'm available for freelance
        projects and full-time opportunities.
      </p>

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

        <Link
          to="/contact"
          className="inline-flex min-w-[195px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(124,58,237,0.35)] transition-all duration-300 hover:scale-105"
        >
          Contact Me
          <ArrowRight className="h-4 w-4" />
        </Link>

        <Link
          to="/projects"
          className="inline-flex min-w-[195px] items-center justify-center rounded-xl bg-[#20212a]/70 px-7 py-3.5 text-sm font-semibold text-white/90 transition-all duration-300 hover:bg-[#292a35]"
        >
          View More Projects
        </Link>

      </div>

    </div>
  </div>
</section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/5 py-8">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-xs text-foreground/40 sm:flex-row lg:px-8">

          <p>
            © 2026 HANY.dev. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>

        </div>

      </footer>

    </div>
  );
}