"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const active = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
    setTheme(active);
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    localStorage.setItem("tmwf-theme", nextTheme);
    setTheme(nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-full border px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5"
      style={{
        borderColor: "var(--border)",
        background: "var(--surface)",
      }}
      aria-label="Toggle color theme"
    >
      {theme === "dark" ? "Light mode" : "Dark mode"}
    </button>
  );
}
