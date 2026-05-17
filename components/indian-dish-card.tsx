import Link from "next/link";

import type { IndianDishCatalogItem } from "@/lib/types";

const statusLabel = {
  live: "Live detailed recipe",
  catalogued: "Catalogued for expansion",
  planned: "Planned for future rollout",
};

export function IndianDishCard({
  dish,
  stateTitle,
}: {
  dish: IndianDishCatalogItem;
  stateTitle: string;
}) {
  return (
    <article className="panel rounded-[2rem] p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs uppercase tracking-[0.22em]" style={{ color: "var(--accent)" }}>
          {dish.category}
        </p>
        <span
          className="rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.22em]"
          style={{ borderColor: "var(--border)", color: "var(--muted)" }}
        >
          {statusLabel[dish.status]}
        </span>
      </div>
      <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl">
        {dish.name}
      </h3>
      <p className="mt-4 text-sm leading-7" style={{ color: "var(--muted)" }}>
        {dish.description} This dish is part of the {stateTitle} coverage map inside
        Tejaswi Murali World Foods.
      </p>
      {dish.recipeSlug ? (
        <Link
          href={`/recipes/${dish.recipeSlug}`}
          className="mt-5 inline-flex rounded-full border px-4 py-3 text-sm"
          style={{ borderColor: "var(--border)" }}
        >
          Open full recipe page
        </Link>
      ) : null}
    </article>
  );
}
