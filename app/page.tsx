import Link from "next/link";

import {
  featuredIndianArchiveEntries,
  indianFeaturedStates,
  totalIndianArchiveEntryCount,
  totalIndianCatalogTarget,
  totalIndianSeededDishCount,
  totalIndianStateCount,
} from "@/data/indian-catalog";
import { categories, cuisines, latestRecipes, recipes, trendingRecipes, videoRecipes } from "@/data/recipes";
import { HeroSection } from "@/components/hero-section";
import { IndianArchiveCard } from "@/components/indian-archive-card";
import { IndiaStateCard } from "@/components/india-state-card";
import { NewsletterCard } from "@/components/newsletter-card";
import { RecipeCard } from "@/components/recipe-card";
import { SectionHeading } from "@/components/section-heading";
import { VideoCard } from "@/components/video-card";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="py-10">
        <div className="shell grid gap-6 lg:grid-cols-[1fr_0.96fr]">
          <div className="panel-strong rounded-[2rem] p-6 md:p-8">
            <p className="eyebrow mb-3">India spotlight</p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl">
              A state-wise Indian food atlas is now part of the platform.
            </h2>
            <p className="mt-4 text-sm leading-7 md:text-base" style={{ color: "var(--muted)" }}>
              The site no longer feels limited to a tiny recipe sample. Andhra Pradesh, Telangana,
              Tamil Nadu, Kerala, Karnataka, Maharashtra, and every other Indian state and union
              territory now have their own content hubs, giving the platform a much larger and more
              realistic path toward 2,000+ Indian dishes.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                { label: "State and UT hubs", value: totalIndianStateCount.toLocaleString() },
                { label: "Visible archive entries", value: totalIndianArchiveEntryCount.toLocaleString() },
                { label: "Foundation dishes", value: totalIndianSeededDishCount.toLocaleString() },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.5rem] border p-5"
                  style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.08)" }}
                >
                  <p className="text-xs uppercase tracking-[0.22em]" style={{ color: "var(--accent)" }}>
                    {item.label}
                  </p>
                  <p className="mt-3 font-[family-name:var(--font-display)] text-4xl">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/india"
                className="rounded-full border px-5 py-3 text-sm"
                style={{ borderColor: "var(--border)" }}
              >
                Explore India atlas
              </Link>
              <Link
                href="/india/dishes"
                className="rounded-full border px-5 py-3 text-sm"
                style={{ borderColor: "var(--border)" }}
              >
                View 2500+ Indian entries
              </Link>
              <Link
                href="/recipes/hyderabadi-veg-dum-biryani"
                className="rounded-full border px-5 py-3 text-sm"
                style={{ borderColor: "var(--border)" }}
              >
                Open Telangana recipe
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            {indianFeaturedStates.slice(0, 3).map((state) => (
              <IndiaStateCard key={state.slug} state={state} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="shell space-y-6">
          <SectionHeading
            eyebrow="Indian dish archive"
            title="A larger India-only library is now visible on the site."
            description={`The platform now exposes ${totalIndianArchiveEntryCount.toLocaleString()} Indian archive entries so visitors do not see only four or five dishes and leave with the impression that the site is empty.`}
            action={
              <Link
                href="/india/dishes"
                className="rounded-full border px-5 py-3 text-sm"
                style={{ borderColor: "var(--border)" }}
              >
                Browse the archive
              </Link>
            }
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredIndianArchiveEntries.slice(0, 6).map((entry) => (
              <IndianArchiveCard key={entry.id} entry={entry} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="shell space-y-6">
          <SectionHeading
            eyebrow="Trending recipes"
            title="The recipes readers are opening, saving, and cooking right now."
            description="These high-interest recipes now span a wider set of world cuisines so the homepage feels like a global food destination instead of a tiny sample grid."
            action={
              <Link
                href="/trending"
                className="rounded-full border px-5 py-3 text-sm"
                style={{ borderColor: "var(--border)" }}
              >
                View all trending
              </Link>
            }
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {trendingRecipes.map((recipe) => (
              <RecipeCard key={recipe.slug} recipe={recipe} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="shell grid gap-6 lg:grid-cols-[1fr_0.92fr]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Latest recipes"
              title="Fresh long-form posts with strong editorial depth."
              description="The newest posts cover a broader mix of cuisines, regions, and meal styles while preserving long-form helpfulness and structured recipe detail."
              action={
                <Link
                  href="/recipes"
                  className="rounded-full border px-5 py-3 text-sm"
                  style={{ borderColor: "var(--border)" }}
                >
                  Browse all recipes
                </Link>
              }
            />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {latestRecipes.map((recipe) => (
                <RecipeCard key={recipe.slug} recipe={recipe} />
              ))}
            </div>
          </div>
          <div className="panel-strong rounded-[2rem] p-6 md:p-8">
            <p className="eyebrow mb-3">Popular cuisines</p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl">
              Browse flavor worlds with purpose-built hubs.
            </h2>
            <p className="mt-4 text-sm leading-7 md:text-base" style={{ color: "var(--muted)" }}>
              Cuisine hubs help readers discover related dishes while giving search engines deeper topical clusters and better internal linking pathways.
            </p>
            <div className="mt-6 grid gap-4">
              {cuisines.map((cuisine) => (
                <Link
                  key={cuisine.slug}
                  href={`/search?q=${encodeURIComponent(cuisine.title)}`}
                  className="rounded-[1.5rem] border p-5 transition hover:-translate-y-0.5"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold">{cuisine.title}</p>
                      <p className="mt-2 text-sm leading-6" style={{ color: "var(--muted)" }}>
                        {cuisine.description}
                      </p>
                    </div>
                    <span className="text-xs uppercase tracking-[0.22em]" style={{ color: "var(--accent)" }}>
                      {cuisine.region}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="shell space-y-6">
          <SectionHeading
            eyebrow="Video recipes"
            title="Short-form video blueprints ready for Reels, Shorts, and TikTok."
            description="The site includes AI-generated scene prompts, hook lines, and voiceover cues so every recipe can scale into social-first video storytelling."
            action={
              <Link
                href="/video-recipes"
                className="rounded-full border px-5 py-3 text-sm"
                style={{ borderColor: "var(--border)" }}
              >
                Open the video library
              </Link>
            }
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {videoRecipes.slice(0, 3).map((video) => (
              <VideoCard key={video.slug} slug={video.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="shell grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="panel rounded-[2rem] p-6 md:p-8">
            <p className="eyebrow mb-3">Category-wise browsing</p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl">
              Editorially structured categories that scale.
            </h2>
            <p className="mt-4 text-sm leading-7 md:text-base" style={{ color: "var(--muted)" }}>
              Category pages support richer internal linking, clear intent grouping, and monetization surfaces without turning the site into a low-value content farm.
            </p>
            <div className="mt-6 grid gap-3">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/categories/${category.slug}`}
                  className="rounded-[1.5rem] border px-5 py-4 transition hover:-translate-y-0.5"
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
          <div className="panel-strong rounded-[2rem] p-6 md:p-8">
            <p className="eyebrow mb-3">Platform highlights</p>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "AI-assisted recipe generation with human review gates",
                "Recipe and FAQ schema for rich search visibility",
                "Cloudinary-ready media hosting and WebP-first rendering",
                "Newsletter, donation, affiliate, and sponsor monetization paths",
                "Translation pipeline for major global languages",
                "Admin panels for SEO, scheduling, ads, and analytics",
                "Voice-enabled search and cooking assistant endpoints",
                "PWA shell, caching hooks, and security headers",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border p-5 text-sm leading-7"
                  style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.08)" }}
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-[1.75rem] border p-6" style={{ borderColor: "var(--border)" }}>
              <p className="font-semibold">Current global recipe library</p>
              <p className="mt-2 text-sm leading-7" style={{ color: "var(--muted)" }}>
                {recipes.length} world recipes are now included in launch content, covering a much wider set of cuisines while still acting as a foundation for larger automated publishing pipelines.
              </p>
              <p className="mt-3 text-sm leading-7" style={{ color: "var(--muted)" }}>
                Alongside those full recipe pages, the new India atlas now exposes {totalIndianArchiveEntryCount.toLocaleString()} visible Indian archive entries across {totalIndianStateCount.toLocaleString()} state and union territory hubs, with a structured expansion path toward {totalIndianCatalogTarget.toLocaleString()} entries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="shell">
          <NewsletterCard />
        </div>
      </section>
    </>
  );
}
