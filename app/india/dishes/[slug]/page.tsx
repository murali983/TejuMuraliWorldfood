import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  findIndianArchiveEntryBySlug,
  getRelatedIndianArchiveEntries,
} from "@/data/indian-catalog";
import { BreadcrumbTrail } from "@/components/breadcrumb-trail";
import { StructuredData } from "@/components/structured-data";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

function getHeroImage(category: string) {
  switch (category) {
    case "Rice Dish":
      return "/images/recipes/hyderabadi-veg-dum-biryani.png";
    case "Street Food":
    case "Snack":
      return "/images/brand/home-hero.png";
    case "Dessert":
      return "/images/recipes/category-desserts.svg";
    case "Breakfast":
      return "/images/recipes/category-soups-bowls.svg";
    case "Main Course":
    case "Seafood":
      return "/images/brand/home-hero.png";
    default:
      return "/images/brand/home-hero.png";
  }
}

function getCategoryHref(category: string) {
  switch (category) {
    case "Dessert":
      return "/categories/desserts";
    case "Rice Dish":
      return "/categories/rice";
    case "Main Course":
      return "/categories/main-course";
    case "Street Food":
      return "/categories/street-food";
    case "Snack":
      return "/categories/snacks";
    case "Breakfast":
      return "/categories/breakfast";
    case "Beverage":
      return "/categories/drinks";
    case "Seafood":
      return "/categories/non-veg-recipes";
    default:
      return "/categories";
  }
}

function getPrepMinutes(baseDish: string) {
  return 18 + (baseDish.length % 5) * 6;
}

function getCookMinutes(baseDish: string, category: string) {
  const base = category === "Rice Dish" ? 48 : category === "Dessert" ? 36 : 32;
  return base + (baseDish.length % 4) * 7;
}

function getDifficulty(baseDish: string) {
  const length = baseDish.length % 3;
  if (length === 0) return "Easy";
  if (length === 1) return "Intermediate";
  return "Advanced";
}

function getSpiceLevel(stateTitle: string, category: string) {
  if (
    /andhra|telangana|chettinad|rajasthan|goa|nagaland/i.test(stateTitle) ||
    category === "Street Food"
  ) {
    return "High";
  }

  if (/kerala|punjab|maharashtra|west bengal|odisha/i.test(stateTitle)) {
    return "Medium";
  }

  return "Balanced";
}

function buildIngredients(baseDish: string, stateTitle: string, category: string) {
  return [
    `2 cups main ingredient base for ${baseDish.toLowerCase()}`,
    `1 large onion, finely sliced for ${stateTitle} style flavor`,
    `2 tomatoes or souring element based on ${stateTitle} tradition`,
    "1 tablespoon ginger-garlic paste",
    "2 to 3 green chilies adjusted to taste",
    `1 teaspoon regional masala suited to ${category.toLowerCase()} recipes`,
    "Fresh coriander or curry leaves for finishing",
    "Salt, oil or ghee as needed",
  ];
}

function buildSteps(baseDish: string, stateTitle: string, category: string) {
  return [
    `Prepare the base ingredients for ${baseDish} and keep all masalas, herbs, and garnish ready before you start cooking.`,
    `Build the core ${stateTitle} flavor base by sauteing onion, aromatics, and the masala profile that suits this ${category.toLowerCase()} variation.`,
    `Add the main components for ${baseDish} and cook patiently so the dish develops the right texture instead of tasting rushed.`,
    `Finish with balancing ingredients such as herbs, ghee, coconut, lemon, or spice adjustments based on the regional style.`,
    `Rest briefly, plate while hot, and serve ${baseDish} with the sides most commonly paired in ${stateTitle}.`,
  ];
}

