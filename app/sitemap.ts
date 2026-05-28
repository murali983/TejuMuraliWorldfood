import type { MetadataRoute } from "next";

import { indianDishArchive, indianStateCuisines } from "@/data/indian-catalog";
import { indianBrowseCategories } from "@/data/indian-explore";
import { categories, recipes } from "@/data/recipes";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/about",
    "/contact",
    "/privacy-policy",
    "/disclaimer",
    "/terms-and-conditions",
    "/dmca-policy",
    "/cookie-policy",
    "/affiliate-disclosure",
    "/copyright-notice",
    "/india",
    "/india/dishes",
    "/states",
    "/categories",
    "/recipes",
    "/trending",
    "/latest-posts",
    "/video-recipes",
    "/search",
    "/author/tejaswi-murali",
    "/sitemap",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const recipePages = recipes.map((recipe) => ({
    url: `${siteUrl}/recipes/${recipe.slug}`,
    lastModified: new Date(recipe.updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const categoryPages = categories.map((category) => ({
    url: `${siteUrl}/categories/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  const indianCategoryPages = indianBrowseCategories.map((category) => ({
    url: `${siteUrl}/categories/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.78,
  }));

  const indiaPages = indianStateCuisines.map((state) => ({
    url: `${siteUrl}/india/${state.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const statePages = indianStateCuisines.map((state) => ({
    url: `${siteUrl}/states/${state.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.82,
  }));

  const archivePages = indianDishArchive.map((entry) => ({
    url: `${siteUrl}/india/dishes/${entry.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.72,
  }));

  return [
    ...pages,
    ...recipePages,
    ...categoryPages,
    ...indianCategoryPages,
    ...indiaPages,
    ...statePages,
    ...archivePages,
  ];
}
