"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { ShippingForm } from "@/components/checkout/ShippingForm";
import {
  PaymentMethodSelector,
  CouponInput,
} from "@/components/checkout/PaymentMethodSelector";
import { OrderSummary } from "@/components/checkout/OrderSummary";
import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";
import { calculateShipping } from "@/data/shipping";
import {
  validateCoupon,
  calculateDiscount,
  type Coupon,
} from "@/data/coupons";
import type { PaymentMethodId } from "@/config/payment-methods";
import type { ShippingAddress } from "@/types";
import { getStorageItem, setStorageItem } from "@/lib/utils";

const CHECKOUT_KEY = "mdn-checkout";

export default function CheckoutPage() {
  const { items, subtotal } = useCart();
  const router = useRouter();
  const [step, setStep] = useState<"shipping" | "payment">("shipping");
  const [shipping, setShipping] = useState<ShippingAddress | null>(
    getStorageItem<ShippingAddress | null>(CHECKOUT_KEY, null)
  );
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodId>("cod");
  const [coupon, setCoupon] = useState<Coupon | null>(null);
  const [discount, setDiscount] = useState(0);

  const shippingCost = shipping
    ? calculateShipping(subtotal, shipping.governorate)
    : calculateShipping(subtotal);

  const handleShippingSubmit = (data: ShippingAddress) => {
    setShipping(data);
    setStorageItem(CHECKOUT_KEY, data);
    setStep("payment");
    window.scrollTo(0, 0);
  };

  const handleCouponApply = (code: string) => {
    const result = validateCoupon(code, subtotal);
    if (result.valid && result.coupon) {
      setCoupon(result.coupon);
      setDiscount(calculateDiscount(subtotal, result.coupon));
      return { success: true, message: `Coupon "${result.coupon.code}" applied!` };
    }
    return { success: false, message: result.error || "Invalid coupon" };
  };

  const handlePlaceOrder = () => {
    if (!shipping) return;
    router.push(
      `/order-confirmation?payment=${paymentMethod}&coupon=${coupon?.code || ""}`
    );
  };

  if (items.length === 0) {
    return (
      <PageLayout>
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <EmptyState
            title="Nothing to checkout"
            description="Add items to your cart before checking out."
            actionLabel="Go to Shop"
            actionHref="/shop"
          />
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
        <h1 className="mb-2 font-display text-3xl font-bold text-brand-navy dark:text-white">
          Checkout
        </h1>

        {/* Steps indicator */}
        <div className="mb-8 flex gap-4 text-sm">
          <span className={step === "shipping" ? "font-bold text-brand-mint" : "text-gray-400"}>
            1. Shipping
          </span>
          <span className="text-gray-300">→</span>
          <span className={step === "payment" ? "font-bold text-brand-mint" : "text-gray-400"}>
            2. Payment
          </span>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {step === "shipping" ? (
              <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <h2 className="mb-4 text-xl font-bold">Shipping Information</h2>
                <ShippingForm
                  initialData={shipping || undefined}
                  onSubmit={handleShippingSubmit}
                  submitLabel="Continue to Payment"
                />
              </div>
            ) : (
              <div className="space-y-6">
                <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-xl font-bold">Shipping Address</h2>
                    <button
                      onClick={() => setStep("shipping")}
                      className="text-sm text-brand-mint hover:underline"
                    >
                      Edit
                    </button>
                  </div>
                  {shipping && (
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {shipping.customerName}<br />
                      {shipping.street}, Bldg {shipping.buildingNumber}
                      {shipping.floor && `, Floor ${shipping.floor}`}
                      {shipping.apartmentNumber && `, Apt ${shipping.apartmentNumber}`}<br />
                      {shipping.district}, {shipping.city}, {shipping.governorate}<br />
                      {shipping.phone} | {shipping.email}
                    </p>
                  )}
                </div>

                <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h2 className="mb-4 text-xl font-bold">Payment Method</h2>
                  <PaymentMethodSelector
                    selected={paymentMethod}
                    onSelect={setPaymentMethod}
                  />
                </div>

                <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h2 className="mb-4 text-xl font-bold">Discount Code</h2>
                  <CouponInput onApply={handleCouponApply} />
                </div>

                <Button size="lg" onClick={handlePlaceOrder} className="w-full">
                  Place Order
                </Button>
              </div>
            )}
          </div>

          <div>
            <OrderSummary
              items={items}
              shippingCost={shippingCost}
              discount={discount}
              coupon={coupon}
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
