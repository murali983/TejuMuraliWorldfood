import { legalPages } from "@/data/legal";

export function getLegalPage(slug: string) {
  return legalPages.find((page) => page.slug === slug);
}
