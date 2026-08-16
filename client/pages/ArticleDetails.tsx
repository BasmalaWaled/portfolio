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

const BASE = import.meta.env.BASE_URL;

const imagePath = (path: string) =>
  `${BASE}${path.replace(/^\/+/, "")}`;

const article = {
  title: "How I Implemented Biometric Authentication in Flutter",
  description:
    "A complete guide to implementing secure biometric authentication using local authentication and cryptography.",
  date: "May 15, 2024",
  readTime: "8 min read",
  category: "Flutter",
  image: "/image/358fb445-50d2-4fa7-afe5-21762c49cf4a.webp",
};

const moreArticles = [
  {
    title: "Clean Architecture in Flutter",
    date: "APR 28, 2024",
    image: "/image/c0c540a0-1fcb-4580-8e7c-c8fe3b406390.webp",
  },
  {
    title: "State Management: Bloc vs Provider",
    date: "MAR 25, 2024",
    image: "/image/0558514f-ff5a-4425-b6e4-f56847b016e4.webp",
  },
  {
    title: "Optimizing Flutter App Performance",
    date: "MAR 12, 2024",
    image: "/image/0d6fa7c1-a9f2-4cf2-9d35-6c4b196b82f4.webp",
  },
];

export default function ArticleDetails() {
  return (
    <div className="min-h-screen bg-[#050814] text-white">

     
      {/* ================= PAGE ================= */}
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

        {/* ================= GRID ================= */}
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

            <p className="mt-5 max-w-2xl text-sm leading-6 text-white/45">
              {article.description}
            </p>

            {/* Meta */}
            <div className="mt-7 flex flex-wrap items-center gap-5 text-xs text-white/45">

              <div className="flex items-center gap-2">
                <Calendar className="h-3.5 w-3.5 text-violet-400" />
                May 15, 2024
              </div>

              <div className="flex items-center gap-2">
                <Clock3 className="h-3.5 w-3.5 text-violet-400" />
                8 min read
              </div>

              <div className="flex items-center gap-2">
                <User className="h-3.5 w-3.5 text-violet-400" />
                By Hany Dev
              </div>

              <button className="ml-auto flex items-center gap-2 rounded-full border border-white/[0.08] px-4 py-2 text-xs text-white/60 transition hover:border-violet-500/40 hover:text-white">
                <Bookmark className="h-3.5 w-3.5" />
                Save Article
              </button>
            </div>

            <div className="my-7 h-px bg-white/[0.08]" />

            {/* ================= CONTENT ================= */}

            <section id="introduction">
              <h2 className="text-xl font-bold">
                Introduction
              </h2>

              <p className="mt-4 text-sm leading-6 text-white/50">
                Biometric authentication adds an extra layer of security
                and provides a seamless user experience. In this article,
                I&apos;ll share how I implemented biometric authentication
                in a Flutter application using local authentication and
                cryptographic keys.
              </p>
            </section>

            <section className="mt-10" id="why">
              <h2 className="text-xl font-bold">
                Why Biometric Authentication?
              </h2>

              <p className="mt-4 text-sm leading-6 text-white/50">
                Traditional password-based authentication can be vulnerable
                to attacks. Biometric authentication uses unique physical
                characteristics, making it more secure and convenient for
                users.
              </p>
            </section>

            <section className="mt-10" id="implementation">

              <h2 className="text-xl font-bold">
                Implementation
              </h2>

              {/* Step 1 */}
              <div className="mt-6">

                <div className="flex items-center gap-3">
                  <span className="flex h-5 w-5 items-center justify-center rounded bg-violet-500 text-[10px] font-bold">
                    1
                  </span>

                  <h3 className="font-bold">
                    Add Dependencies
                  </h3>
                </div>

                <p className="mt-3 text-sm text-white/45">
                  Add the following packages to your pubspec.yaml file:
                </p>

                {/* Code Block */}
                <div className="mt-5 overflow-hidden rounded-xl border border-white/[0.08] bg-[#090d18]">

                  <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-2">
                    <span className="text-[10px] text-white/40">
                      YAML
                    </span>

                    <button className="text-white/40 hover:text-white">
                      <Copy className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  <pre className="overflow-x-auto p-5 text-xs leading-6 text-white/70">
{`yaml
local_auth: ^2.1.7
 flutter_secure_storage: ^9.0.0
crypto: ^3.0.3`}
                  </pre>

                </div>
              </div>

              {/* Step 2 */}
              <div className="mt-8">

                <div className="flex items-center gap-3">
                  <span className="flex h-5 w-5 items-center justify-center rounded bg-violet-500 text-[10px] font-bold">
                    2
                  </span>

                  <h3 className="font-bold">
                    Check Biometric Availability
                  </h3>
                </div>

                <p className="mt-3 text-sm leading-6 text-white/45">
                  First, check if the device supports biometric
                  authentication using the local_auth package.
                  This ensures you can fall back to traditional methods
                  if needed.
                </p>

              </div>

          

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

                <a
                  href="#introduction"
                  className="block text-violet-400"
                >
                  • Introduction
                </a>

                <div className="pl-3">
                  Why Biometric Authentication?
                </div>

                <a
                  href="#implementation"
                  className="block"
                >
                  • Implementation
                </a>

                <div className="space-y-3 pl-3">
                  <div>• Add Dependencies</div>
                  <div>• Check Biometric Availability</div>
                  <div>• Authenticate User</div>
                  <div>• Store Authentication State</div>
                </div>

                <div>• Conclusion</div>

              </div>
            </div>

            {/* Share */}
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-5">

              <h3 className="text-sm font-bold">
                Share this article
              </h3>

             <div className="flex gap-2">
  <a
    href="#"
    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-xs font-bold text-white/60 hover:border-primary/30 hover:text-primary"
  >
    GH
  </a>

  <a
    href="#"
    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-xs font-bold text-white/60 hover:border-primary/30 hover:text-primary"
  >
    in
  </a>

  <a
    href="#"
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
                Enjoying the article?
              </h3>

              <p className="mt-2 text-xs leading-5 text-white/40">
                Follow me for more tutorials and insights
                about Flutter development.
              </p>

            <a
  href="https://github.com/"
  target="_blank"
  rel="noreferrer"
  className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-violet-500 py-2.5 text-xs font-semibold transition hover:bg-violet-600"
>
  <span className="text-sm font-bold">GH</span>
  Follow on GitHub
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

            {/* Back to top */}
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
            © 2026 HANY.dev. All rights reserved.
          </span>
<div className="flex items-center gap-4">
  <span className="text-sm font-bold">GH</span>
  <span className="text-sm font-bold">in</span>
  <span className="text-sm font-bold">X</span>
  <LinkIcon className="h-4 w-4" />
</div>

        </div>
      </footer>

    </div>
  );
}