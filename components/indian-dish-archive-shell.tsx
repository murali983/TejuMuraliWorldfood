"use client";

import { useDeferredValue, useState } from "react";

import { IndianArchiveCard } from "@/components/indian-archive-card";
import type { IndianDishArchiveEntry } from "@/lib/types";

type IndianDishArchiveShellProps = {
  entries: IndianDishArchiveEntry[];
  states: string[];
  categories: string[];
};

const PAGE_SIZE = 60;

export function IndianDishArchiveShell({
  entries,
  states,
  categories,
}: IndianDishArchiveShellProps) {
  const [query, setQuery] = useState("");
  const [selectedState, setSelectedState] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const deferredQuery = useDeferredValue(query.toLowerCase());

  const filteredEntries = entries.filter((entry) => {
    const matchesQuery =
      !deferredQuery ||
      [
        entry.title,
        entry.baseDish,
        entry.stateTitle,
        entry.category,
        entry.angle,
        entry.description,
      ]
        .join(" ")
        .toLowerCase()
        .includes(deferredQuery);

    const matchesState = selectedState === "all" ? true : entry.stateTitle === selectedState;
    const matchesCategory =
      selectedCategory === "all" ? true : entry.category === selectedCategory;
    const matchesStatus = selectedStatus === "all" ? true : entry.status === selectedStatus;

    return matchesQuery && matchesState && matchesCategory && matchesStatus;
  });

  const visibleEntries = filteredEntries.slice(0, visibleCount);

  return (
    <div className="space-y-8">
      <div className="panel rounded-[2rem] p-6">
        <div className="grid gap-3 xl:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <input
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setVisibleCount(PAGE_SIZE);
            }}
            placeholder="Search Indian dish names, states, styles, or categories"
            className="rounded-full border px-4 py-3 text-sm font-medium outline-none md:text-base"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          />
          <select
            value={selectedState}
            onChange={(event) => {
              setSelectedState(event.target.value);
              setVisibleCount(PAGE_SIZE);
            }}
            className="rounded-full border px-4 py-3 text-sm font-medium outline-none"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            <option value="all">All states and UTs</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          <select
            value={selectedCategory}
            onChange={(event) => {
              setSelectedCategory(event.target.value);
              setVisibleCount(PAGE_SIZE);
            }}
            className="rounded-full border px-4 py-3 text-sm font-medium outline-none"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            <option value="all">All categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <select
            value={selectedStatus}
            onChange={(event) => {
              setSelectedStatus(event.target.value);
              setVisibleCount(PAGE_SIZE);
            }}
            className="rounded-full border px-4 py-3 text-sm font-medium outline-none"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            <option value="all">All statuses</option>
            <option value="live">Live detailed recipes</option>
            <option value="catalogued">Visible archive entries</option>
            <option value="planned">Planned expansion entries</option>
          </select>
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm" style={{ color: "var(--muted)" }}>
          <p>
            Showing {visibleEntries.length.toLocaleString()} of {filteredEntries.length.toLocaleString()} visible Indian archive entries.
          </p>
          <p>
            Total archive loaded: {entries.length.toLocaleString()} entries.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visibleEntries.map((entry) => (
          <IndianArchiveCard key={entry.id} entry={entry} />
        ))}
      </div>

      {!visibleEntries.length ? (
        <div className="panel rounded-[2rem] p-8 text-sm leading-7" style={{ color: "var(--muted)" }}>
          No Indian dish archive entries match the current filters. Try removing a state,
          category, or status filter.
        </div>
      ) : null}

      {visibleCount < filteredEntries.length ? (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
            className="rounded-full border px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            Load 60 more dishes
          </button>
        </div>
      ) : null}
    </div>
  );
}
