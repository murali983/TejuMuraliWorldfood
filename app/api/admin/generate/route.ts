import { NextRequest, NextResponse } from "next/server";

import { buildRecipeGenerationPrompt, recipeGenerationTargets } from "@/lib/ai";

function isAuthorized(request: NextRequest) {
  const key = request.headers.get("x-admin-key");
  return Boolean(process.env.ADMIN_API_KEY && key === process.env.ADMIN_API_KEY);
}

export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  const targetCount = Math.min(Number(body.count || 50), 50);
  const targetCuisine = String(body.cuisine || recipeGenerationTargets()[0]);
  const prompt = buildRecipeGenerationPrompt(targetCuisine, targetCount);

  return NextResponse.json({
    mode: "draft-only-by-default",
    targetCount,
    targetCuisine,
    prompt,
    qualityPolicy: [
      "Generate drafts only unless human review or AUTO_PUBLISH_APPROVED is enabled.",
      "Reject output below the editorial depth threshold.",
      "Require unique descriptions, FAQs, and internal links before scheduling.",
    ],
    nextActions: [
      "Render feature image prompts",
      "Render short-form video prompts",
      "Queue translations",
      "Submit for SEO audit",
    ],
  });
}
