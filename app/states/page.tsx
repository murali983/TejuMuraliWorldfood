import Link from "next/link";

import { indianStateCuisines, totalIndianStateCount } from "@/data/indian-catalog";
import { indiaRegionGroups, indianArchiveScaleCopy } from "@/data/indian-explore";
import { BreadcrumbTrail } from "@/components/breadcrumb-trail";
import { IndiaStateCard } from "@/components/india-state-card";
import { PageHero } from "@/components/page-hero";
import { StructuredData } from "@/components/structured-data";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

const breadcrumbItems = [
  { href: "/", label: "Home" },
  { href: "/states", label: "Indian States" },
];

const statePageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Indian States Food Guide",
  description:
    "Explore Indian foods by state and region, including Andhra Pradesh, Telangana, Tamil Nadu, Kerala, Karnataka, Punjab, Gujarat, Maharashtra, and more.",
  url: absoluteUrl("/states"),
};

export const metadata = buildMetadata({
  title: "Indian States Food Guide",
  description:
    "Browse Indian foods state by state with dedicated pages for Andhra Pradesh, Telangana, Tamil Nadu, Kerala, Karnataka, Punjab, Gujarat, Maharashtra, and more.",
  path: "/states",
  keywords: [
    "Indian states food",
    "state wise Indian recipes",
    "Andhra Pradesh recipes",
    "Telangana recipes",
    "Indian cuisine by state",
  ],
});

export default function StatesPage() {
  return (
    <>
      <StructuredData data={buildBreadcrumbSchema(breadcrumbItems)} />
      <StructuredData data={statePageSchema} />
      <BreadcrumbTrail items={breadcrumbItems} />
      <PageHero
        eyebrow="Explore by State"
        title="Dedicated pages for every Indian state and union territory."
        description={`The state-wise structure is one of the strongest parts of the platform. ${indianArchiveScaleCopy}`}
      />

      <section className="pb-10">
        <div className="shell grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            { label: "State and UT pages", value: totalIndianStateCount.toString() },
            { label: "South India focus", value: "7+" },
            { label: "North India focus", value: "10+" },
            { label: "Archive support", value: "5000+" },
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
        <div className="shell space-y-10">
          {indiaRegionGroups.map((group) => {
            const states = indianStateCuisines.filter((state) => group.states.includes(state.title));

            if (!states.length) {
              return null;
            }

            return (
              <section key={group.id} id={group.id} className="space-y-6">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <p className="eyebrow mb-3">{group.title}</p>
                    <h2 className="font-[family-name:var(--font-display)] text-4xl">
                      {group.title} food hubs
                    </h2>
                  </div>
                  <p className="max-w-2xl text-sm leading-7" style={{ color: "var(--muted)" }}>
                    Explore signature dishes, archive entries, and region-specific recipe pages from{" "}
                    {group.title.toLowerCase()}.
                  </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {states.map((state) => (
                    <IndiaStateCard key={state.slug} state={state} hrefBase="/states" />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <section className="pb-16">
        <div className="shell panel rounded-[2rem] p-6 md:p-8">
          <p className="eyebrow mb-3">Next step</p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl">
            Need broader browsing beyond states?
          </h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/india/dishes"
              className="rounded-full border px-5 py-3 text-sm font-semibold"
              style={{ borderColor: "var(--border)" }}
            >
              Browse 5000+ Indian dishes
            </Link>
            <Link
              href="/categories"
              className="rounded-full border px-5 py-3 text-sm"
              style={{ borderColor: "var(--border)" }}
            >
              Browse category-wise
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
