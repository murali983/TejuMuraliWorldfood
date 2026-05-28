import { indianBrowseCategories } from "@/data/indian-explore";
import { IndianCategoryCard } from "@/components/indian-category-card";
import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Categories",
  description:
    "Browse Indian recipes by category, including veg recipes, non-veg recipes, breakfast, street food, desserts, curries, rice dishes, and beverages.",
  path: "/categories",
});

export default function CategoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Categories"
        title="Browse Indian recipes by category."
        description="Category-wise browsing is now focused on how readers actually search for Indian food: veg, non-veg, breakfast, curries, rice, snacks, desserts, drinks, and street food."
      />
      <section className="pb-16">
        <div className="shell grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {indianBrowseCategories.map((category) => (
            <IndianCategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>
    </>
  );
}
