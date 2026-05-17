import type { LegalPage } from "@/lib/types";

export const legalPages: LegalPage[] = [
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    summary:
      "How Tejaswi Murali World Foods collects, stores, and protects personal information.",
    sections: [
      {
        title: "Information We Collect",
        body: [
          "We collect information that you voluntarily submit through contact forms, newsletter signups, account preferences, and recipe interactions. This may include your name, email address, approximate location, device type, and browsing behavior on our pages.",
          "We also use analytics, cookie, and advertising technologies to understand how readers interact with content, improve site performance, and measure campaign effectiveness.",
        ],
      },
      {
        title: "How Information Is Used",
        body: [
          "Data is used to deliver newsletters, respond to inquiries, personalize recipe recommendations, improve search quality, manage subscriptions, and measure website performance.",
          "We never sell personal information as a standalone product. Access is restricted to authorized service providers and internal administrators with legitimate operational needs.",
        ],
      },
      {
        title: "Your Choices",
        body: [
          "You may unsubscribe from marketing emails at any time, clear cookies from your browser, and contact us to request access, correction, or deletion of personal information where legally applicable.",
        ],
      },
    ],
  },
  {
    slug: "disclaimer",
    title: "Disclaimer",
    summary:
      "Important editorial, nutritional, affiliate, and general information disclosures.",
    sections: [
      {
        title: "Editorial Use",
        body: [
          "Recipes, educational content, and cooking guidance are provided for informational purposes only. Kitchen conditions, ingredient brands, and equipment performance vary, so readers should use their own judgment while cooking.",
          "Nutritional values are estimated from standard databases and serving assumptions. They should not replace advice from qualified medical or nutrition professionals.",
        ],
      },
      {
        title: "AI-Assisted Workflows",
        body: [
          "Our publishing system uses AI-assisted drafting, translation, image ideation, and metadata generation workflows. Every published article is intended to pass through editorial review, recipe-format checks, and quality scoring before publication.",
        ],
      },
    ],
  },
  {
    slug: "terms-and-conditions",
    title: "Terms & Conditions",
    summary:
      "The rules governing the use of the Tejaswi Murali World Foods platform.",
    sections: [
      {
        title: "Platform Use",
        body: [
          "By using this website, you agree not to misuse the service, scrape protected areas, interfere with security features, submit unlawful content, or replicate material in a way that violates copyright or trademark law.",
          "We reserve the right to update, suspend, or remove features to protect site integrity, legal compliance, and reader safety.",
        ],
      },
      {
        title: "Content Ownership",
        body: [
          "Unless otherwise stated, written content, original layouts, branding, and custom media workflows belong to Tejaswi Murali World Foods. Limited personal, non-commercial sharing with proper attribution is permitted.",
        ],
      },
    ],
  },
  {
    slug: "dmca-policy",
    title: "DMCA Policy",
    summary:
      "How copyright complaints and takedown notices are handled on the platform.",
    sections: [
      {
        title: "Notice Procedure",
        body: [
          "If you believe content on this website infringes your copyright, please send a detailed notice including your contact details, the work claimed to be infringed, the specific URL involved, and a statement made under penalty of perjury.",
          "We review credible notices promptly and may remove or disable access to disputed material while the matter is investigated.",
        ],
      },
      {
        title: "Counter Notice",
        body: [
          "If content is removed in error, the affected party may submit a counter notice with the legally required information. Repeat infringement may result in account restrictions or content removal.",
        ],
      },
    ],
  },
  {
    slug: "cookie-policy",
    title: "Cookie Policy",
    summary:
      "How cookies support analytics, preferences, advertising, and performance.",
    sections: [
      {
        title: "Cookie Categories",
        body: [
          "Essential cookies help core website functions work correctly. Analytics cookies measure engagement and improve performance. Advertising cookies help deliver and measure relevant monetization placements.",
          "Readers can manage cookie preferences through browser settings or any consent tools available on the website.",
        ],
      },
    ],
  },
  {
    slug: "affiliate-disclosure",
    title: "Affiliate Disclosure",
    summary:
      "How affiliate links and product recommendations may generate revenue.",
    sections: [
      {
        title: "How Affiliate Links Work",
        body: [
          "Some recipe tool recommendations and kitchen equipment links may be affiliate links. If you purchase through those links, Tejaswi Murali World Foods may earn a commission at no extra cost to you.",
          "Recommendations are intended to reflect editorial usefulness, kitchen practicality, and relevance to the recipe content being discussed.",
        ],
      },
    ],
  },
];
