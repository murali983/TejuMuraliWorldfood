import type {
  IndianDishArchiveEntry,
  IndianDishCatalogItem,
  IndianDishStatus,
  IndianStateCuisine,
} from "@/lib/types";

type IndianDishSeed = [
  name: string,
  category: string,
  description: string,
  status?: IndianDishStatus,
  recipeSlug?: string,
];

function buildState({
  slug,
  title,
  region,
  description,
  signatureNotes,
  dishes,
  catalogTarget = 70,
}: {
  slug: string;
  title: string;
  region: string;
  description: string;
  signatureNotes: string[];
  dishes: IndianDishSeed[];
  catalogTarget?: number;
}): IndianStateCuisine {
  return {
    slug,
    title,
    region,
    description,
    signatureNotes,
    catalogTarget,
    dishes: dishes.map(
      ([name, category, detail, status = "catalogued", recipeSlug]): IndianDishCatalogItem => ({
        name,
        category,
        description: detail,
        status,
        recipeSlug,
      })
    ),
  };
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const archiveAnglesByCategory: Record<string, string[]> = {
  Breakfast: [
    "Classic Breakfast",
    "Homestyle Plate",
    "Street-Style Morning",
    "Festival Breakfast",
    "Family Brunch",
    "Tiffin Center Style",
    "Weekend Special",
    "Quick Morning Version",
    "Protein-Friendly Style",
    "Travel-Friendly Plate",
    "Temple-Influenced Take",
    "Spicy Breakfast Cut",
    "Soft Texture Version",
    "Heritage Kitchen Style",
  ],
  "Rice Dish": [
    "Classic Rice Plate",
    "Homestyle Lunch",
    "Temple-Style Batch",
    "Festival Rice Version",
    "Family Feast Pot",
    "Travel Pack Style",
    "Sunday Special",
    "Wedding Menu Take",
    "One-Pot Shortcut",
    "Traditional Clay Pot Style",
    "Spicy Masala Finish",
    "Vegetable-Rich Version",
    "Ghee-Layered Plate",
    "Heritage Feast Style",
  ],
  "Main Course": [
    "Classic Curry Version",
    "Homestyle Pot",
    "Sunday Special",
    "Village-Style Batch",
    "Wedding Feast Style",
    "Family Dinner Version",
    "Restaurant-Style Take",
    "Festival Main",
    "Traditional House Style",
    "Slow-Cooked Version",
    "Spicy Masala Finish",
    "Mild Family Style",
    "Clay Pot Version",
    "Heritage Signature",
  ],
  Snack: [
    "Classic Snack",
    "Street Cart Style",
    "Tea-Time Batch",
    "Festival Snack Plate",
    "Crunchy Version",
    "Soft Bite Version",
    "Family Sharing Plate",
    "Evening Tiffin Style",
    "Travel Snack Version",
    "Party Platter Style",
    "Spicy Chatpata Finish",
    "Homestyle Batch",
    "Traditional Vendor Style",
    "Heritage Snack",
  ],
  "Street Food": [
    "Classic Street Plate",
    "Old Bazaar Style",
    "Crowd-Favorite Version",
    "Evening Market Style",
    "Festival Street Batch",
    "Loaded Topping Version",
    "Family Sharing Plate",
    "Travel Lane Style",
    "Spicy Vendor Finish",
    "Weekend Craving Version",
    "Homestyle Street Remix",
    "Quick Counter Style",
    "City Special Plate",
    "Heritage Street Classic",
  ],
  Dessert: [
    "Classic Sweet",
    "Festival Dessert",
    "Temple-Style Sweet",
    "Celebration Batch",
    "Rich Ghee Version",
    "Mini-Bite Format",
    "Wedding Sweet Style",
    "Gift Box Version",
    "Royal Dessert Take",
    "Homestyle Sweet Batch",
    "Travel-Friendly Sweet",
    "Slow-Cooked Heritage Style",
    "No-Frills Traditional Version",
    "Signature Celebration Sweet",
  ],
  Bread: [
    "Classic Bread",
    "Homestyle Flatbread",
    "Breakfast Bread Plate",
    "Festival Bread Version",
    "Travel-Friendly Bread",
    "Ghee-Roasted Style",
    "Stuffed Variation",
    "Family Meal Bread",
    "Restaurant-Style Bread",
    "Tandoor-Style Finish",
    "Village Kitchen Version",
    "Soft Texture Cut",
    "Crisp Edge Version",
    "Heritage Bread Style",
  ],
  Beverage: [
    "Classic Beverage",
    "Summer Cooler Style",
    "Festival Drink",
    "Breakfast Companion",
    "Street Stall Version",
    "Family Serving Batch",
    "Royal Drink Style",
    "Travel Flask Version",
    "Chilled Serving Style",
    "Warm Comfort Version",
    "Celebration Pour",
    "Temple-Inspired Serving",
    "Traditional Household Style",
    "Heritage Drink Profile",
  ],
  Condiment: [
    "Classic Condiment",
    "Homestyle Chutney Batch",
    "Spicy Table Version",
    "Festival Meal Companion",
    "Travel Jar Style",
    "Stone-Ground Version",
    "Family Meal Batch",
    "Breakfast Side Style",
    "Wedding Thali Accent",
    "Lunch Plate Companion",
    "Rustic Texture Finish",
    "Fine-Grind Version",
    "Traditional Pantry Style",
    "Heritage Condiment",
  ],
  Seafood: [
    "Classic Coastal Version",
    "Homestyle Curry Pot",
    "Spicy Fisherman Style",
    "Family Lunch Plate",
    "Festival Seafood Main",
    "Coconut-Rich Version",
    "Tawa Finish Style",
    "Clay Pot Seafood Batch",
    "Sunday Special",
    "Restaurant-Style Plate",
    "Beachside Take",
    "Travel Meal Style",
    "Traditional Harbor Version",
    "Heritage Seafood Signature",
  ],
  "Side Dish": [
    "Classic Side",
    "Homestyle Bowl",
    "Festival Side Dish",
    "Everyday Plate Companion",
    "Lunchbox Side",
    "Spicy Side Version",
    "Family Meal Batch",
    "Quick Weekday Side",
    "Traditional Side Plate",
    "Rustic House Style",
    "Mild Family Option",
    "Herb-Forward Version",
    "Village Meal Side",
    "Heritage Side Dish",
  ],
  Staple: [
    "Classic Staple",
    "Everyday Meal Base",
    "Homestyle Pot",
    "Festival Meal Base",
    "Travel-Friendly Serving",
    "Family Table Version",
    "Breakfast Staple Style",
    "Dinner Companion Version",
    "Village Kitchen Batch",
    "Traditional Comfort Version",
    "Mild Family Style",
    "High-Energy Serving",
    "Simple Heritage Format",
    "Signature Staple Version",
  ],
  "Noodle Soup": [
    "Classic Broth Bowl",
    "Homestyle Soup Pot",
    "Cold Weather Version",
    "Family Dinner Bowl",
    "Street Stall Style",
    "Festival Warm Bowl",
    "Hearty Protein Version",
    "Vegetable-Forward Bowl",
    "Traditional Soup Service",
    "Travel Comfort Bowl",
    "Mild Family Broth",
    "Spiced Broth Version",
    "Mountain Kitchen Style",
    "Heritage Noodle Bowl",
  ],
};

function getArchiveAngles(category: string) {
  return archiveAnglesByCategory[category] ?? [
    "Classic Version",
    "Homestyle Version",
    "Festival Version",
    "Family Style",
    "Traditional Take",
    "Weekend Special",
    "Travel-Friendly Style",
    "Restaurant-Style Finish",
    "Village Kitchen Style",
    "Celebration Plate",
    "Simple Everyday Version",
    "Spiced Signature Version",
    "Heritage Format",
    "Featured Archive Entry",
  ];
}

export const indianStateCuisines: IndianStateCuisine[] = [
  buildState({
    slug: "andhra-pradesh",
    title: "Andhra Pradesh",
    region: "South India",
    description:
      "Andhra cooking is known for assertive spice, tangy pickles, rice-centered meals, and festive sweets that balance heat with depth.",
    signatureNotes: ["Spicy kura dishes", "Pickles and podis", "Rice and lentil staples"],
    dishes: [
      ["Pesarattu", "Breakfast", "Green gram crepes with a savory, earthy finish."],
      ["Gongura Pachadi", "Condiment", "Tangy sorrel leaf chutney with a sharp regional identity."],
      ["Gutti Vankaya Kura", "Main Course", "Stuffed brinjal curry with peanut and sesame richness."],
      ["Pulihora", "Rice Dish", "Tamarind rice layered with peanuts, curry leaves, and fragrance."],
      ["Pootharekulu", "Dessert", "Delicate paper-thin sweet sheets wrapped around sugar and ghee."],
    ],
  }),
  buildState({
    slug: "arunachal-pradesh",
    title: "Arunachal Pradesh",
    region: "Northeast India",
    description:
      "Arunachal food traditions highlight mountain produce, fermentation, bamboo shoot flavors, and simple but nourishing broths.",
    signatureNotes: ["Bamboo shoot cooking", "Smoked ingredients", "Warm mountain comfort"],
    dishes: [
      ["Thukpa", "Noodle Soup", "A warming noodle broth suited to cool highland weather."],
      ["Zan", "Staple", "Millet-based comfort food with a rustic, sustaining character."],
      ["Pika Pila", "Condiment", "A fermented bamboo shoot and chili preparation with punch."],
      ["Lukter", "Side Dish", "Dried meat and chili mixture served in small flavorful portions."],
      ["Chura Sabzi", "Main Course", "Yogurt-based local curry with gentle, homestyle seasoning."],
    ],
  }),
  buildState({
    slug: "assam",
    title: "Assam",
    region: "Northeast India",
    description:
      "Assamese cuisine leans on fresh herbs, river fish, subtle spice, and souring techniques that keep meals bright and balanced.",
    signatureNotes: ["River fish classics", "Light spice use", "Tenga and khar traditions"],
    dishes: [
      ["Khar", "Main Course", "An alkaline signature dish built around banana peel ash."],
      ["Masor Tenga", "Seafood", "Light fish curry with a refreshing sour profile."],
      ["Aloo Pitika", "Side Dish", "Mashed potatoes with mustard oil, onion, and green chili."],
      ["Pitha", "Snack", "Rice-based festive cakes with sweet or savory fillings."],
      ["Duck Curry", "Main Course", "A rich Assamese duck preparation often paired with gourds."],
    ],
  }),
  buildState({
    slug: "bihar",
    title: "Bihar",
    region: "East India",
    description:
      "Bihari food combines fire-roasted textures, robust flours, ghee, jaggery, and deeply practical everyday cooking.",
    signatureNotes: ["Sattu pantry staples", "Roasted wheat flavors", "Festival sweets"],
    dishes: [
      ["Litti Chokha", "Main Course", "Roasted stuffed dough balls served with smoky mashed vegetables."],
      ["Thekua", "Dessert", "Jaggery-sweet festival biscuits with a rustic wheat texture."],
      ["Sattu Paratha", "Breakfast", "Flatbread filled with seasoned roasted gram flour."],
      ["Dal Pitha", "Snack", "Steamed rice dumplings filled with spiced lentils."],
      ["Khaja", "Dessert", "Layered flaky sweet associated with pilgrimage and celebration."],
    ],
  }),
  buildState({
    slug: "chhattisgarh",
    title: "Chhattisgarh",
    region: "Central India",
    description:
      "Chhattisgarhi kitchens celebrate rice flours, forest ingredients, light gravies, and everyday dishes that feel wholesome and local.",
    signatureNotes: ["Rice flour snacks", "Forest produce", "Simple village comfort"],
    dishes: [
      ["Chila", "Breakfast", "Soft savory crepes often made from rice and lentils."],
      ["Faraa", "Snack", "Steamed dumplings with a clean, filling household appeal."],
      ["Dubki Kadhi", "Main Course", "Yogurt curry with dumplings and a gentle tang."],
      ["Muthia", "Snack", "Spiced steamed bites with grain-forward flavor."],
      ["Bafauri", "Snack", "Oil-light chana dal fritters packed with simple spice."],
    ],
  }),
  buildState({
    slug: "goa",
    title: "Goa",
    region: "West India",
    description:
      "Goan food balances coastal seafood, vinegar tang, coconut richness, and festive desserts shaped by layered culinary histories.",
    signatureNotes: ["Coastal seafood", "Coconut and vinegar", "Bakery and dessert culture"],
    dishes: [
      ["Goan Fish Curry", "Seafood", "A coconut-rich curry with tangy coastal character."],
      ["Prawn Balchao", "Condiment", "Bold prawn pickle with heat, vinegar, and spice."],
      ["Bebinca", "Dessert", "Layered dessert baked patiently for a dense festive finish."],
      ["Sorpotel", "Main Course", "A celebratory stew known for punchy spice and acidity."],
      ["Poi", "Bread", "A beloved local bread with a light, airy crumb."],
    ],
  }),
  buildState({
    slug: "gujarat",
    title: "Gujarat",
    region: "West India",
    description:
      "Gujarati food blends sweet, sour, and savory notes with farsan culture, seasonal vegetables, and elegant thali structure.",
    signatureNotes: ["Sweet-savory balance", "Farsan variety", "Seasonal thalis"],
    dishes: [
      ["Undhiyu", "Main Course", "A winter mixed-vegetable classic cooked with spice and care."],
      ["Khaman", "Snack", "Soft gram flour steamed cakes with a bright tempering."],
      ["Handvo", "Snack", "Savory baked lentil cake with crackled top texture."],
      ["Thepla", "Bread", "Travel-friendly spiced flatbread loved across Gujarat."],
      ["Mohanthal", "Dessert", "Rich gram flour fudge scented with ghee and cardamom."],
    ],
  }),
  buildState({
    slug: "haryana",
    title: "Haryana",
    region: "North India",
    description:
      "Haryanvi cooking is hearty and dairy-rich, built around grains, rustic sabzis, and satisfying farm-style flavors.",
    signatureNotes: ["Rural comfort food", "Dairy-rich sides", "Millet and wheat staples"],
    dishes: [
      ["Bajra Khichri", "Main Course", "Millet and lentil comfort food with homestead warmth."],
      ["Bathua Raita", "Side Dish", "Cooling yogurt side with earthy winter greens."],
      ["Hara Dhania Cholia", "Main Course", "Fresh green chickpeas simmered with coriander-forward seasoning."],
      ["Besan Masala Roti", "Bread", "Robust gram flour flatbread for hearty everyday meals."],
      ["Mithe Chawal", "Dessert", "Sweet festive rice perfumed with whole spices."],
    ],
  }),
  buildState({
    slug: "himachal-pradesh",
    title: "Himachal Pradesh",
    region: "North India",
    description:
      "Himachali food offers mountain hospitality through yogurt gravies, slow-cooked festive dishes, and wheat-based comfort classics.",
    signatureNotes: ["Mountain feasts", "Yogurt gravies", "Warming festival foods"],
    dishes: [
      ["Madra", "Main Course", "Yogurt-based curry traditionally built around legumes or chickpeas."],
      ["Siddu", "Bread", "Steamed stuffed bread served warm with ghee."],
      ["Tudkiya Bhath", "Rice Dish", "Spiced hill-style rice meal with deep festive aroma."],
      ["Chha Gosht", "Main Course", "A rich yogurt mutton curry from Himachali kitchens."],
      ["Mittha", "Dessert", "Sweet saffron rice with nuts and celebratory appeal."],
    ],
  }),
  buildState({
    slug: "jharkhand",
    title: "Jharkhand",
    region: "East India",
    description:
      "Jharkhandi food showcases forest produce, rice-based breads, earthy mushrooms, and sustaining regional staples.",
    signatureNotes: ["Forest ingredients", "Rice breads", "Tribal food traditions"],
    dishes: [
      ["Dhuska", "Snack", "Fried rice and lentil bread served with chutney or curry."],
      ["Rugra Curry", "Main Course", "A prized mushroom preparation with earthy depth."],
      ["Chilka Roti", "Bread", "Rice-lentil flatbread with rustic bite and balance."],
      ["Arsa Roti", "Dessert", "Jaggery-sweet rice cakes linked to festive cooking."],
      ["Handia", "Beverage", "Traditional fermented rice drink central to many communities."],
    ],
  }),
  buildState({
    slug: "karnataka",
    title: "Karnataka",
    region: "South India",
    description:
      "Karnataka cuisine ranges from temple-style comfort to coastal breakfasts and millet-led meals with careful seasoning.",
    signatureNotes: ["Tiffin culture", "Millet traditions", "Coastal and Mysuru influences"],
    dishes: [
      ["Bisi Bele Bath", "Rice Dish", "A lentil-rice classic with vegetables and layered spice."],
      ["Mysore Masala Dosa", "Breakfast", "Crisp dosa with red chutney and potato filling."],
      ["Neer Dosa", "Breakfast", "Soft lacy rice crepes from the coastal belt."],
      ["Ragi Mudde", "Staple", "Finger millet balls served with bold gravies."],
      ["Dharwad Peda", "Dessert", "Milk fudge known for its caramelized depth."],
    ],
  }),
  buildState({
    slug: "kerala",
    title: "Kerala",
    region: "South India",
    description:
      "Kerala's food culture brings together coconut, black pepper, seafood, banana leaf feasts, and comforting breakfasts.",
    signatureNotes: ["Coconut-rich gravies", "Banana leaf meals", "Coastal breakfasts"],
    dishes: [
      ["Appam with Stew", "Breakfast", "Soft lacy hoppers paired with aromatic coconut stew."],
      ["Puttu Kadala Curry", "Breakfast", "Steamed rice cylinders served with black chickpea curry."],
      ["Avial", "Main Course", "Mixed vegetable coconut curry central to festive sadya meals."],
      ["Malabar Parotta", "Bread", "Layered flatbread famous for its flaky texture."],
      ["Ada Pradhaman", "Dessert", "A deep jaggery and coconut milk payasam."],
    ],
  }),
  buildState({
    slug: "madhya-pradesh",
    title: "Madhya Pradesh",
    region: "Central India",
    description:
      "Madhya Pradesh cooking balances snack culture, grain comfort, festive sweets, and practical homestyle dishes.",
    signatureNotes: ["Street snack favorites", "Ghee-led comfort", "Wheat and maize staples"],
    dishes: [
      ["Poha Jalebi", "Breakfast", "A beloved sweet-savory breakfast combination from the state."],
      ["Bhutte Ka Kees", "Snack", "Grated corn cooked gently with milk and spices."],
      ["Dal Bafla", "Main Course", "Ghee-finished wheat dumplings served with lentils."],
      ["Sabudana Khichdi", "Breakfast", "Tapioca pearls tempered with peanuts and green chili."],
      ["Mawa Bati", "Dessert", "Rich khoya sweet popular during celebrations."],
    ],
  }),
  buildState({
    slug: "maharashtra",
    title: "Maharashtra",
    region: "West India",
    description:
      "Maharashtrian food spans fiery city snacks, coastal curries, millet breads, and festival sweets with strong local identity.",
    signatureNotes: ["Street food culture", "Coastal spice", "Festival sweets and breads"],
    dishes: [
      ["Misal Pav", "Street Food", "Spicy sprouts curry topped with farsan and served with bread."],
      ["Puran Poli", "Dessert", "Sweet lentil-stuffed flatbread with festive significance."],
      ["Bharli Vangi", "Main Course", "Stuffed eggplant curry with peanut-coconut masala."],
      ["Thalipeeth", "Breakfast", "Multigrain flatbread with a nutty, satisfying texture."],
      ["Ukadiche Modak", "Dessert", "Steamed rice dumplings with coconut jaggery filling."],
    ],
  }),
  buildState({
    slug: "manipur",
    title: "Manipur",
    region: "Northeast India",
    description:
      "Manipuri cuisine favors herbs, fermented depth, vegetables, fish, and balanced dishes that feel clean yet expressive.",
    signatureNotes: ["Herb-forward cooking", "Fermented notes", "Light but flavorful broths"],
    dishes: [
      ["Eromba", "Main Course", "Mashed vegetable dish finished with fermented fish and chili."],
      ["Singju", "Salad", "Crunchy herb and vegetable salad with sharp seasoning."],
      ["Chamthong", "Soup", "A light vegetable stew central to everyday meals."],
      ["Chak-Hao Kheer", "Dessert", "Black rice pudding with fragrant, nutty sweetness."],
      ["Nga Thongba", "Seafood", "Fish curry with local flavorings and gentle spice."],
    ],
  }),
  buildState({
    slug: "meghalaya",
    title: "Meghalaya",
    region: "Northeast India",
    description:
      "Meghalaya offers smoky meats, fermented flavors, rice staples, and community-centered dishes with hill character.",
    signatureNotes: ["Smoky meats", "Rice-centered meals", "Khasi food traditions"],
    dishes: [
      ["Jadoh", "Rice Dish", "Khasi rice meal known for deep savory flavor."],
      ["Dohneiiong", "Main Course", "Pork cooked with black sesame for a dark, nutty finish."],
      ["Tungrymbai", "Main Course", "Fermented soybean dish with bold, earthy taste."],
      ["Pumaloi", "Staple", "Steamed powdered rice served with curries and meats."],
      ["Nakham Bitchi", "Soup", "A tangy soup made with dried fish and chili."],
    ],
  }),
  buildState({
    slug: "mizoram",
    title: "Mizoram",
    region: "Northeast India",
    description:
      "Mizo food traditions emphasize steamed cooking, mild seasoning, smoked components, and fresh local produce.",
    signatureNotes: ["Steamed cooking", "Smoked meats", "Fresh vegetable broths"],
    dishes: [
      ["Bai", "Main Course", "Mixed vegetable stew that represents Mizo homestyle cooking."],
      ["Sawhchiar", "Rice Dish", "Rice porridge-style comfort meal with gentle savory depth."],
      ["Vawksa Rep", "Main Course", "Smoked pork preparation with a robust local profile."],
      ["Chhangban Leh Kurtai", "Dessert", "Sticky rice cake paired with a simple sweet element."],
      ["Koat Pitha", "Snack", "Crisp banana-rice fritters with a tea-time feel."],
    ],
  }),
  buildState({
    slug: "nagaland",
    title: "Nagaland",
    region: "Northeast India",
    description:
      "Naga cuisines showcase smoking, fermentation, bamboo shoot use, and focused seasoning that lets ingredients speak clearly.",
    signatureNotes: ["Smoked flavors", "Fermented axone", "Bamboo shoot cooking"],
    dishes: [
      ["Smoked Pork with Bamboo Shoot", "Main Course", "A defining Naga dish with earthy depth and aroma."],
      ["Axone Chicken", "Main Course", "Chicken cooked with fermented soybean for intense savoriness."],
      ["Galho", "Rice Dish", "Comforting one-pot rice meal often finished with greens."],
      ["Hinkejvu", "Soup", "Minimalist stew featuring vegetables and clean seasoning."],
      ["Anishi", "Main Course", "Sun-dried yam leaves used in deeply regional curries."],
    ],
  }),
  buildState({
    slug: "odisha",
    title: "Odisha",
    region: "East India",
    description:
      "Odia food combines temple traditions, gentle spice, rice comfort, and a graceful balance of nutrition and simplicity.",
    signatureNotes: ["Temple food influence", "Rice comfort dishes", "Balanced vegetable cooking"],
    dishes: [
      ["Dalma", "Main Course", "Lentils cooked with vegetables in a balanced Odia style."],
      ["Pakhala Bhata", "Rice Dish", "Fermented rice comfort food served cool and refreshing."],
      ["Chhena Poda", "Dessert", "Baked cheese dessert with caramelized edges and depth."],
      ["Santula", "Main Course", "Light vegetable preparation prized for restraint and nutrition."],
      ["Khaja", "Dessert", "Layered sweet often associated with the Jagannath temple circuit."],
    ],
  }),
  buildState({
    slug: "punjab",
    title: "Punjab",
    region: "North India",
    description:
      "Punjabi food is generous, dairy-rich, tandoor-friendly, and known for satisfying breads, lentils, and festive sweets.",
    signatureNotes: ["Tandoor classics", "Dairy-rich gravies", "Farm-style abundance"],
    dishes: [
      ["Sarson da Saag", "Main Course", "Mustard greens stew served as a winter classic."],
      ["Amritsari Kulcha", "Bread", "Stuffed crisp bread with a strong street-food following."],
      ["Chole", "Main Course", "Spiced chickpea curry that anchors many Punjabi meals."],
      ["Kadhi Pakora", "Main Course", "Tangy yogurt curry with soft gram flour fritters."],
      ["Pinni", "Dessert", "Ghee-rich winter sweet built around flour and nuts."],
    ],
  }),
  buildState({
    slug: "rajasthan",
    title: "Rajasthan",
    region: "North India",
    description:
      "Rajasthani food uses pantry-smart methods, robust spice, long-keeping ingredients, and festival-worthy sweets from arid landscapes.",
    signatureNotes: ["Dry climate cooking", "Robust spice blends", "Royal dessert traditions"],
    dishes: [
      ["Dal Baati Churma", "Main Course", "Iconic trio of lentils, baked dough, and sweet crumble."],
      ["Gatte ki Sabzi", "Main Course", "Gram flour dumplings simmered in yogurt gravy."],
      ["Ker Sangri", "Main Course", "Desert beans and berries cooked with spice and oil."],
      ["Laal Maas", "Main Course", "Fiery red mutton curry with a regal legacy."],
      ["Ghevar", "Dessert", "Honeycomb-like festive sweet often linked to monsoon celebrations."],
    ],
  }),
  buildState({
    slug: "sikkim",
    title: "Sikkim",
    region: "Northeast India",
    description:
      "Sikkimese cuisine draws from mountain produce, fermented foods, noodle soups, and comforting shared plates.",
    signatureNotes: ["Mountain noodle soups", "Fermented greens", "Community comfort foods"],
    dishes: [
      ["Momos", "Snack", "Steamed dumplings that remain central to the regional food scene."],
      ["Thukpa", "Noodle Soup", "Hearty noodle soup shaped by cold-weather eating."],
      ["Phagshapa", "Main Course", "Pork and radish dish with warming local character."],
      ["Gundruk Soup", "Soup", "Fermented leafy greens turned into a bright, earthy broth."],
      ["Sel Roti", "Dessert", "Ring-shaped rice bread enjoyed during festive gatherings."],
    ],
  }),
  buildState({
    slug: "tamil-nadu",
    title: "Tamil Nadu",
    region: "South India",
    description:
      "Tamil food culture moves from temple prasadam to Chettinad spice, tiffin excellence, and rice-centered everyday nourishment.",
    signatureNotes: ["Tiffin mastery", "Chettinad flavors", "Rice and lentil structure"],
    dishes: [
      ["Sambar", "Main Course", "Lentil and tamarind stew that anchors daily meals."],
      ["Ven Pongal", "Breakfast", "Soft savory rice-lentil comfort with pepper and ghee."],
      ["Kuzhi Paniyaram", "Snack", "Fermented batter dumplings crisped in a special pan."],
      ["Chettinad Kuzhambu", "Main Course", "A spice-rich gravy with assertive Tamil depth."],
      ["Jigarthanda", "Dessert", "Madurai's layered chilled drink-dessert with rich texture."],
    ],
  }),
  buildState({
    slug: "telangana",
    title: "Telangana",
    region: "South India",
    description:
      "Telangana cuisine blends millet, fiery masalas, festival snacks, and Hyderabad's layered rice and curry traditions.",
    signatureNotes: ["Hyderabadi dum cooking", "Millet and rice staples", "Festival snack culture"],
    dishes: [
      [
        "Hyderabadi Veg Dum Biryani",
        "Rice Dish",
        "Layered saffron rice and masala vegetables finished with dum technique.",
        "live",
        "hyderabadi-veg-dum-biryani",
      ],
      ["Sarva Pindi", "Snack", "Savory rice flour skillet bread with peanuts and spice."],
      ["Sakinalu", "Snack", "Crisp festive rings made during major celebrations."],
      ["Kodi Kura", "Main Course", "Telangana-style chicken curry with deeper chili warmth."],
      ["Bagara Baingan", "Main Course", "Eggplant curry in a nutty sesame-peanut gravy."],
    ],
  }),
  buildState({
    slug: "tripura",
    title: "Tripura",
    region: "Northeast India",
    description:
      "Tripura's cuisine highlights bamboo shoots, smoked fish, local herbs, and simple but distinctive community dishes.",
    signatureNotes: ["Mui Borok staples", "Bamboo shoot flavors", "Local herb seasoning"],
    dishes: [
      ["Mui Borok", "Main Course", "A broad Tripuri food tradition rooted in local ingredients."],
      ["Chakhwi", "Main Course", "Bamboo shoot and vegetable dish with gentle earthy depth."],
      ["Gudok", "Main Course", "Fermented fish-based vegetable preparation with regional identity."],
      ["Wahan Mosdeng", "Side Dish", "Pork salad or relish with bright, spicy notes."],
      ["Mosdeng Serma", "Condiment", "Fresh chili chutney that sharpens everyday meals."],
    ],
  }),
  buildState({
    slug: "uttar-pradesh",
    title: "Uttar Pradesh",
    region: "North India",
    description:
      "Uttar Pradesh brings together Awadhi refinement, hearty breads, festive sweets, and famous street-food traditions.",
    signatureNotes: ["Awadhi elegance", "Street breakfast classics", "Historic sweet traditions"],
    dishes: [
      ["Awadhi Biryani", "Rice Dish", "Fragrant dum-style biryani shaped by Lucknow's legacy."],
      ["Bedmi Poori", "Breakfast", "Spiced poori paired with potato sabzi and pickles."],
      ["Tehri", "Rice Dish", "Spiced vegetable rice that feels practical and comforting."],
      ["Galouti Kebab", "Snack", "Silken kebabs famous for their delicate texture."],
      ["Petha", "Dessert", "Translucent sweet from Agra with a clear cooling bite."],
    ],
  }),
  buildState({
    slug: "uttarakhand",
    title: "Uttarakhand",
    region: "North India",
    description:
      "Uttarakhand food uses mountain grains, greens, yogurt, and practical dishes that suit cooler climates and rugged terrain.",
    signatureNotes: ["Mountain lentils", "Greens and grains", "Simple nourishing meals"],
    dishes: [
      ["Kafuli", "Main Course", "Leafy green curry with a soft, warming texture."],
      ["Aloo ke Gutke", "Side Dish", "Spiced hill potatoes often served with local breads."],
      ["Chainsoo", "Main Course", "Roasted black gram curry with deep earthy flavor."],
      ["Jhangora Kheer", "Dessert", "Barnyard millet pudding with a light delicate sweetness."],
      ["Bal Mithai", "Dessert", "Fudge-like local sweet coated with sugar pearls."],
    ],
  }),
  buildState({
    slug: "west-bengal",
    title: "West Bengal",
    region: "East India",
    description:
      "Bengali cuisine is expressive with mustard, fish, sweets, and layered meal progressions that move gracefully across textures.",
    signatureNotes: ["Mustard oil flavor", "Fish and sweets", "Refined home-style meals"],
    dishes: [
      ["Shorshe Ilish", "Seafood", "Hilsa in mustard sauce with sharp aromatic depth."],
      ["Cholar Dal", "Main Course", "Bengal gram lentils finished with sweet spice notes."],
      ["Kosha Mangsho", "Main Course", "Slow-cooked mutton curry with rich caramelized masala."],
      ["Mishti Doi", "Dessert", "Sweet cultured yogurt with a signature caramel tone."],
      ["Pithe", "Dessert", "Rice-based festive sweets prepared in many regional forms."],
    ],
  }),
  buildState({
    slug: "andaman-and-nicobar-islands",
    title: "Andaman and Nicobar Islands",
    region: "Union Territory",
    description:
      "Island cooking here leans on seafood, coconut, tropical produce, and practical meals shaped by coastal abundance.",
    signatureNotes: ["Island seafood", "Coconut gravies", "Tropical produce"],
    dishes: [
      ["Coconut Prawn Curry", "Seafood", "Prawns simmered in a smooth island-style coconut gravy."],
      ["Nicobari Fish Curry", "Seafood", "Simple fish curry shaped by local coastal cooking."],
      ["Breadfruit Curry", "Main Course", "Tropical breadfruit cooked into a mellow savory dish."],
      ["Banana Flower Fry", "Side Dish", "Banana blossom prepared with spicing and texture contrast."],
      ["Grilled Reef Fish", "Seafood", "Cleanly seasoned fish that highlights fresh island produce."],
    ],
  }),
  buildState({
    slug: "chandigarh",
    title: "Chandigarh",
    region: "Union Territory",
    description:
      "Chandigarh's food scene reflects Punjabi favorites, tandoor culture, cafe energy, and rich celebratory dishes.",
    signatureNotes: ["Punjabi city food", "Tandoor classics", "Cafe and dhaba culture"],
    dishes: [
      ["Butter Chicken", "Main Course", "Tomato-butter gravy dish beloved across North India."],
      ["Chole Bhature", "Street Food", "A city-favorite pairing of chickpeas and fried bread."],
      ["Paneer Tikka", "Snack", "Tandoor-charred paneer with smoky spice and yogurt."],
      ["Tandoori Fish", "Seafood", "Marinated fish roasted for color, char, and aroma."],
      ["Sweet Lassi", "Beverage", "Thick chilled yogurt drink central to Punjabi dining."],
    ],
  }),
  buildState({
    slug: "dadra-and-nagar-haveli-and-daman-and-diu",
    title: "Dadra and Nagar Haveli and Daman and Diu",
    region: "Union Territory",
    description:
      "This coastal union territory blends Gujarati, tribal, and Portuguese-influenced food habits with seafood and seasonal produce.",
    signatureNotes: ["Coastal seafood", "Gujarati influence", "Tribal food roots"],
    dishes: [
      ["Ubadiyu", "Main Course", "Slow-cooked mixed vegetables with earthy winter depth."],
      ["Daman Fish Curry", "Seafood", "Coastal curry balancing spice, tang, and freshness."],
      ["Prawn Pulao", "Rice Dish", "Seafood rice dish with aromatic local seasoning."],
      ["Coconut Sevai", "Dessert", "Soft sweet vermicelli preparation with island-style richness."],
      ["Patra", "Snack", "Rolled colocasia leaves with sweet, tangy, spiced filling."],
    ],
  }),
  buildState({
    slug: "delhi",
    title: "Delhi",
    region: "Union Territory",
    description:
      "Delhi food culture is intensely urban and diverse, famous for kebabs, chaat, curries, breads, and old-city sweets.",
    signatureNotes: ["Old Delhi street food", "Mughlai depth", "Paratha and chaat culture"],
    dishes: [
      ["Chole Bhature", "Street Food", "One of Delhi's defining breakfast and brunch staples."],
      ["Daulat ki Chaat", "Dessert", "Ephemeral winter milk foam dessert from Old Delhi."],
      ["Nihari", "Main Course", "Slow-cooked stew served with bread in historic neighborhoods."],
      ["Butter Chicken", "Main Course", "Restaurant-icon gravy dish born from Delhi's dining scene."],
      ["Stuffed Parathas", "Breakfast", "Griddled breads with varied fillings and enduring popularity."],
    ],
  }),
  buildState({
    slug: "jammu-and-kashmir",
    title: "Jammu and Kashmir",
    region: "Union Territory",
    description:
      "The region's cuisine carries wazwan richness, fragrant rice, yogurt gravies, and warming beverages suited to the climate.",
    signatureNotes: ["Wazwan influence", "Fragrant rice dishes", "Saffron and dried fruit notes"],
    dishes: [
      ["Rogan Josh", "Main Course", "Aromatic mutton curry with deep red color and warmth."],
      ["Dum Aloo", "Main Course", "Kashmiri potatoes braised in spiced yogurt gravy."],
      ["Modur Pulao", "Rice Dish", "Sweet-scented rice finished with nuts and saffron."],
      ["Nadru Yakhni", "Main Course", "Lotus stem curry with yogurt-based elegance."],
      ["Kahwa", "Beverage", "Saffron-spiced tea served with nuts and warmth."],
    ],
  }),
  buildState({
    slug: "ladakh",
    title: "Ladakh",
    region: "Union Territory",
    description:
      "Ladakhi food focuses on altitude-friendly nourishment through barley breads, broths, butter tea, and simple warming dishes.",
    signatureNotes: ["High-altitude nourishment", "Barley staples", "Broths and butter tea"],
    dishes: [
      ["Skyu", "Main Course", "Hand-rolled pasta stew built for mountain sustenance."],
      ["Thukpa", "Noodle Soup", "Noodle broth that suits cold Ladakhi evenings."],
      ["Khambir", "Bread", "Traditional whole wheat bread with a dense hearty crumb."],
      ["Butter Tea", "Beverage", "Salty tea blended for warmth and energy."],
      ["Chhurpi Stew", "Main Course", "Local cheese used in brothy dishes with rustic depth."],
    ],
  }),
  buildState({
    slug: "lakshadweep",
    title: "Lakshadweep",
    region: "Union Territory",
    description:
      "Lakshadweep cooking revolves around tuna, coconut, rice, and tropical flavors shaped by island life and seafaring traditions.",
    signatureNotes: ["Tuna traditions", "Coconut-rich cooking", "Island rice meals"],
    dishes: [
      ["Tuna Masala", "Seafood", "Spiced tuna preparation central to island kitchens."],
      ["Kinnathappam", "Dessert", "Soft steamed sweet made with rice and coconut."],
      ["Coconut Rice", "Rice Dish", "Fragrant rice preparation matched to seafood meals."],
      ["Breadfruit Curry", "Main Course", "Island produce simmered into comforting curry."],
      ["Fish Fry", "Seafood", "Simply seasoned coastal fish cooked for crisp edges."],
    ],
  }),
  buildState({
    slug: "puducherry",
    title: "Puducherry",
    region: "Union Territory",
    description:
      "Puducherry brings together Tamil foundations and French-era influences through seafood, sauces, cutlets, and bakery comfort.",
    signatureNotes: ["Franco-Tamil blend", "Seafood and stews", "Cafe and bakery culture"],
    dishes: [
      ["Pondicherry Fish Curry", "Seafood", "Tangy coastal curry shaped by local Tamil flavors."],
      ["Creole Vegetable Stew", "Main Course", "A gentle stew reflecting the town's mixed culinary heritage."],
      ["Prawn Varuval", "Seafood", "Spiced prawns sauteed until concentrated and savory."],
      ["Mutton Cutlet", "Snack", "Crumb-coated cutlets popular in old-school dining."],
      ["Coconut Milk Payasam", "Dessert", "Smooth festive sweet with a tropical finish."],
    ],
  }),
];

export const totalIndianStateCount = indianStateCuisines.length;

export const totalIndianSeededDishCount = indianStateCuisines.reduce(
  (sum, state) => sum + state.dishes.length,
  0
);

export const totalIndianCatalogTarget = indianStateCuisines.reduce(
  (sum, state) => sum + state.catalogTarget,
  0
);

export const totalIndianLiveDishCount = indianStateCuisines.reduce(
  (sum, state) => sum + state.dishes.filter((dish) => dish.status === "live").length,
  0
);

export const indianDishArchive: IndianDishArchiveEntry[] = indianStateCuisines.flatMap((state) =>
  state.dishes.flatMap((dish, dishIndex) =>
    getArchiveAngles(dish.category).map((angle, angleIndex) => ({
      id: `${state.slug}-${dishIndex + 1}-${angleIndex + 1}`,
      slug: `${state.slug}-${slugify(dish.name)}-${slugify(angle)}`,
      title: `${dish.name} | ${angle}`,
      baseDish: dish.name,
      stateSlug: state.slug,
      stateTitle: state.title,
      region: state.region,
      category: dish.category,
      status:
        dish.recipeSlug && angleIndex === 0
          ? "live"
          : angleIndex < 8
            ? "catalogued"
            : "planned",
      angle,
      description: `${angle} take on ${dish.name} from ${state.title}, grouped under the ${dish.category.toLowerCase()} archive so the India library can scale beyond sample content.`,
      recipeSlug: dish.recipeSlug && angleIndex === 0 ? dish.recipeSlug : undefined,
    }))
  )
);

export const totalIndianArchiveEntryCount = indianDishArchive.length;

export const featuredIndianArchiveEntries = indianDishArchive.filter((entry) =>
  [
    "andhra-pradesh",
    "telangana",
    "tamil-nadu",
    "kerala",
    "karnataka",
    "maharashtra",
  ].includes(entry.stateSlug)
).slice(0, 24);

export const indianArchiveCategories = Array.from(
  new Set(indianDishArchive.map((entry) => entry.category))
).sort();

export const indianFeaturedStates = indianStateCuisines.filter((state) =>
  [
    "andhra-pradesh",
    "telangana",
    "tamil-nadu",
    "kerala",
    "karnataka",
    "maharashtra",
  ].includes(state.slug)
);

export function findIndianStateCuisineBySlug(slug: string) {
  return indianStateCuisines.find((state) => state.slug === slug);
}
