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

const stats = [
  { icon: Activity, value: "15+", label: "Projects Completed" },
  { icon: Users, value: "5+", label: "Client Worldwide" },
  { icon: Award, value: "3+", label: "Years Experience" },
  { icon: Download, value: "100K+", label: "Downloads" },
];

const aboutPoints = [
  "Clean Architecture",
  "Performance & Optimization",
  "State Management",
  "Problem Solver",
  "Product Focused",
];

const projects = [
  {
    title: "Bunyan",
    description: "Brand management platform...",
    image: "/image/0282a9a3afbba8aed2c7174a284c6461.webp",
    tag: "Featured",
    gradient: "from-purple-500 to-pink-500",
    tags: ["Flutter", "Laravel", "Bloc", "MySQL"],
  },
  {
    title: "WebRTC QR Calling",
    description: "Peer-to-peer calling app...",
    image: "/image/392ee1152754af503131d19c3593a9c7.webp",
    tag: "Featured",
    gradient: "from-blue-500 to-cyan-500",
    tags: ["Flutter", "WebRTC", "Socket.IO"],
  },
  {
    title: "Biometric Login",
    description: "Secure authentication...",
    image: "/image/f099971824c1f2ae9d36b09958f6ee7b.webp",
    tag: "Featured",
    gradient: "from-green-500 to-emerald-500",
    tags: ["Flutter", "Android", "Security"],
  },
];
const techStack = [
  { icon: Smartphone, label: "Flutter" },
  { icon: Hexagon, label: "Dart" },
  { icon: Flame, label: "Firebase" },
  { icon: Database, label: "Supabase" },
  { icon: GitBranch, label: "Bloc" },
  { icon: GitCommit, label: "Git" },
  { icon: Box, label: "Docker" },
  { icon: PenTool, label: "Figma" },
];

export default function Index() {
  return (
    <div>
      {/* Hero */}
<section className="mx-auto max-w-7xl px-6 pb-14 pt-16 lg:px-8 lg:pb-16 lg:pt-24">
  <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">

    {/* LEFT - HERO CONTENT */}
    <div className="relative z-10">

      <span className="inline-flex items-center rounded-full border border-white/10 bg-[#0b1020] px-4 py-1.5 text-xs font-medium text-foreground/80 shadow-sm">
        Hi, I'm Hany 👋
      </span>

     <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
  Flutter{" "}
  <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
    Developer
  </span>
</h1>

      <p className="mt-6 max-w-xl text-sm leading-7 text-foreground/55 sm:text-base">
        I build scalable, secure and high-performance mobile
        applications with clean architecture and modern UI/UX
        experiences.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
  href="#projects"
  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-violet-500/50"
>
  Hire Me Now
</a>

       <Link
  to="/contact"
  className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/[0.02] px-6 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-violet-500/40 hover:text-violet-400"
>
  Contact Me
</Link>
      </div>
    </div>

    {/* RIGHT - PROFILE */}
    <div className="relative mx-auto flex h-[330px] w-[330px] items-center justify-center sm:h-[380px] sm:w-[380px] lg:ml-auto lg:mr-6">

      {/* Outer dashed ring */}
      <div className="absolute inset-0 rounded-full border border-primary/30" />

      {/* Second glowing ring */}
      <div className="absolute inset-4 rounded-full border-2 border-primary/30 shadow-[0_0_40px_rgba(124,58,237,0.18)]" />

      {/* Glow */}
      <div className="absolute inset-12 rounded-full bg-primary/20 blur-3xl" />

      {/* Profile image */}
      <div className="relative h-[245px] w-[245px] overflow-hidden rounded-full border-4 border-[#11152a] bg-card shadow-[0_0_35px_rgba(124,58,237,0.35)] sm:h-[285px] sm:w-[285px]">
        <img
          src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80"
          alt="Hany, Flutter developer"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Floating icon - top */}
      <span className="absolute right-10 top-2 flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-[#0b1020] text-primary shadow-lg shadow-primary/10">
        <Smartphone className="h-5 w-5" />
      </span>

      {/* Floating icon - left */}
      <span className="absolute left-0 top-[38%] flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-[#0b1020] text-emerald-400 shadow-lg">
        <Code2 className="h-5 w-5" />
      </span>

      {/* Floating icon - right */}
      <span className="absolute bottom-[20%] right-0 flex h-11 w-11 items-center justify-center rounded-xl border border-yellow-400/20 bg-[#0b1020] text-yellow-400 shadow-lg">
        <Database className="h-5 w-5" />
      </span>

      {/* Floating icon - bottom */}
      <span className="absolute bottom-0 left-[28%] flex h-11 w-11 items-center justify-center rounded-xl border border-orange-400/20 bg-[#0b1020] text-orange-400 shadow-lg">
        <Code2 className="h-5 w-5" />
      </span>
    </div>
  </div>
</section>

{/* ================= STATS ================= */}
<section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
  <div className="grid grid-cols-2 overflow-hidden rounded-xl border border-white/[0.07] bg-[#080d19]/80 sm:grid-cols-4">
    {stats.map(({ icon: Icon, value, label }, index) => (
      <div
        key={label}
        className={`flex items-center gap-3 px-5 py-5 sm:px-7 ${
          index !== 0 ? "border-l border-white/[0.06]" : ""
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
    ))}
  </div>
</section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-card/40 p-8 sm:p-12">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            <Sparkles className="h-4 w-4" /> ABOUT ME
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            About Me
          </h2>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80"
                alt="Hany working on a laptop"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <p className="text-base leading-relaxed text-foreground/60 sm:text-lg">
                I'm a passionate Flutter Developer who loves turning ideas
                into real products. I focus on writing clean code and
                delivering exceptional user experiences.
              </p>

              <ul className="mt-8 space-y-4">
                {aboutPoints.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-foreground/80">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    {point}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="mt-10 inline-flex items-center justify-center rounded-lg bg-brand-gradient px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-transform hover:scale-[1.03]"
              >
                View About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-8 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-2 text-foreground/50">Some of my recent works</p>
          </div>
          <Link
            to="/projects"
            className="text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            View All Projects →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-card/40 transition-colors hover:border-primary/30"
            >
            <div className="relative h-44 overflow-hidden">
  <img
    src={`${import.meta.env.BASE_URL}${project.image.replace(/^\/+/, "")}`}
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

      {/* Tech stack */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <p className="text-sm font-semibold text-foreground/50">I work with</p>
        <div className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
          {techStack.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-foreground/60">
              <Icon className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </section>

    {/* ================= CTA ================= */}
<section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
  <div className="relative overflow-hidden rounded-2xl border border-violet-500/20 bg-gradient-to-r from-[#151044] via-[#21165c] to-[#24136b] px-7 py-7 shadow-[0_12px_40px_rgba(124,58,237,0.18)] sm:px-8 sm:py-8 lg:px-8 lg:py-7">

    {/* Subtle glow */}
    <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />
    <div className="pointer-events-none absolute -bottom-20 left-1/3 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl" />

    <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">

      {/* Text */}
      <div>
        <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
          Let's Build Something Amazing Together
        </h2>

        <p className="mt-2 text-xs text-white/45 sm:text-sm">
          I have a project in mind? Let's turn your ideas into reality.
        </p>
      </div>

      {/* Button */}
      <Link
        to="/contact"
        className="shrink-0 rounded-none bg-gradient-to-r from-violet-500 to-indigo-500 px-6 py-3 text-xs font-semibold text-white shadow-lg shadow-violet-500/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-violet-500/50"
      >
        Get In Touch
      </Link>

    </div>
  </div>
</section>  
  </div>
  );
}