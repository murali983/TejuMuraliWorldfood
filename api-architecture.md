# API Architecture

## Public endpoints
- `GET /api/recipes`
  - Filter recipes by `q`, `cuisine`, `diet`, `difficulty`, and `maxTime`
- `GET /api/search`
  - Returns heuristic search results plus derived filters
- `GET /api/ai/search`
  - Returns AI-assisted search summary with matched recipes
- `POST /api/newsletter`
  - Captures newsletter subscriptions
- `POST /api/contact`
  - Accepts support and partnership messages
- `POST /api/assistant`
  - Answers recipe-specific cooking questions

## Admin endpoints
- `POST /api/admin/generate`
  - Returns the daily recipe-draft generation blueprint
- `POST /api/admin/translate`
  - Queues translation jobs for a recipe

## Security notes
- Rate limiting is applied to public write-heavy endpoints.
- Admin routes require `x-admin-key` to match `ADMIN_API_KEY`.
- `middleware.ts` adds security headers and prevents admin indexing.

## Recommended production extensions
- Auth.js or Clerk for session-based admin access
- Queue-backed background jobs for media and translation workloads
- Cloudinary direct uploads
- Search Console, Bing, Meta, Pinterest, and email provider API connections
