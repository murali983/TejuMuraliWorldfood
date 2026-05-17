const siteUrl =
  process.env.SITE_URL ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  "http://localhost:3000";

const adminKey = process.env.ADMIN_API_KEY;
const slug = process.env.RECIPE_SLUG;
const languages = (process.env.TRANSLATION_LANGUAGES || "hi,te,ta,es,fr,de")
  .split(",")
  .map((value) => value.trim())
  .filter(Boolean);

if (!adminKey || !slug) {
  console.error("ADMIN_API_KEY and RECIPE_SLUG are required.");
  process.exit(1);
}

const response = await fetch(`${siteUrl}/api/admin/translate`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-admin-key": adminKey,
  },
  body: JSON.stringify({
    slug,
    languages,
  }),
});

const payload = await response.json();

if (!response.ok) {
  console.error(payload);
  process.exit(1);
}

console.log("Translation jobs queued:");
console.log(JSON.stringify(payload, null, 2));
