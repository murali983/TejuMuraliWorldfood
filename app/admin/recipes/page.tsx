import { recipes } from "@/data/recipes";
import { AdminShell } from "@/components/admin/admin-shell";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Admin Recipes",
  description: "Recipe management, editorial checks, and AI generation controls.",
  path: "/admin/recipes",
});

export default function AdminRecipesPage() {
  return (
    <AdminShell
      title="Recipe management"
      description="Monitor recipe inventory, draft readiness, publishing depth, and editorial opportunities."
    >
      <div className="panel rounded-[2rem] p-6">
        <p className="eyebrow mb-3">Generation controls</p>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "Generate up to 50 drafts daily",
            "Auto-build meta titles and schema blocks",
            "Queue human review before publish by default",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[1.5rem] border p-5 text-sm leading-7"
              style={{ borderColor: "var(--border)" }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="panel rounded-[2rem] p-6">
        <p className="eyebrow mb-3">Recipe library</p>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr style={{ color: "var(--muted)" }}>
                <th className="pb-4 pr-4">Title</th>
                <th className="pb-4 pr-4">Cuisine</th>
                <th className="pb-4 pr-4">Category</th>
                <th className="pb-4 pr-4">Difficulty</th>
                <th className="pb-4 pr-4">Score intent</th>
              </tr>
            </thead>
            <tbody>
              {recipes.map((recipe) => (
                <tr key={recipe.slug} className="border-t" style={{ borderColor: "var(--border)" }}>
                  <td className="py-4 pr-4">{recipe.title}</td>
                  <td className="py-4 pr-4">{recipe.cuisine}</td>
                  <td className="py-4 pr-4">{recipe.category}</td>
                  <td className="py-4 pr-4">{recipe.difficulty}</td>
                  <td className="py-4 pr-4">{recipe.trendingScore}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminShell>
  );
}
