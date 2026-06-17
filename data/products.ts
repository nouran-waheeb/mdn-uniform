/**
 * ADD NEW PRODUCTS HERE
 * EDIT PRODUCT PRICES HERE
 * EDIT PRODUCT DESCRIPTIONS HERE
 *
 * To add a product: copy an existing entry and update id, slug, name, price, etc.
 * To change images: update the `images` array paths (files in /public/products/)
 */
import type { SchoolStageId, CategoryId } from "./categories";

/** All available sizes - edit here to change sizes site-wide */
export const availableSizes = [
  "2",
  "4",
  "6",
  "8",
  "10",
  "12",
  "XS",
  "S",
  "M",
  "L",
  "XL",
] as const;

export type ProductSize = (typeof availableSizes)[number];

export interface ProductReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  description: string;
  longDescription: string;
  images: string[];
  sizes: ProductSize[];
  inStock: boolean;
  stockCount: number;
  sku: string;
  schoolStage: SchoolStageId;
  category: CategoryId;
  school?: string;
  isNew?: boolean;
  isFeatured?: boolean;
  tags: string[];
  reviews: ProductReview[];
  createdAt: string;
}

/** Helper to build image paths - CHANGE IMAGES by replacing files in /public/products/ */
function productImages(slug: string, count = 3): string[] {
  return Array.from({ length: count }, (_, i) =>
    i === 0
      ? `/products/${slug}.svg`
      : `/products/${slug}-${i + 1}.svg`
  );
}

/** Default reviews for demo */
const defaultReviews: ProductReview[] = [
  {
    id: "r1",
    author: "Sara M.",
    rating: 5,
    date: "2025-09-15",
    comment: "Excellent quality cotton. My son wears it all day comfortably.",
  },
  {
    id: "r2",
    author: "Ahmed K.",
    rating: 5,
    date: "2025-08-20",
    comment: "True to size and washes well. Will order again.",
  },
  {
    id: "r3",
    author: "Nour H.",
    rating: 4,
    date: "2025-07-10",
    comment: "Great uniform quality. Delivery was fast to Nasr City.",
  },
];

