import { automationWorkflow, dashboardMetrics } from "@/data/dashboard";
import { recipes } from "@/data/recipes";
import { AdminShell } from "@/components/admin/admin-shell";
import { KpiCard } from "@/components/admin/kpi-card";
import { StatusChip } from "@/components/admin/status-chip";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Admin Overview",
  description:
    "Editorial control center for recipes, SEO, analytics, automation, monetization, translations, and media workflows.",
  path: "/admin",
});

export default function AdminOverviewPage() {
  return (
    <AdminShell
      title="Operations overview"
      description="A launch-ready dashboard for managing content, monetization, automation, and performance at food-media scale."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {dashboardMetrics.map((metric) => (
          <KpiCard key={metric.label} metric={metric} />
        ))}
      </div>
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="panel rounded-[2rem] p-6">
          <p className="eyebrow mb-3">Automation flow</p>
          <div className="space-y-4">
            {automationWorkflow.map((step) => (
              <div
                key={step.title}
                className="rounded-[1.5rem] border p-5"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl">
                    {step.title}
                  </h2>
                  <StatusChip tone={step.status}>{step.status}</StatusChip>
                </div>
                <p className="mt-3 text-sm leading-7" style={{ color: "var(--muted)" }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="panel rounded-[2rem] p-6">
          <p className="eyebrow mb-3">Recent editorial queue</p>
          <div className="space-y-4">
            {recipes.slice(0, 4).map((recipe) => (
              <div
                key={recipe.slug}
                className="rounded-[1.5rem] border p-5"
                style={{ borderColor: "var(--border)" }}
              >
                <p className="font-semibold">{recipe.title}</p>
                <p className="mt-2 text-sm leading-6" style={{ color: "var(--muted)" }}>
                  {recipe.cuisine} / {recipe.category} / {recipe.difficulty}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
