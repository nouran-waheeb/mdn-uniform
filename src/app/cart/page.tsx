"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { OrderSummary } from "@/components/checkout/OrderSummary";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { calculateShipping } from "@/data/shipping";

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal } = useCart();
  const shippingCost = calculateShipping(subtotal);

  if (items.length === 0) {
    return (
      <PageLayout>
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <EmptyState
            title="Your cart is empty"
            description="Browse our collection and add uniforms to your cart."
            actionLabel="Start Shopping"
            actionHref="/shop"
          />
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
        <h1 className="mb-8 font-display text-3xl font-bold text-brand-navy dark:text-white">
          Shopping Cart
        </h1>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={`${item.productId}-${item.size}`}
                className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-4 dark:border-gray-800 dark:bg-gray-900"
              >
                <Link
                  href={`/product/${item.slug}`}
                  className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-brand-grey"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </Link>
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <Link
                      href={`/product/${item.slug}`}
                      className="font-semibold text-brand-navy hover:text-brand-mint dark:text-white"
                    >
                      {item.name}
                    </Link>
                    <p className="text-sm text-gray-500">Size: {item.size}</p>
                    <p className="font-bold text-brand-navy dark:text-brand-mint">
                      {formatPrice(item.price)}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.productId, item.size, item.quantity - 1)
                        }
                        className="flex h-8 w-8 items-center justify-center rounded-lg border dark:border-gray-600"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-6 text-center text-sm">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.productId, item.size, item.quantity + 1)
                        }
                        className="flex h-8 w-8 items-center justify-center rounded-lg border dark:border-gray-600"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.productId, item.size)}
                      className="text-red-500 hover:text-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <OrderSummary items={items} shippingCost={shippingCost} />
            <Link href="/checkout">
              <Button size="lg" className="w-full">
                Proceed to Checkout
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/shop">
              <Button variant="outline" className="w-full">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
