import Image from "next/image";
import Link from "next/link";

import type { IndianBrowseCategory } from "@/lib/types";

export function IndianCategoryCard({
  category,
}: {
  category: IndianBrowseCategory;
}) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="panel relative overflow-hidden rounded-[2rem] p-6 transition hover:-translate-y-1"
    >
      <div className="absolute inset-0 opacity-[0.12]">
        <Image
          src={category.image}
          alt={category.title}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="relative">
        <p className="eyebrow mb-3">Browse by category</p>
        <h3 className="font-[family-name:var(--font-display)] text-3xl">
          {category.title}
        </h3>
        <p className="mt-4 text-sm leading-7" style={{ color: "var(--muted)" }}>
          {category.description}
        </p>
      </div>
    </Link>
  );
}
