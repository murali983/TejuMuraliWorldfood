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
];

export const recipes: Recipe[] = [
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

export const trendingRecipes = [...recipes]
  .sort((left, right) => right.trendingScore - left.trendingScore)
  .slice(0, 4);

export const latestRecipes = [...recipes]
  .sort(
    (left, right) =>
      new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime()
  )
  .slice(0, 4);

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
