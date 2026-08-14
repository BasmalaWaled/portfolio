 import { useMemo, useState } from "react";
import {
  Search,
  CalendarDays,
  Clock3,
  Tag,
  Bookmark,
  Mail,
  Moon,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

type Category =
  | "All"
  | "Flutter"
  | "Web"
  | "Firebase"
  | "Architecture"
  | "Tools"
  | "State Management";

type Article = {
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: Exclude<Category, "All">;
  image: string;
};

const categories: Category[] = [
  "All",
  "Flutter",
  "Web",
  "Firebase",
  "Architecture",
  "Tools",
];

const articles: Article[] = [
  {
    title: "How I Implemented Biometric Authentication in Flutter",
    description:
      "A complete guide to implementing secure biometric authentication and cryptography in modern mobile apps.",
    date: "May 15, 2024",
    readTime: "8 min read",
    category: "Flutter",
    image: "/image/358fb445-50d2-4fa7-afe5-21762c49cf4a.webp",
  },
  {
    title: "Clean Architecture in Flutter",
    description:
      "How I structure my Flutter apps using Clean Architecture principles for scalability, maintainability, and test-driven development.",
    date: "Apr 28, 2024",
    readTime: "6 min read",
    category: "Architecture",
    image: "/image/c0c540a0-1fcb-4580-8e7c-c8fe3b406390.webp",
  },
  {
    title: "Understanding the Provider State Management",
    description:
      "A deep dive into the Provider package and how to use it effectively in your Flutter apps to manage complex state transitions.",
    date: "Apr 10, 2024",
    readTime: "5 min read",
    category: "Flutter",
    image: "/image/0558514f-ff5a-4425-b6e4-f56847b016e4.webp",
  },
  {
    title: "State Management: Bloc vs Provider",
    description:
      "A comprehensive comparison between Bloc and Provider. When to use which state management solution based on project complexity.",
    date: "Mar 25, 2024",
    readTime: "7 min read",
    category: "State Management",
    image: "/image/9b3eacc6-7005-452b-8363-fe809581a83b.webp",
  },
  {
    title: "Optimizing Flutter App Performance",
    description:
      "Practical tips and techniques to improve the performance, smoothness, and startup time of your Flutter applications.",
    date: "Mar 12, 2024",
    readTime: "6 min read",
    category: "Flutter",
    image: "/image/0d6fa7c1-a9f2-4cf2-9d35-6c4b196b82f4.webp",
  },
];

const popularPosts = articles.slice(0, 3);

export default function Articles() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All");

  const [search, setSearch] = useState("");

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        activeCategory === "All" ||
        article.category === activeCategory;

   const searchText =
 `${article.title} ${article.description} ${article.category}`.toLowerCase(); 

      const matchesSearch = searchText.includes(
        search.toLowerCase()
      );

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <div className="min-h-screen bg-[#050814] text-white">

      {/* ================= NAVBAR ================= */}
    

      

      {/* ================= PAGE HEADER ================= */}
      <section className="mx-auto max-w-5xl px-6 pb-14 pt-20 text-center lg:px-8">

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Articles
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/45">
          Thoughts, tutorials, and insights about development.
          Sharing my journey through the digital landscape.
        </p>
      </section>

      {/* ================= SEARCH + FILTER ================= */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8">

        <div className="rounded-xl border border-white/[0.08] bg-white/[0.015] p-3">

          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">

            {/* Search */}
            <div className="relative w-full lg:max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search articles..."
                className="h-10 w-full rounded-lg border border-white/[0.06] bg-[#070a14] pl-10 pr-4 text-xs text-white outline-none placeholder:text-white/25 focus:border-violet-500/40"
              />
            </div>

            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto pb-1">
              {categories.map((category) => {
                const active = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`shrink-0 rounded-full px-4 py-2 text-[11px] font-semibold transition-all ${
                      active
                        ? "bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg shadow-purple-500/20"
                        : "border border-white/[0.06] bg-white/[0.02] text-white/55 hover:bg-white/[0.05] hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}

              <button
                type="button"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.06] text-white/40"
              >
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-8 lg:px-8">

        <div className="grid gap-7 lg:grid-cols-[1fr_260px]">

          {/* ================= ARTICLES ================= */}
<main className="space-y-5">

            {filteredArticles.map((article) => (
              <article
                key={article.title}
                className="group rounded-2xl border border-white/[0.09] bg-[#070a14]/80 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500/30"
              >
                <div className="flex gap-4 sm:gap-5">

                  {/* Image */}
                  <div className="h-24 w-32 shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-cyan-500/30 via-blue-500/10 to-violet-500/20 sm:h-28 sm:w-36">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">

                    <div className="flex items-start justify-between gap-3">

                      <h2 className="text-sm font-bold leading-snug text-white sm:text-base">
                        {article.title}
                      </h2>

                      <button
                        type="button"
                        className="hidden shrink-0 text-white/35 transition hover:text-violet-400 sm:block"
                      >
                        <Bookmark className="h-4 w-4" />
                      </button>
                    </div>

                    <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-white/40">
                      {article.description}
                    </p>

                    {/* Meta */}
                    <div className="mt-3 flex flex-wrap items-center gap-3 text-[10px] text-white/40">

                      <span className="flex items-center gap-1">
                        <CalendarDays className="h-3 w-3" />
                        {article.date}
                      </span>

                      <span className="flex items-center gap-1">
                        <Clock3 className="h-3 w-3" />
                        {article.readTime}
                      </span>

                      <span className="flex items-center gap-1">
                        <Tag className="h-3 w-3" />

                        <span className="rounded-full bg-cyan-500/15 px-2 py-0.5 font-medium text-cyan-400">
                          {article.category}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}

            {filteredArticles.length === 0 && (
              <div className="rounded-2xl border border-white/[0.08] py-20 text-center">
                <p className="text-sm text-white/40">
                  No articles found.
                </p>
              </div>
            )}

            {/* Pagination */}
            <div className="flex justify-center gap-2 pt-8">

              <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 text-xs font-bold shadow-lg shadow-purple-500/20">
                1
              </button>

              <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] text-xs text-white/50 hover:bg-white/5">
                2
              </button>

              <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] text-xs text-white/50 hover:bg-white/5">
                3
              </button>

              <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] text-white/50 hover:bg-white/5">
                <ChevronRight className="h-4 w-4" />
              </button>

            </div>
          </main>
 {/* ================= SIDEBAR ================= */}
          <aside className="space-y-5">

            {/* Categories */}
            <div className="rounded-2xl border border-white/[0.06] bg-[#070a14]/80 p-5">

              <h3 className="text-sm font-bold">
                Categories
              </h3>

              <div className="mt-5 space-y-4">

                {[
                  ["All Articles", "24"],
                  ["Flutter", "12"],
                  ["Architecture", "5"],
                  ["Firebase", "3"],
                  ["Tools", "2"],
                  ["State Management", "2"],
                ].map(([name, count]) => (
                  <button
                    key={name}
                    type="button"
                    className="flex w-full items-center justify-between text-xs text-white/45 transition hover:text-violet-400"
                  >
                    <span>{name}</span>
                    <span className="text-[10px] text-white/25">
                      {count}
                    </span>
                  </button>
                ))}

              </div>
            </div>

            {/* Popular Posts */}
            <div className="rounded-2xl border border-white/[0.06] bg-[#070a14]/80 p-5">

              <h3 className="text-sm font-bold">
                Popular Posts
              </h3>

              <div className="mt-5 space-y-4">

                {popularPosts.map((post) => (
                  <div
                    key={post.title}
                    className="flex gap-3"
                  >

                    <div className="h-12 w-14 shrink-0 overflow-hidden rounded-lg bg-white/5">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="min-w-0">
                      <h4 className="line-clamp-2 text-[11px] font-semibold leading-snug">
                        {post.title}
                      </h4>

                      <p className="mt-1 text-[9px] uppercase tracking-wider text-white/30">
                        {post.date}
                      </p>
                    </div>

                  </div>
                ))}

              </div>
            </div>

            {/* Newsletter */}
            <div className="rounded-2xl border border-white/[0.06] bg-gradient-to-br from-violet-500/[0.08] to-transparent p-5">

              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
                <Mail className="h-4 w-4" />
              </div>

              <h3 className="mt-5 text-base font-bold">
                Stay Updated
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-white/40">
                Get the latest articles and insights straight to your inbox.
                No spam, ever.
              </p>

              <div className="mt-5 space-y-2">

                <input
                  type="email"
                  placeholder="Your email address"
                  className="h-10 w-full rounded-lg border border-white/[0.08] bg-[#070a14] px-3 text-xs text-white outline-none placeholder:text-white/25 focus:border-violet-500/40"
                />

                <button
                  type="button"
                  className="h-10 w-full rounded-lg bg-gradient-to-r from-violet-500 to-purple-600 text-xs font-bold text-white shadow-lg shadow-purple-500/20 transition hover:scale-[1.01]"
                >
                  Subscribe
                </button>

              </div>
            </div>

            {/* GitHub */}
            <div className="rounded-2xl border border-white/[0.06] bg-[#070a14]/80 p-6 text-center">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-black text-sm font-bold">
                GH
              </div>
 <h3 className="mt-4 text-sm font-bold">
                Enjoying the articles?
              </h3>

              <p className="mt-2 text-[11px] leading-relaxed text-white/40">
                Follow me on GitHub for code snippets and open-source projects.
              </p>

              <a
                href="#"
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-violet-400 hover:text-violet-300"
              >
                Visit GitHub
                <ChevronRight className="h-3 w-3" />
              </a>

            </div>

          </aside>
        </div>
      </section>
    </div>
  );
}