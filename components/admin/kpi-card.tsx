import type { DashboardMetric } from "@/lib/types";
import { StatusChip } from "@/components/admin/status-chip";

export function KpiCard({ metric }: { metric: DashboardMetric }) {
  return (
    <div className="panel rounded-[1.75rem] p-5">
      <p className="text-sm" style={{ color: "var(--muted)" }}>
        {metric.label}
      </p>
      <p className="mt-3 text-3xl font-semibold">{metric.value}</p>
      <div className="mt-4">
        <StatusChip tone={metric.tone}>{metric.change}</StatusChip>
      </div>
    </div>
  );
}
