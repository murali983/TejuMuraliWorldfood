import Link from "next/link";

import type { IndianDishArchiveEntry } from "@/lib/types";

const archiveStatusLabel = {
  live: "Live detailed recipe",
  catalogued: "Visible archive entry",
  planned: "Planned expansion entry",
};

export function IndianArchiveCard({
  entry,
}: {
  entry: IndianDishArchiveEntry;
}) {
  return (
    <article className="panel rounded-[2rem] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.22em]" style={{ color: "var(--accent)" }}>
          <span>{entry.stateTitle}</span>
          <span>{entry.category}</span>
        </div>
        <span
          className="rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.2em]"
          style={{ borderColor: "var(--border)", color: "var(--muted)" }}
        >
          {archiveStatusLabel[entry.status]}
        </span>
      </div>
      <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl">
        {entry.title}
      </h3>
      <p className="mt-2 text-xs uppercase tracking-[0.22em]" style={{ color: "var(--accent)" }}>
        Base dish: {entry.baseDish}
      </p>
      <p className="mt-4 text-sm leading-7" style={{ color: "var(--muted)" }}>
        {entry.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={entry.recipeSlug ? `/recipes/${entry.recipeSlug}` : `/india/${entry.stateSlug}`}
          className="rounded-full border px-4 py-3 text-sm font-semibold transition hover:-translate-y-0.5"
          style={{ borderColor: "var(--border)" }}
        >
          {entry.recipeSlug ? "Open full recipe" : "Open state hub"}
        </Link>
        <Link
          href={`/search?q=${encodeURIComponent(entry.baseDish)}`}
          className="rounded-full border px-4 py-3 text-sm transition hover:-translate-y-0.5"
          style={{ borderColor: "var(--border)" }}
        >
          Search similar dishes
        </Link>
      </div>
    </article>
  );
}
