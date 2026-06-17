"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SlidersHorizontal } from "lucide-react";
import { ProductGrid } from "@/components/product/ProductGrid";
import { ShopFilters } from "@/components/shop/ShopFilters";
import { EmptyState } from "@/components/ui/EmptyState";
import {
  products,
  searchProducts,
  sortProducts,
  type SortOption,
} from "@/data/products";
import { getSchoolStageName, getCategoryName } from "@/data/categories";

export default function ShopPageClient() {
  const searchParams = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);

  const search = searchParams.get("search") || "";
  const schoolStage = searchParams.get("schoolStage") || "";
  const category = searchParams.get("category") || "";
  const sort = (searchParams.get("sort") || "") as SortOption | "";

  const filteredProducts = useMemo(() => {
    let result = search ? searchProducts(search) : [...products];
    if (schoolStage) {
      result = result.filter((p) => p.schoolStage === schoolStage);
    }
    if (category) {
      result = result.filter((p) => p.category === category);
    }
    if (sort) {
      result = sortProducts(result, sort);
    }
    return result;
  }, [search, schoolStage, category, sort]);

  const pageTitle = search
    ? `Search: "${search}"`
    : schoolStage
      ? getSchoolStageName(schoolStage)
      : category
        ? getCategoryName(category)
        : "All Products";

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-brand-navy dark:text-white md:text-4xl">
          Shop
        </h1>
        <p className="mt-1 text-gray-500 dark:text-gray-400">{pageTitle}</p>
        <p className="mt-1 text-sm text-gray-400">
          {filteredProducts.length} products
        </p>
      </div>

      <div className="flex gap-8">
        <aside className="hidden w-64 shrink-0 lg:block">
          <div className="sticky top-28 rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <ShopFilters />
          </div>
        </aside>

        <div className="flex-1">
          <button
            onClick={() => setFiltersOpen(true)}
            className="mb-4 flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium lg:hidden dark:border-gray-700"
          >
            <SlidersHorizontal className="h-4 w-4" /> Filters & Sort
          </button>

          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <EmptyState
              title="No products found"
              description="Try adjusting your filters or search terms."
              actionLabel="View All Products"
              actionHref="/shop"
            />
          )}
        </div>
      </div>

      {filtersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setFiltersOpen(false)}
          />
          <div className="absolute bottom-0 left-0 right-0 max-h-[80vh] overflow-y-auto rounded-t-2xl bg-white dark:bg-gray-900">
            <ShopFilters isMobile onClose={() => setFiltersOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
}
