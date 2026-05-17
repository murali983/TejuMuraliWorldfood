import type { Recipe } from "@/lib/types";

export function scoreRecipeQuality(recipe: Recipe) {
  let score = 0;

  if (recipe.description.length > 120) score += 10;
  if (recipe.ingredients.length >= 8) score += 12;
  if (recipe.steps.length >= 6) score += 12;
  if (recipe.cookingTips.length >= 3) score += 8;
  if (recipe.storageTips.length >= 2) score += 6;
  if (recipe.healthBenefits.length >= 3) score += 8;
  if (recipe.faqs.length >= 3) score += 8;
  if (recipe.history.length > 180) score += 12;
  if (recipe.internalLinks.length >= 2) score += 8;
  if (recipe.videoPlan.scenePrompts.length >= 4) score += 8;
  if (recipe.reviews.length >= 2) score += 8;

  return {
    score,
    approvedForAutoPublish: score >= 80,
  };
}
