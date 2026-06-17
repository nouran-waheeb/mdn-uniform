"use client";

import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/context/AuthContext";
import { formatPrice } from "@/lib/utils";
import { Package } from "lucide-react";

export default function OrderHistoryPage() {
  const { orders, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <PageLayout>
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <EmptyState
            title="Please log in"
            description="Sign in to view your order history."
            actionLabel="Login"
            actionHref="/login"
          />
        </div>
      </PageLayout>
    );
  }

  if (orders.length === 0) {
    return (
      <PageLayout>
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <EmptyState
            title="No orders yet"
            description="Your order history will appear here after your first purchase."
            actionLabel="Start Shopping"
            actionHref="/shop"
            icon={<Package className="h-12 w-12 text-brand-navy/40" />}
          />
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="mx-auto max-w-4xl px-4 py-8 md:px-6 md:py-12">
        <h1 className="mb-8 font-display text-3xl font-bold text-brand-navy dark:text-white">
          Order History
        </h1>

        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-bold text-brand-navy dark:text-white">
                    {order.orderNumber}
                  </p>
                  <p className="text-sm text-gray-500">
                    {new Date(order.createdAt).toLocaleDateString("en-EG")}
                  </p>
                  <p className="text-sm text-gray-500">
                    {order.items.length} item(s) · {formatPrice(order.total)}
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block rounded-full bg-brand-mint/20 px-3 py-1 text-xs font-semibold capitalize text-brand-navy">
                    {order.status}
                  </span>
                  <p className="mt-1 text-xs text-gray-500">
                    Track: {order.trackingNumber}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex gap-3">
                <Link href={`/order-tracking?tracking=${order.trackingNumber}`}>
                  <Button size="sm" variant="outline">Track Order</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
