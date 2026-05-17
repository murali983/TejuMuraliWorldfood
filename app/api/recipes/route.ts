import { NextRequest, NextResponse } from "next/server";

import { recipes } from "@/data/recipes";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q")?.toLowerCase() || "";
  const cuisine = request.nextUrl.searchParams.get("cuisine");
  const diet = request.nextUrl.searchParams.get("diet");
  const difficulty = request.nextUrl.searchParams.get("difficulty");
  const maxTime = Number(request.nextUrl.searchParams.get("maxTime") || "0");

  const filtered = recipes.filter((recipe) => {
    const matchesQuery =
      !query ||
      [
        recipe.title,
        recipe.description,
        recipe.cuisine,
        recipe.country,
        recipe.category,
        recipe.tags.join(" "),
      ]
        .join(" ")
        .toLowerCase()
        .includes(query);

    const matchesCuisine = !cuisine || recipe.cuisine === cuisine;
    const matchesDiet = !diet || recipe.diet.includes(diet);
    const matchesDifficulty = !difficulty || recipe.difficulty === difficulty;
    const matchesTime = !maxTime || recipe.totalMinutes <= maxTime;

    return (
      matchesQuery &&
      matchesCuisine &&
      matchesDiet &&
      matchesDifficulty &&
      matchesTime
    );
  });

  return NextResponse.json({
    count: filtered.length,
    items: filtered,
  });
}
