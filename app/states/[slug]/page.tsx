import Link from "next/link";
import { notFound } from "next/navigation";

import { findIndianStateCuisineBySlug, indianStateCuisines } from "@/data/indian-catalog";
import { BreadcrumbTrail } from "@/components/breadcrumb-trail";
import { IndianDishCard } from "@/components/indian-dish-card";
import { PageHero } from "@/components/page-hero";
import { StructuredData } from "@/components/structured-data";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

export function generateStaticParams() {
  return indianStateCuisines.map((state) => ({ slug: state.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const state = findIndianStateCuisineBySlug(slug);

  if (!state) {
    return {};
  }

  return buildMetadata({
    title: `${state.title} Recipes`,
    description: `Discover ${state.title} recipes, regional specialties, and archive entries from Tejaswi Murali World Foods.`,
    path: `/states/${state.slug}`,
    keywords: [
      `${state.title} recipes`,
      `${state.title} food`,
      `${state.title} special dishes`,
      "Indian state recipes",
    ],
  });
}

export default async function StateDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const state = findIndianStateCuisineBySlug(slug);

  if (!state) {
    notFound();
  }

  const liveDishes = state.dishes.filter((dish) => dish.recipeSlug);

  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/states", label: "Indian States" },
    { href: `/states/${state.slug}`, label: state.title },
  ];

  const stateSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${state.title} Recipes`,
    description: state.description,
    url: absoluteUrl(`/states/${state.slug}`),
  };

  return (
    <>
      <StructuredData data={buildBreadcrumbSchema(breadcrumbItems)} />
      <StructuredData data={stateSchema} />
      <BreadcrumbTrail items={breadcrumbItems} />
      <PageHero
        eyebrow={state.region}
        title={`${state.title} special foods and recipes`}
        description={`${state.description} This page highlights signature dishes, state identity, and scalable recipe coverage from ${state.title}.`}
      />

      <section className="pb-10">
        <div className="shell grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            { label: "Signature dishes", value: state.dishes.length.toString() },
            { label: "Live long-form recipes", value: liveDishes.length.toString() },
            { label: "State archive target", value: state.catalogTarget.toString() },
            { label: "Regional notes", value: state.signatureNotes.length.toString() },
          ].map((stat) => (
            <div key={stat.label} className="panel rounded-[2rem] p-6">
              <p className="text-xs uppercase tracking-[0.22em]" style={{ color: "var(--accent)" }}>
                {stat.label}
              </p>
              <p className="mt-3 font-[family-name:var(--font-display)] text-4xl">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10">
        <div className="shell grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="panel-strong rounded-[2rem] p-6 md:p-8">
            <p className="eyebrow mb-3">Regional specialties</p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl">
              Featured flavors from {state.title}
            </h2>
            <p className="mt-4 text-sm leading-7 md:text-base" style={{ color: "var(--muted)" }}>
              From everyday meals to festival foods, {state.title} deserves dedicated recipe
              coverage. This page helps users browse signature dishes while the wider Indian archive
              supplies scale.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {state.signatureNotes.map((note) => (
                <span
                  key={note}
                  className="rounded-full border px-3 py-2 text-xs"
                  style={{ borderColor: "var(--border)", color: "var(--muted)" }}
                >
                  {note}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/states"
                className="rounded-full border px-5 py-3 text-sm"
                style={{ borderColor: "var(--border)" }}
              >
                Explore all states
              </Link>
              <Link
                href={`/search?q=${encodeURIComponent(state.title)}`}
                className="rounded-full border px-5 py-3 text-sm"
                style={{ borderColor: "var(--border)" }}
              >
                Search {state.title} dishes
              </Link>
            </div>
          </div>
          <div className="panel rounded-[2rem] p-6 md:p-8">
            <p className="eyebrow mb-3">Recipe shortcuts</p>
            <div className="grid gap-4">
              {liveDishes.length ? (
                liveDishes.map((dish) => (
                  <Link
                    key={dish.name}
                    href={`/recipes/${dish.recipeSlug}`}
                    className="rounded-[1.5rem] border p-5 transition hover:-translate-y-0.5"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <p className="font-semibold">{dish.name}</p>
                    <p className="mt-2 text-sm leading-6" style={{ color: "var(--muted)" }}>
                      {dish.description}
                    </p>
                  </Link>
                ))
              ) : (
                <div className="rounded-[1.5rem] border p-5 text-sm leading-7" style={{ borderColor: "var(--border)", color: "var(--muted)" }}>
                  Long-form recipe pages are still being expanded for this state. Use the signature
                  dishes list below and the Indian archive for broader discovery.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="shell">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow mb-3">State dishes</p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl">
                {state.title} signature dishes
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7" style={{ color: "var(--muted)" }}>
              These dishes define the first public layer of the {state.title} cluster and connect
              into the broader Indian archive.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {state.dishes.map((dish) => (
              <IndianDishCard key={dish.name} dish={dish} stateTitle={state.title} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
