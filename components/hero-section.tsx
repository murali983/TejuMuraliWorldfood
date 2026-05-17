import Link from "next/link";
import Image from "next/image";

import { categories, latestRecipes, trendingRecipes } from "@/data/recipes";
import { SearchBar } from "@/components/search-bar";

export function HeroSection() {
  const feature = trendingRecipes[0];

  return (
    <section className="page-fade py-10 md:py-14">
      <div className="shell grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="panel-strong shine-border relative overflow-hidden rounded-[2rem] p-6 md:p-8">
          <Image
            src="/images/brand/home-hero.png"
            alt="Luxury editorial world-food tablescape"
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover opacity-[0.22]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/15 to-transparent" />
          <div className="grid gap-8 xl:grid-cols-[1fr_0.92fr]">
            <div className="relative z-10 space-y-6">
              <p className="eyebrow">Michelin-Inspired Editorial Experience</p>
              <h1 className="font-[family-name:var(--font-display)] text-5xl leading-tight md:text-7xl">
                World-class recipes from every table worth celebrating.
              </h1>
              <p className="max-w-2xl text-base leading-8 md:text-lg" style={{ color: "var(--muted)" }}>
                Tejaswi Murali World Foods is built as a premium global recipe publication with detailed instructions, structured SEO, responsible AI workflows, and content quality gates designed to avoid thin or repetitive pages.
              </p>
              <SearchBar />
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  "50 AI-assisted recipe drafts daily",
                  "Human editorial quality scoring",
                  "Schema-rich search-ready publishing",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl border px-4 py-4 text-sm"
                    style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.08)" }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative z-10 space-y-4">
              <div className="relative h-[25rem] overflow-hidden rounded-[2rem]">
                <Image
                  src={feature.heroImage}
                  alt={feature.imageAlt}
                  fill
                  sizes="(min-width: 1280px) 40vw, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 space-y-3 p-6 text-white">
                  <p className="eyebrow text-white/80">Featured recipe</p>
                  <h2 className="font-[family-name:var(--font-display)] text-3xl">
                    {feature.title}
                  </h2>
                  <p className="text-sm leading-7 text-white/80">{feature.excerpt}</p>
                  <Link
                    href={`/recipes/${feature.slug}`}
                    className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5"
                  >
                    Read the full recipe
                  </Link>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {latestRecipes.slice(0, 2).map((recipe) => (
                  <Link
                    key={recipe.slug}
                    href={`/recipes/${recipe.slug}`}
                    className="rounded-[1.5rem] border p-4 transition hover:-translate-y-1"
                    style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.08)" }}
                  >
                    <p className="text-xs uppercase tracking-[0.28em] text-white/70">
                      {recipe.cuisine}
                    </p>
                    <p className="mt-3 text-lg font-semibold">{recipe.title}</p>
                    <p className="mt-2 text-sm leading-6 text-white/75">
                      {recipe.totalMinutes} min total
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <aside className="grid gap-6">
          <div className="panel rounded-[2rem] p-6">
            <p className="eyebrow mb-3">Popular Cuisines</p>
            <div className="grid gap-3">
              {["Indian", "Japanese", "Italian", "Mexican", "Moroccan", "Portuguese"].map((cuisine) => (
                <Link
                  key={cuisine}
                  href={`/search?q=${encodeURIComponent(cuisine)}`}
                  className="flex items-center justify-between rounded-2xl border px-4 py-3 text-sm transition hover:-translate-y-0.5"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span>{cuisine}</span>
                  <span style={{ color: "var(--muted)" }}>Explore</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="panel rounded-[2rem] p-6">
            <p className="eyebrow mb-3">Browse By Category</p>
            <div className="grid gap-3">
              {categories.slice(0, 4).map((category) => (
                <Link
                  key={category.slug}
                  href={`/categories/${category.slug}`}
                  className="rounded-2xl border px-4 py-4 transition hover:-translate-y-0.5"
                  style={{ borderColor: "var(--border)" }}
                >
                  <p className="font-semibold">{category.title}</p>
                  <p className="mt-2 text-sm leading-6" style={{ color: "var(--muted)" }}>
                    {category.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
