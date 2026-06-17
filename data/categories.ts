/**
 * ADD NEW SCHOOL STAGES / YEAR GROUPS HERE
 * Each stage can have its own product collection.
 */
export const schoolStages = [
  {
    id: "fs1-fs2",
    name: "FS1 & FS2",
    slug: "fs1-fs2",
    description: "Foundation Stage uniforms for early learners",
    image: "/images/stages/fs1-fs2.svg",
  },
  {
    id: "year-1-6",
    name: "Year 1 to Year 6",
    slug: "year-1-6",
    description: "Primary school uniforms with grey polo options",
    image: "/images/stages/year-1-6.svg",
  },
  {
    id: "year-7-plus",
    name: "Year 7 and Above",
    slug: "year-7-plus",
    description: "Secondary school uniforms with mint blue-green accents",
    image: "/images/stages/year-7-plus.svg",
  },
] as const;

/**
 * ADD NEW PRODUCT CATEGORIES HERE
 */
export const productCategories = [
  {
    id: "standard-uniform",
    name: "Standard Uniform",
    slug: "standard-uniform",
    description: "Daily school wear - polo shirts and sweatpants",
    image: "/images/categories/standard.svg",
  },
  {
    id: "pe-uniform",
    name: "PE Uniform",
    slug: "pe-uniform",
    description: "Physical education t-shirts and sweatpants",
    image: "/images/categories/pe.svg",
  },
  {
    id: "training-suit",
    name: "Training Suit",
    slug: "training-suit",
    description: "Sports jackets and training sweatpants with stripes",
    image: "/images/categories/training.svg",
  },
  {
    id: "winter-uniform",
    name: "Winter Uniform",
    slug: "winter-uniform",
    description: "Warm sweatshirts, sweatpants, and hooded jackets",
    image: "/images/categories/winter.svg",
  },
] as const;

export type SchoolStageId = (typeof schoolStages)[number]["id"];
export type CategoryId = (typeof productCategories)[number]["id"];

export function getSchoolStageById(id: string) {
  return schoolStages.find((s) => s.id === id);
}

export function getCategoryById(id: string) {
  return productCategories.find((c) => c.id === id);
}

export function getSchoolStageName(id: string): string {
  return getSchoolStageById(id)?.name ?? id;
}

export function getCategoryName(id: string): string {
  return getCategoryById(id)?.name ?? id;
}
