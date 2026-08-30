 import { Link } from "react-router-dom";

import {
  Calendar,
  Clock3,
  User,
  Bookmark,
  Link as LinkIcon,
  ArrowUp,
  Copy,
} from "lucide-react";

import { articleDetailsData } from "../data/articleDetailsData";

const BASE = import.meta.env.BASE_URL;

const imagePath = (path: string) =>
  `${BASE}${path.replace(/^\/+/, "")}`;

export default function ArticleDetails() {
  const {
    article,
    content,
    tableOfContents,
    moreArticles,
    socialLinks,
    follow,
    footer,
  } = articleDetailsData;

  return (
    <div className="min-h-screen bg-[#050814] text-white">

      <main className="mx-auto max-w-6xl px-6 pb-20 pt-6 lg:px-8">

        {/* Breadcrumb */}
        <div className="mb-6 flex flex-wrap items-center gap-2 text-[11px] text-white/40">

          <Link to="/" className="hover:text-white">
            Home
          </Link>

          <span>›</span>

          <Link to="/articles" className="hover:text-white">
            Articles
          </Link>

          <span>›</span>

          <span className="font-medium text-white/80">
            {article.title}
          </span>

        </div>


        <div className="grid gap-8 lg:grid-cols-[1fr_260px]">

          {/* ================= LEFT ================= */}
          <article>

            {/* Hero Image */}
            <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02]">

              <img
                src={imagePath(article.image)}
                alt={article.title}
                className="h-[290px] w-full object-cover sm:h-[360px]"
              />

            </div>


            {/* Category */}
            <div className="mt-7">

              <span className="rounded-full bg-violet-500/10 px-3 py-1 text-[10px] font-medium text-violet-400">
                {article.category}
              </span>

            </div>


            {/* Title */}
            <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
              {article.title}
            </h1>


            {/* Description */}
            <p className="mt-5 max-w-2xl text-sm leading-6 text-white/45">
              {article.description}
            </p>


            {/* Meta */}
            <div className="mt-7 flex flex-wrap items-center gap-5 text-xs text-white/45">

              <div className="flex items-center gap-2">
                <Calendar className="h-3.5 w-3.5 text-violet-400" />

                {article.date}
              </div>


              <div className="flex items-center gap-2">
                <Clock3 className="h-3.5 w-3.5 text-violet-400" />

                {article.readTime}
              </div>


              <div className="flex items-center gap-2">
                <User className="h-3.5 w-3.5 text-violet-400" />

                By {article.author}
              </div>


              <button className="ml-auto flex items-center gap-2 rounded-full border border-white/[0.08] px-4 py-2 text-xs text-white/60 transition hover:border-violet-500/40 hover:text-white">

                <Bookmark className="h-3.5 w-3.5" />

                Save Article

              </button>

            </div>


            <div className="my-7 h-px bg-white/[0.08]" />


            {/* ================= CONTENT ================= */}

            {/* Introduction */}
            <section id="introduction">

              <h2 className="text-xl font-bold">
                {content.introduction.title}
              </h2>

              <p className="mt-4 text-sm leading-6 text-white/50">
                {content.introduction.text}
              </p>

            </section>


            {/* Why */}
            <section className="mt-10" id="why">

              <h2 className="text-xl font-bold">
                {content.why.title}
              </h2>

              <p className="mt-4 text-sm leading-6 text-white/50">
                {content.why.text}
              </p>

            </section>


            {/* Implementation */}
            <section className="mt-10" id="implementation">

              <h2 className="text-xl font-bold">
                {content.implementation.title}
              </h2>


              {content.implementation.steps.map((step) => (

                <div
                  key={step.number}
                  className="mt-8"
                >

                  <div className="flex items-center gap-3">

                    <span className="flex h-5 w-5 items-center justify-center rounded bg-violet-500 text-[10px] font-bold">
                      {step.number}
                    </span>

                    <h3 className="font-bold">
                      {step.title}
                    </h3>

                  </div>


                  <p className="mt-3 text-sm leading-6 text-white/45">
                    {step.description}
                  </p>


                  {/* Code Block */}
                  {step.code && (

                    <div className="mt-5 overflow-hidden rounded-xl border border-white/[0.08] bg-[#090d18]">

                      <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-2">

                        <span className="text-[10px] text-white/40">
                          {step.language}
                        </span>

                        <button className="text-white/40 hover:text-white">

                          <Copy className="h-3.5 w-3.5" />

                        </button>

                      </div>


                      <pre className="overflow-x-auto p-5 text-xs leading-6 text-white/70">
                        {step.code}
                      </pre>

                    </div>

                  )}

                </div>

              ))}

            </section>

          </article>



          {/* ================= RIGHT SIDEBAR ================= */}
          <aside className="space-y-5">


            {/* Table of Contents */}
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-5">

              <h3 className="text-sm font-bold">
                Table of Contents
              </h3>


              <div className="mt-5 space-y-4 text-xs text-white/40">

                {tableOfContents.map((item) => (

                  item.href ? (

                    <a
                      key={item.label}
                      href={item.href}
                      className={`block ${
                        item.active
                          ? "text-violet-400"
                          : ""
                      } ${
                        item.indent
                          ? "pl-3"
                          : ""
                      }`}
                    >

                      • {item.label}

                    </a>

                  ) : (

                    <div
                      key={item.label}
                      className={item.indent ? "pl-3" : ""}
                    >

                      • {item.label}

                    </div>

                  )

                ))}

              </div>

            </div>



            {/* Share */}
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-5">

              <h3 className="text-sm font-bold">
                Share this article
              </h3>


              <div className="mt-4 flex gap-2">

                <a
                  href={socialLinks.github}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-xs font-bold text-white/60 hover:border-primary/30 hover:text-primary"
                >
                  GH
                </a>


                <a
                  href={socialLinks.linkedin}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-xs font-bold text-white/60 hover:border-primary/30 hover:text-primary"
                >
                  in
                </a>


                <a
                  href={socialLinks.twitter}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-xs font-bold text-white/60 hover:border-primary/30 hover:text-primary"
                >
                  X
                </a>

              </div>

            </div>



            {/* Follow */}
            <div className="rounded-xl border border-white/[0.06] bg-[#0a0d1a] p-6 text-center">

              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white text-xs text-black">
                🌈
              </div>


              <h3 className="mt-4 text-sm font-bold">
                {follow.title}
              </h3>


              <p className="mt-2 text-xs leading-5 text-white/40">
                {follow.description}
              </p>


              <a
                href={follow.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-violet-500 py-2.5 text-xs font-semibold transition hover:bg-violet-600"
              >

                <span className="text-sm font-bold">
                  GH
                </span>

                {follow.buttonText}

              </a>

            </div>



            {/* More Articles */}
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-5">

              <h3 className="text-sm font-bold">
                More Articles
              </h3>


              <div className="mt-5 space-y-4">

                {moreArticles.map((item) => (

                  <Link
                    key={item.title}
                    to="/articles"
                    className="flex gap-3"
                  >

                    <img
                      src={imagePath(item.image)}
                      alt={item.title}
                      className="h-12 w-12 shrink-0 rounded-lg object-cover"
                    />


                    <div className="min-w-0">

                      <h4 className="text-[11px] font-semibold leading-4 text-white">
                        {item.title}
                      </h4>


                      <p className="mt-1 text-[8px] uppercase tracking-wider text-white/30">
                        {item.date}
                      </p>

                    </div>

                  </Link>

                ))}

              </div>

            </div>



            {/* Back to Top */}
            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="ml-auto flex items-center gap-2 rounded-full border border-white/[0.06] px-4 py-2 text-[10px] text-white/40 hover:text-white"
            >

              <ArrowUp className="h-3 w-3" />

              Back to Top

            </button>

          </aside>

        </div>

      </main>



      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/[0.08]">

        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-xs text-white/40 lg:px-8">

          <span>
            {footer.copyright}
          </span>


          <div className="flex items-center gap-4">

            <span className="text-sm font-bold">
              GH
            </span>

            <span className="text-sm font-bold">
              in
            </span>

            <span className="text-sm font-bold">
              X
            </span>

            <LinkIcon className="h-4 w-4" />

          </div>

        </div>

      </footer>

    </div>
  );
}