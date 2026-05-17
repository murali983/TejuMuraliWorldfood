import { recipes } from "@/data/recipes";
import { PageHero } from "@/components/page-hero";
import { RecipeCard } from "@/components/recipe-card";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Recipes",
  description:
    "Browse the full recipe archive from Tejaswi Murali World Foods, featuring detailed world cuisine recipes with schema-ready structure.",
  path: "/recipes",
});

export default function RecipesPage() {
  return (
    <>
      <PageHero
        eyebrow="Recipe Archive"
        title="Original recipes built for real kitchens and durable search value."
        description="Each article is designed as a complete, long-form recipe page with structured data, FAQs, nutrition estimates, and cultural context."
      />
      <section className="pb-16">
        <div className="shell grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>
      </section>
    </>
  );
}
