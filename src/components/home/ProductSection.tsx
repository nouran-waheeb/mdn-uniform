import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";
import { ProductGrid } from "@/components/product/ProductGrid";

interface ProductSectionProps {
  title: string;
  subtitle?: string;
  products: Product[];
  href?: string;
  linkText?: string;
}

export function ProductSection({
  title,
  subtitle,
  products,
  href,
  linkText = "View All",
}: ProductSectionProps) {
  if (products.length === 0) return null;

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold text-brand-navy dark:text-white md:text-4xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-2 text-gray-500 dark:text-gray-400">{subtitle}</p>
            )}
          </div>
          {href && (
            <Link
              href={href}
              className="hidden items-center gap-1 text-sm font-semibold text-brand-mint hover:underline sm:flex"
            >
              {linkText} <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
        <ProductGrid products={products} />
        {href && (
          <div className="mt-8 text-center sm:hidden">
            <Link
              href={href}
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand-mint"
            >
              {linkText} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
