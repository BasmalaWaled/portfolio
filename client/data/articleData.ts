export type ArticleCategory = | "All" | "React" | "Next.js" | "JavaScript" | "TypeScript" | "Web Development" | "Tools" | "Performance";
export type Article = { title: string; description: string; date: string; readTime: string; category: string; image: string; link: string; };
export const articleData = { header: { title: "Articles", description: "Thoughts, tutorials, and insights about frontend development. Sharing my journey through the world of modern web development.", },
search: { placeholder: "Search articles...", },
categories: [ "All", "React", "Next.js", "JavaScript", "TypeScript", "Web Development", "Tools", "Performance", ] as ArticleCategory[],
articles: [ { title: "Building Responsive Web Applications with React", description: "A practical guide to building modern, responsive, and reusable user interfaces using React and component-based architecture.", date: "May 15, 2024", readTime: "8 min read", category: "React", image: "/image/358fb445-50d2-4fa7-afe5-21762c49cf4a.webp", link: "/articles/react-responsive-applications", },
{
  title: "Getting Started with Next.js",
  description:
    "An introduction to building modern and high-performance web applications using Next.js, including routing and reusable components.",
  date: "Apr 28, 2024",
  readTime: "6 min read",
  category: "Next.js",
  image: "/image/c0c540a0-1fcb-4580-8e7c-c8fe3b406390.webp",
  link: "#",
},

{
  title: "Understanding React State Management",
  description:
    "A guide to managing application state in React using hooks, props, Context API, and modern state management approaches.",
  date: "Apr 10, 2024",
  readTime: "5 min read",
  category: "React",
  image: "/image/0558514f-ff5a-4425-b6e4-f56847b016e4.webp",
  link: "#",
},

{
  title: "JavaScript vs TypeScript",
  description:
    "A comprehensive comparison between JavaScript and TypeScript and how TypeScript helps developers build scalable and maintainable applications.",
  date: "Mar 25, 2024",
  readTime: "7 min read",
  category: "TypeScript",
  image: "/image/9b3eacc6-7005-452b-8363-fe809581a83b.webp",
  link: "#",
},

{
  title: "Optimizing Frontend Performance",
  description:
    "Practical tips and techniques to improve website performance, optimize loading time, and create a smoother user experience.",
  date: "Mar 12, 2024",
  readTime: "6 min read",
  category: "Performance",
  image: "/image/0d6fa7c1-a9f2-4cf2-9d35-6c4b196b82f4.webp",
  link: "#",
},
] as Article[],
sidebar: { categoriesTitle: "Categories",
categoryCounts: [
  {
    name: "All Articles",
    count: "5",
    category: "All",
  },
  {
    name: "React",
    count: "2",
    category: "React",
  },
  {
    name: "Next.js",
    count: "1",
    category: "Next.js",
  },
  {
    name: "TypeScript",
    count: "1",
    category: "TypeScript",
  },
  {
    name: "Performance",
    count: "1",
    category: "Performance",
  },
],

popularPostsTitle: "Popular Posts",

newsletter: {
  title: "Stay Updated",
  description:
    "Get the latest articles and frontend development insights straight to your inbox. No spam, ever.",
  placeholder: "Your email address",
  buttonText: "Subscribe",
},

github: {
  title: "Enjoying the articles?",
  description:
    "Follow me on GitHub for frontend projects, code snippets, and open-source projects.",
  buttonText: "Visit GitHub",
  link: "#",
},
}, };