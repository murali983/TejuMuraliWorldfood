import Link from "next/link";

import type { IndianStateCuisine } from "@/lib/types";

const statusCopy = {
  live: "Live now",
  catalogued: "Catalogued",
  planned: "Planned",
};

export function IndiaStateCard({
  state,
  compact = false,
}: {
  state: IndianStateCuisine;
  compact?: boolean;
}) {
  const liveCount = state.dishes.filter((dish) => dish.status === "live").length;
  const highlightedDishes = compact ? state.dishes.slice(0, 3) : state.dishes.slice(0, 4);

  return (
    <Link
      href={`/india/${state.slug}`}
      className="panel rounded-[2rem] p-6 transition hover:-translate-y-1"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="eyebrow">{state.region}</p>
        <span
          className="rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.22em]"
          style={{ borderColor: "var(--border)", color: "var(--accent)" }}
        >
          {state.catalogTarget} dish target
        </span>
      </div>
      <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl">
        {state.title}
      </h3>
      <p className="mt-4 text-sm leading-7" style={{ color: "var(--muted)" }}>
        {state.description}
      </p>
      <div className="mt-5 grid gap-3 md:grid-cols-3">
        <div className="rounded-[1.25rem] border px-4 py-3" style={{ borderColor: "var(--border)" }}>
          <p className="text-xs uppercase tracking-[0.22em]" style={{ color: "var(--accent)" }}>
            Seeded dishes
          </p>
          <p className="mt-2 text-xl font-semibold">{state.dishes.length}</p>
        </div>
        <div className="rounded-[1.25rem] border px-4 py-3" style={{ borderColor: "var(--border)" }}>
          <p className="text-xs uppercase tracking-[0.22em]" style={{ color: "var(--accent)" }}>
            Live recipes
          </p>
          <p className="mt-2 text-xl font-semibold">{liveCount}</p>
        </div>
        <div className="rounded-[1.25rem] border px-4 py-3" style={{ borderColor: "var(--border)" }}>
          <p className="text-xs uppercase tracking-[0.22em]" style={{ color: "var(--accent)" }}>
            Coverage
          </p>
          <p className="mt-2 text-xl font-semibold">
            {Math.round((state.dishes.length / state.catalogTarget) * 100)}%
          </p>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {state.signatureNotes.map((note) => (
          <span
            key={note}
            className="rounded-full border px-3 py-2 text-xs"
            style={{ borderColor: "var(--border)", color: "var(--muted)" }}
          >
            {note}
          </span>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {highlightedDishes.map((dish) => (
          <span
            key={dish.name}
            className="rounded-full px-3 py-2 text-xs"
            style={{ background: "rgba(255,255,255,0.08)", color: "var(--text)" }}
          >
            {dish.name} · {statusCopy[dish.status]}
          </span>
        ))}
      </div>
    </Link>
  );
}
