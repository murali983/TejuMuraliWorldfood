import { notFound } from "next/navigation";

import { recipes } from "@/data/recipes";
import { BreadcrumbTrail } from "@/components/breadcrumb-trail";
import { RecipeDetail } from "@/components/recipe-detail";
import { StructuredData } from "@/components/structured-data";
import { buildBreadcrumbSchema, buildFaqSchema, buildRecipeSchema, buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return recipes.map((recipe) => ({ slug: recipe.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const recipe = recipes.find((item) => item.slug === slug);

  if (!recipe) {
    return {};
  }

  return buildMetadata({
    title: recipe.title,
    description: recipe.seoDescription,
    path: `/recipes/${recipe.slug}`,
    keywords: recipe.tags,
  });
}

export default async function RecipePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const recipe = recipes.find((item) => item.slug === slug);

  if (!recipe) {
    notFound();
  }

  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/recipes", label: "Recipes" },
    { href: `/recipes/${recipe.slug}`, label: recipe.title },
  ];

  return (
    <>
      <StructuredData data={buildBreadcrumbSchema(breadcrumbItems)} />
      <StructuredData data={buildRecipeSchema(recipe)} />
      <StructuredData data={buildFaqSchema(recipe)} />
      <BreadcrumbTrail items={breadcrumbItems} />
      <RecipeDetail recipe={recipe} />
    </>
  );
}
