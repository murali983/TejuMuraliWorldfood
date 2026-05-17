import { categories } from "@/data/recipes";
import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Categories",
  description:
    "Browse Tejaswi Murali World Foods by category, from rice dishes and soups to street food and desserts.",
  path: "/categories",
});

export default function CategoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Categories"
        title="Browse recipes by course, format, and cooking style."
        description="Organized category hubs make it easy for readers to explore related dishes while strengthening topical authority and internal linking."
      />
      <section className="pb-16">
        <div className="shell grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="panel rounded-[2rem] p-6 transition hover:-translate-y-1"
            >
              <p className="eyebrow mb-3">{category.title}</p>
              <p className="font-[family-name:var(--font-display)] text-3xl">
                {category.title}
              </p>
              <p className="mt-4 text-sm leading-7" style={{ color: "var(--muted)" }}>
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
