import { AdminShell } from "@/components/admin/admin-shell";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Admin Translations",
  description: "Translation management for all supported locales and auto-localized recipe workflows.",
  path: "/admin/translations",
});

export default function AdminTranslationsPage() {
  return (
    <AdminShell
      title="Translation management"
      description="Coordinate recipe localization, metadata translation, and locale-specific social captions across major world languages."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {siteConfig.locales.map((locale) => (
          <div
            key={locale}
            className="panel rounded-[1.75rem] p-5"
          >
            <p className="text-xs uppercase tracking-[0.22em]" style={{ color: "var(--accent)" }}>
              Locale
            </p>
            <p className="mt-3 text-2xl font-semibold">{locale}</p>
            <p className="mt-2 text-sm leading-6" style={{ color: "var(--muted)" }}>
              Translation queue ready
            </p>
          </div>
        ))}
      </div>
    </AdminShell>
  );
}
