import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Contact Tejaswi Murali World Foods about partnerships, corrections, support, sponsored recipes, or editorial questions.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Partnerships, editorial questions, and reader support."
        description="Reach out for recipe questions, sponsored content inquiries, affiliate collaboration, media requests, or platform support."
      />
      <section className="pb-16">
        <div className="shell grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <ContactForm />
          <div className="space-y-6">
            <div className="panel rounded-[2rem] p-6">
              <p className="eyebrow mb-3">Email</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-[family-name:var(--font-display)] text-3xl"
              >
                {siteConfig.email}
              </a>
              <p className="mt-4 text-sm leading-7" style={{ color: "var(--muted)" }}>
                For support, legal requests, sponsorships, or correction requests, email is the fastest path.
              </p>
            </div>
            <div className="panel-strong rounded-[2rem] p-6">
              <p className="eyebrow mb-3">What we can help with</p>
              <div className="grid gap-3 text-sm leading-7" style={{ color: "var(--muted)" }}>
                <p>Editorial corrections and content updates</p>
                <p>Sponsored recipe campaigns and food brand partnerships</p>
                <p>Affiliate collaboration and monetization questions</p>
                <p>Localization and translation requests</p>
                <p>Technical deployment or licensing inquiries</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
