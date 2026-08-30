export const articleDetailsData = {
  article: {
    title: "How I Implemented Biometric Authentication in Flutter",

    description:
      "A complete guide to implementing secure biometric authentication using local authentication and cryptography.",

    date: "May 15, 2024",

    readTime: "8 min read",

    category: "Flutter",

    author: "Hany Dev",

    image: "/image/358fb445-50d2-4fa7-afe5-21762c49cf4a.webp",
  },

  content: {
    introduction: {
      title: "Introduction",

      text:
        "Biometric authentication adds an extra layer of security and provides a seamless user experience. In this article, I'll share how I implemented biometric authentication in a Flutter application using local authentication and cryptographic keys.",
    },

    why: {
      title: "Why Biometric Authentication?",

      text:
        "Traditional password-based authentication can be vulnerable to attacks. Biometric authentication uses unique physical characteristics, making it more secure and convenient for users.",
    },

    implementation: {
      title: "Implementation",

      steps: [
        {
          number: "1",

          title: "Add Dependencies",

          description:
            "Add the following packages to your pubspec.yaml file:",

          language: "YAML",

          code: `yaml
local_auth: ^2.1.7
flutter_secure_storage: ^9.0.0
crypto: ^3.0.3`,
        },

        {
          number: "2",

          title: "Check Biometric Availability",

          description:
            "First, check if the device supports biometric authentication using the local_auth package. This ensures you can fall back to traditional methods if needed.",
        },
      ],
    },
  },

  tableOfContents: [
    {
      label: "Introduction",
      href: "#introduction",
      active: true,
    },

    {
      label: "Why Biometric Authentication?",
      href: "#why",
      indent: true,
    },

    {
      label: "Implementation",
      href: "#implementation",
    },

    {
      label: "Add Dependencies",
      indent: true,
    },

    {
      label: "Check Biometric Availability",
      indent: true,
    },

    {
      label: "Authenticate User",
      indent: true,
    },

    {
      label: "Store Authentication State",
      indent: true,
    },

    {
      label: "Conclusion",
    },
  ],

  moreArticles: [
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
  ],

  socialLinks: {
    github: "#",
    linkedin: "#",
    twitter: "#",
  },

  follow: {
    title: "Enjoying the article?",

    description:
      "Follow me for more tutorials and insights about Flutter development.",

    githubUrl: "https://github.com/",

    buttonText: "Follow on GitHub",
  },

  footer: {
    copyright: "© 2026 HANY.dev. All rights reserved.",
  },
};