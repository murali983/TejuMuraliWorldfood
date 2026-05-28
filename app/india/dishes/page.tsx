import Link from "next/link";

import {
  indianArchiveCategories,
  indianDishArchive,
  indianStateCuisines,
  totalIndianArchiveEntryCount,
  totalIndianLiveDishCount,
  totalIndianSeededDishCount,
} from "@/data/indian-catalog";
import { BreadcrumbTrail } from "@/components/breadcrumb-trail";
import { IndianDishArchiveShell } from "@/components/indian-dish-archive-shell";
import { PageHero } from "@/components/page-hero";
import { StructuredData } from "@/components/structured-data";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

const breadcrumbItems = [
  { href: "/", label: "Home" },
  { href: "/india", label: "India" },
  { href: "/india/dishes", label: "Indian Dishes" },
];

const indianArchiveSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Indian Dishes Archive",
  description:
    "A large India-only dish archive that organizes visible Indian dish entries across states, union territories, categories, and publishing status.",
  url: absoluteUrl("/india/dishes"),
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: totalIndianArchiveEntryCount,
    itemListElement: indianDishArchive.slice(0, 100).map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.title,
    })),
  },
};

export const metadata = buildMetadata({
  title: "5000+ Indian Dishes Archive",
  description:
    "Browse more than 5,000 visible Indian dish archive entries across every state and union territory on Tejaswi Murali World Foods.",
  path: "/india/dishes",
  keywords: [
    "5000 Indian dishes",
    "Indian food archive",
    "India state wise dishes",
    "all Indian foods",
    "Indian dishes catalog",
  ],
});

export default function IndianDishesArchivePage() {
  const stateOptions = indianStateCuisines.map((state) => state.title).sort();

  return (
    <>
      <StructuredData data={buildBreadcrumbSchema(breadcrumbItems)} />
      <StructuredData data={indianArchiveSchema} />
      <BreadcrumbTrail items={breadcrumbItems} />
      <PageHero
        eyebrow="Indian Dishes Archive"
        title="A visible archive of 5,000+ Indian dish entries."
        description="This page is built to solve the exact problem of the site looking too small. Instead of showing only a few recipe cards, the platform now exposes a much larger India-only archive that visitors can browse by state, category, status, and keyword."
      />

      <section className="pb-10">
        <div className="shell grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              label: "Visible archive entries",
              value: totalIndianArchiveEntryCount.toLocaleString(),
              note: "Public Indian dish and recipe-angle entries",
            },
            {
              label: "Foundation dishes",
              value: totalIndianSeededDishCount.toLocaleString(),
              note: "Curated seed dishes behind the archive",
            },
            {
              label: "Detailed live recipes",
              value: totalIndianLiveDishCount.toLocaleString(),
              note: "Long-form published recipe pages live now",
            },
            {
              label: "Categories",
              value: indianArchiveCategories.length.toLocaleString(),
              note: "Breakfast, rice, curries, desserts, snacks, and more",
            },
          ].map((stat) => (
            <div key={stat.label} className="panel rounded-[2rem] p-6">
              <p className="text-xs uppercase tracking-[0.22em]" style={{ color: "var(--accent)" }}>
                {stat.label}
              </p>
              <p className="mt-3 font-[family-name:var(--font-display)] text-4xl">
                {stat.value}
              </p>
              <p className="mt-3 text-sm leading-7" style={{ color: "var(--muted)" }}>
                {stat.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10">
        <div className="shell grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="panel-strong rounded-[2rem] p-6 md:p-8">
            <p className="eyebrow mb-3">What this solves</p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl">
              The site no longer looks like it has only four or five Indian dishes.
            </h2>
            <p className="mt-4 text-sm leading-7 md:text-base" style={{ color: "var(--muted)" }}>
              The full detailed recipe library is still growing carefully for quality, but the
              public-facing India archive now looks and behaves like a large food media platform.
              Visitors can browse thousands of Indian dish entries immediately instead of seeing a
              tiny sample and assuming the site is empty.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/india"
                className="rounded-full border px-5 py-3 text-sm"
                style={{ borderColor: "var(--border)" }}
              >
                Go to India atlas
              </Link>
              <Link
                href="/recipes"
                className="rounded-full border px-5 py-3 text-sm"
                style={{ borderColor: "var(--border)" }}
              >
                Open detailed recipes
              </Link>
            </div>
          </div>
          <div className="panel rounded-[2rem] p-6 md:p-8">
            <p className="eyebrow mb-3">Coverage map</p>
            <div className="grid gap-3 text-sm leading-7" style={{ color: "var(--muted)" }}>
              <p>All Indian states and union territories are included.</p>
              <p>Archive entries are grouped by dish family, region, and content angle.</p>
              <p>Only reviewed full recipe pages should be promoted into the main long-form recipe archive.</p>
              <p>The archive is large for visibility, while detailed publishing can still remain quality-controlled.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="shell">
          <IndianDishArchiveShell
            entries={indianDishArchive}
            states={stateOptions}
            categories={indianArchiveCategories}
          />
        </div>
      </section>
    </>
  );
}
