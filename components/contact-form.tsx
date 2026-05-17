"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setStatus("");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    setStatus(data.message || "Your message has been sent.");
    setIsLoading(false);

    if (response.ok) {
      event.currentTarget.reset();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="panel rounded-[2rem] p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="rounded-[1.25rem] border px-4 py-3 outline-none"
          style={{ borderColor: "var(--border)", background: "var(--surface)" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="rounded-[1.25rem] border px-4 py-3 outline-none"
          style={{ borderColor: "var(--border)", background: "var(--surface)" }}
        />
      </div>
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        required
        className="mt-4 w-full rounded-[1.25rem] border px-4 py-3 outline-none"
        style={{ borderColor: "var(--border)", background: "var(--surface)" }}
      />
      <textarea
        name="message"
        required
        placeholder="Tell us what you need help with."
        className="mt-4 min-h-40 w-full rounded-[1.25rem] border px-4 py-3 outline-none"
        style={{ borderColor: "var(--border)", background: "var(--surface)" }}
      />
      <button
        type="submit"
        disabled={isLoading}
        className="mt-4 rounded-full px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 disabled:opacity-60"
        style={{ background: "var(--accent)" }}
      >
        {isLoading ? "Sending..." : "Send message"}
      </button>
      {status ? (
        <p className="mt-3 text-sm" style={{ color: "var(--muted)" }}>
          {status}
        </p>
      ) : null}
    </form>
  );
}
