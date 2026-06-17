"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, Trash2 } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { useWishlist } from "@/context/WishlistContext";
import { formatPrice } from "@/lib/utils";

export default function WishlistPage() {
  const { items, removeItem } = useWishlist();

  if (items.length === 0) {
    return (
      <PageLayout>
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <EmptyState
            title="Your wishlist is empty"
            description="Save your favorite uniforms here for later."
            actionLabel="Browse Shop"
            actionHref="/shop"
            icon={<Heart className="h-12 w-12 text-brand-navy/40" />}
          />
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
        <h1 className="mb-8 font-display text-3xl font-bold text-brand-navy dark:text-white">
          Wishlist ({items.length})
        </h1>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.productId}
              className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-4 dark:border-gray-800 dark:bg-gray-900"
            >
              <Link
                href={`/product/${item.slug}`}
                className="relative h-28 w-28 shrink-0 overflow-hidden rounded-xl bg-brand-grey"
              >
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </Link>
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <Link
                    href={`/product/${item.slug}`}
                    className="font-semibold text-brand-navy hover:text-brand-mint dark:text-white"
                  >
                    {item.name}
                  </Link>
                  <p className="font-bold text-brand-mint">{formatPrice(item.price)}</p>
                </div>
                <div className="flex gap-2">
                  <Link href={`/product/${item.slug}`}>
                    <Button size="sm" variant="primary">
                      <ShoppingBag className="h-3 w-3" /> View
                    </Button>
                  </Link>
                  <button
                    onClick={() => removeItem(item.productId)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
