export const homeData = {
  // ================= HERO =================
  hero: {
    greeting: "Hi, I'm Hany 👋",

    title: "Flutter",

    highlightedTitle: "Developer",

    description:
      "I build scalable, secure and high-performance mobile applications with clean architecture and modern UI/UX experiences.",

    hireButton: {
      text: "Hire Me Now",
      href: "#projects",
    },

    contactButton: {
      text: "Contact Me",
      to: "/contact",
    },

    profileImage:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",

    profileImageAlt: "Hany, Flutter developer",
  },

  // ================= STATS =================
  stats: [
    {
      icon: "Activity",
      value: "15+",
      label: "Projects Completed",
    },
    {
      icon: "Users",
      value: "5+",
      label: "Client Worldwide",
    },
    {
      icon: "Award",
      value: "3+",
      label: "Years Experience",
    },
    {
      icon: "Download",
      value: "100K+",
      label: "Downloads",
    },
  ],

  // ================= ABOUT =================
  about: {
    badge: "ABOUT ME",

    title: "About Me",

    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",

    imageAlt: "Hany working on a laptop",

    description:
      "I'm a passionate Flutter Developer who loves turning ideas into real products. I focus on writing clean code and delivering exceptional user experiences.",

    points: [
      "Clean Architecture",
      "Performance & Optimization",
      "State Management",
      "Problem Solver",
      "Product Focused",
    ],

    button: {
      text: "View About Me",
      to: "/contact",
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
        title: "Bunyan",
        description: "Brand management platform...",
        image: "/image/0282a9a3afbba8aed2c7174a284c6461.webp",
        tag: "Featured",
        tags: ["Flutter", "Laravel", "Bloc", "MySQL"],
      },

      {
        title: "WebRTC QR Calling",
        description: "Peer-to-peer calling app...",
        image: "/image/392ee1152754af503131d19c3593a9c7.webp",
        tag: "Featured",
        tags: ["Flutter", "WebRTC", "Socket.IO"],
      },

      {
        title: "Biometric Login",
        description: "Secure authentication...",
        image: "/image/f099971824c1f2ae9d36b09958f6ee7b.webp",
        tag: "Featured",
        tags: ["Flutter", "Android", "Security"],
      },
    ],
  },

  // ================= TECH STACK =================
  techStack: {
    title: "I work with",

    items: [
      {
        icon: "Smartphone",
        label: "Flutter",
      },
      {
        icon: "Hexagon",
        label: "Dart",
      },
      {
        icon: "Flame",
        label: "Firebase",
      },
      {
        icon: "Database",
        label: "Supabase",
      },
      {
        icon: "GitBranch",
        label: "Bloc",
      },
      {
        icon: "GitCommit",
        label: "Git",
      },
      {
        icon: "Box",
        label: "Docker",
      },
      {
        icon: "PenTool",
        label: "Figma",
      },
    ],
  },

  // ================= CTA =================
  cta: {
    title: "Let's Build Something Amazing Together",

    description:
      "I have a project in mind? Let's turn your ideas into reality.",

    button: {
      text: "Get In Touch",
      to: "/contact",
    },
  },
};