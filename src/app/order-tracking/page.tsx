"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search, Package, Truck, CheckCircle, Clock } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useAuth } from "@/context/AuthContext";
import { formatPrice } from "@/lib/utils";

const statusSteps = [
  { key: "confirmed", label: "Confirmed", icon: CheckCircle },
  { key: "processing", label: "Processing", icon: Clock },
  { key: "shipped", label: "Shipped", icon: Truck },
  { key: "delivered", label: "Delivered", icon: Package },
];

function TrackingContent() {
  const searchParams = useSearchParams();
  const initialTracking = searchParams.get("tracking") || "";
  const [trackingInput, setTrackingInput] = useState(initialTracking);
  const [searched, setSearched] = useState(initialTracking);
  const { getOrderByTracking, orders } = useAuth();

  const order = searched ? getOrderByTracking(searched) : undefined;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(trackingInput);
  };

  const currentStepIndex = order
    ? statusSteps.findIndex((s) => s.key === order.status)
    : -1;

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 md:px-6 md:py-12">
      <h1 className="mb-2 font-display text-3xl font-bold text-brand-navy dark:text-white">
        Order Tracking
      </h1>
      <p className="mb-8 text-gray-500">
        Enter your tracking number to check order status.
      </p>

      <form onSubmit={handleSearch} className="mb-8 flex gap-3">
        <Input
          placeholder="Enter tracking number (e.g. TRK...)"
          value={trackingInput}
          onChange={(e) => setTrackingInput(e.target.value)}
          className="flex-1"
        />
        <Button type="submit">
          <Search className="h-4 w-4" /> Track
        </Button>
      </form>

      {searched && !order && (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center dark:border-red-800 dark:bg-red-900/20">
          <p className="text-red-600 dark:text-red-400">
            No order found with tracking number &ldquo;{searched}&rdquo;.
          </p>
          {orders.length > 0 && (
            <p className="mt-2 text-sm text-gray-500">
              Try: {orders[0].trackingNumber}
            </p>
          )}
        </div>
      )}

      {order && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-sm text-gray-500">Order Number</p>
                <p className="font-bold">{order.orderNumber}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Tracking Number</p>
                <p className="font-bold">{order.trackingNumber}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Total</p>
                <p className="font-bold">{formatPrice(order.total)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Estimated Delivery</p>
                <p className="font-bold">{order.estimatedDelivery}</p>
              </div>
            </div>
          </div>

          {/* Status timeline */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-6 font-bold">Order Status</h3>
            <div className="flex justify-between">
              {statusSteps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index <= currentStepIndex;
                return (
                  <div key={step.key} className="flex flex-col items-center text-center">
                    <div
                      className={`mb-2 flex h-10 w-10 items-center justify-center rounded-full ${
                        isActive
                          ? "bg-brand-mint text-brand-navy"
                          : "bg-gray-100 text-gray-400 dark:bg-gray-800"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span
                      className={`text-xs font-medium ${
                        isActive ? "text-brand-navy dark:text-white" : "text-gray-400"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Items */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-4 font-bold">Order Items</h3>
            {order.items.map((item) => (
              <div
                key={`${item.productId}-${item.size}`}
                className="flex justify-between border-b border-gray-50 py-2 last:border-0 dark:border-gray-800"
              >
                <span className="text-sm">
                  {item.name} ({item.size}) × {item.quantity}
                </span>
                <span className="text-sm font-medium">
                  {formatPrice(item.price * item.quantity)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function OrderTrackingPage() {
  return (
    <PageLayout>
      <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
        <TrackingContent />
      </Suspense>
    </PageLayout>
  );
}