/** Product catalog - EDIT PRODUCT PRICES in the price field below */
const productCatalog: Omit<Product, "slug" | "images" | "sku" | "createdAt">[] = [
  // ========== FS1 & FS2 - STANDARD UNIFORM ==========
  {
    id: "fs1-white-polo-white-collar",
    name: "White Polo Shirt - White Collar",
    price: 250,
    description: "Crisp white polo with matching white collar. 100% cotton.",
    longDescription:
      "Our signature white polo shirt features a comfortable white collar, perfect for FS1 & FS2 students. Made from 100% premium cotton with IPS school crest embroidery. Soft, breathable, and allergy-free for sensitive skin.",
    sizes: [...availableSizes],
    inStock: true,
    stockCount: 45,
    schoolStage: "fs1-fs2",
    category: "standard-uniform",
    school: "IPS International Public Schools",
    isFeatured: true,
    tags: ["polo", "white", "standard", "cotton"],
    reviews: defaultReviews,
  },
  {
    id: "fs1-white-polo-navy-collar",
    name: "White Polo Shirt - Navy Collar",
    price: 250,
    description: "White polo with contrasting navy blue collar.",
    longDescription:
      "Classic white polo shirt with a sharp navy blue collar. Ideal for daily school wear. Features IPS embroidered crest and M.D.N quality tag.",
    sizes: [...availableSizes],
    inStock: true,
    stockCount: 38,
    schoolStage: "fs1-fs2",
    category: "standard-uniform",
    school: "IPS International Public Schools",
    isFeatured: true,
    tags: ["polo", "white", "navy-collar", "standard"],
    reviews: defaultReviews,
  },
  {
    id: "fs1-navy-sweatpants",
    name: "Navy Sweatpants",
    price: 300,
    description: "Comfortable navy jogger-style sweatpants with elastic cuffs.",
    longDescription:
      "Durable navy sweatpants with elastic waistband, drawstring, and ribbed ankle cuffs. IPS crest on upper thigh. Perfect for active school days.",
    sizes: [...availableSizes],
    inStock: true,
    stockCount: 52,
    schoolStage: "fs1-fs2",
    category: "standard-uniform",
    school: "IPS International Public Schools",
    tags: ["sweatpants", "navy", "standard"],
    reviews: defaultReviews,
  },
  // FS1 & FS2 - PE UNIFORM
  {
    id: "fs1-pe-tshirt",
    name: "Basic White PE T-Shirt",
    price: 180,
    description: "Lightweight white PE t-shirt with IPS crest.",
    longDescription:
      "Essential PE t-shirt in pure white cotton. Crew neck design with school crest embroidery. Breathable fabric for sports and physical education.",
    sizes: [...availableSizes],
    inStock: true,
    stockCount: 60,
    schoolStage: "fs1-fs2",
    category: "pe-uniform",
    school: "IPS International Public Schools",
    isNew: true,
    tags: ["pe", "t-shirt", "white"],
    reviews: defaultReviews,
  },
  {
    id: "fs1-pe-sweatpants",
    name: "Navy PE Sweatpants",
    price: 300,
    description: "Navy PE sweatpants with side stripes.",
    longDescription:
      "Athletic navy sweatpants with white side stripes. Elastic waist and cuffs for a secure fit during PE classes and sports activities.",
    sizes: [...availableSizes],
    inStock: true,
    stockCount: 40,
    schoolStage: "fs1-fs2",
    category: "pe-uniform",
    school: "IPS International Public Schools",
    tags: ["pe", "sweatpants", "navy"],
    reviews: defaultReviews,
  },
  // FS1 & FS2 - TRAINING SUIT
  {
    id: "fs1-training-sweatpants",
    name: "Training Sweatpants with Side Stripes",
    price: 400,
    description: "Navy training sweatpants with white side stripes.",
    longDescription:
      "Premium training sweatpants featuring dual white stripes along the legs. Matches our sports jacket for a complete training suit.",
    sizes: [...availableSizes],
    inStock: true,
    stockCount: 35,
    schoolStage: "fs1-fs2",
    category: "training-suit",
    school: "IPS International Public Schools",
    tags: ["training", "sweatpants", "stripes"],
    reviews: defaultReviews,
  },
  {
    id: "fs1-sports-jacket",
    name: "Sports Jacket with Sleeve Stripes",
    price: 550,
    description: "Full-zip navy sports jacket with white sleeve stripes.",
    longDescription:
      "Athletic bomber-style jacket with full-length zipper, ribbed collar, and dual white stripes on each sleeve. IPS crest on chest.",
    sizes: [...availableSizes],
    inStock: true,
    stockCount: 28,
    schoolStage: "fs1-fs2",
    category: "training-suit",
    school: "IPS International Public Schools",
    isFeatured: true,
    tags: ["training", "jacket", "stripes"],
    reviews: defaultReviews,
  },
  {
    id: "fs1-training-pe-tshirt",
    name: "Basic White PE T-Shirt (Training)",
    price: 180,
    description: "White PE t-shirt for training suit sets.",
    longDescription:
      "Matching white PE t-shirt to complete your training suit. Same premium cotton quality as our standard PE tee.",
    sizes: [...availableSizes],
    inStock: true,
    stockCount: 55,
    schoolStage: "fs1-fs2",
    category: "training-suit",
    school: "IPS International Public Schools",
    tags: ["training", "t-shirt", "white"],
    reviews: defaultReviews,
  },
  // FS1 & FS2 - WINTER UNIFORM
  {
    id: "fs1-white-sweatshirt",
    name: "White Sweatshirt",
    price: 400,
    description: "Warm white cotton sweatshirt for winter.",
    longDescription:
      "Cozy white sweatshirt with IPS crest. Perfect layer for cooler school days. Soft fleece interior for extra warmth.",
    sizes: [...availableSizes],
    inStock: true,
    stockCount: 30,
    schoolStage: "fs1-fs2",
    category: "winter-uniform",
    school: "IPS International Public Schools",
    tags: ["winter", "sweatshirt", "white"],
    reviews: defaultReviews,
  },
  {
    id: "fs1-winter-sweatpants",
    name: "Navy Winter Sweatpants",
    price: 350,
    description: "Heavyweight navy sweatpants for winter season.",
    longDescription:
      "Thicker fabric navy sweatpants designed for winter. Elastic waist, drawstring, and ribbed cuffs with IPS crest.",
    sizes: [...availableSizes],
    inStock: true,
    stockCount: 32,
    schoolStage: "fs1-fs2",
    category: "winter-uniform",
    school: "IPS International Public Schools",
    tags: ["winter", "sweatpants", "navy"],
    reviews: defaultReviews,
  },
  {
    id: "fs1-winter-jacket",
    name: "Navy Hooded Winter Jacket",
    price: 600,
    description: "Premium hooded winter jacket in navy blue.",
    longDescription:
      "Our warmest winter piece. Full-zip hooded jacket with fleece lining, side pockets, and IPS crest. Built to last through the coldest months.",
    sizes: [...availableSizes],
    inStock: true,
    stockCount: 20,
    schoolStage: "fs1-fs2",
    category: "winter-uniform",
    school: "IPS International Public Schools",
    isFeatured: true,
    isNew: true,
    tags: ["winter", "jacket", "hooded"],
    reviews: defaultReviews,
  },

  // ========== YEAR 1 TO 6 - STANDARD UNIFORM ==========
  {
    id: "y16-grey-polo-grey-collar",
    name: "Grey Polo Shirt - Grey Collar",
    price: 250,
    description: "Heather grey polo with matching grey collar.",
    longDescription:
      "Primary school grey polo with matching grey ribbed collar. 100% cotton with IPS crest. Comfortable for Year 1 to Year 6 students.",
    sizes: [...availableSizes],
    inStock: true,
    stockCount: 48,
    schoolStage: "year-1-6",
    category: "standard-uniform",
    school: "IPS International Public Schools",
    isFeatured: true,
    tags: ["polo", "grey", "standard"],
    reviews: defaultReviews,
  },
  {
    id: "y16-grey-polo-navy-collar",
    name: "Grey Polo Shirt - Navy Collar",
    price: 250,
    description: "Heather grey polo with navy blue collar.",
    longDescription:
      "Popular grey polo with contrasting navy collar and cuff tipping. Premium cotton construction with school crest.",
    sizes: [...availableSizes],
    inStock: true,
    stockCount: 42,
    schoolStage: "year-1-6",
    category: "standard-uniform",
    school: "IPS International Public Schools",
    isFeatured: true,
    tags: ["polo", "grey", "navy-collar"],
    reviews: defaultReviews,
  },
  {
    id: "y16-navy-sweatpants",
    name: "Navy Sweatpants",
    price: 300,
    description: "Navy jogger sweatpants for primary students.",
    longDescription:
      "Standard navy sweatpants with elastic waist and ankle cuffs. IPS crest embroidery. Durable for daily wear.",
    sizes: [...availableSizes],
    inStock: true,
    stockCount: 50,
    schoolStage: "year-1-6",
    category: "standard-uniform",
    school: "IPS International Public Schools",
    tags: ["sweatpants", "navy", "standard"],
    reviews: defaultReviews,
  },
  // YEAR 1-6 PE
  {
    id: "y16-pe-tshirt",
    name: "Basic White PE T-Shirt",
    price: 180,
    description: "White PE t-shirt for Year 1-6 students.",
    longDescription:
      "Essential PE t-shirt in breathable white cotton with IPS crest. Perfect for sports and physical education classes.",
    sizes: [...availableSizes],
    inStock: true,
    stockCount: 58,
    schoolStage: "year-1-6",
    category: "pe-uniform",
    school: "IPS International Public Schools",
    isNew: true,
    tags: ["pe", "t-shirt", "white"],
    reviews: defaultReviews,
  },
  {
    id: "y16-pe-sweatpants",
    name: "Navy PE Sweatpants",
    price: 300,
    description: "Navy PE sweatpants with side stripes.",
    longDescription:
      "Athletic navy PE sweatpants with white side stripes. Comfortable fit for active primary school students.",
    sizes: [...availableSizes],
    inStock: true,
    stockCount: 38,
    schoolStage: "year-1-6",
    category: "pe-uniform",
    school: "IPS International Public Schools",
    tags: ["pe", "sweatpants", "navy"],
    reviews: defaultReviews,
  },
  // YEAR 1-6 TRAINING
  {
    id: "y16-training-sweatpants",
    name: "Training Sweatpants with Side Stripes",
    price: 400,
    description: "Navy training sweatpants with white stripes.",
    longDescription:
      "Complete your training suit with these striped navy sweatpants. Matches the sports jacket perfectly.",
    sizes: [...availableSizes],
    inStock: true,
    stockCount: 33,
    schoolStage: "year-1-6",
    category: "training-suit",
    school: "IPS International Public Schools",
    tags: ["training", "sweatpants"],
    reviews: defaultReviews,
  },
  {
    id: "y16-sports-jacket",
    name: "Sports Jacket with Sleeve Stripes",
    price: 550,
    description: "Full-zip navy sports jacket with sleeve stripes.",
    longDescription:
      "Premium sports jacket with white sleeve stripes and IPS crest. Full-zip with ribbed collar and cuffs.",
    sizes: [...availableSizes],
    inStock: true,
    stockCount: 25,
    schoolStage: "year-1-6",
    category: "training-suit",
    school: "IPS International Public Schools",
    isFeatured: true,
    tags: ["training", "jacket"],
    reviews: defaultReviews,
  },
  {
    id: "y16-training-pe-tshirt",
    name: "Basic White PE T-Shirt (Training)",
    price: 180,
    description: "White PE t-shirt for training sets.",
    longDescription:
      "Matching PE t-shirt for the complete training suit look. Same quality cotton as our standard PE range.",
    sizes: [...availableSizes],
    inStock: true,
    stockCount: 50,
    schoolStage: "year-1-6",
    category: "training-suit",
    school: "IPS International Public Schools",
    tags: ["training", "t-shirt"],
    reviews: defaultReviews,
  },
  // YEAR 1-6 WINTER
  {
    id: "y16-grey-sweatshirt",
    name: "Grey Sweatshirt",
    price: 400,
    description: "Warm grey sweatshirt for winter season.",
    longDescription:
      "Cozy grey sweatshirt with IPS crest. Soft fleece interior keeps primary students warm on cold school days.",
    sizes: [...availableSizes],
    inStock: true,
    stockCount: 28,
    schoolStage: "year-1-6",
    category: "winter-uniform",
    school: "IPS International Public Schools",
    tags: ["winter", "sweatshirt", "grey"],
    reviews: defaultReviews,
  },
  {
    id: "y16-winter-sweatpants",
    name: "Navy Winter Sweatpants",
    price: 350,
    description: "Heavyweight navy sweatpants for winter.",
    longDescription:
      "Thicker winter-weight navy sweatpants with elastic waist and IPS crest. Built for Egyptian winter months.",
    sizes: [...availableSizes],
    inStock: true,
    stockCount: 30,
    schoolStage: "year-1-6",
    category: "winter-uniform",
    school: "IPS International Public Schools",
    tags: ["winter", "sweatpants"],
    reviews: defaultReviews,
  },
  {
    id: "y16-winter-jacket",
    name: "Navy Hooded Winter Jacket",
    price: 600,
    description: "Premium hooded winter jacket.",
    longDescription:
      "Our top winter piece. Hooded navy jacket with fleece lining, full zip, and IPS crest. Maximum warmth and style.",
    sizes: [...availableSizes],
    inStock: true,
    stockCount: 18,
    schoolStage: "year-1-6",
    category: "winter-uniform",
    school: "IPS International Public Schools",
    isFeatured: true,
    isNew: true,
    tags: ["winter", "jacket", "hooded"],
    reviews: defaultReviews,
  },

  // ========== YEAR 7 AND ABOVE ==========
  {
    id: "y7-mint-polo-matching",
    name: "Mint Blue-Green Polo Shirt - Matching Collar",
    price: 250,
    description: "Mint blue-green polo with matching collar.",
    longDescription:
      "Secondary school polo in our signature mint blue-green. Matching collar design with IPS crest. 100% cotton comfort.",
    sizes: [...availableSizes],
    inStock: true,
    stockCount: 40,
    schoolStage: "year-7-plus",
    category: "standard-uniform",
    school: "IPS International Public Schools",
    isFeatured: true,
    isNew: true,
    tags: ["polo", "mint", "standard"],
    reviews: defaultReviews,
  },
  {
    id: "y7-mint-polo-navy",
    name: "Mint Blue-Green Polo Shirt - Navy Collar",
    price: 250,
    description: "Mint polo with contrasting navy collar.",
    longDescription:
      "Stylish mint blue-green polo with navy collar contrast. Perfect for Year 7+ students. Premium cotton with school crest.",
    sizes: [...availableSizes],
    inStock: true,
    stockCount: 36,
    schoolStage: "year-7-plus",
    category: "standard-uniform",
    school: "IPS International Public Schools",
    isFeatured: true,
    tags: ["polo", "mint", "navy-collar"],
    reviews: defaultReviews,
  },
  {
    id: "y7-navy-sweatpants",
    name: "Navy Sweatpants",
    price: 300,
    description: "Navy sweatpants for secondary students.",
    longDescription:
      "Standard navy jogger sweatpants with IPS crest. Comfortable fit for older students.",
    sizes: [...availableSizes],
    inStock: true,
    stockCount: 44,
    schoolStage: "year-7-plus",
    category: "standard-uniform",
    school: "IPS International Public Schools",
    tags: ["sweatpants", "navy"],
    reviews: defaultReviews,
  },
  // YEAR 7+ PE
  {
    id: "y7-pe-tshirt",
    name: "Basic White PE T-Shirt",
    price: 180,
    description: "White PE t-shirt for secondary students.",
    longDescription:
      "Essential PE t-shirt in white cotton with IPS crest. Lightweight and breathable for sports activities.",
    sizes: [...availableSizes],
    inStock: true,
    stockCount: 55,
    schoolStage: "year-7-plus",
    category: "pe-uniform",
    school: "IPS International Public Schools",
    tags: ["pe", "t-shirt"],
    reviews: defaultReviews,
  },
  {
    id: "y7-pe-sweatpants",
    name: "Navy PE Sweatpants",
    price: 300,
    description: "Navy PE sweatpants with side stripes.",
    longDescription:
      "Athletic PE sweatpants with white side stripes. Durable construction for secondary school sports.",
    sizes: [...availableSizes],
    inStock: true,
    stockCount: 35,
    schoolStage: "year-7-plus",
    category: "pe-uniform",
    school: "IPS International Public Schools",
    tags: ["pe", "sweatpants"],
    reviews: defaultReviews,
  },
  // YEAR 7+ TRAINING
  {
    id: "y7-training-sweatpants",
    name: "Training Sweatpants with Side Stripes",
    price: 400,
    description: "Navy training sweatpants with stripes.",
    longDescription:
      "Premium training sweatpants with dual white side stripes. Pairs with our sports jacket.",
    sizes: [...availableSizes],
    inStock: true,
    stockCount: 30,
    schoolStage: "year-7-plus",
    category: "training-suit",
    school: "IPS International Public Schools",
    tags: ["training", "sweatpants"],
    reviews: defaultReviews,
  },
  {
    id: "y7-sports-jacket",
    name: "Sports Jacket with Sleeve Stripes",
    price: 550,
    description: "Full-zip sports jacket with sleeve stripes.",
    longDescription:
      "Athletic navy jacket with white sleeve stripes and IPS crest. Full-zip bomber style.",
    sizes: [...availableSizes],
    inStock: true,
    stockCount: 22,
    schoolStage: "year-7-plus",
    category: "training-suit",
    school: "IPS International Public Schools",
    isFeatured: true,
    tags: ["training", "jacket"],
    reviews: defaultReviews,
  },
  {
    id: "y7-training-pe-tshirt",
    name: "Basic White PE T-Shirt (Training)",
    price: 180,
    description: "White PE t-shirt for training suit.",
    longDescription:
      "Complete your training suit with this matching white PE t-shirt. Premium cotton quality.",
    sizes: [...availableSizes],
    inStock: true,
    stockCount: 48,
    schoolStage: "year-7-plus",
    category: "training-suit",
    school: "IPS International Public Schools",
    tags: ["training", "t-shirt"],
    reviews: defaultReviews,
  },
  // YEAR 7+ WINTER
  {
    id: "y7-mint-sweatshirt",
    name: "Mint Blue-Green Sweatshirt",
    price: 400,
    description: "Warm mint sweatshirt for winter.",
    longDescription:
      "Cozy mint blue-green sweatshirt with IPS crest. Soft fleece interior for secondary students.",
    sizes: [...availableSizes],
    inStock: true,
    stockCount: 25,
    schoolStage: "year-7-plus",
    category: "winter-uniform",
    school: "IPS International Public Schools",
    isNew: true,
    tags: ["winter", "sweatshirt", "mint"],
    reviews: defaultReviews,
  },
  {
    id: "y7-winter-sweatpants",
    name: "Navy Winter Sweatpants",
    price: 350,
    description: "Heavyweight navy winter sweatpants.",
    longDescription:
      "Winter-weight navy sweatpants with elastic waist and IPS crest. Warm and durable.",
    sizes: [...availableSizes],
    inStock: true,
    stockCount: 28,
    schoolStage: "year-7-plus",
    category: "winter-uniform",
    school: "IPS International Public Schools",
    tags: ["winter", "sweatpants"],
    reviews: defaultReviews,
  },
  {
    id: "y7-winter-jacket",
    name: "Navy Hooded Winter Jacket",
    price: 600,
    description: "Premium hooded winter jacket.",
    longDescription:
      "Top-tier winter jacket with hood, fleece lining, and full zip. IPS crest on chest. Maximum warmth.",
    sizes: [...availableSizes],
    inStock: true,
    stockCount: 15,
    schoolStage: "year-7-plus",
    category: "winter-uniform",
    school: "IPS International Public Schools",
    isFeatured: true,
    tags: ["winter", "jacket", "hooded"],
    reviews: defaultReviews,
  },
];

