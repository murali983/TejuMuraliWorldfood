import Link from "next/link";

import { IndianArchiveCard } from "@/components/indian-archive-card";
import { recipes } from "@/data/recipes";
import { PageHero } from "@/components/page-hero";
import { SearchResultsShell } from "@/components/search-results-shell";
import { buildAiSearchSummary } from "@/lib/ai";
import { buildMetadata } from "@/lib/seo";
import { searchIndianArchive, searchRecipes } from "@/lib/search";

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
  const archiveMatches = q ? searchIndianArchive(q) : [];
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
          {q ? (
            <div className="panel-strong rounded-[2rem] p-6 md:p-8">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="eyebrow mb-3">India archive matches</p>
                  <h2 className="font-[family-name:var(--font-display)] text-4xl">
                    {archiveMatches.length.toLocaleString()} Indian dish entries match "{q}".
                  </h2>
                  <p className="mt-4 max-w-3xl text-sm leading-7 md:text-base" style={{ color: "var(--muted)" }}>
                    Search now includes the larger Indian dish archive, not just a few full recipe
                    posts. This makes broad queries like "Indian" or "Andhra breakfast" feel much
                    closer to a real large food platform.
                  </p>
                </div>
                <Link
                  href="/india/dishes"
                  className="rounded-full border px-5 py-3 text-sm font-semibold"
                  style={{ borderColor: "var(--border)" }}
                >
                  Open full Indian archive
                </Link>
              </div>
            </div>
          ) : null}
          {archiveMatches.length ? (
            <div className="space-y-6">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="eyebrow mb-3">Archive preview</p>
                  <h2 className="font-[family-name:var(--font-display)] text-4xl">
                    More Indian dish coverage from the archive
                  </h2>
                </div>
                <p className="max-w-xl text-sm leading-7" style={{ color: "var(--muted)" }}>
                  Showing the first {Math.min(24, archiveMatches.length).toLocaleString()} Indian
                  archive matches for this query.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {archiveMatches.slice(0, 24).map((entry) => (
                  <IndianArchiveCard key={entry.id} entry={entry} />
                ))}
              </div>
            </div>
          ) : null}
          <SearchResultsShell recipes={matches} initialQuery={q} />
        </div>
      </section>
    </>
  );
}
