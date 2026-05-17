import type { AuthorProfile } from "@/lib/types";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.tejaswimuraliworldfoods.com";

export const siteConfig = {
  name: "Tejaswi Murali World Foods",
  shortName: "World Foods",
  description:
    "A luxury global food magazine publishing original recipes, culinary culture, and AI-assisted cooking experiences with editorial quality gates.",
  developer: "Tejaswi Murali",
  email: "tejumurali0808@gmail.com",
  url: siteUrl,
  locale: "en_US",
  keywords: [
    "global recipes",
    "food blog",
    "world cuisines",
    "healthy recipes",
    "recipe videos",
    "luxury food magazine",
    "AI recipe search",
  ],
  socialLinks: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/tejaswimuraliworldfoods",
    },
    {
      label: "Pinterest",
      href: "https://www.pinterest.com/tejaswimuraliworldfoods",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@tejaswimuraliworldfoods",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/tejaswimuraliworldfoods",
    },
  ],
  locales: [
    "en",
    "hi",
    "te",
    "ta",
    "kn",
    "ml",
    "ar",
    "es",
    "fr",
    "de",
    "ja",
    "zh",
    "ru",
    "pt",
    "it",
    "ko",
  ],
};

export const authorProfile: AuthorProfile = {
  name: "Tejaswi Murali",
  title: "Founder, Recipe Publisher, and Culinary Storyteller",
  bio: "Tejaswi Murali World Foods blends recipe development, cultural food research, and AI-assisted editorial systems to publish detailed recipes with a human culinary voice. Each article is designed for clarity, practicality, and long-term search value.",
  photo: "/images/brand/author-portrait.svg",
  email: siteConfig.email,
  experience: [
    "Global recipe research and editorial planning",
    "Structured SEO publishing for recipe-rich search journeys",
    "AI workflow design with human quality controls",
  ],
  specialties: [
    "World cuisines",
    "Step-by-step recipe education",
    "Food storytelling and kitchen confidence",
  ],
};
