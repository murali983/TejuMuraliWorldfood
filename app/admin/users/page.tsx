import { AdminShell } from "@/components/admin/admin-shell";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Admin Users",
  description: "Manage user accounts, comments, favorites, memberships, and moderation roles.",
  path: "/admin/users",
});

export default function AdminUsersPage() {
  return (
    <AdminShell
      title="User management"
      description="The data model supports readers, editors, comments, favorites, saved meal plans, and premium memberships."
    >
      <div className="grid gap-6 xl:grid-cols-3">
        {[
          "Role-based access for admin, editor, author, member, and reader accounts.",
          "Moderation queues for comments and reviews to reduce spam and maintain food safety accuracy.",
          "Saved favorites, meal plans, and shopping lists as logged-in user features.",
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
