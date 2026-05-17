import { AdminShell } from "@/components/admin/admin-shell";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Admin SEO",
  description: "SEO dashboard for metadata, schema, indexing, internal linking, and content quality.",
  path: "/admin/seo",
});

export default function AdminSeoPage() {
  return (
    <AdminShell
      title="SEO dashboard"
      description="Track recipe schema health, metadata quality, canonical coverage, sitemap freshness, and internal linking opportunities."
    >
      <div className="grid gap-6 xl:grid-cols-2">
        {[
          "Canonical URLs active on every public page",
          "Recipe and FAQ schema present on detail pages",
          "Robots and XML sitemap configured for indexing support",
          "Long-form helpful content required before publish",
          "Alt text and image prompts stored with media assets",
          "Breadcrumb markup improving page hierarchy clarity",
        ].map((item) => (
          <div
            key={item}
            className="panel rounded-[2rem] p-6 text-sm leading-7"
            style={{ color: "var(--muted)" }}
          >
            {item}
          </div>
        ))}
      </div>
    </AdminShell>
  );
}
