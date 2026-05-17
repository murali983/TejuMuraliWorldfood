"use client";

import { FormEvent, useState } from "react";

export function NewsletterCard() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setMessage("");

    const response = await fetch("/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const payload = await response.json();
    setMessage(payload.message || "Thanks for subscribing.");
    setIsLoading(false);
    if (response.ok) {
      setEmail("");
    }
  }

  return (
    <section className="panel-strong rounded-[2rem] p-8">
      <p className="eyebrow mb-3">Newsletter</p>
      <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl">
        Join the global kitchen briefing.
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-7 md:text-base" style={{ color: "var(--muted)" }}>
        Receive new recipes, trend reports, seasonal cuisine guides, monetization insights, and content system updates from Tejaswi Murali World Foods.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 md:flex-row">
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          placeholder="Enter your email address"
          className="min-h-14 flex-1 rounded-full border px-5 outline-none"
          style={{ borderColor: "var(--border)", background: "var(--surface)" }}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="min-h-14 rounded-full px-6 font-semibold text-white transition hover:-translate-y-0.5 disabled:opacity-60"
          style={{ background: "var(--accent)" }}
        >
          {isLoading ? "Joining..." : "Subscribe"}
        </button>
      </form>
      {message ? (
        <p className="mt-3 text-sm" style={{ color: "var(--muted)" }}>
          {message}
        </p>
      ) : null}
    </section>
  );
}
