import Image from "next/image";
import Link from "next/link";

import type { Recipe } from "@/lib/types";
import { formatDate, formatMinutes } from "@/lib/utils";

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <article className="panel overflow-hidden rounded-[2rem] transition duration-300 hover:-translate-y-1">
      <Link href={`/recipes/${recipe.slug}`} className="block">
        <div className="relative h-72 overflow-hidden">
          <Image
            src={recipe.heroImage}
            alt={recipe.imageAlt}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
            className="object-cover transition duration-500 hover:scale-105"
          />
        </div>
      </Link>
      <div className="space-y-4 p-6">
        <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.22em]" style={{ color: "var(--accent)" }}>
          <span>{recipe.cuisine}</span>
          <span>{recipe.category}</span>
        </div>
        <div>
          <Link href={`/recipes/${recipe.slug}`}>
            <h3 className="font-[family-name:var(--font-display)] text-2xl transition hover:opacity-80">
              {recipe.title}
            </h3>
          </Link>
          <p className="mt-3 text-sm leading-7" style={{ color: "var(--muted)" }}>
            {recipe.excerpt}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm" style={{ color: "var(--muted)" }}>
          <p>Total time: {formatMinutes(recipe.totalMinutes)}</p>
          <p>Difficulty: {recipe.difficulty}</p>
          <p>Calories: {recipe.nutrition.calories}</p>
          <p>Updated: {formatDate(recipe.updatedAt)}</p>
        </div>
      </div>
    </article>
  );
}
