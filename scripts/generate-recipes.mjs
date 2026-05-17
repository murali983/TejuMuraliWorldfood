const siteUrl =
  process.env.SITE_URL ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  "http://localhost:3000";

const adminKey = process.env.ADMIN_API_KEY;

if (!adminKey) {
  console.error("ADMIN_API_KEY is required.");
  process.exit(1);
}

const count = Number(process.env.RECIPE_DRAFT_COUNT || 50);
const cuisine = process.env.TARGET_CUISINE || "Indian";

const response = await fetch(`${siteUrl}/api/admin/generate`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-admin-key": adminKey,
  },
  body: JSON.stringify({
    count,
    cuisine,
  }),
});

const payload = await response.json();

if (!response.ok) {
  console.error(payload);
  process.exit(1);
}

console.log("Draft generation blueprint ready:");
console.log(JSON.stringify(payload, null, 2));
