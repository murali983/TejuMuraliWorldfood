import Link from "next/link";

import {
  indianFeaturedStates,
  indianStateCuisines,
  totalIndianCatalogTarget,
  totalIndianLiveDishCount,
  totalIndianSeededDishCount,
  totalIndianStateCount,
} from "@/data/indian-catalog";
import { BreadcrumbTrail } from "@/components/breadcrumb-trail";
import { IndiaStateCard } from "@/components/india-state-card";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { StructuredData } from "@/components/structured-data";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

const breadcrumbItems = [
  { href: "/", label: "Home" },
  { href: "/india", label: "India" },
];

const stateListSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Indian Food Atlas",
  description:
    "A state-wise and union territory-wise Indian food atlas covering signature dishes, cuisine notes, and long-term recipe expansion planning.",
  url: absoluteUrl("/india"),
  mainEntity: {
    "@type": "ItemList",
    itemListElement: indianStateCuisines.map((state, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: state.title,
      url: absoluteUrl(`/india/${state.slug}`),
    })),
  },
};

export const metadata = buildMetadata({
  title: "Indian Food Atlas",
  description:
    "Explore Indian food state by state, from Andhra Pradesh and Telangana to every state and union territory, with a scalable roadmap toward 2,000+ dishes.",
  path: "/india",
  keywords: [
    "Indian foods",
    "state wise Indian dishes",
    "Andhra recipes",
    "Telangana recipes",
    "Indian cuisine by state",
  ],
});

export default function IndiaPage() {
  return (
    <>
      <StructuredData data={buildBreadcrumbSchema(breadcrumbItems)} />
      <StructuredData data={stateListSchema} />
      <BreadcrumbTrail items={breadcrumbItems} />
      <PageHero
        eyebrow="India Food Atlas"
        title="Every Indian state and union territory now has its own food hub."
        description="This launch turns the site into a true Indian food discovery platform: Andhra and Telangana are included, all states and union territories are mapped, and the catalog foundation is structured to grow past 2,000 dishes without publishing thin low-value pages."
      />

      <section className="pb-10">
        <div className="shell grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              label: "State and UT hubs",
              value: totalIndianStateCount.toLocaleString(),
              note: "Complete India-wide browsing structure",
            },
            {
              label: "Seeded Indian dishes",
              value: totalIndianSeededDishCount.toLocaleString(),
              note: "Representative dishes already catalogued",
            },
            {
              label: "Detailed live Indian recipes",
              value: totalIndianLiveDishCount.toLocaleString(),
              note: "Long-form pages published with full structure",
            },
            {
              label: "Expansion target",
              value: totalIndianCatalogTarget.toLocaleString(),
              note: "Scale-ready roadmap beyond 2,000 dishes",
            },
          ].map((stat) => (
            <div key={stat.label} className="panel rounded-[2rem] p-6">
              <p className="text-xs uppercase tracking-[0.22em]" style={{ color: "var(--accent)" }}>
                {stat.label}
              </p>
              <p className="mt-3 font-[family-name:var(--font-display)] text-4xl">
                {stat.value}
              </p>
              <p className="mt-3 text-sm leading-7" style={{ color: "var(--muted)" }}>
                {stat.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10">
        <div className="shell grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="panel-strong rounded-[2rem] p-6 md:p-8">
            <p className="eyebrow mb-3">Launch strategy</p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl">
              Built for scale, but still aligned with SEO and AdSense quality.
            </h2>
            <p className="mt-4 text-sm leading-7 md:text-base" style={{ color: "var(--muted)" }}>
              Instead of publishing 2,000 thin pages all at once, the site now has a state-wise
              catalog architecture. That means readers can browse Indian cuisines immediately, while
              detailed recipe pages can keep expanding with better originality, stronger EEAT
              signals, and safer monetization quality.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                "State-first navigation for Andhra, Telangana, Tamil Nadu, Kerala, Karnataka, and the rest of India",
                "Representative dish catalog seeded now, with room to expand each state toward 56+ recipes",
                "Long-form recipe publishing can now grow in phases without making the site feel empty",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border p-5 text-sm leading-7"
                  style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.08)" }}
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/recipes/hyderabadi-veg-dum-biryani"
                className="rounded-full border px-5 py-3 text-sm"
                style={{ borderColor: "var(--border)" }}
              >
                Open live Telangana recipe
              </Link>
              <Link
                href="/recipes"
                className="rounded-full border px-5 py-3 text-sm"
                style={{ borderColor: "var(--border)" }}
              >
                Browse recipe archive
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            {indianFeaturedStates.map((state) => (
              <IndiaStateCard key={state.slug} state={state} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="shell space-y-6">
          <SectionHeading
            eyebrow="All India coverage"
            title="Browse food traditions from every state and union territory."
            description="Each hub now introduces the region, highlights signature dishes, and creates a clean place to keep expanding the recipe archive in a structured way."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {indianStateCuisines.map((state) => (
              <IndiaStateCard key={state.slug} state={state} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
