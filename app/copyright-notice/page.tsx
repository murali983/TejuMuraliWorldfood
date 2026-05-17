import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Copyright Notice",
  description:
    "Copyright ownership and permitted use information for Tejaswi Murali World Foods.",
  path: "/copyright-notice",
});

export default function CopyrightNoticePage() {
  return (
    <>
      <PageHero
        eyebrow="Copyright Notice"
        title="Copyright and permitted use"
        description="Original content, layouts, prompts, and branded publishing systems on this website are protected intellectual property unless otherwise stated."
      />
      <section className="pb-16">
        <div className="shell panel rounded-[2rem] p-6 md:p-8 rich-copy">
          <p>
            Copyright {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            Readers may share links and short attributed excerpts for personal or editorial reference, but full-text copying, mass republication, feed scraping, automated mirroring, or unauthorized commercial reuse is prohibited without written permission.
          </p>
          <p>
            The site name, original written content, custom prompt systems, page layouts, and internal brand materials belong to {siteConfig.developer} unless a separate attribution statement appears on a specific page.
          </p>
        </div>
      </section>
    </>
  );
}
