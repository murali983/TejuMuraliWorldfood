import Image from "next/image";
import Link from "next/link";

import { recipes } from "@/data/recipes";
import { AdSlot } from "@/components/ad-slot";
import { CookingAssistant } from "@/components/cooking-assistant";
import { RecipeActions } from "@/components/recipe-actions";
import type { Recipe } from "@/lib/types";
import { absoluteUrl, formatDate, formatMinutes } from "@/lib/utils";

export function RecipeDetail({ recipe }: { recipe: Recipe }) {
  const related = recipes.filter((item) => recipe.relatedSlugs.includes(item.slug));

  return (
    <section className="page-fade pb-16">
      <div className="shell grid gap-8 xl:grid-cols-[1.12fr_0.88fr]">
        <div className="space-y-8">
          <article className="panel-strong overflow-hidden rounded-[2rem]">
            <div className="relative h-[26rem] md:h-[34rem]">
              <Image
                src={recipe.heroImage}
                alt={recipe.imageAlt}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
                <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.28em] text-white/80">
                  <span>{recipe.cuisine}</span>
                  <span>{recipe.country}</span>
                  <span>{recipe.category}</span>
                </div>
                <h1 className="mt-4 max-w-4xl font-[family-name:var(--font-display)] text-4xl md:text-6xl">
                  {recipe.title}
                </h1>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/80 md:text-base">
                  {recipe.description}
                </p>
              </div>
            </div>
            <div className="grid gap-4 border-t p-6 md:grid-cols-4" style={{ borderColor: "var(--border)" }}>
              {[
                { label: "Prep time", value: formatMinutes(recipe.prepMinutes) },
                { label: "Cook time", value: formatMinutes(recipe.cookMinutes) },
                { label: "Total time", value: formatMinutes(recipe.totalMinutes) },
                { label: "Servings", value: `${recipe.servings}` },
                { label: "Calories", value: `${recipe.nutrition.calories}` },
                { label: "Difficulty", value: recipe.difficulty },
                { label: "Published", value: formatDate(recipe.publishedAt) },
                { label: "Updated", value: formatDate(recipe.updatedAt) },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs uppercase tracking-[0.26em]" style={{ color: "var(--accent)" }}>
                    {item.label}
                  </p>
                  <p className="mt-2 text-lg font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </article>

          <RecipeActions
            title={recipe.title}
            slug={recipe.slug}
            ingredients={recipe.ingredients.map((ingredient) =>
              [ingredient.amount, ingredient.item].join(" ")
            )}
          />

          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <section className="panel rounded-[2rem] p-6">
              <p className="eyebrow mb-3">Ingredients</p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl">
                What you need
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-7" style={{ color: "var(--muted)" }}>
                {recipe.ingredients.map((ingredient) => (
                  <li
                    key={`${ingredient.amount}-${ingredient.item}`}
                    className="rounded-2xl border px-4 py-3"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <span className="font-semibold" style={{ color: "var(--foreground)" }}>
                      {ingredient.amount}
                    </span>{" "}
                    {ingredient.item}
                    {ingredient.notes ? ` (${ingredient.notes})` : ""}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-[1.5rem] border p-5" style={{ borderColor: "var(--border)" }}>
                <p className="eyebrow mb-2">Nutrition per serving</p>
                <div className="grid grid-cols-2 gap-3 text-sm" style={{ color: "var(--muted)" }}>
                  <p>Protein: {recipe.nutrition.protein}</p>
                  <p>Carbs: {recipe.nutrition.carbs}</p>
                  <p>Fat: {recipe.nutrition.fat}</p>
                  <p>Fiber: {recipe.nutrition.fiber}</p>
                  <p>Sugar: {recipe.nutrition.sugar}</p>
                  <p>Sodium: {recipe.nutrition.sodium}</p>
                </div>
              </div>
            </section>

            <section className="panel rounded-[2rem] p-6">
              <p className="eyebrow mb-3">Method</p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl">
                Step-by-step instructions
              </h2>
              <div className="mt-5 space-y-4">
                {recipe.steps.map((step, index) => (
                  <div
                    key={step.title}
                    className="rounded-[1.5rem] border p-5"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <p className="text-xs uppercase tracking-[0.24em]" style={{ color: "var(--accent)" }}>
                      Step {index + 1}
                    </p>
                    <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7" style={{ color: "var(--muted)" }}>
                      {step.detail}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <AdSlot label="Inline recipe ad or sponsored ingredient spotlight" />

          <div className="grid gap-8 lg:grid-cols-2">
            <section className="panel rounded-[2rem] p-6">
              <p className="eyebrow mb-3">Kitchen Guidance</p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl">
                Cooking and storage tips
              </h2>
              <div className="mt-5 grid gap-5">
                <div>
                  <h3 className="font-semibold">Cooking tips</h3>
                  <ul className="mt-3 space-y-3 text-sm leading-7" style={{ color: "var(--muted)" }}>
                    {recipe.cookingTips.map((tip) => (
                      <li key={tip}>{tip}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Storage tips</h3>
                  <ul className="mt-3 space-y-3 text-sm leading-7" style={{ color: "var(--muted)" }}>
                    {recipe.storageTips.map((tip) => (
                      <li key={tip}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section className="panel rounded-[2rem] p-6">
              <p className="eyebrow mb-3">Context And Benefits</p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl">
                Why this recipe matters
              </h2>
              <p className="mt-4 text-sm leading-7" style={{ color: "var(--muted)" }}>
                {recipe.history}
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-7" style={{ color: "var(--muted)" }}>
                {recipe.healthBenefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </section>
          </div>

          <section className="panel rounded-[2rem] p-6">
            <p className="eyebrow mb-3">Short-Form Video Blueprint</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl">
              {recipe.videoPlan.title}
            </h2>
            <p className="mt-4 text-sm leading-7" style={{ color: "var(--muted)" }}>
              {recipe.videoPlan.hook}
            </p>
            <div className="mt-5 grid gap-6 lg:grid-cols-2">
              <div>
                <h3 className="font-semibold">AI voiceover cues</h3>
                <ul className="mt-3 space-y-3 text-sm leading-7" style={{ color: "var(--muted)" }}>
                  {recipe.videoPlan.voiceover.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Shot prompts</h3>
                <ul className="mt-3 space-y-3 text-sm leading-7" style={{ color: "var(--muted)" }}>
                  {recipe.videoPlan.scenePrompts.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="panel rounded-[2rem] p-6">
            <p className="eyebrow mb-3">FAQ</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl">
              Common cooking questions
            </h2>
            <div className="mt-5 space-y-4">
              {recipe.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="rounded-[1.5rem] border px-5 py-4"
                  style={{ borderColor: "var(--border)" }}
                >
                  <summary className="cursor-pointer font-semibold">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm leading-7" style={{ color: "var(--muted)" }}>
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-8">
          <section className="panel rounded-[2rem] p-6">
            <p className="eyebrow mb-3">Author</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl">
              {recipe.author.name}
            </h2>
            <p className="mt-3 text-sm leading-7" style={{ color: "var(--muted)" }}>
              {recipe.author.bio}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {recipe.author.specialties.map((specialty) => (
                <span
                  key={specialty}
                  className="rounded-full border px-3 py-2 text-xs uppercase tracking-[0.2em]"
                  style={{ borderColor: "var(--border)" }}
                >
                  {specialty}
                </span>
              ))}
            </div>
            <Link
              href="/author/tejaswi-murali"
              className="mt-5 inline-flex rounded-full px-5 py-3 text-sm font-semibold text-white"
              style={{ background: "var(--accent)" }}
            >
              View author profile
            </Link>
          </section>

          <CookingAssistant recipeSlug={recipe.slug} />

          <section className="panel rounded-[2rem] p-6">
            <p className="eyebrow mb-3">Social Sharing</p>
            <h2 className="font-[family-name:var(--font-display)] text-2xl">
              Share this recipe
            </h2>
            <div className="mt-4 grid gap-3">
              {[
                {
                  label: "Share on Facebook",
                  href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    absoluteUrl(`/recipes/${recipe.slug}`)
                  )}`,
                },
                {
                  label: "Share on Pinterest",
                  href: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
                    absoluteUrl(`/recipes/${recipe.slug}`)
                  )}&description=${encodeURIComponent(recipe.title)}`,
                },
                {
                  label: "Share on X",
                  href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    recipe.title
                  )}&url=${encodeURIComponent(absoluteUrl(`/recipes/${recipe.slug}`))}`,
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border px-4 py-3 text-sm transition hover:-translate-y-0.5"
                  style={{ borderColor: "var(--border)" }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </section>

          <section className="panel rounded-[2rem] p-6">
            <p className="eyebrow mb-3">Reader Reviews</p>
            <div className="space-y-4">
              {recipe.reviews.map((review) => (
                <div
                  key={review.name}
                  className="rounded-[1.5rem] border p-4"
                  style={{ borderColor: "var(--border)" }}
                >
                  <p className="font-semibold">{review.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em]" style={{ color: "var(--accent)" }}>
                    {review.rating}/5 rating
                  </p>
                  <p className="mt-3 text-sm leading-7" style={{ color: "var(--muted)" }}>
                    {review.quote}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <AdSlot label="Sidebar AdSense or premium sponsor placement" />

          <section className="panel rounded-[2rem] p-6">
            <p className="eyebrow mb-3">Related Recipes</p>
            <div className="space-y-4">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/recipes/${item.slug}`}
                  className="block rounded-[1.5rem] border p-4 transition hover:-translate-y-0.5"
                  style={{ borderColor: "var(--border)" }}
                >
                  <p className="font-semibold">{item.title}</p>
                  <p className="mt-2 text-sm leading-6" style={{ color: "var(--muted)" }}>
                    {item.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          <section className="panel rounded-[2rem] p-6">
            <p className="eyebrow mb-3">Internal Links</p>
            <div className="grid gap-3">
              {recipe.internalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl border px-4 py-3 text-sm transition hover:-translate-y-0.5"
                  style={{ borderColor: "var(--border)" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </section>
  );
}
