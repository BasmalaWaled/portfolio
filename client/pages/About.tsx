import {
  BriefcaseBusiness,
  GraduationCap,
  Code2,
  Users,
  Lightbulb,
  Target,
  Play,
} from "lucide-react";

import { Link } from "react-router-dom";

import { aboutData } from "../data/aboutData";

const {
  header,
  story,
  journey,
  cta,
} = aboutData;

const iconMap = {
  Code2,
  Lightbulb,
  Users,
  Target,
};

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ================= PAGE HEADER ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-20 text-center lg:px-8">

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          {header.title}{" "}
          <span className="text-primary">
            {header.highlight}
          </span>
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-sm text-foreground/50">
          {header.description}
        </p>

      </section>


      {/* ================= MY STORY ================= */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="rounded-2xl border border-white/10 bg-card/50 p-6 shadow-xl sm:p-8">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            {/* Text */}
            <div>

              <div className="flex items-center gap-2">

                <span className="h-1 w-1 rounded-full bg-primary" />

                <h2 className="text-lg font-bold">
                  {story.title}
                </h2>

              </div>


              {/* Story Paragraphs */}
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-foreground/60">

                {story.paragraphs.map((paragraph) => (

                  <p key={paragraph}>
                    {paragraph}
                  </p>

                ))}

              </div>


              {/* Skills */}
              <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-4">

                {story.skills.map(({ icon, text }) => {

                  const Icon =
                    iconMap[icon as keyof typeof iconMap];

                  return (
                    <div
                      key={text}
                      className="flex items-center gap-3 text-sm text-foreground/70"
                    >

                      <Icon className="h-4 w-4 text-primary" />

                      <span>
                        {text}
                      </span>

                    </div>
                  );
                })}

              </div>

            </div>


            {/* ================= VIDEO / IMAGE ================= */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-secondary/40">

              <div className="relative aspect-video">

                <img
                  src={story.media.image}
                  alt={story.media.alt}
                  className="h-full w-full object-cover"
                />


                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">

                  <button
                    type="button"
                    aria-label="Play introduction video"
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/90 text-white shadow-xl transition-transform hover:scale-105"
                  >

                    <Play className="ml-1 h-6 w-6 fill-current" />

                  </button>

                </div>


                {/* Badge */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-xl border border-white/10 bg-card/90 px-4 py-3 shadow-lg backdrop-blur">

                  <Code2 className="h-4 w-4 text-primary" />

                  <span className="text-xs font-semibold text-foreground">
                    {story.media.badge}
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= MY JOURNEY ================= */}
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">

        <div className="text-center">

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {journey.title}
          </h2>

          <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-primary" />

        </div>


        <div className="relative mt-12">

          {/* Timeline Line */}
          <div className="absolute left-[calc(50%-1px)] top-0 hidden h-full w-px bg-primary/30 md:block" />


          <div className="space-y-10">

            {journey.items.map((item, index) => (

              <div
                key={`${item.year}-${item.title}`}
                className="relative grid gap-4 md:grid-cols-[1fr_40px_2fr] md:items-start"
              >

                {/* Year */}
                <div className="text-sm text-foreground/50 md:pt-1 md:text-right">

                  {item.year}

                </div>


                {/* Timeline Icon */}
                <div className="relative z-10 hidden justify-center md:flex">

                  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-background">

                    {index === 0 ? (

                      <BriefcaseBusiness className="h-3.5 w-3.5 text-primary" />

                    ) : index === journey.items.length - 1 ? (

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


      {/* ================= CTA ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">

        <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-r from-[#181b25] via-[#1d2029] to-[#191c25] px-8 py-8 shadow-[0_15px_40px_rgba(0,0,0,0.25)] sm:px-10 sm:py-9 lg:px-14">

          {/* Subtle Glow */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-1/4 bg-gradient-to-l from-violet-500/[0.04] to-transparent" />


          <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">

            {/* Text */}
            <div>

              <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                {cta.title}
              </h2>


              <p className="mt-3 text-sm text-white/45">
                {cta.description}
              </p>

            </div>


            {/* Button */}
            <Link
              to={cta.buttonLink}
              className="relative inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(124,58,237,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(124,58,237,0.5)]"
            >

              {cta.buttonText}

            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}