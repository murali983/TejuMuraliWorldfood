import { automationWorkflow } from "@/data/dashboard";
import { AdminShell } from "@/components/admin/admin-shell";
import { StatusChip } from "@/components/admin/status-chip";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Admin Automation",
  description: "Automation controls for recipe generation, translation, media, and social publishing.",
  path: "/admin/automation",
});

export default function AdminAutomationPage() {
  return (
    <AdminShell
      title="Automation controls"
      description="Coordinate AI drafting, quality gates, image prompts, video prompts, and distribution workflows from one place."
    >
      <div className="grid gap-6 xl:grid-cols-2">
        {automationWorkflow.map((step) => (
          <div
            key={step.title}
            className="panel rounded-[2rem] p-6"
          >
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-[family-name:var(--font-display)] text-3xl">
                {step.title}
              </h2>
              <StatusChip tone={step.status}>{step.status}</StatusChip>
            </div>
            <p className="mt-4 text-sm leading-7" style={{ color: "var(--muted)" }}>
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </AdminShell>
  );
}
