import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Code2,
  ExternalLink,
  GitBranch,
  Layers,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import { portfolioData } from "../data/portfolioData";

const BASE = import.meta.env.BASE_URL;
const imagePath = (path: string) => `${BASE}${path.replace(/^\/+/, "")}`;
const tabs = ["Overview", "Features", "Tech Stack", "Challenges", "Gallery"];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("Overview");
  const project = portfolioData;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <section className="mx-auto max-w-7xl px-6 pb-10 pt-10 lg:px-8">
          <div className="mb-8 flex items-center gap-2 text-xs text-foreground/40">
            <Link to="/projects" className="hover:text-primary">Projects</Link>
            <span>/</span>
            <span>{project.name}</span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <Link to="/projects" className="mb-6 inline-flex items-center gap-2 text-xs text-foreground/50 hover:text-primary">
                <ArrowLeft className="h-4 w-4" />
                Back to Projects
              </Link>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Code2 className="h-5 w-5" />
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{project.name}</h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground/50">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span key={technology} className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-foreground/70">
                    {technology}
                  </span>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={project.links.live} className="inline-flex items-center gap-2 rounded-lg bg-brand-gradient px-5 py-3 text-xs font-semibold text-white shadow-lg shadow-primary/20">
                  <ExternalLink className="h-3.5 w-3.5" />
                  Live Preview
                </a>
                <a href={project.links.github} className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-xs font-semibold text-white hover:bg-white/10">
                  <GitBranch className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-card shadow-xl">
              <img src={imagePath(project.mainImage)} alt={`${project.name} project`} className="h-[320px] w-full object-cover" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
            <div>
              <div className="border-b border-white/10">
                <div className="flex overflow-x-auto">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      aria-pressed={activeTab === tab}
                      onClick={() => setActiveTab(tab)}
                      className={`relative min-w-[110px] px-4 pb-5 text-sm font-medium transition-colors ${activeTab === tab ? "text-primary" : "text-foreground/40 hover:text-foreground/70"}`}
                    >
                      {tab}
                      {activeTab === tab && <span className="absolute bottom-0 left-1/2 h-1 w-20 -translate-x-1/2 rounded-full bg-primary" />}
                    </button>
                  ))}
                </div>
              </div>

              {activeTab === "Overview" && (
                <section className="mt-8 space-y-10">
                  <div>
                    <h2 className="text-2xl font-bold">The Problem</h2>
                    <p className="mt-4 text-sm leading-7 text-foreground/55">{project.problem}</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">The Solution</h2>
                    <p className="mt-4 text-sm leading-7 text-foreground/55">{project.solution}</p>
                  </div>
                </section>
              )}

              {activeTab === "Features" && (
                <section className="mt-8">
                  <h2 className="text-2xl font-bold">Key Features</h2>
                  <div className="mt-8 grid gap-5 sm:grid-cols-2">
                    {[
                      ["Responsive Design", "A consistent experience across desktop, tablet, and mobile screens."],
                      ["Project Showcase", "Present completed work with clear descriptions, technologies, and visual previews."],
                      ["Reusable Components", "Shared layouts and UI components keep the experience consistent and maintainable."],
                      ["Clear Navigation", "Visitors can quickly move between projects, experience, and contact information."],
                    ].map(([title, description]) => (
                      <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                        <h3 className="text-lg font-semibold">{title}</h3>
                        <p className="mt-3 text-sm leading-6 text-foreground/55">{description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {activeTab === "Tech Stack" && (
                <section className="mt-8">
                  <h2 className="text-2xl font-bold">Technologies Used</h2>
                  <p className="mt-3 text-sm leading-7 text-foreground/55">Technologies and tools used to build this portfolio.</p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.technologies.map((technology) => (
                      <span key={technology} className="rounded-full border border-primary/20 bg-primary/10 px-5 py-3 text-sm font-medium text-primary">{technology}</span>
                    ))}
                  </div>
                </section>
              )}

              {activeTab === "Challenges" && (
                <section className="mt-8">
                  <h2 className="text-2xl font-bold">Challenges & Solutions</h2>
                  <div className="mt-8 space-y-6">
                    {[
                      ["Showing Different Projects Clearly", "Each project has a different purpose and visual style.", "Dedicated project details pages make every case study easy to understand."],
                      ["Responsive Layout", "The interface must remain usable on smaller screens.", "Responsive grid layouts and flexible controls keep the content accessible."],
                      ["Keeping the Experience Consistent", "Multiple pages can become difficult to maintain when styles are duplicated.", "Reusable components and shared design patterns keep the portfolio consistent."],
                    ].map(([title, challenge, solution]) => (
                      <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                        <h3 className="text-lg font-semibold">{title}</h3>
                        <p className="mt-3 text-sm leading-7 text-foreground/55">{challenge}</p>
                        <p className="mt-5 border-l-2 border-primary pl-4 text-sm leading-7 text-foreground/60">{solution}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {activeTab === "Gallery" && (
                <section className="mt-10">
                  <h2 className="text-2xl font-bold">Project Gallery</h2>
                  <p className="mt-3 text-sm leading-7 text-foreground/55">A preview of the portfolio website.</p>
                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    {project.gallery.map((image, index) => (
                      <div key={`${image}-${index}`} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                        <img src={imagePath(image)} alt={`${project.name} screenshot ${index + 1}`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            <aside className="flex flex-col gap-6">
              <div className="rounded-2xl border border-white/[0.07] bg-[#24252a] p-6">
                <h2 className="text-sm font-bold text-white">Project Details</h2>
                <div className="mt-6 space-y-6">
                  {[
                    [Code2, "Role", project.details.role],
                    [Calendar, "Timeline", project.details.timeline],
                    [Layers, "Team", project.details.team],
                    [User, "Client", project.details.client],
                    [Calendar, "Date", project.details.date],
                  ].map(([Icon, label, value]) => (
                    <div key={label as string} className="flex items-start gap-3">
                      <div className="mt-0.5 text-violet-500"><Icon className="h-4 w-4" /></div>
                      <div>
                        <p className="text-[9px] uppercase tracking-wide text-white/30">{label as string}</p>
                        <p className="mt-1 text-xs font-medium text-white">{value as string}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.06] bg-gradient-to-br from-violet-500/20 via-[#24252a] to-[#24252a] p-6">
                <h3 className="text-sm font-bold text-white">{project.similarSolution.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-white/45">{project.similarSolution.description}</p>
                <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-violet-400 hover:text-violet-300">
                  {project.similarSolution.buttonText}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-8">
          <div className="rounded-[32px] border border-white/[0.05] bg-gradient-to-r from-[#292b57] via-[#292a38] to-[#30243e] px-8 py-14 text-center sm:px-12 sm:py-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{project.cta.title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/50 sm:text-base">{project.cta.description}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/contact" className="inline-flex min-w-[195px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 px-7 py-3.5 text-sm font-semibold text-white">
                {project.cta.primaryButton}<ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/projects" className="inline-flex min-w-[195px] items-center justify-center rounded-xl bg-[#20212a]/70 px-7 py-3.5 text-sm font-semibold text-white/90">
                {project.cta.secondaryButton}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
