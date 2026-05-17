import { LegalTemplate } from "@/components/legal-template";
import { getLegalPage } from "@/lib/legal";
import { buildMetadata } from "@/lib/seo";

const page = getLegalPage("terms-and-conditions")!;

export const metadata = buildMetadata({
  title: page.title,
  description: page.summary,
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return <LegalTemplate page={page} />;
}
