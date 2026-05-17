import Image from "next/image";
import Link from "next/link";

import { recipes } from "@/data/recipes";

export function VideoCard({ slug }: { slug: string }) {
  const recipe = recipes.find((item) => item.slug === slug);
  if (!recipe) return null;

  return (
    <article className="panel overflow-hidden rounded-[2rem]">
      <div className="relative h-[26rem] overflow-hidden">
        <Image
          src={recipe.videoPlan.thumbnail}
          alt={`${recipe.title} video thumbnail`}
          fill
          sizes="(min-width: 1024px) 25vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="space-y-4 p-6">
        <p className="eyebrow">Video recipe</p>
        <h3 className="font-[family-name:var(--font-display)] text-2xl">
          {recipe.videoPlan.title}
        </h3>
        <p className="text-sm leading-7" style={{ color: "var(--muted)" }}>
          {recipe.videoPlan.hook}
        </p>
        <div className="flex items-center justify-between text-sm" style={{ color: "var(--muted)" }}>
          <span>{recipe.videoPlan.duration.replace("PT", "").replace("S", " sec")}</span>
          <Link href={`/recipes/${recipe.slug}`} className="font-semibold" style={{ color: "var(--accent)" }}>
            View recipe
          </Link>
        </div>
      </div>
    </article>
  );
}
