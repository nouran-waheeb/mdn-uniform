"use client";

import { Suspense, useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { CheckCircle, Package, Truck } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import {
  generateOrderNumber,
  generateTrackingNumber,
  calculateOrderTotals,
  getStorageItem,
  setStorageItem,
} from "@/lib/utils";
import { calculateShipping, getDeliveryEstimate } from "@/data/shipping";
import { validateCoupon, calculateDiscount } from "@/data/coupons";
import type { ShippingAddress, Order } from "@/types";

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { items, subtotal, clearCart } = useCart();
  const { addOrder } = useAuth();
  const processed = useRef(false);

  const paymentMethod = searchParams.get("payment") || "cod";
  const couponCode = searchParams.get("coupon") || "";

  const lastOrder = getStorageItem<{ orderNumber: string; trackingNumber: string } | null>(
    "mdn-last-order",
    null
  );

  useEffect(() => {
    if (processed.current) return;

    if (items.length === 0) {
      if (!lastOrder) router.push("/shop");
      return;
    }

    const shipping = getStorageItem<ShippingAddress | null>("mdn-checkout", null);
    if (!shipping) {
      router.push("/checkout");
      return;
    }

    processed.current = true;

    let discount = 0;
    let coupon: string | undefined;
    if (couponCode) {
      const result = validateCoupon(couponCode, subtotal);
      if (result.valid && result.coupon) {
        discount = calculateDiscount(subtotal, result.coupon);
        coupon = result.coupon.code;
      }
    }

    const shippingCost = calculateShipping(subtotal, shipping.governorate);
    const totals = calculateOrderTotals(subtotal, shippingCost, discount);
    const orderNumber = generateOrderNumber();
    const trackingNumber = generateTrackingNumber();

    const order: Order = {
      id: `order-${Date.now()}`,
      orderNumber,
      trackingNumber,
      items: [...items],
      shipping,
      paymentMethod,
      subtotal: totals.subtotal,
      shippingCost: totals.shippingCost,
      tax: totals.tax,
      discount: totals.discount,
      couponCode: coupon,
      total: totals.total,
      status: "confirmed",
      createdAt: new Date().toISOString(),
      estimatedDelivery: getDeliveryEstimate(shipping.governorate),
    };

    addOrder(order);
    setStorageItem("mdn-last-order", { orderNumber, trackingNumber });
    clearCart();
  }, [items, subtotal, paymentMethod, couponCode, addOrder, clearCart, router, lastOrder]);

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 text-center md:px-6">
      <div className="mb-6 flex justify-center">
        <div className="rounded-full bg-green-100 p-4 dark:bg-green-900/30">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>
      </div>

      <h1 className="font-display text-3xl font-bold text-brand-navy dark:text-white">
        Order Confirmed!
      </h1>
      <p className="mt-2 text-gray-500">
        Thank you for shopping with M.D.N Uniform. Your order has been placed successfully.
      </p>

      {lastOrder && (
        <div className="mt-8 space-y-4 rounded-2xl border border-gray-100 bg-white p-6 text-left dark:border-gray-800 dark:bg-gray-900">
          <div className="flex items-center gap-3">
            <Package className="h-5 w-5 text-brand-mint" />
            <div>
              <p className="text-sm text-gray-500">Order Number</p>
              <p className="font-bold text-brand-navy dark:text-white">
                {lastOrder.orderNumber}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Truck className="h-5 w-5 text-brand-mint" />
            <div>
              <p className="text-sm text-gray-500">Tracking Number</p>
              <p className="font-bold text-brand-navy dark:text-white">
                {lastOrder.trackingNumber}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link href={`/order-tracking?tracking=${lastOrder?.trackingNumber || ""}`}>
          <Button>Track Order</Button>
        </Link>
        <Link href="/shop">
          <Button variant="outline">Continue Shopping</Button>
        </Link>
      </div>
    </div>
  );
}

export default function OrderConfirmationPage() {
  return (
    <PageLayout>
      <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
        <ConfirmationContent />
      </Suspense>
    </PageLayout>
  );
}
