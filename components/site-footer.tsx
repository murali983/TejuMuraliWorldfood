import Link from "next/link";

import { footerNavigation } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t py-16" style={{ borderColor: "var(--border)" }}>
      <div className="shell grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4">
          <p className="eyebrow">About The Brand</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl">
            {siteConfig.name}
          </h2>
          <p className="max-w-2xl text-sm leading-7" style={{ color: "var(--muted)" }}>
            A premium editorial food platform focused on original recipes, cultural storytelling, and AI-assisted publishing systems with human quality control. Contact:{" "}
            <a href={`mailto:${siteConfig.email}`} className="underline underline-offset-4">
              {siteConfig.email}
            </a>
          </p>
          <div className="flex flex-wrap gap-3">
            {siteConfig.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border px-4 py-2 text-sm transition hover:-translate-y-0.5"
                style={{ borderColor: "var(--border)" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {footerNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-3xl border px-5 py-4 text-sm font-semibold transition hover:-translate-y-0.5"
              style={{ borderColor: "var(--border)", background: "var(--surface)" }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="shell mt-10 border-t pt-6 text-sm" style={{ borderColor: "var(--border)", color: "var(--muted)" }}>
        Copyright {new Date().getFullYear()} {siteConfig.name}. All rights reserved. Built by {siteConfig.developer}.
      </div>
    </footer>
  );
}
