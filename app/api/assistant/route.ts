import { NextRequest, NextResponse } from "next/server";

import { answerCookingQuestion, getRecipeBySlug } from "@/lib/ai";
import { checkRateLimit } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") || "assistant-local";
  const rate = checkRateLimit(`assistant:${ip}`, { limit: 10, windowMs: 60_000 });

  if (!rate.allowed) {
    return NextResponse.json(
      { answer: "The cooking assistant is receiving too many requests. Please try again shortly." },
      { status: 429 }
    );
  }

  const body = await request.json();
  const recipe = getRecipeBySlug(String(body.recipeSlug || ""));
  const question = String(body.question || "").trim();

  if (!recipe || !question) {
    return NextResponse.json(
      { answer: "Please provide a valid recipe and a question." },
      { status: 400 }
    );
  }

  const answer = await answerCookingQuestion(recipe, question);
  return NextResponse.json({ answer });
}
