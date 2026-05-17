import { LegalTemplate } from "@/components/legal-template";
import { getLegalPage } from "@/lib/legal";
import { buildMetadata } from "@/lib/seo";

const page = getLegalPage("affiliate-disclosure")!;

export const metadata = buildMetadata({
  title: page.title,
  description: page.summary,
  path: "/affiliate-disclosure",
});

export default function AffiliateDisclosurePage() {
  return <LegalTemplate page={page} />;
}
