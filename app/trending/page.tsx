import { trendingRecipes } from "@/data/recipes";
import { PageHero } from "@/components/page-hero";
import { RecipeCard } from "@/components/recipe-card";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Trending",
  description:
    "Discover the most popular recipes and topics currently gaining traction on Tejaswi Murali World Foods.",
  path: "/trending",
});

export default function TrendingPage() {
  return (
    <>
      <PageHero
        eyebrow="Trending"
        title="The highest-momentum recipes in the publication."
        description="These posts are grouped by reader interest, social potential, and strong search intent signals."
      />
      <section className="pb-16">
        <div className="shell grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {trendingRecipes.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>
      </section>
    </>
  );
}
