import { dashboardMetrics } from "@/data/dashboard";
import { AdminShell } from "@/components/admin/admin-shell";
import { KpiCard } from "@/components/admin/kpi-card";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Admin Analytics",
  description: "Track traffic, engagement, monetization, and quality signals across the platform.",
  path: "/admin/analytics",
});

export default function AdminAnalyticsPage() {
  return (
    <AdminShell
      title="Analytics dashboard"
      description="Watch traffic quality, monetization health, and content usefulness signals instead of chasing raw post volume alone."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {dashboardMetrics.map((metric) => (
          <KpiCard key={metric.label} metric={metric} />
        ))}
      </div>
      <div className="grid gap-6 xl:grid-cols-3">
        {[
          "Organic traffic should outpace direct social spikes over time if topic clusters are healthy.",
          "Search exits, scroll depth, and return sessions help identify thin or under-explained posts.",
          "RPM should be balanced against user experience and Core Web Vitals, not maximized blindly.",
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
