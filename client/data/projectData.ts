export type ProjectCategory =
  | "All"
  | "Web"
  | "Featured";

export type Project = {
  title: string;
  description: string;
  category: Exclude<ProjectCategory, "All">[];
  image: string;
  tags: string[];
  link?: string;
  featured?: boolean;
};

export const projectData = {
  // ================= PAGE HEADER =================
  header: {
    title: "My",
    highlight: "Projects",
    description:
      "A collection of modern web applications and digital experiences I've built using React, TypeScript, JavaScript, and modern frontend technologies.",
  },

  // ================= FILTERS =================
  filters: [
    "All",
    "Web",
    "Featured",
  ] as ProjectCategory[],

  // ================= PROJECTS =================
 projects: [
 {
  title: "Surrah",
  description:
    "Manage your expenses with ease. Track your income and expenses, organize categories, and monitor daily, weekly, and monthly reports — even without an internet connection.",
  image: `${import.meta.env.BASE_URL}image/surrah.webp`,
  tag: "Featured",
  tags: ["React", "TypeScript", "Tailwind CSS"],
  link: "/projects/surrah",
},
      {
  title: "Bunyan",
  description:
    "Brand management platform that helps companies manage their identity, teams, assets, and digital presence.",
  category: ["Web", "Featured"],
  image: `${import.meta.env.BASE_URL}image/bunyan.webp`,
  tags: ["Flutter", "Laravel", "Bloc", "MySQL"],
  link: "/projects/bunyan",
  featured: true,
},

  {
    title: "Portfolio Website",
    description:
      "Modern personal portfolio website built with React, TypeScript, and responsive design.",
    category: ["Web", "Featured"],
    image: `${import.meta.env.BASE_URL}image/portfolio.webp`,
    tags: ["React", "TypeScript", "Tailwind CSS"],
    link: "#",
    featured: true,
  },
],

  // ================= PAGINATION =================
  pagination: {
    pages: [1],
  },

  // ================= CTA =================
  cta: {
    title: "Have a similar project?",
    description:
      "Let's collaborate and build something extraordinary together. I'm always open to discussing new opportunities and creative ideas.",
    buttonText: "Contact Me",
    buttonLink: "/contact",
    externalLink: "#",
  },
};