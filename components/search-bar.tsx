"use client";

import { FormEvent, useState, useTransition } from "react";
import { useRouter } from "next/navigation";

type SearchBarProps = {
  initialQuery?: string;
  compact?: boolean;
};

export function SearchBar({ initialQuery = "", compact = false }: SearchBarProps) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);
  const [isPending, startTransition] = useTransition();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextQuery = query.trim();
    if (!nextQuery) return;

    startTransition(() => {
      router.push(`/search?q=${encodeURIComponent(nextQuery)}`);
    });
  }

  function handleVoiceSearch() {
    const Recognition =
      typeof window !== "undefined"
        ? (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
        : undefined;

    if (!Recognition) {
      return;
    }

    const recognition = new Recognition();
    recognition.onresult = (event: any) => {
      const transcript = event.results?.[0]?.[0]?.transcript || "";
      setQuery(transcript);
      router.push(`/search?q=${encodeURIComponent(transcript)}`);
    };
    recognition.start();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`panel flex items-center gap-3 rounded-full p-2 ${compact ? "" : "w-full max-w-3xl"}`}
    >
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search by cuisine, ingredient, calories, or a question like 'easy Indian dinner under 40 minutes'"
        className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm outline-none md:text-base"
      />
      <button
        type="button"
        onClick={handleVoiceSearch}
        className="rounded-full border px-4 py-3 text-sm transition hover:-translate-y-0.5"
        style={{ borderColor: "var(--border)" }}
      >
        Voice
      </button>
      <button
        type="submit"
        disabled={isPending}
        className="rounded-full px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 disabled:opacity-60"
        style={{ background: "var(--accent)" }}
      >
        {isPending ? "Searching..." : "AI Search"}
      </button>
    </form>
  );
}
