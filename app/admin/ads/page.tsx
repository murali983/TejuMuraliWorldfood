import { AdminShell } from "@/components/admin/admin-shell";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Admin Ads",
  description: "Monetization settings for AdSense, affiliate placements, sponsors, premium plans, and donations.",
  path: "/admin/ads",
});

export default function AdminAdsPage() {
  return (
    <AdminShell
      title="Monetization dashboard"
      description="Balance revenue with reader trust using policy-aware ad placement, affiliate modules, sponsorship zones, and premium offer surfaces."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[
          "Header banner",
          "Inline recipe block",
          "Sidebar sponsor slot",
          "Newsletter monetization panel",
          "Amazon affiliate tools",
          "Premium memberships",
          "Donation and support",
          "Push notification campaigns",
        ].map((item) => (
          <div
            key={item}
            className="panel rounded-[2rem] p-5 text-sm leading-7"
            style={{ color: "var(--muted)" }}
          >
            {item}
          </div>
        ))}
      </div>
    </AdminShell>
  );
}
