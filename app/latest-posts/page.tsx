import { latestRecipes } from "@/data/recipes";
import { PageHero } from "@/components/page-hero";
import { RecipeCard } from "@/components/recipe-card";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Latest Posts",
  description:
    "Read the newest recipe stories and cooking guides from Tejaswi Murali World Foods.",
  path: "/latest-posts",
});

export default function LatestPostsPage() {
  return (
    <>
      <PageHero
        eyebrow="Latest Posts"
        title="Newly published recipes and updated culinary stories."
        description="Fresh posts land here first with complete recipe structure, media prompts, and SEO-ready metadata."
      />
      <section className="pb-16">
        <div className="shell grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {latestRecipes.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>
      </section>
    </>
  );
}
