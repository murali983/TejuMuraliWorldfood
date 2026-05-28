import { notFound } from "next/navigation";

import {
  findIndianBrowseCategory,
  filterIndianArchiveByBrowseCategory,
  indianBrowseCategories,
} from "@/data/indian-explore";
import { categories, recipes } from "@/data/recipes";
import { BreadcrumbTrail } from "@/components/breadcrumb-trail";
import { IndianArchiveCard } from "@/components/indian-archive-card";
import { PageHero } from "@/components/page-hero";
import { RecipeCard } from "@/components/recipe-card";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return [
    ...categories.map((category) => ({ slug: category.slug })),
    ...indianBrowseCategories.map((category) => ({ slug: category.slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const indianCategory = findIndianBrowseCategory(slug);

  if (indianCategory) {
    return buildMetadata({
      title: indianCategory.title,
      description: indianCategory.description,
      path: `/categories/${indianCategory.slug}`,
      keywords: [indianCategory.title, "Indian recipes", "Indian food category"],
    });
  }

  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    return {};
  }

  return buildMetadata({
    title: category.title,
    description: category.description,
    path: `/categories/${category.slug}`,
  });
}

export default async function CategoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const indianCategory = findIndianBrowseCategory(slug);

  if (indianCategory) {
    const entries = filterIndianArchiveByBrowseCategory(slug);

    return (
      <>
        <BreadcrumbTrail
          items={[
            { href: "/", label: "Home" },
            { href: "/categories", label: "Categories" },
            { href: `/categories/${indianCategory.slug}`, label: indianCategory.title },
          ]}
        />
        <PageHero
          eyebrow="Category Hub"
          title={indianCategory.title}
          description={`${indianCategory.description} This category currently surfaces ${entries.length.toLocaleString()} visible archive entries.`}
        />
        <section className="pb-16">
          <div className="shell grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {entries.slice(0, 60).map((entry) => (
              <IndianArchiveCard key={entry.id} entry={entry} />
            ))}
          </div>
        </section>
      </>
    );
  }

  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  const filteredRecipes = recipes.filter(
    (recipe) => recipe.category.toLowerCase().replace(/[^a-z]+/g, "-") === slug
  );

  return (
    <>
      <BreadcrumbTrail
        items={[
          { href: "/", label: "Home" },
          { href: "/categories", label: "Categories" },
          { href: `/categories/${category.slug}`, label: category.title },
        ]}
      />
      <PageHero
        eyebrow="Category Hub"
        title={category.title}
        description={category.description}
      />
      <section className="pb-16">
        <div className="shell grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>
      </section>
    </>
  );
}
