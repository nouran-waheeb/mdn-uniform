import type { Product } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { cn } from "@/lib/utils";

interface ProductGridProps {
  products: Product[];
  className?: string;
}

export function ProductGrid({ products, className }: ProductGridProps) {
  if (products.length === 0) return null;

  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4",
        className
      )}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
