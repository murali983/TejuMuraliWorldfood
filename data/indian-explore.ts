import {
  indianDishArchive,
  indianStateCuisines,
  totalIndianArchiveEntryCount,
} from "@/data/indian-catalog";
import type {
  IndianBrowseCategory,
  IndianDishArchiveEntry,
  IndianRegionShowcase,
} from "@/lib/types";

const southStates = [
  "Andhra Pradesh",
  "Telangana",
  "Tamil Nadu",
  "Kerala",
  "Karnataka",
  "Puducherry",
  "Lakshadweep",
];

const northStates = [
  "Punjab",
  "Delhi",
  "Uttar Pradesh",
  "Rajasthan",
  "Haryana",
  "Himachal Pradesh",
  "Uttarakhand",
  "Jammu and Kashmir",
  "Ladakh",
  "Chandigarh",
];

const eastStates = [
  "West Bengal",
  "Odisha",
  "Bihar",
  "Jharkhand",
  "Sikkim",
  "Assam",
  "Meghalaya",
  "Tripura",
  "Nagaland",
  "Manipur",
  "Mizoram",
  "Arunachal Pradesh",
];

const westStates = [
  "Maharashtra",
  "Gujarat",
  "Goa",
  "Dadra and Nagar Haveli and Daman and Diu",
];

const centralStates = [
  "Madhya Pradesh",
  "Chhattisgarh",
];

export const indianBrowseCategories: IndianBrowseCategory[] = [
  {
    slug: "veg-recipes",
    title: "Veg Recipes",
    description:
      "Paneer, dal, sambar, avial, kurma, and other vegetarian Indian recipes from every region.",
    image: "/images/recipes/category-one-pot.svg",
  },
  {
    slug: "non-veg-recipes",
    title: "Non-Veg Recipes",
    description:
      "Chicken, mutton, fish, egg, and seafood archive entries across Indian states and special styles.",
    image: "/images/brand/home-hero.png",
  },
  {
    slug: "breakfast",
    title: "Breakfast",
    description:
      "Idli, dosa, poha, upma, pongal, paratha, puri, and tiffin-focused Indian breakfast ideas.",
    image: "/images/recipes/category-soups-bowls.svg",
  },
  {
    slug: "main-course",
    title: "Main Course",
    description:
      "Curries, gravies, biryanis, pulaos, and dinner-centered Indian meal entries.",
    image: "/images/recipes/category-one-pot.svg",
  },
  {
    slug: "street-food",
    title: "Street Food",
    description:
      "Chaat, pavs, rolls, bajji, panipuri, and bazaar-style Indian street food entries.",
    image: "/images/recipes/category-street-food.svg",
  },
  {
    slug: "desserts",
    title: "Desserts",
    description:
      "Laddu, halwa, kheer, payasam, mithai, and celebration sweets from across India.",
    image: "/images/recipes/category-desserts.svg",
  },
  {
    slug: "rice",
    title: "Rice",
    description:
      "Biryani, pulao, pulihora, pongal, rice plates, and region-specific Indian rice dishes.",
    image: "/images/recipes/category-rice-dishes.svg",
  },
  {
    slug: "curries",
    title: "Curries",
    description:
      "Vegetarian and non-vegetarian Indian curry archive entries with regional masala styles.",
    image: "/images/recipes/category-one-pot.svg",
  },
  {
    slug: "snacks",
    title: "Snacks",
    description:
      "Tea-time bites, savory snacks, tiffin plates, and crunchy festival-friendly nibbles.",
    image: "/images/recipes/category-street-food.svg",
  },
  {
    slug: "drinks",
    title: "Drinks",
    description:
      "Lassi, buttermilk, kahwa, filter coffee, falooda, and classic Indian beverage entries.",
    image: "/images/recipes/category-soups-bowls.svg",
  },
];

export const indianRegionShowcases: IndianRegionShowcase[] = [
  {
    slug: "south-india",
    title: "South India",
    description:
      "Dosa, biryani, appam, sambar, pongal, neer dosa, and many rice- and tiffin-led specialties.",
    image: "/images/recipes/hyderabadi-veg-dum-biryani.png",
    states: southStates,
  },
  {
    slug: "north-india",
    title: "North India",
    description:
      "Paratha, butter chicken, chole, dal makhani, rogan josh, kebabs, and festive breads.",
    image: "/images/brand/home-hero.png",
    states: northStates,
  },
  {
    slug: "east-india",
    title: "East India",
    description:
      "Pitha, fish curries, mustard-forward dishes, sweets, khar, dalma, and rice classics.",
    image: "/images/recipes/category-rice-dishes.svg",
    states: eastStates,
  },
  {
    slug: "west-india",
    title: "West India",
    description:
      "Dhokla, misal pav, undhiyu, vada pav, coastal curries, shrikhand, and sweet-savory thalis.",
    image: "/images/recipes/category-street-food.svg",
    states: westStates,
  },
];

