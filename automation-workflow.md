# Automation Workflow

## Goal
Generate up to 50 high-quality recipe drafts per day without publishing low-value content.

## Safe publishing pattern
1. Trend and seasonal signal collection
2. Cuisine-balanced idea generation
3. Long-form recipe draft creation
4. Quality scoring and originality review
5. Image prompt generation
6. Video prompt generation
7. Translation queueing
8. SEO review
9. Scheduling or publish approval
10. Social distribution and sitemap refresh

## Draft-first rule
- Default every generated recipe to `DRAFT`.
- Auto-publish only after a quality score threshold is met and editorial rules are satisfied.
- Keep `AUTO_PUBLISH_APPROVED` disabled until the content pipeline has proven quality and originality in real production use.

## Daily cadence example
- `06:00`: idea harvest
- `08:00`: generate 50 recipe drafts
- `11:00`: quality and repetition screening
- `14:00`: image and video prompt rendering
- `16:00`: translation queue
- `18:00`: schedule, social posts, sitemap check

## Quality gates
- Minimum narrative depth
- Complete ingredients and method sections
- Distinct FAQs and internal links
- Practical cooking tips
- Reasonable nutrition estimates
- Non-repetitive phrasing
- Policy-compliant monetization surfaces

## Suggested schedulers
- Vercel Cron for lightweight hosted tasks
- GitHub Actions for timed background jobs
- Cloud Run Jobs or AWS EventBridge for larger batch pipelines
- Trigger.dev or BullMQ when you need queue-based fan-out