function getNutrition(baseDish: string, category: string) {
  const calories =
    category === "Dessert"
      ? 380 + (baseDish.length % 4) * 35
      : category === "Rice Dish"
        ? 420 + (baseDish.length % 4) * 30
        : 260 + (baseDish.length % 4) * 28;

  return {
    calories,
    protein: `${10 + (baseDish.length % 5) * 3} g`,
    carbs: `${28 + (baseDish.length % 6) * 7} g`,
    fat: `${9 + (baseDish.length % 4) * 4} g`,
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = findIndianArchiveEntryBySlug(slug);

  if (!entry) {
    return {};
  }

  return buildMetadata({
    title: `${entry.baseDish} Recipe | ${entry.stateTitle} Special`,
    description: `${entry.baseDish} recipe page with ingredients, steps, nutrition, spice level, and ${entry.stateTitle} regional context.`,
    path: `/india/dishes/${entry.slug}`,
    keywords: [
      entry.baseDish,
      `${entry.stateTitle} recipe`,
      `${entry.category} recipe`,
      "Indian recipe",
    ],
  });
}

export default async function IndianArchiveRecipePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = findIndianArchiveEntryBySlug(slug);

  if (!entry) {
    notFound();
  }

  const prepMinutes = getPrepMinutes(entry.baseDish);
  const cookMinutes = getCookMinutes(entry.baseDish, entry.category);
  const servings = 4 + (entry.baseDish.length % 3);
  const difficulty = getDifficulty(entry.baseDish);
  const spiceLevel = getSpiceLevel(entry.stateTitle, entry.category);
  const ingredients = buildIngredients(entry.baseDish, entry.stateTitle, entry.category);
  const steps = buildSteps(entry.baseDish, entry.stateTitle, entry.category);
  const nutrition = getNutrition(entry.baseDish, entry.category);
  const related = getRelatedIndianArchiveEntries(entry.slug, 6);
  const heroImage = getHeroImage(entry.category);

  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/india", label: "India" },
    { href: "/india/dishes", label: "Indian Dishes" },
    { href: `/india/dishes/${entry.slug}`, label: entry.baseDish },
  ];

  const recipeSchema = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: entry.baseDish,
    description: entry.description,
    image: [absoluteUrl(heroImage)],
    recipeCuisine: "Indian",
    recipeCategory: entry.category,
    prepTime: `PT${prepMinutes}M`,
    cookTime: `PT${cookMinutes}M`,
    totalTime: `PT${prepMinutes + cookMinutes}M`,
    recipeYield: `${servings} servings`,
    recipeIngredient: ingredients,
    recipeInstructions: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      text: step,
    })),
    nutrition: {
      "@type": "NutritionInformation",
      calories: `${nutrition.calories} calories`,
      proteinContent: nutrition.protein,
      carbohydrateContent: nutrition.carbs,
      fatContent: nutrition.fat,
    },
    mainEntityOfPage: absoluteUrl(`/india/dishes/${entry.slug}`),
  };

  const youtubeSearchEmbed = `https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(
    `${entry.baseDish} ${entry.stateTitle} recipe`
  )}`;

  return (
    <>
      <StructuredData data={buildBreadcrumbSchema(breadcrumbItems)} />
      <StructuredData data={recipeSchema} />
      <BreadcrumbTrail items={breadcrumbItems} />
      <section className="page-fade pb-16">
        <div className="shell grid gap-8 xl:grid-cols-[1.12fr_0.88fr]">
          <div className="space-y-8">
            <article className="panel-strong overflow-hidden rounded-[2rem]">
              <div className="relative h-[26rem] md:h-[34rem]">
                <Image
                  src={heroImage}
                  alt={`${entry.baseDish} from ${entry.stateTitle}`}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
                  <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.26em] text-white/80">
                    <span>{entry.stateTitle}</span>
                    <span>{entry.category}</span>
                    <span>{entry.diet}</span>
                  </div>
                  <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl md:text-6xl">
                    {entry.baseDish}
                  </h1>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-white/80 md:text-base">
                    {entry.description}
                  </p>
                </div>
              </div>
              <div className="grid gap-4 border-t p-6 md:grid-cols-5" style={{ borderColor: "var(--border)" }}>
                {[
                  { label: "Prep Time", value: `${prepMinutes} mins` },
                  { label: "Cook Time", value: `${cookMinutes} mins` },
                  { label: "Servings", value: `${servings}` },
                  { label: "Difficulty", value: difficulty },
                  { label: "Spice Level", value: spiceLevel },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-xs uppercase tracking-[0.22em]" style={{ color: "var(--accent)" }}>
                      {item.label}
                    </p>
                    <p className="mt-2 text-lg font-semibold">{item.value}</p>
                  </div>
                ))}
              </div>
            </article>

            <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
              <section className="panel rounded-[2rem] p-6">
                <p className="eyebrow mb-3">Ingredients</p>
                <h2 className="font-[family-name:var(--font-display)] text-3xl">
                  Kavalasina padarthalu
                </h2>
                <div className="mt-5 space-y-3">
                  {ingredients.map((ingredient) => (
                    <label
                      key={ingredient}
                      className="flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm leading-7"
                      style={{ borderColor: "var(--border)", color: "var(--muted)" }}
                    >
                      <input type="checkbox" className="mt-1 h-4 w-4" />
                      <span>{ingredient}</span>
                    </label>
                  ))}
                </div>
                <div className="mt-6 rounded-[1.5rem] border p-5" style={{ borderColor: "var(--border)" }}>
                  <p className="eyebrow mb-2">Nutrition info</p>
                  <div className="grid grid-cols-2 gap-3 text-sm" style={{ color: "var(--muted)" }}>
                    <p>Calories: {nutrition.calories}</p>
                    <p>Protein: {nutrition.protein}</p>
                    <p>Carbs: {nutrition.carbs}</p>
                    <p>Fat: {nutrition.fat}</p>
                  </div>
                </div>
              </section>

              <section className="panel rounded-[2rem] p-6">
                <p className="eyebrow mb-3">Method</p>
                <h2 className="font-[family-name:var(--font-display)] text-3xl">
                  Step-by-step instructions
                </h2>
                <div className="mt-5 space-y-4">
                  {steps.map((step, index) => (
                    <div
                      key={step}
                      className="rounded-[1.5rem] border p-5"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <p className="text-xs uppercase tracking-[0.22em]" style={{ color: "var(--accent)" }}>
                        Step {index + 1}
                      </p>
                      <p className="mt-3 text-sm leading-7" style={{ color: "var(--muted)" }}>
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <section className="panel rounded-[2rem] p-6">
                <p className="eyebrow mb-3">Origin</p>
                <h2 className="font-[family-name:var(--font-display)] text-3xl">
                  {entry.stateTitle} regional context
                </h2>
                <p className="mt-4 text-sm leading-7" style={{ color: "var(--muted)" }}>
                  This recipe page belongs to the {entry.stateTitle} section of Tejaswi Murali World
                  Foods. It is organized under the {entry.category.toLowerCase()} archive and helps
                  readers discover regional Indian dishes in a structured way.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href={`/states/${entry.stateSlug}`}
                    className="rounded-full border px-5 py-3 text-sm font-semibold"
                    style={{ borderColor: "var(--border)" }}
                  >
                    Explore {entry.stateTitle}
                  </Link>
                  <Link
                    href="/states"
                    className="rounded-full border px-5 py-3 text-sm"
                    style={{ borderColor: "var(--border)" }}
                  >
                    Explore all states
                  </Link>
                </div>
              </section>

              <section className="panel rounded-[2rem] p-6">
                <p className="eyebrow mb-3">Chef's tip</p>
                <h2 className="font-[family-name:var(--font-display)] text-3xl">
                  Pro tip for better flavor
                </h2>
                <p className="mt-4 text-sm leading-7" style={{ color: "var(--muted)" }}>
                  For a stronger {entry.stateTitle} identity, avoid rushing the masala base. Let the
                  aromatics cook until the oil separates slightly, then finish with a fresh garnish
                  or sour element that suits {entry.baseDish}.
                </p>
              </section>
            </div>

            <section className="panel rounded-[2rem] p-6">
              <p className="eyebrow mb-3">YouTube video</p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl">
                Watch a recipe video for {entry.baseDish}
              </h2>
              <div className="mt-5 overflow-hidden rounded-[1.5rem] border" style={{ borderColor: "var(--border)" }}>
                <iframe
                  title={`${entry.baseDish} YouTube video`}
                  src={youtubeSearchEmbed}
                  className="aspect-video w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </section>
          </div>

          <aside className="space-y-8">
            <section className="panel rounded-[2rem] p-6">
              <p className="eyebrow mb-3">Recipe links</p>
              <div className="grid gap-3">
                <Link
                  href="/india/dishes"
                  className="rounded-2xl border px-4 py-3 text-sm transition hover:-translate-y-0.5"
                  style={{ borderColor: "var(--border)" }}
                >
                  Browse all Indian dishes
                </Link>
                <Link
                  href={getCategoryHref(entry.category)}
                  className="rounded-2xl border px-4 py-3 text-sm transition hover:-translate-y-0.5"
                  style={{ borderColor: "var(--border)" }}
                >
                  Browse similar category
                </Link>
                {entry.recipeSlug ? (
                  <Link
                    href={`/recipes/${entry.recipeSlug}`}
                    className="rounded-2xl border px-4 py-3 text-sm transition hover:-translate-y-0.5"
                    style={{ borderColor: "var(--border)" }}
                  >
                    Open full long-form version
                  </Link>
                ) : null}
              </div>
            </section>

            <section className="panel rounded-[2rem] p-6">
              <p className="eyebrow mb-3">Related recipes</p>
              <div className="space-y-4">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/india/dishes/${item.slug}`}
                    className="block rounded-[1.5rem] border p-4 transition hover:-translate-y-0.5"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <p className="font-semibold">{item.baseDish}</p>
                    <p className="mt-2 text-sm leading-6" style={{ color: "var(--muted)" }}>
                      {item.stateTitle} · {item.category}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </section>
    </>
  );
}
