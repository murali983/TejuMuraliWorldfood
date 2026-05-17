import { LegalTemplate } from "@/components/legal-template";
import { getLegalPage } from "@/lib/legal";
import { buildMetadata } from "@/lib/seo";

const page = getLegalPage("disclaimer")!;

export const metadata = buildMetadata({
  title: page.title,
  description: page.summary,
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return <LegalTemplate page={page} />;
}
