const siteUrl =
  process.env.SITE_URL ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  "http://localhost:3000";

const recipeSlug = process.env.RECIPE_SLUG || "";

if (!recipeSlug) {
  console.error("Set RECIPE_SLUG before running the social publish helper.");
  process.exit(1);
}

const response = await fetch(`${siteUrl}/api/recipes?q=${encodeURIComponent(recipeSlug)}`);
const payload = await response.json();

console.log("Suggested social publishing workflow:");
console.log(
  JSON.stringify(
    {
      platformSequence: ["Instagram Reels", "YouTube Shorts", "Pinterest Pin", "Facebook Page"],
      localeSequence: ["en", "hi", "te", "es"],
      sourceData: payload,
      note: "Replace this helper with real Meta, YouTube, and Pinterest API posting once credentials are connected.",
    },
    null,
    2
  )
);
