import Image from "next/image";
import Link from "next/link";

import type { IndianRegionShowcase } from "@/lib/types";

export function IndiaRegionCard({
  region,
}: {
  region: IndianRegionShowcase;
}) {
  return (
    <Link
      href={`/states#${region.slug}`}
      className="panel-strong relative overflow-hidden rounded-[2rem] p-6 transition hover:-translate-y-1"
    >
      <div className="absolute inset-0 opacity-[0.16]">
        <Image
          src={region.image}
          alt={region.title}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="relative">
        <p className="eyebrow mb-3">Browse by region</p>
        <h3 className="font-[family-name:var(--font-display)] text-3xl">
          {region.title}
        </h3>
        <p className="mt-4 text-sm leading-7" style={{ color: "var(--muted)" }}>
          {region.description}
        </p>
        <p className="mt-4 text-xs uppercase tracking-[0.22em]" style={{ color: "var(--accent)" }}>
          {region.states.join(" • ")}
        </p>
      </div>
    </Link>
  );
}
