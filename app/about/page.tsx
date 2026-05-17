import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/lib/seo";
import { authorProfile, siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn how Tejaswi Murali World Foods combines editorial recipe depth, AI-assisted systems, EEAT thinking, and search-first publishing.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A food publication built for readers first, search second, and scale with discipline."
        description="Tejaswi Murali World Foods is designed as a premium global recipe platform that uses AI to accelerate workflow while protecting editorial usefulness, originality, and long-term trust."
      />
      <section className="pb-16">
        <div className="shell grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="panel rounded-[2rem] p-6 md:p-8 rich-copy">
            <h3>Our editorial mission</h3>
            <p>
              The goal is not to flood the web with thin AI pages. The goal is to create helpful, beautifully presented recipe content that readers can actually cook from. That means every recipe is built around clear method logic, cultural context, useful troubleshooting, and structured metadata that improves discovery without sacrificing honesty.
            </p>
            <h3>How AI is used responsibly</h3>
            <p>
              AI supports ideation, first-draft structuring, media prompt generation, translation, and search assistance. It does not replace quality control. Drafts are scored for depth, repetition risk, utility, and schema completeness before publication. Low-scoring drafts remain unpublished until improved.
            </p>
            <h3>What makes the content different</h3>
            <ul>
              <li>Original descriptions and recipe framing written for human understanding.</li>
              <li>Long-form detail covering ingredients, steps, storage, FAQs, and history.</li>
              <li>Clear internal linking that helps readers keep exploring related cuisines.</li>
              <li>Search-friendly structure aligned with recipe schema and EEAT-minded presentation.</li>
            </ul>
          </div>
          <div className="space-y-6">
            <div className="panel-strong rounded-[2rem] p-6 md:p-8">
              <p className="eyebrow mb-3">Founder</p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl">
                {authorProfile.name}
              </h2>
              <p className="mt-4 text-sm leading-7 md:text-base" style={{ color: "var(--muted)" }}>
                {authorProfile.bio}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {authorProfile.experience.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border px-4 py-2 text-xs uppercase tracking-[0.18em]"
                    style={{ borderColor: "var(--border)" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="panel rounded-[2rem] p-6">
              <p className="eyebrow mb-3">Brand Contact</p>
              <p className="text-sm leading-7" style={{ color: "var(--muted)" }}>
                Developer: {siteConfig.developer}
                <br />
                Email:{" "}
                <a href={`mailto:${siteConfig.email}`} className="underline underline-offset-4">
                  {siteConfig.email}
                </a>
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex rounded-full px-5 py-3 text-sm font-semibold text-white"
                style={{ background: "var(--accent)" }}
              >
                Contact the team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
