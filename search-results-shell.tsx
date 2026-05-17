"use client";

import { useDeferredValue, useMemo, useState } from "react";

import { RecipeCard } from "@/components/recipe-card";
import { SearchBar } from "@/components/search-bar";
import type { Recipe } from "@/lib/types";

type SearchResultsShellProps = {
  recipes: Recipe[];
  initialQuery: string;
};

export function SearchResultsShell({
  recipes,
  initialQuery,
}: SearchResultsShellProps) {
  const [query, setQuery] = useState(initialQuery);
  const [diet, setDiet] = useState("all");
  const [difficulty, setDifficulty] = useState("all");
  const [maxTime, setMaxTime] = useState("all");
  const deferredQuery = useDeferredValue(query.toLowerCase());

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      const matchesQuery =
        !deferredQuery ||
        [
          recipe.title,
          recipe.excerpt,
          recipe.cuisine,
          recipe.category,
          recipe.country,
          recipe.tags.join(" "),
          recipe.ingredients.map((ingredient) => ingredient.item).join(" "),
        ]
          .join(" ")
          .toLowerCase()
          .includes(deferredQuery);

      const matchesDiet =
        diet === "all" ? true : recipe.diet.includes(diet.toLowerCase());
      const matchesDifficulty =
        difficulty === "all" ? true : recipe.difficulty === difficulty;
      const matchesTime =
        maxTime === "all" ? true : recipe.totalMinutes <= Number(maxTime);

      return matchesQuery && matchesDiet && matchesDifficulty && matchesTime;
    });
  }, [deferredQuery, diet, difficulty, maxTime, recipes]);

  return (
    <div className="space-y-8">
      <div className="panel rounded-[2rem] p-6">
        <SearchBar initialQuery={initialQuery} />
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          <select
            value={diet}
            onChange={(event) => setDiet(event.target.value)}
            className="rounded-full border px-4 py-3 text-sm outline-none"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            <option value="all">All diets</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="gluten-free">Gluten-free</option>
            <option value="dairy-free">Dairy-free</option>
          </select>
          <select
            value={difficulty}
            onChange={(event) => setDifficulty(event.target.value)}
            className="rounded-full border px-4 py-3 text-sm outline-none"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            <option value="all">All difficulty levels</option>
            <option value="Easy">Easy</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
          <select
            value={maxTime}
            onChange={(event) => setMaxTime(event.target.value)}
            className="rounded-full border px-4 py-3 text-sm outline-none"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            <option value="all">Any cook time</option>
            <option value="30">Under 30 minutes</option>
            <option value="45">Under 45 minutes</option>
            <option value="60">Under 1 hour</option>
          </select>
        </div>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Refine results by ingredient or phrase"
          className="mt-4 w-full rounded-full border px-4 py-3 text-sm outline-none"
          style={{ borderColor: "var(--border)", background: "var(--surface)" }}
        />
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.slug} recipe={recipe} />
        ))}
      </div>
      {!filteredRecipes.length ? (
        <div className="panel rounded-[2rem] p-8 text-sm leading-7" style={{ color: "var(--muted)" }}>
          No recipes match the current filters yet. Try broadening the cuisine, time, or diet settings.
        </div>
      ) : null}
    </div>
  );
}
