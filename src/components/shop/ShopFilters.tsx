"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { schoolStages, productCategories } from "@/data/categories";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface ShopFiltersProps {
  onClose?: () => void;
  isMobile?: boolean;
}

export function ShopFilters({ onClose, isMobile }: ShopFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentStage = searchParams.get("schoolStage") || "";
  const currentCategory = searchParams.get("category") || "";
  const currentSort = searchParams.get("sort") || "";
  const currentSearch = searchParams.get("search") || "";

  const updateFilter = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      router.push(`/shop?${params.toString()}`);
    },
    [router, searchParams]
  );

  const clearFilters = () => {
    router.push("/shop");
    onClose?.();
  };

  const hasFilters = currentStage || currentCategory || currentSort || currentSearch;

  return (
    <div className={cn("space-y-6", isMobile && "p-4")}>
      {isMobile && (
        <div className="flex items-center justify-between">
          <h3 className="flex items-center gap-2 text-lg font-bold text-brand-navy dark:text-white">
            <SlidersHorizontal className="h-5 w-5" /> Filters
          </h3>
          <button onClick={onClose}>
            <X className="h-5 w-5" />
          </button>
        </div>
      )}

      {/* Sort */}
      <div>
        <h4 className="mb-3 text-sm font-semibold text-brand-navy dark:text-white">
          Sort By
        </h4>
        <div className="space-y-2">
          {[
            { value: "", label: "Default" },
            { value: "price-asc", label: "Price: Low to High" },
            { value: "price-desc", label: "Price: High to Low" },
            { value: "newest", label: "Newest" },
            { value: "name", label: "Name A-Z" },
          ].map((opt) => (
            <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="sort"
                checked={currentSort === opt.value}
                onChange={() => updateFilter("sort", opt.value)}
                className="accent-brand-mint"
              />
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {opt.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* School Stage */}
      <div>
        <h4 className="mb-3 text-sm font-semibold text-brand-navy dark:text-white">
          School Stage
        </h4>
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="stage"
              checked={!currentStage}
              onChange={() => updateFilter("schoolStage", "")}
              className="accent-brand-mint"
            />
            <span className="text-sm text-gray-600 dark:text-gray-300">All Stages</span>
          </label>
          {schoolStages.map((stage) => (
            <label key={stage.id} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="stage"
                checked={currentStage === stage.slug}
                onChange={() => updateFilter("schoolStage", stage.slug)}
                className="accent-brand-mint"
              />
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {stage.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Category */}
      <div>
        <h4 className="mb-3 text-sm font-semibold text-brand-navy dark:text-white">
          Category
        </h4>
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="category"
              checked={!currentCategory}
              onChange={() => updateFilter("category", "")}
              className="accent-brand-mint"
            />
            <span className="text-sm text-gray-600 dark:text-gray-300">All Categories</span>
          </label>
          {productCategories.map((cat) => (
            <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                checked={currentCategory === cat.slug}
                onChange={() => updateFilter("category", cat.slug)}
                className="accent-brand-mint"
              />
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {cat.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {hasFilters && (
        <Button variant="outline" onClick={clearFilters} className="w-full">
          Clear All Filters
        </Button>
      )}
    </div>
  );
}