/** Build full product objects with slug, images, SKU */
export const products: Product[] = productCatalog.map((p, index) => ({
  ...p,
  slug: p.id,
  images: productImages(p.id),
  sku: `MDN-${p.schoolStage.toUpperCase().replace(/-/g, "")}-${String(index + 1).padStart(3, "0")}`,
  createdAt: new Date(2025, 5, 1 + (index % 30)).toISOString(),
}));

/** Get product by slug */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/** Get product by ID */
export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

/** Filter products by school stage */
export function getProductsByStage(stageId: string): Product[] {
  return products.filter((p) => p.schoolStage === stageId);
}

/** Filter products by category */
export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.category === categoryId);
}

/** Get featured products for homepage */
export function getFeaturedProducts(limit = 8): Product[] {
  return products.filter((p) => p.isFeatured).slice(0, limit);
}

/** Get new arrivals */
export function getNewArrivals(limit = 8): Product[] {
  return products
    .filter((p) => p.isNew)
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, limit);
}

/** Get related products */
export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter(
      (p) =>
        p.id !== product.id &&
        (p.category === product.category || p.schoolStage === product.schoolStage)
    )
    .slice(0, limit);
}

/** Search products by name or tags */
export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase().trim();
  if (!q) return products;
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q))
  );
}

/** Sort products */
export type SortOption = "price-asc" | "price-desc" | "newest" | "name";

export function sortProducts(
  productList: Product[],
  sort: SortOption
): Product[] {
  const sorted = [...productList];
  switch (sort) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "newest":
      return sorted.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    case "name":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    default:
      return sorted;
  }
}

/** Average rating */
export function getAverageRating(product: Product): number {
  if (product.reviews.length === 0) return 0;
  return (
    product.reviews.reduce((sum, r) => sum + r.rating, 0) /
    product.reviews.length
  );
}
