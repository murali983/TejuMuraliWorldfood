const siteUrl =
  process.env.SITE_URL ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  "http://localhost:3000";

const sitemapUrl = `${siteUrl.replace(/\/$/, "")}/sitemap.xml`;

const response = await fetch(sitemapUrl);

if (!response.ok) {
  console.error(`Unable to fetch sitemap at ${sitemapUrl}`);
  process.exit(1);
}

console.log(`Sitemap reachable: ${sitemapUrl}`);
console.log(
  "Next production step: connect Google Search Console and Bing Webmaster Tools APIs for authenticated sitemap submission and indexing telemetry."
);
