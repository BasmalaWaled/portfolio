 import { useState } from "react";
 import { ArrowLeft, ExternalLink, GitBranch, Calendar, User, Layers, Code2, ArrowRight, } from "lucide-react";
import { Link } from "react-router-dom";
import { bunyanData } from "../data/bunyanData";
const BASE = import.meta.env.BASE_URL;
const imagePath = (path: string) =>
  `${BASE}${path.replace(/^\/+/, "")}`;
export default function Bunyan() { 
  const [activeTab, setActiveTab] = useState("Overview");
  const project = bunyanData;
return ( <div className="min-h-screen bg-background text-foreground">
  <main>

    {/* ================= HERO ================= */}

    <section className="mx-auto max-w-7xl px-6 pb-10 pt-10 lg:px-8">

      {/* Breadcrumb */}

      <div className="mb-8 flex items-center gap-2 text-xs text-foreground/40">

        <Link
          to="/projects"
          className="hover:text-primary"
        >
          Projects
        </Link>

        <span>/</span>

        <span>
          {project.name}
        </span>

      </div>


      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">

        {/* ================= LEFT ================= */}

        <div>

          <Link
            to="/projects"
            className="mb-6 inline-flex items-center gap-2 text-xs text-foreground/50 transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />

            Back to Projects
          </Link>


          {/* Icon */}

          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">

            <Code2 className="h-5 w-5" />

          </div>


          {/* Title */}

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">

            {project.name}

          </h1>


          {/* Description */}

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground/50">

            {project.description}

          </p>


          {/* Technologies */}

          <div className="mt-6 flex flex-wrap gap-2">

            {project.technologies.map((technology) => (

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
              href={project.links.live}
              className="inline-flex items-center gap-2 rounded-lg bg-brand-gradient px-5 py-3 text-xs font-semibold text-white shadow-lg shadow-primary/20"
            >

              <ExternalLink className="h-3.5 w-3.5" />

            </a>


            <a
              href={project.links.github}
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-white/10"
            >

              <GitBranch className="h-4 w-4" />

              GitHub

            </a>

          </div>

        </div>


        {/* ================= MAIN IMAGE ================= */}

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-card shadow-xl">

          <img
            src={imagePath(project.mainImage)}
            alt={`${project.name} project`}
            className="h-[320px] w-full object-cover"
          />

        </div>

      </div>

    </section>



    {/* ================= CONTENT ================= */}

    <section className="mx-auto max-w-7xl px-6 lg:px-8">

      <div className="grid gap-10 lg:grid-cols-[1fr_320px]">


        {/* ================= MAIN CONTENT ================= */}

        <div>


          {/* Tabs */}

        <div className="mt-12 border-b border-white/10">
          <div className="flex overflow-x-auto">
            {["Overview", "Features", "Tech Stack", "Challenges", "Gallery"].map(
              (tab) => (
                <button
                  key={tab}
                  type="button"
                  aria-pressed={activeTab === tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative min-w-[110px] px-4 pb-5 text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? "text-primary"
                      : "text-foreground/40 hover:text-foreground/70"
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <span className="absolute bottom-0 left-1/2 h-1 w-20 -translate-x-1/2 rounded-full bg-primary" />
                  )}
                </button>
              ),
            )}
          </div>
        </div>

{/* ================= OVERVIEW ================= */}

{activeTab === "Overview" && (
  <section className="mt-8 space-y-10">
    <div>
      <h2 className="text-2xl font-bold">The Problem</h2>

      <p className="mt-4 text-sm leading-7 text-foreground/55">
        {project.problem}
      </p>
    </div>

    <div>
      <h2 className="text-2xl font-bold">The Solution</h2>

      <p className="mt-4 text-sm leading-7 text-foreground/55">
        {project.solution}
      </p>
    </div>
  </section>
)}

{/* ================= FEATURES ================= */}

{activeTab === "Features" && (
  <section className="mt-8">

    <h2 className="text-2xl font-bold">
      Key Features
    </h2>

    <div className="mt-8 grid gap-5 sm:grid-cols-2">

      {/* Feature 1 */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <h3 className="text-lg font-semibold">
          Brand Management
        </h3>

        <p className="mt-3 text-sm leading-6 text-foreground/55">
          Manage brand identity, information, and digital assets
          from one centralized platform.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <h3 className="text-lg font-semibold">
          Team Collaboration
        </h3>

        <p className="mt-3 text-sm leading-6 text-foreground/55">
          Manage team members and collaborate efficiently with
          different users and roles.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <h3 className="text-lg font-semibold">
          Asset Management
        </h3>

        <p className="mt-3 text-sm leading-6 text-foreground/55">
          Organize, manage, and access important brand assets
          easily in one place.
        </p>
      </div>

      {/* Feature 4 */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <h3 className="text-lg font-semibold">
          Digital Presence
        </h3>

        <p className="mt-3 text-sm leading-6 text-foreground/55">
          Keep your brand's digital presence organized and
          consistent across the platform.
        </p>
      </div>

    </div>

  </section>
)}


{/* ================= TECH STACK ================= */}

{activeTab === "Tech Stack" && (
  <section className="mt-8">

    <h2 className="text-2xl font-bold">
      Technologies Used
    </h2>

    <p className="mt-3 text-sm leading-7 text-foreground/55">
      Technologies and tools used to build the Bunyan platform.
    </p>

    <div className="mt-8 flex flex-wrap gap-3">

      {project.technologies.map((technology) => (
        <span
          key={technology}
          className="rounded-full border border-primary/20 bg-primary/10 px-5 py-3 text-sm font-medium text-primary"
        >
          {technology}
        </span>
      ))}

    </div>

  </section>
)}


{/* ================= CHALLENGES ================= */}

{activeTab === "Challenges" && (
  <section className="mt-8">

    <h2 className="text-2xl font-bold">
      Challenges & Solutions
    </h2>

    <div className="mt-8 space-y-6">

      {/* Challenge 1 */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

        <h3 className="text-lg font-semibold">
          Managing Multiple Brand Assets
        </h3>

        <p className="mt-3 text-sm leading-7 text-foreground/55">
          Managing different brand assets and keeping them
          organized can become difficult when everything is
          distributed across different platforms.
        </p>

        <div className="mt-5 border-l-2 border-primary pl-4">

          <p className="text-sm leading-7 text-foreground/60">
            Bunyan provides a centralized platform where brand
            assets can be organized and accessed more efficiently.
          </p>

        </div>

      </div>


      {/* Challenge 2 */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

        <h3 className="text-lg font-semibold">
          Team Collaboration
        </h3>

        <p className="mt-3 text-sm leading-7 text-foreground/55">
          Teams need an easy way to collaborate while keeping
          access and responsibilities organized.
        </p>

        <div className="mt-5 border-l-2 border-primary pl-4">

          <p className="text-sm leading-7 text-foreground/60">
            The platform brings team collaboration and brand
            management features together in one interface.
          </p>

        </div>

      </div>


      {/* Challenge 3 */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

        <h3 className="text-lg font-semibold">
          Keeping the Interface Simple
        </h3>

        <p className="mt-3 text-sm leading-7 text-foreground/55">
          A platform with multiple management features can become
          complicated for users.
        </p>

        <div className="mt-5 border-l-2 border-primary pl-4">

          <p className="text-sm leading-7 text-foreground/60">
            Bunyan focuses on a clean and intuitive interface to
            make brand management easier for users.
          </p>

        </div>

      </div>

    </div>

  </section>
)}


{/* ================= GALLERY ================= */}

{activeTab === "Gallery" && (
  <section className="mt-10">

    <h2 className="text-2xl font-bold">
      Project Gallery
    </h2>

    <p className="mt-3 text-sm leading-7 text-foreground/55">
      A collection of screens and interfaces from the Bunyan project.
    </p>

    <div className="mt-8 grid gap-6 sm:grid-cols-2">

      {project.gallery.map((image, index) => (
        <div
          key={image}
          className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
        >
          <img
            src={imagePath(image)}
            alt={`Bunyan project screenshot ${index + 1}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ))}

    </div>

  </section>
)}
  </div>
        {/* ================= SIDEBAR ================= */}

        <aside className="flex flex-col gap-6">


          {/* ================= PROJECT DETAILS ================= */}

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
                    {project.details.role}
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
                    {project.details.timeline}
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
                    {project.details.team}
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
                    {project.details.client}
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
                    {project.details.date}
                  </p>

                </div>

              </div>

            </div>



            {/* Share */}

            <button
              type="button"
              className="mt-8 flex w-full items-center justify-center rounded-xl bg-[#292a36] py-4 text-xs font-semibold text-violet-400 transition-all duration-300 hover:bg-[#303143] hover:text-violet-300"
            >

              Share Project

            </button>

          </div>



          {/* ================= SIMILAR SOLUTION ================= */}

          <div className="rounded-2xl border border-white/[0.06] bg-gradient-to-br from-violet-500/20 via-[#24252a] to-[#24252a] p-6">

            <h3 className="text-sm font-bold text-white">

              {project.similarSolution.title}

            </h3>


            <p className="mt-3 text-xs leading-relaxed text-white/45">

              {project.similarSolution.description}

            </p>


            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-violet-400 transition hover:text-violet-300"
            >

              {project.similarSolution.buttonText}

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

            {project.cta.title}

          </h2>


          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/50 sm:text-base">

            {project.cta.description}

          </p>


          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">


            <Link
              to="/contact"
              className="inline-flex min-w-[195px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(124,58,237,0.35)] transition-all duration-300 hover:scale-105"
            >

              {project.cta.primaryButton}

              <ArrowRight className="h-4 w-4" />

            </Link>


            <Link
              to="/projects"
             className="inline-flex min-w-[195px] items-center justify-center rounded-xl bg-[#20212a]/70 px-7 py-3.5 text-sm font-semibold text-white/90 transition-all duration-300 hover:bg-[#292a35]"
            >

              {project.cta.secondaryButton}

            </Link>

          </div>

        </div>

      </div>

    </section>

  </main>





</div>
); }