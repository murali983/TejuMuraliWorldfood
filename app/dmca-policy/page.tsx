import { LegalTemplate } from "@/components/legal-template";
import { getLegalPage } from "@/lib/legal";
import { buildMetadata } from "@/lib/seo";

const page = getLegalPage("dmca-policy")!;

export const metadata = buildMetadata({
  title: page.title,
  description: page.summary,
  path: "/dmca-policy",
});

export default function DmcaPage() {
  return <LegalTemplate page={page} />;
}
