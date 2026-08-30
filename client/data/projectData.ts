export type ProjectCategory =
  | "All"
  | "Mobile"
  | "Web"
  | "Security"
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
  header: {
    title: "My",
    highlight: "Projects",
    description:
      "A collection of digital products and experiences I've built, focusing on high-performance mobile applications and clean web interfaces.",
  },

  filters: [
    "All",
    "Mobile",
    "Web",
    "Security",
    "Featured",
  ] as ProjectCategory[],

  projects: [
    {
      title: "Bunyan",
      description:
        "Brand management platform that helps companies manage their identity, teams, and digital presence.",
      category: ["Mobile", "Featured"],
      image: "/image/6c75421a-c74f-4cb9-929a-bff93ca0d6ba.webp",
      tags: ["Flutter", "Laravel", "Bloc", "MySQL"],
      link: "/projects/bunyan",
      featured: true,
    },
    {
      title: "WebRTC QR Calling",
      description:
        "Peer-to-peer calling app using WebRTC and QR codes for secure and real-time communication.",
      category: ["Mobile", "Featured"],
      image: "/image/cd36c60c-035b-4f3b-a852-b5df251b2d9b.webp",
      tags: ["Flutter", "WebRTC", "Socket.IO"],
      link: "#",
      featured: false,
    },
    {
      title: "Biometric Login",
      description:
        "Secure authentication using Android Keystore and biometric verification for enhanced security.",
      category: ["Security", "Featured"],
      image: "/image/117f7be4-7a7b-4d15-9c59-8a1ab1237cbb.webp",
      tags: ["Flutter", "Android", "Security"],
      link: "#",
      featured: false,
    },
    {
      title: "Task Manager",
      description:
        "A productivity app for teams to manage tasks and projects efficiently with real-time collaboration.",
      category: ["Mobile", "Web"],
      image: "/image/3120c457-94f7-415e-8933-b323b18cbc8b.webp",
      tags: ["Flutter", "Firebase", "Bloc"],
      link: "#",
      featured: false,
    },
    {
      title: "E-Commerce App",
      description:
        "Full e-commerce platform with cart, payments, and order tracking features.",
      category: ["Mobile", "Web"],
      image: "/image/ec235850-69f7-4731-b170-14edb52d71c2.webp",
      tags: ["Flutter", "Stripe", "Firebase"],
      link: "#",
      featured: false,
    },
    {
      title: "Finance Tracker",
      description:
        "Personal finance tracking app with beautiful charts and insights to manage your budget and expenses.",
      category: ["Mobile", "Web"],
      image: "/image/117f7be4-7a7b-4d15-9c59-8a1ab1237cbb.webp",
      tags: ["Flutter", "Charts", "Hive"],
      link: "#",
      featured: false,
    },
  ] satisfies Project[],

  pagination: {
    pages: [1, 2, 3],
  },

  cta: {
    title: "Have a similar project?",
    description:
      "Let's collaborate and build something extraordinary together. I'm always open to discussing new opportunities and creative ideas.",
    buttonText: "Contact Me",
    buttonLink: "/contact",
    externalLink: "#",
  },
};