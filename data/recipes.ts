import { authorProfile } from "@/lib/site";
import type { CategorySummary, CuisineSummary, Recipe } from "@/lib/types";

export const categories: CategorySummary[] = [
  {
    slug: "rice-dishes",
    title: "Rice Dishes",
    description:
      "Celebration-worthy rice plates, one-pot family dinners, and deeply aromatic regional classics.",
    image: "/images/recipes/category-rice-dishes.svg",
  },
  {
    slug: "soups-and-bowls",
    title: "Soups and Bowls",
    description:
      "Comforting broths, noodle bowls, and layered textures designed for satisfying weeknight meals.",
    image: "/images/recipes/category-soups-bowls.svg",
  },
  {
    slug: "one-pot-meals",
    title: "One-Pot Meals",
    description:
      "Slow-simmered mains, braises, and skillet-centered recipes that build flavor in stages.",
    image: "/images/recipes/category-one-pot.svg",
  },
  {
    slug: "pasta-and-noodles",
    title: "Pasta and Noodles",
    description:
      "Silky sauces, bright herbs, and restaurant-style pasta ideas that still feel home-cook friendly.",
    image: "/images/recipes/category-pasta.svg",
  },
  {
    slug: "street-food",
    title: "Street Food",
    description:
      "Lively textures, snackable formats, and layered toppings inspired by favorite street-side bites.",
    image: "/images/recipes/category-street-food.svg",
  },
  {
    slug: "desserts",
    title: "Desserts",
    description:
      "Elegant sweets with clear pastry guidance, storage advice, and celebratory finishing touches.",
    image: "/images/recipes/category-desserts.svg",
  },
];

export const cuisines: CuisineSummary[] = [
  {
    slug: "indian",
    title: "Indian",
    description:
      "Spice-led recipes with regional layering, fragrant tempering, and celebratory comfort.",
    region: "South Asia",
  },
  {
    slug: "japanese",
    title: "Japanese",
    description:
      "Balanced savory depth, clean broths, and precise texture contrasts with pantry-smart techniques.",
    region: "East Asia",
  },
  {
    slug: "moroccan",
    title: "Moroccan",
    description:
      "Warm spices, sweet-savory interplay, preserved citrus notes, and slow-cooked generosity.",
    region: "North Africa",
  },
  {
    slug: "italian",
    title: "Italian",
    description:
      "Ingredient-first cooking with texture-driven sauces, seasonal herbs, and elegant restraint.",
    region: "Southern Europe",
  },
  {
    slug: "mexican",
    title: "Mexican",
    description:
      "Bright salsas, toasted chiles, crisp textures, and deeply satisfying layered assembly.",
    region: "North America",
  },
  {
    slug: "portuguese",
    title: "Portuguese",
    description:
      "Pastry traditions, egg-rich sweets, and coastal-inspired cooking with old-world warmth.",
    region: "Southern Europe",
  },
  {
    slug: "thai",
    title: "Thai",
    description:
      "Bright herbs, layered heat, coconut richness, and balanced sweet-salty-acid notes.",
    region: "Southeast Asia",
  },
  {
    slug: "korean",
    title: "Korean",
    description:
      "Bold seasoning, fermented depth, sesame aroma, and highly satisfying bowl meals.",
    region: "East Asia",
  },
  {
    slug: "greek",
    title: "Greek",
    description:
      "Olive oil-led cooking, lemon brightness, herbs, and deeply comforting baked staples.",
    region: "Southern Europe",
  },
  {
    slug: "lebanese",
    title: "Lebanese",
    description:
      "Fresh herbs, grains, warming spices, and generous mezze-style comfort.",
    region: "Middle East",
  },
  {
    slug: "chinese",
    title: "Chinese",
    description:
      "Fast, aromatic wok-driven cooking with balanced texture and savory intensity.",
    region: "East Asia",
  },
  {
    slug: "spanish",
    title: "Spanish",
    description:
      "Rice-centered comfort, smoked paprika warmth, and vibrant shareable plates.",
    region: "Southern Europe",
  },
  {
    slug: "turkish",
    title: "Turkish",
    description:
      "Tomato-rich breakfasts, pepper warmth, and generous home-style pan cooking.",
    region: "West Asia",
  },
  {
    slug: "ethiopian",
    title: "Ethiopian",
    description:
      "Slow-cooked lentils, warming spice blends, and hearty communal comfort.",
    region: "East Africa",
  },
  {
    slug: "brazilian",
    title: "Brazilian",
    description:
      "Coconut, peppers, herbs, and bright stews that feel sunny and deeply comforting.",
    region: "South America",
  },
  {
    slug: "vietnamese",
    title: "Vietnamese",
    description:
      "Fragrant broths, crisp herbs, and fresh aromatic balance with elegant simplicity.",
    region: "Southeast Asia",
  },
  {
    slug: "german",
    title: "German",
    description:
      "Hearty skillet dishes, forest mushrooms, and practical cold-weather comfort.",
    region: "Central Europe",
  },
  {
    slug: "french",
    title: "French",
    description:
      "Vegetable-forward depth, rustic technique, and polished bistro-style balance.",
    region: "Western Europe",
  },
];

type WorldRecipeSeed = {
  slug: string;
  title: string;
  cuisine: string;
  country: string;
  category: string;
  diet: string[];
  difficulty: "Easy" | "Intermediate" | "Advanced";
  prepMinutes: number;
  cookMinutes: number;
  servings: number;
  nutrition: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
    fiber: string;
    sugar: string;
    sodium: string;
  };
  heroImage: string;
  imageAlt: string;
  excerpt: string;
  description: string;
  history: string;
  tags: string[];
  ingredients: Array<{ amount: string; item: string; notes?: string }>;
  steps: string[];
  cookingTips: string[];
  storageTips: string[];
  healthBenefits: string[];
  faqs: Array<{ question: string; answer: string }>;
  trendingScore: number;
  publishedAt: string;
  updatedAt: string;
  relatedSlugs: string[];
};

function buildWorldRecipe(seed: WorldRecipeSeed, index: number): Recipe {
  return {
    id: `recipe_world_${index + 1}`,
    slug: seed.slug,
    title: seed.title,
    description: seed.description,
    excerpt: seed.excerpt,
    seoTitle: `${seed.title} Recipe | Tejaswi Murali World Foods`,
    seoDescription: `${seed.title} from ${seed.country} with detailed steps, nutrition, tips, FAQs, and world-cuisine cooking guidance.`,
    heroImage: seed.heroImage,
    imageAlt: seed.imageAlt,
    cuisine: seed.cuisine,
    country: seed.country,
    category: seed.category,
    diet: seed.diet,
    difficulty: seed.difficulty,
    prepMinutes: seed.prepMinutes,
    cookMinutes: seed.cookMinutes,
    totalMinutes: seed.prepMinutes + seed.cookMinutes,
    servings: seed.servings,
    nutrition: seed.nutrition,
    ingredients: seed.ingredients,
    steps: [
      {
        title: "Prepare the flavor base",
        detail:
          seed.steps[0] ||
          `Set up the main aromatics, seasonings, and prep work for ${seed.title} so the cooking flows smoothly once the pan or pot is hot.`,
      },
      {
        title: "Cook the aromatics",
        detail:
          seed.steps[1] ||
          "Build the first layer of flavor patiently so the dish tastes rounded instead of rushed.",
      },
      {
        title: "Add the core ingredients",
        detail:
          seed.steps[2] ||
          "Introduce the main vegetables, protein elements, or grains in the order that supports the best texture.",
      },
      {
        title: "Simmer or finish gently",
        detail:
          seed.steps[3] ||
          "Cook until the sauce, broth, or pan mixture reaches the intended consistency and aroma.",
      },
      {
        title: "Balance the final seasoning",
        detail:
          seed.steps[4] ||
          "Taste carefully and adjust salt, acid, heat, or herbs so the finished dish feels vivid and complete.",
      },
      {
        title: "Serve with the right finish",
        detail:
          seed.steps[5] ||
          `Plate ${seed.title} while hot and finish with the garnish or accompaniment that gives it its signature character.`,
      },
    ],
    cookingTips: seed.cookingTips,
    storageTips: seed.storageTips,
    healthBenefits: seed.healthBenefits,
    faqs: seed.faqs,
    reviews: [
      {
        name: "Priya",
        rating: 5,
        quote:
          `This ${seed.cuisine.toLowerCase()} recipe felt detailed, approachable, and far more helpful than a short generic version.`,
      },
      {
        name: "Daniel",
        rating: 4,
        quote:
          `The timing and seasoning notes made ${seed.title} much easier to get right on the first try.`,
      },
    ],
    relatedSlugs: seed.relatedSlugs,
    tags: seed.tags,
    trendingScore: seed.trendingScore,
    publishedAt: seed.publishedAt,
    updatedAt: seed.updatedAt,
    history: seed.history,
    internalLinks: [
      {
        label: `Browse more ${seed.category.toLowerCase()}`,
        href: `/categories/${seed.category.toLowerCase().replace(/[^a-z]+/g, "-")}`,
      },
      {
        label: `See more ${seed.cuisine} recipes`,
        href: `/search?q=${encodeURIComponent(seed.cuisine)}`,
      },
    ],
    videoPlan: {
      title: `${seed.title} Short`,
      duration: "PT35S",
      hook: `Open with the most irresistible texture moment from ${seed.title}.`,
      voiceover: [
        `Start ${seed.title} by building a strong flavor base.`,
        `Layer the core ingredients so the ${seed.cuisine.toLowerCase()} profile stays balanced and expressive.`,
        `Finish with the garnish or final seasoning that makes the dish feel complete.`,
      ],
      scenePrompts: [
        `Cinematic top-down shot of the key ingredients for ${seed.title} styled for a premium food magazine.`,
        `Close-up of aromatics and spices cooking for ${seed.title}.`,
        `Main pot or pan stage showing texture development in ${seed.title}.`,
        `Final plated ${seed.title} with garnish and elegant service styling.`,
      ],
      thumbnail: "/images/videos/miso-butter-ramen-thumb.svg",
    },
    author: authorProfile,
  };
}

