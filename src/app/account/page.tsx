"use client";

import Link from "next/link";
import { User, Package, Heart, LogOut, Settings } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/context/AuthContext";
import { siteSettings } from "@/config/site-settings";

export default function AccountPage() {
  const { user, isAuthenticated, logout, orders } = useAuth();

  if (!isAuthenticated || !user) {
    return (
      <PageLayout>
        <div className="mx-auto max-w-md px-4 py-16 text-center md:px-6">
          <User className="mx-auto mb-4 h-16 w-16 text-brand-navy/30" />
          <h1 className="mb-2 font-display text-2xl font-bold text-brand-navy dark:text-white">
            My Account
          </h1>
          <p className="mb-6 text-gray-500">Sign in to view your account and orders.</p>
          <div className="flex justify-center gap-3">
            <Link href="/login"><Button>Login</Button></Link>
            <Link href="/register"><Button variant="outline">Register</Button></Link>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="mx-auto max-w-4xl px-4 py-8 md:px-6 md:py-12">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="font-display text-3xl font-bold text-brand-navy dark:text-white">
              My Account
            </h1>
            <p className="text-gray-500">Welcome back, {user.name}</p>
          </div>
          <Button variant="ghost" onClick={logout}>
            <LogOut className="h-4 w-4" /> Logout
          </Button>
        </div>

        <div className="mb-6 rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <h2 className="mb-4 flex items-center gap-2 font-bold">
            <Settings className="h-5 w-5 text-brand-mint" /> Profile
          </h2>
          <div className="grid gap-2 text-sm">
            <p><span className="text-gray-500">Name:</span> {user.name}</p>
            <p><span className="text-gray-500">Email:</span> {user.email}</p>
            <p><span className="text-gray-500">Phone:</span> {user.phone}</p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <Link
            href="/order-history"
            className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-6 transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
          >
            <Package className="h-8 w-8 text-brand-mint" />
            <div>
              <p className="font-bold">Orders</p>
              <p className="text-sm text-gray-500">{orders.length} orders</p>
            </div>
          </Link>
          <Link
            href="/wishlist"
            className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-6 transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
          >
            <Heart className="h-8 w-8 text-brand-mint" />
            <div>
              <p className="font-bold">Wishlist</p>
              <p className="text-sm text-gray-500">Saved items</p>
            </div>
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-6 transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
          >
            <User className="h-8 w-8 text-brand-mint" />
            <div>
              <p className="font-bold">Support</p>
              <p className="text-sm text-gray-500">{siteSettings.contact.phone}</p>
            </div>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
