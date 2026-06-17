"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Minus, Plus, Heart, ShoppingBag, Star, Check } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ProductGrid } from "@/components/product/ProductGrid";
import {
  getProductBySlug,
  getRelatedProducts,
  getAverageRating,
} from "@/data/products";
import { getSchoolStageName, getCategoryName } from "@/data/categories";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { cn } from "@/lib/utils";

export default function ProductPageClient({ slug }: { slug: string }) {
  const product = getProductBySlug(slug);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const { isInWishlist, toggleItem } = useWishlist();

  if (!product) notFound();

  const related = getRelatedProducts(product);
  const avgRating = getAverageRating(product);
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      size: selectedSize,
      quantity,
      image: product.images[0],
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <PageLayout>
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-brand-mint">Home</Link>
          {" / "}
          <Link href="/shop" className="hover:text-brand-mint">Shop</Link>
          {" / "}
          <span className="text-brand-navy dark:text-white">{product.name}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-brand-grey dark:bg-gray-800">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="mt-4 flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={cn(
                    "relative h-20 w-20 overflow-hidden rounded-xl border-2 transition-all",
                    selectedImage === i
                      ? "border-brand-mint"
                      : "border-transparent opacity-70 hover:opacity-100"
                  )}
                >
                  <Image src={img} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-2 flex gap-2">
              {product.isNew && <Badge variant="new">New</Badge>}
              <Badge variant="default">{getCategoryName(product.category)}</Badge>
            </div>

            <h1 className="font-display text-3xl font-bold text-brand-navy dark:text-white">
              {product.name}
            </h1>

            <div className="mt-2 flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "h-4 w-4",
                      i < Math.round(avgRating)
                        ? "fill-brand-orange text-brand-orange"
                        : "text-gray-300"
                    )}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">
                ({product.reviews.length} reviews)
              </span>
            </div>

            <p className="mt-4 text-3xl font-bold text-brand-navy dark:text-brand-mint">
              {formatPrice(product.price)}
            </p>

            <p className="mt-4 text-gray-600 dark:text-gray-300">
              {product.longDescription}
            </p>

            <div className="mt-4 space-y-1 text-sm text-gray-500">
              <p>SKU: {product.sku}</p>
              <p>Stage: {getSchoolStageName(product.schoolStage)}</p>
              <p>
                Stock:{" "}
                {product.inStock ? (
                  <span className="text-green-600">{product.stockCount} available</span>
                ) : (
                  <span className="text-red-500">Out of stock</span>
                )}
              </p>
            </div>

            <div className="mt-6">
              <p className="mb-3 text-sm font-semibold">Select Size</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "flex h-10 min-w-[44px] items-center justify-center rounded-lg border-2 px-3 text-sm font-medium transition-all",
                      selectedSize === size
                        ? "border-brand-navy bg-brand-navy text-white dark:border-brand-mint dark:bg-brand-mint dark:text-brand-navy"
                        : "border-gray-200 hover:border-brand-mint dark:border-gray-600"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="mb-3 text-sm font-semibold">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-600"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-8 text-center font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-600"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                size="lg"
                onClick={handleAddToCart}
                disabled={!selectedSize || !product.inStock}
                className="flex-1 sm:flex-none"
              >
                {added ? (
                  <>
                    <Check className="h-4 w-4" /> Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingBag className="h-4 w-4" /> Add to Cart
                  </>
                )}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  toggleItem({
                    productId: product.id,
                    slug: product.slug,
                    name: product.name,
                    price: product.price,
                    image: product.images[0],
                  })
                }
              >
                <Heart
                  className={cn(
                    "h-4 w-4",
                    inWishlist && "fill-red-500 text-red-500"
                  )}
                />
                Wishlist
              </Button>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="mb-6 font-display text-2xl font-bold text-brand-navy dark:text-white">
            Customer Reviews
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {product.reviews.map((review) => (
              <div
                key={review.id}
                className="rounded-xl border border-gray-100 p-4 dark:border-gray-800"
              >
                <div className="mb-2 flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-brand-orange text-brand-orange" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {review.comment}
                </p>
                <p className="mt-2 text-xs font-semibold">{review.author}</p>
                <p className="text-xs text-gray-400">{review.date}</p>
              </div>
            ))}
          </div>
        </section>

        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="mb-6 font-display text-2xl font-bold text-brand-navy dark:text-white">
              Related Products
            </h2>
            <ProductGrid products={related} />
          </section>
        )}
      </div>
    </PageLayout>
  );
}