const foundationRecipes: Recipe[] = [
  {
    id: "recipe_001",
    slug: "hyderabadi-veg-dum-biryani",
    title: "Hyderabadi Veg Dum Biryani",
    description:
      "This Hyderabadi-style vegetable dum biryani layers saffron rice, spiced yogurt-coated vegetables, fried onions, mint, and gentle steam-cooking for a deeply aromatic main dish with restaurant-level drama and home-kitchen clarity.",
    excerpt:
      "A fragrant celebration biryani with saffron, caramelized onions, mint, and tender vegetables sealed together on dum.",
    seoTitle:
      "Hyderabadi Veg Dum Biryani Recipe | Tejaswi Murali World Foods",
    seoDescription:
      "Learn how to make an original Hyderabadi veg dum biryani with saffron rice, layered vegetables, cooking tips, storage advice, nutrition, and FAQs.",
    heroImage: "/images/recipes/hyderabadi-veg-dum-biryani.png",
    imageAlt:
      "Elegant serving platter of Hyderabadi vegetable dum biryani with saffron rice, fried onions, and mint.",
    cuisine: "Indian",
    country: "India",
    category: "Rice Dishes",
    diet: ["vegetarian", "gluten-free"],
    difficulty: "Intermediate",
    prepMinutes: 35,
    cookMinutes: 45,
    totalMinutes: 80,
    servings: 6,
    nutrition: {
      calories: 468,
      protein: "11 g",
      carbs: "67 g",
      fat: "17 g",
      fiber: "7 g",
      sugar: "8 g",
      sodium: "540 mg",
    },
    ingredients: [
      { amount: "2 cups", item: "aged basmati rice" },
      { amount: "3 tbsp", item: "ghee" },
      { amount: "2", item: "large onions, thinly sliced" },
      { amount: "1 cup", item: "plain yogurt" },
      { amount: "2 cups", item: "mixed vegetables", notes: "carrot, beans, potato, cauliflower" },
      { amount: "2 tbsp", item: "ginger garlic paste" },
      { amount: "1 tbsp", item: "biryani masala" },
      { amount: "1 tsp", item: "red chili powder" },
      { amount: "1/2 tsp", item: "turmeric" },
      { amount: "1/2 cup", item: "mint leaves" },
      { amount: "1/2 cup", item: "cilantro leaves" },
      { amount: "1/4 cup", item: "warm milk with saffron strands" },
      { amount: "2 tbsp", item: "cashews", notes: "optional for garnish" },
    ],
    steps: [
      {
        title: "Rinse and par-cook the rice",
        detail:
          "Wash the basmati until the water runs mostly clear, soak it for 20 minutes, then boil with salt and a whole spice blend until the grains are about 75 percent cooked. Drain immediately so the grains stay long and separate.",
      },
      {
        title: "Create the fried onion foundation",
        detail:
          "Fry the sliced onions in ghee until deeply golden and sweet. Drain them on paper towels and reserve both the onions and the scented ghee because both build the signature biryani aroma.",
      },
      {
        title: "Marinate the vegetables",
        detail:
          "Mix yogurt, ginger garlic paste, biryani masala, chili powder, turmeric, salt, half the herbs, and a spoonful of fried onions. Coat the vegetables thoroughly and rest them so the spices penetrate before cooking.",
      },
      {
        title: "Cook the masala base",
        detail:
          "Warm the onion-infused ghee, add the marinated vegetables, and cook until the raw yogurt smell disappears and the masala thickens into a glossy coating. The vegetables should be mostly tender but not fully soft.",
      },
      {
        title: "Layer for dum",
        detail:
          "Spread the vegetable masala in a heavy pot, top with rice, fried onions, mint, cilantro, saffron milk, and a final drizzle of ghee. Repeat in two layers if your pot is tall enough for better flavor distribution.",
      },
      {
        title: "Seal and steam gently",
        detail:
          "Cover the pot tightly and steam on the lowest possible heat for 22 to 25 minutes. Rest the biryani for 10 minutes off the heat before fluffing from the sides so the layers remain distinct.",
      },
    ],
    cookingTips: [
      "Do not fully cook the rice before layering or the dum stage will turn it soft.",
      "Use a wide, heavy pot to prevent scorching at the bottom.",
      "Resting the biryani after cooking helps the saffron, herbs, and spice oils settle into the rice.",
    ],
    storageTips: [
      "Cool leftovers quickly and refrigerate in a covered container for up to 3 days.",
      "Reheat with a splash of water over low heat so the rice stays fluffy instead of dry.",
    ],
    healthBenefits: [
      "Vegetables provide fiber and a broader range of micronutrients than a plain rice dish.",
      "Spices such as turmeric and cloves contribute antioxidant compounds.",
      "Portioning with yogurt raita or cucumber salad can create a more balanced meal.",
    ],
    faqs: [
      {
        question: "Can I make this biryani ahead for guests?",
        answer:
          "Yes. Prepare the rice, masala, and fried onions a few hours ahead, then layer and steam just before serving so the texture stays fresh.",
      },
      {
        question: "What if I do not have biryani masala?",
        answer:
          "Use a blend of garam masala, coriander powder, cumin, and a pinch of mace or nutmeg. The flavor will be slightly different but still balanced.",
      },
      {
        question: "Can I bake the dum biryani instead?",
        answer:
          "Yes. Cover the baking dish tightly with foil and bake at a gentle oven temperature until the aroma is fully developed and the layers are hot throughout.",
      },
    ],
    reviews: [
      {
        name: "Asha",
        rating: 5,
        quote:
          "The layering notes made the whole process feel approachable, and the rice stayed perfectly separate.",
      },
      {
        name: "Rahul",
        rating: 5,
        quote:
          "This tasted celebratory without needing restaurant equipment. The fried onion step is worth it.",
      },
    ],
    relatedSlugs: [
      "moroccan-lemon-olive-chickpea-tagine",
      "miso-butter-ramen",
    ],
    tags: ["biryani", "festival cooking", "vegetarian dinner", "world rice recipes"],
    trendingScore: 94,
    publishedAt: "2026-05-08T09:00:00.000Z",
    updatedAt: "2026-05-11T12:30:00.000Z",
    history:
      "Hyderabadi biryani reflects a rich crossroads of Mughlai influence, regional spice traditions, and layered rice craftsmanship. Vegetable versions are popular in home kitchens because they preserve the celebratory structure of the dish while adapting beautifully to seasonal produce and vegetarian households.",
    internalLinks: [
      { label: "Browse more rice dishes", href: "/categories/rice-dishes" },
      { label: "See our latest Indian recipes", href: "/search?q=indian" },
    ],
    videoPlan: {
      title: "Hyderabadi Veg Dum Biryani Short",
      duration: "PT45S",
      hook: "Lift the lid and release a cloud of saffron biryani steam in the first three seconds.",
      voiceover: [
        "Start with par-cooked basmati so every grain stays elegant.",
        "Layer yogurt-spiced vegetables with fried onions, mint, and saffron milk.",
        "Seal the pot and let dum cooking do the final magic.",
      ],
      scenePrompts: [
        "Top-down cinematic shot of saffron milk drizzling over layered basmati rice in a heavy pot.",
        "Close-up of deeply golden fried onions falling over bright mint and cilantro.",
        "Steam escaping when the lid is lifted from a dum biryani pot.",
        "Final plated biryani with visible long grains, vegetables, and toasted cashews.",
      ],
      thumbnail: "/images/videos/hyderabadi-veg-dum-biryani-thumb.svg",
    },
    author: authorProfile,
  },
  {
    id: "recipe_002",
    slug: "miso-butter-ramen",
    title: "Miso Butter Ramen",
    description:
      "This weeknight-friendly miso butter ramen builds deep savory flavor from miso, ginger, mushrooms, sesame, and a final spoon of butter that rounds the broth into a silky, satisfying bowl.",
    excerpt:
      "A silky Japanese-inspired noodle bowl with earthy mushrooms, miso depth, butter richness, and sharp scallion brightness.",
    seoTitle: "Miso Butter Ramen Recipe | Tejaswi Murali World Foods",
    seoDescription:
      "Make this original miso butter ramen with a layered broth, noodle timing tips, nutrition facts, FAQs, and serving ideas.",
    heroImage: "/images/recipes/miso-butter-ramen.svg",
    imageAlt:
      "Steaming bowl of miso butter ramen with mushrooms, noodles, scallions, and sesame.",
    cuisine: "Japanese",
    country: "Japan",
    category: "Soups and Bowls",
    diet: ["vegetarian"],
    difficulty: "Easy",
    prepMinutes: 20,
    cookMinutes: 18,
    totalMinutes: 38,
    servings: 4,
    nutrition: {
      calories: 412,
      protein: "13 g",
      carbs: "49 g",
      fat: "18 g",
      fiber: "5 g",
      sugar: "6 g",
      sodium: "760 mg",
    },
    ingredients: [
      { amount: "4 bundles", item: "ramen noodles" },
      { amount: "1 tbsp", item: "sesame oil" },
      { amount: "8 oz", item: "mixed mushrooms", notes: "shiitake and cremini work well" },
      { amount: "1 tbsp", item: "fresh ginger, finely grated" },
      { amount: "3 cloves", item: "garlic, minced" },
      { amount: "3 tbsp", item: "white miso paste" },
      { amount: "5 cups", item: "vegetable stock" },
      { amount: "1 tbsp", item: "soy sauce" },
      { amount: "1 tbsp", item: "mirin" },
      { amount: "2 tbsp", item: "unsalted butter" },
      { amount: "2", item: "scallions, sliced" },
      { amount: "1 tsp", item: "toasted sesame seeds" },
      { amount: "2", item: "soft-boiled eggs", notes: "optional for serving" },
    ],
    steps: [
      {
        title: "Brown the mushrooms",
        detail:
          "Cook the mushrooms in sesame oil over medium-high heat until they release moisture and take on caramelized edges. This gives the broth a deeper, roastier backbone than simply simmering everything from the start.",
      },
      {
        title: "Bloom the aromatics",
        detail:
          "Add ginger and garlic for just a minute so they become fragrant without burning. Their warmth should smell vivid and fresh rather than sharp or bitter.",
      },
      {
        title: "Build the broth",
        detail:
          "Whisk miso with a ladle of warm stock in a separate bowl, then stir it back into the pot with the remaining stock, soy sauce, and mirin. This prevents clumps and protects the mellow miso flavor.",
      },
      {
        title: "Simmer briefly",
        detail:
          "Let the broth simmer gently for 8 to 10 minutes. Avoid a hard boil, which can dull the miso and make the broth taste flatter.",
      },
      {
        title: "Cook noodles separately",
        detail:
          "Boil the ramen noodles until just tender, then drain. Keeping them separate until serving helps the soup stay clean and prevents starch from clouding the broth.",
      },
      {
        title: "Finish with butter and toppings",
        detail:
          "Stir the butter into the hot broth, divide noodles among bowls, and ladle the soup over them. Finish with scallions, sesame, and optional jammy eggs.",
      },
    ],
    cookingTips: [
      "Dissolve miso in a small amount of liquid before adding it to the pot for a smoother broth.",
      "Cook noodles separately if you expect leftovers because they continue absorbing liquid quickly.",
      "Add chili crisp at the table rather than in the broth if you want the base flavor to stay clean and balanced.",
    ],
    storageTips: [
      "Store noodles and broth separately for the best leftover texture.",
      "The broth keeps well in the refrigerator for 3 days and can be gently reheated without boiling.",
    ],
    healthBenefits: [
      "Mushrooms add savory depth while keeping the broth meat-free and relatively light.",
      "Ginger and garlic contribute aromatic compounds that make the bowl feel warming and satisfying.",
      "Portioning with spinach or bok choy can add extra fiber and minerals without much extra effort.",
    ],
    faqs: [
      {
        question: "Can I make this dairy-free?",
        answer:
          "Yes. Replace the butter with a small splash of neutral oil or a dairy-free butter alternative, then adjust seasoning to maintain richness.",
      },
      {
        question: "Which miso works best?",
        answer:
          "White miso is the easiest place to start because it is mellow and slightly sweet. Red miso is stronger and can be blended in smaller amounts.",
      },
      {
        question: "Can I add protein?",
        answer:
          "Absolutely. Tofu, edamame, or sliced roasted chicken can be added without changing the overall structure of the dish.",
      },
    ],
    reviews: [
      {
        name: "Mina",
        rating: 5,
        quote:
          "The broth was silky and balanced, and the step about dissolving the miso first made a real difference.",
      },
      {
        name: "Jordan",
        rating: 4,
        quote:
          "Fast enough for a weeknight, but still cozy and layered enough to feel special.",
      },
    ],
    relatedSlugs: [
      "pistachio-pesto-pasta",
      "moroccan-lemon-olive-chickpea-tagine",
    ],
    tags: ["ramen", "broth bowl", "vegetarian soup", "japanese comfort food"],
    trendingScore: 88,
    publishedAt: "2026-05-03T10:00:00.000Z",
    updatedAt: "2026-05-10T18:15:00.000Z",
    history:
      "Miso-based noodle soups are beloved for the way fermented savoriness can be built quickly without sacrificing depth. The butter finish in this version nods to a modern style of ramen shop comfort that makes the broth feel plush, especially in cold or rainy weather.",
    internalLinks: [
      { label: "Explore more soups and bowls", href: "/categories/soups-and-bowls" },
      { label: "Find more Japanese recipes", href: "/search?q=japanese" },
    ],
    videoPlan: {
      title: "Miso Butter Ramen in 40 Seconds",
      duration: "PT40S",
      hook: "Open on glossy noodles dropping into a butter-swirled miso broth.",
      voiceover: [
        "Brown the mushrooms first for a richer broth.",
        "Whisk miso smooth before it ever hits the pot.",
        "Finish with butter for a restaurant-style bowl in under forty minutes.",
      ],
      scenePrompts: [
        "Close-up of mushrooms caramelizing in sesame oil in a dark pan.",
        "Miso paste being whisked with hot stock into a smooth amber slurry.",
        "Butter melting into a steaming miso broth.",
        "Final ramen bowl garnished with scallions and sesame seeds.",
      ],
      thumbnail: "/images/videos/miso-butter-ramen-thumb.svg",
    },
    author: authorProfile,
  },
  {
    id: "recipe_003",
    slug: "moroccan-lemon-olive-chickpea-tagine",
    title: "Moroccan Lemon Olive Chickpea Tagine",
    description:
      "This Moroccan-inspired chickpea tagine pairs preserved lemon brightness with tomatoes, warming spices, tender vegetables, and green olives for a one-pot meal that feels generous, layered, and deeply aromatic.",
    excerpt:
      "A slow-simmered chickpea tagine with preserved lemon, olives, tomatoes, and warming spices.",
    seoTitle:
      "Moroccan Lemon Olive Chickpea Tagine Recipe | Tejaswi Murali World Foods",
    seoDescription:
      "Cook a fragrant Moroccan-style chickpea tagine with preserved lemon, spice layering, nutrition details, and serving advice.",
    heroImage: "/images/recipes/moroccan-lemon-olive-chickpea-tagine.svg",
    imageAlt:
      "Warm serving bowl of Moroccan chickpea tagine with tomatoes, olives, herbs, and couscous.",
    cuisine: "Moroccan",
    country: "Morocco",
    category: "One-Pot Meals",
    diet: ["vegan", "dairy-free"],
    difficulty: "Easy",
    prepMinutes: 20,
    cookMinutes: 35,
    totalMinutes: 55,
    servings: 5,
    nutrition: {
      calories: 356,
      protein: "12 g",
      carbs: "48 g",
      fat: "12 g",
      fiber: "11 g",
      sugar: "10 g",
      sodium: "690 mg",
    },
    ingredients: [
      { amount: "2 tbsp", item: "olive oil" },
      { amount: "1", item: "large onion, diced" },
      { amount: "2", item: "carrots, sliced" },
      { amount: "1", item: "red bell pepper, chopped" },
      { amount: "3 cloves", item: "garlic, minced" },
      { amount: "1 tsp", item: "ground cumin" },
      { amount: "1 tsp", item: "ground coriander" },
      { amount: "1/2 tsp", item: "smoked paprika" },
      { amount: "1/4 tsp", item: "ground cinnamon" },
      { amount: "1 can", item: "crushed tomatoes" },
      { amount: "2 cans", item: "chickpeas, drained" },
      { amount: "1 1/2 cups", item: "vegetable stock" },
      { amount: "1/2 preserved", item: "lemon, finely chopped" },
      { amount: "1/2 cup", item: "green olives" },
      { amount: "1/4 cup", item: "fresh parsley and cilantro" },
    ],
    steps: [
      {
        title: "Soften the vegetables",
        detail:
          "Cook onion, carrot, and bell pepper in olive oil until glossy and lightly sweet. This patient start helps the finished tagine taste rounded rather than sharp.",
      },
      {
        title: "Toast the spices",
        detail:
          "Add garlic, cumin, coriander, smoked paprika, and cinnamon, stirring for about 30 seconds so the oil carries their fragrance through the whole pot.",
      },
      {
        title: "Add tomatoes and chickpeas",
        detail:
          "Stir in the tomatoes, chickpeas, and stock. Scrape up any browned bits from the bottom because they add savory depth without extra ingredients.",
      },
      {
        title: "Simmer gently",
        detail:
          "Cook uncovered until the sauce thickens and the vegetables become tender. The consistency should be spoonable and rich rather than brothy.",
      },
      {
        title: "Brighten with preserved lemon and olives",
        detail:
          "Fold in the preserved lemon and olives near the end of cooking so their salinity and brightness stay vivid. Taste before adding more salt.",
      },
      {
        title: "Finish with herbs and serve",
        detail:
          "Scatter with parsley and cilantro, then serve with couscous, flatbread, or fluffy rice. A spoon of yogurt can be offered on the side for non-vegan diners.",
      },
    ],
    cookingTips: [
      "Add preserved lemon gradually because brands vary widely in saltiness.",
      "A pinch of honey can round out the acidity if your tomatoes taste especially sharp.",
      "This dish improves after resting, making it excellent for meal prep and next-day lunches.",
    ],
    storageTips: [
      "Refrigerate in an airtight container for up to 4 days.",
      "Freeze cooled portions for up to 2 months and reheat slowly on the stovetop.",
    ],
    healthBenefits: [
      "Chickpeas contribute fiber and plant-based protein for longer-lasting fullness.",
      "Olive oil and olives add heart-friendly fats and savory richness.",
      "The tomato-spice base delivers broad flavor without needing heavy cream or excess sugar.",
    ],
    faqs: [
      {
        question: "Can I use regular lemon instead of preserved lemon?",
        answer:
          "Yes, but the flavor will be fresher and less fermented. Add lemon zest and a small squeeze of juice, then balance with a little more salt.",
      },
      {
        question: "What should I serve with tagine?",
        answer:
          "Couscous is classic, but crusty bread, bulgur, or rice also work beautifully because they soak up the sauce.",
      },
      {
        question: "Can I add more vegetables?",
        answer:
          "Absolutely. Zucchini, sweet potato, or small cauliflower florets fit the profile well and can be added based on cooking time.",
      },
    ],
    reviews: [
      {
        name: "Leila",
        rating: 5,
        quote:
          "The preserved lemon lifted the entire pot. It tasted bright and comforting at the same time.",
      },
      {
        name: "Sam",
        rating: 4,
        quote:
          "Excellent meal-prep recipe. The leftovers were even better the next day.",
      },
    ],
    relatedSlugs: [
      "hyderabadi-veg-dum-biryani",
      "mango-chili-tostadas",
    ],
    tags: ["tagine", "vegan dinner", "moroccan food", "one pot meal"],
    trendingScore: 82,
    publishedAt: "2026-05-01T08:00:00.000Z",
    updatedAt: "2026-05-09T14:20:00.000Z",
    history:
      "Tagines are named for the traditional cooking vessel but also for the style of slow-built, aromatic dishes often associated with Moroccan home and hospitality cooking. Preserved lemon and olives are a classic pairing because they bring brightness and savory contrast to gently spiced sauces.",
    internalLinks: [
      { label: "See more one-pot meals", href: "/categories/one-pot-meals" },
      { label: "Browse Moroccan flavors", href: "/search?q=moroccan" },
    ],
    videoPlan: {
      title: "Moroccan Chickpea Tagine Reel",
      duration: "PT35S",
      hook: "Begin with a bubbling red-gold tagine sauce studded with chickpeas and olives.",
      voiceover: [
        "Soften the vegetables until naturally sweet.",
        "Toast the spices for a deeper, warmer base.",
        "Finish with preserved lemon for the bright final lift.",
      ],
      scenePrompts: [
        "Overhead shot of spices hitting warm olive oil beside diced vegetables.",
        "Thick tomato-chickpea mixture simmering in a tagine-style pan.",
        "Chopped preserved lemon and olives being folded into the sauce.",
        "Finished bowl served with couscous and scattered herbs.",
      ],
      thumbnail: "/images/videos/moroccan-lemon-olive-chickpea-tagine-thumb.svg",
    },
    author: authorProfile,
  },
  {
    id: "recipe_004",
    slug: "pistachio-pesto-pasta",
    title: "Pistachio Pesto Pasta",
    description:
      "This pistachio pesto pasta blends toasted pistachios, basil, lemon, garlic, olive oil, and a touch of parmesan into a velvety green sauce that tastes elegant, bright, and surprisingly weeknight-friendly.",
    excerpt:
      "A silky Italian-inspired pasta with toasted pistachios, fresh basil, lemon, and glossy sauce cling.",
    seoTitle: "Pistachio Pesto Pasta Recipe | Tejaswi Murali World Foods",
    seoDescription:
      "Learn how to make pistachio pesto pasta with sauce-emulsifying tips, ingredient notes, nutrition facts, and serving suggestions.",
    heroImage: "/images/recipes/pistachio-pesto-pasta.svg",
    imageAlt:
      "Bowl of glossy pistachio pesto pasta with basil leaves, lemon zest, and crushed nuts.",
    cuisine: "Italian",
    country: "Italy",
    category: "Pasta and Noodles",
    diet: ["vegetarian"],
    difficulty: "Easy",
    prepMinutes: 15,
    cookMinutes: 15,
    totalMinutes: 30,
    servings: 4,
    nutrition: {
      calories: 514,
      protein: "15 g",
      carbs: "52 g",
      fat: "28 g",
      fiber: "5 g",
      sugar: "3 g",
      sodium: "370 mg",
    },
    ingredients: [
      { amount: "12 oz", item: "pasta", notes: "fusilli or linguine" },
      { amount: "1 cup", item: "fresh basil leaves" },
      { amount: "3/4 cup", item: "shelled pistachios", notes: "lightly toasted" },
      { amount: "1/2 cup", item: "parmesan, finely grated" },
      { amount: "1 clove", item: "garlic" },
      { amount: "1", item: "lemon", notes: "zest and 1 tablespoon juice" },
      { amount: "1/3 cup", item: "extra-virgin olive oil" },
      { amount: "1/3 cup", item: "reserved pasta water" },
      { amount: "1 tsp", item: "sea salt" },
      { amount: "1/4 tsp", item: "black pepper" },
    ],
    steps: [
      {
        title: "Cook the pasta",
        detail:
          "Boil the pasta in well-salted water until just al dente, reserving some pasta water before draining. That starchy liquid is the key to a glossy sauce rather than an oily coating.",
      },
      {
        title: "Blend the pesto",
        detail:
          "Pulse basil, pistachios, parmesan, garlic, lemon zest, and olive oil until mostly smooth but still textured. The best pesto usually has tiny bits of nut remaining for character.",
      },
      {
        title: "Season with brightness",
        detail:
          "Add lemon juice, salt, and pepper, then taste. The pesto should be bold and slightly over-seasoned at this point because it will mellow when tossed with pasta.",
      },
      {
        title: "Loosen the sauce",
        detail:
          "Return the hot pasta to the pot and add the pesto with splashes of pasta water. Toss continuously until the sauce turns glossy and coats every piece evenly.",
      },
      {
        title: "Refine the texture",
        detail:
          "If the sauce feels thick, add more pasta water a tablespoon at a time. If it tastes flat, add extra lemon zest or a small pinch of salt.",
      },
      {
        title: "Finish and plate",
        detail:
          "Serve immediately with extra crushed pistachios, parmesan, basil leaves, and a light grind of black pepper.",
      },
    ],
    cookingTips: [
      "Toast the pistachios briefly to deepen their flavor, but do not let them brown too hard or the pesto can taste bitter.",
      "Use only a small amount of raw garlic because pistachios and basil are more delicate than a traditional basil-only pesto.",
      "Hot pasta and starchy water are what create the silky final sauce.",
    ],
    storageTips: [
      "Store leftover pesto separately from cooked pasta when possible.",
      "A thin layer of olive oil on top of the pesto helps it stay greener in the refrigerator.",
    ],
    healthBenefits: [
      "Pistachios add protein, healthy fats, and a naturally satisfying richness.",
      "Basil and lemon keep the dish bright, which can reduce the need for heavier cream-based sauces.",
      "Serving with a crisp salad can round the pasta into a lighter-feeling meal.",
    ],
    faqs: [
      {
        question: "Can I make the pesto without cheese?",
        answer:
          "Yes. Replace parmesan with nutritional yeast or a smaller amount of nuts plus extra salt, though the flavor will be a little less savory.",
      },
      {
        question: "Which pasta shape works best?",
        answer:
          "Shapes with ridges or twists, such as fusilli or trofie, hold onto the pesto especially well, but long noodles also work.",
      },
      {
        question: "Can I add vegetables?",
        answer:
          "Roasted zucchini, peas, asparagus, or blistered tomatoes pair beautifully with the pistachio-basil flavor profile.",
      },
    ],
    reviews: [
      {
        name: "Elena",
        rating: 5,
        quote:
          "Luxurious without being heavy. The lemon keeps the whole dish lively.",
      },
      {
        name: "Chris",
        rating: 4,
        quote:
          "The sauce emulsified exactly as described. Easy technique, polished result.",
      },
    ],
    relatedSlugs: [
      "miso-butter-ramen",
      "portuguese-cinnamon-custard-tarts",
    ],
    tags: ["pasta", "pesto", "italian inspired", "quick dinner"],
    trendingScore: 85,
    publishedAt: "2026-05-09T11:00:00.000Z",
    updatedAt: "2026-05-11T07:45:00.000Z",
    history:
      "Nut-based pesto variations are common across Italian home kitchens because cooks adapt to what is regional, seasonal, or simply available. Pistachios create a fuller, sweeter depth than pine nuts, which makes this version especially luxurious while still feeling bright and fresh.",
    internalLinks: [
      { label: "Browse pasta and noodle recipes", href: "/categories/pasta-and-noodles" },
      { label: "See more Italian-inspired dishes", href: "/search?q=italian" },
    ],
    videoPlan: {
      title: "Pistachio Pesto Pasta Reel",
      duration: "PT30S",
      hook: "Start with a glossy toss of green pasta catching the light.",
      voiceover: [
        "Toast the pistachios for deeper flavor.",
        "Blend with basil, lemon, and parmesan until velvety.",
        "Use hot pasta water to turn it into a silky sauce.",
      ],
      scenePrompts: [
        "Pistachios tumbling from a small pan onto a board.",
        "Close-up of basil and lemon zest being blended into green pesto.",
        "Pasta tossed with bright green sauce in a warm pot.",
        "Finished bowl with basil leaves and crushed pistachios on top.",
      ],
      thumbnail: "/images/videos/pistachio-pesto-pasta-thumb.svg",
    },
    author: authorProfile,
  },
  {
    id: "recipe_005",
    slug: "mango-chili-tostadas",
    title: "Mango Chili Tostadas",
    description:
      "These mango chili tostadas stack crisp tortillas with limey black beans, juicy mango salsa, creamy avocado, and smoky chili seasoning for a bright, crunchy, fast-building meal.",
    excerpt:
      "Crunchy tostadas loaded with black beans, mango salsa, avocado, and smoky chili-lime contrast.",
    seoTitle: "Mango Chili Tostadas Recipe | Tejaswi Murali World Foods",
    seoDescription:
      "Make these original mango chili tostadas with crunchy tortillas, fresh salsa, black beans, nutrition info, and assembly tips.",
    heroImage: "/images/recipes/mango-chili-tostadas.svg",
    imageAlt:
      "Colorful tostadas topped with black beans, mango salsa, avocado, herbs, and chili flakes.",
    cuisine: "Mexican",
    country: "Mexico",
    category: "Street Food",
    diet: ["vegetarian", "gluten-free"],
    difficulty: "Easy",
    prepMinutes: 18,
    cookMinutes: 12,
    totalMinutes: 30,
    servings: 4,
    nutrition: {
      calories: 338,
      protein: "10 g",
      carbs: "42 g",
      fat: "15 g",
      fiber: "9 g",
      sugar: "9 g",
      sodium: "420 mg",
    },
    ingredients: [
      { amount: "8", item: "small corn tortillas" },
      { amount: "1 tbsp", item: "olive oil" },
      { amount: "1 can", item: "black beans, drained" },
      { amount: "1 tsp", item: "ground cumin" },
      { amount: "1/2 tsp", item: "smoked paprika" },
      { amount: "1", item: "ripe mango, diced" },
      { amount: "1/4", item: "red onion, finely chopped" },
      { amount: "1", item: "jalapeno, minced" },
      { amount: "1", item: "lime", notes: "juice divided" },
      { amount: "1", item: "avocado, sliced" },
      { amount: "2 tbsp", item: "cilantro, chopped" },
      { amount: "1/4 cup", item: "crumbled queso fresco", notes: "optional" },
    ],
    steps: [
      {
        title: "Crisp the tortillas",
        detail:
          "Brush the tortillas lightly with oil and bake or pan-toast them until crisp. Let them cool slightly so they firm up before you add toppings.",
      },
      {
        title: "Season the beans",
        detail:
          "Warm the black beans with cumin, smoked paprika, salt, and a splash of water until creamy enough to spread but still textured.",
      },
      {
        title: "Mix the salsa",
        detail:
          "Combine mango, red onion, jalapeno, half the lime juice, cilantro, and a pinch of salt. The balance should be juicy, sharp, and only gently spicy.",
      },
      {
        title: "Layer strategically",
        detail:
          "Spread the beans on each tostada first to create a barrier that helps the crisp shell stand up a little longer once the salsa goes on top.",
      },
      {
        title: "Add freshness and creaminess",
        detail:
          "Top with mango salsa, avocado slices, and optional queso fresco. Finish with the remaining lime juice for brightness right before serving.",
      },
      {
        title: "Serve immediately",
        detail:
          "Tostadas are at their best when the shell is still crackly and the toppings are cool, juicy, and fresh.",
      },
    ],
    cookingTips: [
      "Keep the salsa separate until serving time if you are feeding a crowd over several minutes.",
      "A spoonful of chipotle yogurt can add smoky creaminess without overwhelming the mango.",
      "Use very ripe but still firm mango so the salsa stays tidy rather than watery.",
    ],
    storageTips: [
      "Store beans, salsa, and toppings separately for up to 2 days.",
      "Re-crisp tortillas in the oven for a few minutes if they soften after storage.",
    ],
    healthBenefits: [
      "Black beans provide fiber and protein that make a snack-style format more filling.",
      "Fresh mango contributes vitamin C and a naturally sweet contrast to savory toppings.",
      "Corn tortillas can be a lighter-feeling base than larger flour shells when portioned thoughtfully.",
    ],
    faqs: [
      {
        question: "Can I make these vegan?",
        answer:
          "Yes. Simply skip the queso fresco or replace it with a dairy-free crumble or cashew-based topping.",
      },
      {
        question: "What other toppings work well?",
        answer:
          "Pickled onions, shredded lettuce, charred corn, or a smoky chili sauce all fit naturally.",
      },
      {
        question: "Can I use canned mango pulp?",
        answer:
          "Fresh mango is much better here because the salsa depends on clean texture rather than puree-like sweetness.",
      },
    ],
    reviews: [
      {
        name: "Nina",
        rating: 5,
        quote:
          "Bright, fast, and surprisingly filling. The bean layer trick really keeps the tostadas crisp longer.",
      },
      {
        name: "Carlos",
        rating: 4,
        quote:
          "A fun summer dinner with great texture contrast and very little active cooking.",
      },
    ],
    relatedSlugs: [
      "moroccan-lemon-olive-chickpea-tagine",
      "portuguese-cinnamon-custard-tarts",
    ],
    tags: ["tostadas", "mango salsa", "street food", "quick vegetarian meal"],
    trendingScore: 90,
    publishedAt: "2026-05-10T13:00:00.000Z",
    updatedAt: "2026-05-11T15:00:00.000Z",
    history:
      "Street food formats across Mexico often celebrate contrast: crisp with creamy, bright with smoky, simple assembly with big flavor. This tostada keeps that spirit while leaning into mango for a fresh, summery finish that still feels grounded by beans and chile.",
    internalLinks: [
      { label: "Browse street food recipes", href: "/categories/street-food" },
      { label: "Search more Mexican-inspired meals", href: "/search?q=mexican" },
    ],
    videoPlan: {
      title: "Mango Chili Tostadas Short",
      duration: "PT25S",
      hook: "Crunch into a fully loaded tostada in the opening shot.",
      voiceover: [
        "Toast the tortillas until they are audibly crisp.",
        "Pile on smoky beans, juicy mango salsa, and creamy avocado.",
        "Serve right away for maximum crunch.",
      ],
      scenePrompts: [
        "Golden corn tostadas cooling on a tray.",
        "Mango salsa tossed with red onion, jalapeno, and cilantro.",
        "Black beans being spread over a crisp tostada shell.",
        "Hands lifting a finished tostada topped with avocado and salsa.",
      ],
      thumbnail: "/images/videos/mango-chili-tostadas-thumb.svg",
    },
    author: authorProfile,
  },
  {
    id: "recipe_006",
    slug: "portuguese-cinnamon-custard-tarts",
    title: "Portuguese Cinnamon Custard Tarts",
    description:
      "These Portuguese-style cinnamon custard tarts feature flaky pastry, a glossy egg custard center, caramelized spots, and warm cinnamon aroma for a bakery-style dessert with clear home-baking guidance.",
    excerpt:
      "Crisp pastry shells filled with silky custard and finished with caramelized tops and cinnamon warmth.",
    seoTitle:
      "Portuguese Cinnamon Custard Tarts Recipe | Tejaswi Murali World Foods",
    seoDescription:
      "Bake original Portuguese-style custard tarts with flaky pastry, smooth filling, caramelized tops, and expert pastry tips.",
    heroImage: "/images/recipes/portuguese-cinnamon-custard-tarts.svg",
    imageAlt:
      "Plate of Portuguese-style custard tarts with caramelized tops and cinnamon dusting.",
    cuisine: "Portuguese",
    country: "Portugal",
    category: "Desserts",
    diet: ["vegetarian"],
    difficulty: "Advanced",
    prepMinutes: 40,
    cookMinutes: 18,
    totalMinutes: 58,
    servings: 12,
    nutrition: {
      calories: 246,
      protein: "4 g",
      carbs: "24 g",
      fat: "15 g",
      fiber: "1 g",
      sugar: "10 g",
      sodium: "140 mg",
    },
    ingredients: [
      { amount: "1 sheet", item: "all-butter puff pastry" },
      { amount: "1 cup", item: "whole milk" },
      { amount: "1/2 cup", item: "heavy cream" },
      { amount: "3/4 cup", item: "granulated sugar" },
      { amount: "3 tbsp", item: "all-purpose flour" },
      { amount: "4", item: "egg yolks" },
      { amount: "1", item: "egg" },
      { amount: "1", item: "cinnamon stick" },
      { amount: "1 strip", item: "lemon peel" },
      { amount: "1 tsp", item: "vanilla extract" },
      { amount: "1 pinch", item: "fine salt" },
      { amount: "for serving", item: "ground cinnamon" },
    ],
    steps: [
      {
        title: "Prepare the pastry shells",
        detail:
          "Roll the puff pastry into a tight log, chill it, then slice and press each round into a muffin tin or tart mold. This spiral technique helps create the characteristic flaky wall structure.",
      },
      {
        title: "Infuse the dairy",
        detail:
          "Warm the milk, cream, cinnamon stick, and lemon peel until steaming. Turn off the heat and let the aromatics infuse so the custard tastes rounded rather than simply sweet.",
      },
      {
        title: "Make the custard base",
        detail:
          "Whisk sugar, flour, egg yolks, egg, vanilla, and salt until smooth, then slowly stream in the warm dairy while whisking continuously to prevent scrambling.",
      },
      {
        title: "Cook until lightly thickened",
        detail:
          "Return the custard to low heat and stir just until it coats the back of a spoon. It should still be pourable because it finishes setting in the oven.",
      },
      {
        title: "Fill and bake hot",
        detail:
          "Fill the chilled pastry shells most of the way and bake in a very hot oven so the pastry puffs while the tops blister and caramelize. High heat is part of the character of this dessert.",
      },
      {
        title: "Cool briefly and finish",
        detail:
          "Let the tarts cool just enough to set, then dust lightly with cinnamon. They are especially lovely served slightly warm on the day they are baked.",
      },
    ],
    cookingTips: [
      "Keep the pastry cold whenever possible so the layers stay distinct in the oven.",
      "Strain the custard if you want an especially polished, bakery-style texture.",
      "A very hot oven is essential for the signature caramelized top spots.",
    ],
    storageTips: [
      "These tarts are best the day they are baked, but leftovers can be chilled for 2 days.",
      "Re-crisp the pastry in a hot oven for a few minutes before serving leftover tarts.",
    ],
    healthBenefits: [
      "This is a dessert-first recipe, so the main benefit is portion-friendly indulgence rather than nutrient density.",
      "Serving with fresh fruit can add brightness and a more balanced finish to a dessert course.",
      "Because the pastry is rich, smaller tart portions often feel satisfying.",
    ],
    faqs: [
      {
        question: "Can I use store-bought puff pastry?",
        answer:
          "Yes. A good all-butter puff pastry is ideal and makes the process far more approachable for home bakers.",
      },
      {
        question: "Why did my custard bubble over?",
        answer:
          "The shells may have been overfilled or the custard may have been too thin. Fill carefully and cook the custard just enough before baking.",
      },
      {
        question: "Can I make them ahead?",
        answer:
          "You can prepare the pastry shells and custard ahead, but bake close to serving time for the best texture contrast.",
      },
    ],
    reviews: [
      {
        name: "Rita",
        rating: 5,
        quote:
          "The lemon and cinnamon made the filling taste layered, not just sweet. Wonderful pastry notes too.",
      },
      {
        name: "Daniel",
        rating: 4,
        quote:
          "A rewarding bake with clear instructions. They looked elegant enough for a dinner party platter.",
      },
    ],
    relatedSlugs: [
      "pistachio-pesto-pasta",
      "mango-chili-tostadas",
    ],
    tags: ["custard tarts", "pastry", "portuguese dessert", "baked sweets"],
    trendingScore: 79,
    publishedAt: "2026-05-04T09:45:00.000Z",
    updatedAt: "2026-05-09T09:10:00.000Z",
    history:
      "Portuguese custard tarts are cherished for their contrast between flaky pastry and blistered custard. Home versions often adapt the bakery method for modern ovens while preserving the signature hot bake, aromatic citrus notes, and warm cinnamon finish.",
    internalLinks: [
      { label: "Explore dessert recipes", href: "/categories/desserts" },
      { label: "See more Portuguese-inspired ideas", href: "/search?q=portuguese" },
    ],
    videoPlan: {
      title: "Portuguese Custard Tart Reel",
      duration: "PT35S",
      hook: "Reveal blistered golden custard tops straight from the oven.",
      voiceover: [
        "Shape chilled puff pastry into delicate tart shells.",
        "Infuse the custard with cinnamon and lemon for depth.",
        "Bake hot for that signature caramelized finish.",
      ],
      scenePrompts: [
        "Puff pastry rolled into a tight spiral log and sliced into rounds.",
        "Warm milk infusing with cinnamon stick and lemon peel.",
        "Custard poured into pastry shells in a metal tray.",
        "Freshly baked custard tarts with blistered tops cooling on a rack.",
      ],
      thumbnail: "/images/videos/portuguese-cinnamon-custard-tarts-thumb.svg",
    },
    author: authorProfile,
  },
];

