import Link from "next/link";

import { mainNavigation } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";
import { SearchBar } from "@/components/search-bar";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b backdrop-blur-xl" style={{ borderColor: "var(--border)", background: "color-mix(in srgb, var(--background) 82%, transparent)" }}>
      <div className="shell flex flex-col gap-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="min-w-0">
            <p className="eyebrow mb-2">Global Food Magazine</p>
            <p className="font-[family-name:var(--font-display)] text-2xl md:text-3xl">
              {siteConfig.name}
            </p>
          </Link>
          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <nav className="flex flex-wrap gap-3 text-sm">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 transition hover:-translate-y-0.5"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden w-[28rem] max-w-full lg:block">
              <SearchBar compact />
            </div>
            <div className="lg:hidden">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
