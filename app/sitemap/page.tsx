import Link from "next/link";

import { indianStateCuisines } from "@/data/indian-catalog";
import { indianBrowseCategories } from "@/data/indian-explore";
import { recipes } from "@/data/recipes";
import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/lib/seo";

const topPages = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/india", label: "India Atlas" },
  { href: "/india/dishes", label: "Indian Dishes Archive" },
  { href: "/states", label: "Indian States" },
  { href: "/recipes", label: "Recipes" },
  { href: "/trending", label: "Trending" },
  { href: "/latest-posts", label: "Latest Posts" },
  { href: "/video-recipes", label: "Video Recipes" },
  { href: "/search", label: "Search Results" },
];

export const metadata = buildMetadata({
  title: "Sitemap Page",
  description:
    "Browse the HTML sitemap for Tejaswi Murali World Foods, including public pages, categories, and recipes.",
  path: "/sitemap",
});

export default function SitemapPage() {
  return (
    <>
      <PageHero
        eyebrow="Sitemap"
        title="Every major public page in one structured place."
        description="This HTML sitemap supports human navigation while the XML sitemap powers search engine discovery."
      />
      <section className="pb-16">
        <div className="shell grid gap-6 xl:grid-cols-4">
          <div className="panel rounded-[2rem] p-6">
            <h2 className="font-[family-name:var(--font-display)] text-3xl">
              Core pages
            </h2>
            <div className="mt-4 grid gap-3">
              {topPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="rounded-2xl border px-4 py-3 text-sm"
                  style={{ borderColor: "var(--border)" }}
                >
                  {page.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="panel rounded-[2rem] p-6">
            <h2 className="font-[family-name:var(--font-display)] text-3xl">
              Categories
            </h2>
            <div className="mt-4 grid gap-3">
              {indianBrowseCategories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/categories/${category.slug}`}
                  className="rounded-2xl border px-4 py-3 text-sm"
                  style={{ borderColor: "var(--border)" }}
                >
                  {category.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="panel rounded-[2rem] p-6">
            <h2 className="font-[family-name:var(--font-display)] text-3xl">
              India atlas
            </h2>
            <div className="mt-4 grid gap-3">
              {indianStateCuisines.map((state) => (
                <Link
                  key={state.slug}
                  href={`/india/${state.slug}`}
                  className="rounded-2xl border px-4 py-3 text-sm"
                  style={{ borderColor: "var(--border)" }}
                >
                  {state.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="panel rounded-[2rem] p-6">
            <h2 className="font-[family-name:var(--font-display)] text-3xl">
              Recipes
            </h2>
            <div className="mt-4 grid gap-3">
              {recipes.map((recipe) => (
                <Link
                  key={recipe.slug}
                  href={`/recipes/${recipe.slug}`}
                  className="rounded-2xl border px-4 py-3 text-sm"
                  style={{ borderColor: "var(--border)" }}
                >
                  {recipe.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
