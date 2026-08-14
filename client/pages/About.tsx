import {
  CheckCircle2,
  BriefcaseBusiness,
  GraduationCap,
  Code2,
  Users,
  Lightbulb,
  Target,
  Play,
} from "lucide-react";
import { Link } from "react-router-dom";

const journey = [
  {
    year: "2024 - Present",
    title: "Flutter Developer",
    company: "American Group",
    description:
      "Building enterprise applications and leading the mobile development team to deliver high-performance solutions for global clients.",
  },
  {
    year: "2023 - 2024",
    title: "Senior Flutter Developer",
    company: "Tech Solutions",
    description:
      "Developed and maintained multiple Flutter applications used by thousands of users, focusing on state management and optimized rendering.",
  },
  {
    year: "2020 - 2023",
    title: "Flutter Developer",
    company: "Digital Agency",
    description:
      "Developed cross-platform mobile applications and collaborated with UI/UX team to ensure pixel-perfect implementation of complex designs.",
  },
  {
    year: "2019 - 2020",
    title: "Junior Flutter Developer",
    company: "Startup Company",
    description:
      "Worked on UI implementation and features using Flutter and Dart. Gained foundational experience in mobile app lifecycles and REST APIs.",
  },
  {
    year: "2018 - 2019",
    title: "Computer Science Student",
    company: "University",
    description:
      "Focused on data structures, algorithms, and mobile development fundamentals. Completed several personal projects during my studies.",
  },
];

const skills = [
  {
    icon: Code2,
    text: "Problem solver",
  },
  {
    icon: Lightbulb,
    text: "Fast learner",
  },
  {
    icon: Users,
    text: "Team player",
  },
  {
    icon: Target,
    text: "Detail oriented",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Page Header */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-20 text-center lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          About <span className="text-primary">Me</span>
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-sm text-foreground/50">
          Get to know me better and my journey as a developer.
        </p>
      </section>

      {/* My Story */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-card/50 p-6 shadow-xl sm:p-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Text */}
            <div>
              <div className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-primary" />
                <h2 className="text-lg font-bold">My Story</h2>
              </div>

              <div className="mt-6 space-y-4 text-sm leading-relaxed text-foreground/60">
                <p>
                  My journey as a software developer started in 2019 when I
                  wrote my first hello world in Dart and Flutter. Since then,
                  I have been on an exciting adventure to build high-quality
                  products and amazing user experiences.
                </p>

                <p>
                  I believe in clean code, scalable architecture, and
                  continuous learning. I am constantly exploring new
                  technologies to stay at the forefront of mobile and web
                  development.
                </p>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-4">
                {skills.map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-3 text-sm text-foreground/70"
                  >
                    <Icon className="h-4 w-4 text-primary" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
{/* Video / Image */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-secondary/40">
              <div className="relative aspect-video">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80"
                  alt="Developer working"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <button
                    type="button"
                    aria-label="Play introduction video"
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/90 text-white shadow-xl transition-transform hover:scale-105"
                  >
                    <Play className="ml-1 h-6 w-6 fill-current" />
                  </button>
                </div>

                <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-xl border border-white/10 bg-card/90 px-4 py-3 shadow-lg backdrop-blur">
                  <Code2 className="h-4 w-4 text-primary" />
                  <span className="text-xs font-semibold text-foreground">
                    Developer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Journey */}
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            My Journey
          </h2>
          <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-primary" />
        </div>

        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="absolute left-[calc(50%-1px)] top-0 hidden h-full w-px bg-primary/30 md:block" />

          <div className="space-y-10">
            {journey.map((item, index) => (
              <div
                key={`${item.year}-${item.title}`}
                className="relative grid gap-4 md:grid-cols-[1fr_40px_2fr] md:items-start"
              >
                {/* Year */}
                <div
                  className={`text-sm text-foreground/50 md:pt-1 ${
                    index % 2 === 0
                      ? "md:text-right"
                      : "md:text-right"
                  }`}
                >
                  {item.year}
                </div>

                {/* Timeline icon */}
                <div className="relative z-10 hidden justify-center md:flex">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-background">
                    {index === 0 ? (
                      <BriefcaseBusiness className="h-3.5 w-3.5 text-primary" />
                    ) : index === journey.length - 1 ? (
                      <GraduationCap className="h-3.5 w-3.5 text-primary" />
                    ) : (
                      <span className="h-2 w-2 rounded-full bg-primary" />
                    )}
                  </span>
                </div>

                {/* Content */}
                <div className="rounded-xl border border-white/10 bg-card/30 p-5 transition-colors hover:border-primary/30">
                  <h3 className="text-lg font-bold text-primary">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs font-semibold text-foreground/80">
                    {item.company}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-foreground/55">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 overflow-hidden rounded-2xl border border-white/10 bg-card/50 p-8 sm:p-10 lg:flex-row lg:px-12">
          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Interested in working together?
            </h2>

            <p className="mt-3 text-sm text-foreground/50">
              Let's discuss your project and how I can help you build
              something amazing.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-transform hover:scale-105"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
}