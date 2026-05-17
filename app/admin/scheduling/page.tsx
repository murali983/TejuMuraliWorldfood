import { AdminShell } from "@/components/admin/admin-shell";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Admin Scheduling",
  description: "Scheduling system for drafts, translations, media rendering, and social distribution.",
  path: "/admin/scheduling",
});

export default function AdminSchedulingPage() {
  return (
    <AdminShell
      title="Scheduling system"
      description="Plan daily draft generation, stagger publication, queue media jobs, and avoid sudden bursts that can look low-value or spammy."
    >
      <div className="grid gap-6 xl:grid-cols-3">
        {[
          "06:00 - Idea and trend harvest",
          "08:00 - Draft generation batch",
          "11:00 - Quality and originality scoring",
          "14:00 - Image and video prompt rendering",
          "16:00 - Translation jobs",
          "18:00 - Social and sitemap submission",
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
