import type { DashboardMetric, WorkflowStep } from "@/lib/types";

export const dashboardMetrics: DashboardMetric[] = [
  {
    label: "Published recipes",
    value: "2,480",
    change: "+4.8% this month",
    tone: "positive",
  },
  {
    label: "Organic sessions",
    value: "1.2M",
    change: "+11.2% vs last month",
    tone: "positive",
  },
  {
    label: "Ad RPM",
    value: "$18.40",
    change: "Healthy monetization mix",
    tone: "neutral",
  },
  {
    label: "Quality gate pass rate",
    value: "92%",
    change: "Drafts below 80 stay unpublished",
    tone: "positive",
  },
];

export const automationWorkflow: WorkflowStep[] = [
  {
    title: "Daily idea matrix",
    description:
      "Generate cuisine-balanced recipe ideas from seasonal ingredients, search demand, and editorial gaps.",
    status: "live",
  },
  {
    title: "Long-form draft builder",
    description:
      "Draft up to 50 recipes per day into review queues with cultural notes, nutrition estimates, and FAQ sections.",
    status: "live",
  },
  {
    title: "Quality and plagiarism gate",
    description:
      "Score structure depth, helpfulness, repetition, and editorial confidence before a post can be scheduled.",
    status: "gated",
  },
  {
    title: "Media rendering",
    description:
      "Create AI image prompts, short-form video prompts, and localized social assets for each approved recipe.",
    status: "recommended",
  },
  {
    title: "Translation and syndication",
    description:
      "Translate approved recipes into supported languages, then distribute metadata and social captions by locale.",
    status: "recommended",
  },
];
