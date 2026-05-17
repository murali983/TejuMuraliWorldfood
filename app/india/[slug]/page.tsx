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
    title: `${state.title} Foods`,
    description: `Browse signature dishes from ${state.title}, including regional notes, Indian food coverage, and scalable recipe planning.`,
    path: `/india/${state.slug}`,
    keywords: [
      `${state.title} food`,
      `${state.title} dishes`,
      `${state.title} recipes`,
      "Indian state food guide",
    ],
  });
}

export default async function IndianStatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const state = findIndianStateCuisineBySlug(slug);

  if (!state) {
    notFound();
  }

  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/india", label: "India" },
    { href: `/india/${state.slug}`, label: state.title },
  ];

  const liveDishes = state.dishes.filter((dish) => dish.recipeSlug);

  const stateSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${state.title} Food Guide`,
    description: state.description,
    url: absoluteUrl(`/india/${state.slug}`),
    about: {
      "@type": "Thing",
      name: `${state.title} cuisine`,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: state.dishes.map((dish, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: dish.name,
      })),
    },
  };

  return (
    <>
      <StructuredData data={buildBreadcrumbSchema(breadcrumbItems)} />
      <StructuredData data={stateSchema} />
      <BreadcrumbTrail items={breadcrumbItems} />
      <PageHero
        eyebrow={state.region}
        title={`${state.title} food guide`}
        description={`${state.description} This hub currently seeds ${state.dishes.length} representative dishes and is designed to grow toward ${state.catalogTarget} high-quality pages over time.`}
      />

      <section className="pb-10">
        <div className="shell grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            { label: "Seeded dishes", value: state.dishes.length.toString() },
            {
              label: "Live detailed recipes",
              value: state.dishes.filter((dish) => dish.status === "live").length.toString(),
            },
            { label: "Long-term target", value: state.catalogTarget.toString() },
            { label: "Signature notes", value: state.signatureNotes.length.toString() },
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
            <p className="eyebrow mb-3">Regional identity</p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl">
              Why {state.title} deserves its own dedicated recipe cluster.
            </h2>
            <p className="mt-4 text-sm leading-7 md:text-base" style={{ color: "var(--muted)" }}>
              {state.title} cuisine is not just a single dish or a single city style. It needs its
              own internal linking system, archive expansion plan, and editorial voice so readers
              can discover local staples, festive cooking, street food, breads, desserts, and
              everyday meals in one place.
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
                href="/india"
                className="rounded-full border px-5 py-3 text-sm"
                style={{ borderColor: "var(--border)" }}
              >
                Back to India atlas
              </Link>
              <Link
                href={`/search?q=${encodeURIComponent(state.title)}`}
                className="rounded-full border px-5 py-3 text-sm"
                style={{ borderColor: "var(--border)" }}
              >
                Search existing recipe archive
              </Link>
            </div>
          </div>
          <div className="panel rounded-[2rem] p-6 md:p-8">
            <p className="eyebrow mb-3">Live recipe shortcuts</p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl">
              Published pages from this region
            </h2>
            <div className="mt-5 grid gap-4">
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
                <div
                  className="rounded-[1.5rem] border p-5 text-sm leading-7"
                  style={{ borderColor: "var(--border)", color: "var(--muted)" }}
                >
                  Detailed full recipe pages for {state.title} are still expanding. This hub is in
                  place now so the archive can grow without losing structure or discoverability.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="shell">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow mb-3">Signature dishes</p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl">
                Featured {state.title} dishes
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7" style={{ color: "var(--muted)" }}>
              These dishes form the first public layer of the {state.title} cluster. Each one gives
              the site a clear path for future long-form recipe publishing.
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
