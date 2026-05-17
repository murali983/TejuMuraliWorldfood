import { NextRequest, NextResponse } from "next/server";

import { getRecipeBySlug, buildTranslationPrompt } from "@/lib/ai";

function isAuthorized(request: NextRequest) {
  const key = request.headers.get("x-admin-key");
  return Boolean(process.env.ADMIN_API_KEY && key === process.env.ADMIN_API_KEY);
}

export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const recipe = getRecipeBySlug(String(body.slug || ""));
  const languages = Array.isArray(body.languages) ? body.languages : ["hi", "te", "es"];

  if (!recipe) {
    return NextResponse.json({ message: "Recipe not found." }, { status: 404 });
  }

  return NextResponse.json({
    recipe: recipe.title,
    jobs: languages.map((language: string) => ({
      language,
      prompt: buildTranslationPrompt(recipe, language),
      status: "queued",
    })),
  });
}
