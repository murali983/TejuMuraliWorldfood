import Link from "next/link";

import {
  featuredIndianArchiveEntries,
  indianFeaturedStates,
  totalIndianArchiveEntryCount,
  totalIndianCatalogTarget,
  totalIndianSeededDishCount,
  totalIndianStateCount,
} from "@/data/indian-catalog";
import {
  festivalFoodEntries,
  healthyFoodEntries,
  indianBrowseCategories,
  indianRegionShowcases,
  northIndianSpecials,
  popularIndianFoodEntries,
  southIndianSpecials,
  streetFoodEntries,
} from "@/data/indian-explore";
import { latestRecipes, recipes, trendingRecipes, videoRecipes } from "@/data/recipes";
import { HeroSection } from "@/components/hero-section";
import { IndianArchiveCard } from "@/components/indian-archive-card";
import { IndianCategoryCard } from "@/components/indian-category-card";
import { IndiaRegionCard } from "@/components/india-region-card";
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
              territory now have their own content hubs, with a visible archive that has grown past
              5,000 Indian dish entries.
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
                href="/states"
                className="rounded-full border px-5 py-3 text-sm"
                style={{ borderColor: "var(--border)" }}
              >
                Explore by state
              </Link>
              <Link
                href="/india/dishes"
                className="rounded-full border px-5 py-3 text-sm"
                style={{ borderColor: "var(--border)" }}
              >
                View 5000+ Indian entries
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
            eyebrow="Browse by category"
            title="Quick category-wise discovery for Indian recipes."
            description="Readers can jump straight into veg recipes, non-veg recipes, breakfast, street food, desserts, curries, snacks, and drinks without hunting through a generic archive."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {indianBrowseCategories.slice(0, 8).map((category) => (
              <IndianCategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="shell space-y-6">
          <SectionHeading
            eyebrow="Browse by region"
            title="Major Indian regions highlighted right on the homepage."
            description="North, South, East, and West India each deserve their own visual discovery layer so the site feels like a true Indian food portal."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {indianRegionShowcases.map((region) => (
              <IndiaRegionCard key={region.slug} region={region} />
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
            title="Top 4 recipes readers are checking right now."
            description="Trending recipe cards stay visual and fast to scan, while the much larger Indian archive handles scale behind the scenes."
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
            {trendingRecipes.slice(0, 4).map((recipe) => (
              <RecipeCard key={recipe.slug} recipe={recipe} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="shell space-y-6">
          <SectionHeading
            eyebrow="Popular Indian foods"
            title="A quick visual layer of dishes people expect on a big Indian food site."
            description="This section makes the homepage feel substantial from the first scroll by showing broad Indian dish coverage immediately."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {popularIndianFoodEntries.slice(0, 4).map((entry) => (
              <IndianArchiveCard key={entry.id} entry={entry} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="shell grid gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="South Indian specials"
              title="Dosa, biryani, appam, pongal, avial, and more."
              description="South Indian food is one of the strongest browsing intents on the web, so it is surfaced early and prominently."
            />
            <div className="grid gap-6 md:grid-cols-2">
              {southIndianSpecials.slice(0, 4).map((entry) => (
                <IndianArchiveCard key={entry.id} entry={entry} />
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <SectionHeading
              eyebrow="North Indian specials"
              title="Chole, paratha, butter chicken, dal makhani, and festive breads."
              description="North Indian dishes remain high-demand search terms, so the homepage now gives them dedicated visibility."
            />
            <div className="grid gap-6 md:grid-cols-2">
              {northIndianSpecials.slice(0, 4).map((entry) => (
                <IndianArchiveCard key={entry.id} entry={entry} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="shell grid gap-6 lg:grid-cols-3">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Street foods"
              title="Bazaar-style bites and snack plates."
              description="Cards for pavs, chaat, bajji, and other street-style food ideas."
            />
            <div className="grid gap-6">
              {streetFoodEntries.slice(0, 3).map((entry) => (
                <IndianArchiveCard key={entry.id} entry={entry} />
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Festival foods"
              title="Celebration dishes and festive sweets."
              description="Festival browsing matters for search spikes and seasonal relevance."
            />
            <div className="grid gap-6">
              {festivalFoodEntries.slice(0, 3).map((entry) => (
                <IndianArchiveCard key={entry.id} entry={entry} />
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Healthy recipes"
              title="Lighter Indian meal ideas and breakfast-friendly options."
              description="This gives the homepage a practical everyday cooking angle too."
            />
            <div className="grid gap-6">
              {healthyFoodEntries.slice(0, 3).map((entry) => (
                <IndianArchiveCard key={entry.id} entry={entry} />
              ))}
            </div>
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
            <p className="eyebrow mb-3">Featured cuisines</p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl">
              Indian-first discovery with room for wider cuisines.
            </h2>
            <p className="mt-4 text-sm leading-7 md:text-base" style={{ color: "var(--muted)" }}>
              The site is now heavily optimized around Indian food browsing, but still leaves space
              for long-form detailed recipes and wider cuisine posts in the main archive.
            </p>
            <div className="mt-6 grid gap-4">
              {[
                { title: "South Indian Specials", description: "Dosa, appam, biryani, sambar, pongal, and tiffin classics.", href: "/states#south-india", label: "South" },
                { title: "North Indian Specials", description: "Butter chicken, chole, paratha, dal makhani, and festive breads.", href: "/states#north-india", label: "North" },
                { title: "Street Foods", description: "Pavs, chaat, bajji, samosa, pani puri, and fast-snack culture.", href: "/categories/street-food", label: "Street" },
                { title: "Desserts", description: "Kheer, laddu, mithai, payasam, halwa, and celebration sweets.", href: "/categories/desserts", label: "Sweets" },
              ].map((cuisine) => (
                <Link
                  key={cuisine.title}
                  href={cuisine.href}
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
                      {cuisine.label}
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
              Indian category hubs are now a front-door feature.
            </h2>
            <p className="mt-4 text-sm leading-7 md:text-base" style={{ color: "var(--muted)" }}>
              Veg recipes, non-veg recipes, breakfast, street food, desserts, curries, rice, snacks,
              and drinks now have direct browsing surfaces that support SEO and better user flow.
            </p>
            <div className="mt-6 grid gap-3">
              {indianBrowseCategories.slice(0, 6).map((category) => (
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
