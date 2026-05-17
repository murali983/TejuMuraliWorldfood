"use client";

import { FormEvent, useState } from "react";

export function CookingAssistant({
  recipeSlug,
}: {
  recipeSlug: string;
}) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);
    setAnswer("");

    const response = await fetch("/api/assistant", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ recipeSlug, question }),
    });

    const payload = await response.json();
    setAnswer(payload.answer || "No answer available yet.");
    setIsLoading(false);
  }

  return (
    <section className="panel rounded-[2rem] p-6">
      <p className="eyebrow mb-3">AI Cooking Assistant</p>
      <h2 className="font-[family-name:var(--font-display)] text-2xl">
        Ask a question about this recipe
      </h2>
      <form onSubmit={handleSubmit} className="mt-5 space-y-3">
        <textarea
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          placeholder="Example: Can I replace yogurt? Why did my rice turn soft?"
          className="min-h-28 w-full rounded-[1.5rem] border p-4 outline-none"
          style={{ borderColor: "var(--border)", background: "var(--surface)" }}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="rounded-full px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 disabled:opacity-60"
          style={{ background: "var(--accent)" }}
        >
          {isLoading ? "Thinking..." : "Ask assistant"}
        </button>
      </form>
      {answer ? (
        <p className="mt-4 rounded-[1.5rem] border p-4 text-sm leading-7" style={{ borderColor: "var(--border)", color: "var(--muted)" }}>
          {answer}
        </p>
      ) : null}
    </section>
  );
}
