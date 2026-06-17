"use client";

import { PageLayout } from "@/components/layout/PageLayout";
import { products } from "@/data/products";
import { useAuth } from "@/context/AuthContext";
import { formatPrice } from "@/lib/utils";
import {
  Package,
  ShoppingCart,
  Users,
  TrendingUp,
  DollarSign,
  BarChart3,
} from "lucide-react";

/** Admin Dashboard Mockup - demo only, no real admin backend */
export default function AdminPage() {
  const { orders } = useAuth();

  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);
  const stats = [
    { label: "Total Products", value: products.length, icon: Package, color: "text-blue-500" },
    { label: "Total Orders", value: orders.length, icon: ShoppingCart, color: "text-green-500" },
    { label: "Revenue (Demo)", value: formatPrice(totalRevenue), icon: DollarSign, color: "text-brand-orange" },
    { label: "In Stock", value: products.filter((p) => p.inStock).length, icon: TrendingUp, color: "text-brand-mint" },
  ];

  return (
    <PageLayout hideMobileNav>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        {/* Admin header */}
        <div className="border-b border-gray-200 bg-brand-navy px-6 py-4 dark:border-gray-800">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
              <p className="text-sm text-gray-400">M.D.N Uniform — Demo Mockup</p>
            </div>
            <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-xs font-semibold text-yellow-400">
              DEMO MODE
            </span>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-8 md:px-6">
          {/* Stats */}
          <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">{stat.label}</p>
                      <p className="mt-1 text-2xl font-bold text-brand-navy dark:text-white">
                        {stat.value}
                      </p>
                    </div>
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Recent orders */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h2 className="mb-4 flex items-center gap-2 font-bold">
                <BarChart3 className="h-5 w-5 text-brand-mint" /> Recent Orders
              </h2>
              {orders.length === 0 ? (
                <p className="text-sm text-gray-500">No orders yet. Place a test order to see data here.</p>
              ) : (
                <div className="space-y-3">
                  {orders.slice(0, 5).map((order) => (
                    <div
                      key={order.id}
                      className="flex justify-between border-b border-gray-50 py-2 last:border-0 dark:border-gray-800"
                    >
                      <div>
                        <p className="text-sm font-medium">{order.orderNumber}</p>
                        <p className="text-xs text-gray-500">{order.shipping.customerName}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold">{formatPrice(order.total)}</p>
                        <p className="text-xs capitalize text-gray-500">{order.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product overview */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h2 className="mb-4 flex items-center gap-2 font-bold">
                <Users className="h-5 w-5 text-brand-mint" /> Product Overview
              </h2>
              <div className="space-y-2">
                {["standard-uniform", "pe-uniform", "training-suit", "winter-uniform"].map(
                  (cat) => {
                    const count = products.filter((p) => p.category === cat).length;
                    return (
                      <div key={cat} className="flex justify-between text-sm">
                        <span className="capitalize text-gray-600 dark:text-gray-300">
                          {cat.replace(/-/g, " ")}
                        </span>
                        <span className="font-semibold">{count} products</span>
                      </div>
                    );
                  }
                )}
              </div>
              <p className="mt-4 text-xs text-gray-400">
                Edit products in data/products.ts · Prices, names, and descriptions are all managed from data files.
              </p>
            </div>
          </div>

          {/* Admin note */}
          <div className="mt-8 rounded-2xl border border-yellow-200 bg-yellow-50 p-6 dark:border-yellow-800 dark:bg-yellow-900/20">
            <h3 className="font-bold text-yellow-800 dark:text-yellow-400">
              Admin Dashboard Mockup
            </h3>
            <p className="mt-2 text-sm text-yellow-700 dark:text-yellow-300">
              This is a frontend demo dashboard. To manage products, edit the files in{" "}
              <code className="rounded bg-yellow-100 px-1 dark:bg-yellow-900">/data</code> and{" "}
              <code className="rounded bg-yellow-100 px-1 dark:bg-yellow-900">/config</code>.
              A real admin panel can be connected when a backend is added.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
