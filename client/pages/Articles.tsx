import { useMemo, useState } from "react";

import {
  Search,
  CalendarDays,
  Clock3,
  Tag,
  Bookmark,
  Mail,
  ChevronRight,
} from "lucide-react";

import { Link } from "react-router-dom";

import {
  articleData,
  type ArticleCategory,
} from "../data/articleData";


export default function Articles() {

  const {
    header,
    search: searchData,
    categories,
    articles,
    sidebar,
  } = articleData;


  const [activeCategory, setActiveCategory] =
    useState<ArticleCategory>("All");

  const [search, setSearch] = useState("");


  const filteredArticles = useMemo(() => {

    return articles.filter((article) => {

      const matchesCategory =
        activeCategory === "All" ||
        article.category === activeCategory;


      const searchText =
        `${article.title} ${article.description} ${article.category}`
          .toLowerCase();


      const matchesSearch =
        searchText.includes(search.toLowerCase());


      return matchesCategory && matchesSearch;

    });

  }, [activeCategory, search, articles]);


  const popularPosts = articles.slice(0, 3);


  return (

    <div className="min-h-screen bg-[#050814] text-white">

      {/* ================= PAGE HEADER ================= */}

      <section className="mx-auto max-w-5xl px-6 pb-14 pt-20 text-center lg:px-8">

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          {header.title}
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/45">
          {header.description}
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
                placeholder={searchData.placeholder}
                className="h-10 w-full rounded-lg border border-white/[0.06] bg-[#070a14] pl-10 pr-4 text-xs text-white outline-none placeholder:text-white/25 focus:border-violet-500/40"
              />

            </div>


            {/* Categories */}

            <div className="flex gap-2 overflow-x-auto pb-1">

              {categories.map((category) => {

                const active =
                  activeCategory === category;


                return (

                  <button
                    key={category}
                    type="button"
                    onClick={() =>
                      setActiveCategory(category)
                    }
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

              <Link
                key={article.title}
                to={article.link}
                className="group block rounded-2xl border border-white/[0.09] bg-[#070a14]/80 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500/30"
              >

                <div className="flex gap-4 sm:gap-5">


                  {/* Image */}

                  <div className="h-24 w-32 shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-cyan-500/30 via-blue-500/10 to-violet-500/20 sm:h-28 sm:w-36">

                    <img
                      src={`${import.meta.env.BASE_URL}${article.image.replace(/^\/+/, "")}`}
                      alt={article.title}
                      className="h-full w-full object-cover"
                    />

                  </div>


                  {/* Content */}

                  <div className="min-w-0 flex-1">

                    <div className="flex items-start justify-between gap-3">

                      <h2 className="text-sm font-bold leading-snug text-white sm:text-base">

                        {article.title}

                      </h2>


                      <span className="hidden shrink-0 text-white/35 sm:block">

                        <Bookmark className="h-4 w-4" />

                      </span>

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

              </Link>

            ))}

          </main>


          {/* ================= SIDEBAR ================= */}

          <aside className="space-y-5">


            {/* Categories */}

            <div className="rounded-2xl border border-white/[0.06] bg-[#070a14]/80 p-5">

              <h3 className="text-sm font-bold">

                {sidebar.categoriesTitle}

              </h3>


              <div className="mt-5 space-y-4">

                {sidebar.categoryCounts.map((item) => (

                  <button
                    key={item.name}
                    type="button"
                    onClick={() =>
                      setActiveCategory(
                        item.category as ArticleCategory
                      )
                    }
                    className="flex w-full items-center justify-between text-xs text-white/45 transition hover:text-violet-400"
                  >

                    <span>

                      {item.name}

                    </span>


                    <span className="text-[10px] text-white/25">

                      {item.count}

                    </span>

                  </button>

                ))}

              </div>

            </div>


            {/* Popular Posts */}

            <div className="rounded-2xl border border-white/[0.06] bg-[#070a14]/80 p-5">

              <h3 className="text-sm font-bold">

                {sidebar.popularPostsTitle}

              </h3>


              <div className="mt-5 space-y-4">

                {popularPosts.map((post) => (

                  <Link
                    key={post.title}
                    to={post.link}
                    className="flex gap-3"
                  >

                    <div className="h-12 w-14 shrink-0 overflow-hidden rounded-lg bg-white/5">

                      <img
                        src={`${import.meta.env.BASE_URL}${post.image.replace(/^\/+/, "")}`}
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

                  </Link>

                ))}

              </div>

            </div>


            {/* Newsletter */}

            <div className="rounded-2xl border border-white/[0.06] bg-gradient-to-br from-violet-500/[0.08] to-transparent p-5">

              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">

                <Mail className="h-4 w-4" />

              </div>


              <h3 className="mt-5 text-base font-bold">

                {sidebar.newsletter.title}

              </h3>


              <p className="mt-2 text-xs leading-relaxed text-white/40">

                {sidebar.newsletter.description}

              </p>


              <div className="mt-5 space-y-2">

                <input
                  type="email"
                  placeholder={
                    sidebar.newsletter.placeholder
                  }
                  className="h-10 w-full rounded-lg border border-white/[0.08] bg-[#070a14] px-3 text-xs text-white outline-none placeholder:text-white/25 focus:border-violet-500/40"
                />


                <button
                  type="button"
                  className="h-10 w-full rounded-lg bg-gradient-to-r from-violet-500 to-purple-600 text-xs font-bold text-white shadow-lg shadow-purple-500/20 transition hover:scale-[1.01]"
                >

                  {sidebar.newsletter.buttonText}

                </button>

              </div>

            </div>


            {/* GitHub */}

            <div className="rounded-2xl border border-white/[0.06] bg-[#070a14]/80 p-6 text-center">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-black text-sm font-bold">

                GH

              </div>


              <h3 className="mt-4 text-sm font-bold">

                {sidebar.github.title}

              </h3>


              <p className="mt-2 text-[11px] leading-relaxed text-white/40">

                {sidebar.github.description}

              </p>


              <a
                href={sidebar.github.link}
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-violet-400 hover:text-violet-300"
              >

                {sidebar.github.buttonText}

                <ChevronRight className="h-3 w-3" />

              </a>

            </div>


          </aside>

        </div>

      </section>

    </div>

  );

}