"use client";

import { formatPrice, calculateOrderTotals } from "@/lib/utils";
import type { CartItem } from "@/types";
import type { Coupon } from "@/data/coupons";

interface OrderSummaryProps {
  items: CartItem[];
  shippingCost?: number;
  discount?: number;
  coupon?: Coupon | null;
  showItems?: boolean;
}

export function OrderSummary({
  items,
  shippingCost = 0,
  discount = 0,
  coupon,
  showItems = true,
}: OrderSummaryProps) {
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const totals = calculateOrderTotals(subtotal, shippingCost, discount);

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
      <h3 className="mb-4 text-lg font-bold text-brand-navy dark:text-white">
        Order Summary
      </h3>

      {showItems && items.length > 0 && (
        <div className="mb-4 max-h-48 space-y-3 overflow-y-auto border-b border-gray-100 pb-4 dark:border-gray-800">
          {items.map((item) => (
            <div
              key={`${item.productId}-${item.size}`}
              className="flex justify-between text-sm"
            >
              <span className="text-gray-600 dark:text-gray-300">
                {item.name} ({item.size}) × {item.quantity}
              </span>
              <span className="font-medium text-brand-navy dark:text-white">
                {formatPrice(item.price * item.quantity)}
              </span>
            </div>
          ))}
        </div>
      )}

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">Subtotal</span>
          <span>{formatPrice(totals.subtotal)}</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-green-600">
            <span>Discount {coupon ? `(${coupon.code})` : ""}</span>
            <span>-{formatPrice(discount)}</span>
          </div>
        )}
        <div className="flex justify-between">
          <span className="text-gray-500">Shipping</span>
          <span>
            {shippingCost === 0 ? "Free" : formatPrice(shippingCost)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Tax (14% VAT)</span>
          <span>{formatPrice(totals.tax)}</span>
        </div>
        <div className="flex justify-between border-t border-gray-100 pt-2 text-lg font-bold dark:border-gray-800">
          <span>Total</span>
          <span className="text-brand-navy dark:text-brand-mint">
            {formatPrice(totals.total)}
          </span>
        </div>
      </div>
    </div>
  );
}