const generatedWorldRecipes: Recipe[] = [
  buildWorldRecipe(
    {
      slug: "thai-green-coconut-curry",
      title: "Thai Green Coconut Curry",
      cuisine: "Thai",
      country: "Thailand",
      category: "One-Pot Meals",
      diet: ["vegetarian", "gluten-free"],
      difficulty: "Easy",
      prepMinutes: 20,
      cookMinutes: 25,
      servings: 4,
      nutrition: { calories: 392, protein: "10 g", carbs: "28 g", fat: "27 g", fiber: "7 g", sugar: "9 g", sodium: "610 mg" },
      heroImage: "/images/recipes/category-one-pot.svg",
      imageAlt: "Thai green coconut curry in a bowl with herbs and vegetables.",
      excerpt: "A fragrant Thai-style curry with coconut milk, herbs, vegetables, and layered gentle heat.",
      description: "This Thai green coconut curry delivers bright herb flavor, creamy coconut richness, tender vegetables, and a balanced sweet-salty-heat profile that works beautifully for a quick but globally expressive dinner.",
      history: "Green curry is admired for the way it balances fresh green aromatics with coconut richness. Home versions often emphasize flexibility, allowing cooks to adjust vegetables, heat level, and finishing herbs while still preserving the dish's signature brightness.",
      tags: ["thai curry", "coconut curry", "vegetarian dinner", "world cuisine"],
      ingredients: [{ amount: "2 tbsp", item: "green curry paste" }, { amount: "1 tbsp", item: "neutral oil" }, { amount: "1 can", item: "coconut milk" }, { amount: "1 cup", item: "vegetable stock" }, { amount: "2 cups", item: "mixed vegetables", notes: "bell pepper, broccoli, snap peas" }, { amount: "1 block", item: "firm tofu, cubed" }, { amount: "1 tbsp", item: "soy sauce or tamari" }, { amount: "1 tsp", item: "brown sugar" }, { amount: "1 tbsp", item: "lime juice" }, { amount: "1/4 cup", item: "Thai basil or cilantro" }],
      steps: [
        "Warm the oil and briefly fry the curry paste so its aroma blooms before any liquid goes in.",
        "Add coconut milk and stock gradually, whisking until the base becomes smooth and fragrant.",
        "Add tofu and vegetables in stages so the softer ingredients do not overcook.",
        "Simmer gently until the curry thickens slightly and the vegetables are tender but still vibrant.",
        "Balance with soy sauce, sugar, and lime so the finish tastes lively rather than flat.",
        "Serve hot with jasmine rice and fresh basil for the classic final lift."
      ],
      cookingTips: ["Cook the curry paste in oil first for deeper flavor.", "Do not boil aggressively after adding coconut milk.", "Add lime at the end so the brightness stays fresh."],
      storageTips: ["Refrigerate for up to 3 days.", "Add a splash of water or stock when reheating so the sauce loosens gracefully."],
      healthBenefits: ["Coconut curry can feel satisfying without needing dairy.", "Mixed vegetables broaden the fiber and micronutrient profile.", "Tofu adds plant protein and helps the meal feel more complete."],
      faqs: [{ question: "Can I make it spicier?", answer: "Yes. Add fresh green chile or a little more curry paste gradually so the herbal notes still stay balanced." }, { question: "Can I swap tofu?", answer: "Absolutely. Chickpeas, paneer, shrimp, or chicken all work if adjusted for cooking time." }, { question: "What goes best with it?", answer: "Jasmine rice is classic, but rice noodles or roti-style flatbreads also work well." }],
      trendingScore: 91,
      publishedAt: "2026-05-12T08:15:00.000Z",
      updatedAt: "2026-05-15T11:40:00.000Z",
      relatedSlugs: ["moroccan-lemon-olive-chickpea-tagine", "miso-butter-ramen"],
    },
    0
  ),
  buildWorldRecipe(
    {
      slug: "korean-bibimbap-bowl",
      title: "Korean Bibimbap Bowl",
      cuisine: "Korean",
      country: "South Korea",
      category: "Rice Dishes",
      diet: ["vegetarian"],
      difficulty: "Intermediate",
      prepMinutes: 30,
      cookMinutes: 20,
      servings: 4,
      nutrition: { calories: 448, protein: "14 g", carbs: "58 g", fat: "18 g", fiber: "8 g", sugar: "7 g", sodium: "700 mg" },
      heroImage: "/images/recipes/category-rice-dishes.svg",
      imageAlt: "Korean bibimbap bowl with rice, vegetables, egg, and chili sauce.",
      excerpt: "A color-rich Korean rice bowl with seasoned vegetables, gochujang heat, and satisfying contrast.",
      description: "This Korean-inspired bibimbap bowl combines rice, sesame-seasoned vegetables, a savory-spicy sauce, and layered textures that make every spoonful feel bright, hearty, and deeply satisfying.",
      history: "Bibimbap is celebrated for its color, balance, and flexibility. It showcases how carefully seasoned components can become more than the sum of their parts when mixed at the table.",
      tags: ["bibimbap", "korean rice bowl", "vegetable bowl", "gochujang"],
      ingredients: [{ amount: "4 cups", item: "cooked rice" }, { amount: "2 cups", item: "spinach" }, { amount: "1 cup", item: "carrot, julienned" }, { amount: "1 cup", item: "mushrooms, sliced" }, { amount: "1 cup", item: "bean sprouts" }, { amount: "2 tbsp", item: "sesame oil" }, { amount: "2 tbsp", item: "gochujang" }, { amount: "1 tbsp", item: "soy sauce" }, { amount: "1 tsp", item: "rice vinegar" }, { amount: "4", item: "eggs", notes: "optional for serving" }],
      steps: [
        "Season each vegetable separately with salt, sesame oil, or soy so the bowl tastes intentional instead of generic.",
        "Cook mushrooms until they brown lightly and lose excess moisture.",
        "Blanch or saute the spinach and sprouts just until tender, then cool slightly so they keep their color.",
        "Whisk a quick sauce with gochujang, soy sauce, vinegar, and a little sesame oil.",
        "Build bowls over hot rice with vegetables arranged in sections for contrast and visual appeal.",
        "Finish with sauce and optional egg, then mix thoroughly before eating."
      ],
      cookingTips: ["Seasoning each component separately is what gives bibimbap its depth.", "Keep the sauce concentrated because it spreads once mixed with rice.", "A hot bowl helps the final mix taste fuller and more cohesive."],
      storageTips: ["Store vegetables and rice separately for cleaner leftovers.", "Add sauce only when serving to keep textures brighter."],
      healthBenefits: ["A wide mix of vegetables improves color and micronutrient variety.", "Rice bowls can be balanced easily by adjusting protein and vegetables.", "Sesame and eggs add richness, helping the meal feel substantial."],
      faqs: [{ question: "Can I make it vegan?", answer: "Yes. Skip the egg and use tofu or extra mushrooms for added substance." }, { question: "Is gochujang very spicy?", answer: "It varies by brand, but it is usually more savory-sweet than sharply hot when used in moderation." }, { question: "Can I use brown rice?", answer: "Yes. Brown rice works well if you want a nuttier base and more fiber." }],
      trendingScore: 89,
      publishedAt: "2026-05-12T10:30:00.000Z",
      updatedAt: "2026-05-16T09:30:00.000Z",
      relatedSlugs: ["hyderabadi-veg-dum-biryani", "mango-chili-tostadas"],
    },
    1
  ),
  buildWorldRecipe(
    {
      slug: "greek-lemon-herb-potatoes",
      title: "Greek Lemon Herb Potatoes",
      cuisine: "Greek",
      country: "Greece",
      category: "One-Pot Meals",
      diet: ["vegan", "gluten-free"],
      difficulty: "Easy",
      prepMinutes: 15,
      cookMinutes: 45,
      servings: 4,
      nutrition: { calories: 286, protein: "5 g", carbs: "39 g", fat: "13 g", fiber: "5 g", sugar: "3 g", sodium: "430 mg" },
      heroImage: "/images/recipes/category-one-pot.svg",
      imageAlt: "Greek roasted potatoes with lemon, oregano, and golden edges.",
      excerpt: "Golden Greek-style potatoes with lemon, oregano, garlic, and a deeply savory roasting finish.",
      description: "These Greek lemon herb potatoes roast until tender inside and deeply golden outside, soaking up olive oil, stock, garlic, and oregano in a way that makes them feel both rustic and restaurant-worthy.",
      history: "Greek potato dishes are often defined by olive oil generosity, lemon brightness, and deeply savory baking liquids that reduce and cling to the potatoes as they finish roasting.",
      tags: ["greek potatoes", "roasted potatoes", "mediterranean side", "lemon herb"],
      ingredients: [{ amount: "2 lb", item: "potatoes, cut into wedges" }, { amount: "1/4 cup", item: "olive oil" }, { amount: "1/2 cup", item: "vegetable stock" }, { amount: "3 cloves", item: "garlic, minced" }, { amount: "1", item: "lemon", notes: "juice and zest" }, { amount: "1 tsp", item: "dried oregano" }, { amount: "1 tsp", item: "sea salt" }, { amount: "1/2 tsp", item: "black pepper" }, { amount: "2 tbsp", item: "parsley" }],
      steps: [
        "Toss the potato wedges with oil, garlic, oregano, salt, pepper, and lemon juice until evenly coated.",
        "Arrange them in a roasting dish with stock so the potatoes can roast and absorb flavor at the same time.",
        "Roast until the stock reduces and the edges begin to take on color.",
        "Turn the potatoes once or twice so several surfaces can crisp properly.",
        "Finish with lemon zest and parsley for a fresher top note.",
        "Serve hot alongside grilled vegetables, salads, or Mediterranean mains."
      ],
      cookingTips: ["Do not overcrowd the pan or the potatoes will steam.", "Roasting liquid should reduce instead of remaining soupy.", "A final broil can help deepen the golden edges."],
      storageTips: ["Refrigerate for up to 3 days.", "Reheat in the oven instead of the microwave for better texture."],
      healthBenefits: ["Potatoes can be satisfying and filling when prepared with balanced fat and herbs.", "Olive oil and lemon keep the flavor vivid without heavy sauces.", "Pairs well with protein and salad for an easy balanced plate."],
      faqs: [{ question: "Can I use sweet potatoes?", answer: "You can, but the flavor and roasting behavior will be sweeter and softer than the classic version." }, { question: "Why add stock?", answer: "It creates a savory roasting base that soaks into the potatoes before reducing." }, { question: "What herbs work best?", answer: "Oregano is most classic, but thyme and parsley also fit naturally." }],
      trendingScore: 78,
      publishedAt: "2026-05-12T12:00:00.000Z",
      updatedAt: "2026-05-15T08:20:00.000Z",
      relatedSlugs: ["moroccan-lemon-olive-chickpea-tagine", "pistachio-pesto-pasta"],
    },
    2
  ),
  buildWorldRecipe(
    {
      slug: "lebanese-mujadara",
      title: "Lebanese Mujadara",
      cuisine: "Lebanese",
      country: "Lebanon",
      category: "Rice Dishes",
      diet: ["vegan"],
      difficulty: "Easy",
      prepMinutes: 15,
      cookMinutes: 40,
      servings: 5,
      nutrition: { calories: 362, protein: "13 g", carbs: "56 g", fat: "9 g", fiber: "11 g", sugar: "4 g", sodium: "390 mg" },
      heroImage: "/images/recipes/category-rice-dishes.svg",
      imageAlt: "Lebanese mujadara with lentils, rice, and caramelized onions.",
      excerpt: "A deeply comforting Lebanese lentil and rice dish crowned with sweet caramelized onions.",
      description: "Lebanese mujadara brings together lentils, rice, warm spices, and deeply caramelized onions into a humble but elegant dish that proves simple pantry ingredients can create outstanding depth.",
      history: "Mujadara is treasured across the Levant as a practical, nourishing dish built from grains, legumes, and onions. Its beauty lies in patience and balance rather than luxury ingredients.",
      tags: ["mujadara", "lentils and rice", "lebanese food", "budget meal"],
      ingredients: [{ amount: "1 cup", item: "brown or green lentils" }, { amount: "1 cup", item: "long-grain rice" }, { amount: "3", item: "large onions, thinly sliced" }, { amount: "3 tbsp", item: "olive oil" }, { amount: "1 tsp", item: "ground cumin" }, { amount: "1/2 tsp", item: "ground cinnamon" }, { amount: "3 cups", item: "water or stock" }, { amount: "1 tsp", item: "salt" }, { amount: "1/2 tsp", item: "black pepper" }],
      steps: [
        "Cook the lentils until partly tender before combining them with rice so both finish at the right texture.",
        "Caramelize the onions slowly until richly golden and sweet, reserving some for the topping.",
        "Add cumin and cinnamon to the pan briefly so the oil carries their aroma.",
        "Combine rice, lentils, and liquid, then cook gently until both are tender and fluffy.",
        "Rest the pot off the heat so the grains settle and absorb the last of the steam.",
        "Serve topped generously with the reserved onions and a spoon of yogurt if desired."
      ],
      cookingTips: ["The onions should be deeply golden, not just lightly soft.", "Do not overcook the lentils before the rice is added.", "Resting the pot is important for a fluffier final texture."],
      storageTips: ["Keeps well for 4 days refrigerated.", "Reheat with a small splash of water to keep it tender."],
      healthBenefits: ["Lentils and rice together create a filling, fiber-rich meal.", "This dish is naturally budget-friendly and meal-prep friendly.", "Caramelized onions bring big flavor without processed sauces."],
      faqs: [{ question: "Can I use basmati rice?", answer: "Yes, though the final texture will be slightly lighter and less earthy than with standard long-grain rice." }, { question: "What goes well with mujadara?", answer: "Cucumber yogurt, tomato salad, or pickled vegetables all pair beautifully." }, { question: "Can I freeze it?", answer: "Yes. Freeze in portions and reheat gently with a little water." }],
      trendingScore: 83,
      publishedAt: "2026-05-12T14:00:00.000Z",
      updatedAt: "2026-05-16T06:50:00.000Z",
      relatedSlugs: ["hyderabadi-veg-dum-biryani", "moroccan-lemon-olive-chickpea-tagine"],
    },
    3
  ),
  buildWorldRecipe(
    {
      slug: "chinese-garlic-sesame-noodles",
      title: "Chinese Garlic Sesame Noodles",
      cuisine: "Chinese",
      country: "China",
      category: "Pasta and Noodles",
      diet: ["vegetarian"],
      difficulty: "Easy",
      prepMinutes: 15,
      cookMinutes: 15,
      servings: 4,
      nutrition: { calories: 418, protein: "12 g", carbs: "54 g", fat: "18 g", fiber: "4 g", sugar: "5 g", sodium: "720 mg" },
      heroImage: "/images/recipes/category-pasta.svg",
      imageAlt: "Chinese-style garlic sesame noodles with scallions and chili.",
      excerpt: "Fast glossy noodles with garlic, sesame, soy, and a satisfying savory finish.",
      description: "These Chinese-style garlic sesame noodles are quick, glossy, and deeply satisfying, using pantry staples like soy sauce, sesame oil, garlic, and scallions to build a noodle bowl with major comfort appeal.",
      history: "Sauced noodle dishes across Chinese home cooking often rely on simplicity, speed, and seasoning precision, proving that a short ingredient list can still deliver deep savory payoff.",
      tags: ["sesame noodles", "garlic noodles", "chinese noodles", "quick dinner"],
      ingredients: [{ amount: "12 oz", item: "wheat noodles" }, { amount: "2 tbsp", item: "soy sauce" }, { amount: "1 tbsp", item: "dark soy sauce" }, { amount: "1 tbsp", item: "sesame oil" }, { amount: "4 cloves", item: "garlic, minced" }, { amount: "1 tbsp", item: "rice vinegar" }, { amount: "1 tsp", item: "brown sugar" }, { amount: "2", item: "scallions, sliced" }, { amount: "1 tsp", item: "chili flakes or chili crisp" }],
      steps: [
        "Cook the noodles until tender but springy, then rinse lightly if needed to stop overcooking.",
        "Mix soy sauces, sesame oil, vinegar, and sugar into a smooth sauce base.",
        "Warm garlic gently in a little oil so it becomes fragrant without burning.",
        "Toss the noodles with the sauce while still warm so they absorb flavor better.",
        "Add scallions and chili to balance richness with freshness and heat.",
        "Serve immediately or slightly warm with extra sesame or cucumber on the side."
      ],
      cookingTips: ["Reserve a little noodle water in case the sauce needs loosening.", "Do not brown the garlic too hard or it will taste bitter.", "Taste after tossing because different soy sauces vary in saltiness."],
      storageTips: ["Best within 2 days refrigerated.", "Refresh leftovers with a spoon of hot water and a little sesame oil."],
      healthBenefits: ["A quick noodle dish can still feel balanced when paired with vegetables or tofu.", "Garlic and scallions add strong aroma without needing rich dairy-based sauces.", "Easy to adapt with protein or greens."],
      faqs: [{ question: "Can I add vegetables?", answer: "Yes. Bok choy, shredded cabbage, cucumber, or sauteed mushrooms work well." }, { question: "Are these spicy?", answer: "Only if you add chili. The base version is savory and nutty rather than hot." }, { question: "Can I make them cold?", answer: "Yes. This recipe also works as a chilled noodle salad." }],
      trendingScore: 87,
      publishedAt: "2026-05-12T16:00:00.000Z",
      updatedAt: "2026-05-16T10:15:00.000Z",
      relatedSlugs: ["miso-butter-ramen", "pistachio-pesto-pasta"],
    },
    4
  ),
  buildWorldRecipe(
    {
      slug: "spanish-saffron-vegetable-rice",
      title: "Spanish Saffron Vegetable Rice",
      cuisine: "Spanish",
      country: "Spain",
      category: "Rice Dishes",
      diet: ["vegetarian", "gluten-free"],
      difficulty: "Intermediate",
      prepMinutes: 20,
      cookMinutes: 35,
      servings: 5,
      nutrition: { calories: 401, protein: "10 g", carbs: "61 g", fat: "13 g", fiber: "6 g", sugar: "5 g", sodium: "560 mg" },
      heroImage: "/images/recipes/category-rice-dishes.svg",
      imageAlt: "Spanish-style saffron vegetable rice in a wide pan.",
      excerpt: "A saffron-scented Spanish-inspired rice dish with vegetables, paprika warmth, and toasty pan flavor.",
      description: "This Spanish-inspired saffron vegetable rice cooks in a wide pan for even grain texture, aromatic depth, and a subtle toasted finish that makes it feel festive without becoming difficult to execute.",
      history: "Spanish rice dishes are often as much about pan management as ingredients. The shape of the pan, the control of heat, and the restraint after adding liquid all influence the final texture.",
      tags: ["spanish rice", "saffron rice", "vegetable paella style", "one pan"],
      ingredients: [{ amount: "2 tbsp", item: "olive oil" }, { amount: "1", item: "onion, chopped" }, { amount: "1", item: "red bell pepper, chopped" }, { amount: "3 cloves", item: "garlic, minced" }, { amount: "1 1/2 cups", item: "short or medium grain rice" }, { amount: "1 tsp", item: "smoked paprika" }, { amount: "1 pinch", item: "saffron" }, { amount: "3 cups", item: "vegetable stock" }, { amount: "1 cup", item: "peas and artichokes" }],
      steps: [
        "Cook onion and pepper until softened and sweet before adding garlic and spices.",
        "Toast the rice briefly so the grains become glossy and better prepared to absorb flavor evenly.",
        "Add paprika, saffron, and stock, then spread the rice into an even layer.",
        "Simmer without stirring too much so the grains can cook uniformly and the base can lightly toast.",
        "Add peas and artichokes toward the end to preserve their texture and color.",
        "Rest the pan before serving so the rice settles and the aromatics finish blooming."
      ],
      cookingTips: ["A wide pan helps the rice cook more evenly.", "Resist over-stirring once the liquid goes in.", "Resting the pan is part of the final texture."],
      storageTips: ["Refrigerate for up to 3 days.", "Reheat in a skillet with a splash of stock."],
      healthBenefits: ["Rice dishes like this can absorb lots of vegetable flavor without becoming heavy.", "Peas and artichokes add fiber and variety.", "Olive oil and saffron help keep the dish fragrant rather than greasy."],
      faqs: [{ question: "Can I use basmati?", answer: "You can, but medium-grain rice gives a more traditional and unified pan texture." }, { question: "Should I stir it a lot?", answer: "No. Too much stirring changes the texture and reduces the signature pan character." }, { question: "Can I add beans?", answer: "Yes, chickpeas or white beans work well for a more filling vegetarian version." }],
      trendingScore: 84,
      publishedAt: "2026-05-12T18:00:00.000Z",
      updatedAt: "2026-05-16T13:00:00.000Z",
      relatedSlugs: ["hyderabadi-veg-dum-biryani", "thai-green-coconut-curry"],
    },
    5
  ),
  buildWorldRecipe(
    {
      slug: "turkish-menemen-skillet",
      title: "Turkish Menemen Skillet",
      cuisine: "Turkish",
      country: "Turkey",
      category: "One-Pot Meals",
      diet: ["vegetarian", "gluten-free"],
      difficulty: "Easy",
      prepMinutes: 10,
      cookMinutes: 15,
      servings: 3,
      nutrition: { calories: 264, protein: "12 g", carbs: "11 g", fat: "18 g", fiber: "3 g", sugar: "7 g", sodium: "430 mg" },
      heroImage: "/images/recipes/category-one-pot.svg",
      imageAlt: "Turkish menemen skillet with tomatoes, peppers, and eggs.",
      excerpt: "A Turkish breakfast skillet of tomatoes, peppers, eggs, and soft, savory spoonable texture.",
      description: "This Turkish-style menemen skillet turns eggs, tomatoes, peppers, and olive oil into a soft, richly savory breakfast or light meal that tastes generous, bright, and highly comforting.",
      history: "Menemen is beloved for its simplicity and immediacy. The dish depends on the quality of the tomato-pepper base and the soft finish of the eggs rather than heavy seasoning.",
      tags: ["menemen", "turkish breakfast", "egg skillet", "tomato eggs"],
      ingredients: [{ amount: "2 tbsp", item: "olive oil" }, { amount: "1", item: "green pepper, chopped" }, { amount: "2", item: "tomatoes, grated or chopped" }, { amount: "1 tbsp", item: "tomato paste" }, { amount: "4", item: "eggs" }, { amount: "1/2 tsp", item: "Aleppo pepper or chili flakes" }, { amount: "1/2 tsp", item: "salt" }, { amount: "2 tbsp", item: "parsley" }],
      steps: [
        "Soften the pepper in olive oil until it loses its raw edge but still keeps a little bite.",
        "Add tomato and paste, then cook until the mixture thickens and tastes concentrated rather than watery.",
        "Season with salt and gentle pepper heat so the base feels rounded before the eggs go in.",
        "Crack the eggs into the sauce and stir lightly for a soft, custardy finish.",
        "Stop cooking while the eggs are still slightly loose because residual heat continues the process.",
        "Serve immediately with bread for scooping."
      ],
      cookingTips: ["Do not overcook the eggs.", "Cook the tomato base long enough to reduce properly.", "Use good bread because it is part of the eating experience."],
      storageTips: ["Best eaten fresh.", "If needed, refrigerate briefly and reheat very gently."],
      healthBenefits: ["Eggs make this skillet satisfying without much prep time.", "Tomatoes and peppers add freshness and color.", "Pairs well with salad for a light balanced meal."],
      faqs: [{ question: "Can I add cheese?", answer: "Yes. Feta or Turkish white cheese can be crumbled in near the end." }, { question: "Should the eggs be fully set?", answer: "Traditionally they stay a little soft for a richer texture." }, { question: "Can I make it spicy?", answer: "Yes. Add more chili or a hot green pepper." }],
      trendingScore: 77,
      publishedAt: "2026-05-13T06:50:00.000Z",
      updatedAt: "2026-05-16T15:00:00.000Z",
      relatedSlugs: ["miso-butter-ramen", "greek-lemon-herb-potatoes"],
    },
    6
  ),
  buildWorldRecipe(
    {
      slug: "ethiopian-berbere-lentil-stew",
      title: "Ethiopian Berbere Lentil Stew",
      cuisine: "Ethiopian",
      country: "Ethiopia",
      category: "One-Pot Meals",
      diet: ["vegan"],
      difficulty: "Intermediate",
      prepMinutes: 15,
      cookMinutes: 35,
      servings: 5,
      nutrition: { calories: 318, protein: "16 g", carbs: "43 g", fat: "9 g", fiber: "14 g", sugar: "6 g", sodium: "470 mg" },
      heroImage: "/images/recipes/category-one-pot.svg",
      imageAlt: "Ethiopian-style red lentil stew with berbere spice.",
      excerpt: "A warming Ethiopian-inspired lentil stew with berbere spice depth and deeply comforting texture.",
      description: "This Ethiopian-inspired berbere lentil stew builds warmth, depth, and comforting thickness from onions, garlic, tomato, and spice, creating a deeply satisfying pot that tastes even better as it rests.",
      history: "Lentil stews flavored with berbere are appreciated for their richness and warmth, offering a practical and flavorful way to turn pantry ingredients into communal comfort food.",
      tags: ["ethiopian lentils", "berbere stew", "vegan stew", "red lentils"],
      ingredients: [{ amount: "2 tbsp", item: "oil" }, { amount: "1", item: "onion, finely chopped" }, { amount: "3 cloves", item: "garlic, minced" }, { amount: "1 tbsp", item: "ginger, grated" }, { amount: "2 tbsp", item: "berbere spice" }, { amount: "1 tbsp", item: "tomato paste" }, { amount: "1 1/2 cups", item: "red lentils" }, { amount: "4 cups", item: "water or stock" }, { amount: "1 tsp", item: "salt" }],
      steps: [
        "Cook the onion slowly so it becomes sweet and forms a strong base.",
        "Add garlic, ginger, berbere, and tomato paste so the spices open up in the oil.",
        "Stir in the lentils and liquid, then simmer gently until the lentils begin to break down.",
        "Cook until the stew reaches a thick, spoonable consistency.",
        "Adjust salt and, if needed, a small splash of water for texture balance.",
        "Serve hot with flatbread, rice, or sauteed greens."
      ],
      cookingTips: ["Let the onions soften well before adding spices.", "Red lentils thicken quickly, so watch the liquid level.", "This stew often tastes better after a short rest."],
      storageTips: ["Refrigerate for 4 days.", "Freeze in portions for up to 2 months."],
      healthBenefits: ["Red lentils provide plant protein and fiber.", "One-pot lentil dishes are practical for meal prep.", "Strong spice flavor helps keep the dish satisfying without heavy fats."],
      faqs: [{ question: "Can I reduce the spice?", answer: "Yes. Start with less berbere and add more after tasting." }, { question: "What should I serve with it?", answer: "Flatbread, rice, or greens all work well." }, { question: "Can I use brown lentils?", answer: "Yes, but the cooking time and final texture will be different." }],
      trendingScore: 81,
      publishedAt: "2026-05-13T09:30:00.000Z",
      updatedAt: "2026-05-16T12:10:00.000Z",
      relatedSlugs: ["lebanese-mujadara", "moroccan-lemon-olive-chickpea-tagine"],
    },
    7
  ),
  buildWorldRecipe(
    {
      slug: "brazilian-coconut-pepper-stew",
      title: "Brazilian Coconut Pepper Stew",
      cuisine: "Brazilian",
      country: "Brazil",
      category: "One-Pot Meals",
      diet: ["vegetarian", "gluten-free"],
      difficulty: "Easy",
      prepMinutes: 15,
      cookMinutes: 25,
      servings: 4,
      nutrition: { calories: 344, protein: "9 g", carbs: "21 g", fat: "25 g", fiber: "5 g", sugar: "7 g", sodium: "520 mg" },
      heroImage: "/images/recipes/category-one-pot.svg",
      imageAlt: "Brazilian-style coconut pepper stew with herbs.",
      excerpt: "A Brazilian-inspired coconut and pepper stew with bright herbs and silky texture.",
      description: "This Brazilian-inspired coconut pepper stew combines sweet peppers, tomatoes, herbs, and coconut richness into a colorful pot that feels sunny, generous, and deeply spoonable.",
      history: "Brazilian coastal stews often emphasize bright color, coconut richness, peppers, and fresh herb finishes, creating dishes that feel both celebratory and comforting.",
      tags: ["brazilian stew", "coconut stew", "pepper stew", "vegetarian comfort"],
      ingredients: [{ amount: "1 tbsp", item: "olive oil" }, { amount: "1", item: "onion, sliced" }, { amount: "2", item: "bell peppers, sliced" }, { amount: "2 cloves", item: "garlic" }, { amount: "1 cup", item: "crushed tomatoes" }, { amount: "1 can", item: "coconut milk" }, { amount: "1 tbsp", item: "lime juice" }, { amount: "1/4 cup", item: "cilantro" }, { amount: "1 tsp", item: "paprika" }],
      steps: [
        "Soften onion and peppers until they smell sweet and begin to relax.",
        "Add garlic and paprika briefly so the aromatics open without burning.",
        "Pour in tomatoes and coconut milk, then simmer until the stew turns silky and lightly thick.",
        "Season carefully so the coconut richness does not mute the savory profile.",
        "Finish with lime and cilantro for a fresher final lift.",
        "Serve with rice or bread to absorb the sauce."
      ],
      cookingTips: ["Do not skip the acidic finish because it sharpens the coconut base.", "A little extra chili can be added if you want more warmth.", "Serve immediately while the sauce feels glossy and fresh."],
      storageTips: ["Refrigerate for up to 3 days.", "Reheat gently so the coconut sauce stays smooth."],
      healthBenefits: ["Pepper-heavy stews add color and vegetable variety.", "Coconut creates richness without dairy.", "Pairs well with rice for an easy filling meal."],
      faqs: [{ question: "Can I add beans?", answer: "Yes. White beans or black-eyed peas fit nicely." }, { question: "Can I add seafood?", answer: "Yes, but adjust the cooking time and add it near the end." }, { question: "What rice works best?", answer: "Plain white rice is the easiest and most traditional-feeling pairing." }],
      trendingScore: 80,
      publishedAt: "2026-05-13T12:20:00.000Z",
      updatedAt: "2026-05-16T16:10:00.000Z",
      relatedSlugs: ["thai-green-coconut-curry", "mango-chili-tostadas"],
    },
    8
  ),
  buildWorldRecipe(
    {
      slug: "vietnamese-herb-pho-chay",
      title: "Vietnamese Herb Pho Chay",
      cuisine: "Vietnamese",
      country: "Vietnam",
      category: "Soups and Bowls",
      diet: ["vegan", "gluten-free"],
      difficulty: "Intermediate",
      prepMinutes: 25,
      cookMinutes: 35,
      servings: 4,
      nutrition: { calories: 298, protein: "8 g", carbs: "49 g", fat: "7 g", fiber: "4 g", sugar: "6 g", sodium: "690 mg" },
      heroImage: "/images/recipes/category-soups-bowls.svg",
      imageAlt: "Vietnamese-style vegetarian pho with herbs and noodles.",
      excerpt: "A Vietnamese-inspired herb-rich noodle soup with fragrant broth and fresh garnish contrast.",
      description: "This Vietnamese-inspired pho chay uses aromatic broth-building ingredients, rice noodles, mushrooms, and lots of fresh herbs to create a bowl that feels light, fragrant, and deeply restorative.",
      history: "Vegetarian pho variations rely on broth clarity, aromatic layering, and fresh garnish abundance. The final bowl depends as much on finishing herbs as on the simmered stock itself.",
      tags: ["pho chay", "vietnamese soup", "rice noodle soup", "vegan broth"],
      ingredients: [{ amount: "1", item: "onion, halved" }, { amount: "1 piece", item: "ginger, sliced" }, { amount: "5 cups", item: "vegetable stock" }, { amount: "1 tbsp", item: "soy sauce" }, { amount: "1 star", item: "anise" }, { amount: "8 oz", item: "rice noodles" }, { amount: "1 cup", item: "mushrooms, sliced" }, { amount: "1 cup", item: "bean sprouts" }, { amount: "1/2 cup", item: "basil, cilantro, and mint" }, { amount: "1", item: "lime" }],
      steps: [
        "Char or deeply brown the onion and ginger for a more aromatic broth base.",
        "Simmer the stock with soy and warm spices until fragrant but still clean-tasting.",
        "Cook the noodles separately so the broth stays clear and elegant.",
        "Add mushrooms near the end so they stay tender rather than rubbery.",
        "Build each bowl with noodles first, then pour over the hot broth.",
        "Finish generously with herbs, sprouts, and lime."
      ],
      cookingTips: ["Separate noodle cooking helps the broth stay clean.", "Do not overdo the spices or the broth can become heavy.", "Fresh herbs are part of the structure, not just garnish."],
      storageTips: ["Store broth, noodles, and herbs separately.", "Broth keeps well for 3 days refrigerated."],
      healthBenefits: ["Herb-rich broths can feel light but still satisfying.", "Rice noodles and mushrooms keep the bowl approachable for many diets.", "Fresh herbs and lime add brightness without heaviness."],
      faqs: [{ question: "Can I add tofu?", answer: "Yes. Crisped tofu works very well in this soup." }, { question: "What mushrooms are best?", answer: "Shiitake and oyster mushrooms both add nice depth." }, { question: "Can I make it ahead?", answer: "Yes, especially if you keep the noodles and garnishes separate." }],
      trendingScore: 86,
      publishedAt: "2026-05-13T15:00:00.000Z",
      updatedAt: "2026-05-16T17:00:00.000Z",
      relatedSlugs: ["miso-butter-ramen", "thai-green-coconut-curry"],
    },
    9
  ),
  buildWorldRecipe(
    {
      slug: "german-mushroom-spaetzle-skillet",
      title: "German Mushroom Spaetzle Skillet",
      cuisine: "German",
      country: "Germany",
      category: "Pasta and Noodles",
      diet: ["vegetarian"],
      difficulty: "Intermediate",
      prepMinutes: 20,
      cookMinutes: 20,
      servings: 4,
      nutrition: { calories: 476, protein: "16 g", carbs: "51 g", fat: "23 g", fiber: "4 g", sugar: "4 g", sodium: "540 mg" },
      heroImage: "/images/recipes/category-pasta.svg",
      imageAlt: "German-style spaetzle skillet with mushrooms and herbs.",
      excerpt: "A hearty German-inspired skillet of spaetzle, mushrooms, butter, and savory onion depth.",
      description: "This German-inspired mushroom spaetzle skillet brings together tender noodles, caramelized onions, browned mushrooms, and buttery savory depth for a dish that feels cozy, practical, and deeply satisfying.",
      history: "Spaetzle dishes are beloved for their rustic comfort and flexibility. Pan-finishing with mushrooms and onions is a natural way to turn the noodles into a complete meal.",
      tags: ["spaetzle", "german comfort food", "mushroom skillet", "buttery noodles"],
      ingredients: [{ amount: "14 oz", item: "spaetzle" }, { amount: "1 tbsp", item: "butter" }, { amount: "1 tbsp", item: "oil" }, { amount: "1", item: "onion, sliced" }, { amount: "10 oz", item: "mushrooms, sliced" }, { amount: "1/3 cup", item: "vegetable stock" }, { amount: "1/4 cup", item: "parsley" }, { amount: "salt and pepper", item: "to taste" }],
      steps: [
        "Brown the onion slowly so it becomes sweet and deeply savory.",
        "Cook the mushrooms until their moisture cooks off and the edges begin to color.",
        "Warm the spaetzle separately if needed so it can join the skillet without breaking.",
        "Add stock and butter to create a light glossy coating rather than a heavy sauce.",
        "Toss until everything feels cohesive and lightly shiny.",
        "Finish with parsley and pepper for freshness."
      ],
      cookingTips: ["Browned mushrooms are essential for depth.", "Do not drown the skillet in stock or the noodles lose their texture.", "Pepper and parsley give the heavy flavors some lift."],
      storageTips: ["Refrigerate for 3 days.", "Reheat in a skillet for best texture."],
      healthBenefits: ["Mushrooms add savory depth without relying only on cheese or cream.", "A skillet meal like this can be balanced with a sharp salad.", "Good for cool-weather comfort without complicated technique."],
      faqs: [{ question: "Can I use egg noodles?", answer: "Yes, though spaetzle gives the most authentic chewy-soft texture." }, { question: "Can I add cheese?", answer: "Absolutely. Gruyere-style cheeses work nicely in small amounts." }, { question: "What herbs work well?", answer: "Parsley and chives are both classic partners." }],
      trendingScore: 76,
      publishedAt: "2026-05-13T18:10:00.000Z",
      updatedAt: "2026-05-16T18:20:00.000Z",
      relatedSlugs: ["pistachio-pesto-pasta", "chinese-garlic-sesame-noodles"],
    },
    10
  ),
  buildWorldRecipe(
    {
      slug: "french-ratatouille-bake",
      title: "French Ratatouille Bake",
      cuisine: "French",
      country: "France",
      category: "One-Pot Meals",
      diet: ["vegan", "gluten-free"],
      difficulty: "Intermediate",
      prepMinutes: 25,
      cookMinutes: 45,
      servings: 5,
      nutrition: { calories: 232, protein: "5 g", carbs: "19 g", fat: "15 g", fiber: "6 g", sugar: "10 g", sodium: "360 mg" },
      heroImage: "/images/recipes/category-one-pot.svg",
      imageAlt: "French ratatouille bake with layered vegetables and herbs.",
      excerpt: "A French-inspired vegetable bake with tomato depth, olive oil, and elegant herb finish.",
      description: "This French-inspired ratatouille bake layers eggplant, zucchini, tomatoes, peppers, and herbs into a dish that feels rustic, polished, and naturally beautiful on the table.",
      history: "Ratatouille is celebrated for transforming peak-season vegetables into something richer and more cohesive through patient cooking and olive oil-led flavor.",
      tags: ["ratatouille", "french vegetables", "baked vegetables", "vegan dinner"],
      ingredients: [{ amount: "1", item: "eggplant, sliced" }, { amount: "2", item: "zucchini, sliced" }, { amount: "3", item: "tomatoes, sliced" }, { amount: "1", item: "bell pepper, diced" }, { amount: "1", item: "onion, diced" }, { amount: "3 cloves", item: "garlic" }, { amount: "3 tbsp", item: "olive oil" }, { amount: "1 tsp", item: "thyme or herbes de Provence" }, { amount: "salt and pepper", item: "to taste" }],
      steps: [
        "Cook onion, pepper, and garlic into a lightly sweet base layer.",
        "Spread the tomato-rich base into a baking dish.",
        "Layer sliced vegetables tightly so they cook evenly and look elegant.",
        "Brush with olive oil and herbs, then bake until tender and lightly concentrated.",
        "Rest briefly before serving so the juices settle.",
        "Serve warm with bread, grains, or grilled protein."
      ],
      cookingTips: ["Salt eggplant lightly if it seems very watery.", "Tight layering improves both appearance and texture.", "Resting helps the bake slice more cleanly."],
      storageTips: ["Keeps well for 4 days refrigerated.", "Also tastes good at room temperature the next day."],
      healthBenefits: ["Vegetable-baked dishes add variety and color with relatively light ingredients.", "Olive oil and herbs create fullness without heavy sauces.", "Pairs well with beans or grains for a balanced meal."],
      faqs: [{ question: "Can I make it ahead?", answer: "Yes. It reheats very well and can even taste better after resting overnight." }, { question: "Do I need cheese?", answer: "No. The classic vegetable profile stands well on its own." }, { question: "Can I serve it cold?", answer: "Yes, especially as part of a summer spread." }],
      trendingScore: 82,
      publishedAt: "2026-05-14T09:10:00.000Z",
      updatedAt: "2026-05-16T19:20:00.000Z",
      relatedSlugs: ["greek-lemon-herb-potatoes", "moroccan-lemon-olive-chickpea-tagine"],
    },
    11
  ),
];

export const recipes: Recipe[] = [...foundationRecipes, ...generatedWorldRecipes];

export const trendingRecipes = [...recipes]
  .sort((left, right) => right.trendingScore - left.trendingScore)
  .slice(0, 8);

export const latestRecipes = [...recipes]
  .sort(
    (left, right) =>
      new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime()
  )
  .slice(0, 8);

export const videoRecipes = recipes.map((recipe) => ({
  slug: recipe.slug,
  title: recipe.videoPlan.title,
  thumbnail: recipe.videoPlan.thumbnail,
  hook: recipe.videoPlan.hook,
  duration: recipe.videoPlan.duration,
}));

export function findRecipe(slug: string) {
  return recipes.find((recipe) => recipe.slug === slug);
}
