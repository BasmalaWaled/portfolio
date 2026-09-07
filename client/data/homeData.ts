export const homeData = {
  // ================= HERO =================
  hero: {
    greeting: "Hi, I'm Basmala 👋",

    title: "Frontend",

    highlightedTitle: "Developer",

    description:
      "Front-End Developer specialized in React.js & Next.js & TypeScript. Building component-based, production-style dashboards and REST-API-driven apps.",

    hireButton: {
      text: "Hire Me Now",
      href: "#projects",
    },

    contactButton: {
      text: "Contact Me",
      to: "/contact",
    },

    profileImage: `${import.meta.env.BASE_URL}image/photo_2026-07-25_01-13-22.jpg`,

    profileImageAlt: "Basmala, frontend developer",
  },

  // ================= STATS =================
  stats: [
    {
      icon: "Code2",
      value: "10+",
      label: "Projects Completed",
    },
    {
      icon: "Layers",
      value: "5+",
      label: "Technologies",
    },
    {
      icon: "Laptop",
      value: "2+",
      label: "Years Learning",
    },
    {
      icon: "Rocket",
      value: "100%",
      label: "Passion for Coding",
    },
  ],

  // ================= ABOUT =================
  about: {
    badge: "ABOUT ME",

    title: "About Me",

    image: `${import.meta.env.BASE_URL}image/0d6fa7c1-a9f2-4cf2-9d35-6c4b196b82f4.webp`,

    imageAlt: "Frontend developer working on a laptop",

    description:
      "I'm a passionate Frontend Developer who loves turning ideas and designs into modern, responsive, and interactive web applications. I specialize in building clean and user-friendly interfaces using React and modern web technologies, with a strong focus on performance and user experience.",

    points: [
      "Responsive Web Design",
      "React Development",
      "Performance & Optimization",
      "State Management",
      "Problem Solver",
    ],

    button: {
      text: "View About Me",
      to: "/about",
    },
  },

  // ================= FEATURED PROJECTS =================
  projects: {
    title: "Featured Projects",

    subtitle: "Some of my recent works",

    viewAllButton: {
      text: "View All Projects →",
      to: "/projects",
    },

   items: [
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
          "Modern personal portfolio built with React and responsive design.",
        image: `${import.meta.env.BASE_URL}image/portfolio.webp`,
        tag: "Featured",
        tags: ["React", "TypeScript", "Tailwind CSS"],
      },
    ],
  },

  // ================= TECH STACK =================
  techStack: {
    title: "I work with",

    items: [
      {
        icon: "Code2",
        label: "HTML",
      },
      {
        icon: "Palette",
        label: "CSS",
      },
      {
        icon: "Braces",
        label: "JavaScript",
      },
      {
        icon: "FileCode2",
        label: "TypeScript",
      },
      {
        icon: "Atom",
        label: "React",
      },
      {
        icon: "Layers",
        label: "Next.js",
      },
      {
        icon: "Wind",
        label: "Tailwind CSS",
      },
      {
        icon: "GitBranch",
        label: "Git",
      },
    ],
  },

  // ================= CTA =================
  cta: {
    title: "Let's Build Something Amazing Together",

    description:
      "Have a project in mind? Let's turn your ideas into reality.",

    button: {
      text: "Get In Touch",
      to: "/contact",
    },
  },
};