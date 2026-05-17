"use client";

import { useState } from "react";

type RecipeActionsProps = {
  title: string;
  slug: string;
  ingredients: string[];
};

export function RecipeActions({
  title,
  slug,
  ingredients,
}: RecipeActionsProps) {
  const [message, setMessage] = useState("");

  function saveFavorite() {
    const raw = localStorage.getItem("tmwf-favorites");
    const current = raw ? (JSON.parse(raw) as string[]) : [];
    const next = Array.from(new Set([...current, slug]));
    localStorage.setItem("tmwf-favorites", JSON.stringify(next));
    setMessage("Saved to favorites.");
  }

  function addShoppingList() {
    const raw = localStorage.getItem("tmwf-shopping-list");
    const current = raw ? (JSON.parse(raw) as string[]) : [];
    const next = Array.from(new Set([...current, ...ingredients]));
    localStorage.setItem("tmwf-shopping-list", JSON.stringify(next));
    setMessage("Ingredients added to your shopping list.");
  }

  async function shareRecipe() {
    const url = window.location.href;
    if (navigator.share) {
      await navigator.share({
        title,
        text: `Cook ${title} with Tejaswi Murali World Foods`,
        url,
      });
      return;
    }
    await navigator.clipboard.writeText(url);
    setMessage("Recipe link copied.");
  }

  return (
    <div className="panel rounded-[1.75rem] p-5">
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={saveFavorite}
          className="rounded-full border px-4 py-2 text-sm transition hover:-translate-y-0.5"
          style={{ borderColor: "var(--border)" }}
        >
          Save favorite
        </button>
        <button
          type="button"
          onClick={addShoppingList}
          className="rounded-full border px-4 py-2 text-sm transition hover:-translate-y-0.5"
          style={{ borderColor: "var(--border)" }}
        >
          Add shopping list
        </button>
        <button
          type="button"
          onClick={() => window.print()}
          className="rounded-full border px-4 py-2 text-sm transition hover:-translate-y-0.5"
          style={{ borderColor: "var(--border)" }}
        >
          Print card
        </button>
        <button
          type="button"
          onClick={shareRecipe}
          className="rounded-full px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          style={{ background: "var(--accent)" }}
        >
          Share
        </button>
      </div>
      {message ? (
        <p className="mt-3 text-sm" style={{ color: "var(--muted)" }}>
          {message}
        </p>
      ) : null}
    </div>
  );
}
