import { recipes } from "@/data/recipes";
import { searchRecipes } from "@/lib/search";
import type { Recipe } from "@/lib/types";

type Message = {
  role: "system" | "user";
  content: string;
};

async function runOpenAi(messages: Message[]) {
  if (!process.env.OPENAI_API_KEY) {
    return null;
  }

  const response = await fetch(
    `${process.env.OPENAI_API_BASE_URL || "https://api.openai.com/v1"}/chat/completions`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
        temperature: 0.7,
        messages,
      }),
    }
  );

  if (!response.ok) {
    return null;
  }

  const payload = await response.json();
  return payload.choices?.[0]?.message?.content?.trim() || null;
}

export async function buildAiSearchSummary(query: string) {
  const matches = searchRecipes(query).slice(0, 4);

  if (!matches.length) {
    return {
      summary:
        "No direct recipe match was found yet. Try searching by cuisine, a primary ingredient, a target calorie range, or a time limit.",
      matches: [],
    };
  }

  const fallbackSummary = `Top matches for "${query}" include ${matches
    .map((recipe) => recipe.title)
    .join(", ")}. They were selected based on cuisine fit, ingredient relevance, and cooking-time alignment.`;

  const aiSummary =
    (await runOpenAi([
      {
        role: "system",
        content:
          "You are an editorial food search assistant. Summarize search results in 2 concise sentences with a helpful human tone.",
      },
      {
        role: "user",
        content: JSON.stringify({
          query,
          recipes: matches.map((recipe) => ({
            title: recipe.title,
            cuisine: recipe.cuisine,
            difficulty: recipe.difficulty,
            totalMinutes: recipe.totalMinutes,
            highlights: recipe.cookingTips.slice(0, 2),
          })),
        }),
      },
    ])) || fallbackSummary;

  return {
    summary: aiSummary,
    matches,
  };
}

export async function answerCookingQuestion(recipe: Recipe, question: string) {
  const fallback = `For ${recipe.title}, focus on ${recipe.steps[0]?.detail.toLowerCase()} Also remember: ${recipe.cookingTips[0]}.`;

  const aiAnswer = await runOpenAi([
    {
      role: "system",
      content:
        "You are a practical cooking assistant. Answer clearly in under 120 words, using only the recipe context provided.",
    },
    {
      role: "user",
      content: JSON.stringify({
        recipe: {
          title: recipe.title,
          ingredients: recipe.ingredients,
          steps: recipe.steps,
          cookingTips: recipe.cookingTips,
          storageTips: recipe.storageTips,
        },
        question,
      }),
    },
  ]);

  return aiAnswer || fallback;
}

export function buildRecipeGenerationPrompt(cuisine: string, count: number) {
  return {
    system:
      "Generate original food blog recipe briefs that feel expert, practical, and non-repetitive. Include cultural context, cooking logic, nutrition estimates, FAQs, and internal linking ideas.",
    user: `Create ${count} recipe briefs for ${cuisine} cuisine. Each brief must be helpful, AdSense-safe, and strong enough for long-form editorial expansion.`,
  };
}

export function buildImagePrompt(recipe: Recipe) {
  return `Luxury food magazine photography of ${recipe.title}, ${recipe.cuisine} cuisine, editorial natural light, detailed texture, elegant plating, premium ceramic tableware, shallow depth of field, no text, no watermark, realistic food styling.`;
}

export function buildVideoPrompt(recipe: Recipe) {
  return `Create a short-form vertical cooking video plan for ${recipe.title} with an irresistible 3-second hook, fast step transitions, ingredient callouts, and a warm expert voiceover.`;
}

export function buildTranslationPrompt(recipe: Recipe, language: string) {
  return `Translate the recipe "${recipe.title}" into ${language} while preserving ingredient measurements, culinary nuance, and SEO-friendly readability.`;
}

export function recipeGenerationTargets() {
  return [
    "Indian",
    "Japanese",
    "Italian",
    "Mexican",
    "Mediterranean",
    "Middle Eastern",
    "French",
    "Korean",
  ];
}

export function getRecipeBySlug(slug: string) {
  return recipes.find((recipe) => recipe.slug === slug) || null;
}
