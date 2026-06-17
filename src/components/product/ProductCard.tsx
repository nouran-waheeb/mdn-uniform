"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, ShoppingBag } from "lucide-react";
import type { Product } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { useWishlist } from "@/context/WishlistContext";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { isInWishlist, toggleItem } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={cn("group", className)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-brand-grey dark:bg-gray-800">
        <Link href={`/product/${product.slug}`}>
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        </Link>

        {/* Badges */}
        <div className="absolute left-3 top-3 flex flex-col gap-1">
          {product.isNew && <Badge variant="new">New</Badge>}
          {!product.inStock && <Badge variant="out-of-stock">Sold Out</Badge>}
        </div>

        {/* Wishlist */}
        <button
          onClick={() =>
            toggleItem({
              productId: product.id,
              slug: product.slug,
              name: product.name,
              price: product.price,
              image: product.images[0],
            })
          }
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-sm transition-transform hover:scale-110 dark:bg-gray-900/90"
          aria-label="Add to wishlist"
        >
          <Heart
            className={cn(
              "h-4 w-4",
              inWishlist
                ? "fill-red-500 text-red-500"
                : "text-brand-navy dark:text-white"
            )}
          />
        </button>

        {/* Quick add overlay */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
          <Link
            href={`/product/${product.slug}`}
            className="flex w-full items-center justify-center gap-2 bg-brand-navy py-3 text-sm font-semibold text-white dark:bg-brand-mint dark:text-brand-navy"
          >
            <ShoppingBag className="h-4 w-4" />
            View Product
          </Link>
        </div>
      </div>

      <div className="mt-3 space-y-1">
        <Link href={`/product/${product.slug}`}>
          <h3 className="line-clamp-2 text-sm font-semibold text-brand-navy transition-colors hover:text-brand-mint dark:text-white">
            {product.name}
          </h3>
        </Link>
        <p className="text-base font-bold text-brand-navy dark:text-brand-mint">
          {formatPrice(product.price)}
        </p>
      </div>
    </motion.div>
  );
}
