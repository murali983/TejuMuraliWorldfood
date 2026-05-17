import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";
import type { BreadcrumbItem, Recipe } from "@/lib/types";
import { absoluteUrl } from "@/lib/utils";

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const canonical = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    keywords: [...siteConfig.keywords, ...keywords],
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: absoluteUrl("/images/brand/og-cover.svg"),
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} cover`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/images/brand/og-cover.svg")],
    },
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  };
}

export function buildRecipeSchema(recipe: Recipe) {
  return {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: recipe.title,
    description: recipe.description,
    image: [absoluteUrl(recipe.heroImage)],
    author: {
      "@type": "Person",
      name: recipe.author.name,
    },
    recipeCuisine: recipe.cuisine,
    recipeCategory: recipe.category,
    keywords: recipe.tags.join(", "),
    prepTime: `PT${recipe.prepMinutes}M`,
    cookTime: `PT${recipe.cookMinutes}M`,
    totalTime: `PT${recipe.totalMinutes}M`,
    recipeYield: `${recipe.servings} servings`,
    nutrition: {
      "@type": "NutritionInformation",
      calories: `${recipe.nutrition.calories} calories`,
      proteinContent: recipe.nutrition.protein,
      carbohydrateContent: recipe.nutrition.carbs,
      fatContent: recipe.nutrition.fat,
      fiberContent: recipe.nutrition.fiber,
      sugarContent: recipe.nutrition.sugar,
      sodiumContent: recipe.nutrition.sodium,
    },
    recipeIngredient: recipe.ingredients.map((ingredient) =>
      [ingredient.amount, ingredient.item, ingredient.notes]
        .filter(Boolean)
        .join(" ")
    ),
    recipeInstructions: recipe.steps.map((step) => ({
      "@type": "HowToStep",
      name: step.title,
      text: step.detail,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue:
        recipe.reviews.reduce((sum, review) => sum + review.rating, 0) /
        recipe.reviews.length,
      reviewCount: recipe.reviews.length,
    },
    video: {
      "@type": "VideoObject",
      name: recipe.videoPlan.title,
      description: recipe.videoPlan.hook,
      thumbnailUrl: absoluteUrl(recipe.videoPlan.thumbnail),
      uploadDate: recipe.updatedAt,
      duration: recipe.videoPlan.duration,
    },
    mainEntityOfPage: absoluteUrl(`/recipes/${recipe.slug}`),
  };
}

export function buildFaqSchema(recipe: Recipe) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: recipe.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
