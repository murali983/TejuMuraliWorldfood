import { recipes } from "@/data/recipes";
import { PageHero } from "@/components/page-hero";
import { SearchResultsShell } from "@/components/search-results-shell";
import { buildAiSearchSummary } from "@/lib/ai";
import { buildMetadata } from "@/lib/seo";
import { searchRecipes } from "@/lib/search";

export const metadata = buildMetadata({
  title: "Search Results",
  description:
    "Use AI-assisted search to find recipes by cuisine, ingredients, calories, diet, time, and difficulty.",
  path: "/search",
});

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const matches = q ? searchRecipes(q) : recipes;
  const summary = q ? await buildAiSearchSummary(q) : null;

  return (
    <>
      <PageHero
        eyebrow="AI Search"
        title="Natural-language recipe discovery for busy cooks."
        description="Search like a human, not like a database. Ask for cuisine style, calorie limits, ingredient use-up ideas, dietary needs, or weeknight timing."
      />
      <section className="pb-16">
        <div className="shell space-y-6">
          {summary ? (
            <div className="panel rounded-[2rem] p-6 text-sm leading-7" style={{ color: "var(--muted)" }}>
              <p className="eyebrow mb-3">AI Summary</p>
              {summary.summary}
            </div>
          ) : null}
          <SearchResultsShell recipes={matches} initialQuery={q} />
        </div>
      </section>
    </>
  );
}
