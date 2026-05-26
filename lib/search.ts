import { indianDishArchive } from "@/data/indian-catalog";
import { recipes } from "@/data/recipes";
import type { IndianDishArchiveEntry, Recipe, SearchFilters } from "@/lib/types";

function tokenize(value: string) {
  return value
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter(Boolean);
}

export function deriveSearchFilters(query: string): SearchFilters {
  const normalized = query.toLowerCase();
  const filters: SearchFilters = {};

  const maxTimeMatch = normalized.match(/(?:under|within|less than)\s+(\d+)\s*(?:min|minute)/);
  if (maxTimeMatch) {
    filters.maxTime = Number(maxTimeMatch[1]);
  }

  const calorieMatch = normalized.match(/(?:under|less than)\s+(\d+)\s*cal/);
  if (calorieMatch) {
    filters.calories = Number(calorieMatch[1]);
  }

  const difficultyTerms = ["easy", "intermediate", "advanced"];
  const difficulty = difficultyTerms.find((term) => normalized.includes(term));
  if (difficulty) {
    filters.difficulty =
      difficulty.charAt(0).toUpperCase() +
      difficulty.slice(1) as SearchFilters["difficulty"];
  }

  const dietTerms = ["vegetarian", "vegan", "gluten-free", "dairy-free", "high-protein"];
  const diet = dietTerms.find((term) => normalized.includes(term));
  if (diet) {
    filters.diet = diet;
  }

  const cuisines = Array.from(new Set(recipes.map((recipe) => recipe.cuisine)));
  const cuisine = cuisines.find((item) => normalized.includes(item.toLowerCase()));
  if (cuisine) {
    filters.cuisine = cuisine;
  }

  return filters;
}

function recipeSearchScore(recipe: Recipe, query: string, filters: SearchFilters) {
  const tokens = tokenize(query);
  let score = 0;
  const searchable = [
    recipe.title,
    recipe.description,
    recipe.excerpt,
    recipe.cuisine,
    recipe.country,
    recipe.category,
    recipe.history,
    recipe.tags.join(" "),
    recipe.ingredients.map((ingredient) => ingredient.item).join(" "),
  ]
    .join(" ")
    .toLowerCase();

  for (const token of tokens) {
    if (searchable.includes(token)) {
      score += recipe.title.toLowerCase().includes(token) ? 10 : 4;
    }
  }

  if (filters.cuisine && recipe.cuisine !== filters.cuisine) {
    score -= 15;
  }

  if (filters.diet && !recipe.diet.includes(filters.diet)) {
    score -= 12;
  }

  if (filters.maxTime && recipe.totalMinutes > filters.maxTime) {
    score -= 8;
  }

  if (filters.calories && recipe.nutrition.calories > filters.calories) {
    score -= 8;
  }

  if (filters.difficulty && recipe.difficulty !== filters.difficulty) {
    score -= 5;
  }

  return score + recipe.trendingScore;
}

export function searchRecipes(query: string, explicitFilters?: SearchFilters) {
  const derived = deriveSearchFilters(query);
  const filters = { ...derived, ...explicitFilters };

  return recipes
    .map((recipe) => ({
      recipe,
      score: recipeSearchScore(recipe, query, filters),
    }))
    .filter((entry) => entry.score > 0)
    .sort((left, right) => right.score - left.score)
    .map((entry) => entry.recipe);
}

function indianArchiveSearchScore(entry: IndianDishArchiveEntry, query: string) {
  const tokens = tokenize(query);
  let score = 0;
  const searchable = [
    entry.title,
    entry.baseDish,
    entry.stateTitle,
    entry.region,
    entry.category,
    entry.angle,
    entry.description,
    "Indian",
    "India",
  ]
    .join(" ")
    .toLowerCase();

  for (const token of tokens) {
    if (searchable.includes(token)) {
      score += entry.title.toLowerCase().includes(token) ? 12 : 5;
      if (entry.baseDish.toLowerCase().includes(token)) {
        score += 5;
      }
      if (entry.stateTitle.toLowerCase().includes(token)) {
        score += 4;
      }
    }
  }

  if (/\bindia|indian\b/.test(query.toLowerCase())) {
    score += 8;
  }

  if (entry.status === "live") {
    score += 6;
  } else if (entry.status === "catalogued") {
    score += 3;
  }

  return score;
}

export function searchIndianArchive(query: string) {
  return indianDishArchive
    .map((entry) => ({
      entry,
      score: indianArchiveSearchScore(entry, query),
    }))
    .filter((item) => item.score > 0)
    .sort((left, right) => right.score - left.score)
    .map((item) => item.entry);
}
