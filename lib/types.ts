export type NavItem = {
  href: string;
  label: string;
  description?: string;
};

export type BreadcrumbItem = {
  href: string;
  label: string;
};

export type AuthorProfile = {
  name: string;
  title: string;
  bio: string;
  photo: string;
  email: string;
  experience: string[];
  specialties: string[];
};

export type NutritionInfo = {
  calories: number;
  protein: string;
  carbs: string;
  fat: string;
  fiber: string;
  sugar: string;
  sodium: string;
};

export type Ingredient = {
  amount: string;
  item: string;
  notes?: string;
};

export type RecipeStep = {
  title: string;
  detail: string;
};

export type RecipeFaq = {
  question: string;
  answer: string;
};

export type RecipeVideoPlan = {
  title: string;
  duration: string;
  hook: string;
  voiceover: string[];
  scenePrompts: string[];
  thumbnail: string;
};

export type Review = {
  name: string;
  rating: number;
  quote: string;
};

export type RecipeDifficulty = "Easy" | "Intermediate" | "Advanced";

export type Recipe = {
  id: string;
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  seoTitle: string;
  seoDescription: string;
  heroImage: string;
  imageAlt: string;
  cuisine: string;
  country: string;
  category: string;
  diet: string[];
  difficulty: RecipeDifficulty;
  prepMinutes: number;
  cookMinutes: number;
  totalMinutes: number;
  servings: number;
  nutrition: NutritionInfo;
  ingredients: Ingredient[];
  steps: RecipeStep[];
  cookingTips: string[];
  storageTips: string[];
  healthBenefits: string[];
  faqs: RecipeFaq[];
  reviews: Review[];
  relatedSlugs: string[];
  tags: string[];
  trendingScore: number;
  publishedAt: string;
  updatedAt: string;
  history: string;
  internalLinks: {
    label: string;
    href: string;
  }[];
  videoPlan: RecipeVideoPlan;
  author: AuthorProfile;
};

export type CategorySummary = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

export type CuisineSummary = {
  slug: string;
  title: string;
  description: string;
  region: string;
};

export type LegalSection = {
  title: string;
  body: string[];
};

export type LegalPage = {
  slug: string;
  title: string;
  summary: string;
  sections: LegalSection[];
};

export type DashboardMetric = {
  label: string;
  value: string;
  change: string;
  tone: "positive" | "neutral" | "warning";
};

export type WorkflowStep = {
  title: string;
  description: string;
  status: "live" | "recommended" | "gated";
};

export type SearchFilters = {
  cuisine?: string;
  calories?: number;
  ingredients?: string[];
  diet?: string;
  maxTime?: number;
  difficulty?: RecipeDifficulty;
};

export type IndianDishStatus = "live" | "catalogued" | "planned";

export type IndianDishCatalogItem = {
  name: string;
  category: string;
  description: string;
  status: IndianDishStatus;
  recipeSlug?: string;
};

export type IndianStateCuisine = {
  slug: string;
  title: string;
  region: string;
  description: string;
  signatureNotes: string[];
  catalogTarget: number;
  dishes: IndianDishCatalogItem[];
};