export function filterIndianArchiveByBrowseCategory(slug: string) {
  switch (slug) {
    case "veg-recipes":
      return indianDishArchive.filter((entry) => entry.diet === "Veg");
    case "non-veg-recipes":
      return indianDishArchive.filter((entry) => entry.diet === "Non-Veg");
    case "breakfast":
      return indianDishArchive.filter((entry) => entry.category === "Breakfast");
    case "main-course":
      return indianDishArchive.filter((entry) =>
        ["Main Course", "Rice Dish", "Bread"].includes(entry.category)
      );
    case "street-food":
      return indianDishArchive.filter((entry) =>
        ["Street Food", "Snack"].includes(entry.category)
      );
    case "desserts":
      return indianDishArchive.filter((entry) => entry.category === "Dessert");
    case "rice":
      return indianDishArchive.filter((entry) => entry.category === "Rice Dish");
    case "curries":
      return indianDishArchive.filter((entry) =>
        ["Main Course", "Seafood"].includes(entry.category)
      );
    case "snacks":
      return indianDishArchive.filter((entry) =>
        ["Snack", "Street Food", "Side Dish"].includes(entry.category)
      );
    case "drinks":
      return indianDishArchive.filter((entry) =>
        ["Beverage", "Condiment"].includes(entry.category)
      );
    case "healthy-recipes":
      return indianDishArchive.filter(
        (entry) =>
          entry.diet === "Veg" &&
          ["Breakfast", "Side Dish", "Beverage", "Staple"].includes(entry.category)
      );
    case "festival-foods":
      return indianDishArchive.filter(
        (entry) =>
          entry.angle.toLowerCase().includes("festival") || entry.category === "Dessert"
      );
    default:
      return [];
  }
}

export function findIndianBrowseCategory(slug: string) {
  return indianBrowseCategories.find((category) => category.slug === slug);
}

export function getIndianRegionEntries(slug: string) {
  const region = indianRegionShowcases.find((item) => item.slug === slug);

  if (!region) {
    return [];
  }

  return indianDishArchive.filter((entry) => region.states.includes(entry.stateTitle));
}

export const popularIndianFoodEntries = indianDishArchive.slice(0, 12);

export const southIndianSpecials = indianDishArchive.filter((entry) =>
  southStates.includes(entry.stateTitle)
).slice(0, 12);

export const northIndianSpecials = indianDishArchive.filter((entry) =>
  northStates.includes(entry.stateTitle)
).slice(0, 12);

export const streetFoodEntries = filterIndianArchiveByBrowseCategory("street-food").slice(0, 12);

export const festivalFoodEntries = filterIndianArchiveByBrowseCategory("festival-foods").slice(
  0,
  12
);

export const healthyFoodEntries = filterIndianArchiveByBrowseCategory("healthy-recipes").slice(
  0,
  12
);

export const featuredRegionEntries: Record<string, IndianDishArchiveEntry[]> = {
  "south-india": southIndianSpecials.slice(0, 6),
  "north-india": northIndianSpecials.slice(0, 6),
  "east-india": indianDishArchive
    .filter((entry) => eastStates.includes(entry.stateTitle))
    .slice(0, 6),
  "west-india": indianDishArchive
    .filter((entry) => westStates.includes(entry.stateTitle))
    .slice(0, 6),
};

export const allStatesSorted = indianStateCuisines
  .map((state) => state.title)
  .sort((left, right) => left.localeCompare(right));

export const indiaRegionGroups = [
  { id: "south-india", title: "South India", states: southStates },
  { id: "north-india", title: "North India", states: northStates },
  { id: "east-india", title: "East India", states: eastStates },
  { id: "west-india", title: "West India", states: westStates },
  { id: "central-india", title: "Central India", states: centralStates },
];

export const indianArchiveScaleCopy = `The Indian archive currently exposes ${totalIndianArchiveEntryCount.toLocaleString()} visible entries across categories, states, and regional variations.`;
